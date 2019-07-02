---
title: Create a Gauge in AngularJS | FusionCharts
description: This article outlines the steps to create your first gauge, widget and map using the fusionCharts AngularJS component.
heading: Create a Gauge in AngularJS Using FusionCharts
---

FusionCharts is a JavaScript charting library that lets you create interactive charts, gauges, maps, and dashboards using JavaScript. We have built a simple and lightweight **Angularjs** directive, which provides bindings for **FusionCharts**. The `angularjs-fusioncharts` directive allows you to easily add rich and interactive charts to any **Angularjs** project.

In this page, you will see how to install FusionCharts and render a gauge using the `angularjs-fusionCharts` directive.

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

## Create Your First Gauge

Gauges are powerful tools that can showcase information using a radial or linear scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart Data

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

1. Include `angularjs`.

2. Include the `fusioncharts` library.

3. Include `angularjs-fusioncharts` directive.

4. Include `ng-fusioncharts` as a dependency in the application. Call `angular.module()` to add the dependency.

5. Include all gauges from Widgets.

6. Include the FusionCharts theme file to apply the style to the charts.

7. Add the chart and theme as a dependency to the core.

8. Store the chart configurations in a variable (`myApp`).

9.  Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. The the `<div>`:

- Set the chart type as `angulargauge`. Each chart type is represented with a unique chart alias. For Angular Gauge chart, the alias is `angulargauge`. Find the complete list of gauge types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts#fusionwidgets-xt).
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
var Widgets = require('fusioncharts/fusioncharts.widgets');

// Require Fusion theme
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

// Add widgets and themes as dependency
Widgets(FusionCharts);
FusionTheme(FusionCharts);

var myApp = angular.module('myApp', ['ng-fusioncharts']);

myApp.controller('MyController', ['$scope', function($scope) {
    $scope.dataSource = {
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
        width="450"
        height="250"
        type="angulargauge"
        datasource="{{myDataSource}}"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including AngularJS --&gt;
    &lt;script type="text/javascript" src=" https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js"&gt;&lt;/script>
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Including the angularjs-fusioncharts directive--&gt;
    &lt;script type="text/javascript" src=" https://unpkg.com/angularjs-fusioncharts@4.0.1/dist/angular-fusioncharts.js"&gt;&lt;/script>
    &lt;!-- Including the fusion theme --&gt;
    &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
    &lt;script type="text/javascript"&gt;
        var myApp = angular.module('myApp', ['ng-fusioncharts']);
        myApp.controller('MyController', ['$scope', function($scope) {
            $scope.myDataSource = {
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
            };
        }]);
    &lt;/script&gt;
&lt;/head&gt;

&lt;body ng-app="myApp"&gt;
&lt;div ng-controller="MyController"&gt;
&lt;div fusioncharts id="my-chart-id" width="450" height="250" type="angulargauge" dataSource="{{myDataSource}}"&gt;
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
            $scope.myDataSource = {
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
            };
        }]);
    &lt;/script&gt;
&lt;/head&gt;

&lt;body ng-app="myApp"&gt;
&lt;div ng-controller="MyController"&gt;
&lt;div fusioncharts id="my-chart-id" width="450" height="250" type="angulargauge" dataSource="{{myDataSource}}"&gt;
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

## Problem Rendering the Chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
