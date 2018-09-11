---
title: Your First Chart using Plain JS | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the plain javascript.
heading: Your First Chart using Plain JS
---

**FusionCharts Suite XT** — the industry's most comprehensive JavaScript charting solution — is all about easing the whole process of data visualization through charts.

In this page, we'll see how to install **FusionCharts** library and all the other dependencies on your system and render a chart.

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
<pre><code class="custom-hlc language-PowerShell">
    $ npm install fusioncharts
</code></pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<div><strong>To install the **FusionCharts** package follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the **FusionCharts** JavaScript files from CDN.</li>
        <li>Include the theme file.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="custom-hlc language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script &gt;
    &lt;!-- Step 2 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.theme.fusion.js"&gt;&lt;/script &gt;
&lt;/head&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab localfiles-tab'>
<div><strong>To install the **FusionCharts** package follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the **FusionCharts** JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</li>
        <li>Include the FusionCharts theme file to apply the style to the charts.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="custom-hlc language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

That completes the installation of FusionCharts package.

## Create your first chart

Let's create a Column 2D chart showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart-example-1.js %}

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

```json
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

> Different types of charts in FusionCharts expect different JSON formats, based on their grouping. Explore different JSON formats, for example,  [single-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts),[multi-series](https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-series-charts), [combination](https://www.fusioncharts.com/dev/chart-guide/standard-charts/combination-charts) charts. 

In the above JSON data: 

* Create the `chart` object to define the elements of the chart.

* Specify the `label` and `value` of each column within the `data` array.

Both the chart object and the data array contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the chart.

Now that you have converted the tabular data to JSON format, let's see how to render the chart.

## Render the chart

To render the chart, follow the steps below:

1. Include the `fusioncharts` library

2. Include the chart type

3. Include the FusionCharts theme file to apply the style to the charts

4. Add the chart and the theme as a dependency to the core

5. Store the chart configurations in a JSON object. In this JSON object:
    * Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height (in pixels). 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of the `dataSource`.

6. Each chart in the page needs a container to reside in. Add a `<div>` element as a container for the chart.

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
<div class='pb-20'>FusionCharts ES module</div>
<div class='pb-20'>FusionCharts CJS module</div>
<div  class='mt-30'><strong>The installation steps for both the modules are shown below:</strong></div>
<h4>ES6</h4>
<pre><code class="custom-hlc language-javascript">
// Include the core fusioncharts file from core  -
import FusionCharts from 'fusioncharts/core';

// Include the chart from viz folder
// E.g. - import ChartType from fusioncharts/viz/[ChartType]
import Column2D from 'fusioncharts/viz/column2d';
    
// Add the chart as dependency
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(Column2D);
    
// Create an Instance with chart options
var chartInstance = new FusionCharts({
    type: 'Column2D',
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    renderAt:'chart-container', //container where the chart will render
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
</code></pre>
<h4>CJS</h4>
<pre><code class="custom-hlc language-javascript">
var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
Charts(FusionCharts);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
    type: 'Column2D',
    renderAt: 'chart-container',
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
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
</code></pre>
<div class='mt-30'><strong>To include the specific chart types, individually add the following files using `require`</strong></div>
<ol>
    <li>var PowerCharts = require('fusioncharts/fusioncharts.powercharts'); (for `PowerCharts`)</li>
    <li>var Widgets = require('fusioncharts/fusioncharts.widgets'); (for `Widgets`)</li>
    <li>var Gantt = require('fusioncharts/fusioncharts.gantt'); (for `Gantt` Chart)</li>
    <li>var Treemap = require('fusioncharts/fusioncharts.treemap'); (for `Treemap`)</li>
    <li>var Zoomscatter = require('fusioncharts/fusioncharts.zoomscatter'); (for `ZoomScatter`)</li>
    <li>var Zoomline = require('fusioncharts/fusioncharts.zoomline'); (for `Zoomline`)</li>
    <li>var OverlappedBar2d = require('fusioncharts/fusioncharts.overlappedbar2d'); (for `Overlapped Bar 2D`)</li>
    <li>var Overlappedcolumn2d = require('fusioncharts/fusioncharts.overlappedcolumn2d'); (for `Overlapped Column 2D`)</li>
</ol>

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<pre><code class="custom-hlc language-javascript">
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My first chart using FusionCharts Suite XT&lt;/title&gt;
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>


<div class='tab localfiles-tab'>
<pre><code class="custom-hlc language-javascript">
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My first chart using FusionCharts Suite XT&lt;/title&gt;
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

That's it! Your first chart using Plain JavaScript is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.

























## Create your first chart

In this section, we will create a chart using the FusionCharts Suite XT library. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/list-of-charts).

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a **Column 2D** chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

The data for this chart is represented in the table below:

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

### Convert tabular data into JSON format

FusionCharts accepts data in JSON or XML format. In this section, we will convert the tabular data into JSON format. The converted format is shown below:

> There are different JSON formats for different groups of charts in FusionCharts - e.g., [single-series]({% site.baseurl %}/chart-guide/standard-charts/line-area-and-column-charts), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts), etc.

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

In the above JSON we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contain a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels or data values. You can also set chart limits and extended properties. The functional attributes used in the above JSON are:

* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds a prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's JSON data and provided `fusion` theme as its value. Using themes, you can centralize cosmetic and functional properties across various charts in your web application.

#### Cosmetic Attributes

These attributes let you configure chart cosmetics like color, transparency, font size, etc. Since we are using the `fusion` theme to customize the chart's aesthetics, no cosmetic attributes are used in this sample.

For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d).

### Include FusionCharts Suite XT library

To include the FusionCharts Suite XT JavaScript library in your HTML page, use the `<script>` tag. Next, include a theme file to style the chart. The theme used here is called `fusion`, and it is present in the `themes` folder of the downloaded package. Refer to the code below:

```html
<html>
<head>
    <title>My first chart using FusionCharts Suite XT</title>
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>
</html>
```

### Create a container for the chart

Each chart in the page needs a container to reside in. A `<div>` element works well as a container for the chart, as defined below:

```html
<body>
  <div id="chart-container">FusionCharts XT will load here!</div>
