---
title: Create a Chart in AngularJS | FusionCharts
description: This article outlines the steps to create your first chart, widget and map using the fusionCharts AngularJS component.
heading: Create a Chart in AngularJS Using FusionCharts
---

FusionCharts is a JavaScript charting library that lets you create interactive charts, gauges, maps, and dashboards using JavaScript. We have built a simple and lightweight Angularjs directive, which provides bindings for FusionCharts. The `angularjs-fusioncharts` directive allows you to easily add rich and interactive charts to any Angularjs project.

In this page, you will see how to install FusionCharts and render a chart using the `angularjs-fusionCharts` directive.

>This guide is for **Angular v1.7** and below. For **Angular 2** and above, refer to [this guide](https://www.fusioncharts.com/dev/getting-started/angular/angular/your-first-chart-using-angular)

## Prerequisite

In case of including Fusioncharts dependencies from **CDN** or **Local Files**, you can skip this step and get started with the code mentioned in the below steps.

If you choose to install `fusioncharts` package via **npm**, make sure you have Node.js installed in your system. AngularJS requires Node.js version **10.9.0** or later. To check your version, run `node -v` in a terminal/console window. To get Node.js, go to [nodejs.org](https://nodejs.org/).

## Installation and including dependencies

Install **FusionCharts** and the `angularjs-fusioncharts` directive using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
    <li><a data-toggle='npm'>NPM</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab'>

<div><strong>To install fusioncharts and the `angularjs-fusioncharts` directive via npm follow the steps below:</strong></div>
<div>1. Install `angularjs` core library</div>
<pre><code class="language-javascript">
    $ npm install angular@1.7.9
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div>Follow the steps mentioned [here](https://webpack.js.org/guides/getting-started/) to initialize a project through npm.</div>
<div>2. Install `angularjs-fusioncharts` and `fusioncharts` packages</div>
<pre><code class="language-javascript">
	$ npm install angularjs-fusioncharts fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div>After installing the fusioncharts components, you can replace the code in `index.js` file with the code shown in the steps below to create your first chart. Import all the required dependencies to get started.</div>
<pre><code class="language-javascript">
//  Require AngularJS
var angular = require('angular');

// Require FusionCharts
var FusionCharts = require('fusioncharts');

// Require Chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

// Initialize Charts with FusionCharts instance
Charts(FusionCharts);

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab cdn-tab active'>
<div><strong>To install the FusionCharts package and the `angularjs-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [AngularJS](https://angularjs.org/) core library.
        <li>Include the **FusionCharts** JavaScript files from CDN.</li>
        <li>Include the `angularjs-fusioncharts` directive and the theme file.</li>
    </ol>
</div>
<div>The consolidated code which goes into your static **HTML** file is shown below:</div>
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
        <li>Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</li>
        <li>Include the `angularjs-fusioncharts` directive and the theme file to apply style to the charts.</li>
    </ol>
</div>
<div>The consolidated code which goes into your static **HTML** file is shown below:</div>
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

Since we are plotting a single dataset, let us create a column 2D chart with countries as **data labels** along x-axis and No. of oil reserves as **data values** along y-axis. Let us prepare the data for a single-series chart.

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
// Chart Configurations
const dataSource = {
    chart: {
        caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
        subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
        xAxisName: "Country", //Set the x-axis name
        yAxisName: "Reserves (MMbbl)", //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion", //Set the theme for your chart
        },
        // Chart Data - from step 2
        "data": chartData
    }
};
```
> The 'type' attribute in the chartConfigs object signifies the type of chart being rendered. Have a look at different chart types with their aliases [here](/chart-guide/list-of-charts).

## Render the chart

To render the chart, follow the steps given below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
    <li><a data-toggle='npm'>NPM</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab'>

<div class='mt-30'>In `index.js` include the necessary files and import the fusioncharts dependency. The consolidated code is shown below:</div>
<pre><code class="language-javascript">
//  Require AngularJS
var angular = require('angular');

// Require FusionCharts
var FusionCharts = require('fusioncharts');

// Require Chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

// Require Fusion Theme
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

// Initialize Charts with FusionCharts instance
Charts(FusionCharts);

FusionTheme(FusionCharts);
var app = angular.module('myApp', ['ng-fusioncharts']);

//STEP 2 - Chart Data
const chartData = [
    { label: 'Venezuela', value: '290' },
    { label: 'Saudi', value: '260' },
    { label: 'Canada', value: '180' },
    { label: 'Iran', value: '140' },
    { label: 'Russia', value: '115' },
    { label: 'UAE', value: '100' },
    { label: 'US', value: '30' },
    { label: 'China', value: '30' }
];

// STEP 3 - Chart Configurations
const dataSource = {
    chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion",
    },
    // Chart Data - from step 2
    "data": chartData
};

app.controller('MyController', [
'$scope',
 function($scope) {
$scope.dataSource = dataSource;
}
]);
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
<div class='mt-30'>Specify the chart configurations within the `index.html` file.</div>
<div>
    <ul>
        <li>Store the chart configurations in a variable (`myApp`).</li>
        <li>Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`.</li>
    </ul>
</div>

<pre><code class="language-html">
&lt;!doctype html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Getting Started- AngularJS&lt;/title&gt;
    &lt;/head&gt;
    &lt;script src="main.js"&gt;&lt;/script&gt;
        &lt;body ng-app="myApp"&gt;
        &lt;div ng-controller="MyController"&gt;
        &lt;div
            fusioncharts
            width="600"
            height="400"
            type="column2d"
            datasource="{{dataSource}}"&gt;
        &lt;/div&gt;
        &lt;/div&gt;
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
        //STEP 2 - Chart Data
        const chartData = [
            { label: 'Venezuela', value: '290' },
            { label: 'Saudi', value: '260' },
            { label: 'Canada', value: '180' },
            { label: 'Iran', value: '140' },
            { label: 'Russia', value: '115' },
            { label: 'UAE', value: '100' },
            { label: 'US', value: '30' },
            { label: 'China', value: '30' }
        ];

        // STEP 3 - Chart Configurations
        const dataSource = {
            chart: {
                caption: "Countries With Most Oil Reserves [2017-18]",
                subCaption: "In MMbbl = One Million barrels",
                xAxisName: "Country",
                yAxisName: "Reserves (MMbbl)",
                numberSuffix: "K",
                theme: "fusion",
            },
            // Chart Data - from step 2
            "data": chartData
        };
        myApp.controller('MyController', ['$scope', function($scope) {
            // datasource
            $scope.myDataSource = dataSource
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
        //STEP 2 - Chart Data
        const chartData = [
            { label: 'Venezuela', value: '290' },
            { label: 'Saudi', value: '260' },
            { label: 'Canada', value: '180' },
            { label: 'Iran', value: '140' },
            { label: 'Russia', value: '115' },
            { label: 'UAE', value: '100' },
            { label: 'US', value: '30' },
            { label: 'China', value: '30' }
        ];

        // STEP 3 - Chart Configurations
        const dataSource = {
            chart: {
                caption: "Countries With Most Oil Reserves [2017-18]",
                subCaption: "In MMbbl = One Million barrels",
                xAxisName: "Country",
                yAxisName: "Reserves (MMbbl)",
                numberSuffix: "K",
                theme: "fusion",
            },
            // Chart Data - from step 2
            "data": chartData
        };
        myApp.controller('MyController', ['$scope', function($scope) {
            // datasource
            $scope.myDataSource = dataSource
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

## See your Chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `angularjs-fusioncharts` is ready.
