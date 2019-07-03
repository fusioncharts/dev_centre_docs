---
title: Configuring Your Chart Using AngularJS | FusionCharts
description: This article focuses on different type of configurations possible using AngularJS.
heading: Configuring Your Chart Using AngularJS
---

FusionCharts Suite XT includes advanced features that let you add context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `angularjs-fusioncharts` component:

* [Update Chart Data](/getting-started/angular/angularjs/configure-your-chart-using-angularjs#update-chart-data)
* [Update Chart Attributes](/getting-started/angular/angularjs/configure-your-chart-using-angularjs#update-chart-attributes)

## Update Chart Data

A chart configured to dynamically update data values is shown below (click **Update Chart Data** to start):

{% embed_chartData configure-charts-using-angular-example-1.js json %}

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

var myApp = angular.module('myApp', ['ng-fusioncharts']);

myApp.controller('MyController', ['$scope', function($scope) {
    $scope.dataSource = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
            "updateAnimDuration": "0.3"
        },
        "data": [{
                "label": "Venezuela",
                "value": "290"
            },
            {
                "label": "Saudi",
                "value": "260"
            },
            {
                "label": "Canada",
                "value": "180"
            },
            {
                "label": "Iran",
                "value": "140"
            },
            {
                "label": "Russia",
                "value": "115"
            },
            {
                "label": "UAE",
                "value": "100"
            },
            {
                "label": "US",
                "value": "30"
            },
            {
                "label": "China",
                "value": "30"
            }
        ]
    };

    events: {
        "beforeRender": function(evt, args) {
            var controls = document.createElement('div'),
                chartRef = evt.sender;

            chartRef.getRandomNumber = function() {
                var max = 300,
                    min = 50;
                return Math.round(((max - min) * Math.random()) + min);
            }
            updateData = function() {

                //clones data
                var data = Object.assign({}, chartRef.getJSONData());
                data.data[2].label = 'Canada';
                data.data[2].value = chartRef.getRandomNumber();

                data.data[3].label = 'Iran';
                data.data[3].value = chartRef.getRandomNumber();
                chartRef.setJSONData(data);
            };
            controls.innerHTML = '<button style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;" onClick="updateData()" >Update chart data</button>';
            controls.style.cssText = 'text-align: center; width: 100%;';
            args.container.appendChild(controls);
        }
    }
}
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div fusioncharts
    width="700" 
    height="400"
    type="column2d",
    datasource="{{dataSource}}"
></div>
<p><a class="btn btn-default" ng-click="updateMyChartData()">Click me to change data</a></p>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a JSON object.

4. In the above sample, to update the chart generate random data using **Math.random()**.

5. Add `updateData()` function to randomly update the value of the chart when the button is clicked.

6. Add `controls.innerHTML` to create the `button` inside the `<div>`.

7. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:

    * Set the chart type as `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height (in pixels).
    * Embed the JSON data as the value of the `dataSource`.﻿

## Update Chart Attributes

A chart configured to dynamically update the alignments of **chart caption** and **sub-caption**, as well as the chart **background** is shown below. Click any one of the buttons below the chart to change the alignments of caption and sub-caption, as well as the chart background.

{% embed_chartData configure-charts-using-react-example-2.js json %}

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

var myApp = angular.module('myApp', ['ng-fusioncharts']);

myApp.controller('MyController', ['$scope', function($scope) {
    $scope.dataSource = {
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
            },
            {
                "label": "Saudi",
                "value": "260"
            },
            {
                "label": "Canada",
                "value": "180"
            },
            {
                "label": "Iran",
                "value": "140"
            },
            {
                "label": "Russia",
                "value": "115"
            },
            {
                "label": "UAE",
                "value": "100"
            },
            {
                "label": "US",
                "value": "30"
            },
            {
                "label": "China",
                "value": "30"
            }
        ]
    };

    events: {
        "beforeRender": function(evt, args) {
            var chartRef = evt.sender;

            chartRef.originalData = JSON.parse(JSON.stringify(chartRef.getJSONData()));

            chartRef.changeBackground = function() {
                var data = chartRef.getJSONData(); //copy of object
                data.chart.bgColor = '#efefef';
                chartRef.setJSONData(data);
            };

            // Resets all the chart data to it's initial verison
            chartRef.resetAttr = function() {
                chartRef.setJSONData(chartRef.originalData);
            };

            // Makes the caption text left aligned
            chartRef.makeCaptionLeft = function() {
                var data = chartRef.getJSONData();
                data.chart.captionAlignment = 'left';
                chartRef.setJSONData(data);
            };


            var btnContainer = document.createElement('div'),
                str;

            // buttons 
            str = '<button id="bgColorBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Change Chart Background</button>&nbsp&nbsp';
            str += '<button id="captionAlignBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Make Caption Text Left-Aligned</button>&nbsp&nbsp';
            str += '<button id="resetAttrBtn" style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;">Reset Attributes</button>';

            btnContainer.style.cssText = "text-align: center; width: 100%; margin: 10px;";
            btnContainer.innerHTML = str;
            //button attachment
            args.container.parentNode.insertBefore(btnContainer, args.container.nextSibling);
        },

        "renderComplete": function(evt, args) {
            var chartRef = evt.sender,
                bgColorBtn = document.getElementById('bgColorBtn'),
                captionAlignBtn = document.getElementById('captionAlignBtn'),
                resetAttrBtn = document.getElementById('resetAttrBtn');

            bgColorBtn.onclick = chartRef.changeBackground;
            captionAlignBtn.onclick = chartRef.makeCaptionLeft;
            resetAttrBtn.onclick = chartRef.resetAttr;
        }
    }
}
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div fusioncharts
    width="700" 
    height="400"
    type="column2d",
    datasource="{{dataSource}}"
    ></div>
<p><a class="btn btn-default" ng-click="bgColorBtn()">Change chart background color</a>
<a class="btn btn-default" ng-click="captionAlignBtn()">Make Caption text left-aligned</a>
<a class="btn btn-default" ng-click="resetAttrBtn()">Reset Attributes</a>
</p>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a JSON object. In this JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height (in pixels). 
    * Set the `dataFormat` as `json`.
    * Embed the JSON data as the value of `dataSource`.

4. Configure an event to do the following when triggered:
    * Update the alignments of the chart caption and sub-caption.
    * Update the background color.
    * Reset all the chart data to its initial version.

5. Create a container to render buttons in the chart.

6. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`.
