---
title: Change Chart Type at Runtime Using AngularJS | FusionCharts
description: This article will showcase a sample to change the chart type at runtime.
heading: Change Chart Type at Runtime Using AngularJS
---

## A chart configured to change the chart type, is shown below:

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, update chart type at runtime, and events.

This article focuses on how you can change the chart type of the chart at runtime using `angularjs-fusioncharts` component. The chart types used in the sample is:

* Column 2D
* Bar 2D
* Pie 2D

A chart configured to change the chart type, is shown below:

{% embed_chartData change-chart-type-example-1.js json %}

The code to render the above chart is given below:

```
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

// Initialize Charts with FusionCharts instance
Charts(FusionCharts);

// Initialize FusionTheme with FusionCharts instance
FusionTheme(FusionCharts);

var myApp = angular.module("myApp", ["ng-fusioncharts"]);
myApp.controller("MyController", ["$scope", function($scope){
    var chart;
    $scope.chartType = "column2d"; 
    // datasource
    $scope.myDataSource = {
        "chart": {
          "caption": "Recommended Portfolio Split",
          "subCaption": "For a net-worth of $1M",
          "showValues": "1",
          "showPercentInTooltip": "0",
          "numberPrefix": "$",
          "enableMultiSlicing": "1",
          "theme": "fusion"
        },
        "data": [{
          "label": "Equity",
          "value": "300000"
        }, {
          "label": "Debt",
          "value": "230000"
        }, {
          "label": "Bullion",
          "value": "180000"
        }, {
          "label": "Real-estate",
          "value": "270000"
        }, {
          "label": "Insurance",
          "value": "20000"
        }]
    };
    // handler for initialized event
    $scope.initialized = function(chartObj){
        // store the reference of chart instance for further usage
        chart = chartObj;
    };
    $scope.buttonClick = function(e){
        // using the stored chart instance reference to change the chart type
        chart.chartType(e.target.value);
    }
}]);
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
  <div ng-controller="MyController"> 
        <div id="chart-container">
            <!--To get the reference of chart instance listen to initialized event-->
            <fusioncharts
                type="column2d"
                width="700"
                id="id1"
                height=400
                dataFormat="json"
                initialized="initialized(chart)"
                datasource="{{myDataSource}}">
            </fusioncharts>
        </div></br>
        <div style="display: flex; justify-content: center">
            <span>Choose a chart type:</span>
                <div>
                    <div>
                        <input type="radio" value="column2d" id="column_chart_button" ng-click="buttonClick($event)" ng-model="chartType"/>
                        <label for="column_chart_button">Column 2D Chart</label>
                    </div>
                    <div>
                        <input type="radio" value="bar2d" id="bar_chart_button" ng-click="buttonClick($event)" ng-model="chartType"/>
                        <label for="bar_chart_button">Bar 2D Chart</label>
                    </div>
                    <div>
                        <input type="radio" value="pie2d" id="pie_chart_button" ng-click="buttonClick($event)" ng-model="chartType"/>
                        <label for="pie_chart_button">Pie 2D Chart</label>
                    </div>
                </div>
            </span>
        </div>
    </div>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a variable (`myApp`).

4. Create a handler to initialize events.
	* `initialized` to store the reference of the chart instance for further usage.
	* `buttonClick` to use the stored chart instance reference to change the chart type.

5. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and the height (in pixels).
    * Set the `dataFormat` as `json`.
    * Embed the JSON data from `dataSource`.

6. Create radio buttons for **column2d**, **bar2d** and **pie2d** chart using `<input>`.
