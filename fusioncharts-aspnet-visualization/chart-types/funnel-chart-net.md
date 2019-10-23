---
title: Funnel chart | FusionCharts
description: This article outlines the steps to create funnel chart
heading: Funnel chart
---

Now, let's learn how to create a Funnel chart. We will create a chart showcasing the purchase-conversion analysis ofa a website. The data will look as shown below:

| Wesite Sections                  | Website Visits |
| -------------------------------- | -------------- |
| Unique Website Visits            | 1460000        |
| Programme Details Section Visits | 930000         |
| Attempts to Register             | 540000         |
| Successful Registrations         | 210000         |
| Logged In                        | 190000         |
| Purchased on Introductory Offers | 120000         |

The chart will look as shown below:

{% embed_chart standard-charts-funnel-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/FWAZel) to edit the funnel chart.

## Render the Chart

Create the `FunnelChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Add two columns and multiple rows to the `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `StaticSource` as data source to the `DataModel`.
* Instantiate Funnel chart.
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
    public partial class FunnelChart : System.Web.UI.Page 
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Label", typeof(System.String));
            ChartData.Columns.Add("Value", typeof(System.Double));
            ChartData.Rows.Add("Unique Website Visits", 1460000);
            ChartData.Rows.Add("Programme Details Section Visits", 930000);
            ChartData.Rows.Add("Attempts to Register", 540000);
            ChartData.Rows.Add("Successful Registrations", 210000);
            ChartData.Rows.Add("Logged In", 190000);
            ChartData.Rows.Add("Purchased on Introductory Offers", 120000);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Widget.FunnelChart funnel = new Widget.FunnelChart("first_Funnel_chart");
            funnel.Data.Source = model;
            funnel.Caption.Text = "Visit to purchase analysis";
            funnel.Caption.Text = "Harry's Supermart";
            funnel.SubCaption.Text = "Visit to purchase- Conversion Analysis for last year";
            funnel.Width.Pixel(600);
            funnel.Height.Pixel(400);
            funnel.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
    Public Partial Class FunnelChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim ChartData As DataTable = New DataTable()
            ChartData.Columns.Add("Label", GetType(System.String))
            ChartData.Columns.Add("Value", GetType(System.Double))
            ChartData.Rows.Add("Unique Website Visits", 1460000)
            ChartData.Rows.Add("Programme Details Section Visits", 930000)
            ChartData.Rows.Add("Attempts to Register", 540000)
            ChartData.Rows.Add("Successful Registrations", 210000)
            ChartData.Rows.Add("Logged In", 190000)
            ChartData.Rows.Add("Purchased on Introductory Offers", 120000)
            Dim source As StaticSource = New StaticSource(ChartData)
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(source)
            Dim funnel As Widget.FunnelChart = New Widget.FunnelChart("first_Funnel_chart")
            funnel.Data.Source = model
            funnel.Caption.Text = "Visit to purchase analysis"
            funnel.Caption.Text = "Harry's Supermart"
            funnel.SubCaption.Text = "Visit to purchase- Conversion Analysis for last year"
            funnel.Width.Pixel(600)
            funnel.Height.Pixel(400)
            funnel.ThemeName = FusionChartsTheme.ThemeName.FUSION
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
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <form id="form1" runat="server">
        <div>
            <asp:Literal ID ="Literal1" runat ="server"></asp:Literal>
        </div>
        <div>
            <input type ="button" value ="Samples" onclick="location.href = 'Index.aspx';" />
        </div>
    </form>
</body>
</html>
```
