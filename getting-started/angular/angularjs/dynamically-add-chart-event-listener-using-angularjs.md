---
title: Dynamically Add Chart Event Listener Using AngularJS | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using AngularJS.
heading: Dynamically Add Chart Event Listener Using AngularJS
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates and option to add/remove events at runtime.

Events are signals that let you execute specific actions - such as manipulate the DOM, send data to the server, etc., using JavaScript, in response to any interaction/update of a chart. For example, you can use events to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart using `angularjs-fusioncharts` component.

A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

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
    var disableStyle = {
        "border-color": "#d3d3d3",
        "color": "#d3d3d3",
        "background": "none",
        "cursor": "default"
    },
    activeStyle = {
        "border-color": "#6957da",
        "cursor": "pointer"
    };
    $scope.message = "Click the below buttons to add an event dynamically to the chart";
    $scope.myDataSource = {
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
        }]
    };
    $scope.trackButton = activeStyle;
    $scope.resetButton = disableStyle;

    // handler for dataplotclick event
    $scope.clickHandler = function(e) {
        $scope.$apply(function() {
            $scope.message = "You have clicked on plot <b>" + e.data.categoryLabel + "</b> whose value is <b>" + e.data.displayValue + "</b>";
        });
    };
    $scope.track = function() {
        FusionCharts.addEventListener("dataplotclick", $scope.clickHandler);
        $scope.message = "Click on the plot to see the value along with the label";
        $scope.trackButton = disableStyle;
        $scope.resetButton = activeStyle;
    };
    $scope.reset = function() {
        FusionCharts.removeEventListener("dataplotclick", $scope.clickHandler);
        $scope.message = "Click the below buttons to add an event dynamically to the chart";
        $scope.trackButton = activeStyle;
        $scope.resetButton = disableStyle;
    }
    // unlisten to dataplotclick event when the view gets destroyed.
    $scope.$on("$destroy", function() {
        FusionCharts.removeEventListener("dataplotclick", $scope.clickHandler);
    });
}]);
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
	<div ng-controller="MyController"> 
    	<div id="chart-container">
			<fusioncharts
				type="column2d"
				width="100%"
				height="500"
				dataFormat="json"
				datasource="{{myDataSource}}">
			</fusioncharts>
      	</div>
      	<p ng-bind-html="message" style="padding: 10px; background: #f5f2f0"></p>
      	<div style="display: flex; justify-content: center">
			<a ng-click="track()" ng-style="trackButton">LISTEN TO DATAPLOTCLICK EVENT</a>
			<a ng-click="reset()" ng-style="resetButton">REMOVE DATAPLOTCLICK EVENT</a>
      	</div>
  	</div>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a variable (`myApp`).

4. Set the `message` and its styling, which get displayed while rendering the chart.

5. Store the data source in a variable (`dataSource`).

6. Set the scope for the buttons.

7. Add the `addEventListener` to: 
	* Track plot clicks.
	* Track the clicks on the data plot.
	* Set the default message when data plot tracking is enabled.
	* Set the event listener for `dataPlotClick` event when the message is updated with the values of the data plot.
	* Set the  handler for **Reset** button. The **Reset** button resets the chart to default message and removes the event listener.

8. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and the height of the chart in pixels.
    * Embed the JSON data from `dataSource`.

9. Create a `<div>` to add **buttons** using `<a>`.