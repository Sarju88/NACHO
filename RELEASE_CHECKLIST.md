# Major release checklist

Use this checklist for every major N.A.C.H.O. game update.

1. Export and smoke-test fresh macOS and Windows builds from the Godot project.
2. Create a tagged GitHub Release and attach assets named `NACHO-macOS.zip` and `NACHO-Windows.exe`.
3. Add a concise player-facing entry at the top of `updates.json` with the date, version, title, and gameplay changes.
4. Update version text or feature copy in `index.html` when the release changes the game's identity or mechanics.
5. Test both download buttons and the site at desktop and mobile widths.
6. Commit and push the website changes to `main`, then confirm the live GitHub Pages deployment.

Do not describe unreleased mechanics as playable. Keep older update entries as a public development history.
