---
title: Stacked charts | FusionCharts
description: This article outlines the steps to create stacked charts
heading: Stacked charts
---

Now, let's learn how to create a Stacked Chart. We will create a chart showcasing revenue split for each quarter of the current year by product category - food products and non-food products. The data will look as shown below:

<table>
    <tr>
        <th>Quarter</th>
        <th>Product Type</th>
        <th>Revenue(in USD)</th>
    </tr>
    <tr>
        <td>Q1</td>
        <td>Food Products</td>
        <td>11000</td>
    </tr>
    <tr>
        <td>    </td>
        <td>Non-Food Products</td>
        <td>11400</td>
    </tr>
    <tr>
        <td>Q2</td>
        <td>Food Products</td>
        <td>15000</td>
    </tr>
    <tr>
        <td>    </td>
        <td>Non-Food Products</td>
        <td>14800</td>
    </tr>
    <tr>
        <td>Q3</td>
        <td>Food Products</td>
        <td>13500</td>
    </tr>
    <tr>
        <td>    </td>
        <td>Non-Food Products</td>
        <td>8300</td>
    </tr>
    <tr>
        <td>Q4</td>
        <td>Food Products</td>
        <td>15000</td>
    </tr>
    <tr>
        <td>    </td>
        <td>Non-Food Products</td>
        <td>11800</td>
    </tr>
</table>

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-stacked-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/RqWwld) to edit the stacked chart.

## Render the Chart

Create the `StackedChart.aspx.cs` file and do the following:

- Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files.
- Create `DataTable`.
- Retrieve data using database query.
- Set server name.
- Set `DataBase` name.
- Connect with `DataBase` using a connection string.
- Create `StaticSource` using the data table.
- Create an instance of `DataModel` class.
- Add `DataSource` to the `DataModel`.
- Instantiate Stacked Chart.
- Set chart width.
- Set chart height.
- Set the type of stacked chart as `BAR`, `COLUMN`, or `AREA`.
- Set `DataModel` instance as the data source of the chart.
- Set Chart title.
- Finally, use a container using `<div>` to render the chart.

The code is shown below:

```csharp
using FusionCharts.DataEngine;
using FusionCharts.Visualization;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FusionChartsVisualisationWebFormsSamples.Samples 
{
    public partial class StackedChart : System.Web.UI.Page 
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Quarter", typeof(System.String));
            ChartData.Columns.Add("Food Products", typeof(System.Double));
            ChartData.Columns.Add("Non-Food Products", typeof(System.Double));
            ChartData.Rows.Add("Q1", 11000, 11400);
            ChartData.Rows.Add("Q2", 15000, 14800);
            ChartData.Rows.Add("Q3", 13500, 8300);
            ChartData.Rows.Add("Q4", 15000, 11800);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Charts.StackedChart stack = new Charts.StackedChart("stacked_chart_db");
            stack.Width.Pixel(700);
            stack.Height.Pixel(400);
            stack.Caption.Text = "Revenue split by product aategory";
            stack.Caption.Bold = true;
            stack.SubCaption.Text = "for current year";
            stack.XAxis.Text = "Quarter";
            stack.YAxis.Text = "Revenue";
            stack.Data.Source = model;
            stack.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render the chart to 'Literal1' literal control
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
      <div>
        <input
          type="button"
          value="Samples"
          onclick="location.href = 'Index.aspx';"
        />
      </div>
    </form>
  </body>
</html>
```
