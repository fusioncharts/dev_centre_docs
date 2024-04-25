---
title: Stacked charts | FusionCharts
description: Learn how to craft a Stacked Chart to showcase revenue distribution across quarters of the current year by product category. Read article for more information.
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

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Add two columns and multiple rows to the `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* * Add `DataSource` to the `DataModel`.
* Instantiate Stacked chart.
* Set chart `width` and `height`.
* Set the type of stacked chart as `BAR`, `COLUMN`, or `AREA`.
* Set `DataModel` instance as the data source of the chart.
* Optionally, set chart title, subtitle, X-axis text, and Y-axis text.
* Optionally, set the chart theme as `fusion`.
* Return the chart rendering configuration into the server side literal, or set the chart configuration as `Literal.text`.

The code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-csharp">
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
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-csharp">
Imports FusionCharts.DataEngine
Imports FusionCharts.Visualization
Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Data.SqlClient
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls

Namespace FusionChartsVisualisationWebFormsSamples.Samples
    Public Partial Class StackedChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim ChartData As DataTable = New DataTable()
            ChartData.Columns.Add("Quarter", GetType(System.String))
            ChartData.Columns.Add("Food Products", GetType(System.Double))
            ChartData.Columns.Add("Non-Food Products", GetType(System.Double))
            ChartData.Rows.Add("Q1", 11000, 11400)
            ChartData.Rows.Add("Q2", 15000, 14800)
            ChartData.Rows.Add("Q3", 13500, 8300)
            ChartData.Rows.Add("Q4", 15000, 11800)
            Dim source As StaticSource = New StaticSource(ChartData)
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(source)
            Dim stack As Charts.StackedChart = New Charts.StackedChart("stacked_chart_db")
            stack.Width.Pixel(700)
            stack.Height.Pixel(400)
            stack.Caption.Text = "Revenue split by product aategory"
            stack.Caption.Bold = True
            stack.SubCaption.Text = "for current year"
            stack.XAxis.Text = "Quarter"
            stack.YAxis.Text = "Revenue"
            stack.Data.Source = model
            stack.ThemeName = FusionChartsTheme.ThemeName.FUSION
            Literal1.Text = column.Render()
        End Sub
    End Class
End Namespace
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

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
