---
title: Configuring your Chart Using AngularJS | FusionCharts
description: This article focuses on different type of configurations possible using AngularJS.
heading: Configuring your Chart using AngularJS
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `angularjs-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/angular/angularjs/configure-your-chart-using-angularjs#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/angular/angularjs/configure-your-chart-using-angularjs#update-chart-attributes-2)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to start):

{% embed_chart configure-charts-using-angular-example-1.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
```

Now, create the module and the controller for the template. The code for the `js` file is given below:

```
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

let getRandomNumber = function() {
    var max = 290,
        min = 30;
    return Math.round(((max - min) * Math.random()) + min);
}

$scope.updateMyChartData = function() {
    $scope.dataSource.data[2].value = getRandomNumber();
    $scope.dataSource.data[3].value = getRandomNumber();
};
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

## Update Chart Attributes

A chart, configured to update the **chart caption** and **sub-caption** alignment dynamically, is shown below (click any one of the radio buttons shown below the chart to change the caption and sub-caption alignment):

{% embed_chart configure-charts-using-react-example-2.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
```

Now, create the module and the controller for the template. The code for the `js` file is given below:

```
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

$scope.changeBackgroundColor = function() {
    $scope.dataSource.chart.bgColor = "#efefef";
};

$scope.changeCaptionTextAlignment = function() {
    $scope.dataSource.chart.captionAlignment = "left";
};
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div fusioncharts
    width="700" 
    height="400"
    type="column2d",
    datasource="{{dataSource}}"
    ></div>
<p><a class="btn btn-default" ng-click="changeBackgroundColor()">Change chart background color</a>
<a class="btn btn-default" ng-click="changeCaptionTextAlignment()">Make Caption text left-aligned</a>
</p>
```