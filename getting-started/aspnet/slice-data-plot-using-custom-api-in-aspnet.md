---
title: Slice Data Plot using API | FusionCharts
description: This article will showcase a sample to slice data plot of the pie chart using chart specific custom API .
heading: Slice Data Plot using API
---

## The consolidated code for the chart is shown below:

> ### FusionCharts.NET
>
> We have released FusionCharts.NET which brings the seamless support of FusionCharts JavaScript charting library to Microsoft .NET Framework. [Download](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net) it now to take advantage of the following powerful features:
>
> - Provide raw data and FusionCharts.NET automatically converts the data into JSON.
> - Dynamically slice and dice data to derive insights using the [data engine](/fusioncharts-aspnet-visualization/data-engine/data-engine-overview).
> - All methods and properties are available in Visual Studio intellisense.
> - ...and many more.
>   Get it now. Click [here](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net)!

FusionCharts Suite XT includes advanced features that offers a wide range of APIs that you can use for different stages in the ife cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using **FusionCharts ASP.NET wrapper**.

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

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

public partial class Pages_SpecialChartTypeAPI: System.Web.UI.Page {
protected void Page_Load(object sender, EventArgs e) {
//json data in string format
string jsonData = "{ 'chart': { 'caption': 'Market Share of Web Servers', 'plottooltext': '<b>$percentValue</b> of web servers run on $label servers', 'showLegend': '0', 'enableMultiSlicing': '0', 'showPercentValues': '1', 'legendPosition': 'bottom', 'useDataPlotColorForLabels': '1', 'theme': 'fusion', }, 'data': [{ 'label': 'Apache', 'value': '32647479' }, { 'label': 'Microsoft', 'value': '22100932' }, { 'label': 'Zeus', 'value': '14376' }, { 'label': 'Other', 'value': '18674221' }] }";
// create chart instance
// parameter
// chart type, chart id, chart width, chart height, data format, data source
Chart column2d = new Chart("pie2d", "first_chart", "450", "250", "json", jsonData);
//attach event
column2d.AddEvent("dataplotClick", "plotClickHandler");
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
Partial Class Pages_SpecialChartTypeAPI
Inherits System.Web.UI.Page
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.Load
Dim jsonData As String = "{ 'chart': { 'caption': 'Market Share of Web Servers', 'plottooltext': '<b>$percentValue</b> of web servers run on $label servers', 'showLegend': '0', 'enableMultiSlicing': '0', 'showPercentValues': '1', 'legendPosition': 'bottom', 'useDataPlotColorForLabels': '1', 'theme': 'fusion', }, 'data': [{ 'label': 'Apache', 'value': '32647479' }, { 'label': 'Microsoft', 'value': '22100932' }, { 'label': 'Zeus', 'value': '14376' }, { 'label': 'Other', 'value': '18674221' }] }"
Dim column2d As Chart = New Chart("pie2d", "first_chart", "450", "250", "json", jsonData)
column2d.AddEvent("dataplotClick", "plotClickHandler")
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
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="SpecialChartTypeAPI.aspx.cs" Inherits="Pages_SpecialChartTypeAPI" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | showcasing use special chart type API&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script&gt;
plotClickHandler = function(event){
clickedPlot = (event.data.categoryLabel).toLowerCase();
if (selectedItem !== clickedPlot) {
selectedItem = clickedPlot;
} else{
selectedItem = 'none';
}
};
selectedItem = "none";
noneChecked = function(){
FusionCharts("first_chart").slicePlotItem(0,false);
FusionCharts("first_chart").slicePlotItem(1,false);
FusionCharts("first_chart").slicePlotItem(2,false);
FusionCharts("first_chart").slicePlotItem(3,false);
}
apacheChecked = function(){
FusionCharts("first_chart").slicePlotItem(0,true);
}
microsoftChecked = function(){
FusionCharts("first_chart").slicePlotItem(1,true);
}
zeusChecked = function(){
FusionCharts("first_chart").slicePlotItem(2,true);
}
otherChecked = function(){
FusionCharts("first_chart").slicePlotItem(3,true);
}
&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;showcasing use special chart type API&lt;/h3&gt;
&lt;div&gt;
&lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
&lt;/div&gt;
&lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" checked="checked" onclick="noneChecked()" /&gt; None
&lt;/label&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" onclick="apacheChecked()" /&gt; Apache
&lt;/label&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" onclick="microsoftChecked()" /&gt; Microsoft
&lt;/label&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" onclick="zeusChecked()" /&gt; Zeus
&lt;/label&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" onclick="otherChecked()" /&gt; Other
&lt;/label&gt;
&lt;/div&gt;
&lt;br /&gt;
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
&lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="SpecialChartTypeAPI.aspx.vb" Inherits="Pages_SpecialChartTypeAPI" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | showcasing use special chart type API&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script&gt;
plotClickHandler = function(event){
clickedPlot = (event.data.categoryLabel).toLowerCase();
if (selectedItem !== clickedPlot) {
selectedItem = clickedPlot;
} else{
selectedItem = 'none';
}
};
selectedItem = "none";
noneChecked = function(){
FusionCharts("first_chart").slicePlotItem(0,false);
FusionCharts("first_chart").slicePlotItem(1,false);
FusionCharts("first_chart").slicePlotItem(2,false);
FusionCharts("first_chart").slicePlotItem(3,false);
}
apacheChecked = function(){
FusionCharts("first_chart").slicePlotItem(0,true);
}
microsoftChecked = function(){
FusionCharts("first_chart").slicePlotItem(1,true);
}
zeusChecked = function(){
FusionCharts("first_chart").slicePlotItem(2,true);
}
otherChecked = function(){
FusionCharts("first_chart").slicePlotItem(3,true);
}
&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;showcasing use special chart type API&lt;/h3&gt;
&lt;div&gt;
&lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
&lt;/div&gt;
&lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" checked="checked" onclick="noneChecked()" /&gt; None
&lt;/label&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" onclick="apacheChecked()" /&gt; Apache
&lt;/label&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" onclick="microsoftChecked()" /&gt; Microsoft
&lt;/label&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" onclick="zeusChecked()" /&gt; Zeus
&lt;/label&gt;
&lt;label style="padding: 0px 5px !important;"&gt;
&lt;input type="radio" name="rdGrp-options" onclick="otherChecked()" /&gt; Other
&lt;/label&gt;
&lt;/div&gt;
&lt;br /&gt;
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

   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Pie 2D chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `pie2d`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).

   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js`, followed by some JavaScript functions and radio buttons for different charts, and finally within a `<form><div>` render the chart.
