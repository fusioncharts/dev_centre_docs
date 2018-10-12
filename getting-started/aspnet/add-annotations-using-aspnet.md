---
title: Add Annotations | FusionCharts
description: This article focuses on different type of configurations possible using ASP.NET.
heading: Add Annotations using ASP.NET
---

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative while making it visually appealing.

In this article, we'll create a __Spline__ chart and add annotations to highlight a particular anchor along with text using the FusionCharts ASP.NET `C#` & `VB` wrapper. A sample chart is shown below:

{% embed_chartData add-annotations-using-django-example-1.js json %}

The consolidated code for the above chart is shown below:


The HTML template for `aspx` file is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='csharp'>C#</a></li>
    <li><a data-toggle='vb'>VB</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab csharp-tab active'>
<pre><code class="custom-hlc language-javascript">
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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab vb-tab'>
<pre><code class="custom-hlc language-javascript">
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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

Apart from the usual boilerplate, the sample C# code provided above corresponds to the following tasks:

1. Import and resolve the dependencies like `System`, and  `FusionCharts.Charts`.

2. Define a class `Pages_ChartAnnotations` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `Pages_ChartAnnotations` is inherited. 

3. Within the class `Pages_ChartAnnotations`, define `Page_Load()`: 

    * Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.

    * Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Spline chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `spline`. Find the complete list of chart types with their respective alias [here]({% site.baseurl %}/chart-guide/list-of-charts).

    * Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js`, and within a `<form><div>`, render the chart.

> Refer to [Spline chart]({% site.baseurl %}/chart-guide/standard-charts/spline-charts) for more information on the configuration and data for this chart type.