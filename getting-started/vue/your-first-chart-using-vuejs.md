---
title: Create a Chart in Vue | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the vue-fusioncharts component.
heading: Create a Chart in Vue Using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight Vue component that provides bindings for FusionCharts. The `vue-fusioncharts` component allows you to easily add rich and interactive charts to any Vue project.

On this page, we'll see how to install FusionCharts and render a chart using the `vue-fusioncharts` component.

## Prerequisite

You can follow the below steps to initiate a vue project or else you can skip this step and proceed on by including the dependencies from CDN or Local Files.

One of the best ways to setup the development environment is through `vue-cli`. Find more about it[ here](https://create-react-app.dev/docs/getting-started). Install vue globally in your local machine with npm using `vue-cli`

```javascript
npm install -g @vue/cli
```

Open the terminal, go ahead and enter:

```javascript
vue create first-fusioncharts-project
cd first-fusioncharts-project
npm run serve
```

`first-fusioncharts-project` is the working directory where Vue Boilerplate will be installed along with all the utilities and dependencies.

Now, open[ http://localhost:8080/](http://localhost:3000/) to see your Vue app.

## Installation and including dependencies

You can install the fusioncharts components by following any of the methods below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<div class='mt-30'>To install FusionCharts and the `vue-fusioncharts` component via npm follow the steps below:</div>
<pre><code class="language-javascript">
npm install fusioncharts vue-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div class='mt-30'>After installing the fusioncharts components, you can replace the code in src %gt; App.vue file with the code shown in the steps below to create your first chart. Import all the required dependencies to get started.</div>
<pre><code class="language-javascript">
// Include Dependencies
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</div>

<div class='tab cdn-tab'>
<div class='mt-30'><strong>To install the FusionCharts package and the `vue-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include [Vue](https://vuejs.org/)core library.</div>
<div class='mt-20'>2. Include the `vue-fusioncharts` component.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</div>
<div class='mt-20'>4. Include the FusionCharts theme file to apply style to the charts.</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- Step 1 - Including vue  --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/vue@2.3.3"&gt;&lt;/script>
    &lt;!-- Step 2 - Including vue-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"&gt;&lt;/script>
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Step 4 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<div class='mt-30'><strong>To install the FusionCharts package and the `vue-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include [Vue](https://vuejs.org/)core library.</div>
<div class='mt-20'>2. Include the `vue-fusioncharts` component.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</div>
<div class='mt-20'>4. Include the FusionCharts theme file to apply style to the charts.</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- Step 1 - Including vue  --&gt;
    &lt;script type="text/javascript" src="path/to/local/vue.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Including vue-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="path/to/local/vue-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 4 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

## Preparing the data

Let's create a chart showing the "Countries With Most Oil Reserves". The data of the oil reserves present in various countries is shown in the tabular form below.

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

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as **data labels** along the x-axis and 'No. of oil reserves' as **data values** along the y-axis. Let us prepare the data for a single-series chart.

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
// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion"
    },
    // Chart Data - from step 2
    data: chartData
  }
};
```

> The `type` attribute in the chartConfigs object signifies the type of chart being rendered. Have a look at different chart types with their aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

Understand more about your chart and its components [here](https://www.fusioncharts.com/dev/understanding-fusioncharts).

## Render the chart

Get ready to render your first chart finally. Use this consolidated code shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<pre><code class="custom-hlc language-javascript">
// Include the dependencies
&lt;script&gt;

import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

// Prepare the data
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
// Configure your chart

const dataSource = {
chart: {
caption: "Countries With Most Oil Reserves [2017-18]",
subcaption: "In MMbbl = One Million barrels",
xaxisname: "Country",
yaxisname: "Reserves (MMbbl)",
numbersuffix: "K",
theme: "fusion"
},
data: chartData
};
export default {
name: 'app',
data() {
return {
"type": "column2d",
"renderAt": "chart-container",
"width": "550",
"height": "350",
"dataFormat": "json",
dataSource
}
}
}
&lt;/script&gt;

// Render the chart

&lt;template&gt;
&lt;div id="app"&gt;
&lt;div id="chart-container"&gt;
&lt;fusioncharts
:type="type"
:width="width"
:height="height"
:dataformat="dataFormat"
:dataSource="dataSource"
&gt;
&lt;/fusioncharts&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
<div class='mt-30'><strong>To include the specific chart types, individually add the following files using `import`</strong></div>
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
<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including vue  --&gt;
    &lt;script type="text/javascript" src=" https://unpkg.com/vue@2.3.3"&gt;&lt;/script>
    &lt;!-- Including vue-fusioncharts component --&gt;
    &lt;script type="text/javascript" src=" https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"&gt;&lt;/script>
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.charts.js"&gt;&lt;/script>
    &lt;!-- Including the fusion theme --&gt;
    &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;
        &lt;fusioncharts :type="type" :width="width" :height="height" :dataFormat="dataFormat" :dataSource="dataSource"&gt;&lt;/fusioncharts&gt;
    &lt;/div&gt;
    &lt;script type="text/javascript"&gt;
        // Use VueFusionCharts component by calling the Vue.use() method:
        Vue.use(VueFusionCharts, FusionCharts);
        var app = new Vue({
            el: '#app',
            data: {
                width: '700',
                height: '400',
                type: 'column2d',
                dataFormat: 'json',
                dataSource: {
                    "chart": {
                        "caption": "Countries With Most Oil Reserves [2017-18]",
                        "subCaption": "In MMbbl = One Million barrels",
                        "xAxisName": "Country",
                        "yAxisName": "Reserves (MMbbl)",
                        "numberSuffix": "K",
                        "theme": "fusion"
                    },
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
            }
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including vue  --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/vue@2.3.3"&gt;&lt;/script&gt;
    &lt;!-- Including vue-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="path/to/local/vue-fusioncharts.min.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.charts.js"&gt;&lt;/script&gt;    
    &lt;!-- Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;
        &lt;fusioncharts :type="type" :width="width" :height="height" :dataFormat="dataFormat" :dataSource="dataSource"&gt;&lt;/fusioncharts&gt;
    &lt;/div&gt;
    &lt;script type="text/javascript"&gt;
        // Use VueFusionCharts component by calling the Vue.use() method:
        Vue.use(VueFusionCharts, FusionCharts);
        var app = new Vue({
            el: '#app',
            data: {
                width: '700',
                height: '400',
                type: 'column2d',
                dataFormat: 'json',
                dataSource: {
                    "chart": {
                        "caption": "Countries With Most Oil Reserves [2017-18]",
                        "subCaption": "In MMbbl = One Million barrels",
                        "xAxisName": "Country",
                        "yAxisName": "Reserves (MMbbl)",
                        "numberSuffix": "K",
                        "theme": "fusion"
                    },
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
            }
        });
    &lt;/script&gt;
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

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `vue-fusioncharts` is ready.
