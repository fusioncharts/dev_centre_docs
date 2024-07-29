---
title: Lifecycle Events Using AngularJS | FusionCharts
description: This article lists the basic lifestyle events at the time of rendering the chart using AngularJS.
heading: Lifecycle Events Using AngularJS
---

Events are signals that let you execute specific actions (such as sending data to the server using JavaScript) in response to any interaction/update for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates and events.

This article lists the basic lifestyle events at the time of rendering the chart using `angularjs-fusioncharts` component.

## A chart is shown below:

{% embed_chartData lifecycle-event-example-1.js json %}

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
    // datasource
    $scope.myDataSource = {
		"chart": {
			"caption": "Countries With Most Oil Reserves [2017-18]",
			"subCaption": "In MMbbl = One Million barrels",
			"xAxisName": "Country",
			"yAxisName": "Reserves (MMbbl)",
			"numberSuffix": "K",
			"theme": "fusion"
		},
      	"data": [
			{ "label": "Venezuela", "value": "290" },
			{ "label": "Saudi", "value": "260" },
			{ "label": "Canada", "value": "180" },
			{ "label": "Iran", "value": "140" },
			{ "label": "Russia", "value": "115" },
			{ "label": "UAE", "value": "100" },
			{ "label": "US", "value": "30" },
			{ "label": "China", "value": "30"}
		]
    };
    // handler for rendercomplete event
    $scope.renderComplete = function(){
    	$scope.$apply(function(){
        	$scope.message = "render complete";
      	});
    }
    // handler for drawcomplete event
    $scope.drawComplete = function(){
    	$scope.$apply(function(){
        	$scope.message = "draw complete";
      	});
    }
    // handler for beforedataupdate event
    $scope.beforeDataUpdate = function(){
    	$scope.$apply(function(){
        	$scope.message = "before data update";
      	});
    }
    // handler for dataupdated event
    $scope.dataUpdated = function(){
      	$scope.$apply(function(){
        	$scope.message = "data updated";
      	});
    }
}]);
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
  <div ng-controller="MyController">
  <!--Listen to FusionCharts events by using "fcevent-<fc-event-name>" attribute. In this case the event name is rendered-->   
    <fusioncharts type="column2d" 
      width="700" 
      height="400" 
      dataFormat="json" 
      fcevent-rendered="renderComplete()" 
      fcevent-beforedataupdate="beforeDataUpdate()"
      fcevent-dataupdated="dataUpdated()"
      fcevent-drawcomplete="drawComplete()"
      datasource="{{myDataSource}}"></fusioncharts>
    <p style="padding: 10px; background: #f5f2f0"><b>Status: </b>{{message}}</p>
  </div>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a variable (`myApp`).

4. Set the `message` and its styling which gets displayed while rendering the chart.

5. Store the data source in a variable (`dataSource`).

6. Check that the handler for each of the following events is updated:
	* `rendercomplete`.
	* `drawcomplete`.
	* `beforedataupdate`.
	* `dataupdated`.

7. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels.
    * Embed the JSON data as the value of `dataSource`.

8. Create a `<p>` to display the list of events.
