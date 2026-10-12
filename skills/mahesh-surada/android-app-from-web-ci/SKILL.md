---
name: android-app-from-web-ci
description: Wrap a web app (HTML/JS or PWA) as a real Android app with Capacitor and build the APK and Play Store AAB entirely on GitHub Actions, no Android Studio needed. Use when someone wants their website or web app on Android or in the Google Play Store, or needs a downloadable APK.
---

# Android app from a web app, built in CI

Build a signed Android app from an existing web app on GitHub Actions. Works from a phone: the user only pushes code and downloads the result.

## Shape of the project
```
index.html, icons/ ...        the web app (unchanged)
app.config.json               {"appName": "...", "appId": "com.name.app", "iconColor": "#..."}
capacitor.config.json         {"appId": "...", "appName": "...", "webDir": "www"}
package.json                  @capacitor/core, cli, android, assets + plugins you need
scripts/build-www.sh          copies the site into www/ (bundle fonts/CDN libs so it works offline)
scripts/ci-build.sh           npx cap add android, icons, versions, gradle, signing
.github/workflows/android.yml runs ci-build.sh, publishes a GitHub Release with the APK
```
Generate `android/` in CI with `npx cap add android` instead of committing it. Smaller repo, always matches the Capacitor version.

## Steps
1. **Capacitor 8+, target the current Play API level** (36 for new apps and updates after 31 Aug 2026). Pin plugin versions in `package.json`.
2. **`build-www.sh`**: copy only what the app needs into `www/`; download Google Fonts and CDN scripts into `www/vendor` and rewrite the links, because the app must open without internet.
3. **Icons and splash**: keep `assets/icon-only.png`, `icon-foreground.png`, `icon-background.png`, `splash.png`, `splash-dark.png`; run `npx @capacitor/assets generate --android` in CI.
4. **Native features** through `window.Capacitor.Plugins` (no bundler needed): `LocalNotifications` for reminders, `Filesystem` + `Share` for exporting files (a plain `<a download>` does nothing inside a WebView), `App` for the back button, `Haptics`.
5. **Versions**: `versionName` from `package.json`, `versionCode` from `GITHUB_RUN_NUMBER`.
6. **Signing**:
   - Test builds: commit a public debug keystore (`ci/debug.keystore`, alias `androiddebugkey`, password `android`) so every test APK installs over the previous one. Use `applicationIdSuffix ".test"`.
   - Play builds: keep the upload keystore **out of git**. Store it as repo secrets `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD` and sign the AAB with `jarsigner`/`apksigner` in CI.
7. **Publish results**: `gh release create v$VERSION-build$N dist/*.apk dist/*.aab` so the user downloads from the Releases page on their phone. Artifact zips are awkward on mobile.

## Google Play notes
- New personal developer accounts must run a closed test with at least 12 testers for 14 days before production.
- Provide a privacy policy URL (a `privacy.html` on GitHub Pages is fine), a 512×512 icon, a 1024×500 feature graphic and phone screenshots.

## Pitfalls
- `*.keystore` in `.gitignore` also hides the intentional debug key: add `!ci/debug.keystore`.
- WebView `window.open('')` print pages and file downloads need native handling (overlay iframe + Share sheet).
- Respect safe areas: Capacitor's SystemBars `insetsHandling: "css"` exposes `--safe-area-inset-*` variables.
