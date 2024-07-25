---
title: Apply Different Themes using ASP.NET | FusionCharts
description: Enhance your ASP.NET projects by Apply Different Themes with FusionCharts. This step-by-step guide makes your data visualizations pop with ease. Try now!
heading: Apply Different Themes using ASP.NET
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

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

- `fusion` (since v3.13.0)
- `gammel` (since v3.13.0)
- `candy` (since v3.13.0)
- `zune`
- `ocean`
- `carbon`

This article focuses on how you can apply different themes to the chart at runtime using FusionCharts ASP.NET `C#` & `VB` wrapper. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

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

public partial class CommonThemeUsage: System.Web.UI.Page {
protected void Page_Load(object sender, EventArgs e) {
// store chart data as json string
string jsonData;
jsonData = "{'chart':{'caption':'Countries With Most Oil Reserves [2017-18]','subCaption':'In MMbbl = One Million barrels','xAxisName':'Country','yAxisName':'Reserves (MMbbl)','numberSuffix':'K','theme':'fusion'},'data':[{'label':'Venezuela','value':'290'},{'label':'Saudi','value':'260'},{'label':'Canada','value':'180'},{'label':'Iran','value':'140'},{'label':'Russia','value':'115'},{'label':'UAE','value':'100'},{'label':'US','value':'30'},{'label':'China','value':'30'}]}";
// create chart instance for chart
Chart columnChart = new Chart("column2d", "column_chart", "700", "400", "json", jsonData);
// render chart
Literal1.Text = columnChart.Render();
}
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
Imports FusionCharts.Charts
Partial Class CommonThemeUsage
Inherits System.Web.UI.Page
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load 'store chart config data as json string
Dim jsonData As String
jsonData = "{'chart':{'caption':'Countries With Most Oil Reserves [2017-18]','subCaption':'In MMbbl = One Million barrels','xAxisName':'Country','yAxisName':'Reserves (MMbbl)','numberSuffix':'K','theme':'fusion'},'data':[{'label':'Venezuela','value':'290'},{'label':'Saudi','value':'260'},{'label':'Canada','value':'180'},{'label':'Iran','value':'140'},{'label':'Russia','value':'115'},{'label':'UAE','value':'100'},{'label':'US','value':'30'},{'label':'China','value':'30'}]}"
'create chart instance
'chart type, chart id, width, height, data format, data source as string
Dim columnChart As New Chart("column2d", "column_Chart", "700", "400", "json", jsonData)
'render chart
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
&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="CommonThemeUsage.aspx.cs" Inherits="CommonThemeUsage" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | Applying Different Themes&lt;/title&gt;
&lt;/head&gt;

&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.gammel.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.candy.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.zune.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.ocean.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.carbon.js"&gt;&lt;/script&gt;

    &lt;form id="form1" runat="server"&gt;
        &lt;h3&gt;Applying Different Themes&lt;/h3&gt;
        &lt;div style="width: 100%; display: block;"&gt;
            &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
        &lt;/div&gt;
    &lt;/form&gt;
    &lt;div align="center" style="font-family:'Helvetica Neue', Arial; font-size: 16px;"&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;Select a theme for all charts&lt;/label&gt;
    &lt;/div&gt;
    &lt;br /&gt;
    &lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" checked value="fusion" /&gt; Fusion
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="gammel" /&gt; Gammel
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="candy" /&gt; Candy
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="zune" /&gt; Zune
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="ocean" /&gt; Ocean
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="carbon" /&gt; Carbon
        &lt;/label&gt;
    &lt;/div&gt;

    &lt;script type="text/javascript"&gt;
        FusionCharts && FusionCharts.ready(function() {
            FusionCharts.options.defaultTheme = "fusion";
            var trans = document.getElementById("controllers").getElementsByTagName("input");
            for (var i = 0, len = trans.length; i &lt; len; i++) {
                if (trans[i].type == "radio") {
                    trans[i].onchange = function() {
                        ChangeTheme(this.value);
                    };
                }
            }
        });

        function ChangeTheme(theme) {
            for (var k in FusionCharts.items) {
                if (FusionCharts.items.hasOwnProperty(k)) {
                    FusionCharts.items[k].setChartAttribute('theme', theme);
                }
            }
        };
        FusionCharts.options.defaultTheme = theme;
    &lt;/script&gt;

&lt;/body&gt;

&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab vb-tab'>
<pre><code class="language-javascript">
&lt;%@ Page Language="VB" AutoEventWireup="true" CodeFile="CommonThemeUsage.aspx.vb" Inherits="CommonThemeUsage" %&gt;

&lt;!DOCTYPE html&gt;

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;

&lt;head runat="server"&gt;
&lt;title&gt;FusionCharts | Applying Different Themes&lt;/title&gt;
&lt;/head&gt;

&lt;body style="font-family: Helvetica Neue, Arial; font-size: 16px;"&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.gammel.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.candy.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.zune.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.ocean.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.carbon.js"&gt;&lt;/script&gt;

    &lt;form id="form1" runat="server"&gt;
        &lt;h3&gt;Applying Different Themes&lt;/h3&gt;
        &lt;div style="width: 100%; display: block;"&gt;
            &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
        &lt;/div&gt;
    &lt;/form&gt;
    &lt;div align="center" style="font-family:'Helvetica Neue', Arial; font-size: 16px;"&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;Select a theme for all charts&lt;/label&gt;
    &lt;/div&gt;
    &lt;br /&gt;
    &lt;div id="controllers" align="center" style="font-family:'Helvetica Neue', Arial; font-size: 14px;"&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" checked value="fusion" /&gt; Fusion
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="gammel" /&gt; Gammel
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="candy" /&gt; Candy
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="zune" /&gt; Zune
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="ocean" /&gt; Ocean
        &lt;/label&gt;
        &lt;label style="padding: 0px 5px !important;"&gt;
            &lt;input type="radio" name="theme-options" value="carbon" /&gt; Carbon
        &lt;/label&gt;
    &lt;/div&gt;

    &lt;script type="text/javascript"&gt;
        FusionCharts && FusionCharts.ready(function() {
            FusionCharts.options.defaultTheme = "fusion";
            var trans = document.getElementById("controllers").getElementsByTagName("input");
            for (var i = 0, len = trans.length; i &lt; len; i++) {
                if (trans[i].type == "radio") {
                    trans[i].onchange = function() {
                        ChangeTheme(this.value);
                    };
                }
            }
        });

        function ChangeTheme(theme) {
            for (var k in FusionCharts.items) {
                if (FusionCharts.items.hasOwnProperty(k)) {
                    FusionCharts.items[k].setChartAttribute('theme', theme);
                }
            }
        };
        FusionCharts.options.defaultTheme = theme;
    &lt;/script&gt;

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
   - Render the chart using the `[instanceName].Render()` method. Correspondingly, in the `.aspx` file, include the necessary chart and theme libraries modules using the `<script>` tags, like `fusioncharts.js`, `fusioncharts.theme.fusion.js` (for this case, include **all theme files**), followed by some JavaScript functions and radio buttons, and finally within a `<form><div>` render the chart.

> Refer to [Column 2D chart](/chart-guide/standard-charts/line-area-and-column-charts) for more information on the configuration and data for this chart type.
