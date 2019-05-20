---
title: Create a Gauge using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the plain javascript.
heading: Create a Gauge using FusionCharts
---

**FusionCharts Suite XT** — the industry's most comprehensive JavaScript charting solution — is all about easing the whole process of data visualization through charts.

In this page, we'll see how to install **FusionCharts** library and all the other dependencies on your system and render a gauge using Plain JavaScript.

## Installation

Install **FusionCharts** using any of the following steps:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<div><strong>To install the `fusioncharts` package via  npm run the command below:</strong></div>
<pre><code class="language-PowerShell">
    $ npm install fusioncharts
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
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
    &lt;!-- Step 1 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Step 2 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<div><strong>To install the **FusionCharts** Suite follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</li>
        <li>Include the FusionCharts theme file to apply style to the charts.</li>
    </ol>
</div>
<div>The code is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That completes the installation of **FusionCharts** Suite.

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial or linear scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The angular gauge is shown below:

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

## Render the gauge

To render the gauge, follow the steps below:

1. Include the `fusioncharts` library.

2. Include the gauge type.

3. Include the FusionCharts theme file to apply style to the charts.

4. Add the gauge and the theme as a dependency to the core.

5. Store the chart configurations in a JSON object. In this JSON object:

   - Set the chart type as `angulargauge`. Each chart type is represented with a unique chart alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of gauge types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts#fusionwidgets-xt).
   - Set the width and height (in pixels).
   - Set the `dataFormat` as JSON.
   - Embed the json data as the value of the `dataSource`.

6. Add a container (instance) for the gauge.

The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<div class='mt-30'><strong>The `fusioncharts` package for `npm` can now be used in two different ways:</strong></div>
<ul>
    <li>FusionCharts ES module</li>
    <li>FusionCharts CJS module</li>
</ul>
<div  class='mt-30'><strong>The steps to render the gauge for both the modules are shown below:</strong></div>
<h4>ES6</h4>
<pre><code class="language-javascript">
// Include the core fusioncharts file from core  -
import FusionCharts from 'fusioncharts/core';

// Include the gauge from viz folder
// E.g. - import ChartType from fusioncharts/viz/[ChartType]
import AngularGauge from 'fusioncharts/viz/angulargauge';

// Include the fusion theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

// Include the ExcelExport
import ExcelExport from 'fusioncharts/features/excelexport';

// Add the gauge, theme and ExcelExport as dependency
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(AngularGauge);
FusionCharts.addDep(FusionTheme);
FusionCharts.addDep(ExcelExport);

// Create an Instance with chart options
var gaugeInstance = new FusionCharts({
type: 'angulargauge', // The gauge type
width: '450', // Width of the gauge
height: '250', // Height of the gauge
dataFormat: 'json', // Data type
renderAt:'chart-container', //container where the chart will render
dataSource: {
// Gauge Configuration
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
// Render
gaugeInstance.render();
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
<h4>CJS</h4>
<pre><code class="language-javascript">
var FusionCharts = require('fusioncharts');

// Require widgets from fusioncharts
var Widgets = require('fusioncharts/fusioncharts.widgets');

// Require theme from fusioncharts
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

// Require ExcelExport module from fusioncharts
var ExcelExport = require('fusioncharts/fusioncharts.excelexport');

// Add widgets, themes and ExcelExport as dependency
Widgets(FusionCharts);
FusionTheme(FusionCharts);
ExcelExport(FusionCharts);

// Create an Instance with chart options
var gaugeInstance = new FusionCharts({
type: 'angulargauge', // The gauge type
width: '450', // Width of the gauge
height: '250', // Height of the gauge
dataFormat: 'json', // Data type
renderAt:'chart-container', //container where the chart will render
dataSource: {
// Gauge Configuration
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
// Render
gaugeInstance.render();
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab cdn-tab'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My first gauge using FusionWidgets XT&lt;/title&gt;
    &lt;!-- Include fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Include fusion theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
    &lt;script type="text/javascript"&gt;
        FusionCharts.ready(function() {
            var csatGauge = new FusionCharts({
                "type": "angulargauge",
                "renderAt": "chart-container",
                "width": "450",
                "height": "250",
                "dataFormat": "json",
                "dataSource": {
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
            csatGauge.render();
        });
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="chart-container"&gt;An angular gauge will load here!&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My first gauge using FusionWidgets XT&lt;/title&gt;
    &lt;!-- Include fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Include fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript"&gt;
        FusionCharts.ready(function() {
            var csatGauge = new FusionCharts({
                "type": "angulargauge",
                "renderAt": "chart-container",
                "width": "450",
                "height": "250",
                "dataFormat": "json",
                "dataSource": {
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
            csatGauge.render();
        });
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="chart-container"&gt;An angular gauge will load here!&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! Your first gauge using Plain JavaScript is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
