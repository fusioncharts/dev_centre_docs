---
title: Create a chart using Razor Page | FusionCharts
description: This article outlines the steps to create a chart using razor page
heading: Create a chart using Razor Page
---

ASP.NET core Razor page is a page-focused framework for building data-driven, dynamic web applications. Razor pages are mostly used for cross-platform development. FusionCharts.NET allows you to render charts using the razor page.

Now, let's create a Column 2D chart showing the **Most popular programming language**.

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-first-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/Dw6gBV) to edit the column chart.

Now, let's see how to render the chart using Razor page.

## Render the Chart

To render the chart using razor page, following the steps given below:

- In the ASP.NET core web application, add a razor page named `index.cshtml`.

- Add the following code to the above create razor page:

```csharp
@page
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
@model FusionChartsRazorSamples.Pages.IndexModel
@{
    Layout = null;
}

<!DOCTYPE html>

<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <script src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>

    <script src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <title>ColumnChart</title>
</head>

<body>
    <form method="post">
        <div>@Html.Raw(Model.ChartJson)</div>
        <br />
    </form>
</body>
</html>
```

- Now, add the following code to `index.cshtml.cs` file:

> Each `.cshtml` file has its `index.cshtml.cs` file.

```csharp
using System.Data;
using FusionCharts.DataEngine;
using FusionCharts.Visualization;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FusionChartsRazorSamples.Pages
{
    public class IndexModel : PageModel
    {
        // create a public property. OnGet method() set the chart configuration json in this property.
        // When the page is being loaded, OnGet method will be  invoked
        public string ChartJson { get; internal set; }
        public void OnGet()
        {

            // create data table to store data
            DataTable ChartData = new DataTable();
            // Add columns to data table
            ChartData.Columns.Add("Programming Language", typeof(System.String));
            ChartData.Columns.Add("Users", typeof(System.Double));
            // Add rows to data table

            ChartData.Rows.Add("Java", 62000);
            ChartData.Rows.Add("Python", 46000);
            ChartData.Rows.Add("Javascript", 38000);
            ChartData.Rows.Add("C++", 31000);
            ChartData.Rows.Add("C#", 27000);
            ChartData.Rows.Add("PHP", 14000);
            ChartData.Rows.Add("Perl", 14000);

            // Create static source with this data table
            StaticSource source = new StaticSource(ChartData);
            // Create instance of DataModel class
            DataModel model = new DataModel();
            // Add DataSource to the DataModel
            model.DataSources.Add(source);
            // Instantiate Column Chart
            Charts.ColumnChart column = new Charts.ColumnChart("first_chart");
            // Set Chart's width and height
            column.Width.Pixel(700);
            column.Height.Pixel(400);
            // Set DataModel instance as the data source of the chart
            column.Data.Source = model;
            // Set Chart Title
            column.Caption.Text = "Most popular programming language";
            // Set chart sub title
            column.SubCaption.Text = "2017-2018";
            // hide chart Legend
            column.Legend.Show = false;
            // set XAxis Text
            column.XAxis.Text = "Programming Language";
            // Set YAxis title
            column.YAxis.Text = "User";
            // set chart theme
            column.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // set chart rendering json
            ChartJson = column.Render();
        }
    }
}
```
