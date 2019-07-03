---
title: Special Events using AngularJS | FusionCharts
description: This article showcases a draggable column chart with special events.
heading: Special Events using AngularJS
---

FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. For example, you can use events to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically drag the column and see modified value as text using `angularjs-fusioncharts` component.

A drag-able column chart is shown below:

{% embed_chartData special-events-example-1.js json %}

The code to render the above chart is given below:

```
// Require AngularJS 
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
	var datasetName,
    startValue,
    endValue;      
    $scope.myDataSource = {
		"chart": {
	        "caption": "Android and iOS Devices Sales Projections",
	        "subCaption": "Drag the top of columns to adjust projections for 2017 & 2018",
	        "numberPrefix": "$",
	        "numberSuffix": "M",
	        "yaxismaxvalue": "200",
	        "theme": "fusion",
	        "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
      	},
      	"categories": [{
        	"category": [{
          		"label": "2014",
          		"fontItalic": "0"
        	}, {
          		"label": "2015",
          		"fontItalic": "0"
        	}, {
          		"label": "2016",
          		"fontItalic": "0"
        	}, {
          		"label": "2017 (Projected)"
        	}, {
          		"label": "2018 (Projected)"
        	}]
      	}],
      	"dataset": [{
        	"seriesname": "Android Devices",
        	"data": [{
				"value": "73",
				"alpha": "100",
				"allowDrag": "0"
        	}, {
          		"value": "80",
          		"alpha": "100",
          		"allowDrag": "0"
        	}, {
				"value": "97",
				"alpha": "100",
				"allowDrag": "0"
        	}, {
          		"value": "110",
          		"toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
        	}, {
          		"value": "180",
          		"toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
        	}]
      	}, {
        	"seriesname": "iOS Devices",
			"data": [{
				"value": "63.2",
				"alpha": "100",
				"allowDrag": "0"
			}, {
				"value": "68",
				"alpha": "100",
				"allowDrag": "0"
			}, {
				"value": "82",
				"alpha": "100",
				"allowDrag": "0"
			}, {
			  	"value": "99",
			  	"toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
			}, {
			  	"value": "150",
			  	"toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
			}]
		}]
	};
    $scope.message = "Drag any column for years 2017 or 2018 to see updated value along with the label"; 
    $scope.dataPlotDragstart = function(event){
    	startValue = FusionCharts.formatNumber(event.data.startValue, {
			"decimals": "2",
			"numberPrefix": "$",
			"numberSuffix": "M"
        });     
    }
    $scope.dataPlotDragend = function(event){ 
		$scope.$apply(function(){
        	datasetName = event.data.datasetName;
        	endValue = FusionCharts.formatNumber(event.data.endValue,{
				"decimals": "2",
				"numberPrefix": "$",
				"numberSuffix": "M"
         	});
         	$scope.message = `<b>${datasetName}</b> is modified to <b>${endValue}</b> from <b>${startValue}</b>`;
      	});
    }
}]);
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
  	<div ng-controller="MyController">
	  	<!--Listen to FusionCharts events by using "fcevent-<fc-event-name>" attribute. In this case the events used are dataplotdragstart and dataplotdragend-->   
	    <fusioncharts
			type="dragcolumn2d"
			width="700"
			height="400"
			dataFormat="json"
			fcevent-dataplotdragstart="dataPlotDragstart(event)"
			fcevent-dataplotdragend="dataPlotDragend(event)"
			datasource="{{myDataSource}}">
	    </fusioncharts>
	    <p style="font-size:16px;padding:10px;background:#f5f2f0" ng-bind-html="message"></p>
  	</div>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a variable (`myApp`).

4. Store the data source in a variable (`dataSource`).

5. Set the `message` which gets displayed while rendering the chart.

6. `dataPlotDragstart` and `dragPlotDragEnd` event is called to show a message with the dataset's initial value and final value of the dragged column.

7. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels.
    * Embed the JSON data as the value of `dataSource`.

8. Create a `<p>` to display the list of events.