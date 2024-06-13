---
title: FusionGrid Release Notes | FusionGrid
description: This section talks about the change in features and attributes with latest released version.
heading: FusionGrid Release Notes
---

<h2 class="sub-heading">Version 2.0</h2>

<p class="release-date">June 21st, 2024</p>

<h4>Improvements</h4>

- **Integration Components**: FusionGrid 2.0 upgraded the following SDKs to their Long-Term Support (LTS) version:
  - React Fusiongrid upgraded to v18. React package updated with latest version 18 in package.json. Example folder updated with react version 18 strict mode code.
  - Angular Fusiongrid upgrade to v17. Angular packages in package.json updated to version 17. Typescript also updated to support angular 17. Examples folder code updated with angular 17 support.
  - Vue Fusiongrid upgrade to v3. Vue package already had v3, only minor version upgrade done in package.json file.


<h4>Fixes</h4>

- Resolved the issue of **FusionGrid** filters not retaining the **row-specific styles** provided.
- A method called `dispose` was introduced which removes all the UI elements of the grid and sets the FusionGrid instance to **null**.
- Fixed the issue where **FusionGrid** was not showing within the `Bootstrap` modal dialogue.

For more information on the features, see the [What's New](/fusiongrid/fusiongrid-whats-new) page.
