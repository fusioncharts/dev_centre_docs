---
title: Working with Events Using AngularJS | FusionCharts
description: Read article to discover the power of working with events in AngularJS to execute specific actions & manipulate the DOM, send data to the server, & more.
heading: Working with Events Using AngularJS
---
Events are signals that let you execute specific actions - such as manipulate the DOM, send data to the server, etc., using JavaScript, in response to any interaction/update for a chart. For example, you can use events to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

Take a look at the Column 2D chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one data plot and see how the text (the data label and the value) rendered below the chart changes.

For example, if you roll the mouse pointer over the __Canada__ data plot, the following text is displayed below the chart:

**You are currently hovering over Canada whose value is 180**

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
    $scope.dataSource = {
        "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "fusion",
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
    // handler for dataplotrollover event.
    $scope.plotRollOver = function(event){
        $scope.$apply(function () {
            $scope.selectedValue = event.data.displayValue;
            $scope.selectedLabel = event.data.categoryLabel;
        });
    }
    // handler for dataplotrollout event.
    $scope.plotRollOut = function(event){
        $scope.$apply(function () {
            $scope.selectedValue = '';
            $scope.selectedLabel = '';
        });
    }
}]);
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
    <div ng-controller="MyController">  
        <!--Listen to FusionCharts events by using "fcevent-<fc-event-name>" attribute. In this case the event name is dataplotrollover-->  
        <div fusioncharts width="100%" height="400" type="column2d" , datasource="{{dataSource}}" fcevent-dataplotrollover="plotRollOver(event)"
        fcevent-dataplotrollout="plotRollOut()"></div>
        <p style="font-size:20px;font-weight: 300;padding:10px;background:#f5f2f0">
            You are currently hovering over {{selectedLabel || ""}} whose value is {{selectedValue || ""}}
        </p>
    </div>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a variable (`myApp`).

4. Store the data source in a variable (`dataSource`).

5. In the above sample:
    * Callback handler for `plotRollOver` event has been used which is triggered when the mouse pointer is rolled over a data plot.
    * Callback handler for `plotRollOut` event has been used which is triggered when the mouse pointer is rolled out of the data plot.

6. A container is created to render buttons in the chart.

7. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and the height (in pixels).
    * Embed the JSON data as the value of the `dataSource`.
