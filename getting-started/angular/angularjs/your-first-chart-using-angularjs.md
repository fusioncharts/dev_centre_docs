---
title: Create a Chart in AngularJS | FusionCharts
description: This article outlines the steps to create your first chart, widget and map using the fusionCharts AngularJS component.
heading: Create a Chart in AngularJS Using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **Angularjs** directive which provides bindings for **FusionCharts**. The `angularjs-fusioncharts` directive allows you to easily add rich and interactive charts to any **Angularjs** project.

In this page, we'll see how to install FusionCharts and render a chart using the `angularjs-fusionCharts` directive.

## Installation

Install **FusionCharts** and the `angularjs-fusioncharts` directive using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<div><strong>To install fusioncharts and the `angularjs-fusioncharts` directive via npm follow the steps below:</strong></div>
<div>1. Install `angularjs` core library</div>
<pre><code class="language-javascript">
    $ npm install angular
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div>2. Install `angularjs-fusioncharts`</div>
<pre><code class="language-javascript">
	$ npm install angularjs-fusioncharts
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div>2. Install the `fusioncharts` package</div>
<pre><code class="language-javascript">
    $ npm install fusioncharts
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
<div><strong>To install the FusionCharts package and the `angularjs-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [AngularJS](https://angularjs.org/) core library.
        <li>Include the **FusionCharts** JavaScript files from CDN.</li>
        <li>Include the `angularjs-fusioncharts` directive.</li>
        <li>Include the theme file.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
	&lt;!-- Step 1 - Including AngularJS --&gt;
	&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js"&gt;&lt;/script>
	&lt;!-- Step 2 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Step 3 - Including the angularjs-fusioncharts directive--&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/angularjs-fusioncharts.min.js"&gt;&lt;/script>
    &lt;!-- Step 4 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<div><strong>To install the **FusionCharts** Suite and the `angularjs-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [AngularJS](https://angularjs.org/) core library.
        <li>Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</li>
        <li>Include the `angularjs-fusioncharts` directive.</li>
        <li>Include the FusionCharts theme file to apply style to the charts.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
	&lt;!-- Step 1 - Including AngularJS --&gt;
	&lt;script type="text/javascript" src="path/to/local/angular.min.js"&gt;&lt;/script&gt;
	&lt;!-- Step 2 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 3 - Including the angularjs-fusioncharts directive--&gt;
    &lt;script type="text/javascript" src="path/to/local/angularjs-fusioncharts.min.js"&gt;&lt;/script&gt;
    &lt;!-- Step 4 - Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That completes the installation of FusionCharts and the `angularjs-fusioncharts` directive.

## Create your first chart

Let's create a Column 2D chart using the angularjs-fusioncharts component showing the "Countries With Most Oil Reserves".

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The Column 2D chart is shown below:

{% embed_chart getting-started-your-first-chart-example-1.js %}

To understand the chart components, click [here](/understanding-fusioncharts).

## Chart data

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
    "caption": "Countries With Most Oil Reserves [2017-18]",
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

Now that you have the data in JSON format, let's see how to render the chart.

## Render the chart

To render the chart, follow the steps below:

1. Include `angularjs` using require.

2. Include the `fusioncharts` library.

3. Include `angularjs-fusioncharts` directive.

4. Include `ng-fusioncharts` as a dependency in the application. Call `angular.module()` to add the dependency.

5. Include the chart type.

6. Include the FusionCharts theme file to apply style to the charts.

7. Store the chart configurations in a variable (`myApp`).

8.  Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `<div>`:

- Set the chart type as `column2d`. Each chart type is represented with a unique chart alias. For Column 2D chart, the alias is `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
- Set the width and height (in pixels).
- Embed the json data as the value of the `dataSource`.

The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<pre><code class="language-javascript">
//  Require AngularJS 
var angular = require('angular');

// Require FusionCharts 
var FusionCharts = require('fusioncharts');

// Require angularjs-fusioncharts 
require('angularjs-fusioncharts');

// Require Chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

// Require Fusion theme
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

// Add charts and themes as dependency
Charts(FusionCharts);
FusionTheme(FusionCharts);

var myApp = angular.module('myApp', ['ng-fusioncharts']);

myApp.controller('MyController', ['$scope', function($scope) {
    $scope.dataSource = {
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
            }
        ]
    };
}]);
// Render
chartInstance.render()
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div class='mt-30'><strong>Create an HTML template as shown below:</strong></div>
<pre><code class="language-javascript">
&lt;body ng-app="myApp"&gt;
    &lt;div ng-controller="MyController"&gt;
        &lt;div
        fusioncharts
        width="700"
        height="400"
        type="column2d"
        datasource="{{myDataSource}}"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
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

<div class='tab cdn-tab'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including AngularJS --&gt;
    &lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js"&gt;&lt;/script>
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Including the angularjs-fusioncharts directive--&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/angularjs-fusioncharts@4.0.1/dist/angular-fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
    &lt;script type="text/javascript"&gt;
        var myApp = angular.module('myApp', ['ng-fusioncharts']);
        myApp.controller('MyController', ['$scope', function($scope) {
            // datasource
            $scope.myDataSource = {
                "chart": {
                    "caption": "Countries With Most Oil Reserves [2017-18]",
                    "subCaption": "In MMbbl = One Million barrels",
                    "xAxisName": "Country",
                    "yAxisName": "Reserves (MMbbl)",
                    "numberSuffix": "K",
                    "theme": "fusion",
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
            };
        }]);
    &lt;/script&gt;
&lt;/head&gt;

&lt;body ng-app="myApp"&gt;
&lt;div ng-controller="MyController"&gt;
&lt;div fusioncharts id="my-chart-id" width="700" height="400" type="column2d" dataSource="{{myDataSource}}"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab localfiles-tab'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including AngularJS --&gt;
    &lt;script type="text/javascript" src="path/to/local/angular.min.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Including the angularjs-fusioncharts directive--&gt;
    &lt;script type="text/javascript" src="path/to/local/angular-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusion theme --&gt;
    &lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript"&gt;
        var myApp = angular.module('myApp', ['ng-fusioncharts']);
        myApp.controller('MyController', ['$scope', function($scope) {
            // datasource
            $scope.myDataSource = {
                "chart": {
                    "caption": "Countries With Most Oil Reserves [2017-18]",
                    "subCaption": "In MMbbl = One Million barrels",
                    "xAxisName": "Country",
                    "yAxisName": "Reserves (MMbbl)",
                    "numberSuffix": "K",
                    "theme": "fusion",
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
            };
        }]);
    &lt;/script&gt;
&lt;/head&gt;

&lt;body ng-app="myApp"&gt;
&lt;div ng-controller="MyController"&gt;
&lt;div fusioncharts id="my-chart-id" width="700" height="400" type="column2d" dataSource="{{myDataSource}}"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

That's it! Your first chart using `angularjs-fusioncharts` is ready.

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
