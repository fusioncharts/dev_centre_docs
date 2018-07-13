---
permalink: getting-started/aspnet/your-first-chart-using-aspnet.html
title: Your First Chart in ASP.NET using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the asp.net.
heading: Your First Chart in ASP.NET using FusionCharts
chartPresent: false
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. In this page, we'll see how to render charts using FusionCharts and ASP.NET wrapper. We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/aspnet/your-first-chart-using-aspnet#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/aspnet/your-first-chart-using-aspnet#create-your-first-gauge-7) and a [map]({% site.baseurl %}/getting-started/aspnet/your-first-chart-using-aspnet#create-your-first-map-10).

Before going through this article, please [install]({% site.getting-started/aspnet/your-first-chart-using-aspnet#create-your-first-chart-1baseurl %}/getting-started/aspnet/install-using-aspnet '@@open-newtab') FusionCharts ASP.NET wrapper, if not already installed.

## Create your first chart

In this section, we will create a chart using `FusionCharts ASP.NET` wrapper. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

### The data for this chart is represented in a table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

> There are different formats of JSON/XML for different groups of charts in FusionCharts - e.g., single-series (which you're seeing here), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

{% embed_data getting-started-your-first-chart.js %}

In the above code we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contains a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels, data values. You can also set chart limits and extended properties. The list of functional attributes used in the above code are:

* `showLabels` sets the  configuration whether the x-axis labels will be displayed or not.
* `showValue` sets the configuration whether data values will be displayed along with the data plot on chart.
* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's JSON data and provided fusion (default theme) as the value of it. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application.

#### Cosmetics Attributes

Cosmetic attributes let you configure chart cosmetics like color, transparency, font size etc. Since we are using the `fusion` theme to customize the chart's look and feel no cosmetic attributes are used in this sample. For a detailed list of cosmetic attributes click here.

For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Create an instance of the chart

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart using `.aspx.cs` file is given below:

```javascript
//Include fusioncharts reference in page
...
using FusionCharts.Charts;
...
...
//Create chart instance
// charttype, chartID, width, height, data format, data
Chart chart = new Chart("column2d", "myChart", "600", "400", "json", DataSource);
//Render chart
Literal1.Text = chart.Render();
```

In the above code:

* We have created an instance of the **column2d** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 600x400 pixels using `width` and `height`.
* To specify the data format as JSON, we have set the `dataFormat` parameter to json. You can also provide the data in [XML format]({% site.baseurl %}/chart-guide/getting-started/using-xml-as-data-format '@@open-newtab'). 
* The JSON data is embedded as the value of the `dataSource` parameter.

The aspx template of the above sample is shown below:

```html
// .aspx code template
<div style="text-align:center">
    <asp:Literal ID="Literal1" runat="server"></asp:Literal>
</div>
```

That's it! When you run this .aspx page now, you should see a chart representing your data.

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a column 2D chart.

Now, go on and explore other 95+ chart types that we've in [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') or explore the configuration [attribute]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## Create your first gauge

Gauges are powerful tools that can showcase using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple gauge showcasing Nordstorm's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Scores above 75 mean good and is green.

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. For ASP.NET, we recommend JSON format. The converted format will look as shown below:

{% embed_data getting-started-your-first-widget.js %}

### Create an instance of the gauge

In this step, we will create an instance of the chart type as **angulargauge**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart using `.aspx.cs` file is given below:

```javascript
//Include fusioncharts reference in page
...
using FusionCharts.Charts;
...
...

// Initialize gauge
//gauge, gaugeID, width, height, data format, data
Chart gauge = new Chart("angulargauge", "mygauge", "600", "350", "json", DataSource);
// Render the gauge
Literal1.Text = gauge.Render();
```

The .aspx template for the above sample is:

```html
// .aspx code template
<div style="text-align:center">
    <asp:Literal ID="Literal1" runat="server"></asp:Literal>
</div>
```

See the complete list of[ all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for a angular gauge.

## Create your first map

In this section, we will create a visualization using the map of **World**. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in a table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

{% embed_data getting-started-your-first-map.js %}

### Create an instance of the map

In this step, we will create an instance of the map type as **world**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart using `.aspx.cs` or `.aspx.vb` file is given below:

<div class="code-wrapper">
    <ul class='code-tabs'>
        <li class='active'><a data-toggle='json'>C#</a></li>
        <li><a data-toggle='xml'>VB</a></li>
    </ul>
    <div class='tab-content'>
        <div class='tab json-tab active'>
            <pre><code class="custom-hlc language-cs">
    //Include fusioncharts reference in page
    ...
    using FusionCharts.Charts;
    ...
    ...

    // Initialize map
    // map, mapID, width, height, data format, data

    Chart maps = new Chart("world", "myChart", "800", "550", "json", DataSource);
    // Render the map
    Literal1.Text = maps.Render();
</code></pre>
            <button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
        </div>

        <div class='tab xml-tab'>
            <pre><code class="custom-hlc language-cv">
    //Include fusioncharts reference in page
    ...
    using FusionCharts.Charts;
    ...
    ...

    // Initialize map
    // map, mapID, width, height, data format, data

    Chart maps = new Chart("world", "myChart", "800", "550", "json", DataSource);
    // Render the map
    Literal1.Text = maps.Render();
</code></pre>
            <button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
        </div>
    </div>
</div>

The .aspx template for the above sample is:

<div class="code-wrapper">
    <ul class='code-tabs'>
        <li class='active'><a data-toggle='json'>C#</a></li>
        <li><a data-toggle='xml'>VB</a></li>
    </ul>
    <div class='tab-content'>
        <div class='tab json-tab active'>
            <pre><code class="custom-hlc language-cs">
            &lt;div style="text-align:center"&gt;
                &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
            &lt;/div&gt;
</code></pre>
            <button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
        </div>

        <div class='tab xml-tab'>
            <pre><code class="custom-hlc language-cv">
            &lt;div style="text-align:center"&gt;
            &lt;asp:Literal ID="Literal1" runat="server"&gt;&lt;/asp:Literal&gt;
            &lt;/div&gt;
</code></pre>
            <button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
        </div>
    </div>
</div>

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of world. The respective `id`, can be found at [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case something went wrong, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.