---
permalink: getting-started/aspnet/your-first-chart-using-aspnet.html
title: Your First Chart in ASP.NET using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the asp.net.
heading: Your First Chart in ASP.NET using FusionCharts
chartPresent: false
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. In this page, we'll see how to render charts using FusionCharts and ASP.NET wrapper. We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/aspnet/your-first-chart-using-aspnet#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/aspnet/your-first-chart-using-aspnet#create-your-first-gauge-10) and a [map]({% site.baseurl %}/getting-started/aspnet/your-first-chart-using-aspnet#create-your-first-map-13).

Before going through this article, please [install]({% site.baseurl %}/getting-started/aspnet/install-using-aspnet '@@open-newtab') FusionCharts ASP.NET wrapper, if you haven’t installed it already.

## Create your first chart

In this section, we will create a chart using `FusionCharts ASP.NET` wrapper. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

The data for this chart is represented in a table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted data will look as shown below:

> There are different formats of JSON/XML for different groups of charts in FusionCharts - e.g., [single-series]({% site.baseurl %}/chart-guide/standard-charts/line-area-and-column-charts '@@open-newtab') (which you're seeing here), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

{% embed_data getting-started-your-first-chart.js %}

In the above code we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contains a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels or, data values. You can also set chart limits and extended properties. The functional attributes used in the above code are:

* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds a prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's data and provided fusion (default theme) as the value of it. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application.

#### Cosmetic Attributes

Cosmetic attributes let you configure chart cosmetics like color, transparency, font size etc. Since we are using the `fusion` theme to customize the chart's look and feel no cosmetic attributes are used in this sample. For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Create an instance of the chart

In this step, we will create an instance of the chart type as `column2d`, set the width and height (in pixels or %), and finally specify the data for the chart as string.

The code to render a chart using `.aspx.cs` and `.aspx.vb` file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
//Create chart instance
// jsonData = “JSON data of the chart”
// charttype, chartID, width, height, data format, data
Chart MyFirstChart = new Chart("column2d", "MyFirstChart", "700", "400", "json", jsonData.ToString());
Literal1.Text = MyFirstChart.Render();
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-cv">
' Create chart instance
'jsonData = “JSON data of the chart”
' charttype, chartID, width, height, data format, data
Dim MyFirstChart As New Chart("column2d", "first_chart", "700", "400", "json", jsonData.ToString())
Literal1.Text = MyFirstChart.Render()
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

In the above code:

* We have created an instance of the **column2d** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 600x400 pixels using `width` and `height`.
* To specify the data format as JSON/XML, we have set the `dataFormat` parameter to json. You can also provide the data in [XML format]({% site.baseurl %}/chart-guide/getting-started/using-xml-as-data-format '@@open-newtab'). 
* The JSON/XML data is embedded as the value of the `dataSource` parameter.

The full code and the common aspx template for the above sample is given below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="vb">VB</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab csharp-tab active">
<div><strong>.aspx (template)</strong></div>
<pre><code class="custom-hlc language-javascript">
    &lt;%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="asp_test.index" %&gt;

    &lt;!DOCTYPE html&gt;

    &lt;html xmlns="http://www.w3.org/1999/xhtml" &gt;

    &lt;head runat="server"&gt;
        &lt;title&gt;fusioncharts&lt;/title&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;div style="text-align:center"&gt;
            &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
        &lt;/div&gt;
    &lt;/body&gt;

    &lt;/html&gt;
</code></pre>
</br>
<div><strong>.aspx.cs (full code)</strong></div>
<pre><code class="custom-hlc language-javascript">
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
</code></pre>
</div>
<div class="tab vb-tab">
<div><strong>.aspx</strong></div>
<pre><code class="custom-hlc language-javascript">
    &lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="index.aspx.vb" Inherits="index" %&gt;

    &lt;!DOCTYPE html&gt;

    &lt;html xmlns="http://www.w3.org/1999/xhtml" &gt;

    &lt;head runat="server"&gt;
        &lt;title&gt;&lt;/title&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;form id="form1" runat="server"&gt;
            &lt;div&gt;
                &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
            &lt;/div&gt;
        &lt;/form&gt;
    &lt;/body&gt;

    &lt;/html&gt;
</code></pre>
</br>
<div><strong>.aspx.vb</strong></div>
<pre><code class="custom-hlc language-javascript">
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
    Dim MyFirstChart As New Chart("column2d", "first_chart", "600", "350", "json", jsonData.ToString())
    Literal1.Text = MyFirstChart.Render()
    End Sub
    End Class
</code></pre>
</div>
</div>
</div>

That's it! When you run this .aspx page now, you should see a chart representing your data.

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a Column 2D chart.

Now, go on and explore other 95+ chart types that we have in [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') or explore the configuration [attributes]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## The FusionCharts Chart Class

A list of available parameters is given in the table below:

### Constructor Parameters

The syntax of the `Chart` class constructor used to initialize the chart object is:

```vb.net
Chart <object name> = new Chart (chartType, chartId, chartWidth, chartHeight, dataFormat, dataSource, bgColor, bgOpacity)

```

Given below is a brief description of the constructor parameters:

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`
</td>
    <td>String</td>
    <td>It is used to specify the type of chart to be rendered.</td>
  </tr>
  <tr>
    <td>`chartId`</td>
    <td>String</td>
    <td>It is used to specify a unique identifier for the chart. If multiple charts are rendered on the same HTML page, each chart is referred to using its unique ID.</td>
  </tr>
  <tr>
    <td>`chartWidth`</td>
    <td>String</td>
    <td>It is used to specify the width of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`chartHeight`</td>
    <td>String</td>
    <td>It is used to specify the height of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>String</td>
    <td>It is used to specify the type of data that will be passed to the chart. This attribute takes the following values: `json`, `xml`, `jsonurl`, `xmlurl`. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>String</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>String</td>
    <td>It is used to specify the hex code for the background color of the chart.</td>
  </tr>
  <tr>
    <td>`bgOpacity`</td>
    <td>String</td>
    <td>It is used to specify the background opacity for the chart. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


>  It is not necessary that you assign values for all parameters during initialization. The order of parameters, however, needs to be preserved. Also, you need to make sure that all of these parameters have been assigned values using the constructor, the `Chart` class methods, or the `Render()` method before you run the application. If not, either the chart will not render at all or it will not render the way you want it to. </p>

### Methods under the Chart Class

Given below is a brief description of the methods in the `Chart` class:

<table>
  <tr>
    <th>Method Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`SetChartParameter`</td>
    <td>It is used to set or modify the values for chart parameters like `chartType`, `chartWidth`, `chartHeight`, etc. This method takes the following parameters:

`param`:
Type: enum
Description: It is used to specify the name of the chart parameter that you want to set/modify. For example, `Chart.ChartParameter.chartType`

`value`:
Type: String
Description: It is used to specify the value for the chart parameter. For example, `column2d`.</td>
  </tr>
  <tr>
    <td>`GetChartParameter`</td>
    <td>It is used to get the value of any chart parameter. This method takes the following parameters:

`param`:
Type: enum
Description: It is used to specify the name of the chart parameter whose value you want to get. For example, `Chart.ChartParameter.chartType`</td>
  </tr>
  <tr>
    <td>`SetData`</td>
    <td>It is used to set the data source for the chart. This method takes the following parameters:

`dataSource`:
Type: String
Description: It is used to specify the data for the chart. For example, `data/data.xml`.

`format`:
Type: enum
Description: It is used to specify the format of the data source. This is an optional parameter.</td>
  </tr>
</table>


## The Render() Method

Given below is a brief description of the parameters that can be passed using this method:

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`chartType`
</td>
    <td>String</td>
    <td>It is used to specify the type of chart to be rendered.</td>
  </tr>
  <tr>
    <td>`chartId`</td>
    <td>String</td>
    <td>It is used to specify a unique identifier for the chart. If multiple charts are rendered on the same HTML page, each chart is referred to using its unique ID.</td>
  </tr>
  <tr>
    <td>`chartWidth`</td>
    <td>String</td>
    <td>It is used to specify the width of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`chartHeight`</td>
    <td>String</td>
    <td>It is used to specify the height of the chart, in pixels.</td>
  </tr>
  <tr>
    <td>`dataFormat`</td>
    <td>String</td>
    <td>It is used to specify the type of data that will be passed to the chart. This attribute takes the following values: `json`, `xml`, `jsonurl`, and `xmlurl`. </td>
  </tr>
  <tr>
    <td>`dataSource`</td>
    <td>String</td>
    <td>It specifies the source from where the data will be fetched, depending on the value passed to the `dataFormat` attribute.</td>
  </tr>
  <tr>
    <td>`bgColor`</td>
    <td>String</td>
    <td>It is used to specify the hex code for the background color of the chart.</td>
  </tr>
  <tr>
    <td>`bgOpacity`</td>
    <td>String</td>
    <td>It is used to specify the background opacity for the chart. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


For a working sample, you can use the **asp-net-wrapper.zip** included in the download package.

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple gauge showcasing Nordstorm's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 meansgood and is green.

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

{% embed_data getting-started-your-first-widget.js %}

### Create an instance of the gauge

In this step, we will create an instance of the chart type as `angulargauge`, set the width and height (in pixels or %), and finally specify the data for the chart as string.

The code to render a chart using `.aspx.cs` and `.aspx.vb` file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
     //Create gauge instance
     // jsonData = “JSON data of the gauge"
    // charttype, chartID, width, height, data format, data

    Chart MyFirstGauge = new Chart("angulargauge", "first_gauge", "450", "250", "json", jsonData.ToString());
    Literal1.Text = MyFirstGauge.Render();
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-cv">
    'Create gauge instance
    'jsonData = “JSON data of the gauge"
    'charttype, chartID, width, height, data format, data

    Dim MyFirstGauge As New Chart("angulargauge", "first_gauge", "400", "350", "json", jsonData.ToString())
    'render gauge
    Literal1.Text = MyFirstGauge.Render()
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

The full code for the above sample is given below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="vb">VB</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab csharp-tab active">
<div><strong>.aspx</strong></div>
<pre><code class="custom-hlc language-javascript">
    &lt;%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="asp_test.index" %&gt;

    &lt;!DOCTYPE html&gt;

    &lt;html xmlns="http://www.w3.org/1999/xhtml" &gt;

    &lt;head runat="server"&gt;
        &lt;title&gt;fusioncharts&lt;/title&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;div style="text-align:center"&gt;
            &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
        &lt;/div&gt;
    &lt;/body&gt;

    &lt;/html&gt;
</code></pre>
</br>
<div><strong>.aspx.cs</strong></div>
<pre><code class="custom-hlc language-javascript">
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
                chartConfig.Add("caption", "Nordstorm\\'s Customer Satisfaction Score for 2017");
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

                Chart MyFirstGauge = new Chart("angulargauge", "first_gauge", "400", "350", "json", jsonData.ToString());
                //render gauge
                Literal1.Text = MyFirstGauge.Render();
            }
        }
    }
</code></pre>
</div>
<div class="tab vb-tab">
<div><strong>.aspx</strong></div>
<pre><code class="custom-hlc language-javascript">
    &lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="index.aspx.vb" Inherits="index" %&gt;

    &lt;!DOCTYPE html&gt;

    &lt;html xmlns="http://www.w3.org/1999/xhtml" &gt;

    &lt;head runat="server"&gt;
        &lt;title&gt;&lt;/title&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;form id="form1" runat="server"&gt;
            &lt;div&gt;
                &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
            &lt;/div&gt;
        &lt;/form&gt;
    &lt;/body&gt;

    &lt;/html&gt;
</code></pre>
</br>
<div><strong>.aspx.vb</strong></div>
<pre><code class="custom-hlc language-javascript">
    Imports FusionCharts.Charts

    Partial Class gauge
    Inherits System.Web.UI.Page 'Create colorRange class
    'It will store Min range Max range And specific color code for each range
    Class ColorRange
    Private lowerLimit As Integer
    Private upprLimit As Integer
    Private code As String
        'lower value of range set as property
    Property Min() As Integer
    Get
    Return lowerLimit

    End Get
    Set(value As Integer)
    lowerLimit = value
    End Set
    End Property
        'upper value of range set as property
    Property Max() As Integer
    Get
    Return upprLimit

    End Get
    Set(value As Integer)
    upprLimit = value
    End Set
    End Property
        ' specific color code for this range
    Property ColorCode() As String
    Get
    Return code

    End Get
    Set(value As String)
    code = value
    End Set
    End Property
        'constructor
    Public Sub New(ByVal lowerLimit As Integer, ByVal upperLimit As Integer, ByVal code As String)
    Min = lowerLimit
    Max = upperLimit
    ColorCode = code
    End Sub

    End Class
    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load 'store chart config name-config value pair

    Dim chartConfig As New Dictionary(Of String, String)
    chartConfig.Add("caption", "Nordstorm\'s Customer Satisfaction Score for 2017")
    chartConfig.Add("lowerLimit", "0")
    chartConfig.Add("upperLimit", "100")
    chartConfig.Add("showValue", "1")
    chartConfig.Add("numberSuffix", "%")
    chartConfig.Add("theme", "fusion")
    chartConfig.Add("showToolTip", "0")

    Dim color As New List(Of ColorRange)
    color.Add(New ColorRange(0, 50, "#F2726F"))
    color.Add(New ColorRange(50, 75, "#FFC533"))
    color.Add(New ColorRange(75, 100, "#62B58F"))

    'store dial configuration

    Dim dial As New Dictionary(Of String, String)
    dial.Add("value", "81")
    'json data to use as chart data source
    Dim jsonData As New StringBuilder
        'build chart config object
    jsonData.Append("{'chart':{")

    For Each config In chartConfig
    jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value)
    Next

    jsonData.Replace(",", "},", jsonData.Length - 1, 1)

    Dim range As New StringBuilder
        'build colorRange object
    range.Append("'colorRange':{")
    range.Append("'color':[")
    For Each clr In color

    range.AppendFormat("{{'minValue':'{0}','maxValue':'{1}','code':'{2}'}},", clr.Min, clr.Max, clr.ColorCode)
    Next
    range.Replace(",", "]},", range.Length - 1, 1)
    'build dials object
    Dim dials As New StringBuilder
    dials.Append("'dials':{")
    dials.Append("'dial':[")
    For Each dialCnf In dial

    dials.AppendFormat("{{'{0}':'{1}'}},", dialCnf.Key, dialCnf.Value)
    Next
    dials.Replace(",", "]}", dials.Length - 1, 1)

    jsonData.Append(range.ToString())
    jsonData.Append(dials.ToString())
    jsonData.Append("}")

    'Create gauge instance
    'charttype, chartID, width, height, data format, data

    Dim MyFirstGauge As New Chart("angulargauge", "first_gauge", "400", "350", "json", jsonData.ToString())
    'render gauge
    Literal1.Text = MyFirstGauge.Render()
    End Sub
    End Class
</code></pre>
</div>
</div>
</div>

See the complete list of[ all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for a angular gauge.

## Create your first map

In this section, we will create a visualization using the map of **World**. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in a table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

> In the above table, the column **Entity Name** represents the geographical entities represnted in the map, whose full names are given in the **State** column in this example. However, when you convert the data in a format acceptable by FusionCharts, the entities are denoted by the `id` key in the `data` object (see the code snippet of the next section). For any map visualization you create, it is imperative that you provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF`, and not `AFR`. We have detailed [Map Specification Sheet]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab') for all the maps that can be rendered using FusionCharts - please refer to them for the correct `id`s of the map you want to create.

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

{% embed_data getting-started-your-first-map.js %}

### Create an instance of the map

In this step, we will create an instance of the map type as `world`, set the width and height (in pixels or %), and finally specify the data for the chart as string.

The code to render a chart using `.aspx.cs` or `.aspx.vb` file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
     //Create map instance
     // jsonData = “JSON data of the map”
    // map type, mapid, width, height, data format, data

    Chart MyFirstMap = new Chart("maps/world", "first_map", "800", "500", "json", jsonData.ToString());
    //render map
    Literal1.Text = MyFirstMap.Render();
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-cv">
    'Create map instance
    'jsonData = “JSON data of the chart”
    'map type, mapid, width, height, data format, data
    Dim MyFirstMap As New Chart("maps/world", "first_map", "800", "500", "json", jsonData.ToString())
    'render map
    Literal1.Text = MyFirstMap.Render()
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

The full code for the above sample is given below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="csharp">C#</a></li>
    <li><a data-toggle="vb">VB</a></li>
</ul>

<div class="tab-content extra-tabs">
<div class="tab csharp-tab active">
<div><strong>.aspx</strong></div>
<pre><code class="custom-hlc language-javascript">
    &lt;%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="asp_test.index" %&gt;

    &lt;!DOCTYPE html&gt;

    &lt;html xmlns="http://www.w3.org/1999/xhtml" &gt;

    &lt;head runat="server"&gt;
        &lt;title&gt;fusioncharts&lt;/title&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;div style="text-align:center"&gt;
            &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
        &lt;/div&gt;
    &lt;/body&gt;

    &lt;/html&gt;
</code></pre>
</br>
<div><strong>.aspx.cs</strong></div>
<pre><code class="custom-hlc language-javascript">
    using System;
    using System.Collections.Generic;
    using System.Text;
    using FusionCharts.Charts;
    namespace asp_test {
        public partial class map: System.Web.UI.Page {
            //Create colorRange class
            //It will store Min range Max range and specific color code for each range

            class ColorRange {
                public double Min {
                    get;
                    set;
                }
                public double Max {
                    get;
                    set;
                }
                public string ColorCode {
                    get;
                    set;
                }

                public ColorRange(double min, double max, string code) {
                    Min = min;
                    Max = max;
                    ColorCode = code;
                }
            }
            //Create countryData class
            //It will store id, value and show label for each country

            class countryData {
                public string ID {
                    get;
                    set;
                }
                public double Value {
                    get;
                    set;
                }
                public int ShowLabel {
                    get;
                    set;
                }

                public countryData(string id, double value, int showLabel) {
                    ID = id;
                    Value = value;
                    ShowLabel = showLabel;

                }

            }
            protected void Page_Load(object sender, EventArgs e) {
                // store chart config name-config value pair
                Dictionary < string, string > chartConfig = new Dictionary < string, string > ();
                chartConfig.Add("caption", "Average Annual Population Growth");
                chartConfig.Add("subCaption", " 1955-2015");
                chartConfig.Add("includevalueinlabels", "1");
                chartConfig.Add("labelsepchar", ": ");
                chartConfig.Add("numberSuffix", "%");
                chartConfig.Add("entityFillHoverColor", "#FFF9C4");
                chartConfig.Add("theme", "fusion");

                // store color code for different range
                List < ColorRange > color = new List < ColorRange > ();
                color.Add(new ColorRange(0.5, 1.0, "#FFD74D"));
                color.Add(new ColorRange(1.0, 2.0, "#FB8C00"));
                color.Add(new ColorRange(2.0, 3.0, "#E65100"));

                // store country data
                List < countryData > countries = new List < countryData > ();
                countries.Add(new countryData("NA", .82, 1));
                countries.Add(new countryData("SA", 2.04, 1));
                countries.Add(new countryData("AS", 1.78, 1));
                countries.Add(new countryData("EU", .40, 1));
                countries.Add(new countryData("AF", 2.58, 1));
                countries.Add(new countryData("AU", 1.30, 1));

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

                // build data object
                StringBuilder data = new StringBuilder();
                data.Append("'data':[");
                foreach(countryData country in countries) {
                    data.AppendFormat("{{'id':'{0}','value':'{1}','showLabel':'{2}'}},", country.ID, country.Value, country.ShowLabel);
                }
                data.Replace(",", "]", data.Length - 1, 1);
                jsonData.Append(range);
                jsonData.Append(data);
                jsonData.Append("}");
                //Create map instance
                // map type, mapid, width, height, data format, data

                Chart MyFirstMap = new Chart("world", "first_map", "800", "500", "json", jsonData.ToString());
                //render map
                Literal1.Text = MyFirstMap.Render();
            }
        }
    }
</code></pre>
</div>
<div class="tab vb-tab">
<div><strong>.aspx</strong></div>
<pre><code class="custom-hlc language-javascript">
    &lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="index.aspx.vb" Inherits="index" %&gt;

    &lt;!DOCTYPE html&gt;

    &lt;html xmlns="http://www.w3.org/1999/xhtml" &gt;

    &lt;head runat="server"&gt;
        &lt;title&gt;&lt;/title&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"&gt;&lt;/script&gt;
        &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;form id="form1" runat="server"&gt;
            &lt;div&gt;
                &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
            &lt;/div&gt;
        &lt;/form&gt;
    &lt;/body&gt;

    &lt;/html&gt;
</code></pre>
</br>
<div><strong>.aspx.vb</strong></div>
<pre><code class="custom-hlc language-javascript">
    Imports FusionCharts.Charts
    Partial Class map
    Inherits System.Web.UI.Page
    'Create colorRange class
    'It will store Min range Max range And specific color code for each range
    Class ColorRange
    Private lowerLimit As Double

    Private upprLimit As Double
    Private code As String
        'lower value of range set as property
    Property Min() As Double
    Get
    Return lowerLimit

    End Get
    Set(value As Double)
    lowerLimit = value
    End Set
    End Property
        'upper value of range set as property
    Property Max() As Double
    Get
    Return upprLimit

    End Get
    Set(value As Double)
    upprLimit = value
    End Set
    End Property
        ' specific color code for this range
    Property ColorCode() As String
    Get
    Return code

    End Get
    Set(value As String)
    code = value
    End Set
    End Property
        'constructor
    Public Sub New(ByVal lowerLimit As Double, ByVal upperLimit As Double, ByVal code As String)
    Min = lowerLimit
    Max = upperLimit
    ColorCode = code
    End Sub

    End Class
        'Create countryData class
    'It will store id, value And show label for each country
    Class CountryData
    Private cid As String
    Private cvalue As Double
    Private label As Integer
        'country id set as a property
    Property ID() As String
    Get
    Return cid

    End Get
    Set(value As String)
    cid = value
    End Set
    End Property
        'data value for a country set as property
    Property Value() As Double
    Get
    Return cvalue

    End Get
    Set(value As Double)
    cvalue = value
    End Set
    End Property
        ' whether show label or not
    Property ShowLabel() As Integer
    Get
    Return label

    End Get
    Set(value As Integer)
    label = value
    End Set
    End Property
        'constructor
    Public Sub New(ByVal cntryid As String, ByVal val As Double, ByVal lbl As Integer)
    ID = cntryid
    Value = val
    ShowLabel = lbl
    End Sub

    End Class
    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load ' store chart config name-config value pair
    Dim chartConfig As New Dictionary(Of String, String)
    chartConfig.Add("caption", "Average Annual Population Growth")
    chartConfig.Add("subCaption", " 1955-2015")
    chartConfig.Add("includevalueinlabels", "1")
    chartConfig.Add("labelsepchar", ": ")
    chartConfig.Add("numberSuffix", "%")
    chartConfig.Add("entityFillHoverColor", "#FFF9C4")
    chartConfig.Add("theme", "fusion")

    'store color code for different range
    Dim color As New List(Of ColorRange)
    color.Add(New ColorRange(0.5, 1.0, "#FFD74D"))
    color.Add(New ColorRange(1.0, 2.0, "#FB8C00"))
    color.Add(New ColorRange(2.0, 3.0, "#E65100"))

    'store country data
    Dim countries As New List(Of CountryData)
    countries.Add(New CountryData("NA", 0.82, 1))
    countries.Add(New CountryData("SA", 2.04, 1))
    countries.Add(New CountryData("AS", 1.78, 1))
    countries.Add(New CountryData("EU", 0.4, 1))
    countries.Add(New CountryData("AF", 2.58, 1))
    countries.Add(New CountryData("AU", 1.3, 1))

    'json data to use as chart data source
    Dim jsonData As New StringBuilder
        'build chart config object
    jsonData.Append("{'chart':{")
    For Each config In chartConfig

    jsonData.AppendFormat("'{0}':'{1}',", config.Key, config.Value)
    Next
    jsonData.Replace(",", "},", jsonData.Length - 1, 1)

    Dim range As New StringBuilder
        'build colorRange object
    range.Append("'colorRange':{")
    range.Append("'color':[")
    For Each clr In color

    range.AppendFormat("{{'minValue':'{0}','maxValue':'{1}','code':'{2}'}},", clr.Min, clr.Max, clr.ColorCode)
    Next
    range.Replace(",", "]},", range.Length - 1, 1)

    'build data object
    Dim data As New StringBuilder
    data.Append("'data':[")
    For Each country In countries

    data.AppendFormat("{{'id':'{0}','value':'{1}','showLabel':'{2}'}},", country.ID, country.Value, country.ShowLabel)
    Next
    data.Replace(",", "]", data.Length - 1, 1)
    jsonData.Append(range)
    jsonData.Append(data)
    jsonData.Append("}")
    'Create map instance
    'map type, mapid, width, height, data format, data

    Dim MyFirstMap As New Chart("world", "first_map", "800", "500", "json", jsonData.ToString())
    'render map
    Literal1.Text = MyFirstMap.Render()
    End Sub

    End Class
</code></pre>
</div>
</div>
</div>

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of world. The respective `id`, can be found at [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case something went wrong, and you are unable to see the chart, check for the following:

* If you don't see the chart getting rendered on the browser, it might be because some browsers does not allow JavaScript files to be loaded and run from the local filesystem. In such cases, either try with a different browser, or create a local/remote server and server the webpages containing the charts from the server.

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON/XML data structure is correct, or there are conflicts related to quotation marks in your code.