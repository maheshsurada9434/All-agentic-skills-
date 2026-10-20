<h1 align="center">All Agentic Skills</h1>
<p align="center"><b>Every good AI agent skill in one place: searchable, licence-checked, installable with one line.</b><br>
Works with Claude Code, Claude apps and any agent that reads <code>SKILL.md</code> folders.</p>

<p align="center">
  <a href="https://maheshsurada9434.github.io/All-agentic-skills-/"><b>🔎 Browse the catalog</b></a> ·
  <a href="#-install-a-skill"><b>⚡ Install</b></a> ·
  <a href="skills/mahesh-surada"><b>✍️ Original skills</b></a>
</p>

## What this is

- **One catalog** of skills from the best public collections (Anthropic's official skills, Superpowers, UI/UX Pro Max, wshobson/agents and more), plus original skills by Mahesh Surada.
- **Synced every week** by a GitHub Action, so it stays current without anyone editing it by hand.
- **Licence-aware:**
  - skills under MIT, Apache-2.0, BSD or ISC are copied into [`skills/`](skills) with their licence and a `SOURCE.md` crediting the authors
  - everything else is listed with a link to the original repo
- **One-line installer** that puts any skill where your agent will find it.

## ⚡ Install a skill

```bash
# one or more skills (name or collection/name)
curl -fsSL https://raw.githubusercontent.com/maheshsurada9434/All-agentic-skills-/main/install.sh | bash -s -- frontend-design systematic-debugging

# search
curl -fsSL https://raw.githubusercontent.com/maheshsurada9434/All-agentic-skills-/main/install.sh | bash -s -- --list testing

# a whole collection, into this project only
curl -fsSL https://raw.githubusercontent.com/maheshsurada9434/All-agentic-skills-/main/install.sh | bash -s -- --source superpowers --project
```

By default skills go to `~/.claude/skills`. Use `--project` for `./.claude/skills`, or `--dir <folder>` for other agents. Restart the agent session afterwards.

**Without a terminal:** open a skill in the [catalog](https://maheshsurada9434.github.io/All-agentic-skills-/), download its folder, and add it to your agent. In the Claude apps, use Settings → Capabilities → Skills.

## 📚 Catalog

<!-- CATALOG:START -->
**273 skills** from 10 collections, 240 of them copied here and ready to install. Last synced 2026-10-20.

| Collection | Skills | In this repo | Licence |
|---|---:|---:|---|
| [Mahesh Surada (original)](https://github.com/maheshsurada9434/All-agentic-skills-) | 4 | 4 | MIT |
| [Anthropic (official)](https://github.com/anthropics/skills) | 19 | 14 | per skill |
| [Superpowers by Jesse Vincent](https://github.com/obra/superpowers) | 15 | 15 | MIT |
| [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 7 | 7 | MIT |
| [wshobson/agents plugin skills](https://github.com/wshobson/agents) | 185 | 185 | MIT |
| [Claude Office Skills](https://github.com/tfriedel/claude-office-skills) | 4 | 0 | per skill |
| [Karpathy coding guidelines](https://github.com/forrestchang/andrej-karpathy-skills) | 1 | 0 | per skill |
| [Composio awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 27 | 4 | per skill |
| [REA: Reverse Engineer Anything](https://github.com/morluto/rea) | 5 | 5 | MIT |
| [Ponytail by Dietrich Gebert](https://github.com/DietrichGebert/ponytail) | 6 | 6 | MIT |

**[Full skill list by category →](CATALOG.md)**

<!-- CATALOG:END -->

## ➕ Suggest a collection

Open an issue or a pull request that adds a line to [`sources.json`](sources.json):

```json
{ "id": "short-id", "name": "Display name", "repo": "owner/repo", "exclude": ["folders/to/skip/"] }
```

The next sync picks it up. Original skills go in [`skills/mahesh-surada/`](skills/mahesh-surada) as `<name>/SKILL.md`.

## How the sync works

[`scripts/sync.mjs`](scripts/sync.mjs) runs weekly (and on demand) in [GitHub Actions](.github/workflows/sync.yml):

1. Shallow-clones each repo in `sources.json`.
2. Finds every `SKILL.md` and reads its `name` and `description`.
3. Checks the nearest licence file, first in the skill's folder, then in the repo.
4. Copies open-licensed skills into `skills/<collection>/` and links the rest.
5. Writes [`catalog/skills.json`](catalog/skills.json), refreshes this README and publishes the website.

## Credits

All copied skills belong to their original authors. Each one keeps its licence and a `SOURCE.md` link back to the original. Collection, sync, installer and original skills are by **Mahesh Surada** ([MIT](LICENSE)).
