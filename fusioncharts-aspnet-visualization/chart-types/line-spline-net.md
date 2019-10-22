---
title: Line and Spline charts | FusionCharts
description: This article outlines the steps of how to create the line and spline charts
heading: Line and Spline charts
---

## Line Chart

Now, let's learn how to create a Line chart. We will create a chart showcasing "Total Footfall in Bakersfield Central". 

The data is shown in the table below:

| Day       | Footfall |
| --------- | -------- |
| Monday    | 15123    |
| Tuesday   | 14233    |
| Wednesday | 23507    |
| Thursday  | 9110     |
| Friday    | 15529    |
| Saturday  | 20803    |
| Sunday    | 19202    |

The chart will look as shown below:

{% embed_chart fusioncharts-net-line-sample-example-1.js %}

Click [here](https://dotnetfiddle.net/uJZgOU) to edit the line chart.

## Render the Chart

Create the `LineChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add two columns and multiple rows to the `DataTable`.
* Add `DataSource` to the `DataModel`.
* Instantiate Line chart.
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
    public partial class SeriesCustomization : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Day", typeof(System.String));
            ChartData.Columns.Add("No. of Visitors", typeof(System.Double));
            ChartData.Rows.Add("Mon", 15123);
            ChartData.Rows.Add("Tue", 14233);
            ChartData.Rows.Add("Wed", 23507);
            ChartData.Rows.Add("Thu", 9110);
            ChartData.Rows.Add("Fri", 15529);
            ChartData.Rows.Add("Sat", 20803);
            ChartData.Rows.Add("Sun", 19202);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);

            Charts.LineChart line = new Charts.LineChart("line_chart_db");

            line.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            line.Width.Pixel(700);
            line.Height.Pixel(400);

            line.Data.Source = model;

            line.Caption.Text = "Total Footfall in BakersField Central";
            line.Caption.Bold = true;

            line.SubCaption.Text = "Last Week";
            line.XAxis.Text = "Day";
            line.YAxis.Text = "No. of visitors";

            line.Legend.Show = false;
            line.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
    Public Partial Class SeriesCustomization
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim ChartData As DataTable = New DataTable()
            ChartData.Columns.Add("Day", GetType(System.String))
            ChartData.Columns.Add("No. of Visitors", GetType(System.Double))
            ChartData.Rows.Add("Mon", 15123)
            ChartData.Rows.Add("Tue", 14233)
            ChartData.Rows.Add("Wed", 23507)
            ChartData.Rows.Add("Thu", 9110)
            ChartData.Rows.Add("Fri", 15529)
            ChartData.Rows.Add("Sat", 20803)
            ChartData.Rows.Add("Sun", 19202)
            Dim source As StaticSource = New StaticSource(ChartData)
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(source)
            Dim line As Charts.LineChart = New Charts.LineChart("line_chart_db")
            line.ThemeName = FusionChartsTheme.ThemeName.FUSION
            line.Width.Pixel(700)
            line.Height.Pixel(400)
            line.Data.Source = model
            line.Caption.Text = "Total Footfall in BakersField Central"
            line.Caption.Bold = True
            line.SubCaption.Text = "Last Week"
            line.XAxis.Text = "Day"
            line.YAxis.Text = "No. of visitors"
            line.Legend.Show = False
            line.ThemeName = FusionChartsTheme.ThemeName.FUSION
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

<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
   
    <form id="form1" runat="server">
        <div>
            <asp:Literal ID="Literal1" runat="server"></asp:Literal>
        </div>
        <div>
            <input type ="button" value ="Samples" onclick="location.href = 'Index.aspx';" />
        </div>
    </form>
</body>
</html>

```

## Scroll Line Chart

Now, let's learn how to create a Scrollable Line Chart. The chart will look as shown below:

{% embed_chart standard-charts-scroll-charts-example-2.js %}

Click [here](https://dotnetfiddle.net/Irr2ht) to edit the scroll line chart.

## Render the Chart

Create the `ScrollLineChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add two columns and multiple rows to the `DataTable`.
* Add `DataSource` to the `DataModel`.
* Instantiate Line chart.
* Set chart `width` and `height`.
* Set the `Scrollable` property of the chart to `true`.
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
    public partial class ScrollChart : System.Web.UI.Page 
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Month", typeof(System.String));
            ChartData.Columns.Add("Revenue", typeof(System.Double));
            ChartData.Rows.Add("Jan 2016", 27400);
            ChartData.Rows.Add("Feb 2016", 29800);
            ChartData.Rows.Add("Mar 2016", 25800);
            ChartData.Rows.Add("Apr 2016", 26800);
            ChartData.Rows.Add("May 2016", 29600);
            ChartData.Rows.Add("Jun 2016", 32600);
            ChartData.Rows.Add("Jul 2016", 31800);
            ChartData.Rows.Add("Aug 2016", 36700);
            ChartData.Rows.Add("Sep 2016", 29700);
            ChartData.Rows.Add("Oct 2016", 31900);
            ChartData.Rows.Add("Nov 2016", 34800);
            ChartData.Rows.Add("Dec 2016", 24800);
            ChartData.Rows.Add("Jan 2017", 26300);
            ChartData.Rows.Add("Feb 2017", 31800);
            ChartData.Rows.Add("Mar 2017", 30900);
            ChartData.Rows.Add("Apr 2017", 33000);
            ChartData.Rows.Add("May 2017", 36200);
            ChartData.Rows.Add("Jun 2017", 32100);
            ChartData.Rows.Add("Jul 2017", 37500);
            ChartData.Rows.Add("Aug 2017", 38500);
            ChartData.Rows.Add("Sep 2017", 35400);
            ChartData.Rows.Add("Oct 2017", 38200);
            ChartData.Rows.Add("Nov 2017", 33300);
            ChartData.Rows.Add("Dec 2017", 38300);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Charts.LineChart line = new Charts.LineChart("scroll_chart_db");
            line.Scrollable = true;
            line.Data.Source = model;
            line.Caption.Text = "Sales Trends";
            line.SubCaption.Text = "2016-2017";
            line.XAxis.Text = "Month";
            line.YAxis.Text = "Revenue";
            line.Width.Pixel(600);
            line.Height.Pixel(500);
            line.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
    Public Partial Class ScrollChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim ChartData As DataTable = New DataTable()
            ChartData.Columns.Add("Month", GetType(System.String))
            ChartData.Columns.Add("Revenue", GetType(System.Double))
            ChartData.Rows.Add("Jan 2016", 27400)
            ChartData.Rows.Add("Feb 2016", 29800)
            ChartData.Rows.Add("Mar 2016", 25800)
            ChartData.Rows.Add("Apr 2016", 26800)
            ChartData.Rows.Add("May 2016", 29600)
            ChartData.Rows.Add("Jun 2016", 32600)
            ChartData.Rows.Add("Jul 2016", 31800)
            ChartData.Rows.Add("Aug 2016", 36700)
            ChartData.Rows.Add("Sep 2016", 29700)
            ChartData.Rows.Add("Oct 2016", 31900)
            ChartData.Rows.Add("Nov 2016", 34800)
            ChartData.Rows.Add("Dec 2016", 24800)
            ChartData.Rows.Add("Jan 2017", 26300)
            ChartData.Rows.Add("Feb 2017", 31800)
            ChartData.Rows.Add("Mar 2017", 30900)
            ChartData.Rows.Add("Apr 2017", 33000)
            ChartData.Rows.Add("May 2017", 36200)
            ChartData.Rows.Add("Jun 2017", 32100)
            ChartData.Rows.Add("Jul 2017", 37500)
            ChartData.Rows.Add("Aug 2017", 38500)
            ChartData.Rows.Add("Sep 2017", 35400)
            ChartData.Rows.Add("Oct 2017", 38200)
            ChartData.Rows.Add("Nov 2017", 33300)
            ChartData.Rows.Add("Dec 2017", 38300)
            Dim source As StaticSource = New StaticSource(ChartData)
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(source)
            Dim line As Charts.LineChart = New Charts.LineChart("scroll_chart_db")
            line.Scrollable = True
            line.Data.Source = model
            line.Caption.Text = "Sales Trends"
            line.SubCaption.Text = "2016-2017"
            line.XAxis.Text = "Month"
            line.YAxis.Text = "Revenue"
            line.Width.Pixel(600)
            line.Height.Pixel(500)
            line.ThemeName = FusionChartsTheme.ThemeName.FUSION
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
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
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

## Spline Chart

Now, let's learn how to create a spline chart with the same data. The code remains the same as that of the Line chart. The only difference is instead of instantiating a line chart you have to instantiate a spline chart. Create a `splineChart.aspx.cs` and refer to the code below:

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
    public partial class SeriesCustomization : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Day", typeof(System.String));
            ChartData.Columns.Add("No. of Visitors", typeof(System.Double));
            ChartData.Rows.Add("Mon", 15123);
            ChartData.Rows.Add("Tue", 14233);
            ChartData.Rows.Add("Wed", 23507);
            ChartData.Rows.Add("Thu", 9110);
            ChartData.Rows.Add("Fri", 15529);
            ChartData.Rows.Add("Sat", 20803);
            ChartData.Rows.Add("Sun", 19202);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);

            Charts.SplineChart spline = new Charts.SplineChart("spline_chart");

            spline.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            spline.Width.Pixel(700);
            spline.Height.Pixel(400);

            spline.Data.Source = model;

            spline.Caption.Text = "Total Footfall in BakersField Central";
            spline.Caption.Bold = true;

            spline.SubCaption.Text = "Last Week";
            spline.XAxis.Text = "Day";
            spline.YAxis.Text = "No. of visitors";

            spline.Legend.Show = false;
            
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
    Public Partial Class SeriesCustomization
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim ChartData As DataTable = New DataTable()
            ChartData.Columns.Add("Day", GetType(System.String))
            ChartData.Columns.Add("No. of Visitors", GetType(System.Double))
            ChartData.Rows.Add("Mon", 15123)
            ChartData.Rows.Add("Tue", 14233)
            ChartData.Rows.Add("Wed", 23507)
            ChartData.Rows.Add("Thu", 9110)
            ChartData.Rows.Add("Fri", 15529)
            ChartData.Rows.Add("Sat", 20803)
            ChartData.Rows.Add("Sun", 19202)
            Dim source As StaticSource = New StaticSource(ChartData)
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(source)
            Dim spline As Charts.SplineChart = New Charts.SplineChart("spline_chart")
            spline.ThemeName = FusionChartsTheme.ThemeName.FUSION
            spline.Width.Pixel(700)
            spline.Height.Pixel(400)
            spline.Data.Source = model
            spline.Caption.Text = "Total Footfall in BakersField Central"
            spline.Caption.Bold = True
            spline.SubCaption.Text = "Last Week"
            spline.XAxis.Text = "Day"
            spline.YAxis.Text = "No. of visitors"
            spline.Legend.Show = False
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
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
   
    <form id="form1" runat="server">
        <div>
            <asp:Literal ID="Literal1" runat="server"></asp:Literal>
        </div>
        <div>
            <input type ="button" value ="Samples" onclick="location.href = 'Index.aspx';" />
        </div>
    </form>
</body>
</html>
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-spline-sample-example-2.js %}

Click [here](https://dotnetfiddle.net/hnbWR6) to edit the spline chart.
