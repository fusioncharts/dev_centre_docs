---
title: Create a Chart Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the plain javascript.
heading: Create a Chart Using FusionCharts
---

**FusionCharts Suite XT** — the industry's most comprehensive JavaScript charting solution — is all about easing the whole process of data visualization through charts.

In this page, we'll see how to install **FusionCharts** library and all the other dependencies on your system and render a chart using Plain JavaScript.

## Installation

Install **FusionCharts** using any of the following steps:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
    <li><a data-toggle='npm'>NPM</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab'>

<div><strong>Prerequisites</strong></div>
<div>
    <ol>
        <li>Before installing `fusioncharts` package via <strong>npm</strong>, make sure you have <strong>Node.js</strong> installed in your system.</li>
        <li>Make sure you have a bundler like <strong>webpack</strong> and <strong>parcel</strong> or have <strong>browserify</strong> installed in your system.</li>
    </ol>
</div>
<div><strong>Create a project folder using the following command:</strong></div>
<pre><code class="language-bash">$ mkdir projectName</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<div><strong>Get inside the directory using `cd` command as shown below:</strong></div>
<pre><code class="language-bash">$ cd projectName</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<div><strong>Now, to install the `fusioncharts` package via npm run the command below:</strong></div>
<pre><code class="language-bash">$ npm install fusioncharts</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab active'>
<div><strong>To install the **FusionCharts** Suite follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the **FusionCharts** JavaScript files from CDN.</li>
        <li>Include the theme file.</li>
    </ol>
</div>
<div>The code is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Include the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Step 2 - Include the fusion theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<div><strong>To install the **FusionCharts** Suite follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</li>
        <li>Include the FusionCharts theme file to apply style to the charts.</li>
    </ol>
</div>
<div>The code is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Include the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Include the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That completes the installation of **FusionCharts** Suite.

## Create Your First Chart

Let's create a Column 2D chart showing the "Countries with Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart.js %}

To understand the chart components, click [here](/understanding-fusioncharts).

## Chart Data

