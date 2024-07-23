---
title: Dynamically Add Chart Event Listener using ASP.NET | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using ASP.NET
heading: Dynamically Add Chart Event Listener using ASP.NET
---

> ## FusionCharts.NET
>
> We have released FusionCharts.NET which brings the seamless support of FusionCharts JavaScript charting library to Microsoft .NET Framework. [Download](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net) it now to take advantage of the following powerful features:
>
> - Provide raw data and FusionCharts.NET automatically converts the data into JSON.
> - Dynamically slice and dice data to derive insights using the [data engine](/fusioncharts-aspnet-visualization/data-engine/data-engine-overview).
> - All methods and properties are available in Visual Studio intellisense.
> - ...and many more.
>   Get it now. Click [here](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net)!

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on — using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when:

- A chart renders successfully
- Data completes loading
- A data plot is clicked
- The mouse pointer is hovered over a data plot, etc.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using FusionCharts ASP.NET `C#` or `VB` wrapper. A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

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

public partial class Pages_InteractiveEvent: System.Web.UI.Page {
protected void Page_Load(object sender, EventArgs e) {
//json data in string format
string jsonData = "{'chart':{'caption':'Countries With Most Oil Reserves [2017-18]','subCaption':'In MMbbl = One Million barrels','xAxisName':'Country','yAxisName':'Reserves (MMbbl)','numberSuffix':'K','theme':'fusion'},'data':[{'label':'Venezuela','value':'290'},{'label':'Saudi','value':'260'},{'label':'Canada','value':'180'},{'label':'Iran','value':'140'},{'label':'Russia','value':'115'},{'label':'UAE','value':'100'},{'label':'US','value':'30'},{'label':'China','value':'30'}]}";
// create chart instance
// parameter
// chart type, chart id, chart width, chart height, data format, data source
Chart column2d = new Chart("column2d", "first_chart", "700", "400", "json", jsonData);
//attach event
column2d.addEvent("track", "track");
column2d.addEvent("clickHandler", "clickHandler");
column2d.addEvent("reset", "reset");
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
Partial Class Pages_InteractiveEvent
Inherits System.Web.UI.Page
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.Load
Dim jsonData As String = "{'chart':{'caption':'Countries With Most Oil Reserves [2017-18]','subCaption':'In MMbbl = One Million barrels','xAxisName':'Country','yAxisName':'Reserves (MMbbl)','numberSuffix':'K','theme':'fusion'},'data':[{'label':'Venezuela','value':'290'},{'label':'Saudi','value':'260'},{'label':'Canada','value':'180'},{'label':'Iran','value':'140'},{'label':'Russia','value':'115'},{'label':'UAE','value':'100'},{'label':'US','value':'30'},{'label':'China','value':'30'}]}"
Dim column2d As Chart = New Chart("column2d", "first_chart", "700", "400", "json", jsonData)
column2d.addEvent("track", "track")
column2d.addEvent("clickHandler", "clickHandler")
column2d.addEvent("reset", "reset")
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
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="InteractiveEvent.aspx.cs" Inherits="Pages_InteractiveEvent" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | Show data plot value on click&lt;/title&gt;
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
track = function(){
FusionCharts.addEventListener("dataplotclick", clickHandler);
document.getElementById("message").innerHTML = "Click on the plot to see the value along with the label";
};
clickHandler = function(e){
document.getElementById("message").innerHTML = "You have clicked on plot &lt;b&gt;"+ e.data.categoryLabel + "&lt;/b&gt; whose value is &lt;b&gt;" + e.data.displayValue + "&lt;/b&gt;";
};
reset = function(){
FusionCharts.removeEventListener("dataplotclick", clickHandler);
document.getElementById("message").innerHTML = "Click the below buttons to add an event dynamically to the chart";
}
&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;Dynamically add chart event listener&lt;/h3&gt;
&lt;div&gt;
&lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;p id="message"&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
&lt;input type="radio" id="radio1" name="radios" onClick="track()"&gt;
&lt;label for="radio1"&gt;ADD/LISTEN TO DATAPLOTCLICK EVENT&lt;/label&gt;
&lt;input type="radio" id="radio2" name="radios" value="false" onClick="reset()"&gt;
&lt;label for="radio2"&gt;REMOVE DATAPLOTCLICK EVENT&lt;/label&gt;
&lt;/div&gt;
&lt;div&gt;&lt;span&gt;
&lt;asp:HyperLink id="hyperlink1" NavigateUrl="../Default.aspx" Text="Go Back" runat="server" /&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/form&gt;
&lt;/body&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
&lt;%@ Page Language="VB" AutoEventWireup="true" CodeFile="InteractiveEvent.aspx.vb" Inherits="Pages_InteractiveEvent" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | Show data plot value on click&lt;/title&gt;
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
track = function(){
FusionCharts.addEventListener("dataplotclick", clickHandler);
document.getElementById("message").innerHTML = "Click on the plot to see the value along with the label";
};
clickHandler = function(e){
document.getElementById("message").innerHTML = "You have clicked on plot &lt;b&gt;"+ e.data.categoryLabel + "&lt;/b&gt; whose value is &lt;b&gt;" + e.data.displayValue + "&lt;/b&gt;";
};
reset = function(){
FusionCharts.removeEventListener("dataplotclick", clickHandler);
document.getElementById("message").innerHTML = "Click the below buttons to add an event dynamically to the chart";
}
&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;Dynamically add chart event listener&lt;/h3&gt;
&lt;div&gt;
&lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;p id="message"&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
&lt;input type="radio" id="radio1" name="radios" onClick="track()"&gt;
&lt;label for="radio1"&gt;ADD/LISTEN TO DATAPLOTCLICK EVENT&lt;/label&gt;
&lt;input type="radio" id="radio2" name="radios" value="false" onClick="reset()"&gt;
&lt;label for="radio2"&gt;REMOVE DATAPLOTCLICK EVENT&lt;/label&gt;
&lt;/div&gt;
&lt;div&gt;&lt;span&gt;
&lt;asp:HyperLink id="hyperlink1" NavigateUrl="../Default.aspx" Text="Go Back" runat="server" /&gt;&lt;/span&gt;&lt;/div&gt;
&lt;/form&gt;
&lt;/body&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

Apart from the usual boilerplate, the sample **C#/VB** code provided above corresponds to the following tasks:

1. Import and resolve the dependencies like `System`, and `FusionCharts.Charts`.

2. Define a class `Pages_InteractiveEvent` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `Pages_InteractiveEvent` is inherited.

3. Within the class `Pages_InteractiveEvent`, define `Page_Load()`:
   - Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.
   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Column 2D chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `column2d`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).
   - Add the events you want to add to your chart, using the `[chart_instance].AddEvent()` method. In this case, those methods are defined as JavaScript functions in the corresponding `.aspx` file.
   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js`, followed by some JavaScript functions and buttons, and finally within a `<form><div>` render the chart.

> Refer to [Column 2D chart](/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.
