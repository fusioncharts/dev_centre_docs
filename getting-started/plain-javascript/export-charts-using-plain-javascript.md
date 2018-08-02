---
title: Exporting Charts | FusionCharts
description: This article focuses on how you can export your chart using plain javascript.
heading: Exporting Charts
chartPresent: true
---

FusionCharts Suite XT uses JavaScript to render charts in the browser using SVG and VML. A prominent feature of the suite is the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well.

In this section we will discuss how to:

* [Export Charts as Image and PDF]({% site.baseurl %}/getting-started/plain-javascript/export-charts-using-plain-javascript#export-charts-as-image-and-pdf-1)
* [Export Chart Data]({% site.baseurl %}/getting-started/plain-javascript/export-charts-using-plain-javascript#export-chart-data-3)

## Export Charts as Image and PDF

A server-side helper library enables export by conveting the SVG to the required format. You can also export VML as it is converted to SVG internally before exporting. During the export process, the data to be exported is first sent to the FusionCharts servers to be processed, finally generating the output in the required format.

When charts are exported on the client side, the entire exporting process is carried out using the user’s browser. The chart’s SVG is converted into the selected export format and download using the HTML5 `download` attribute.

>  You must have an active internet connection for this feature to work. </p>

To enable chart exporting, the `chart` level attribute `exportEnabled` is set to __1__. The <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over this button to see the dropdown menu with export options, as shown in the image below:

![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-menu.jpg)

From the menu rendered, select the required format. The chart is downloaded to your machine in the selected format.

A column 2D chart with export enabled is shown below. Click the <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the required export format.

{% embed_all exporting-as-image-and-pdf-introduction-example-1.js %}

### Modes of Export

FusionCharts Suite XT supports the following three modes of export:

* Server-side export
* Client-side export
* Auto-export

By default, charts are exported using the auto-export feature. 

The `exportMode` attribute is used to switch between the different modes of export.

>  Starting from version v3.12.1, the `exportMode` attribute __replaces__ the `exportAtClientSide` attribute.

To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server]({% site.baseurl %}/exporting-charts/using-fc-export-server/server-side-export/setup-private-export-server/asp-net '@@open-newtab') guide. </p>

## Export Chart Data

FusionCharts lets you export the rendered charts in JPG, PNG, SVG, and PDF formats. Starting v3.11.0, FusionCharts Suite XT introduces exporting chart data in the XLS format (as an Excel spreadsheet).

To enable chart exporting, set the chart level attribute `exportEnabled` to __1__. The <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over the button to see a dropdown menu with the export options, as shown in the image below:

![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-menu.jpg)

To export chart data, select the __Export as XLS__ option. The XLS file with the chart data gets downloaded to your machine.

A column 2D chart with export enabled is shown below. Click the <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the __Export as XLS__ option to export the chart data.

{% embed_all exporting-as-image-and-pdf-introduction-example-2.js %}

> To export a chart in the XLS format using server-side exporting, it is mandatory that the exporting server has the latest code, available in the FusionCharts package. Alternatively, you can also use the FusionCharts export link, `export.api3.fusioncharts.com`. For client-side exporting, the exporting chart data feature is supported only by modern browsers with canvas support (except Safari and IE9). You can still export your charts, without including the configurable data.

> To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/server-side-export/setup-private-export-server/asp-net) guide.