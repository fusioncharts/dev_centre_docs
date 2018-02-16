---
permalink: exporting-charts/using-excelexport/excel-export-workflow.html
title: Excel Export Workflow | FusionCharts
description: This page talks about the workflow of excel export
heading: Excel Export Workflow
chartPresent: False
---

A high-level flow diagram of the export process using the FusionCharts Excel export feature is shown below:

![Excel Export]({{ site.baseurl }}assets/images/excel-export-workflow.png)

The process to export charts using FusionCharts Excel export is given below:

* Select **Export As Excel**.

* Client sends a request containing the **chart config**, **svg of the chart**, and the **csv data** to the FusionCharts/privately set up Excel Export server.

* The request is handled by the wrapper designed according to the type of web server.

* The wrapper extracts the required chart data and sends it to the core Excel export engine.

* The core engine works on the data received and creates a corresponding excel file. The file contains the chart and the data which is sent back to the wrapper.

* The wrapper then sends the excel to the client.