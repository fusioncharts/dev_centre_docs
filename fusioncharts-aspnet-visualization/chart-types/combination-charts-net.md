---
title: Combination Charts | FusionCharts
description: This article outlines the steps to create combination charts
heading: Combination Charts
---

Combination charts can be rendered either in 2D or 3D, can have single or dual y-axes and can be scrollable in nature. Let's learn how to create combination charts.

In this page, we will learn how to create the following combination charts:

* 2D Single Y-axis Combination Chart

* 3D Single Y-axis Combination Chart

* 2D Dual Y-axis Combination Chart

* Scroll Combination 2D Chart (Single Y)

* Scroll Combination 2D Chart (Dual Y)

## 2D Single Y-axis Combination Chart

Now, let's learn how to create a 2D single y-axis combination chart. We will create a chart to showcase the comparison of actual revenue, projected revenue and the profit earned for each month of last year. All three metrics have been plotted using different chart types - the actual revenue earned is plotted using a **column** chart, the projected revenue is plotted using a **line** chart, and the profit earned is plotted using an **area** chart.

The data for the chart is shown in the table below:

| Month     | Actual Revenue | Projected Revenue | Profit |
| --------- | -------------- | ----------------- | ------ |
| January   | 16000          | 15000             | 4000   |
| February  | 20000          | 16000             | 5000   |
| March     | 18000          | 17000             | 3000   |
| April     | 19000          | 18000             | 4000   |
| May       | 15000          | 19000             | 1000   |
| June      | 21000          | 19000             | 7000   |
| July      | 16000          | 19000             | 1000   |
| August    | 20000          | 19000             | 4000   |
| September | 17000          | 20000             | 1000   |
| October   | 25000          | 21000             | 8000   |
| November  | 19000          | 22000             | 2000   |
| December  | 23000          | 23000             | 7000   |

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-combination2d.js %}

