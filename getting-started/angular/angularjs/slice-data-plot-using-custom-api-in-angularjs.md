---
title: Slice Data Plot Using API in AngularJS | FusionCharts
description: This article will showcase a sample to slice data plot of the pie chart using chart specific custom API .
heading: Slice Data Plot Using API in AngularJS
---

## The code to render the chart is given below:

FusionCharts Suite XT includes advanced features that offer a wide range of APIs. You can use them in different stages of the life cycle of a chart, or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart-specific custom API. The chart will be rendered using `angular-fusioncharts` component. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

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
myApp.controller("MyController", ["$scope", function($scope) {
    var chart,
        clickedPlot;
    // datasource
    $scope.myDataSource = {
        "chart": {
            "caption": "Market Share of Web Servers",
            "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
            "showLegend": "0",
            "enableMultiSlicing": "0",
            "showPercentValues": "1",
            "legendPosition": "bottom",
            "useDataPlotColorForLabels": "1",
            "theme": "fusion",
        },
        "data": [{
            "label": "Apache",
            "value": "32647479"
        }, {
            "label": "Microsoft",
            "value": "22100932"
        }, {
            "label": "Zeus",
            "value": "14376"
        }, {
            "label": "Other",
            "value": "18674221"
        }]
    };
    // handler for daplotclick event
    $scope.plotClickHandler = function(event) {
        $scope.$apply(function() {
            clickedPlot = (event.data.categoryLabel).toLowerCase();
            if ($scope.selectedItem !== clickedPlot) {
                $scope.selectedItem = clickedPlot;
            } else {
                $scope.selectedItem = 'none';
            }
        });
    };
    // handler for initialzed event
    $scope.initialized = function(chartObj) {
        // store the reference of chart instance for further usage
        chart = chartObj;
    };
    $scope.selectedItem = "none";
    $scope.noneChecked = function() {
        chart.slicePlotItem(0, false);
        chart.slicePlotItem(1, false);
        chart.slicePlotItem(2, false);
        chart.slicePlotItem(3, false);
    }
    $scope.apacheChecked = function() {
        chart.slicePlotItem(0, true);
    }
    $scope.microsoftChecked = function() {
        chart.slicePlotItem(1, true);
    }
    $scope.zeusChecked = function() {
        chart.slicePlotItem(2, true);
    }
    $scope.otherChecked = function() {
        chart.slicePlotItem(3, true);
    }
}]);
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
    <div ng-controller="MyController">
        <!--To get the reference of chart instance listen to initialized event-->
        <div>
            <fusioncharts type="pie2d" width="100%" height="500" dataFormat="json" initialized="initialized(chart)" fcevent-dataplotclick="plotClickHandler(event)" datasource="{{myDataSource}}">
            </fusioncharts>
        </div>
        <div style='position:relative;bottom:2px;text-align:center'>
            <div>
                <div>
                    <input type="radio" value="none" id="none_button" ng-click="noneChecked()" ng-model="selectedItem" />
                    <label for="none_button">None</label>
                </div>
                <div>
                    <input type="radio" value="apache" id="apache_button" ng-click="apacheChecked()" ng-model="selectedItem" />
                    <label for="apache_button">Apache</label>
                </div>
                <div>
                    <input type="radio" value="microsoft" id="microsoft_button" ng-click="microsoftChecked()" ng-model="selectedItem" />
                    <label for="microsoft_button">Microsoft</label>
                </div>
                <div>
                    <input type="radio" value="zeus" id="zeus_button" ng-click="zeusChecked()" ng-model="selectedItem" />
                    <label for="zeus_button">Zeus</label>
                </div>
                <div>
                    <input type="radio" value="other" id="other_button" ng-click="otherChecked()" ng-model="selectedItem" />
                    <label for="other_button">Other</label>
                </div>
            </div>
        </div>
    </div>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a variable (`myApp`).

4. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `pie2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height (in pixels).
    * Set the `dataFormat` as `json`.
    * Embed the JSON data from `dataSource`.

5. Create a handler for `dataPlotClick` event.

6. Create a handler to initialize events.

7. Using `selectedItem` API, set the scope of the data plots in `pie2d` chart.

8. Create radio buttons using `<input>`.