</body>

```

Specify a unique ID for the `<div>` container within the web page. The unique ID is used in the chart initialization code to refer to the container.

### Create an instance of the chart

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as a string.

The code to render a chart is given below:

```javascript
FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        type: 'column2d', // The chart type
        renderAt: 'chart-container', // Container of the chart
        width: '700', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
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
```

In the above code:

* We have created an instance of the **Column 2D** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 700x400 pixels using `width` and `height`.
* To specify the data format as JSON, we have set the `dataFormat` parameter to `json`. You can also provide the data in XML format. 
* The JSON data is embedded as the value of the `dataSource` parameter.

That's it! When you run this HTML page now, you should see a chart representing your data.

The full HTML code is shown below:

```html
<html>

<head>
    <title>My first chart using FusionCharts Suite XT</title>
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript">
        FusionCharts.ready(function() {
            var revenueChart = new FusionCharts({
                "type": "column2d",
                "renderAt": "chart-container",
                "width": "700",
                "height": "400",
                "dataFormat": "json",
                "dataSource": {
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
            revenueChart.render();
        })
    </script>
</head>
<body>
    <div id="chart-container">FusionCharts XT will load here!</div>
</body>
</html>
```

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d) for a Column 2D chart.

Now, go on and explore other 95+ chart types that we have at [FusionCharts]({% site.baseurl %}/chart-guide/list-of-charts), or explore the configuration [attributes]({% site.baseurl %}/chart-attributes/?chart=area2d) for different charts.

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple "Nordstorm Customer Satisfaction Index" gauge as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for his customer satisfaction score has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
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
```

### Include FusionCharts Suite XT library

To include the FusionCharts Suite XT JavaScript library in your HTML page, use the `<script>` tag. Next, include a theme file to style the gauge. The theme used here is called `fusion`, and it is present in the `themes` folder of the downloaded package. Refer to the code below:

```html
<html>
<head>
    <title>My first gauge using FusionCharts Suite XT</title>
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
</head>
</html>
```

### Create a container for the gauge

Each gauge in the page needs a container to reside in. A `<div>` element works well as a container for the gauge, as defined below:

```html
<body>
  <div id="chart-container">FusionCharts XT will load here!</div>
</body>
```

Specify a unique ID for the `<div>` container within the web page. The unique ID is used in the chart initialization code to refer to the container.

### Create an instance of the gauge

In this step, we will:

* Create an instance of the gauge type as **angulargauge**.
* Set the width and height (in pixels or %).
* Finally, specify the JSON data for the chart as string.

The code to render a gauge is given below:

```javascript
FusionCharts.ready(function() {
    var csatGauge = new FusionCharts({
        type: 'angulargauge', // Chart type
        renderAt: 'chart-container', // Container
        width: '450', // Width of the chart
        height: '250', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
            // Chart Configuration
            "chart": {
                "caption": "Nordstorm's Customer Satisfaction Score for 2017",
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
}
```

The full HTML code is given below:

```html
<html>

<head>
    <title>My first gauge using FusionWidgets XT</title>
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript">
        FusionCharts.ready(function() {
            var csatGauge = new FusionCharts({
                "type": "angulargauge",
                "renderAt": "chart-container",
                "width": "400",
                "height": "250",
                "dataFormat": "json",
                "dataSource": {
                    // Chart Configuration
                    "chart": {
                        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
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
                csatGauge.render();
            });
        }
    </script>
</head>

<body>
    <div id="chart-container">An angular gauge will load here!</div>
</body>

</html>
```

See the complete list of[ all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge) for an angular gauge.

## Create your first map

In this section, we will create a visualization using the map of **World** showing the **Average annual population growth** across all continents. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for the map is represented in the table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

> In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column. 

However, when you convert the data into a format supported by FusionCharts, the entities are denoted by the `id` key in the `data` object (see the code snippet of the next section). 

For any map visualization, it is important to provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF` and not `AFR`.

We have a detailed [Map Specification Sheets]({% site.baseurl %}/maps/spec-sheets/world) for all the maps that can be rendered using FusionCharts, where you can find the correct `id` of the maps you want to create.


### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
    // Map Configuration
    "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
        }]
    },
    // Source data as JSON --> id represents countries of world.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1"
    }]
}
```

### Create an instance of the map

In this step, we will:

* Create an instance of the map type as **world**.
* Set the **width** and the **height** (in pixels or %).
* Finally specify the JSON data for the chart as string.

The code to render a map is given below:

```javascript
FusionCharts.ready(function () { 
    var  annualPopulation =   new  FusionCharts({
        type: 'world', // Map type
        renderAt: 'chart-container', // Container
        width: '800', // Width of the chart
        height: '550', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
            // Map Configuration
            "chart": {
                "caption": "Average Annual Population Growth",
                "subcaption": " 1955-2015",
                "numbersuffix": "%",
                "includevalueinlabels": "1",
                "labelsepchar": ": ",
                "entityFillHoverColor": "#FFF9C4",
                "theme": "fusion"
            },
            // Aesthetics; ranges synced with the slider
            "colorrange": {
                "minvalue": "0",
                "code": "#FFE0B2",
                "gradient": "1",
                "color": [{
                    "minvalue": "0.5",
                    "maxvalue": "1.0",
                    "color": "#FFD74D"
                }, {
                    "minvalue": "1.0",
                    "maxvalue": "2.0",
                    "color": "#FB8C00"
                }, {
                    "minvalue": "2.0",
                    "maxvalue": "3.0",
                    "color": "#E65100"
                }]
            },
            // Source data as JSON --> id represents countries of world.
            "data": [{
                "id": "NA",
                "value": ".82",
                "showLabel": "1"
            }, {
                "id": "SA",
                "value": "2.04",
                "showLabel": "1"
            }, {
                "id": "AS",
                "value": "1.78",
                "showLabel": "1"
            }, {
                "id": "EU",
                "value": ".40",
                "showLabel": "1"
            }, {
                "id": "AF",
                "value": "2.58",
                "showLabel": "1"
            }, {
                "id": "AU",
                "value": "1.30",
                "showLabel": "1"
            }]
        }
    });
}
```

The full HTML code is given below:

```html
<html>

<head>
    <title>My First map using FusionCharts Suite XT</title>
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript">
        FusionCharts.ready(function() {
            var annualPopulation = new FusionCharts({
                "type": "maps/world",
                "renderAt": "chart-container",
                "width": "800",
                "height": "550",
                "dataFormat": "json",
                "dataSource": {
                    // Map Configuration
                    "chart": {
                        "caption": "Average Annual Population Growth",
                        "subcaption": " 1955-2015",
                        "numbersuffix": "%",
                        "includevalueinlabels": "1",
                        "labelsepchar": ": ",
                        "entityFillHoverColor": "#FFF9C4",
                        "theme": "fusion"
                    },
                    // Aesthetics; ranges synced with the slider
                    "colorrange": {
                        "minvalue": "0",
                        "code": "#FFE0B2",
                        "gradient": "1",
                        "color": [{
                            "minvalue": "0.5",
                            "maxvalue": "1.0",
                            "color": "#FFD74D"
                        }, {
                            "minvalue": "1.0",
                            "maxvalue": "2.0",
                            "color": "#FB8C00"
                        }, {
                            "minvalue": "2.0",
                            "maxvalue": "3.0",
                            "color": "#E65100"
                        }]
                    },
                    // Source data as JSON --> id represents countries of world.
                    "data": [{
                        "id": "NA",
                        "value": ".82",
                        "showLabel": "1"
                    }, {
                        "id": "SA",
                        "value": "2.04",
                        "showLabel": "1"
                    }, {
                        "id": "AS",
                        "value": "1.78",
                        "showLabel": "1"
                    }, {
                        "id": "EU",
                        "value": ".40",
                        "showLabel": "1"
                    }, {
                        "id": "AF",
                        "value": "2.58",
                        "showLabel": "1"
                    }, {
                        "id": "AU",
                        "value": "1.30",
                        "showLabel": "1"
                    }]
                }
            });
            annualPopulation.render();
        });
    </script>
</head>

<body>
    <div id="chart-container">FusionMaps XT will load map here!</div>
</body>

</html>
```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference) for the **World Map**. A list of countries of WORLD, and their respective `id`, can be found at [here]({% site.baseurl %}/maps/spec-sheets/world).

## Problem rendering the chart?

In case there is an error and you are unable to see the chart, check for the following:

* If you don't see the chart rendered on your browser, it might be because some browsers do not allow JavaScript files to be loaded and run from the local file system. In such cases, either try a different browser, or create a local/remote server and provide the webpages containing the charts from the server.

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a `Loading Data` or `Error in Loading Data` message, check whether your JSON data structure is correct, or if there are conflicts related to quotation marks in your code.