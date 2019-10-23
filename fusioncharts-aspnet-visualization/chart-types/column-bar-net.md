---
title: Column and Bar charts | FusionCharts
description: This article outlines the steps to create column and Bar charts
heading: Column and Bar charts
---

Let's create a Column 2D chart showing the "Most popular programming language".

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-first-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/nVVeWE) to edit the column chart.

The data for the above chart is shown in the table below:

| Programming Language | Users |
| -------------------- | ----- |
| Java                 | 62000 |
| Python               | 46000 |
| Javascript           | 38000 |
| C++                  | 31000 |
| C#                   | 27000 |
| PHP                  | 14000 |
| Perl                 | 14000 |

Now that you have the tabular data ready, let's see how to render the chart.

## Render the chart

Create the `ColumnChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add two columns and multiple rows to the `DataTable`.
* Add `DataSource` to the `DataModel`.
* Instantiate Column Chart
* Set chart width and height
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
            // Sset chart sub title
            column.SubCaption.Text = "2017-2018";
            // hide chart Legend
            column.Legend.Show = false;
            // set XAxis Text
            column.XAxis.Text = "Programming Language";
            // Set YAxis title
            column.YAxis.Text = "User";
            column.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports FusionCharts.DataEngine
Imports FusionCharts.Visualization

Namespace FusionChartsVisualisationWebFormsSamples.Samples
    Public Partial Class FirstChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            If True Then
                Dim ChartData As DataTable = New DataTable()
                ChartData.Columns.Add("Programming Language", GetType(System.String))
                ChartData.Columns.Add("Users", GetType(System.Double))
                ChartData.Rows.Add("Java", 62000)
                ChartData.Rows.Add("Python", 46000)
                ChartData.Rows.Add("Javascript", 38000)
                ChartData.Rows.Add("C++", 31000)
                ChartData.Rows.Add("C#", 27000)
                ChartData.Rows.Add("PHP", 14000)
                ChartData.Rows.Add("Perl", 14000)
                Dim source As StaticSource = New StaticSource(ChartData)
                Dim model As DataModel = New DataModel()
                model.DataSources.Add(source)
                Dim column As Charts.ColumnChart = New Charts.ColumnChart("first_chart")
                column.Width.Pixel(700)
                column.Height.Pixel(400)
                column.Data.Source = model
                column.Caption.Text = "Most popular programming language"
                column.SubCaption.Text = "2017-2018"
                column.Legend.Show = False
                column.XAxis.Text = "Programming Language"
                column.YAxis.Text = "User"
                column.ThemeName = FusionChartsTheme.ThemeName.FUSION
                Literal1.Text = column.Render()
            End If
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
           </form>
</body>
</html>
```

## Scroll Column chart

Now, let's learn how to create a Scrollable Column Chart. We will create a chart showcasing sales trends of a company in the Financial Year 2016-17. The data will look as shown below:

| Month    | Sales |
| -------- | ----- |
| Jan 2016 | 27400 |
| Feb 2016 | 29800 |
| Mar 2016 | 25800 |
| Apr 2016 | 26800 |
| May 2016 | 29600 |
| Jun 2016 | 32600 |
| Jul 2016 | 31800 |
| Aug 2016 | 36700 |
| Sep 2016 | 29700 |
| Oct 2016 | 31900 |
| Nov 2016 | 34800 |
| Dec 2016 | 24800 |
| Jan 2017 | 26300 |
| Feb 2017 | 31800 |
| Mar 2017 | 30900 |
| Apr 2017 | 33000 |
| May 2017 | 36200 |
| Jun 2017 | 32100 |
| Jul 2017 | 37500 |
| Aug 2017 | 38500 |
| Sep 2017 | 35400 |
| Oct 2017 | 38200 |
| Nov 2017 | 33300 |
| Dec 2017 | 38300 |

The chart will look as shown below:

{% embed_chart standard-charts-scroll-charts-example-1.js %}

