---
title: Your First Chart in ASP.NET using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the asp.net.
heading: Create a Chart Using ASP.NET in FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side ASP.NET wrapper for FusionCharts. The `FusionCharts server-side ASP.NET` wrapper lets you easily add rich and interactive charts to any ASP.NET project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

FusionCharts allows you to follow two different approaches to render charts using ASP.NET:

- ASP.NET wrapper

- FusionCharts.NET Visualization library.

We recommend you to use FusionCharts.NET library over ASP.NET wrapper, as the library offers several advantages, as listed below:

- FusionCharts.NET library is compatible with ASP.NET Framework, ASP.NET Core, ASP.NET Standard, Mono/Xamarin whereas ASP.NET wrapper is only compatible with ASP.NET Framework.

- FusionCharts.NET library has the ability to accept data from different sources.

- FusionCharts.NET library accepts remote data.

- FusionCharts.NET library allows operations on data.

- FusionCharts.NET library has the ability to handle chart structure-specific json.

- FusionCharts.NET library has the ability of conditional data plot formatting.

- Using FusionCharts.NET library you can specify a page-level theme.

- You can write fully object-oriented C#/VB code when using the FusionCharts.NET library.

In this article, we will see how to install FusionCharts Suite XT and the `FusionCharts server-side ASP.NET` wrapper, as well as all the other dependencies on your system.

## Prerequisite

You need to have a ASP.NET project setup before proceeding any further. If not, you can create a project using Visual Studio.
For UNIX based systems (Mac, Linux), Open Visual Studio and create an empty ASP.NET project.
For Windows based systems, create a Web application project.


## Installation & Including Dependencies

Download the FusionCharts library to get the `asp-net-wrapper` wrapper.

<a href='https://www.fusioncharts.com/download/fusioncharts-suite-xt?framework=csharp' class="btn btn-primary-grad btn-sm">Download FusionCharts library</a>

Open your project and follow the steps mentioned below:

