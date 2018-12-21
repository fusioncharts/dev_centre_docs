---
title: Export Charts | FusionCharts
description: This article outlines the steps to export charts
heading: Export charts
---

In `FusionCharts.NET`, you could export your charts as images, PDFs, and also choose whether to export at client-side or server-side.

In this article, we will learn how to enable export in the charts. A chart with export enabled is shown in the image below:

![Export]({% site.baseurl %}/images/fusioncharts-net-export.png)

## Enable Export

By default, the option to export charts is turned off. To enable the export option, refer to the code below:

```
// Instantiate Column Chart
Charts.ColumnChart column = new Charts.ColumnChart("chart_exporting");

// Set Chart's width and height
column.Width = "1000";
column.Height = "600";

// Configure export settings
column.Export.Enabled = true;
column.Export.ExportedFileName = "fusioncharts.net_visualizations_exported_files";
column.Export.Action = Exporter.ExportAction.DOWNLOAD;

...

// Render the chart to 'Literal1' literal control
Literal1.Text = column.Render();
```

In the above code:

* Instantiate the Column chart.
* Set the chart `width` and `height`.
* Set the `Enabled` properties to `true` to enable the export option.
* Set the name of the export file by using the `ExportedFileName` properties.
* Set the `.Action` properties as **DOWNLOAD** or **SAVE** to specify the type of action while exporting.

A chart with export enabled is shown below:

{% embed_chart fusioncharts-net-visualization-export-chart-example-1.js %}

In the above chart, click on the export menu on the top right corner of the chart to export.