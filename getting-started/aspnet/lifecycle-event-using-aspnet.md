---
title: Lifecycle Events using ASP.NET | FusionCharts
description: The sample in this article lists the basic lifestyle events at the time of rendering the chart using ASP.NET.
heading: Lifecycle Events using ASP.NET
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

Events are signals that let you execute specific actions — such as sending data to the server, and so on — using JavaScript, in response to any interactions/updates for a chart.

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart **updates** and **events**.

The sample in this article lists the basic **lifecycle events** at the _time of rendering the chart_ using **FusionCharts ASP.NET `C#` & `VB` wrapper**. A chart is shown below:

{% embed_chartData lifecycle-event-server-side-example-1.js json %}

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
public partial class Pages_ProductLifeCycleEvent : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //json data in string format
        string jsonData = "{      'chart': {        'caption': 'Countries With Most Oil Reserves [2017-18]',        'subCaption': 'In MMbbl = One Million barrels',        'xAxisName': 'Country',        'yAxisName': 'Reserves (MMbbl)',        'numberSuffix': 'K',        'theme': 'fusion',  },      'data': [{        'label': 'Venezuela',        'value': '290'      }, {        'label': 'Saudi',        'value': '260'      }, {        'label': 'Canada',        'value': '180'      }, {        'label': 'Iran',        'value': '140'      }, {        'label': 'Russia',        'value': '115'      }, {        'label': 'UAE',        'value': '100'      }, {        'label': 'US',        'value': '30'      }, {        'label': 'China',        'value': '30'      }]    }";
        // create chart instance
        // parameter
        // chart type, chart id, chart width, chart height, data format, data source
        Chart column2d = new Chart("column2d", "first_chart", "700", "400", "json", jsonData);
        //attach event 
        column2d.AddEvent("dataLoaded", "onDataLoaded");
        //render chart
        Literal1.Text = column2d.Render();
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
Imports FusionCharts.Charts
Partial Class Pages_ProductLifeCycleEvent
Inherits System.Web.UI.Page
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.Load
Dim jsonData As String = "{      'chart': {        'caption': 'Countries With Most Oil Reserves [2017-18]',        'subCaption': 'In MMbbl = One Million barrels',        'xAxisName': 'Country',        'yAxisName': 'Reserves (MMbbl)',        'numberSuffix': 'K',        'theme': 'fusion',  },      'data': [{        'label': 'Venezuela',        'value': '290'      }, {        'label': 'Saudi',        'value': '260'      }, {        'label': 'Canada',        'value': '180'      }, {        'label': 'Iran',        'value': '140'      }, {        'label': 'Russia',        'value': '115'      }, {        'label': 'UAE',        'value': '100'      }, {        'label': 'US',        'value': '30'      }, {        'label': 'China',        'value': '30'      }]    }"
Dim column2d As Chart = New Chart("column2d", "first_chart", "700", "400", "json", jsonData)
column2d.AddEvent("dataLoaded", "onDataLoaded")
Literal1.Text = column2d.Render()
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
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="ProductLifeCycleEvent.aspx.cs" Inherits="Pages_ProductLifeCycleEvent" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | sample to showcase one product life cycle event attachment&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script&gt;
function onDataLoaded() {
document.getElementById("dataLoaded").innerHTML = "chart data is loaded successfully";

        }
    &lt;/script&gt;
    &lt;form id="form1" runat="server"&gt;
        &lt;h3&gt;sample to showcase one product life cycle event attachment&lt;/h3&gt;
        &lt;div&gt;
            &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
        &lt;/div&gt;
        &lt;div&gt;
            &lt;p id="dataLoaded"&gt;&lt;/p&gt;
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
&lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="ProductLifeCycleEvent.aspx.vb" Inherits="Pages_ProductLifeCycleEvent" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | sample to showcase one product life cycle event attachment&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script&gt;
function onDataLoaded() {
document.getElementById("dataLoaded").innerHTML = "chart data is loaded successfully";

        }
    &lt;/script&gt;
    &lt;form id="form1" runat="server"&gt;
        &lt;h3&gt;sample to showcase one product life cycle event attachment&lt;/h3&gt;
        &lt;div&gt;
            &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
        &lt;/div&gt;
        &lt;div&gt;
            &lt;p id="dataLoaded"&gt;&lt;/p&gt;
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

## Apart from the usual boilerplate, the sample **C#/VB** code provided above corresponds to the following tasks:

1. Import and resolve the dependencies like `System`, and `FusionCharts.Charts`.

2. Define a class `Pages_ProductLifeCycleEvent` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `Pages_ProductLifeCycleEvent` is inherited.

3. Within the class `Pages_ProductLifeCycleEvent`, define `Page_Load()`:
   - Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.
   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Column 2D chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `column2d`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).
   - Add the events you want to add to your chart, using the `onDataLoaded()` method. In this case, those methods are defined as JavaScript functions in the corresponding `.aspx` file.
   - Render the chart using the `onDataLoaded()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js`, followed by some JavaScript functions and buttons, and finally within a `<form><div>` render the chart.

> Refer to [Column 2D chart](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.
