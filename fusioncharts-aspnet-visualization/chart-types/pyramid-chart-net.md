---
title: Pyramid chart | FusionCharts
description: Read our comprehensive article and learn the step-by-step process of creating a Pyramid chart and visualize the Global Wealth Pyramid using a funnel chart.
heading: Pyramid chart
---

Now, let's learn how to create a Pyramid chart. We will create a funnel chart showcasing the Global Wealth Pyramid.

The chart will look as shown below:

{% embed_chart standard-charts-pyramid-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/aCkWm8) to edit the pyramid chart.

## Render the Chart

Create the `PyramidChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Add two columns and multiple rows to the `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `StaticSource` as data source to the `DataModel`.
* Instantiate Pyramid chart.
* Set chart `width` and `height`.
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
using FusionCharts.Visualization;
using FusionCharts.DataEngine;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class PyramidChart : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Label", typeof(System.String));
            ChartData.Columns.Add("Value", typeof(System.Double));
            ChartData.Rows.Add("Top 32 mn (0.7%)", 98.7);
            ChartData.Rows.Add("Next 361 mn (7.7%)", 101.8);
            ChartData.Rows.Add("Next 1.1 bn (22.9%)", 33);
            ChartData.Rows.Add("Last 3.2 bn (68.7%)", 7.3);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Widget.PyramidChart pyramid = new Widget.PyramidChart("first_pyramid_chart");
            pyramid.Data.Source = model;
            pyramid.Caption.Text = "Global Wealth Pyramid";
            pyramid.Caption.OnTop = false;
            pyramid.SubCaption.Text = "Credit Suisse 2013";
            pyramid.Width.Pixel(400);
            pyramid.Height.Pixel(400);
            pyramid.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
Imports FusionCharts.Visualization
Imports FusionCharts.DataEngine
Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports System.Data

Namespace FusionChartsVisualisationWebFormsSamples.Samples
    Public Partial Class PyramidChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim ChartData As DataTable = New DataTable()
            ChartData.Columns.Add("Label", GetType(System.String))
            ChartData.Columns.Add("Value", GetType(System.Double))
            ChartData.Rows.Add("Top 32 mn (0.7%)", 98.7)
            ChartData.Rows.Add("Next 361 mn (7.7%)", 101.8)
            ChartData.Rows.Add("Next 1.1 bn (22.9%)", 33)
            ChartData.Rows.Add("Last 3.2 bn (68.7%)", 7.3)
            Dim source As StaticSource = New StaticSource(ChartData)
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(source)
            Dim pyramid As Widget.PyramidChart = New Widget.PyramidChart("first_pyramid_chart")
            pyramid.Data.Source = model
            pyramid.Caption.Text = "Global Wealth Pyramid"
            pyramid.Caption.OnTop = False
            pyramid.SubCaption.Text = "Credit Suisse 2013"
            pyramid.Width.Pixel(400)
            pyramid.Height.Pixel(400)
            pyramid.ThemeName = FusionChartsTheme.ThemeName.FUSION
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
