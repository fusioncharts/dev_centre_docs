---
title: Area chart | FusionCharts
description: This article outlines the steps of how to create the area chart.
heading: Area chart
---

Now, let's learn how to create an Area Chart. We will create an Area chart showing "Weekly Liquor Sales". The data will look as shown below:

| Day       | Sales(in USD) |
| --------- | ------------- |
| Monday    | 4123          |
| Tuesday   | 4633          |
| Wednesday | 5507          |
| Thursday  | 4910          |
| Friday    | 5529          |
| Saturday  | 5803          |
| Sunday    | 6202          |

The chart will look as shown below:

{% embed_chart fusioncharts-net-visulization-area-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/EUQZGN) to edit the spline chart.

## Render the Chart

Create the `AreaChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Add two columns and multiple rows to the `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `StaticSource` as data source to the `DataModel`.
* Instantiate Area chart.
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
            ChartData.Columns.Add("Sales", typeof(System.Double));
            ChartData.Rows.Add("Mon", 4123);
            ChartData.Rows.Add("Tue", 4633);
            ChartData.Rows.Add("Wed", 5507);
            ChartData.Rows.Add("Thu", 4910);
            ChartData.Rows.Add("Fri", 5529);
            ChartData.Rows.Add("Sat", 5803);
            ChartData.Rows.Add("Sun", 6202);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Charts.AreaChart area = new Charts.AreaChart("area_chart_db");
            area.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            area.Width.Pixel(550);
            area.Height.Pixel(400);
            area.Data.Source = model;
            area.Caption.Text = "Sales of Liquor";
            area.Caption.Bold = true;
            area.SubCaption.Text = "Last week";
            area.XAxis.Text = "Day";
            area.YAxis.Text = "Sales";
            area.Legend.Show = false;
            area.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
            ChartData.Columns.Add("Sales", GetType(System.Double))
            ChartData.Rows.Add("Mon", 4123)
            ChartData.Rows.Add("Tue", 4633)
            ChartData.Rows.Add("Wed", 5507)
            ChartData.Rows.Add("Thu", 4910)
            ChartData.Rows.Add("Fri", 5529)
            ChartData.Rows.Add("Sat", 5803)
            ChartData.Rows.Add("Sun", 6202)
            Dim source As StaticSource = New StaticSource(ChartData)
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(source)
            Dim area As Charts.AreaChart = New Charts.AreaChart("area_chart_db")
            area.ThemeName = FusionChartsTheme.ThemeName.FUSION
            area.Width.Pixel(550)
            area.Height.Pixel(400)
            area.Data.Source = model
            area.Caption.Text = "Sales of Liquor"
            area.Caption.Bold = True
            area.SubCaption.Text = "Last week"
            area.XAxis.Text = "Day"
            area.YAxis.Text = "Sales"
            area.Legend.Show = False
            area.ThemeName = FusionChartsTheme.ThemeName.FUSION
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

```HTML
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

## Scroll Area Chart

Now, let's learn how to create a Scrollable Area Chart. The code remains the same as that of the scroll line chart. The only difference is instead of instantiating a linne chart you have to instantiate an area chart. 

## Render the Chart

Create a `ScrollAreaChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add two columns and multiple rows to the `DataTable`.
* Add `DataSource` to the `DataModel`.
* Instantiate Area chart.
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
            Charts.AreaChart area = new Charts.AreaChart("scroll_chart_db");
            area.Scrollable = true;
            area.Data.Source = model;
            area.Caption.Text = "Sales Trends";
            area.SubCaption.Text = "2016-2017";
            area.XAxis.Text = "Month";
            area.YAxis.Text = "Revenue";
            area.Width.Pixel(600);
            area.Height.Pixel(500);
            area.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            Literal1.Text = area.Render();
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
            Dim area As Charts.AreaChart = New Charts.AreaChart("scroll_chart_db")
            area.Scrollable = True
            area.Data.Source = model
            area.Caption.Text = "Sales Trends"
            area.SubCaption.Text = "2016-2017"
            area.XAxis.Text = "Month"
            area.YAxis.Text = "Revenue"
            area.Width.Pixel(600)
            area.Height.Pixel(500)
            area.ThemeName = FusionChartsTheme.ThemeName.FUSION
            Literal1.Text = area.Render()
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

The chart is shown below:

{% embed_chart standard-charts-scroll-charts-example-3.js %}

Click [here](https://dotnetfiddle.net/TFomJU) to edit the scroll area chart.
