#!/usr/bin/env node
// All Agentic Skills: sync every SKILL.md from the sources in sources.json into one catalog.
//
// - Skills whose licence allows it (MIT, Apache-2.0, BSD, ISC) are copied into skills/<source-id>/<skill>/
//   together with the licence and a SOURCE.md that points back to the original.
// - Everything else is listed in the catalog with a link to the original, but not copied.
// - Your own skills in skills/mahesh-surada/ are never touched; they are just added to the catalog.
//
// Usage: node scripts/sync.mjs            (clones each source into a temp folder)
//        SRC_CACHE=/path node scripts/sync.mjs   (reuse existing clones named owner_repo)
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OWN = 'mahesh-surada';
const MAX_FILE = 5 * 1024 * 1024;           // skip single files over 5 MB
const MAX_SKILL = 15 * 1024 * 1024;         // and skills over 15 MB (link to them instead)
const { sources } = JSON.parse(fs.readFileSync(path.join(ROOT, 'sources.json'), 'utf8'));

/* ---------- helpers ---------- */
const sh = (cmd, args, opts = {}) => execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opts }).trim();
const rel = (p, base) => path.relative(base, p).split(path.sep).join('/');
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80) || 'skill';

function walk(dir, out = [], seen = new Set()) {
  let real; try { real = fs.realpathSync(dir); } catch { return out; }
  if (seen.has(real)) return out; seen.add(real);                // guard against symlink loops
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules' || e.name === '__pycache__') continue;
    const p = path.join(dir, e.name);
    let st; try { st = fs.statSync(p); } catch { continue; }   // follows symlinks, skips broken ones
    if (st.isDirectory()) walk(p, out, seen); else if (e.name === 'SKILL.md') out.push(p);
  }
  return out;
}