Click [here](https://dotnetfiddle.net/TeDjsE) to edit the scroll column chart.

## Render the Chart

Create the `ScrollColumnChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add two columns and multiple rows to the `DataTable`.
* Add `DataSource` to the `DataModel`.
* Instantiate Column Chart
* Set chart width and height
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
            Charts.ColumnChart column = new Charts.ColumnChart("scroll_chart_db");
            column.Scrollable = true;
            column.Data.Source = model;
            column.Caption.Text = "Sales Trends";
            column.SubCaption.Text = "2016-2017";
            column.XAxis.Text = "Month";
            column.YAxis.Text = "Revenue";
            column.Width.Pixel(600);
            column.Height.Pixel(500);
            column.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
            Dim column As Charts.ColumnChart = New Charts.ColumnChart("scroll_chart_db")
            column.Scrollable = True
            column.Data.Source = model
            column.Caption.Text = "Sales Trends"
            column.SubCaption.Text = "2016-2017"
            column.XAxis.Text = "Month"
            column.YAxis.Text = "Revenue"
            column.Width.Pixel(600)
            column.Height.Pixel(500)
            column.ThemeName = FusionChartsTheme.ThemeName.FUSION
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

## Overlapped charts

Now, let's learn how to create an Overlapped Chart. We will create a chart showcasing Major League Baseball Rankings. The data will look as shown below:

| Teams              | Matches | Wins |
| ------------------ | ------- | ---- |
| Boston Red Sox     | 88      | 57   |
| New York Yankees   | 84      | 54   |
| Tampa Bay Rays     | 86      | 42   |
| Toronto Blue Jays  | 86      | 39   |
| Baltimore Orioles  | 85      | 24   |
| Cleveland Indians  | 85      | 46   |
| Detroit Tigers     | 88      | 38   |
| Minnesota Twins    | 83      | 35   |
| Chicago White Sox  | 86      | 29   |
| Kansas City Royals | 86      | 25   |

The chart will look as shown below:

{% embed_chart fusioncharts-net-overlapped-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/LPXGzz) to edit the overlapped chart.

## Render the Chart

Create the `OverlappedChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add two columns and multiple rows to the `DataTable`.
* Add `DataSource` to the `DataModel`.
* Instantiate Column or Bar chart.
* Set chart `width` and `height`.
* Set the `type` of column or bar chart as `overlapped`.
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
    public partial class OverlappedChart : System.Web.UI.Page 
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Team", typeof(System.String));
            ChartData.Columns.Add("Matches", typeof(System.Double));
            ChartData.Columns.Add("Wins", typeof(System.Double));
            ChartData.Rows.Add("Boston Red Sox", 88, 57);
            ChartData.Rows.Add("New York Yankees", 84, 54);
            ChartData.Rows.Add("Tampa Bay Rays", 86, 42);
            ChartData.Rows.Add("Toronto Blue Jays", 86, 39);
            ChartData.Rows.Add("Baltimore Orioles", 85, 24);
            ChartData.Rows.Add("Cleveland Indians", 85, 46);
            ChartData.Rows.Add("Detroit Tigers", 88, 38);
            ChartData.Rows.Add("Minnesota Twins", 83, 35);
            ChartData.Rows.Add("Chicago White Sox", 86, 29);
            ChartData.Rows.Add("Kansas City Royals", 86, 25);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Charts.ColumnChart OverlappedColumn = new Charts.ColumnChart("overlapped_chart_db");
            OverlappedColumn.Overlapped = true;
            OverlappedColumn.Data.Source = model;
            OverlappedColumn.Caption.Text = "Major League Baseball - Season Rankings";
            OverlappedColumn.SubCaption.Text = "Teams in the Lead";
            OverlappedColumn.Caption.Text = "Major league Baseball-Season Rankings";
            OverlappedColumn.SubCaption.Text = "Teams in the lead";
            OverlappedColumn.XAxis.Text = "Position";
            OverlappedColumn.YAxis.Text = "Team";
            OverlappedColumn.Width.Pixel(600);
            OverlappedColumn.Height.Pixel(500);
            OverlappedColumn.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
    Public Partial Class OverlappedChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim ChartData As DataTable = New DataTable()
            ChartData.Columns.Add("Team", GetType(System.String))
            ChartData.Columns.Add("Matches", GetType(System.Double))
            ChartData.Columns.Add("Wins", GetType(System.Double))
            ChartData.Rows.Add("Boston Red Sox", 88, 57)
            ChartData.Rows.Add("New York Yankees", 84, 54)
            ChartData.Rows.Add("Tampa Bay Rays", 86, 42)
            ChartData.Rows.Add("Toronto Blue Jays", 86, 39)
            ChartData.Rows.Add("Baltimore Orioles", 85, 24)
            ChartData.Rows.Add("Cleveland Indians", 85, 46)
            ChartData.Rows.Add("Detroit Tigers", 88, 38)
            ChartData.Rows.Add("Minnesota Twins", 83, 35)
            ChartData.Rows.Add("Chicago White Sox", 86, 29)
            ChartData.Rows.Add("Kansas City Royals", 86, 25)
            Dim source As StaticSource = New StaticSource(ChartData)
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(source)
            Dim OverlappedColumn As Charts.ColumnChart = New Charts.ColumnChart("overlapped_chart_db")
            OverlappedColumn.Overlapped = True
            OverlappedColumn.Data.Source = model
            OverlappedColumn.Caption.Text = "Major League Baseball - Season Rankings"
            OverlappedColumn.SubCaption.Text = "Teams in the Lead"
            OverlappedColumn.Caption.Text = "Major league Baseball-Season Rankings"
            OverlappedColumn.SubCaption.Text = "Teams in the lead"
            OverlappedColumn.XAxis.Text = "Position"
            OverlappedColumn.YAxis.Text = "Team"
            OverlappedColumn.Width.Pixel(600)
            OverlappedColumn.Height.Pixel(500)
            OverlappedColumn.ThemeName = FusionChartsTheme.ThemeName.FUSION
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
    </form>
</body>
</html>
```

## Bar Chart

Now, let's learn how to create a bar chart with the same data. The code remains the same as that of the column chart. The only difference is instead of instantiating a column chart you have to instantiate a bar chart. Create a `barChart.aspx.cs` and refer to the code below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-csharp">
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

            // Instantiate bar Chart
            Charts.BarChart bar = new Charts.BarChart("bar_chart");

            // Set Chart's width and height
            bar.Width.Pixel(500);
            bar.Height.Pixel(400);

            // Set DataModel instance as the data source of the chart
            bar.Data.Source = model;

            // Set Chart Title
            bar.Caption.Text = "Most popular programming language";
            bar.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports FusionCharts.DataEngine
Imports FusionCharts.Visualization

Namespace FusionChartsVisualisationWebFormsSamples.Samples
    Public Partial Class FirstChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            Dim ChartData As DataTable = New DataTable()
            ChartData.Columns.Add("Programming Language", GetType(System.String))
            ChartData.Columns.Add("Users", GetType(System.Double))
            ChartData.Rows.Add("Java", 62000)
            ChartData.Rows.Add("Python", 46000)
            ChartData.Rows.Add("Javascript", 38000)
            ChartData.Rows.Add("C++", 31000)
            ChartData.Rows.Add("C#", 27000)
            ChartData.Rows.Add("PHP", 14000)
            ChartData.Rows.Add("Perl", 14000)
            Dim source As StaticSource = New StaticSource(ChartData)
            Dim model As DataModel = New DataModel()
            model.DataSources.Add(source)
            Dim bar As Charts.BarChart = New Charts.BarChart("bar_chart")
            bar.Width.Pixel(500)
            bar.Height.Pixel(400)
            bar.Data.Source = model
            bar.Caption.Text = "Most popular programming language"
            bar.ThemeName = FusionChartsTheme.ThemeName.FUSION
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

{% embed_chart fusioncharts-net-visualization-bar-chart-example-2.js %}

Click [here](https://dotnetfiddle.net/Jog8RJ) to edit the bar chart.