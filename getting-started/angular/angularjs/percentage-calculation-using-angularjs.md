---
title: Percentage Calculation Using AngularJS | FusionCharts
description: In this article a sample to calculate the percentage value of the data plot with respect to the total is created.
heading: Percentage Calculation Using AngularJS
---

Events are signals that let you execute specific actions (such as sending data to the server using JavaScript) in response to any interaction/update for a chart. FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, percentage calculation, and events.

This article focuses on how you can calculate the percentage of a data plot with respect to all the data plots using the `angularjs-fusioncharts` component.

A chart configured to calculate the percentage, is shown below:

{% embed_chartData percentage-calculation-example-1.js json %}

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

    $scope.total = 0;

    $scope.logMessage = "Hover on the plot to see the percentage along with the label";

    // Save the function reference in global object, which will be called inside dataplotrollover event handler
    $scope.log = function(label, value){ 
        // Since the update is happening outside angular execution context we need 
        // the digest cycle to run to make sure that the view is updated.   
        $scope.$apply(function(){
            $scope.logMessage = `<b>${label}</b> is <b>${value}%</b> of the total`;                 
        });
    }
    // datasource
    var DataSource = {
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

    var myData=DataSource.data,total=0;
    for(var i=0;i<myData.length;i++)
    {
        total+=Number(myData[i].value);
    }
    $scope.total = total;
    // handler for dataplotrollover event
    $scope.dataPlotRollOver = function(e,a){
            var ratio=(parseFloat(a.dataValue/$scope.total)*100).toFixed(2);
            $scope.log(a.categoryLabel, ratio);
    };
    // handler for dataplotrollout event
    $scope.dataPlotRollOut = function(){
        $scope.$apply(function(){
           $scope.logMessage = 'Hover on the plot to see the percentage along with the label';                 
       });
    };
    
    $scope.myDataSource=DataSource;
}]);
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
    <div ng-controller="MyController">
    <!--Listen to FusionCharts events by using "fcevent-<fc-event-name>" attribute. In this case the event name is dataplotrollover-->   
        <div fusionCharts 
             width="700"
             height="400" 
             id="ex10" 
             type="column2d" 
             datasource="{{myDataSource}}" 
             fcevent-dataplotrollover="dataPlotRollOver(event, args)"
             fcevent-dataplotrollout="dataPlotRollOut()">
		</div>
		<div ng-bind-html="logMessage" style="padding: 10px;background:#f5f2f0"></div>
    </div>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configurations in a variable (`myApp`).

4. Set the `logMessage` which gets displayed while rendering the chart.

5. Save the function reference in global object, which will be called inside `dataplotrollover` event handler.

6. Since the update is happening outside angular execution context we need the digest cycle to run to make sure that the view is updated.

7. Store the data source in a variable (`dataSource`).

8. Trigger the `dataplotrollover` and `dataplotrollout` events when the mouse pointer is rolled over the data plots.
	* `dataplotrollover` event shows the percentage of the hovered plot on the page.
	* `dataplotrollout` event resets the default message.
	* `renderComplete` event calculates and stores the total value of the chart data.

9. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels.
    * Embed the json data as the value of `dataSource`.

10. Create a `<div>` to display the message from `logMessage`.