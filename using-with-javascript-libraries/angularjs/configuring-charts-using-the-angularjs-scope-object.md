---
permalink: using-with-javascript-libraries/angularjs/configuring-charts-using-the-angularjs-scope-object.html
title: Configuring Charts Using the Scope | FusionCharts
description: This section talks about configuring charts using scope. Once a chart is created, the scope object can be used to update the chart dynamically.
heading: Configuring Charts Using the Scope
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT](/getting-started/building-your-first-chart)

* [Installing the Angular-FusionCharts directive](/using-with-javascript-libraries/angularjs/introduction)

* [Creating charts using the Angular-FusionCharts directive](/using-with-javascript-libraries/angularjs/creating-charts-using-the-angular-fusioncharts-directive)

Once a chart is created using the Angular-FusionCharts directive, the scope object can be used to update the chart dynamically.

This articles describes how you can use the scope object to:

* <a href="/using-with-javascript-libraries/angularjs/configuring-charts-using-the-angularjs-scope-object#updating-the-chart-data-dynamically" class="smoth-scroll">Update the chart data dynamically</a>

* <a href="/using-with-javascript-libraries/angularjs/configuring-charts-using-the-angularjs-scope-object#updating-the-chart-attributes-dynamically" class="smoth-scroll">Update the chart attributes dynamically</a>

* <a href="/using-with-javascript-libraries/angularjs/configuring-charts-using-the-angularjs-scope-object#trigger-scope-events-from-the-chart" class="smoth-scroll">Trigger scope events</a>

## Updating the Chart Data Dynamically

A column 2D chart configured to update chart data dynamically is shown below:

{% embed_chart using-with-javascript-libraries-angularjs-configuring-charts-using-the-angularjs-scope-object-example-1.js %}


The HTML code for this chart is given below:

```html
<!-- The `fusioncharts` directive is used as an attribute of the `<div> element. -->
<div fusioncharts width="400" height="300" type="column2d" , datasource="{{dataSource}}"></div>
<!-- Create a button, which when clicked will call the `updateMyChartData()` function. -->
<p><a class="btn btn-default" ng-click="updateMyChartData()">Click me to change data</a></p>

```

The AngularJS code for the chart is given below:

```javascript
$scope.dataSource = {
    chart: {
        caption: "Top 5 stores in last month by revenue",
        subCaption: "Harry's SuperMart",
        numberPrefix: "$",
        theme: "fint"
    },
    data: [{
        label: "Bakersfield Central",
        value: "880000"
    }, {
        label: "Garden Groove harbour",
        value: "730000"
    }, {
        label: "Los Angeles Topanga",
        value: "590000"
    }, {
        label: "Compton-Rancho Dom",
        value: "520000"
    }, {
        label: "Daly City Serramonte",
        value: "330000"
    }]
};
//The `updateMyChartData()` function is defined in the JavaScript code. This function is
//configured to update the label and value for the third and fourth data plots.
// The scope object is used to refer to the `label` and `value` attributes of the `data` object array.
$scope.updateMyChartData = function() {
    $scope.dataSource.data[2].label = "This Label is Updated";
    $scope.dataSource.data[2].value = "420000";
    $scope.dataSource.data[3].label = "This is updated as well";
    $scope.dataSource.data[3].value = "210000";
}

```

## Updating the Chart Attributes Dynamically

As an example, look at how you can change the alignment of the chart caption, dynamically.
A column 2D chart configured to let you do this is shown below:

{% embed_chart using-with-javascript-libraries-angularjs-configuring-charts-using-the-angularjs-scope-object-example-1a.js %}

Three radio buttons are shown below the chart. Click the appropriate one to set the required alignment.
The HTML code for this chart is given below:

```html
<div fusioncharts width="400" height=" 300" type="column2d",dataSource=" {{dataSource}}"></div>
<p>
    Change caption alignment:
    <!--Add radio buttons to update the caption alignment. -->
    <input type="radio" id="left" name="captionalignment" ng-click="leftAlignCaption()"> Left </input>
    <input type=" radio" id="center" name="captionalignment" checked="1" ng-click="centerAlignCaption()">Center</input>
    <input type="radio" id="right" name="captionalignment" ng-click="rightAlignCaption()"> Right </input>
</p>

```

The AngularJS code for this is given below:

```javascript
$scope.datasource = {
    chart: {
        caption: "Quarterly Revenue for FY2013-2014",
        subCaption: "Harry’s SuperMart",
        numberPrefix: "$",
        theme "fint”
    },
    data: [{
        label: "Q1",
        value: "420000"
    }, {
        label: "Q2",
        value: "810000"
    }, {
        label: "Q3",
        value: "720000"
    }, {
        label: "Q4",
        value: "550000"
    }]
};
$scope.leftAlignCaption = function() {
    $scope.dataSource.chart.captionAlignment = "left";
};
$scope.centerAlignCaption = function() {
    $scope.dataSource.chart.captionAlignment = "center";
};
$scope.rightAlignCaption = function() {
    $scope.dataSource.chart.captionAlignment = "right";
};

```

<p class="text-info">For a list of other chart attributes that you can update for a column 2D chart, click [here](/chart-attributes?chart=column2d).</p>

## Trigger Scope Events from the Chart

The quarterly revenue column 2D chart configured to listen to the `dataplotClick` event is shown below:

{% embed_chart using-with-javascript-libraries-angularjs-configuring-charts-using-the-angularjs-scope-object-example-2.js %}

When a data plot is clicked, the text **Selected Value: **rendered below the chart is updated to show the value of that data plot.

The HTML code for this chart is given below:

```html
<div fusioncharts width="600" height="400" type="column2d" , datasource="{{dataSource}}" events="events"></div>
<!-- The `selectedValue` variable is defined to store the label and the value of the data plot that is clicked. -->
<p>Selected Value:: {{ selectedValue }}</p>

```

The AngularJS code for this chart is given below:

```javascript

$scope.dataSource = {
    chart: {
        caption: "Quarterly Revenue for FY2013-2014",
        subCaption: "Harry's SuperMart",
        xAxisName: "Quarter",
        yAxisName: "Revenue",
        numberPrefix: "$",
        showValues: "0",
        theme: "fint"
    },
    data: [{
        label: "Q1",
        value: "420000"
    }, {
        label: "Q2",
        value: "810000"
    }, {
        label: "Q3",
        value: "720000"
    }, {
        label: "Q4",
        value: "550000"
    }]
};
// The `selectedValue` variable is assigned an initial value that will be displayed when the chart is
// first rendered.
$scope.selectedValue = "nothing";
// When the `dataplotclick` event is triggered, the `$apply` scope object is used to execute the
// function that checks for the value of the data plot clicked.
//This value is assigned to the `selectedValue` variable.
// Consequently, the text rendered below the chart is updated.
$scope.events = {
    dataplotclick: function(ev, props) {
        $scope.$apply(function() {
            $scope.selectedValue = props.displayValue;
        });
    }
}

```
