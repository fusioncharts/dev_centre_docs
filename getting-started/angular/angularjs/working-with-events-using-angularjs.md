---
title: Working with Events | FusionCharts
description: This article talks about the Events using AngularJS.
heading: Working with Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

Fusincharts events can be subscribed by attaching scope functions to event attributes. All the events attribute starts with `fcevent-` followed by the event name in lowercase.

To render the above chart, use the template given below:

```
<fusioncharts 
	width="700"
	height="400"
	type="column2d"
	datasource="{{myDataSource}}"
	fcevent-dataplotrollover="rollover(event, args)">
</fusioncharts>
```

In the above template, `rollover` is the scope function which is to be defined in the controller's code.

Click [here]({% site.baseurl %}/api/fusioncharts/fusioncharts-events) for the detailed events in FusionCharts.

The full code to render the above chart using `rollover` event is:

```
var app = angular.module('myApp', ['ng-fusioncharts']);

app.controller('MyController', function($scope) {
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

    $scope.rollover = function(event, name) {
        console.log(event, name);
    }
});
```

Refer to the code below where the code snippet for `dataplotRollOver` event has been specified.

```
$scope.rollover = function(event, name) {
    console.log(event, name);
}
```

In the above code `dataplotRollOver` event is triggered when the mouse pointer is rolled over a data plot. 

Click [here]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollover-247) to get the detailed parameters of the event.