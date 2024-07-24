---
title: Configuring your Chart using ASP.NET | FusionCharts
description: Enhance your ASP.NET projects by Configuring your Chart with FusionCharts. This step-by-step guide makes your data visualizations pop with ease. Try now!
heading: Configuring your Chart using ASP.NET
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

FusionCharts Suite XT includes advanced features that let you add more context to your chart and makes data visualization simpler. These features include updating **chart data**, **annotations**, **trend-lines**, and **events**.

This article focuses on how you can configure your charts using FusionCharts ASP.NET **C#** & **VB** wrapper to perform the following:

- [Update Chart Data](/getting-started/aspnet/configure-your-chart-using-aspnet#update-chart-data)

- [Update Chart Attributes](/getting-started/aspnet/configure-your-chart-using-aspnet#update-chart-attributes)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below:

{% embed_chartData configure-charts-using-django-example-1.js json %}

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

public partial class Pages_UpdateDataRuntime: System.Web.UI.Page {
protected void Page_Load(object sender, EventArgs e) {
//json data in string format
string jsonData = "{ 'chart': { 'caption': 'Customer Satisfaction Score', 'subcaption': 'Los Angeles Topanga', 'plotToolText': 'Current Score: \$value', 'theme': 'fint', 'chartBottomMargin': '50', 'showValue': '1' }, 'colorRange': { 'color': [{ 'minValue': '0', 'maxValue': '45', 'code': '#e44a00' }, { 'minValue': '45', 'maxValue': '75', 'code': '#f8bd19' }, { 'minValue': '75', 'maxValue': '100', 'code': '#6baa01' }] }, 'dials': { 'dial': [{ 'value': '70', 'id': 'dial1' }] } }";
// create chart instance
// parameter
// chart type, chart id, chart width, chart height, data format, data source
Chart angulargauge = new Chart("angulargauge", "angular_gauge", "450", "250", "json", jsonData);

        //render chart
        Literal1.Text = angulargauge.Render();
    }

}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
Imports FusionCharts.Charts
Partial Class Pages_UpdateDataRuntime
Inherits System.Web.UI.Page
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.Load
Dim jsonData As String = "{ 'chart': { 'caption': 'Customer Satisfaction Score', 'subcaption': 'Los Angeles Topanga', 'plotToolText': 'Current Score: $value', 'theme': 'fint', 'chartBottomMargin': '50', 'showValue': '1' }, 'colorRange': { 'color': [{ 'minValue': '0', 'maxValue': '45', 'code': '#e44a00' }, { 'minValue': '45', 'maxValue': '75', 'code': '#f8bd19' }, { 'minValue': '75', 'maxValue': '100', 'code': '#6baa01' }] }, 'dials': { 'dial': [{ 'value': '70', 'id': 'dial1' }] } }"
Dim angulargauge As Chart = New Chart("angulargauge", "angular_gauge", "450", "250", "json", jsonData)
Literal1.Text = angulargauge.Render()
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
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="UpdateDataRuntime.aspx.cs" Inherits="Pages_UpdateDataRuntime" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | update dial value at runtime&lt;/title&gt;
&lt;/head&gt;

&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script&gt;
updateData = function () {
var value = document.getElementById("dial-val").value;
FusionCharts("angular_gauge").setDataForId("dial1",value);
}
&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;update dial value on runtime&lt;/h3&gt;
&lt;label for="dial-val"&gt;Input dial value&lt;/label&gt;
&lt;input name="dial-val" id="dial-val" type="number" /&gt;&lt;input type="button" name="update dial" value="update dial" onclick="updateData()" /&gt;
&lt;br /&gt;
&lt;br /&gt;
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
&lt;%@ Page Language="VB" AutoEventWireup="true" CodeFile="UpdateDataRuntime.aspx.vb" Inherits="Pages_UpdateDataRuntime" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | update dial value at runtime&lt;/title&gt;
&lt;/head&gt;

&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script&gt;
updateData = function () {
var value = document.getElementById("dial-val").value;
FusionCharts("angular_gauge").setDataForId("dial1",value);
}
&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;update dial value on runtime&lt;/h3&gt;
&lt;label for="dial-val"&gt;Input dial value&lt;/label&gt;
&lt;input name="dial-val" id="dial-val" type="number" /&gt;&lt;input type="button" name="update dial" value="update dial" onclick="updateData()" /&gt;
&lt;br /&gt;
&lt;br /&gt;
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

Apart from the usual boilerplate, the sample code provided above corresponds to the following tasks:

1. Import and resolve the dependencies like `System`, and `FusionCharts.Charts`.

2. Define a class `Pages_UpdateDataRuntime` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `Pages_UpdateDataRuntime` is inherited.

3. Within the class `Pages_UpdateDataRuntime`, define `Page_Load()`:

   - Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of an Angular Gauge. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `angulargauge`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).

   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js`, followed by some JavaScript functions and buttons, and finally within a `<form><div>` render the chart.

> Refer to [Angular Gauge](/chart-guide/gauges-and-widgets/angular-gauge) for more information on the configuration and data for this chart type.

## Update Chart Attributes

A chart configured to update the chart **caption**, **sub-caption alignment**, and chart **background** dynamically is shown below.

{% embed_chartData configure-charts-using-django-example-2.js json %}

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

public partial class Pages_UpdateChartAttributesRuntime: System.Web.UI.Page {
protected void Page_Load(object sender, EventArgs e) {
//json data in string format
string jsonData = "{'chart':{'caption':'Countries With Most Oil Reserves [2017-18]','subCaption':'In MMbbl = One Million barrels','xAxisName':'Country','yAxisName':'Reserves (MMbbl)','numberSuffix':'K','theme':'fusion'},'data':[{'label':'Venezuela','value':'290'},{'label':'Saudi','value':'260'},{'label':'Canada','value':'180'},{'label':'Iran','value':'140'},{'label':'Russia','value':'115'},{'label':'UAE','value':'100'},{'label':'US','value':'30'},{'label':'China','value':'30'}]}";
// create chart instance
// parameter
// chart type, chart id, chart width, chart height, data format, data source
Chart column2d = new Chart("column2d", "column_chart", "700", "400", "json", jsonData);
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
Partial Class Pages_UpdateChartAttributesRuntime
Inherits System.Web.UI.Page
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.Load
Dim jsonData As String = "{{'chart':{'caption':'Countries With Most Oil Reserves [2017-18]','subCaption':'In MMbbl = One Million barrels','xAxisName':'Country','yAxisName':'Reserves (MMbbl)','numberSuffix':'K','theme':'fusion'},'data':[{'label':'Venezuela','value':'290'},{'label':'Saudi','value':'260'},{'label':'Canada','value':'180'},{'label':'Iran','value':'140'},{'label':'Russia','value':'115'},{'label':'UAE','value':'100'},{'label':'US','value':'30'},{'label':'China','value':'30'}]}"
Dim column2d As Chart = New Chart("column2d", "column_chart", "700", "400", "json", jsonData)
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
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="UpdateChartAttributesRuntime.aspx.cs" Inherits="Pages_UpdateChartAttributesRuntime" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | update chart attributes at runtime&lt;/title&gt;
&lt;style&gt;
input[type=radio], input[type=checkbox] {
display:none;
}
input[type=radio] + label, input[type=checkbox] + label {
display:inline-block;
margin:-2px;
padding: 4px 12px;
margin-bottom: 0;
font-size: 14px;
line-height: 20px;
color: #333;
text-align: center;
text-shadow: 0 1px 1px rgba(255,255,255,0.75);
vertical-align: middle;
cursor: pointer;
background-color: #f5f5f5;
background-image: -moz-linear-gradient(top,#fff,#e6e6e6);
background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));
background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);
background-image: -o-linear-gradient(top,#fff,#e6e6e6);
background-image: linear-gradient(to bottom,#fff,#e6e6e6);
background-repeat: repeat-x;
border: 1px solid #ccc;
border-color: #e6e6e6 #e6e6e6 #bfbfbf;
border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
border-bottom-color: #b3b3b3;
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);
filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
}
input[type=radio]:checked + label, input[type=checkbox]:checked + label{
background-image: none;
outline: 0;
-webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
-moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
background-color:#e0e0e0;
}
&lt;/style&gt;
&lt;/head&gt;

&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script&gt;
changeBackground = function(){
FusionCharts("column_chart").setChartAttribute('bgColor', '#efefef');
};
changeCaption = function(){
FusionCharts("column_chart").setChartAttribute('captionAlignment', 'left');
};
reset = function(){
FusionCharts("column_chart").setChartAttribute('captionAlignment', 'center');
FusionCharts("column_chart").setChartAttribute('bgColor', '#ffffff');
};
&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;update chart attributes at runtime&lt;/h3&gt;
&lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
&lt;input type="button" class="button" onClick="changeBackground()" value='Change Chart Background' /&gt;
&lt;input type="button" class="button" onClick="changeCaption()" value='Make Caption Text Left Aligned' /&gt;
&lt;input type="button" class="button" onClick="reset()" value='Reset Attributes' /&gt;
&lt;/div&gt;
&lt;br /&gt;
&lt;br /&gt;
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
&lt;%@ Page Language="VB" AutoEventWireup="true" CodeFile="UpdateChartAttributesRuntime.aspx.vb" Inherits="Pages_UpdateChartAttributesRuntime" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | update chart attributes at runtime&lt;/title&gt;
&lt;style&gt;
input[type=radio], input[type=checkbox] {
display:none;
}
input[type=radio] + label, input[type=checkbox] + label {
display:inline-block;
margin:-2px;
padding: 4px 12px;
margin-bottom: 0;
font-size: 14px;
line-height: 20px;
color: #333;
text-align: center;
text-shadow: 0 1px 1px rgba(255,255,255,0.75);
vertical-align: middle;
cursor: pointer;
background-color: #f5f5f5;
background-image: -moz-linear-gradient(top,#fff,#e6e6e6);
background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));
background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);
background-image: -o-linear-gradient(top,#fff,#e6e6e6);
background-image: linear-gradient(to bottom,#fff,#e6e6e6);
background-repeat: repeat-x;
border: 1px solid #ccc;
border-color: #e6e6e6 #e6e6e6 #bfbfbf;
border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
border-bottom-color: #b3b3b3;
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);
filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
}
input[type=radio]:checked + label, input[type=checkbox]:checked + label{
background-image: none;
outline: 0;
-webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
-moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
background-color:#e0e0e0;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script&gt;
changeBackground = function(){
FusionCharts("column_chart").setChartAttribute('bgColor', '#efefef');
};
changeCaption = function(){
FusionCharts("column_chart").setChartAttribute('captionAlignment', 'left');
};
reset = function(){
FusionCharts("column_chart").setChartAttribute('captionAlignment', 'center');
FusionCharts("column_chart").setChartAttribute('bgColor', '#ffffff');
};
&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;update chart attributes at runtime&lt;/h3&gt;
&lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
&lt;input type="button" class="button" onClick="changeBackground()" value='Change Chart Background'/&gt;
&lt;input type="button" class="button" onClick="changeCaption()" value='Make Caption Text Left Aligned'/&gt;
&lt;input type="button" class="button" onClick="reset()" value='Reset Attributes'/&gt;
&lt;/div&gt;
&lt;br /&gt;
&lt;br /&gt;
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

Apart from the usual boilerplate, the sample **C#/VB** code provided above corresponds to the following tasks:

1. Import and resolve the dependencies like `System`, and `FusionCharts.Charts`.

2. Define a class `Pages_UpdateChartAttributesRuntime` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `Pages_UpdateChartAttributesRuntime` is inherited.

3. Within the class `Pages_UpdateChartAttributesRuntime`, define `Page_Load()`:

   - Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Column 2D chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `column2d`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).

   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js`, followed by some JavaScript functions and buttons, and finally within a `<form><div>` render the chart.

> Refer to [Column 2D chart](/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.