Click [here](https://dotnetfiddle.net/Tkf2vq) to edit the column chart.

### Render the chart

Create the `CombinationChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files.

* Create `DataTable`.

* Create an object of `JsonFileSource`. Provide file path as constructor parameter.

* Add `json` source in datasources store of model.

* Initialize combination chart object.

* Set model as the data source

* Provide field name as column, line or area plot for the combination chart.

* Set chart's **caption**, **sub-caption**, **width** and **height**.

* Set the **theme** of the chart.

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
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace TestProject
{
    public partial class CombinationChart : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ViewData["Title"] = "FusionCharts asp.net csharp wrapper samples in MVC6";
            ViewData["Message"] = "Single Y-axis Combination Chart 2D";

            // initialize DataModel object
            DataModel model = new DataModel();
            // Create object of JsonFileSource. Provide file path as constructor parameter
            JsonFileSource jsonFileSource = new JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/mscombi2d.json");
            // Add json source in datasources store of model
            model.DataSources.Add(jsonFileSource);
            // initialize combination chart object
            Charts.CombinationChart combiChart = new Charts.CombinationChart("mscombi2d");
            // set model as data source
            combiChart.Data.Source = model;
            // provide field name, which should be rendered as line column
            combiChart.Data.ColumnPlots("Actual Revenue");
            // provide field name, which should be rendered as line plot
            combiChart.Data.LinePlots("Projected Revenue");
            // provide field name, which should be rendered as area plot
            combiChart.Data.AreaPlots("Profit");
            // Set XAxis caption
            combiChart.XAxis.Text = "Month";
            // Set YAxis caption
            combiChart.PrimaryYAxis.Text = "Amount (in USD)";
            // set chart caption
            combiChart.Caption.Text = "Harrys's Supermart";
            // Set chart sub caption
            combiChart.SubCaption.Text = "Sales analysis of last year";
            // set width, height
            combiChart.Width.Pixel(600);
            combiChart.Height.Pixel(500);
            // set theme
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render chart
            Literal1.Text = combiChart.Render();
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
Imports Newtonsoft.Json.Converters
Imports Newtonsoft.Json.Serialization
Imports Newtonsoft.Json
Imports System.Net
Imports System.Text

Namespace TestProject
    Public Partial Class CombinationChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            ViewData("Title") = "FusionCharts asp.net csharp wrapper samples in MVC6"
            ViewData("Message") = "Single Y-axis Combination Chart 2D"
            Dim model As DataModel = New DataModel()
            Dim jsonFileSource As JsonFileSource = New JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/mscombi2d.json")
            model.DataSources.Add(jsonFileSource)
            Dim combiChart As Charts.CombinationChart = New Charts.CombinationChart("mscombi2d")
            combiChart.Data.Source = model
            combiChart.Data.ColumnPlots("Actual Revenue")
            combiChart.Data.LinePlots("Projected Revenue")
            combiChart.Data.AreaPlots("Profit")
            combiChart.XAxis.Text = "Month"
            combiChart.PrimaryYAxis.Text = "Amount (in USD)"
            combiChart.Caption.Text = "Harrys's Supermart"
            combiChart.SubCaption.Text = "Sales analysis of last year"
            combiChart.Width.Pixel(600)
            combiChart.Height.Pixel(500)
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION
            Literal1.Text = combiChart.Render()
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
<%@ Page Language="C#" AutoEventWireup="true"
CodeBehind="CombinationChart.aspx.cs" Inherits="TestProject.TestPage" %>

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

## 3D Single Y-axis Combination Chart

Now, let's learn how to create a 3D single y-axis combination chart with the same data. The code remains the same as that of the above chart. The only difference is instead of instantiating a 2D chart you have to instantiate a 3D chart.

Create a `CombinationChart.aspx.cs` and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create an object of DataModel.
* Create an object of `JsonFileSource` with the JSON file path.
* Add `JsonFileSource` as data source to the `DataModel`.
* Instantiate Combination Chart.
* Set chart width and height.
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
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace TestProject
{
    public partial class CombinationChart : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ViewData["Title"] = "FusionCharts asp.net csharp wrapper samples in MVC6";
            ViewData["Message"] = "Single Y-axis Combination Chart 3D";

            // Initialize DataModel object
            DataModel model = new DataModel();
            // Create object of JsonFileSource. Provide file path as constructor parameter
            JsonFileSource jsonFileSource = new JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/mscombi3d.json");
            // Add json source in datasources store of model
            model.DataSources.Add(jsonFileSource);
            // Initialize combination chart object
            Charts.CombinationChart combiChart = new Charts.CombinationChart("mscombi3d");
            // Set threeD
            combiChart.ThreeD = true;
            // Set model as data source
            combiChart.Data.Source = model;
            // Provide field name, which should be rendered as line column
            combiChart.Data.ColumnPlots("Actual Revenue");
            // Provide field name, which should be rendered as line plot
            combiChart.Data.LinePlots("Projected Revenue");
            // Provide field name, which should be rendered as area plot
            combiChart.Data.AreaPlots("Profit");
            // Set XAxis caption
            combiChart.XAxis.Text = "Month";
            // Set YAxis caption
            combiChart.PrimaryYAxis.Text = "Amount (in USD)";
            // Set chart caption
            combiChart.Caption.Text = "Harrys's Supermart";
            // Set chart sub caption
            combiChart.SubCaption.Text = "Sales analysis of last year";
            // Set width, height
            combiChart.Width.Pixel(600);
            combiChart.Height.Pixel(500);
            // Set theme
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render chart
            Literal1.Text = combiChart.Render();
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
Imports Newtonsoft.Json.Converters
Imports Newtonsoft.Json.Serialization
Imports Newtonsoft.Json
Imports System.Net
Imports System.Text

Namespace TestProject
    Public Partial Class CombinationChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            ViewData("Title") = "FusionCharts asp.net csharp wrapper samples in MVC6"
            ViewData("Message") = "Single Y-axis Combination Chart 3D"
            Dim model As DataModel = New DataModel()
            Dim jsonFileSource As JsonFileSource = New JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/mscombi2d.json")
            model.DataSources.Add(jsonFileSource)
            Dim combiChart As Charts.CombinationChart = New Charts.CombinationChart("mscombi3d")
            combiChart.Data.Source = model
            combiChart.Data.ColumnPlots("Actual Revenue")
            combiChart.Data.LinePlots("Projected Revenue")
            combiChart.Data.AreaPlots("Profit")
            combiChart.XAxis.Text = "Month"
            combiChart.PrimaryYAxis.Text = "Amount (in USD)"
            combiChart.Caption.Text = "Harrys's Supermart"
            combiChart.SubCaption.Text = "Sales analysis of last year"
            combiChart.Width.Pixel(600)
            combiChart.Height.Pixel(500)
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION
            Literal1.Text = combiChart.Render()
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
<%@ Page Language="C#" AutoEventWireup="true"
CodeBehind="CombinationChart.aspx.cs" Inherits="TestProject.TestPage" %>

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

The chart looks like as shown below:

{% embed_chart fusioncharts-net-visualization-combination3d.js %}

Click [here](https://dotnetfiddle.net/cr0sh4) to edit the column chart.

## 2D Dual Y-axis Combination Chart

Now, let's create a dual y-axis combination chart in 2D. In this chart, we will show a comparison between the revenue, profit, and the profit percentage. The revenue and the profit will be shown as the amount in dollars using the **primary y-axis**, and the profit percentage will be shown in percentage using the **secondary y-axis**.

The data for the chart is shown in the table below:

| Month     | Revenues | Profits | Profit % |
| --------- | -------- | ------- | -------- |
| January   | 16000    | 4000    | 25       |
| February  | 20000    | 5000    | 25       |
| March     | 18000    | 3000    | 16.66    |
| April     | 19000    | 4000    | 21.05    |
| May       | 15000    | 1000    | 6.66     |
| June      | 21000    | 7000    | 33.33    |
| July      | 16000    | 1000    | 6.25     |
| August    | 20000    | 4000    | 25       |
| September | 17000    | 1000    | 5.88     |
| October   | 22000    | 8000    | 36.36    |
| November  | 19000    | 2000    | 10.52    |
| December  | 23000    | 7000    | 30.43    |

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-combination2ddy.js %}

Click [here](https://dotnetfiddle.net/fjhtVY) to edit the column chart.

Create a `CombinationChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create an object of DataModel.
* Create an object of `JsonFileSource` with the JSON file path.
* Add `JsonFileSource` as data source to the `DataModel`.
* Instantiate Combination Chart.
* Set chart width and height.
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
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace TestProject
{
    public partial class CombinationChart : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // initialize DataModel object
            DataModel model = new DataModel();
            // Create object of JsonFileSource. Provide file path as constructor parameter
            JsonFileSource jsonFileSource = new JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/mscombidy2d.json");
            // Add json source in datasources store of model
            model.DataSources.Add(jsonFileSource);
            // initialize combination chart object
            Charts.CombinationChart combiChart = new Charts.CombinationChart("mscombidy2d");
            // set model as data source
            combiChart.Data.Source = model;

            // Provide field name, which should be rendered as line column
            combiChart.Data.ColumnPlots("Revenues");
            // Provide field name, which should be rendered as spline area plot
            combiChart.Data.SplineAreaPlots("Profits");
            // Provide field name, which should be rendered as spline plot
            combiChart.Data.SplinePlots("Profit %");
            // Set parentAxis
            combiChart.Data.SecondaryYAxisAsParent("Profit %");
            // Set XAxis caption
            combiChart.XAxis.Text = "Month";
            // Set YAxis caption
            combiChart.PrimaryYAxis.Text = "Amount (in USD)";
            // Enable dual y
            combiChart.DualY = true;
            // Set secondary y axis text
            combiChart.SecondaryYAxis.Text = "Profit %";
            // Set chart caption
            combiChart.Caption.Text = "Revenues and Profit";
            // Set chart sub caption
            combiChart.SubCaption.Text = "For last year";
            // Set width, height
            combiChart.Width.Pixel(600);
            combiChart.Height.Pixel(500);
            // Set theme
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render chart
            Literal1.Text = combiChart.Render();
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
Imports Newtonsoft.Json.Converters
Imports Newtonsoft.Json.Serialization
Imports Newtonsoft.Json
Imports System.Net
Imports System.Text

Namespace TestProject
    Public Partial Class CombinationChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            ViewData("Title") = "FusionCharts asp.net csharp wrapper samples in MVC6"
            ViewData("Message") = "Dual Y-axis Combination Chart 2D"
            Dim model As DataModel = New DataModel()
            Dim jsonFileSource As JsonFileSource = New JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/mscombidy2d.json")
            model.DataSources.Add(jsonFileSource)
            Dim combiChart As Charts.CombinationChart = New Charts.CombinationChart("mscombidy2d")
            combiChart.Data.Source = model
            combiChart.Data.ColumnPlots("Revenues")
            combiChart.Data.SplineAreaPlots("Profits")
            combiChart.Data.SplinePlots("Profit %")
            combiChart.Data.SecondaryYAxisAsParent("Profit %")
            combiChart.XAxis.Text = "Month"
            combiChart.PrimaryYAxis.Text = "Amount (in USD)"
            combiChart.DualY = True
            combiChart.SecondaryYAxis.Text = "Profit %"
            combiChart.Caption.Text = "Revenues and Profit"
            combiChart.SubCaption.Text = "For last year"
            combiChart.Width.Pixel(600)
            combiChart.Height.Pixel(500)
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION
            Literal1.Text = combiChart.Render()
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
<%@ Page Language="C#" AutoEventWireup="true"
CodeBehind="CombinationChart.aspx.cs" Inherits="TestProject.TestPage" %>

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

## Scroll Combination 2D Chart (Single Y)

Now, let's create a scroll combination 2D chart to plot the **revenue** and the **profit** earned, in dollars, and the **profit** for Financial year 2017 to 2018.

The data for the chart is shown in the table below:

| Month           | Actual Revenue | Projected Revenue | Profit |
| --------------- | -------------- | ----------------- | ------ |
| January, 2017   | 16000          | 15000             | 4000   |
| February, 2017  | 20000          | 16000             | 5000   |
| March, 2017     | 18000          | 17000             | 3000   |
| April, 2017     | 19000          | 18000             | 4000   |
| May, 2017       | 15000          | 19000             | 1000   |
| June, 2017      | 21000          | 19000             | 7000   |
| July, 2017      | 16000          | 19000             | 1000   |
| August, 2017    | 20000          | 19000             | 4000   |
| September, 2017 | 17000          | 20000             | 1000   |
| October, 2017   | 25000          | 21000             | 8000   |
| November, 2017  | 19000          | 22000             | 2000   |
| December, 2017  | 23000          | 23000             | 7000   |
| January, 2018   | 22000          | 24000             | 6000   |
| February, 2018  | 25000          | 22000             | 5000   |
| March, 2018     | 21000          | 23000             | 7000   |
| April, 2018     | 23000          | 25000             | 8000   |
| May, 2018       | 27000          | 22000             | 8000   |
| June, 2018      | 26000          | 20000             | 9000   |
| July, 2018      | 24000          | 24000             | 7000   |
| August, 2018    | 28000          | 25000             | 10000  |
| September, 2018 | 26000          | 27000             | 9000   |
| October, 2018   | 27000          | 24000             | 7000   |
| November, 2018  | 29000          | 23000             | 8000   |
| December, 2018  | 26000          | 25000             | 11000  |

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-combination-scroll2d.js %}

Click [here](https://dotnetfiddle.net/y6MTkR) to edit the column chart.

Create a `CombinationChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create an object of DataModel.
* Create an object of `JsonFileSource` with the JSON file path.
* Add `JsonFileSource` as data source to the `DataModel`.
* Instantiate Combination Chart.
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
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace TestProject
{
    public partial class CombinationChart : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            // Initialize DataModel object
            DataModel model = new DataModel();
            // Create object of JsonFileSource. Provide file path as constructor parameter
            JsonFileSource jsonFileSource = new JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/scrollcombi2d.json");
            // Add json source in datasources store of model
            model.DataSources.Add(jsonFileSource);
            // Initialize combination chart object
            Charts.CombinationChart combiChart = new Charts.CombinationChart("scrollcombi2d");
            // Set model as data source
            combiChart.Data.Source = model;
            // Enable scrolling
            combiChart.Scrollable = true;
            // Provide field name, which should be rendered as line column
            combiChart.Data.ColumnPlots("Actual Revenue");
            // Provide field name, which should be rendered as spline area plot
            combiChart.Data.SplinePlots("Projected Revenue");
            // Provide field name, which should be rendered as spline plot
            combiChart.Data.SplineAreaPlots("Profit");
            // Set XAxis caption
            combiChart.XAxis.Text = "Month";
            // Set YAxis caption
            combiChart.PrimaryYAxis.Text = "Amount (in USD)";
            // Set chart caption
            combiChart.Caption.Text = "Revenues and Profit";
            // Set chart sub caption
            combiChart.SubCaption.Text = "For last year";
            // Set width, height
            combiChart.Width.Pixel(600);
            combiChart.Height.Pixel(500);
            // Set theme
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render chart
            Literal1.Text = combiChart.Render();
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
Imports Newtonsoft.Json.Converters
Imports Newtonsoft.Json.Serialization
Imports Newtonsoft.Json
Imports System.Net
Imports System.Text

Namespace TestProject
    Public Partial Class CombinationChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            ViewData("Title") = "FusionCharts asp.net csharp wrapper samples in MVC6"
            ViewData("Message") = "Dual Y-axis Scroll Combination Chart 2D"
            Dim model As DataModel = New DataModel()
            Dim jsonFileSource As JsonFileSource = New JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/scrollcombidy2d.json")
            model.DataSources.Add(jsonFileSource)
            Dim combiChart As Charts.CombinationChart = New Charts.CombinationChart("scrollcombidy2d")
            combiChart.Data.Source = model
            combiChart.Scrollable = True
            combiChart.Data.ColumnPlots("Revenues")
            combiChart.Data.AreaPlots("Profits")
            combiChart.Data.LinePlots("Profit %")
            combiChart.Data.SecondaryYAxisAsParent("Profit %")
            combiChart.XAxis.Text = "Month"
            combiChart.PrimaryYAxis.Text = "Amount (in USD)"
            combiChart.DualY = True
            combiChart.SecondaryYAxis.Text = "Profit %"
            combiChart.Caption.Text = "Revenues and Profit"
            combiChart.SubCaption.Text = "For last year"
            combiChart.Width.Pixel(600)
            combiChart.Height.Pixel(500)
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION
            Literal1.Text = combiChart.Render()
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
<%@ Page Language="C#" AutoEventWireup="true"
CodeBehind="CombinationChart.aspx.cs" Inherits="TestProject.TestPage" %>

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

## Scroll Combination 2D Chart (Dual Y)

Now, let's create a dual y-axis scroll combination 2D chart. Here we will plot the **revenue** and the **profit** earned, in dollars, and the **profit percent** for Financial year 2017 to 2018.

The data for the chart is shown in the table below:

| Month           | Actual Revenue | Profit | Profit Percent |
| --------------- | -------------- | ------ | -------------- |
| January, 2017   | 16000          | 4000   | 25             |
| February, 2017  | 20000          | 5000   | 25             |
| March, 2017     | 18000          | 3000   | 16.66          |
| April, 2017     | 19000          | 4000   | 21.05          |
| May, 2017       | 15000          | 1000   | 6.66           |
| June, 2017      | 21000          | 7000   | 33.33          |
| July, 2017      | 16000          | 1000   | 6.25           |
| August, 2017    | 20000          | 4000   | 25             |
| September, 2017 | 17000          | 1000   | 5.88           |
| October, 2017   | 25000          | 8000   | 36.36          |
| November, 2017  | 19000          | 2000   | 10.52          |
| December, 2017  | 23000          | 7000   | 30.43          |
| January, 2018   | 22000          | 6000   | 25             |
| February, 2018  | 25000          | 5000   | 28             |
| March, 2018     | 21000          | 7000   | 15.38          |
| April, 2018     | 23000          | 8000   | 20.83          |
| May, 2018       | 27000          | 8000   | 15.79          |
| June, 2018      | 26000          | 9000   | 40.91          |
| July, 2018      | 24000          | 7000   | 11.11          |
| August, 2018    | 28000          | 10000  | 31.58          |
| September, 2018 | 26000          | 9000   | 9.09           |
| October, 2018   | 27000          | 7000   | 33.33          |
| November, 2018  | 29000          | 8000   | 17.39          |
| December, 2018  | 26000          | 11000  | 25             |

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-combination-scroll2ddy.js %}

Click [here](https://dotnetfiddle.net/MuaI7i) to edit the column chart.

Create a `CombinationChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create an object of DataModel.
* Create an object of `JsonFileSource` with the JSON file path.
* Add `JsonFileSource` as data source to the `DataModel`.
* Instantiate Combination Chart.
* Set chart width and height.
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



</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-csharp">



</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

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
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace TestProject
{
    public partial class CombinationChart : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ViewData["Title"] = "FusionCharts asp.net csharp wrapper samples in MVC6";
            ViewData["Message"] = "Dual Y-axis Scroll Combination Chart 2D";

            // Initialize DataModel object
            DataModel model = new DataModel();
            // Create object of JsonFileSource. Provide file path as constructor parameter
            JsonFileSource jsonFileSource = new JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/scrollcombidy2d.json");
            // Add json source in datasources store of model
            model.DataSources.Add(jsonFileSource);
            // Initialize combination chart object
            Charts.CombinationChart combiChart = new Charts.CombinationChart("scrollcombidy2d");
            // Set model as data source
            combiChart.Data.Source = model;
            // Enable scrolling
            combiChart.Scrollable = true;
            // Provide field name, which should be rendered as line column
            combiChart.Data.ColumnPlots("Revenues");
            // Provide field name, which should be rendered as spline area plot
            combiChart.Data.AreaPlots("Profits");
            // Provide field name, which should be rendered as spline plot
            combiChart.Data.LinePlots("Profit %");
            // Set parentAxis
            combiChart.Data.SecondaryYAxisAsParent("Profit %");
            // Set XAxis caption
            combiChart.XAxis.Text = "Month";
            // Set YAxis caption
            combiChart.PrimaryYAxis.Text = "Amount (in USD)";
            // Enable dual y
            combiChart.DualY = true;
            // Set secondary y axis text
            combiChart.SecondaryYAxis.Text = "Profit %";
            // Set chart caption
            combiChart.Caption.Text = "Revenues and Profit";
            // Set chart sub caption
            combiChart.SubCaption.Text = "For last year";
            // Set width, height
            combiChart.Width.Pixel(600);
            combiChart.Height.Pixel(500);
            // Set theme
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render chart
            Literal1.Text = combiChart.Render();
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
Imports Newtonsoft.Json.Converters
Imports Newtonsoft.Json.Serialization
Imports Newtonsoft.Json
Imports System.Net
Imports System.Text

Namespace TestProject
    Public Partial Class CombinationChart
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            ViewData("Title") = "FusionCharts asp.net csharp wrapper samples in MVC6"
            ViewData("Message") = "Dual Y-axis Scroll Combination Chart 2D"
            Dim model As DataModel = New DataModel()
            Dim jsonFileSource As JsonFileSource = New JsonFileSource("https://raw.githubusercontent.com/poushali-guha-12/SampleData/master/scrollcombidy2d.json")
            model.DataSources.Add(jsonFileSource)
            Dim combiChart As Charts.CombinationChart = New Charts.CombinationChart("scrollcombidy2d")
            combiChart.Data.Source = model
            combiChart.Scrollable = True
            combiChart.Data.ColumnPlots("Revenues")
            combiChart.Data.AreaPlots("Profits")
            combiChart.Data.LinePlots("Profit %")
            combiChart.Data.SecondaryYAxisAsParent("Profit %")
            combiChart.XAxis.Text = "Month"
            combiChart.PrimaryYAxis.Text = "Amount (in USD)"
            combiChart.DualY = True
            combiChart.SecondaryYAxis.Text = "Profit %"
            combiChart.Caption.Text = "Revenues and Profit"
            combiChart.SubCaption.Text = "For last year"
            combiChart.Width.Pixel(600)
            combiChart.Height.Pixel(500)
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION
            Literal1.Text = combiChart.Render()
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
<%@ Page Language="C#" AutoEventWireup="true"
CodeBehind="CombinationChart.aspx.cs" Inherits="TestProject.TestPage" %>

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
