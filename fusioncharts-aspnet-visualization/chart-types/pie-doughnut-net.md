---
title: Pie and Doughnut charts | FusionCharts
description: This article outlines the steps of how to create the pie and doughnut charts
heading: Pie and Doughnut charts
---

## Pie Chart

Now, let's learn how to create a Pie chart. We will use the same data of "Most Popular Programming Language". The data will look as shown below:

| Programming Language | Number of Users |
| -------------------- | --------------- |
| Java                 | 62000           |
| Python               | 46000           |
| Javascript           | 38000           |
| C++                  | 31000           |
| C#                   | 27000           |
| PHP                  | 14000           |
| Perl                 | 14000           |

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-pie-example-1.js %}

Click [here](https://dotnetfiddle.net/h27ogj) to edit the pie chart.

## Render the Chart

Create the `PieChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Retrieve data using database query.
* Set server name.
* Set `DataBase` name.
* Connect with `DataBase` using a connection string.
* Create `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate Pie Chart.
* Set Chart's width and height.
* Set `DataModel` instance as the data source of the chart.
* Set Chart title.
* Finally, use a container using `<div>` to render the chart.

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
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class ThreeDChart : System.Web.UI.Page
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
            // Instantiate Pie Chart
            Charts.PieChart pie = new Charts.PieChart("pie_chart");
            // Set Chart's width and height
            pie.Width.Pixel(500);
            pie.Height.Pixel(400);
            // Set DataModel instance as the data source of the chart
            pie.Data.Source = model;
            // Set Chart Title
            pie.Caption.Text = "Most popular programming language";
            //set chart sub title
            pie.SubCaption.Text = "2017-2018";
            pie.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls

Namespace FusionChartsVisualisationWebFormsSamples.Samples
    Public Partial Class ThreeDChart
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
            Dim pie As Charts.PieChart = New Charts.PieChart("pie_chart")
            pie.Width.Pixel(500)
            pie.Height.Pixel(400)
            pie.Data.Source = model
            pie.Caption.Text = "Most popular programming language"
            pie.SubCaption.Text = "2017-2018"
            pie.ThemeName = FusionChartsTheme.ThemeName.FUSION
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

## Doughnut Chart

Now, let's learn how to create a doughnut chart with the same data. The code remains the same as that of the Pie chart. The only difference is instead of instantiating a pie chart you have to instantiate a doughnut chart. Create a `doughnutChart.aspx.cs` and refer to the code below:

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

namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class ThreeDChart : System.Web.UI.Page
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
            // Instantiate Pie Chart
            Charts.DoughnutChart donut = new Charts.DoughnutChart("doughnut_chart");
            // Set Chart's width and height
            donut.Width.Pixel(500);
            donut.Height.Pixel(400);
            // Set DataModel instance as the data source of the chart
            donut.Data.Source = model;
            // Set Chart Title
            donut.Caption.Text = "Most popular programming language";
            //set chart sub title
            donut.SubCaption.Text = "2017-2018";
            donut.ThemeName = FusionChartsTheme.ThemeName.FUSION;
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
Imports System.Linq
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls

Namespace FusionChartsVisualisationWebFormsSamples.Samples
    Public Partial Class ThreeDChart
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
            Dim donut As Charts.DoughnutChart = New Charts.DoughnutChart("doughnut_chart")
            donut.Width.Pixel(500)
            donut.Height.Pixel(400)
            donut.Data.Source = model
            donut.Caption.Text = "Most popular programming language"
            donut.SubCaption.Text = "2017-2018"
            donut.ThemeName = FusionChartsTheme.ThemeName.FUSION
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

{% embed_chart fusioncharts-net-visualization-doughnut-example-2.js %}

Click [here](https://dotnetfiddle.net/e7DTQC) to edit the doughnut chart.
