---
title: Change Chart Type at Runtime | FusionCharts
description: This article will showcase a sample to change the chart type at runtime.
heading: Change Chart Type at Runtime
---

## A chart configured to change the chart type is shown below:

> ### FusionCharts.NET
>
> We have released FusionCharts.NET which brings the seamless support of FusionCharts JavaScript charting library to Microsoft .NET Framework. [Download](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net) it now to take advantage of the following powerful features:
>
> - Provide raw data and FusionCharts.NET automatically converts the data into JSON.
> - Dynamically slice and dice data to derive insights using the [data engine](/fusioncharts-aspnet-visualization/data-engine/data-engine-overview).
> - All methods and properties are available in Visual Studio intellisense.
> - ...and many more.
>   Get it now. Click [here](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net)!

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using **FusionCharts ASP.NET wrapper**. The chart types used in the sample is:

- Column 2D chart (default representation)
- Bar chart
- Pie chart

A chart configured to change the chart type is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

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

public partial class Pages_DynamicChartType: System.Web.UI.Page {
protected void Page_Load(object sender, EventArgs e) {
//json data in string format
string jsonData = "{'chart':{'caption':'Countries With Most Oil Reserves [2017-18]','subCaption':'In MMbbl = One Million barrels','xAxisName':'Country','yAxisName':'Reserves (MMbbl)','numberSuffix':'K','theme':'fusion'},'data':[{'label':'Venezuela','value':'290'},{'label':'Saudi','value':'260'},{'label':'Canada','value':'180'},{'label':'Iran','value':'140'},{'label':'Russia','value':'115'},{'label':'UAE','value':'100'},{'label':'US','value':'30'},{'label':'China','value':'30'}]}";
// create chart instance
// parameter
// chart type, chart id, chart width, chart height, data format, data source
Chart column2d = new Chart("column2d", "first_chart", "700", "400", "json", jsonData);
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
Partial Class Pages_DynamicChartTypeChange
Inherits System.Web.UI.Page
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load 'store chart  data url as  string
Dim jsonData As String
jsonData = "{'chart':{'caption':'Countries With Most Oil Reserves [2017-18]','subCaption':'In MMbbl = One Million barrels','xAxisName':'Country','yAxisName':'Reserves (MMbbl)','numberSuffix':'K','theme':'fusion'},'data':[{'label':'Venezuela','value':'290'},{'label':'Saudi','value':'260'},{'label':'Canada','value':'180'},{'label':'Iran','value':'140'},{'label':'Russia','value':'115'},{'label':'UAE','value':'100'},{'label':'US','value':'30'},{'label':'China','value':'30'}]}"
'create gauge instance
'chart type, chart id, width, height, data format, data source as url
Dim columnChart As New Chart("column2d", "columnchart", "700", "400", "json", jsonData)
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
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="DynamicChartType.aspx.cs" Inherits="Pages_DynamicChartType" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | Chart Type Change At Runtime (client-side)&lt;/title&gt;
&lt;/head&gt;

&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
FusionCharts && FusionCharts.ready(function() {
var trans = document.getElementById("controllers").getElementsByTagName("input");
for (var i = 0, len = trans.length; i &lt; len; i++) {
if (trans[i].type == "radio") {
trans[i].onchange = function() {
changeChartType(this.value);
};
}
}
});

        function changeChartType(chartType) {
            for (var k in FusionCharts.items) {
                if (FusionCharts.items.hasOwnProperty(k)) {
                    FusionCharts.items[k].chartType(chartType);
                }
            }
        };
    &lt;/script&gt;
    &lt;h3&gt;Chart Type Change At Runtime&lt;/h3&gt;
    &lt;div align="center"&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;Select The Chart Type&lt;/label&gt;
    &lt;/div&gt;
    &lt;br /&gt;
    &lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="div-size" checked value="column2d" /&gt;Column 2D
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="div-size" value="pie3d" /&gt;Pie 3D
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="div-size" value="bar2d" /&gt;Bar 2D
        &lt;/label&gt;
    &lt;/div&gt;
    &lt;form id="form1" runat="server"&gt;

        &lt;div style="width: 100%; display: block;" align="center"&gt;
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
&lt;%@ Page Language="VB" AutoEventWireup="true" CodeFile="DynamicChartType.aspx.vb" Inherits="Pages_DynamicChartTypeChange" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | Chart Type Change At Runtime (client-side)&lt;/title&gt;
&lt;/head&gt;

&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
FusionCharts && FusionCharts.ready(function() {
var trans = document.getElementById("controllers").getElementsByTagName("input");
for (var i = 0, len = trans.length; i &lt; len; i++) {
if (trans[i].type == "radio") {
trans[i].onchange = function() {
changeChartType(this.value);
};
}
}
});

        function changeChartType(chartType) {
            for (var k in FusionCharts.items) {
                if (FusionCharts.items.hasOwnProperty(k)) {
                    FusionCharts.items[k].chartType(chartType);
                }
            }
        };
    &lt;/script&gt;
    &lt;h3&gt;Chart Type Change At Runtime&lt;/h3&gt;
    &lt;div align="center"&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;Select The Chart Type&lt;/label&gt;
    &lt;/div&gt;
    &lt;br /&gt;
    &lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="div-size" checked value="column2d" /&gt;Column 2D
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="div-size" value="pie3d" /&gt;Pie 3D
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="div-size" value="bar2d" /&gt;Bar 2D
        &lt;/label&gt;
    &lt;/div&gt;
    &lt;form id="form1" runat="server"&gt;

        &lt;div style="width: 100%; display: block;" align="center"&gt;
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

Apart from the usual boilerplate, the sample **C#/VB** code provided above corresponds to the following tasks:

1. Import and resolve the dependencies like `System`, and `FusionCharts.Charts`.

2. Define a class `Pages_DynamicChartType` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `Pages_DynamicChartType` is inherited.

3. Within the class `Pages_DynamicChartType`, define `Page_Load()`:

   - Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Column 2D chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `column2d`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).

   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js`, followed by some JavaScript functions and radio buttons for different charts, and finally within a `<form><div>` render the chart.

> Refer to [Column 2D chart](/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type. Alternatively, you may also refer to [Bar chart](/chart-guide/standard-charts/line-area-and-column-charts#bar-d-chart) or [Pie chart](/chart-guide/standard-charts/pie-and-doughnut-charts), if you want them as defaults.
