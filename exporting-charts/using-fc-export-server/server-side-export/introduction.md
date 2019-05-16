---
permalink: exporting-charts/using-fc-export-server/server-side-export/introduction.html
title: Introduction to exporting charts as image and pdf | FusionCharts
description: This section talks about exporting charts as image and pdf.cThe export is done using a server-side helper library. VML can also be exported.
heading: Introduction to exporting charts as image and pdf
chartPresent: true
---

FusionCharts Suite XT uses JavaScript to render charts in the browser using SVG and VML. It also allows you to export charts—as images, PDF files, or as Excel spreadsheets. The export is done using a server-side helper library that converts the SVG to image/PDF/XLSX. VML can also be exported as it is internally converted to SVG before exporting. During the export, the data is sent to the FusionCharts servers for processing and generating the image/PDF/XLSX.
>  You must have an active internet connection for this feature to work. </p>

 The export formats currently supported are :

- JPG
- PNG
- SVG
- PDF
- XLSX (since v3.11.0)

>   To export a chart in the XLSX format, using server-side exporting, it is mandatory that the exporting server has the latest code, which is available in the FusionCharts package. Alternatively, the FusionCharts export link, [export.api3.fusioncharts.com](export.api3.fusioncharts.com), can also be used. For client-side exporting, download as XLSX is supported only by modern browsers with canvas support (except Safari and IE9). </p>

To enable server-side exporting, the chart level attribute `exportEnabled` is set to __1__. The <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> menu button is now visible in the top-right corner of the chart. Click/hover over this menu button to see the dropdown menu with the export options, as shown in the image below:

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

The chart is downloaded to your machine in the selected format.

A column 2D chart with export enabled is shown below:

{% embed_all exporting-as-image-and-pdf-introduction-example-1.js %}

Click the __insert image here__ menu button and select a format to export the chart.

>  To process the export data on your own server, you can configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/server-side-export/setup-private-export-server/asp-net) guide. </p>

>  Starting version 3.8.0, FusionCharts Suite XT has also enabled the [client-side export feature](/exporting-charts/using-fc-export-server/client-side-export/exporting-charts-and-chart-data-using-client-side-exporting). The client-side export feature removes the round-trip involved in exporting from a  server while also addressing the data confidentiality issues that may arise from using a publicly hosted server. To enable client-side exporting, the `exportAtClientSide` attribute (also a chart level attribute) is set to __1__. </p>