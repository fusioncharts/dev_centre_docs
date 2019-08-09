---
title: Export Charts | FusionCharts
description: This article outlines the steps to export charts
heading: Export charts
---

In `FusionCharts.NET`, you could export your charts as images, PDFs, and also choose whether to export at client-side or server-side.

In this article, we will learn how to enable export in the charts. A chart with export enabled is shown in the image below:

![Export](/images/fusioncharts-net-export.png)

## Enable Export

By default, the option to export charts is turned off. To enable the export option, refer to the code below:

```csharp
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FusionCharts.DataEngine;
using FusionCharts.Visualization;

namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class FirstChart: System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Programming Language", typeof(System.String));
            ChartData.Columns.Add("Users", typeof(System.Double));
            ChartData.Rows.Add("Java",62000);
            ChartData.Rows.Add("Python",46000);
            ChartData.Rows.Add("Javascript",38000);
            ChartData.Rows.Add("C++",31000);
            ChartData.Rows.Add("C#",27000);
            ChartData.Rows.Add("PHP",14000);
            ChartData.Rows.Add("Perl",14000);

            // Create static source with this data table
            StaticSource source = new StaticSource(ChartData);
            // Create instance of DataModel class
            DataModel model = new DataModel();
            // Add DataSource to the DataModel
            model.DataSources.Add(source);
            // Instantiate Column Chart
            Charts.ColumnChart column = new Charts.ColumnChart("first_chart");
            // Set Chart's width and height
            column.Width.Pixel(550);
            column.Height.Pixel(400);
            // Set DataModel instance as the data source of the chart
            column.Data.Source = model;
            // Set Chart Title
            column.Caption.Text = "Most popular programming language";
            // set XAxis Text
            column.XAxis.Text = "Programming Language";
            // Set YAxis title
            column.YAxis.Text = "User";
            // Configure export settings
            column.Export.Enabled = true;
            column.Export.ExportedFileName = "fusioncharts.net_visualizations_exported_files";
            column.Export.Action = Exporter.ExportAction.DOWNLOAD;
            column.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render the chart to 'Literal1' literal control
            Literal1.Text = column.Render();
        }
    }
}
```

In the above code:

- Instantiate the Column chart.
- Set the chart `width` and `height`.
- Set the `Enabled` properties to `true` to enable the export option.
- Set the name of the export file by using the `ExportedFileName` properties.
- Set the `Action` properties as **DOWNLOAD** or **SAVE** to specify the type of action while exporting.

A chart with export enabled is shown below:

{% embed_chart fusioncharts-net-visualization-export-chart-example-1.js %}

In the above chart, click on the export menu on the top right corner of the chart to export.
