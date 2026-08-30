# N.A.C.H.O. product site

Public product and download site for **N.A.C.H.O.: Not A Chance Hormuz Opens**.

## Local preview

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Publishing a major game update

Follow [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md). The update is not complete until the builds, GitHub Release, download links, and `updates.json` entry are all current.

## Hosting

The `main` branch is published with GitHub Pages. To activate `nacho.arjunrao.dev`, first add it under the repository's Pages settings, then point the DNS provider's `nacho` CNAME to `sarju88.github.io`. GitHub will create the repository's `CNAME` file when the custom domain is saved.

## Logo attribution

The official Godot Engine logo is copyright Andrea Calabró and licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). It is used unmodified from the official Godot Engine repository.
