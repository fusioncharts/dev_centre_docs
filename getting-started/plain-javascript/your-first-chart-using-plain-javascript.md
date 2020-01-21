---
title: Create a Chart Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the plain javascript.
heading: Create a Chart Using FusionCharts
author: sowmya
---

**FusionCharts Suite XT** — the industry's most comprehensive JavaScript charting solution — is all about easing the whole process of data visualization through charts.

On this page, we'll see how to install **FusionCharts** library and all the other dependencies on your system and render a chart using Plain JavaScript.

## Prerequisite

In case of including Fusioncharts dependencies from **CDN** or **Local Files**, you can skip this step and get started with the code mentioned in the below steps.
Before you begin, make sure your development environment includes `Node.js` and an `npm package manager`.

> Initialize npm, install webpack locally, and install the webpack-cli. Make sure you run **npx webpack** command in the terminal to ensure that the build is successful.

Follow the steps mentioned [here](https://webpack.js.org/guides/getting-started/) to initialize a Javascript project through npm.

## Installation and including dependencies

You can install the fusioncharts components by following any of the methods below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
    <li><a data-toggle='npm'>NPM</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab'>

<div><strong>Create a project folder using the following command:</strong></div>
<pre><code class="language-bash">$ mkdir projectName</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<div><strong>Get inside the directory using `cd` command as shown below:</strong></div>
<pre><code class="language-bash">$ cd projectName</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<div><strong>Now, to install the `fusioncharts` package via npm run the command below:</strong></div>
<pre><code class="language-bash">$ npm install fusioncharts</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div>After installing the fusioncharts components, you can replace the code in `index.js` file with the code shown in the steps below to create your first chart. Import all the required dependencies to get started.</div>
<pre><code class="language-javascript">
// Include the core fusioncharts file from core
import FusionCharts from 'fusioncharts/core';

// Include the chart from viz folder
import Column2D from 'fusioncharts/viz/column2d';

// Include the fusion theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

// Add the chart and theme as dependency
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(Column2D);
FusionCharts.addDep(FusionTheme);
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>

</div>

<div class='tab cdn-tab active'>
<div>To install the **FusionCharts** Suite follow the steps below:</div>
<div>
    <ol>
        <li>Include the **FusionCharts** JavaScript files from CDN in the html file.</li>
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

That completes the installation of `FusionCharts` Suite.

## Preparing the data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in tabular form below.

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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as **data labels** along the x-axis and 'No. of oil reserves' as **data values** along y-axis. Let us prepare the data for a single-series chart.

FusionCharts accepts the data in JSON format. So the above data in the tabular form will take the below shape.

```javascript
// Preparing the chart data
const chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];
```

## Configure your chart

Now that the data is ready, let's work on the styling, positioning and giving your chart a context.

```javascript
// Chart Configuration
const chartConfigs = {
    type: "column2d",            //Set the chart type
    renderAt: 'chart-container', //Set the container object
    width: "100%",               //Set the chart width
    height: "400",               //Set the chart height
    dataFormat: "json",          //Set the type of data
    dataSource: {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
            "subCaption": "In MMbbl = One Million barrels",          //Set the chart subcaption
            "xAxisName": "Country",          //Set the x-axis name
            "yAxisName": "Reserves (MMbbl)", //Set the y-axis name
            "numberSuffix": "K",
            "theme": "fusion",               //Set the theme for your chart
        },
        // Chart Data from Step 2
        "data": chartData
    }
};
```

Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

## Render the chart

The consolidated code to render the chart is shown below:

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
<div  class='mt-30'><strong>Step 1:</strong> In `index.js` include the necessary files and import the fusioncharts dependency. The consolidated code is shown below:</div>
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

//STEP 2 - Chart Data
const chartData = [{
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
}];

//STEP 3 - Chart Configurations
const chartConfig = {
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
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
        "data": chartData
    }
};
  
// STEP 4 - Create an Instance with chart options and render the chart
var chartInstance = new FusionCharts(chartConfig);
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

//STEP 2 - Chart Data
const chartData = [{
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
}];

//STEP 3 - Chart Configurations
const chartConfig = {
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
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
        "data": chartData
    }
};

// STEP 4 - Create an Instance with chart options and render
var chartInstance = new FusionCharts(chartConfig);
chartInstance.render();
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
<div class='mt-30'><strong>Step 2:</strong> Specify the chart container within the `index.html` file.</div>
<pre><code class="language-javascript">
&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Getting Started&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="chart-container"&gt;Fusioncharts will render here&lt;/div&gt;
    &lt;script src="index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<div class='mt-30'><strong>Step 3:</strong> Run `npx webpack` command in the terminal. Once the build is successful, open the `index.html` file to see your chart.</div>

</div>

<div class='tab cdn-tab active'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My first chart using FusionCharts Suite XT&lt;/title&gt;
&lt;!-- Include fusioncharts core library --&gt;
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;!-- Include fusion theme --&gt;
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
    //STEP 2 - Chart Data
    const chartData = [{
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
    }];

    //STEP 3 - Chart Configurations
	const chartConfig = {
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
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
        "data": chartData
        }
	};
    FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts(chartConfig);
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
    //STEP 2 - Chart Data
    const chartData = [{
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
    }];

    // STEP 3 - Chart Configurations
	const chartConfig = {
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
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
        "data": chartData
        }
	};
    FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts(chartConfig);
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

## See your chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using Plain JavaScript is ready.
