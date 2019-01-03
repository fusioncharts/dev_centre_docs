---
title: Working with APIs | FusionCharts
description: This article talks about the APIs using AngularJS.
heading: Working with APIs
---

The FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

FusionCharts `chart instance` is available using initialized event. It provides the `chart instance` as a parameter which can be used to call FusionCharts methods.

In template, we add initialized event as shown below:

```
<fusioncharts
	width="700"
	height="400"
	type="column2d"
	datasource="{{myDataSource}}"
	initialized="onInitialized(chart)">
</fusioncharts>
<button ng-click="changeCaption()">Change Chart Caption</button>
```

To use the above chart instance, save it as shown in the code below:

```
var app = angular.module('myApp', ['ng-fusioncharts']);

app.controller('MyController', function($scope) {
    var chart;
    $scope.datasource = {
        ... // same data as above
    };

    $scope.onInitialized = function(chartObj) {
        chart = chartObj;
    }

    $scope.changeCaption = function() {
        chart.setChartAttribute('caption', 'Caption changed');
    }
});
```

In the above code example, clicking the button will change the caption text to **Catpion changed**.

Click [here](/api/fusioncharts/fusioncharts-methods) to get the list of FusionCharts' methods.