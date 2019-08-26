---
title: Add Multiple Data Plots | FusionCharts
description: This article outlines the steps to add multiple data plots to a time-series chart.
heading: Add Multiple Data Plots
---

Previously, we have learned how to create a [simple chart](/fusiontime/getting-started/create-your-first-chart-in-fusiontime) with one data plot. FusionTime allows you to visualize charts with multiple plots.

In this article, we'll create our first chart with multiple plots which will compare online sales of SuperStore in the **US** and **India**.

The chart is shown below:

{% embed_ftChart online-sales-multi-series %}

Click [here](https://jsfiddle.net/fusioncharts/1btrzeqa/) to edit the above chart.

The data for the above chart is shown in the table below:

| Country       | Time       | Sales  |
| ------------- | ---------- | ------ |
| United States | 1/4/2011   | 16.448 |
| United States | 1/5/2011   | 72.736 |
| United States | 1/5/2011   | 11.784 |
| India         | 12/31/2014 | 364.59 |
| India         | 12/31/2014 | 72     |
| India         | 12/31/2014 | 39.42  |

## Render the chart

Now that you have the data handy, let's build the chart.

Create the `DataHandler.ashx` file and do the following:

- Include the `FusionCharts.DataEngine.dll` file.

- Include the `FusionCharts.Visualization.dll` file.

- Set response content type as "application/json".

- Create an object of the `MsSqlClass`.

- Create an object of the `DataModel` class.

- Add the object of `MsSqlClass` to the data source of data model.

- Convert the model to a data format the time series can accept.

- Write the converted data into a JSON file.

Refer to the code given below:

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
using System.Linq;
using System.Web;

namespace FcTest
{
    /// <summary>
    /// Summary description for DataHandler
    /// </summary>
    public class DataHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            /* create DataModel instance */
            DataModel model = new DataModel();

            /* create instance of MsSqlClass */
            CsvFileSource source = new CsvFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/OnlineSalesMultiSeries.csv");

            /* add msSql object to DataSources of model */
            model.DataSources.Add(source);

            
            context.Response.Write(TimeSeriesData.RenderCompatibleDataInJson(model));
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
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
Imports System.Linq
Imports System.Web

Namespace FcTest
    Public Class DataHandler
        Implements IHttpHandler

        Public Sub ProcessRequest(ByVal context As HttpContext)
            Dim model As DataModel = New DataModel()
            Dim source As CsvFileSource = New CsvFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/OnlineSalesMultiSeries.csv")
            model.DataSources.Add(source)
            context.Response.Write(TimeSeriesData.RenderCompatibleDataInJson(model))
        End Sub

        Public ReadOnly Property IsReusable As Boolean
            Get
                Return False
            End Get
        End Property
    End Class
End Namespace
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

Next, create the FirstTimeSeries.cs or FirstTimeSeries.vb file and do the following:

- Include the FusionCharts.Visualization .dll file.

- Initialize the `TimeSeriesChart` object of the `Charts` class.

- Provide the data handler filename ("DataHandler.ashx") as the value of the `SourcePathHandler` property of the `Data` object of the `timeSeries` class.

- Provide the value of the `Render()` method to the `Text` property of `Literal1`.

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
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FcTest
{
    public partial class ChartTest : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Charts.TimeSeriesChart timeSeries = new Charts.TimeSeriesChart("first_timeseries");
            timeSeries.Data.SourcePathHandler = @"DataHandler.ashx";
            timeSeries.Width.Pixel(700);
            timeSeries.Height.Pixel(500);
            timeSeries.SeriesName = "Country";
            timeSeries.YAxes.Plot.Add("Sales");
            Literal1.Text = timeSeries.Render();
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
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls

Namespace FcTest
    Public Partial Class ChartTest
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim timeSeries As Charts.TimeSeriesChart = New Charts.TimeSeriesChart("first_timeseries")
            timeSeries.Data.SourcePathHandler = "DataHandler.ashx"
            timeSeries.Width.Pixel(700)
            timeSeries.Height.Pixel(500)
            timeSeries.SeriesName = "Country"
            timeSeries.YAxes.Plot.Add("Sales")
            Literal1.Text = timeSeries.Render()
        End Sub
    End Class
End Namespace
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

Next, open the `MultipleDataplot.aspx` file and add the following line to it:

`<asp:Literal ID="Literal1" runat="server"></asp:Literal>`

Refer to the code given below:

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    <title></title>
    <script
      type="text/javascript"
      src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"
    ></script>
    <script
      type="text/javascript"
      src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"
    ></script>

    <script
      type="text/javascript"
      src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"
    ></script>
  </head>

  <body>
    <script></script>

    <form id="form1" runat="server">
      <div>
        <asp:Literal ID="Literal1" runat="server"></asp:Literal>
      </div>
    </form>
  </body>
</html>
```
