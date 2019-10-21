---
title: Setting Data Source Using URL | FusionCharts
description: FusionCharts lets you pass the complete JSON/XML chart data using a JSON file or a URL without losing any functionality
heading: Setting Data Source Using URL
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

FusionCharts lets you pass the complete JSON/XML chart data as a static string to the `dataSource` attribute. Alternatively, you can also save the chart data in a `.json` or `.xml` file and then pass the relative URL of this file as value to the `dataSource` attribute.

The only difference between the two methods is the value that is passed to the `dataFormat` attribute. For the first method, the `dataFormat` attribute takes `json` or `xml` as values, depending on the chart data. For the second method, the values will be `jsonurl` and `xmlurl`.

This article explains how you can set the chart data using the URL of the corresponding file using **FusionCharts ASP.NET `C#` & `VB` wrapper**.

## Load data using JSON as URL

Let's build the same revenue chart which we built in the [first example](/getting-started/react/your-first-chart-using-react) using JSON, and use a .json file as the data source.

{% embed_chartData plain-js-setting-data-using-url-example-1.js json %}

The data for this chart is represented in the table below:

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290                 |
| Saudi     | 260                 |
| Canada    | 180                 |
| Iran      | 140                 |
| Russia    | 115                 |
| UAE       | 100                 |
| US        | 30                  |
| China     | 30                  |

The JSON representation for the above table looks as shown below:

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
}
```

Copy this into a file, name it `oilReserves.json`, and store it in the same folder as your page.

> If you are using multilingual characters in your JSON, make sure that you save the JSON data with UTF-8 encoding.

The consolidated code for the above chart is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-javascript">
using System;
using FusionCharts.Charts;

public partial class JsonUrlData : System.Web.UI.Page
{
protected void Page_Load(object sender, EventArgs e)
{
//data url
string jsonDataUrl = "oilReserves.json";
// create chart instance
// parameter
// chart type, chart id, chart width, chart height, data format, data source
Chart columnChart = new Chart("column2d", "first_chart", "700", "400", "jsonurl", jsonDataUrl);
//render chart
Literal1.Text = columnChart.Render();
}
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
Imports FusionCharts.Charts
Partial Class JsonDataUrl
Inherits System.Web.UI.Page

Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
'store chart data url as string
Dim jsonDataUrl As String
jsonDataUrl = "oilReserves.json"
'create gauge instance
'chart type, chart id, width, height, data format, data source as url
Dim columnChart As New Chart("column2d", "columnchart", "700", "400", "jsonurl", jsonDataUrl)
'render gauge
Literal1.Text = columnChart.Render()
End Sub
End Class
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

The HTML template for `aspx` file is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-javascript">
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="JsonUrlData.aspx.cs" Inherits="JsonUrlData" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | Chart using data from JSON URL&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;Chart using data from JSON URL&lt;/h3&gt;
&lt;div&gt;
&lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
&lt;/div&gt;
&lt;div&gt;&lt;span&gt;
&lt;asp:HyperLink id="hyperlink1" NavigateUrl="../Default.aspx" Text="Go Back" runat="server" /&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/form&gt;
&lt;/body&gt;

&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
&lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="JsonDataUrl.aspx.vb" Inherits="JsonDataUrl" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | Chart using data from JSON URL&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;Chart using data from JSON URL&lt;/h3&gt;
&lt;div&gt;
&lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;  
 &lt;/div&gt;
&lt;div&gt;&lt;span&gt;&lt;asp:HyperLink id="hyperlink1" NavigateUrl="../Default.aspx" Text="Go Back" runat="server"/&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

The above chart has been rendered using the following steps:

1. Import and resolve the dependencies like `System`, and `FusionCharts.Charts`.

2. Define a class `CommonThemeUsage` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `CommonThemeUsage` is inherited.

3. Within the class `CommonThemeUsage`, define `Page_Load()`:

   - Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.
   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Column 2D chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `column2d`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).
   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js` (for this case, include **all theme files**), followed by some JavaScript functions and radio buttons, and finally within a `<form><div>` render the chart.
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of `dataSource`.

