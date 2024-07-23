---
title: Add Annotations | FusionCharts
description: This article focuses on different type of configurations possible using ASP.NET.
heading: Add Annotations using ASP.NET
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

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative while making it visually appealing.

In this article, we'll create a **Spline** chart and add annotations to highlight a particular anchor along with text using the FusionCharts ASP.NET `C#` & `VB` wrapper. A sample chart is shown below:

{% embed_chartData add-annotations-using-django-example-1.js json %}

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

public partial class Pages_ChartAnnotations: System.Web.UI.Page {
protected void Page_Load(object sender, EventArgs e) {
//json data in string format
string jsonData = "{'chart':{'caption':'Average Monthly Temperature in Texas','yAxisName':'Average Monthly Temperature','anchorradius':'5','plotToolText':'Average temperature in $label is $dataValue','showHoverEffect':'1','showvalues':'0','numberSuffix':'°C','theme':'fusion','anchorBgColor':'#72D7B2','paletteColors':'#72D7B2'},'annotations':{'groups':[{'id':'anchor-highlight','items':[{'id':'high-star','type':'circle','x':'$dataset.0.set.7.x','y':'$dataset.0.set.7.y','radius':'12','color':'#cc0000','border':'2','borderColor':'#0075c2'},{'id':'label','type':'text','text':'Hottest Month','fillcolor':'#0075c2','rotate':'90','x':'$dataset.0.set.7.x+75','y':'$dataset.0.set.7.y-2'}]}]},'data':[{'label':'Jan','value':'1'},{'label':'Feb','value':'5'},{'label':'Mar','value':'10'},{'label':'Apr','value':'12'},{'label':'May','value':'14'},{'label':'Jun','value':'16'},{'label':'Jul','value':'20'},{'label':'Aug','value':'22'},{'label':'Sep','value':'20'},{'label':'Oct','value':'16'},{'label':'Nov','value':'7'},{'label':'Dec','value':'2'}]}";
// create chart instance
// parameter
// chart type, chart id, chart width, chart height, data format, data source
Chart spline = new Chart("spline", "spline_chart", "700", "400", "json", jsonData);
//render chart
Literal1.Text = spline.Render();
}
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
Imports FusionCharts.Charts
Partial Class Pages_ChartAnnotation
Inherits System.Web.UI.Page
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load store chart  data url as  string
Dim jsonData As String
jsonData = "{'chart':{'caption':'Average Monthly Temperature in Texas','yAxisName':'Average Monthly Temperature','anchorradius':'5','plotToolText':'Average temperature in $label is $dataValue','showHoverEffect':'1','showvalues':'0','numberSuffix':'°C','theme':'fusion','anchorBgColor':'#72D7B2','paletteColors':'#72D7B2'},'annotations':{'groups':[{'id':'anchor-highlight','items':[{'id':'high-star','type':'circle','x':'$dataset.0.set.7.x','y':'$dataset.0.set.7.y','radius':'12','color':'#cc0000','border':'2','borderColor':'#0075c2'},{'id':'label','type':'text','text':'Hottest Month','fillcolor':'#0075c2','rotate':'90','x':'$dataset.0.set.7.x+75','y':'$dataset.0.set.7.y-2'}]}]},'data':[{'label':'Jan','value':'1'},{'label':'Feb','value':'5'},{'label':'Mar','value':'10'},{'label':'Apr','value':'12'},{'label':'May','value':'14'},{'label':'Jun','value':'16'},{'label':'Jul','value':'20'},{'label':'Aug','value':'22'},{'label':'Sep','value':'20'},{'label':'Oct','value':'16'},{'label':'Nov','value':'7'},{'label':'Dec','value':'2'}]}"
'create gauge instance
'chart type, chart id, width, height, data format, data source as url
Dim spline As New Chart("spline", "spline_chart", "700", "400", "json", jsonData)
'render gauge
Literal1.Text = spline.Render()
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
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="ChartAnnotations.aspx.cs" Inherits="Pages_ChartAnnotations" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | Using Annotations On Chart&lt;/title&gt;
&lt;/head&gt;

&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;Using Annotations On Chart&lt;/h3&gt;
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
&lt;%@ Page Language="VB" AutoEventWireup="true" CodeFile="ChartAnnotations.aspx.vb" Inherits="Pages_ChartAnnotations" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | Using Annotations On Chart&lt;/title&gt;
&lt;/hea&gt;

&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;form id="form1" runat="server"&gt;
&lt;h3&gt;Using Annotations On Chart&lt;/h3&gt;
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

Apart from the usual boilerplate, the sample **C#/VB** code provided above corresponds to the following tasks:

1. Import and resolve the dependencies like `System`, and `FusionCharts.Charts`.

2. Define a class `Pages_ChartAnnotations` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `Pages_ChartAnnotations` is inherited.

3. Within the class `Pages_ChartAnnotations`, define `Page_Load()`:

   - Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Spline chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `spline`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).

   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js`, and within a `<form><div>`, render the chart.

> Refer to [Spline chart](/chart-guide/standard-charts/spline-charts) for more information on the configuration and data for this chart type.
