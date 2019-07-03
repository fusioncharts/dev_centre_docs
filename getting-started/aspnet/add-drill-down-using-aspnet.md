---
title: Adding Drill Down using ASP.NET | FusionCharts
description: This article focuses on drill down charts.
heading: Adding Drill Down using ASP.NET
chartPresent: true
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

With FusionCharts, you can create unlimited levels of drill down  with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill down  to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up, or it can open in a new window or frame.

### Features of the FusionCharts JavaScript Class

- Automatically creates and shows a detailed descendant chart when you click on the corresponding data plot item linked in the parent chart

- Clones all chart configuration settings from the parent chart to create the descendant charts

- Accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configurelink) function
- Uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed

- Supports drill down  to an unlimited number of levels

## Create drill down

To create drill down  charts follow the steps given below:

1. Create the JSON/XML data for the parent chart. This is called the parent data source.

2. Append the data string or the data URL for the descendant charts within the parent data source. If you append the data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

Once you implement these steps, the FusionCharts JavaScript class takes care of the rest. Let's see the steps in details.

As an example, we will consider a simple scenario of a parent chart with a single level of drill down .

The parent chart here is a **Column 2D** chart showing yearly sales for the top three juice flavors over the last one year. When you click on the data plot for a particular flavor, it drills down to show a descendant **Column 2D** chart with quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chart add-drill down -using-angular-example-1.js %}

The JSON data to render the above chart:

```json
{
  "chart": {
    "caption": "Top 3 Juice Flavors",
    "subcaption": "Last year",
    "xaxisname": "Flavor",
    "yaxisname": "Amount (In USD)",
    "numberprefix": "$",
    "theme": "fusion",
    "rotateValues": "0"
  },
  "data": [
    {
      "label": "Apple",
      "value": "810000",
      "link": "newchart-xml-apple"
    },
    {
      "label": "Cranberry",
      "value": "620000",
      "link": "newchart-xml-cranberry"
    },
    {
      "label": "Grapes",
      "value": "350000",
      "link": "newchart-xml-grapes"
    }
  ],
  "linkeddata": [
    {
      "id": "apple",
      "linkedchart": {
        "chart": {
          "caption": "Apple Juice - Quarterly Sales",
          "subcaption": "Last year",
          "numberprefix": "$",
          "theme": "fusion",
          "rotateValues": "0",
          "plottooltext": "$label, $dataValue,  $percentValue"
        },
        "data": [
          {
            "label": "Q1",
            "value": "157000"
          },
          {
            "label": "Q2",
            "value": "172000"
          },
          {
            "label": "Q3",
            "value": "206000"
          },
          {
            "label": "Q4",
            "value": "275000"
          }
        ]
      }
    },
    {
      "id": "cranberry",
      "linkedchart": {
        "chart": {
          "caption": "Cranberry Juice - Quarterly Sales",
          "subcaption": "Last year",
          "numberprefix": "$",
          "theme": "fusion",
          "plottooltext": "$label, $dataValue,  $percentValue"
        },
        "data": [
          {
            "label": "Q1",
            "value": "102000"
          },
          {
            "label": "Q2",
            "value": "142000"
          },
          {
            "label": "Q3",
            "value": "187000"
          },
          {
            "label": "Q4",
            "value": "189000"
          }
        ]
      }
    },
    {
      "id": "grapes",
      "linkedchart": {
        "chart": {
          "caption": "Grapes Juice - Quarterly Sales",
          "subcaption": "Last year",
          "numberprefix": "$",
          "theme": "fusion",
          "rotateValues": "0",
          "plottooltext": "$label, $dataValue,  $percentValue"
        },
        "data": [
          {
            "label": "Q1",
            "value": "45000"
          },
          {
            "label": "Q2",
            "value": "72000"
          },
          {
            "label": "Q3",
            "value": "95000"
          },
          {
            "label": "Q4",
            "value": "108000"
          }
        ]
      }
    }
  ]
}
```

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The data structure that goes into the **../DrillDownExample/Default.aspx** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<pre><code class="language-cs">
    &lt;%@ Page Language=&quot;C#&quot; AutoEventWireup=&quot;true&quot; CodeFile=&quot;Default.aspx.cs&quot; Inherits=&quot;DB_DrillDown_Default&quot; %&gt;

    &lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;
    &lt;html&gt;
        &lt;head&gt;
          &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;
          &lt;title&gt;FusionCharts - Simple&lt;/title&gt;
          &lt;!-- FusionCharts script tag --&gt;
          &lt;script type=&quot;text/javascript&quot; src=&quot;../fusioncharts/fusioncharts.js&quot;&gt;&lt;/script&gt;
          &lt;!-- End --&gt;
        &lt;/head&gt;
        &lt;body&gt;
          &lt;div style=&quot;text-align:center&quot;&gt;
                &lt;asp:Literal ID=&quot;Literal1&quot; runat=&quot;server&quot;&gt;&lt;/asp:Literal&gt;
          &lt;/div&gt;
        &lt;/body&gt;
    &lt;/html&gt;

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab xml-tab'>
<pre><code class="language-vb">
    &lt;%@ Page Language=&quot;VB&quot; AutoEventWireup=&quot;false&quot; CodeFile=&quot;Default.aspx.vb&quot; Inherits=&quot;Samples_DrillDownExample_Default&quot; %&gt;

    &lt;!DOCTYPE html&gt;
    &lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
    &lt;head runat=&quot;server&quot;&gt;
        &lt;title&gt;FusionCharts - Drill Down Example&lt;/title&gt;
        &lt;!-- FusionCharts script tag --&gt;
        &lt;script type=&quot;text/javascript&quot; src=&quot;../../fusioncharts/fusioncharts.js&quot;&gt;&lt;/script&gt;
        &lt;!-- End --&gt;
    &lt;/head&gt;
    &lt;body&gt;
        Fusioncharts will render below
        &lt;div style=&quot;text-align:center&quot;&gt;
            &lt;asp:Literal ID=&quot;Literal1&quot; runat=&quot;server&quot;&gt;&lt;/asp:Literal&gt;
        &lt;/div&gt;
    &lt;/body&gt;
    &lt;/html&gt;

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

