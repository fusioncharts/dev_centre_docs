---
permalink: getting-started/export-your-charts.html
title: Export your charts | FusionCharts
description: Talks about FusionExport
heading: Export using FusionCharts Export Server
chartPresent: False
---

FusionCharts Suite XT uses VML and SVG to render JavaScript charts in the browser, and lets you export the rendered charts in several formats.
JavaScript charts can be exported as static images in following formats:

* JPEG
* PNG
* SVG
* PDF

A server-side helper library converts the SVG into the format you choose. To export VML, FusionCharts Suite XT first changes it to SVG internally. The data is sent to FusionCharts’ servers to be processed, generating the output in the format you’ve specified.
For client-side exports, the entire process takes place using the user’s browser itself. The chart’s SVG is converted into the desired output format. It is then downloaded via the HTML5 download attribute.
Click <a href="/exporting-charts/using-fc-export-server/exporting-charts-as-image-and-pdf.html">here</a> to know more.

<h1>Export using FusionExport <span class="bubble-text">Beta</span></h1>

With FusionExport, you can export any JavaScript chart as a static image, bulk export in a ZIP file, or export multiple charts embedded in an HTML dashboard template.

Charts can be converted into several image and data formats:

* PNG
* JPEG
* SVG
* PDF
* CSV
* XLS
* XLSX
* HTML 

Dashboard output can be a PNG, JPEG, PDF, or an HTML file.

You can use a simple CLI to export your chart – our extensive CLI reference library lists all the commands that can help customize your output. Or, you can choose Node.js, Java, C#, PHP, Python and Golang using FusionExport Language SDKs.
Charts are processed either locally, using FusionExport Desktop via a socket connection, or on cloud using the FusionExport Web Service, through an HTTP connection. 
FusionExport Desktop also includes a GUI component that lets you start, stop, and monitor ongoing processes.

Click <a href="/exporting-charts/using-fusionexport/overview.html">here</a> to know more.