- Right click on `References` and select Edit References. Browse to the Downloaded Fusioncharts library and select `asp-net-wrapper` ( `integrations > asp.net-cs > fusioncharts-wrapper-assembly > FusionCharts.dll` (for C#) or `integration > asp.net-vb > fusioncharts-wrapper-assembly > FusionCharts.dll` (for VB) ) and add it to your references.

- Create a new folder named `Script` in your project and copy js files (for local files) in it.

- Create a new Web Form in your project directory and name it 'index'. 2 files will be created, namely, index.aspx and index.aspx.cs (for C#), index.aspx and index.aspx.vb (for Visual Basic).

The directory structure will look like the following:

![ASP.NET](/images/aspnet-folder-structure.png)

## Preparing the Data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in tabular form below.

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K                |
| Saudi     | 260K                |
| Canada    | 180K                |
| Iran      | 140K                |
| Russia    | 115K                |
| UAE       | 100K                |
| US        | 30K                 |
| China     | 30K                 |

Since we are plotting a single dataset, let us create a column 2D chart with 'Countries' as data labels along x-axis and 'No. of oil reserves' as data values along y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in **JSON** format. So, we first add the data in index.aspx.cs (C#) / index.aspx.vb (VB) file and then convert into the JSON format.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-javascript">
//store label-value pair
var dataValuePair = new List<KeyValuePair<string, double>>();
dataValuePair.Add(new KeyValuePair<string, double>("Venezuela", 290));
dataValuePair.Add(new KeyValuePair<string, double>("Saudi", 260));
dataValuePair.Add(new KeyValuePair<string, double>("Canada", 180));
dataValuePair.Add(new KeyValuePair<string, double>("Iran", 140));
dataValuePair.Add(new KeyValuePair<string, double>("Russia", 115));
dataValuePair.Add(new KeyValuePair<string, double>("UAE", 100));
dataValuePair.Add(new KeyValuePair<string, double>("US", 30));
dataValuePair.Add(new KeyValuePair<string, double>("China", 30));

StringBuilder data = new StringBuilder();

data.Append("'data':[");
foreach (KeyValuePair<string, double> pair in dataValuePair) {
data.AppendFormat("{{'label':'{0}','value':'{1}'}},", pair.Key, pair.Value);
}
data.Replace(",", "]", data.Length - 1, 1);
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
Dim dataValuePair As New Dictionary(Of String, Double)
dataValuePair.Add("Venezuela", 290)
dataValuePair.Add("Saudi", 260)
dataValuePair.Add("Canada", 180)
dataValuePair.Add("Iran", 140)
dataValuePair.Add("Russia", 115)
dataValuePair.Add("UAE", 100)
dataValuePair.Add("US", 30)
dataValuePair.Add("China", 30)

Dim data As New StringBuilder
data.Append("'data':[")
For Each pair In dataValuePair
data.AppendFormat("{{'label':'{0}','value':'{1}'}},", pair.Key, pair.Value)
Next
data.Replace(",", "]", data.Length - 1, 1)
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

## Configure your Chart

Now that the data's ready, you are ready to work on styling, positioning and giving context to your chart. Follow the steps below:

**Step 1:** In the `index.aspx` file, we first include the Fusioncharts Javascript files to apply style to the chart.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-html">
// Include FusionCharts core file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-html">
// Include FusionCharts core file
&lt;script type="text/javascript" src="Script/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="Script/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

**Step 2:** Add the chart attributes in index.aspx.cs(C#) / index.aspx.vb (VB) file. FusionCharts accepts data in JSON format, so we convert these attributes into JSON format.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-javascript">
Dictionary<string, string> chartConfig = new Dictionary<string, string>();
chartConfig.Add("caption", "Countries With Most Oil Reserves [2017-18]");
chartConfig.Add("subCaption", "In MMbbl = One Million barrels");
chartConfig.Add("xAxisName", "Country");
chartConfig.Add("yAxisName", "Reserves (MMbbl)");
chartConfig.Add("numberSuffix", "k");
chartConfig.Add("theme", "fusion");

StringBuilder jsonData = new StringBuilder();

// json data to use as chart data source
jsonData.Append("{'chart':{");
foreach (var config in chartConfig) {
jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value);
}
jsonData.Replace(",", "},", jsonData.Length - 1, 1);
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
Dim chartConfig As New Dictionary(Of String, String)
chartConfig.Add("caption", "Countries With Most Oil Reserves [2017-18]")
chartConfig.Add("subCaption", "In MMbbl = One Million barrels")
chartConfig.Add("xAxisName", "Country")
chartConfig.Add("yAxisName", "Reserves (MMbbl)")
chartConfig.Add("numberSuffix", "k")
chartConfig.Add("theme", "fusion")

Dim jsonData As New StringBuilder
'json data to use as chart data source
jsonData.Append("{'chart':{")
For Each config In chartConfig
jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value)
Next
jsonData.Replace(",", "},", jsonData.Length - 1, 1)
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

## Create Your Chart

Let's create a Column 2D Chart using the `asp-net-wrapper` showing "Countries with most Oil Reserves".

The `index.aspx.cs`(C#) / `index.aspx.vb`(VB) file will have the `chart constructor`, `attributes` and the `datasource` required to render the chart. The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-javascript">
using System;
using System.Collections.Generic;
using System.Text;
using FusionCharts.Charts;
namespace FusionChartsProject {
    public partial class index : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            //store label-value pair
            var dataValuePair = new List<KeyValuePair<string, double>>();
            dataValuePair.Add(new KeyValuePair<string, double>("Venezuela", 290));
            dataValuePair.Add(new KeyValuePair<string, double>("Saudi", 260));
            dataValuePair.Add(new KeyValuePair<string, double>("Canada", 180));
            dataValuePair.Add(new KeyValuePair<string, double>("Iran", 140));
            dataValuePair.Add(new KeyValuePair<string, double>("Russia", 115));
            dataValuePair.Add(new KeyValuePair<string, double>("UAE", 100));
            dataValuePair.Add(new KeyValuePair<string, double>("US", 30));
            dataValuePair.Add(new KeyValuePair<string, double>("China", 30));
            StringBuilder jsonData = new StringBuilder();
            StringBuilder data = new StringBuilder();

            // store chart config name-config value pair
            Dictionary<string, string> chartConfig = new Dictionary<string, string>();
            chartConfig.Add("caption", "Countries With Most Oil Reserves [2017-18]");
            chartConfig.Add("subCaption", "In MMbbl = One Million barrels");
            chartConfig.Add("xAxisName", "Country");
            chartConfig.Add("yAxisName", "Reserves (MMbbl)");
            chartConfig.Add("numberSuffix", "k");
            chartConfig.Add("theme", "fusion");

            // json data to use as chart data source
            jsonData.Append("{'chart':{");
            foreach (var config in chartConfig) {
                jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value);
            }
            jsonData.Replace(",", "},", jsonData.Length - 1, 1);

            // build  data object from label-value pair
            data.Append("'data':[");
            foreach (KeyValuePair<string, double> pair in dataValuePair) {
                data.AppendFormat("{{'label':'{0}','value':'{1}'}},", pair.Key, pair.Value);
            }
            data.Replace(",", "]", data.Length - 1, 1);
            jsonData.Append(data.ToString());
            jsonData.Append("}");

            //Create chart instance
            // charttype, chartID, width, height, data format, data
            Chart MyFirstChart = new Chart("column2d", "first_chart", "800", "550", "json", jsonData.ToString());

            // render chart
            Literal1.Text = MyFirstChart.Render();
        }
    }

}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
Imports FusionCharts.Charts
Public Class index
Inherits System.Web.UI.Page
Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
'store label-value pair
Dim dataValuePair As New Dictionary(Of String, Double)
dataValuePair.Add("Venezuela", 290)
dataValuePair.Add("Saudi", 260)
dataValuePair.Add("Canada", 180)
dataValuePair.Add("Iran", 140)
dataValuePair.Add("Russia", 115)
dataValuePair.Add("UAE", 100)
dataValuePair.Add("US", 30)
dataValuePair.Add("China", 30)
Dim jsonData As New StringBuilder
Dim data As New StringBuilder
'store chart config name-config value pair
Dim chartConfig As New Dictionary(Of String, String)
chartConfig.Add("caption", "Countries With Most Oil Reserves [2017-18]")
chartConfig.Add("subCaption", "In MMbbl = One Million barrels")
chartConfig.Add("xAxisName", "Country")
chartConfig.Add("yAxisName", "Reserves (MMbbl)")
chartConfig.Add("numberSuffix", "k")
chartConfig.Add("theme", "fusion")
'json data to use as chart data source
jsonData.Append("{'chart':{")
For Each config In chartConfig
jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value)
Next
jsonData.Replace(",", "},", jsonData.Length - 1, 1)
'build data object from label-value pair
data.Append("'data':[")
For Each pair In dataValuePair
data.AppendFormat("{{'label':'{0}','value':'{1}'}},", pair.Key, pair.Value)
Next
data.Replace(",", "]", data.Length - 1, 1)
jsonData.Append(data.ToString())
jsonData.Append("}")
'Create chart instance
'charttype, chartID, width, height, data format, data
Dim MyFirstChart As New Chart("column2d", "first_chart", "600", "350", "json", jsonData.ToString())
Literal1.Text = MyFirstChart.Render()
End Sub
End Class
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