The data to render the above chart is shown in the table below:

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K                |
| Saudi     | 260K                |
| Canada    | 180K                |
| Iran      | 140K                |
| Russia    | 115K                |
| UAE       | 100K                |
| US        | 30K                 |
| China     | 30K                 |

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Countries with Most Oil Reserves [2017-18]",
    "subCaption": "In MMbbl = One Million barrels",
    "xAxisName": "Country",
    "yAxisName": "Reserves (MMbbl)",
    "numberSuffix": "K",
    "theme": "fusion"
  },
  // Chart Data
  "data": [
    {
      "label": "Venezuela",
      "value": "290"
    },
    {
      "label": "Saudi",
      "value": "260"
    },
    {
      "label": "Canada",
      "value": "180"
    },
    {
      "label": "Iran",
      "value": "140"
    },
    {
      "label": "Russia",
      "value": "115"
    },
    {
      "label": "UAE",
      "value": "100"
    },
    {
      "label": "US",
      "value": "30"
    },
    {
      "label": "China",
      "value": "30"
    }
  ]
}
```

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example, [single-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts.

In the above JSON data:

- Create the `chart` object to define the elements of the chart.

- Set the `caption` and `subcaption` of the chart.

- Set the value of `xAxisName` attribute to **Country**(first column of the table).

- Set the value of `yAxisName` attribute to **Reserves**(second column of the table).

- In the `data` array, create objects for each row and specify the `label` attribute to represent the Country. For example, **Venezuela**.

- Similarly, specify the `value` attribute to set the value of Oil Reserves in respective countries. For example, **290K** for **Venezuela**.

- Set the `numberSuffix` attribute to set the unit of the values.

- Set the `theme` attribute to apply the predefines themes to the chart.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have the data in JSON format, let's render the chart.

## Render the Chart

To render the chart, follow the steps below:

1. Include the `fusioncharts` library.

2. Include the chart type.

3. Include the FusionCharts theme file to apply style to the charts.

4. Store the chart configurations in a JSON object. In this JSON object:

   - Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
   - Set the width and height (in pixels).
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of the `dataSource`.

5. Add a container (instance) for the chart.

The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
    <li><a data-toggle='npm'>NPM</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab'>
<div class='mt-30'><strong>The `fusioncharts` package for `npm` can be used in two different ways:</strong></div>
<ul>
    <li>FusionCharts ES module</li>
    <li>FusionCharts CJS module</li>
</ul>
<div  class='mt-30'><strong>The steps to render the chart for both the modules are shown below:</strong></div>
<h4>ES6</h4>
<pre><code class="language-javascript">
// Include the core fusioncharts file from core  -
import FusionCharts from 'fusioncharts/core';

// Include the chart from viz folder
// E.g. - import ChartType from fusioncharts/viz/[ChartType]
import Column2D from 'fusioncharts/viz/column2d';

// Include the fusion theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

// Add the chart and theme as dependency
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(Column2D);
FusionCharts.addDep(FusionTheme);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
type: 'Column2D',
width: '700', // Width of the chart
height: '400', // Height of the chart
dataFormat: 'json', // Data type
renderAt:'chart-container', //Container where the chart will render
dataSource: {
// Chart Configuration
"chart": {
"caption": "Countries With Most Oil Reserves [2017-18]",
"subCaption": "In MMbbl = One Million barrels",
"xAxisName": "Country",
"yAxisName": "Reserves (MMbbl)",
"numberSuffix": "K",
"theme": "fusion"
},
// Chart Data
"data": [{
"label": "Venezuela",
"value": "290"
}, {
"label": "Saudi",
"value": "260"
}, {
"label": "Canada",
"value": "180"
}, {
"label": "Iran",
"value": "140"
}, {
"label": "Russia",
"value": "115"
}, {
"label": "UAE",
"value": "100"
}, {
"label": "US",
"value": "30"
}, {
"label": "China",
"value": "30"
}]
}
});
// Render
chartInstance.render();
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
<h4>CJS</h4>
<pre><code class="language-javascript">
var FusionCharts = require('fusioncharts');

// Require charts from fusioncharts
var Charts = require('fusioncharts/fusioncharts.charts');

// Require theme from fusioncharts
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

// Add charts and themes as dependency
Charts(FusionCharts);
FusionTheme(FusionCharts);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
type: 'Column2D',
width: '700', // Width of the chart
height: '400', // Height of the chart
dataFormat: 'json', // Data type
renderAt:'chart-container', //Container where the chart will render
dataSource: {
// Chart Configuration
"chart": {
"caption": "Countries With Most Oil Reserves [2017-18]",
"subCaption": "In MMbbl = One Million barrels",
"xAxisName": "Country",
"yAxisName": "Reserves (MMbbl)",
"numberSuffix": "K",
"theme": "fusion"
},
// Chart Data
"data": [{
"label": "Venezuela",
"value": "290"
}, {
"label": "Saudi",
"value": "260"
}, {
"label": "Canada",
"value": "180"
}, {
"label": "Iran",
"value": "140"
}, {
"label": "Russia",
"value": "115"
}, {
"label": "UAE",
"value": "100"
}, {
"label": "US",
"value": "30"
}, {
"label": "China",
"value": "30"
}]
}
});
// Render
chartInstance.render();
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
<div class='mt-30'><strong>To include the specific chart types, individually add the following files using `require`</strong></div>
<ul>
    <li><strong>PowerCharts</strong> - `fusioncharts/fusioncharts.powercharts`</li>
    <li><strong>Widgets</strong> - `fusioncharts/fusioncharts.widgets`</li>
    <li><strong>Gantt</strong> - `fusioncharts/fusioncharts.gantt`</li>
    <li><strong>Treemap</strong> -  `fusioncharts/fusioncharts.treemap`</li>
    <li><strong>Zoomscatter</strong> - `fusioncharts/fusioncharts.zoomscatter`</li>
    <li><strong>Zoomline</strong> - `fusioncharts/fusioncharts.zoomline`</li>
    <li><strong>Overlapped Bar</strong> - `fusioncharts/fusioncharts.overlappedbar2d`</li>
    <li><strong>Overlapped Column</strong> - `fusioncharts/fusioncharts.overlappedcolumn2d`</li>
</ul>
</div>

<div class='tab cdn-tab active'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My first chart using FusionCharts Suite XT&lt;/title&gt;
&lt;!-- Include fusioncharts core library --&gt;
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
&lt;!-- Include fusion theme --&gt;
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;script type="text/javascript"&gt;
    FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    }
});
    fusioncharts.render();
    });
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="chart-container"&gt;FusionCharts XT will load here!&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My first chart using FusionCharts Suite XT&lt;/title&gt;
&lt;!-- Include fusioncharts core library --&gt;
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
&lt;!-- Include fusion theme --&gt;
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
    FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Countries with Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
        // Chart Data
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    }
});
    fusioncharts.render();
    });
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="chart-container"&gt;FusionCharts XT will load here!&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! Your first chart using Plain JavaScript is ready.

## Problem Rendering the Chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
