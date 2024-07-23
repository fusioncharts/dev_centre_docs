---
title: Apply Different Themes Using AngularJS | FusionCharts
description: This article will showcase how to apply different themes to the chart at runtime.
heading: Apply Different Themes Using AngularJS
---

## FusionCharts Suite XT ships with the following predefined themes:

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)
* `gammel` (since v3.13.0)
* `candy` (since v3.13.0)
* `zune`
* `ocean`
* `carbon`
* `umber` (since v3.13.5)

This article focuses on how you can apply different themes to the chart at runtime using the `angularjs-fusioncharts` component. Click any radio button to see how the look and feel of the chart changes with each theme.

A chart configured to change the theme is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

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

// Require Themes
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
var GammelTheme = require('fusioncharts/themes/fusioncharts.theme.gammel');
var CandyTheme = require('fusioncharts/themes/fusioncharts.theme.candy');
var ZuneTheme = require('fusioncharts/themes/fusioncharts.theme.zune');
var OceanTheme = require('fusioncharts/themes/fusioncharts.theme.ocean');
var CarbonTheme = require('fusioncharts/themes/fusioncharts.theme.carbon');

// Initialize Charts with FusionCharts instance
Charts(FusionCharts);

// Initialize FusionTheme with FusionCharts instance
FusionTheme(FusionCharts);

var myApp = angular.module("myApp", ["ng-fusioncharts"]);
myApp.controller("MyController", ["$scope", function($scope){
	var chart;
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
	$scope.selectedTheme = "fusion";
	// initialized event handler
	$scope.initialized = function(chartObj){
		// store the reference of chart instance for further usage
		chart = chartObj;
	};
	$scope.applyTheme = function(e){
		chart.setChartAttribute('theme', e.target.value);
	}
}]);
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
  <div ng-controller="MyController"> 
      <div id="chart-container">
          <fusioncharts type="column2d" width="100%" height="500" dataFormat="json" initialized="initialized(chart)" datasource="{{myDataSource}}"></fusioncharts>
      </div>
      <div style='position:relative;bottom:2px;text-align:center'>
        <span id="select-text">Choose a theme:</span>
        <div class="change-type">
            <div>
                <input type="radio" value="fusion" id="fusion_theme_button" ng-click="applyTheme($event)" ng-model="selectedTheme"/>
                <label for="fusion_theme_button">Fusion</label>
            </div>
            <div>
                <input type="radio" value="gammel" id ="gammel_theme_button" ng-click="applyTheme($event)" ng-model="selectedTheme"/>
                <label for="gammel_theme_button">Gammel</label>
            </div>
            <div>
                <input type="radio" value="candy" id="candy_theme_button" ng-click="applyTheme($event)" ng-model="selectedTheme"/>
                <label for="candy_theme_button">Candy</label>
            </div>
            <div>
                <input type="radio" value="zune" id="zune_theme_button" ng-click="applyTheme($event)" ng-model="selectedTheme"/>
                <label for="zune_theme_button">Zune</label>
            </div>
            <div>
                <input type="radio" value="ocean" id="ocean_theme_button" ng-click="applyTheme($event)" ng-model="selectedTheme"/>
                <label for="ocean_theme_button">Ocean</label>
            </div>
            <div>
                <input type="radio" value="carbon" id="carbon_theme_button" ng-click="applyTheme($event)" ng-model="selectedTheme"/>
                <label for="carbon_theme_button">Carbon</label>
            </div>
            <div>
                <input type="radio" value="umber" id="umber_theme_button" ng-click="applyTheme($event)" ng-model="selectedTheme"/>
                <label for="umber_theme_button">Umber</label>
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

4. Create a handler to initialize events.
	* `initialized` to store the reference of the chart instance for further usage.
	* `applyTheme` to update the `theme` at runtime.

5. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and the height (in pixels).
    * Set the `dataFormat` as `json`.
	  * Embed the JSON data from `dataSource`.

6. Create radio buttons for **Fusion**, **Gammel**, **Candy**, **Zune**, **Ocean**, **Carbon**, and **Umber** in the chart using the `<input>` tag.