4. To set the datasource using URL:
   - Set the value of the `dataFormat` to **jsonurl**.
   - Set the static URL to `dataSource` to render the above chart.

> When rendering your charts locally (without a web server, even if on the localhost), you will not be able to load data from XML or JSON files present on your hard-drive. This is due to security restrictions enforced by most modern browsers.

## Load data using XML as URL

The XML representation for the above chart looks as shown below:

```
<chart caption='Countries With Most Oil Reserves [2017-18] ' subcaption='In MMbbl = One Million barrels ' xaxisname='Country ' yaxisname='Reserves (MMbbl) ' numberprefix='K ' theme='fusion '>
    <set label='Venezuela ' value='290 ' />
    <set label='Saudi ' value='260 ' />
    <set label='Canada ' value='180 ' />
    <set label='Iran ' value='140 ' />
    <set label='Russia ' value='115 ' />
    <set label='UAE ' value='100 ' />
    <set label='US ' value='30 ' />
    <set label='China ' value='30 ' />
</chart>
```

Copy this into a file called `oilReserves.xml` and store it in the same folder as your HTML page.

> If you are using multilingual characters in your XML, make sure you save the XML data with UTF-8 encoding.

The full code of the above sample is:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-javascript">
using System;
using FusionCharts.Charts;

public partial class XmlDataUrl : System.Web.UI.Page
{
protected void Page_Load(object sender, EventArgs e)
{
//data url
string xmlDataUrl = "oilReserves.xml";
// create chart instance
// parameter
// chart type, chart id, chart width, chart height, data format, data source
Chart columnChart = new Chart("column2d", "first_chart", "700", "400", "xmlurl", xmlDataUrl);
//render chart
Literal1.Text = columnChart.Render();
}
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
Imports FusionCharts.Charts
Partial Class XmlDataUrl
Inherits System.Web.UI.Page
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
'store chart  data url as  string
Dim xmlDataUrl As String
xmlDataUrl = "oilReserves.xml"
'create gauge instance
'chart type, chart id, width, height, data format, data source as url
Dim columnChart As New Chart("column2d", "columnchart", "700", "400", "xmlurl", xmlDataUrl)
'render gauge
Literal1.Text = columnChart.Render()
End Sub
End Class
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

The HTML template for `aspx` file is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="language-javascript">
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="XmlDataUrl.aspx.cs" Inherits="XmlDataUrl" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | Chart using data from XML URL&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;Chart using data from XML URL&lt;/h3&gt;
&lt;div&gt;
&lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;  
 &lt;/div&gt;
&lt;div&gt;&lt;span&gt;&lt;asp:HyperLink id="hyperlink1" NavigateUrl="../Default.aspx" Text="Go Back" runat="server"/&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
&lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="XmlDataUrl.aspx.vb" Inherits="XmlDataUrl" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | Chart using data from XML URL&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;Chart using data from XML URL&lt;/h3&gt;
&lt;div&gt;
&lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
&lt;/div&gt;
&lt;div&gt;&lt;span&gt;
&lt;asp:HyperLink id="hyperlink1" NavigateUrl="../Default.aspx" Text="Go Back" runat="server" /&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/form&gt;
&lt;/body&gt;

&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

The above chart has been rendered using the following steps:

1. Import and resolve the dependencies like `System`, and `FusionCharts.Charts`.

2. Define a class `CommonThemeUsage` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `CommonThemeUsage` is inherited.

3. Within the class `CommonThemeUsage`, define `Page_Load()`:

   - Declare a string `jsonData` and use it to assign the chart configuration as a XML string.
   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Column 2D chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `column2d`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).
   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js` (for this case, include **all theme files**), followed by some JavaScript functions and radio buttons, and finally within a `<form><div>` render the chart.
   - Set the `dataFormat` as XML.
   - Embed the json data as the value of `dataSource`.

4. To set the datasource using URL:
   - Set the value of the `dataFormat` to **xmlurl**.
   - Set the static URL to `dataSource` to render the above chart.