The data structure that goes into the code behind **../DrillDownExample/Default.aspx.cs** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<pre><code class="language-cs">
    using System;
    using System.Collections;
    using System.Configuration;
    using System.Data;
    using System.Web;
    using System.Web.Security;
    using System.Web.UI;
    using System.Web.UI.HtmlControls;
    using System.Web.UI.WebControls;
    using System.Web.UI.WebControls.WebParts;

    // Use the `FusionCharts.Charts` namespace to be able to use classes and methods required to create charts.
    // using FusionCharts.Charts;

    public partial class DB_DrillDown_Default: System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            // The data for the sample drill down  chart is stored in the DrillDownSSData.json file.
            // To create this chart, chart data will be loaded from the `.json` file.

            // Initialize the chart.
            Chart sales = new Chart(&quot;column2d&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;jsonurl&quot;, &quot;../Data/DrillDownSSData.json&quot;);

            // Render the chart.
            Literal1.Text = sales.Render();
        }
    }

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab xml-tab'>
<pre><code class="language-vb">
    Imports System.Collections
    Imports System.Configuration
    Imports System.Data
    Imports System.Web
    Imports System.Web.Security
    Imports System.Web.UI
    Imports System.Web.UI.HtmlControls
    Imports System.Web.UI.WebControls
    Imports System.Web.UI.WebControls.WebParts

    ' Use the `FusionCharts.Charts` namespace to be able to use classes and methods required to // create charts.
    Imports FusionCharts.Charts
    Partial Class Samples_DrillDownExample_Default
        Inherits System.Web.UI.Page
        Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
            ' This page demonstrates the ease of generating charts using FusionCharts.
            ' For this chart, we've used a predefined DrillDownSSData.json (contained in /Data/ folder)
            ' Ideally, you would NOT use a physical data file. Instead you'll have
            ' your own ASP.NET scripts virtually relay the JSON / XML data document.
            ' For a head-start, we've kept this example very simple.

            ' Initialize chart - Column 2D Chart with data from Data/DrillDownSSData.json
            Dim sales As New Chart(&quot;column2d&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;jsonurl&quot;, &quot;../../Data/DrillDownSSData.json&quot;)
            ' Render the chart
            Literal1.Text = sales.Render()
        End Sub
    End Class

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>
