---
name: github-pages-actions-deploy
description: Publish a static site or single-page app to GitHub Pages with a GitHub Actions workflow, including a build step, scheduled data refreshes and the one-time Pages setting. Use when someone asks to host, publish or deploy a website from a GitHub repo, or their Pages deploy fails with "Get Pages site failed".
---

# Deploy to GitHub Pages with Actions

## The one manual step
Pages must be switched on once by the repo owner: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Until then `actions/configure-pages` fails with *"Get Pages site failed … Not Found"*. The default `GITHUB_TOKEN` cannot enable it. Tell the user exactly this, then re-run the workflow.

## Workflow
```yaml
name: Publish
on:
  push: { branches: [main] }
  workflow_dispatch:
  schedule: [{ cron: '17 2 * * *' }]     # optional daily rebuild (UTC)
permissions: { contents: write, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: false }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22 }
      - run: node scripts/build.mjs        # or skip if the site is plain files
      - name: Collect site
        run: mkdir _site && cp -r index.html manifest.webmanifest sw.js icons data _site/
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: _site }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: '${{ steps.d.outputs.page_url }}' }
    steps:
      - id: d
        uses: actions/deploy-pages@v4
```

## Saving data the workflow generates
If a scheduled job writes files (for example `data/*.json`) and should keep them in the repo:
```bash
git config user.name "Your Name"; git config user.email "<id>+<user>@users.noreply.github.com"
git add data/ && (git diff --cached --quiet || (git commit -m "Daily data" && git pull --rebase && git push))
```
Commit as the repo owner's noreply address if they want to be the only contributor; pushes made with `GITHUB_TOKEN` do not trigger another workflow run, so there is no loop.

## Checks
- All asset paths relative (`icons/x.png`, not `/icons/x.png`): project sites live under `/<repo>/`.
- After deploy, fetch the live URL and confirm the new content is there; ask users with an installed PWA to reopen it once.
- `pages-build-deployment` runs instead when Source is "Deploy from a branch". Pick one approach, not both.
