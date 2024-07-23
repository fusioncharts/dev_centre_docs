---
title: Adding Special Characters | FusionCharts
description: This article outlines the steps to be executed for adding special characters to the data values of your chart.
heading: Adding Special Characters
---

## To customize the prefix and suffix of the numbers on the chart, use the following attributes:

> ### FusionCharts.NET
>
> We have released FusionCharts.NET which brings the seamless support of FusionCharts JavaScript charting library to Microsoft .NET Framework. [Download](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net) it now to take advantage of the following powerful features:
>
> - Provide raw data and FusionCharts.NET automatically converts the data into JSON.
> - Dynamically slice and dice data to derive insights using the [data engine](/fusioncharts-aspnet-visualization/data-engine/data-engine-overview).
> - All methods and properties are available in Visual Studio intellisense.
> - ...and many more.
>   Get it now. Click [here](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net)!

FusionCharts offers multiple options to format numbers on the chart. You can configure number prefixes and suffixes, decimal places, and scale numbers based on a predefined scale. This article focuses on how you customize the prefix and suffix of the numbers on the chart using **FusionCharts ASP.NET `C#` & `VB` wrapper**.

To customize the prefix and suffix of the numbers on the chart, use the following attributes:

- Specify the prefix for all the values on the chart using the `numberPrefix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberPrefix` and `xNumberPrefix` attributes.

- Specify the prefix for all the Y-axis values on the chart using the `yNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

- Specify the prefix for all the X-axis values on the chart using the `xNumberPrefix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberPrefix` attribute.

- Specify the suffix for all the values on the chart using the `numberSuffix` attribute. Note that the value of this attribute works only if you don't specifically mention the values of the `yNumberSuffix` and `xNumberSuffix` attributes.

- Specify the suffix for all the Y-axis values on the chart using the `yNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

- Specify the suffix for all the X-axis values on the chart using the `xNumberSuffix` attribute. If you don't mention this attribute, the chart will inherit the default value from the `numberSuffix` attribute.

A chart configured to customize the prefix of the numbers on the chart is shown below:

{% embed_chartData adding-special-character-example-1.js json %}

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

public partial class Pages_ChartSpclChar: System.Web.UI.Page {
protected void Page_Load(object sender, EventArgs e) {
//Json data in string format
string jsonData = "<chart caption='Harry&#39;s SuperMart' subcaption='Monthly revenue for last year' xaxisname='Month' yaxisname='Amount' numberprefix='$' theme='fusion' rotatevalues='1' exportenabled='1'> <set label='Jan' value='420000' /> <set label='Feb' value='810000' /> <set label='Mar' value='720000' /> <set label='Apr' value='550000' /> <set label='May' value='910000' /> <set label='Jun' value='510000' /> <set label='Jul' value='680000' /> <set label='Aug' value='620000' /> <set label='Sep' value='610000' /> <set label='Oct' value='490000' /> <set label='Nov' value='900000' /> <set label='Dec' value='730000' /> </chart>";
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

Partial Class Pages_ChartSpclChar
Inherits System.Web.UI.Page

Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles MyBase.Load
Dim jsonData As String = "<chart caption='Harry&#39;s SuperMart' subcaption='Monthly revenue for last year' xaxisname='Month' yaxisname='Amount' numberprefix='$' theme='fusion' rotatevalues='1' exportenabled='1'> <set label='Jan' value='420000' /> <set label='Feb' value='810000' /> <set label='Mar' value='720000' /> <set label='Apr' value='550000' /> <set label='May' value='910000' /> <set label='Jun' value='510000' /> <set label='Jul' value='680000' /> <set label='Aug' value='620000' /> <set label='Sep' value='610000' /> <set label='Oct' value='490000' /> <set label='Nov' value='900000' /> <set label='Dec' value='730000' /> </chart>"
Dim column2d As Chart = New Chart("column2d", "first_chart", "700", "400", "json", jsonData)
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
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="ChartSpclChar.aspx.cs" Inherits="Pages_ChartSpclChar" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | Chart using special character&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;h3&gt;Chart using special character&lt;/h3&gt;
&lt;form id="form1" runat="server"&gt;
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
&lt;%@ Page Language="VB" AutoEventWireup="false" CodeFile="ChartSpclChar.aspx.vb" Inherits="Pages_ChartSpclChar" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;link href="../Styles/SampleStyleSheet.css" rel="stylesheet" /&gt;
&lt;title&gt;FusionCharts | Chart using special character&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;h3&gt;Chart using special character&lt;/h3&gt;
&lt;form id="form1" runat="server"&gt;
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

2. Define a class `CommonThemeUsage` inherited from `System.Web.UI.Page`. Correspondingly, in the `.aspx` file, `CommonThemeUsage` is inherited.

3. Within the class `CommonThemeUsage`, define `Page_Load()`:
   - Declare a string `jsonData` and use it to assign the chart configuration as a JSON string.
   - Create an instance of `Chart` (defined within `FusionCharts.Charts`), and assign it the necessary attributes of a Column 2D chart. See the source code comments for the attributes used. Of particular importance is the attribute `chartType`, which in this case is `column2d`. Find the complete list of chart types with their respective alias [here](/chart-guide/list-of-charts).
   - In the `dataSource` object, add `numberPrefix` attribute in `chart` object. Set the `numberPrefix` to `$`.
   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js` (for this case, include **all theme files**), followed by some JavaScript functions and radio buttons, and finally within a `<form><div>` render the chart.

> Refer to [Column 2D chart](/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.
