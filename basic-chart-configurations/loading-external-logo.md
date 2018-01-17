---
permalink: basic-chart-configurations/loading-external-logo.html
title: Loading External Logo | FusionCharts
description: You can load external logos at runtime with can be GIF/JPEG/PNG or SWF files. This section talks about configuring and linking the logo to an external URL
heading: Loading External Logo
chartPresent: true
---

You can load external logos at runtime to be displayed over the chart. The logos can be GIF/JPEG/PNG or SWF files that reside on the same sub-domain as the chart.

This section talks about:

* <a href="/basic-chart-configurations/loading-external-logo#configuring-an-external-logo" class="smoth-scroll">Configuring an external logo</a>

* <a href="/basic-chart-configurations/loading-external-logo#linking-logo-to-external-url" class="smoth-scroll">Linking the logo to an external URL</a>

## Configuring an external logo

A column 2D chart with an external logo image looks as below:

{% embed_all configuring-your-chart-loading-external-logo-example-1.js %}

Given below is the list of attributes used to add, position and customize an external logo in a chart:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`logoURL`</td>
    <td>It is used to specify the URL of the external logo.</td>
  </tr>
  <tr>
    <td>`logoAlpha`</td>
    <td>It is used to specify the opacity of the external logo with value ranging from `0` (transparent) to `100` (opaque).</td>
  </tr>
  <tr>
    <td>`logoScale`</td>
    <td>It is used to specify the scale of the externally loaded logo at run-time. The value can be between `0` to `300`</td>
  </tr>
  <tr>
    <td>`logoPosition`</td>
    <td>It is used to specify the position of the external logo. It can have initials as values which are - `TL`: Top-left, `TR`: Top-right, `BL`: Bottom-left, `BR`: Bottom-right, `CC`: Center</td>
  </tr>
</table>


## Linking logo to external URL

A column 2D chart with an image linked to an external URL will look as below:

{% embed_all configuring-your-chart-loading-external-logo-example-2.js %}

Given below is the attribute used to link the logo to an external URL:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`logoLink`</td>
    <td>It is used to specify the link for the logo.</td>
  </tr>
</table>