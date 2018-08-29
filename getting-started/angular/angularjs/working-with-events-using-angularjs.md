---
title: Working with Events | FusionCharts
description: This article talks about the Events using AngularJS.
heading: Working with Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

Take a look at the pie chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one pie slice and see how the text (the slice label and the no. of visitors) rendered below the chart changes.

For example, if you roll the mouse pointer over the __Senior__ slice, the following text is displayed is below the chart:
__Age group: Senior__
__No. of visitors: 491000__

Fusincharts events can be subscribed by attaching scope functions to event attributes. All the events attribute starts with `fcevent-` followed by the event name in lowercase.

To render the above chart, use the template given below:

```
<fusioncharts 
	width="450"
	height="350"
	type="pie2d"
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
            "caption": "Split of visitors by age group-FY2013-14",
            "subCaption": "Harry's SuperMart",
            "enableSmartLabels": "0",
            "showPercentValues": "1",
            "showTooltip": "0",
            "decimals": "1",
            "theme": "fusion"
        },
        "data": [{
            "label": "Teenage",
            "value": "1250400"
        }, {
            "label": "Adult",
            "value": "1463300"
        }, {
            "label": "Mid-age",
            "value": "1050700"
        }, {
            "label": "Senior",
            "value": "491000"
        }]
    };

    $scope.rollover = function(event, name) {
        console.log(event, name);
    }
});
```

Refer to the code below where the code snippet for `rollover` event has been specified.

```
$scope.rollover = function(event, name) {
    console.log(event, name);
}
```

In the above code `RollOver` event is triggered when the mouse pointer is rolled over a data plot. 

Click [here]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollover-247) to get the detailed parameters of the event.