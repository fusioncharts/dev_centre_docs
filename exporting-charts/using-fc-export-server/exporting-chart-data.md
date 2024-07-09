---
title: Exporting Chart Data | FusionCharts
description: Gain deeper insights from your charts. Export your data to Excel (XLSX) or CSV format for further analysis with FusionCharts Export Server. Click to discover!
heading: Exporting Chart Data
---

## To export chart data in CSV format, select the Export as CSV option. The CSV file with the chart data gets downloaded to your machine

FusionCharts lets you export the rendered charts in the JPG, PNG, SVG, and PDF formats. FusionCharts also allows you to export chart data in XLSX format (as an Excel spreadsheet). Starting v3.14.1, FusionCharts Suite XT introduces exporting chart data in the **CSV** format.

To enable chart exporting, the chart level attribute `exportEnabled` is set to **1**. The <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> menu button is then visible in the top-right corner of the chart. Click/hover over this menu button to see the dropdown menu with the export options, as shown in the image below:

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

To export chart data in CSV format, select the **Export as CSV** option. The CSV file with the chart data gets downloaded to your machine.

A column 2D chart with export enabled is shown below. Click the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> menu button and select the **Export as CSV** option to export the chart data.

{% embed_all exporting-as-image-and-pdf-introduction-example-1.js %}

> To export a chart in the XLSX format using server-side exporting, it is mandatory that the exporting server has the latest code, which is available in the FusionCharts package. Alternatively, the FusionCharts export link, `export.api3.fusioncharts.com`, can also be used. For client-side exporting, the exporting chart data feature is supported only by modern browsers with canvas support (except Safari and IE9).

> To process the export data on your own server, you can configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/server-side-export/setup-private-export-server/asp-net) guide.