The index.aspx file will have HTML template, which includes the Javascript files and container for the chart. The HTML template is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-html">
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="FusionChartsProject.index" %&gt;
&lt;!DOCTYPE html&gt;
&lt;html xmlns=" http://www.w3.org/1999/xhtml"&gt;
&lt;head runat="server"&gt;
    &lt;title&gt;fusioncharts&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;div style="text-align:center"&gt;
        &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-html">
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.vb" Inherits="FusionChartsProject.index" %&gt;
&lt;!DOCTYPE html&gt;
&lt;html xmlns=" http://www.w3.org/1999/xhtml"&gt;
&lt;head runat="server"&gt;
    &lt;title&gt;fusioncharts&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;div style="text-align:center"&gt;
        &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

For Local files, you can include the Javascript files in the above code from the `script` folder, as follows:

```javascript
// Include FusionCharts core file
<script type="text/javascript" src="Script/fusioncharts.js"></script>

// Include FusionCharts Theme file
<script type="text/javascript" src="Script/themes/fusioncharts.theme.fusion.js"></script>
```

## Render the Chart

With the container for the chart created in `index.aspx` file, click on run and you'll be redirected to [http://127.0.0.1:8080/](http://127.0.0.1:8080/) , and you'll be able to see the chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `asp-net-wrapper` is ready.
