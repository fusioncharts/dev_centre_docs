---
title: SDK Upgrades | FusionCharts
description: This section discusses the changes and updates for the FusionCharts software development kits (SDKs)
heading: FusionCharts SDK Upgrades
---

<h2 class="sub-heading">SDKs Upgrades</h2>

<p class="release-date">11th September, 2026</p>
  
<h3>Angular FusionCharts 5.0.0</h3>

- Updated the Angular SDK to its latest compatible version, resolving known security vulnerabilities and ensuring smoother compatibility with newer Angular releases.

<h4>Changed</h4>

- Rebuilt with `ng-packagr` using partial Ivy compilation and FESM2022 output.
- A single package artifact now supports Angular 20, 21, and 22 via the Angular Linker, removing the need for version-specific builds.
- TypeScript types now ship directly with the package.
- Test suite migrated from Karma to Vitest.
- Addressed critical and high-severity security vulnerabilities.

<h4>Breaking</h4>

- Requires Angular 20 or newer.
- ESM only — the UMD bundle has been removed.
- `@types/fusioncharts` is no longer needed and should be removed from `package.json`, as it can shadow the types now bundled with the package.

<h4>Links</h4>

- [NPM Angular FusionCharts](https://npmjs.com/package/angular-fusioncharts)
- [GitHub Angular FusionCharts](https://github.com/fusioncharts/angular-fusioncharts)

<h3>Svelte FusionCharts 2.0.0</h3>

- Updated the Svelte SDK to its latest compatible version, addressing identified security vulnerabilities as part of the ongoing SDK security compliance initiative.

<h4>Changed</h4>

- Packages now use an `exports` map with a `svelte` condition, allowing a single package to serve both Svelte 4 and Svelte 5.
- CommonJS main entry removed; peer dependencies are now explicitly declared instead of left to the bundler.
- Fixed four runtime issues affecting Svelte 5.
- Added hand-written TypeScript types.
- Added a new SvelteKit example.
- Removed the no-op renderAt option.
- Addressed identified security vulnerabilities.

<h4>Breaking</h4>

- Deep imports and `require()` calls no longer resolve; use package-name imports instead.
- SvelteKit routes must `set export const ssr = false`.

<h4>Links</h4>

- [NPM Svelte FusionCharts](https://npmjs.com/package/svelte-fusioncharts)
- [GitHub Svelte FusionCharts](https://github.com/fusioncharts/svelte-fusioncharts)

<h3>React-Native FusionCharts 7.0.0</h3>

- Updated the React Native SDK to its latest compatible version, resolving security vulnerabilities and improving reliability across supported React Native versions. 

<h4>Changed</h4>

- Peer dependency range updated to `>=0.70.8 <=0.74.5`, adding support for the new architecture.
- Replaced the unmaintained `react-native-fs` with the actively maintained `@dr.pogodin/react-native-fs` fork, which ships a proper TurboModule spec.
- Bundled jsPDF upgraded from 3.0.2 to 4.2.1.
- Addressed identified security vulnerabilities.

<h4>Breaking</h4>

- Minimum supported React Native version raised to 0.75.0; versions below this (and 0.87.0+) are no longer supported.
- You must now install the five native modules directly, as they no longer autolink.

<h4>Links</h4>

- [NPM React-Native FusionCharts](https://npmjs.com/package/react-native-fusioncharts)
- [GitHub React-Native FusionCharts](https://github.com/fusioncharts/react-native-fusioncharts)

<h3>Flutter FusionCharts 2.0.0</h3>

- Updated the Flutter SDK to the latest compatible version to improve stability and keep pace with the broader SDK modernization initiative.

<h4>Changed</h4>

- Replaced `flutter_inappwebview` with `webview_flutter`, removing the source of the vulnerability; dropped dependencies on `permission_handler`, `path_provider`, and `pdf`.
- Export now returns bytes directly to the calling app; the package no longer manages file storage itself.
- Chart assets and theme fonts are now vendored and hash-pinned, with no network calls made at render time.
- Navigation is now restricted to the loaded asset, network-capable export keys have been stripped, and exported file names are sanitized.

<h4>Breaking</h4>

- `setWebViewController` has been removed; use the new `source` property instead.
- Export format support now varies by platform:
    - Android supports all six formats.
    - iOS supports SVG, CSV, and XLSX.

<h4>Links</h4>

- [Flutter FusionCharts](https://pub.dev/packages/flutter_fusioncharts)
- [GitHub Flutter FusionCharts](https://github.com/fusioncharts/flutter-fusioncharts)
