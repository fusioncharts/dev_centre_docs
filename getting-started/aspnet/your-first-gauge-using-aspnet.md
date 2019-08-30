---
title: Your First Gauge in ASP.NET using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the asp.net.
heading: Create a Gauge Using ASP.NET in FusionCharts
---

> ### FusionCharts.NET
>
> We have released FusionCharts.NET which brings the seamless support of FusionCharts JavaScript charting library to Microsoft .NET Framework. [Download](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net) it now to take advantage of the following powerful features:
>
> - Provide raw data and FusionCharts.NET automatically converts the data into JSON.
> - Dynamically slice and dice data to derive insights using the [data engine](/fusioncharts-aspnet-visualization/data-engine/data-engine-overview).
> - All methods and properties are available in Visual Studio intellisense.
> - ...and many more.
>   Get it now. Click [here](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net)!

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side **ASP.NET** wrapper for FusionCharts. The `FusionCharts server-side ASP.NET` wrapper lets you easily add rich and interactive gauges to any ASP.NET project. Using the wrapper, you can create gauges in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a gauge using the `FusionCharts server-side ASP.NET` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts ASP.NET` wrapper and all the other dependencies on your system.

> The **FusionCharts ASP.NET server-side wrapper** requires **.NET Framework 3.5** or higher.

- Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

- Copy the FusionCharts.cs or FusionCharts.vb class (C#/VB) file from `integrations > asp.net-cs > fusioncharts-wrapper-source` (for C#) or `integration > asp.net-vb > fusioncharts-wrapper-source` (for VB) to `App_Code` folder inside your project.

- Include the **FusionCharts** theme file to apply the style to the gauges.

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

## Create Your First Gauge

Gauges are powerful tools that can showcase information using a radial scale to display data and a dial to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple gauge showcasing Nordstrom's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart data

The thresholds for the above sample is shown in the table below:

| Range  | Color  | Hex Code |
| ------ | ------ | -------- |
| 0-50   | Red    | #F2726F  |
| 50-75  | Yellow | #FFC533  |
| 75-100 | Green  | #62B58F  |

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```javascript
{
  // Chart Configuration
  "chart": {
    "caption": "Nordstrom's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  // Chart Data
  "colorRange": {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
}
```

In the above JSON:

- Create the `chart` object to define the elements of the gauge.

- Create the `colorRange` object to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` object.

- Set the `code` attribute to specify the hex color of respective ranges.

- Create the `dials` object to represent the customer satisfaction score.

- Create the `dial` object under `dials` object to set the value of customer satisfaction score.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Gauge

To render the chart, follow the steps below:

1. Include the **FusionCharts asp-net-wrapper** (for C#) OR **FusionCharts vb-net-wrapper** (for VB) in your project.

2. Include the `fusioncharts` library.

3. Include the FusionCharts theme file to apply the style to the charts.

4. Store label-value pairs in an object.

5. Store the chart configurations in an object.

6. Convert the final chart configuration to JSON string.

7. Create the chart instance and set the following:

   - Set the chart type as `angulargauge`. Each chart type is represented with a unique chart alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

   - Set the gauge `id`.

   - Set the `width` and `height` (in pixels).

   - Set the container for the gauge.

   - Set the `dataFormat` as JSON.

   - Embed the `json` data as the value of the `dataSource`.

8. Finally, use a container using `<div>` to render the gauge.

The consolidated code is shown below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="vb">VB</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab csharp-tab active">
<pre><code class="language-javascript">
    using System;
    using System.Collections.Generic;
    using System.Text;
    using FusionCharts.Charts;

    namespace asp_test {
        public partial class gauge: System.Web.UI.Page {
            class ColorRange {
                public int Min {
                    get;
                    set;
                }
                public int Max {
                    get;
                    set;
                }
                public string ColorCode {
                    get;
                    set;
                }

                public ColorRange(int min, int max, string code) {
                    Min = min;
                    Max = max;
                    ColorCode = code;
                }
            }
            protected void Page_Load(object sender, EventArgs e) {
                // store chart config name-config value pair

                Dictionary < string, string > chartConfig = new Dictionary < string, string > ();
                chartConfig.Add("caption", "Nordstrom\\'s Customer Satisfaction Score for 2017");
                chartConfig.Add("lowerLimit", "0");
                chartConfig.Add("upperLimit", "100");
                chartConfig.Add("showValue", "1");
                chartConfig.Add("numberSuffix", "%");
                chartConfig.Add("theme", "fusion");
                chartConfig.Add("showToolTip", "0");

                List < ColorRange > color = new List < ColorRange > ();
                color.Add(new ColorRange(0, 50, "#F2726F"));
                color.Add(new ColorRange(50, 75, "#FFC533"));
                color.Add(new ColorRange(75, 100, "#62B58F"));

                //store dial configuration

                var dial = new List < KeyValuePair < string,
                    string >> ();
                dial.Add(new KeyValuePair < string, string > ("value", "81"));

                // json data to use as chart data source
                StringBuilder jsonData = new StringBuilder();
                //build chart config object
                jsonData.Append("{'chart':{");
                foreach(var config in chartConfig) {
                    jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value);
                }
                jsonData.Replace(",", "},", jsonData.Length - 1, 1);

                StringBuilder range = new StringBuilder();
                //build colorRange object
                range.Append("'colorRange':{");
                range.Append("'color':[");
                foreach(ColorRange clr in color) {
                    range.AppendFormat("{{'minValue':'{0}','maxValue':'{1}','code':'{2}'}},", clr.Min, clr.Max, clr.ColorCode);
                }
                range.Replace(",", "]},", range.Length - 1, 1);
                //build dials object
                StringBuilder dials = new StringBuilder();
                dials.Append("'dials':{");
                dials.Append("'dial':[");
                foreach(var dialCnf in dial) {
                    dials.AppendFormat("{{'{0}':'{1}'}},", dialCnf.Key, dialCnf.Value);
                }
                dials.Replace(",", "]}", dials.Length - 1, 1);

                jsonData.Append(range.ToString());
                jsonData.Append(dials.ToString());
                jsonData.Append("}");

                //Create gauge instance
                // charttype, chartID, width, height, data format, data

                Chart MyFirstGauge = new Chart("angulargauge", "first_gauge", "450", "250", "json", jsonData.ToString());
                //render gauge
                Literal1.Text = MyFirstGauge.Render();
            }
        }
    }

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
<div class="tab vb-tab">
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

    ' json data to use as chart data source
    jsonData.Append("{'chart':{")
    For Each config In chartConfig
    jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value)
    Next
    jsonData.Replace(",", "},", jsonData.Length - 1, 1)

    ' build  data object from label-value pair
    data.Append("'data':[")

    For Each pair In dataValuePair
    data.AppendFormat("{{'label':'{0}','value':'{1}'}},", pair.Key, pair.Value)
    Next

    data.Replace(",", "]", data.Length - 1, 1)

    jsonData.Append(data.ToString())
    jsonData.Append("}")
    ' Create chart instance
    ' charttype, chartID, width, height, data format, data
    Dim MyFirstChart As New Chart("angulargauge", "first_gauge", "450", "250", "json", jsonData.ToString())
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
    &lt;%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="asp_test.gauge" %&gt;

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
    &lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="index.aspx.vb" Inherits="gauge" %&gt;
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

That's it! Your first gauge using the FusionCharts ASP.NET wrapper is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the map, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
