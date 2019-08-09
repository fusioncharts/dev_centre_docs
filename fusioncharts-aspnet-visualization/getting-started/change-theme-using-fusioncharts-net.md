---
title: Change Theme | FusionCharts
description: This article outlines the steps to set common theme in a single page
heading: Change Theme
---

In `FusionCharts.NET` you can manually set the cosmetics and functional attributes for each chart and its components. This can work if you deal with only a small number of charts. As the number of charts increases, so does your hassles. `FusionCharts.NET` ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

`FusionCharts.NET` ships with the following predefined themes:

- fusion
- gammel
- candy
- zune
- ocean
- carbon

This article focuses on how to change the theme of a chart.

A chart configured to change the theme is shown below:

{% embed_chart fusioncharts-net-visualization-change-theme-example-1.js %}

To change the theme refer to the code below:

```csharp
using System;
using System.Collections.Generic;
using System.Data;
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
            column.Width.Pixel(700);
            column.Height.Pixel(400);
            // Set DataModel instance as the data source of the chart
            column.Data.Source = model;
            // Set Chart Title
            column.Caption.Text = "Most popular programming language";
            // set XAxis Text
            column.XAxis.Text = "Programming Language";
            // Set YAxis title
            column.YAxis.Text = "User";
            column.Legend.Show = false;
            // add theme GAMMEL
             column.ThemeName = FusionChartsTheme.ThemeName.GAMMEL;
            column.Values.Show = true;
            Literal1.Text = column.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    <title></title>
  </head>
  <body>
    <script
      type="text/javascript"
      src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"
    ></script>
    <script
      type="text/javascript"
      src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"
    ></script>

    <form id="form1" runat="server">
      <div>
        <asp:Literal ID="Literal1" runat="server"></asp:Literal>
      </div>
    </form>
  </body>
</html>
```

In the above code set the chart level theme as `Gammel` using the `Themes` properties of the `PageLevelTheme` object. By default, the theme is set as `Fusion`.

A chart with the Gammel theme applied is shown below:

{% embed_chart fusioncharts-net-visualization-change-theme-example-2.js %}

Click [here](https://dotnetfiddle.net/wIGPdp) to edit the above chart.
