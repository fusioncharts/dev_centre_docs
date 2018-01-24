---
permalink: using-with-javascript-libraries/angularjs/introduction.html
title: Introduction to FusionCharts AngularJS Directive | FusionCharts
description: The Angular-FusionCharts directive, along with FusionCharts Suite XT, lets you add interactive JavaScript charts/graphs to your web/mobile apps
heading: Introduction to FusionCharts AngularJS Directive
chartPresent: false
---

FusionCharts Suite XT includes an extensive range of [charts, gauges, and maps](http://www.fusioncharts.com/charts/) that you can use to plot all types of static and real-time data.

The Angular-FusionCharts directive, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single AngularJS directive.

## Downloading the Directive

You can download the Angular-FusionCharts directive from [here](http://www.fusioncharts.com/angularjs-charts/).

## Installing the Angular-FusionCharts Directive

To install the Angular-FusionCharts directive for your applications, follow the steps given below:

### Step 1: Include fusioncharts.js and angular-fusioncharts.js

In your HTML, include the `fusioncharts.js` and the `angular-fusioncharts.js` JavaScript file. The `angular-fusioncharts.js` file should mandatorily be included after all other scripts.

```html

<script type="text/javascript" src="/path/to/fusioncharts.js"></script>
<script type="text/javascript" src="/path/to/angular.js"></script>
<script type="text/javascript" src="/path/to/angular-fusioncharts.js"></script>

```

### Step 2: Include the ng-fusioncharts directive in your module

In the app, include the `ng-fusioncharts` directive as a dependency. If you are looking for where to add the dependency, look for the call to `angular.module` in your code.

```javascript

angular.module("myApp", ["ng-fusioncharts"])

```

### Step 3: Add the fusioncharts directive

In your HTML, find the section where you want to add the chart. Here, define a `<div>` element with the `fusioncharts` directive.

```html
<div ng-controller="MyController">
    <div fusioncharts width="600" height="400" type="column2d" dataSource="">
    </div>
</div>

```

In the snippet above, it is assumed that the chart has to be added inside a controller called **MyController**. This can change based on what you name your controller.

### Step 4: Populate the required variables in the controller

In the above code snippet, the directive is bound to the datasource scope variable. The variable, however, has not been defined yet.

In your controller, set the datasource using the regular FusionCharts JSON format (see [this tutorial](/getting-started/building-your-first-chart) for a general introduction to this format).

```javascript
app.controller('MyController', function($scope) {
    //Define the `myDataSource` scope variable.
    $scope.myDataSource = {
        chart: {
            //Define the chart attributes.
        },
        data: [
            //Define the data labels and data values for the data plots.
        ]
    };
});

```

You are now ready to start creating and customizing your charts using the Angular-FusionCharts directive. Read on to see how.

## Licensing
<p class="text-info">
Angular-FusionCharts is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can [download an evaluation](http://www.fusioncharts.com/download/). You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is [free ](http://www.fusioncharts.com/download/free/)[for non-commercial and personal use](http://www.fusioncharts.com/download/free/)) .

</p>
