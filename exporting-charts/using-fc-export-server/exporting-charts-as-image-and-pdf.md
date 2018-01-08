---
permalink: exporting-charts/using-fc-export-server/exporting-charts-as-image-and-pdf.html
title: Exporting Charts as Image and PDF | FusionCharts
description: A prominent feature is the ability to export the rendered charts in the JPG, PNG, SVG, and PDF formats.
heading: Exporting Charts as Image and PDF
chartPresent: true
---

FusionCharts Suite XT uses JavaScript to render charts in the browser using SVG and VML. A prominent feature of the suite is the ability to export the rendered charts in the JPG, PNG, SVG, and PDF formats.  

The export is done using a server-side helper library that converts the SVG to the required format. VML can also be exported as it is converted to SVG internally before exporting. During the export process, the data to be exported is sent to the FusionCharts servers for processing and generating the output in the required format.

When charts are exported on the client side, the entire exporting process is carried out using the user’s browser. The chart’s SVG is converted into the selected export format and download using the HTML5 `download` attribute.

<p class="text-info"> You must have an active internet connection for this feature to work. </p>

To enable chart exporting, the `chart` level attribute `exportEnabled` is set to __1__. The ![image](/assets/images/exporting-as-image-and-pdf-export-button.jpg) menu button is then visible in the top-right corner of the chart. Click/hover over this menu button to see the dropdown menu with the export options, as shown in the image below:

![image](/assets/images/exporting-as-image-and-pdf-export-menu.jpg)

From the menu rendered, select the required format; the chart is downloaded to your machine in the selected format.

A column 2D chart with export enabled is shown below. Click the ![image](/assets/images/exporting-as-image-and-pdf-export-button.jpg) menu button and select a format to export the chart.

{% embed_all exporting-as-image-and-pdf-introduction-example-1.js %}

## Modes of Export

FusionCharts Suite XT supports the following three modes of export:

* Server-side export
* Client-side export
* Auto export

By default, charts are exported using the auto export feature. 

The `exportMode` attribute is used to switch betwen the modes of export.

<p class="text-info"> Starting v3.12.1, the `exportMode` attribute __replaces__ the `exportAtClientSide` attribute. </p>

The subsequent articles in this section cover the features of each export mode and the `exportMode` attribute in detail.

<p class="text-info"> To process the export data on your own server, you can configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/server-side-export/setup-private-export-server/asp-net) guide. </p>