// Minimal YAML front-matter reader for the fields skills use (name, description, license, ...).
function frontMatter(text) {
  const m = /^---\s*\r?\n([\s\S]*?)\r?\n---/.exec(text);
  const out = {};
  if (!m) return out;
  const lines = m[1].split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const kv = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(lines[i]);
    if (!kv) continue;
    let [, k, v] = kv;
    if (v === '|' || v === '>' || v === '|-' || v === '>-' || v === '') {
      const buf = [];
      while (i + 1 < lines.length && (/^\s+\S/.test(lines[i + 1]) || lines[i + 1] === '')) buf.push(lines[++i].trim());
      v = buf.join(v.startsWith('|') ? '\n' : ' ').trim();
    }
    v = v.replace(/^(['"])([\s\S]*)\1$/, '$2').replace(/\\"/g, '"');
    out[k.toLowerCase()] = v;
  }
  return out;
}

function classifyLicense(text) {
  if (!text) return 'unknown';
  const t = text.slice(0, 4000);
  if (/MIT License|Permission is hereby granted, free of charge/i.test(t)) return 'MIT';
  if (/Apache License[\s,]*Version 2\.0/i.test(t)) return 'Apache-2.0';
  if (/BSD (2|3)-Clause|Redistribution and use in source and binary forms/i.test(t)) return 'BSD';
  if (/ISC License|Permission to use, copy, modify, and\/or distribute/i.test(t)) return 'ISC';
  if (/All rights reserved|proprietary|may not|not permitted/i.test(t)) return 'proprietary';
  return 'unknown';
}
const OPEN = new Set(['MIT', 'Apache-2.0', 'BSD', 'ISC']);
const licFile = dir => fs.existsSync(dir) ? fs.readdirSync(dir).find(f => /^(licen[cs]e|copying)(\.(md|txt))?$/i.test(f)) : null;
// Nearest licence: the skill's own folder first, then each parent up to the repo root.
function nearestLicense(dir, repoRoot) {
  for (let d = dir; ; d = path.dirname(d)) {
    const f = licFile(d);
    if (f) return { file: path.join(d, f), spdx: classifyLicense(fs.readFileSync(path.join(d, f), 'utf8')), own: d === dir };
    if (d === repoRoot || d === path.dirname(d)) return { file: null, spdx: 'unknown', own: false };
  }
}
function dirSize(dir, depth = 0) { if (depth > 12) return 0; let n = 0; for (const e of fs.readdirSync(dir, { withFileTypes: true })) { const p = path.join(dir, e.name); try { const st = fs.statSync(p); n += st.isDirectory() ? dirSize(p, depth + 1) : st.size; } catch {} } return n; }
function copyDir(src, dst, depth = 0) {
  if (depth > 12) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    if (['.git', 'node_modules', '__pycache__', '.DS_Store'].includes(e.name)) continue;
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    let st; try { st = fs.statSync(s); } catch { continue; }
    if (st.isDirectory()) copyDir(s, d, depth + 1);
    else if (st.size <= MAX_FILE) fs.copyFileSync(s, d);
  }
}

const CATS = [
  ['Mobile & Web apps', /\b(android|ios|pwa|mobile|capacitor|flutter|react native|web app|webapp)\b/],
  ['Documents & Office', /\b(docx|pdf|pptx|xlsx|word document|excel|powerpoint|spreadsheet|slides?|presentation|document)\b/],
  ['Design & UI', /\b(design|ui|ux|frontend|front-end|css|theme|brand|canvas|art|animation|figma|tailwind|typography|color|banner|visual|gif)\b/],
  ['Security', /\b(security|threat|vulnerab\w*|sast|owasp|pentest|stride|secrets?|compliance)\b/],
  ['Testing & QA', /\b(test|tests|testing|playwright|e2e|qa|tdd|test-driven)\b/],
  ['Coding workflow', /\b(debug\w*|plan|planning|brainstorm\w*|code review|review|refactor\w*|git|worktree|subagent|commit|pull request|guidelines|coding)\b/],
  ['DevOps & Cloud', /\b(kubernetes|k8s|docker|terraform|ci\/cd|cicd|deploy\w*|aws|gcp|azure|helm|github actions|observability|monitoring|infrastructure|cloud|incident|sre|domain|dns|hosting)\b/],
  ['Data & AI', /\b(data|sql|postgres\w*|database|ml|machine learning|llm|rag|prompt\w*|embedding|analytics|pandas|ai|model|vector)\b/],
  ['Languages & Frameworks', /\b(python|javascript|typescript|react|rust|golang|go|java|node|fastapi|django|next\.?js|vue|angular|kotlin|swift|php|ruby|c#|\.net)\b/],
  ['Integrations & MCP', /\b(mcp|api|slack|integration|connect|webhook|automation)\b/],
  ['Business & Writing', /\b(marketing|seo|content|writing|comms|communications|sales|startup|legal|finance|business|email|copy)\b/],
];
const category = (name, desc) => { const t = `${name} ${desc}`.toLowerCase().replace(/-/g, ' '); for (const [c, re] of CATS) if (re.test(t)) return c; return 'Other'; };

/* ---------- sync ---------- */
const tmp = process.env.SRC_CACHE || fs.mkdtempSync(path.join(os.tmpdir(), 'skills-'));
const catalog = { generated: new Date().toISOString(), sources: [], skills: [] };
const skillsRoot = path.join(ROOT, 'skills');
const contentSeen = new Map();   // SKILL.md text -> id, so mirrors of the same skill are listed once
const norm = t => t.replace(/\s+/g, ' ').trim();

for (const src of sources) {
  const dir = path.join(tmp, src.repo.replace('/', '_'));
  try {
    if (!fs.existsSync(dir)) sh('git', ['clone', '-q', '--depth', '1', `https://github.com/${src.repo}`, dir], { timeout: 600000 });
  } catch (e) { console.log(`! ${src.repo}: clone failed, keeping previous copy`); continue; }
  let commit = ''; try { commit = sh('git', ['-C', dir, 'rev-parse', 'HEAD']); } catch {}
  const repoLic = nearestLicense(dir, dir);
  if (repoLic.spdx === 'unknown') repoLic.spdx = 'per skill';
  const out = path.join(skillsRoot, src.id);
  fs.rmSync(out, { recursive: true, force: true });                // clean copy every run
  const seen = new Set();
  let copied = 0, linked = 0;
  const files = walk(dir).filter(f => !(src.exclude || []).some(x => rel(f, dir).startsWith(x)))
    .sort((a, b) => a.length - b.length);                           // shortest path wins on duplicates
  for (const f of files) {
    const sdir = path.dirname(f);
    const text = fs.readFileSync(f, 'utf8');
    const fm = frontMatter(text);
    const name = slug(fm.name || path.basename(sdir));
    if (seen.has(name)) continue; seen.add(name);
    if (contentSeen.has(norm(text))) { console.log(`  = ${src.id}/${name} is a copy of ${contentSeen.get(norm(text))}, skipped`); continue; }
    contentSeen.set(norm(text), `${src.id}/${name}`);
    const lic = nearestLicense(sdir, dir);
    const spdx = lic.spdx;
    const p = rel(sdir, dir);
    const url = `https://github.com/${src.repo}/tree/${commit ? commit.slice(0, 12) : 'HEAD'}/${p}`;
    const size = dirSize(sdir);
    const vendored = OPEN.has(spdx) && size <= MAX_SKILL;
    const entry = {
      id: `${src.id}/${name}`, name, description: (fm.description || '').replace(/\s+/g, ' ').trim().slice(0, 400),
      source: src.id, repo: src.repo, path: p, url, license: spdx, vendored,
      category: category(name, fm.description || ''), sizeKB: Math.round(size / 1024),
    };
    if (vendored) {
      const dst = path.join(out, name);
      copyDir(sdir, dst);
      if (!licFile(dst) && lic.file) fs.copyFileSync(lic.file, path.join(dst, 'LICENSE' + (path.extname(lic.file) || '')));
      fs.writeFileSync(path.join(dst, 'SOURCE.md'),
        `# Source\n\nThis skill is a copy of [${src.repo}/${p}](${url}) (${spdx}).\nCopied by the All Agentic Skills weekly sync. All credit goes to the original authors.\n`);
      entry.local = `skills/${src.id}/${name}`;
      copied++;
    } else linked++;
    catalog.skills.push(entry);
  }
  if (copied && repoLic.file) fs.copyFileSync(repoLic.file, path.join(out, 'LICENSE' + (path.extname(repoLic.file) || '')));
  catalog.sources.push({ id: src.id, name: src.name, repo: src.repo, url: `https://github.com/${src.repo}`, license: repoLic.spdx, commit: commit.slice(0, 12), skills: copied + linked, copied, linked });
  console.log(`${src.repo.padEnd(42)} ${String(copied + linked).padStart(4)} skills  (${copied} copied, ${linked} link-only, repo licence ${repoLic.spdx})`);
}

// Your own skills
const ownDir = path.join(skillsRoot, OWN);
if (fs.existsSync(ownDir)) {
  let n = 0;
  for (const d of fs.readdirSync(ownDir).sort()) {
    const f = path.join(ownDir, d, 'SKILL.md'); if (!fs.existsSync(f)) continue;
    const fm = frontMatter(fs.readFileSync(f, 'utf8'));
    const name = slug(fm.name || d);
    catalog.skills.push({ id: `${OWN}/${name}`, name, description: (fm.description || '').replace(/\s+/g, ' ').slice(0, 400), source: OWN,
      repo: 'maheshsurada9434/All-agentic-skills-', path: `skills/${OWN}/${d}`, url: `https://github.com/maheshsurada9434/All-agentic-skills-/tree/main/skills/${OWN}/${d}`,
      license: 'MIT', vendored: true, local: `skills/${OWN}/${d}`, category: category(name, fm.description || ''), sizeKB: Math.round(dirSize(path.join(ownDir, d)) / 1024) });
    n++;
  }
  catalog.sources.unshift({ id: OWN, name: 'Mahesh Surada (original)', repo: 'maheshsurada9434/All-agentic-skills-', url: 'https://github.com/maheshsurada9434/All-agentic-skills-', license: 'MIT', skills: n, copied: n, linked: 0 });
}

catalog.skills.sort((a, b) => (a.source === OWN ? 0 : 1) - (b.source === OWN ? 0 : 1) || a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
catalog.total = catalog.skills.length;
catalog.copied = catalog.skills.filter(s => s.vendored).length;
fs.mkdirSync(path.join(ROOT, 'catalog'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'catalog', 'skills.json'), JSON.stringify(catalog, null, 1) + '\n');

/* ---------- README tables ---------- */
const readme = path.join(ROOT, 'README.md');
if (fs.existsSync(readme)) {
  const cats = {}; catalog.skills.forEach(s => (cats[s.category] = cats[s.category] || []).push(s));
  const esc = s => s.replace(/\|/g, '\\|');
  let md = `**${catalog.total} skills** from ${catalog.sources.length} collections, ${catalog.copied} of them copied here and ready to install. Last synced ${catalog.generated.slice(0, 10)}.\n\n`;
  md += `| Collection | Skills | In this repo | Licence |\n|---|---:|---:|---|\n` + catalog.sources.map(s => `| [${s.name}](${s.url}) | ${s.skills} | ${s.copied} | ${s.license} |`).join('\n') + '\n\n';
  const head = md + `**[Full skill list by category →](CATALOG.md)**\n\n`;
  md = `# Full catalog\n\n`;
  for (const c of Object.keys(cats).sort()) {
    md += `<details><summary><b>${c}</b> (${cats[c].length})</summary>\n\n| Skill | What it does | Source |\n|---|---|---|\n`;
    md += cats[c].map(s => `| [\`${s.name}\`](${s.local || s.url}) | ${esc(s.description.slice(0, 140))}${s.description.length > 140 ? '…' : ''} | ${s.source}${s.vendored ? '' : ' ↗'} |`).join('\n');
    md += '\n\n</details>\n\n';
  }
  const txt = fs.readFileSync(readme, 'utf8');
  const out = txt.replace(/<!-- CATALOG:START -->[\s\S]*<!-- CATALOG:END -->/, `<!-- CATALOG:START -->\n${head}<!-- CATALOG:END -->`);
  fs.writeFileSync(readme, out);
  fs.writeFileSync(path.join(ROOT, 'CATALOG.md'), md);
}
console.log(`\nCatalog: ${catalog.total} skills, ${catalog.copied} copied.`);
