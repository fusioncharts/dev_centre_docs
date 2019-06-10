---
title: Create a Gauge in Vue | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the vue-fusioncharts component.
heading: Create a Gauge in Vue Using FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **Vue** component which provides bindings for **FusionCharts**. The `vue-fusioncharts` component allows you to easily add rich and interactive charts to any **Vue** project.

In this page, we'll see how to install FusionCharts and render a gauge using the `vue-fusionCharts` component.

## Installation

Install **FusionCharts** and the `vue-fusioncharts` component using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<div class='mt-30'><strong>To install FusionCharts and the `vue-fusioncharts` component via npm follow the steps below:</strong></div>
<div class='mt-20'>1. Install the `vue-fusioncharts` component</div>
<pre><code class="language-javascript">
$ npm install vue-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div class='mt-20'>2. Install `fusioncharts` package</div>
<pre><code class="language-javascript">
$ npm install fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
<div class='mt-30'><strong>To install the FusionCharts package and the `vue-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include [Vue](https://vuejs.org/)core library.</div>
<div class='mt-20'>2. Include the `vue-fusioncharts` component.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</div>
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
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</div>
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

That completes the installation of FusionCharts and the `vue-fusioncharts` component.

## Create your First Gauge

Gauges are powerful tools that can showcase information using a radial scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart data

The thresholds for the above sample is shown in the table below:

| Range  | Color  | Hex Code |
| ------ | ------ | -------- |
| 0-50   | Red    | #F2726F  |
| 50-75  | Yellow | #FFC533  |
| 75-100 | Green  | #62B58F  |

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Nordstrom's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  // Chart Data
  "colorRange": {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
}
```

In the above JSON:

- Create the `chart` object to define the elements of the gauge.

- Create the `colorRange` object to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` object.

- Set the `code` attribute to specify the hex color of respective ranges.

- Create the `dials` object to represent the customer satisfaction score.

- Create the `dial` object under `dials` object to set the value of customer satisfaction score.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the gauge

To render the gauge, open `App.vue` file and follow the steps below:

1. Include the `vue` component.

2. Include `vue-fusioncharts` component.

3. Include `fusioncharts` core library.

4. Include the chart type.

5. Include the FusionCharts theme file to apply style to the charts.

6. Register the `vue-fusionCharts` component.

7. Store the chart configurations in a JSON object. In this JSON object:

   - Set the chart type as `angulargauge`. For Angular Gauge, the alias is `angulargauge`. Find the complete list of gauge types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts#fusionwidgets-xt).
   - Set the width and height (in pixels).
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of the `dataSource`.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<pre><code class="language-javascript">&lt;script&gt;
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import AngularGauge from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(VueFusionCharts, FusionCharts, AngularGauge, FusionTheme);
export default {
name: 'app',
data () {
return {
"type": "angulargauge",
"renderAt": "chart-container",
"width": "550",
"height": "350",
"dataFormat": "json",
"datasource": {
"chart": {
"caption": "Nordstrom's Customer Satisfaction Score for 2017",
"lowerLimit": "0",
"upperLimit": "100",
"showValue": "1",
"numberSuffix": "%",
"theme": "fusion",
"showToolTip": "0"
},
// Chart Data
"colorRange": {
"color": [{
"minValue": "0",
"maxValue": "50",
"code": "#F2726F"
}, {
"minValue": "50",
"maxValue": "75",
"code": "#FFC533"
}, {
"minValue": "75",
"maxValue": "100",
"code": "#62B58F"
}]
},
"dials": {
"dial": [{
"value": "81"
}]
}
}
}
}
}
&lt;/script&gt;

&lt;template&gt;
&lt;div id="app"&gt;
&lt;div id="chart-container"&gt;
&lt;fusioncharts
:type="type"
:width="width"
:height="height"
:dataformat="dataformat"
:datasource="datasource"
&gt;
&lt;/fusioncharts&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
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
    &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.widgets.js"&gt;&lt;/script>    
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
                width: '450',
                height: '250',
                type: 'angulargauge',
                dataFormat: 'json',
                dataSource: {
                    // Chart Configuration
                    "chart": {
                        "caption": "Nordstrom's Customer Satisfaction Score for 2017",
                        "lowerLimit": "0",
                        "upperLimit": "100",
                        "showValue": "1",
                        "numberSuffix": "%",
                        "theme": "fusion",
                        "showToolTip": "0"
                    },
                    // Chart Data
                    "colorRange": {
                        "color": [{
                            "minValue": "0",
                            "maxValue": "50",
                            "code": "#F2726F"
                        }, {
                            "minValue": "50",
                            "maxValue": "75",
                            "code": "#FFC533"
                        }, {
                            "minValue": "75",
                            "maxValue": "100",
                            "code": "#62B58F"
                        }]
                    },
                    "dials": {
                        "dial": [{
                            "value": "81"
                        }]
                    }
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
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.widgets.js"&gt;&lt;/script&gt;    
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
                width: '450',
                height: '250',
                type: 'angulargauge',
                dataFormat: 'json',
                dataSource: {
                    // Chart Configuration
                    "chart": {
                        "caption": "Nordstrom's Customer Satisfaction Score for 2017",
                        "lowerLimit": "0",
                        "upperLimit": "100",
                        "showValue": "1",
                        "numberSuffix": "%",
                        "theme": "fusion",
                        "showToolTip": "0"
                    },
                    // Chart Data
                    "colorRange": {
                        "color": [{
                            "minValue": "0",
                            "maxValue": "50",
                            "code": "#F2726F"
                        }, {
                            "minValue": "50",
                            "maxValue": "75",
                            "code": "#FFC533"
                        }, {
                            "minValue": "75",
                            "maxValue": "100",
                            "code": "#62B58F"
                        }]
                    },
                    "dials": {
                        "dial": [{
                            "value": "81"
                        }]
                    }
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

That's it! Your first gauge using `vue-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
