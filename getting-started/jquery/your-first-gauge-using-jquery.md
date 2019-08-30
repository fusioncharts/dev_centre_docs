---
title: Create a Gauge in jQuery | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the jquery-fusioncharts component.
heading: Create a Gauge in jQuery Using FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **jQuery** plugin which provides bindings for **FusionCharts**. The `jquery-fusioncharts` plugin allows you to easily add rich and interactive charts to any **jQuery** project.

In this page, we'll see how to install FusionCharts and render a gauge using the `jquery-fusionCharts` plugin.

## Installation

Install **FusionCharts** and the `jquery-fusioncharts` plugin using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<div class='mt-30'><strong>To install FusionCharts and the `jquery-fusioncharts` plugin via npm follow the steps below:</strong></div>
<div class='mt-20'>Install the `jquery-fusioncharts` plugin</div>
<pre><code class="language-javascript">
$ npm install jquery-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div class='mt-20'>2. Install the `fusioncharts` package</div>
<pre><code class="language-javascript">
$ npm install fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
<div class='tab cdn-tab'>
<div class='mt-30'><strong>To install the FusionCharts package and the `jquery-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include the [jQuery ](https://jquery.com/)core library.</div>
<div class='mt-20'>2. Include the `jquery-fusioncharts` module.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files.</div>
<div class='mt-20'>4. Include the FusionCharts theme file to apply style to the charts.</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- jQuery --&gt;
    &lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script>
    &lt;!-- FusionCharts --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- jQuery-FusionCharts --&gt;
    &lt;script type="text/javascript" src="https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script>
    &lt;!-- Fusion Theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
<div class='tab local-tab'>
<div class='mt-30'><strong>To install the FusionCharts package and the `jquery-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include the [jQuery ](https://jquery.com/)core library.</div>
<div class='mt-20'>2. Include the `jquery-fusioncharts` module.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</div>
<div class='mt-20'>4. Include the FusionCharts theme file to apply style to the charts.</div>
<pre><code class="language-html">
&lt;head&gt;
        &lt;!-- jQuery --&gt;
        &lt;script type="text/javascript" src="path/to/local/jquery.min.js"&gt;&lt;/script&gt;
        &lt;!-- FusionCharts --&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;!-- jQuery-FusionCharts --&gt;
        &lt;script type="text/javascript" src="path/to/local/jquery-fusioncharts.js"&gt;&lt;/script&gt;
        &lt;!-- Fusion Theme --&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

That completes the installation of FusionCharts and the `jquery-fusioncharts` plugin.

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data, and a dial to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple "Nordstrom Customer Satisfaction Index" gauge as shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart data

The thresholds for the above sample is shown in the table below:

| Range | Color | Hex Code |
| ----- | ----- | -------- ||
| 0-50 | Red | #F2726F |
| 50-75 | Yellow | #FFC533 |
| 75-100 | Green | #62B58F |

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

## Render the Gauge

To render the gauge, follow the steps below:

1. Include `jQuery`.

2. Include `jquery-fusioncharts` plugin.

3. Include `fusioncharts` core library.

4. Include all gauges from Widgets.

5. Include the FusionCharts theme file to apply the style to the gauge.

6. Add the widgets and the theme as a dependency to the core.

7. Store the chart configurations in a JSON object. In this JSON object:

   - Set the chart type as `angulargauge`. Each gauge type is represented with a unique gauge alias. For Angular gauge, the alias is `angulargauge`. Find the complete list of gauge types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts#fusionwidgets-xt).

   - Set the width and height (in pixels).

   - Set the `dataFormat` as JSON.

   - Embed the json data as the value of the `dataSource`.

8. Add a container (instance) for the chart.

The consolidated code is given below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<pre><code class="language-javascript">
var $ = require('jquery');
var FusionCharts = require('fusioncharts');
var jQueryFusionCharts = require('jquery-fusioncharts');
var Widgets = require('fusioncharts/fusioncharts.widgets');
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
Widgets(FusionCharts);
FusionTheme(FusionCharts);
// Render the chart using insertFusionCharts method
$('document').ready(function () {

\$("#chart-container").insertFusionCharts({

    type: 'angulargauge', // Chart type
    renderAt: 'chart-container', // Container
    width: '450', // Width of the chart
    height: '250', // Height of the chart
    dataFormat: 'json', // Data Type
    dataSource: {
      // Chart Configuration
      "chart": {
        "caption": "Nordstrom's Customer Satisfaction Score for 2017",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "1",
        "numberSuffix": "%",
        "theme": "fusion",
        "showToolTip": "0",
        "theme": "fusion"
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

})
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
<div class='tab cdn-tab'>
<pre><code class="language-html">
&lt;html&gt;
    &lt;head&gt;
        &lt;!-- Include jQuery --&gt;
        &lt;script type="text/javascript" src=" https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script>
        &lt;!-- Include fusioncharts core library file --&gt;
        &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
        &lt;!-- Include fusion theme file --&gt;
        &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
        &lt;!-- Include fusioncharts jquery plugin --&gt;
        &lt;script type="text/javascript" src=" https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script>
    &lt;/head&gt;
    &lt;body&gt;
        &lt;script type="text/javascript"&gt;
            $('document').ready(function () {
                $("#chart-container").insertFusionCharts({
                    type: "angulargauge",
                    width: "450",
                    height: "250",
                    dataFormat: "json",
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
                });
            });
        &lt;/script&gt;
        &lt;div id="chart-container"&gt;FusionCharts will render here...&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
<div class='tab local-tab'>
<pre><code class="language-html">
&lt;html&gt;
    &lt;head&gt;
        &lt;!-- Include jQuery --&gt;
        &lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
        &lt;!-- Include fusioncharts core library file --&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;!-- Include fusion theme file --&gt;
        &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;!-- Include fusioncharts jquery plugin --&gt;
        &lt;script type="text/javascript" src="https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;script type="text/javascript"&gt;
            $('document').ready(function () {
                $("#chart-container").insertFusionCharts({
                    type: "angulargauge",
                    width: "450",
                    height: "250",
                    dataFormat: "json",
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
                });
            });
        &lt;/script&gt;
        &lt;div id="chart-container"&gt;FusionCharts will render here&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! Your first gauge using `jquery-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
