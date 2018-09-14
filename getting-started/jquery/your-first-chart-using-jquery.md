---
title: Your First Chart in jQuery using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the jquery-fusioncharts component.
heading: Create a Chart in jQuery using FusionCharts
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **jQuery** plugin which provides bindings for **FusionCharts**. The `jquery-fusioncharts` plugin allows you to easily add rich and interactive charts to any **jQuery** project.

In this page, we'll see how to install FusionCharts and render a chart using the `jquery-fusionCharts` plugin.

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
<pre><code class="custom-hlc language-javascript">
$ npm install jquery-fusioncharts --save
</code></pre>
<div class='mt-20'>2. Install the `fusioncharts` package</div>
<pre><code class="custom-hlc language-javascript">
$ npm install fusioncharts --save
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<div class='mt-30'><strong>To install the FusionCharts package and the `jquery-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include the [jQuery ](https://jquery.com/)core library.</div>
<div class='mt-20'>2. Include the `jquery-fusioncharts` module.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files.</div>
<div class='mt-20'>4. Include the FusionCharts theme file to apply style to the charts.</div>
<pre><code class="custom-hlc language-html">
&lt;head&gt;
    &lt;!-- jQuery --&gt;
    &lt;script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script>
    &lt;!-- FusionCharts --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- jQuery-FusionCharts --&gt;
    &lt;script type="text/javascript" src="https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script>
    &lt;!-- Fusion Theme --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab local-tab'>
<div class='mt-30'><strong>To install the FusionCharts package and the `jquery-fusioncharts` component follow the steps below:</strong></div>
<div class='mt-20'>1. Include the [jQuery ](https://jquery.com/)core library.</div>
<div class='mt-20'>2. Include the `jquery-fusioncharts` module.</div>
<div class='mt-20'>3. Include the <strong>FusionCharts</strong> JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</div>
<div class='mt-20'>4. Include the FusionCharts theme file to apply style to the charts.</div>
<pre><code class="custom-hlc language-html">
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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

That completes the installation of FusionCharts and the `jquery-fusioncharts` plugin.

## Create your First Chart

Let's create a Column 2D chart using the `jquery-fusioncharts` plugin showing the "Countries With Most Oil Reserves". 

FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here ](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart.js %}

The data for the above chart is shown in the table below:


Country|No. of Oil Reserves||
-|-|-
Venezuela|290||
Saudi|260||
Canada|180||
Iran|140||
Russia|115||
UAE|100||
US|30||
China|30||

## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in **JSON** or **XML** format. In this example, we will use the JSON format as shown below:

```javascript
{
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
```

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example,  [single-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination ](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts.

In the above JSON data: 

* Create the `chart` object to define the elements of the chart.

* Specify the `label` and `value` of each column within the `data` array.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have converted the tabular data to JSON format, let's see how to render the chart.

## Render the chart

To render the chart, follow the steps below:

1. Include `jQuery`.

2. Include `jquery-fusioncharts` plugin

3. Include `fusioncharts` core library

4. Include all charts from FusionCharts.

5. Include the FusionCharts theme file to apply style to the charts.

6. Add the FusionCharts and the theme as a dependency to the core.

7. Store the chart configurations in a JSON object. In this JSON object:

    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

    * Set the width and height (in pixels). 

    * Set the `dataFormat` as JSON.

    * Embed the json data as the value of the `dataSource`.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<pre><code class="custom-hlc language-javascript">
var $ = require('jquery');
var FusionCharts = require('fusioncharts');
var jQueryFusionCharts = require('jquery-fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.ocean')

Charts(FusionCharts);
FusionTheme(FusionCharts);

// Render the chart using insertFusionCharts method

$('document').ready(function () {

    $("#chart-container").insertFusionCharts({
        type: "column2d",
        width: "700",
        height: "400",
        dataFormat: "json",
        renderAt:"chart-container",
        dataSource: {
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme":"ocean"
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
    });
});
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>
<div class='tab cdn-tab'>
<pre><code class="custom-hlc language-html">
&lt;html&gt;
    &lt;head&gt;
        &lt;!-- Include jQuery --&gt;
        &lt;script type="text/javascript" src=" https://code.jquery.com/jquery-3.3.1.min.js"&gt;&lt;/script>
        &lt;!-- Include fusioncharts core library file --&gt;
        &lt;script type="text/javascript" src=" http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
        &lt;!-- Include fusion theme file --&gt;
        &lt;script type="text/javascript" src=" http://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
        &lt;!-- Include fusioncharts jquery plugin --&gt;
        &lt;script type="text/javascript" src=" https://rawgit.com/fusioncharts/fusioncharts-jquery-plugin/develop/dist/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script>
    &lt;/head&gt;
    &lt;body&gt;
        &lt;script type="text/javascript"&gt;
            $('document').ready(function () {
                $("#chart-container").insertFusionCharts({
                    type: "column2d",
                    width: "700",
                    height: "400",
                    dataFormat: "json",
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
            });
        &lt;/script&gt;
        &lt;div id="chart-container"&gt;FusionCharts will render here&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab local-tab'>
<pre><code class="custom-hlc language-html">
&lt;html&gt;
    &lt;head&gt;
        &lt;!-- Include jQuery --&gt;
        &lt;script type="text/javascript" src="path/to/local/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
        &lt;!-- Include fusioncharts core library file --&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
        &lt;!-- Include fusion theme file --&gt;
        &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
        &lt;!-- Include fusioncharts jquery plugin --&gt;
        &lt;script type="text/javascript" src="path/to/local/fusioncharts.jqueryplugin.min.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;script type="text/javascript"&gt;
            $('document').ready(function () {
                $("#chart-container").insertFusionCharts({
                    type: "column2d",
                    width: "700",
                    height: "400",
                    dataFormat: "json",
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
            });
        &lt;/script&gt;
        &lt;div id="chart-container"&gt;FusionCharts will render here&lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

That's it! Your first chart using `jquery-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.