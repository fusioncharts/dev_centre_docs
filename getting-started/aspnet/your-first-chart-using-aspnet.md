---
title: Your First Chart in ASP.NET using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the asp.net.
heading: Create a Chart Using ASP.NET in FusionCharts
---

> ### FusionCharts.NET
>
> We have released FusionCharts.NET which brings the seamless support of FusionCharts JavaScript charting library to Microsoft .NET Framework. [Download](https://www.fusioncharts.com/dev/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net) it now to take advantage of the following powerful features:
>
> - Provide raw data and FusionCharts.NET automatically converts the data into JSON.
> - Dynamically slice and dice data to derive insights using the [data engine](https://www.fusioncharts.com/dev/fusioncharts-aspnet-visualization/data-engine/data-engine-overview).
> - All methods and properties are available in Visual Studio intellisense.
> - ...and many more.
>   Get it now. Click [here](https://www.fusioncharts.com/dev/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net)!

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **ASP.NET** wrapper for FusionCharts. The `FusionCharts server-side ASP.NET` wrapper lets you easily add rich and interactive charts to any ASP.NET project. Using the wrapper, you can create charts in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a chart using the `FusionCharts server-side ASP.NET` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts ASP.NET` wrapper and all the other dependencies on your system.

> The **FusionCharts ASP.NET server-side wrapper** requires **.NET Framework 3.5** or higher.

- Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

- Copy the FusionCharts.cs or FusionCharts.vb class (C#/VB) file from `integrations > asp.net-cs >fusioncharts-wrapper-source` (for C#) or `integration > asp.net-vb > fusioncharts-wrapper-source` (for VB) to `App_Code` folder inside your project.

- Include the **FusionCharts** theme file to apply the style to the charts.

The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

That completes the installation of FusionCharts Suite and the `asp-net-wrapper`.

## Create Your First Chart

Let's create a Column 2D chart using the `asp-net-wrapper` showing the "Countries with Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

{% embed_chart getting-started-your-first-chart.js %}

To understand the chart components, click [here](/understanding-fusioncharts).

## Chart data

The data to render the above chart is shown in the table below:

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

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Countries With Most Oil Reserves [2017-18]",
    "subCaption": "In MMbbl = One Million barrels",
    "xAxisName": "Country",
    "yAxisName": "Reserves (MMbbl)",
    "numberSuffix": "K",
    "theme": "fusion"
  },
  // Chart Data
  "data": [
    {
      "label": "Venezuela",
      "value": "290"
    },
    {
      "label": "Saudi",
      "value": "260"
    },
    {
      "label": "Canada",
      "value": "180"
    },
    {
      "label": "Iran",
      "value": "140"
    },
    {
      "label": "Russia",
      "value": "115"
    },
    {
      "label": "UAE",
      "value": "100"
    },
    {
      "label": "US",
      "value": "30"
    },
    {
      "label": "China",
      "value": "30"
    }
  ]
}
```

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example, [single-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts.

In the above JSON data:

- Create the `chart` object to define the elements of the chart.

- Set the `caption` and `subcaption` of the chart.

- Set the value of `xAxisName` attribute to **Country**(first column of the table).

- Set the value of `yAxisName` attribute to **Reserves**(second column of the table).

- In the `data` array, create objects for each row and specify the `label` attribute to represent the Country. For example, **Venezuela**.

- Similarly, specify the `value` attribute to set the value of Oil Reserves in respective countries. For example, **290K** for **Venezuela**.

- Set the `numberSuffix` attribute to set the unit of the values.

- Set the `theme` attribute to apply the predefines themes to the chart.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Chart

1. Include the **FusionCharts asp-net-wrapper** (for C#) OR **FusionCharts vb-net-wrapper** (for VB) in your project.

2. Include the `fusioncharts` library.

3. Include the FusionCharts theme file to apply the style to the charts.

4. Store label-value pairs in an object.

5. Store the chart configurations in an object.

6. Convert the final chart configuration to JSON string.

7. Create the chart instance and set the following:

   - Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias[ here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

   - Set the chart `id`.

   - Set the `width` and `height` (in pixels).

   - Set the container for the chart.

   - Set the `dataFormat` as JSON.

   - Embed the `json` data as the value of the `dataSource`.

8. Finally, use a container using `<div>` to render the chart.

The consolidated code is shown below:

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

    namespace asp_test {
        public partial class index: System.Web.UI.Page {

            protected void Page_Load(object sender, EventArgs e) {
                //store label-value pair
                var dataValuePair = new List < KeyValuePair < string, double >> ();

                dataValuePair.Add(new KeyValuePair < string, double > ("Venezuela", 290));
                dataValuePair.Add(new KeyValuePair < string, double > ("Saudi", 260));
                dataValuePair.Add(new KeyValuePair < string, double > ("Canada", 180));
                dataValuePair.Add(new KeyValuePair < string, double > ("Iran", 140));
                dataValuePair.Add(new KeyValuePair < string, double > ("Russia", 115));
                dataValuePair.Add(new KeyValuePair < string, double > ("UAE", 100));
                dataValuePair.Add(new KeyValuePair < string, double > ("US", 30));
                dataValuePair.Add(new KeyValuePair < string, double > ("China", 30));

                StringBuilder jsonData = new StringBuilder();
                StringBuilder data = new StringBuilder();
                // store chart config name-config value pair

                Dictionary < string, string > chartConfig = new Dictionary < string, string > ();
                chartConfig.Add("caption", "Countries With Most Oil Reserves [2017-18]");
                chartConfig.Add("subCaption", "In MMbbl = One Million barrels");
                chartConfig.Add("xAxisName", "Country");
                chartConfig.Add("yAxisName", "Reserves (MMbbl)");
                chartConfig.Add("numberSuffix", "k");
                chartConfig.Add("theme", "fusion");

                // json data to use as chart data source
                jsonData.Append("{'chart':{");
                foreach(var config in chartConfig) {
                    jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value);
                }
                jsonData.Replace(",", "},", jsonData.Length - 1, 1);

                // build  data object from label-value pair
                data.Append("'data':[");

                foreach(KeyValuePair < string, double > pair in dataValuePair) {
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
    Partial Class first_chart
    Inherits System.Web.UI.Page
    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load 'store label-value pair

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

The HTML template is shown below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="vb">VB</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab csharp-tab active">
<pre><code class="language-javascript">
    &lt;%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="asp_test.index" %&gt;

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
<div class="tab vb-tab">
<pre><code class="language-javascript">
    &lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="index.aspx.vb" Inherits="index" %&gt;
    &lt;!DOCTYPE html&gt;
    &lt;html xmlns=" http://www.w3.org/1999/xhtml"&gt;
    &lt;head runat="server"&gt;
        &lt;title&gt;fusioncharts&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;form id="form1" runat="server"&gt;
            &lt;div&gt;
                &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
            &lt;/div&gt;
        &lt;/form&gt;
    &lt;/body&gt;
    &lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

That's it! Your first chart using the `FusionCharts asp-net-wrapper` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the map, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
