---
permalink: exporting-charts/using-fusionexport/overview.html
title: Overview | FusionCharts
description: Talks about FusionExport
heading: Overview
chartPresent: False
---

With FusionExport, you can export any JavaScript chart as a static image, bulk export multiple charts as a zip file, or export multiple charts embedded in an HTML dashboard template.

Charts can be converted into several image formats __PNG__, __JPEG__, __SVG__, __PDF__, __HTML__ and data formats __CSV__, __XLS__, __XLSX__.

Dashboards can be converted into __PNG__, __JPEG__, __PDF__, __HTML__ formats.

__Two main parts make FusionExport :__ 

* The export engine
* The client-side interface

## FusionExport architecture

![FusionExport Architecture Diagram](/assets/images/fusionexport-architecture-diagram.png)

<div class="text-info">
	<strong>To interact with FusionExport, you can either go for simple CLI or use the language of your choice.</strong>
	<div class="mt-10">If you're using the CLI, choose between FusionExport Desktop (local export) or, FusionExport Web Service (remote export) based on your requirement.</div>
	<div class="mt-10">If you're using any of the 6 available language SDKs, use FusionExport Desktop (local export) to export your charts & dashboards. SDKs are available for Node.js, Java, C#, PHP, Python and Golang.</div>
</div>

__For the processing site, you can choose between remote and local.__
To process export activities locally, install FusionExport Desktop which talks to the client-interface via a socket connection. FusionExport Desktop also comes with a GUI that lets you monitor ongoing operations. 
FusionExport Web Service is our remote export engine that communicates with your interface through HTTP connections.

