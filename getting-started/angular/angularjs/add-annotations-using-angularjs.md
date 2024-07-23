---
title: Adding Annotations Using AngularJS | FusionCharts
description: This article focuses on different type of configurations possible using angularjs.
heading: Adding Annotations Using AngularJS
---

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while making it visually appealing.

In this article we'll create a **Spline** chart and add annotations using `angularjs-fusioncharts` component. A spline chart using annotations to highlight a particular anchor along with text is shown below:

{% embed_chartData configure-charts-using-react-example-3.js json %}

## The code to render the above chart is given below:

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

// Initialize charts with FusionCharts instance
Charts(FusionCharts);

// Initialize FusionTheme with FusionCharts instance
FusionTheme(FusionCharts);

var myApp = angular.module("myApp", ["ng-fusioncharts"]);
myApp.controller("MyController", ["$scope", function($scope){
	// datasource
	$scope.myDataSource = {
	    "chart": {
	        "caption": "Average Monthly Temperature in Texas",
	        "yAxisName": "Average Monthly Temperature",
	        "anchorradius": "5",
	        "plotToolText": "Average temperature in $label is <b>$dataValue</b>",
	        "showHoverEffect": "1",
	        "showvalues": "0",
	        "numberSuffix": "°C",
	        "theme": "fusion",
	        "anchorBgColor": "#72D7B2",
	        "paletteColors": "#72D7B2"
	    },
	    "data": [{
	        "label": "Jan",
	        "value": "1"
	    }, {
	        "label": "Feb",
	        "value": "5"
	    }, {
	        "label": "Mar",
	        "value": "10"
	    }, {
	        "label": "Apr",
	        "value": "12"
	    }, {
	        "label": "May",
	        "value": "14"
	    }, {
	        "label": "Jun",
	        "value": "16"
	    }, {
	        "label": "Jul",
	        "value": "20"
	    }, {
	        "label": "Aug",
	        "value": "22"
	    }, {
	        "label": "Sep",
	        "value": "20"
	    }, {
	        "label": "Oct",
	        "value": "16"
	    }, {
	        "label": "Nov",
	        "value": "7"
	    }, {
	        "label": "Dec",
	        "value": "2"
	    }]
	};
	// annotations object
	$scope.annotations = {{
		"groups": [{
	        "id": "anchor-highlight",
	        "items": [{
	            "id": "high-star",
	            "type": "circle",
	            "x": "$dataset.0.set.7.x",
	            "y": "$dataset.0.set.7.y",
	            "radius": "12",
	            "color": "#cc0000",
	            "border": "2",
	            "borderColor": "#0075c2"
	        }, {
	            "id": "label",
	            "type": "text",
	            "text": "Hottest Month",
	            "fillcolor": "#0075c2",
	            "rotate": "90",
	            "x": "$dataset.0.set.7.x+75",
	            "y": "$dataset.0.set.7.y-2"
	        }]
	    }]
	};
}]);
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
  <div ng-controller="MyController"> 
    <!--Add annotations to the chart through annotations attribute-->
    <fusioncharts
        type="spline"
        width="700"
        height="400"
        annotations="{{annotations}}"
        dataFormat="json"
        datasource="{{myDataSource}}">
    </fusioncharts>
  </div>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a variable (`myApp`).

4. In the `dataSource`, create an `annotations` object to specify the cosmetics and functionalities of the annotation.

5. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `spline`. For Spline chart, the alias is `spline`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and the height (in pixels).
    * Embed the annotations from `annotations` object.
    * Set the `dataFormat` as `json`.
	* Embed the JSON data from `dataSource`.
