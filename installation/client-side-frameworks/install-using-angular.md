---
title: Install using Angular JS| FusionCharts
description: FusionCharts Suite XT is a JavaScript library that runs on your desktop/mobile web browsers. This article talks about steps to install using angular js
heading: Angular JS
breadcrumb: [["Home", "/"], ["Angular JS"]]
---

The Angular-FusionCharts directive, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single AngularJS directive.

## Download

You can download the Angular-FusionCharts directive from [here](https://www.fusioncharts.com/angularjs-charts/).

## Install

In your HTML, include the `fusioncharts.js` and the `angular-fusioncharts.js` JavaScript file. It is necessary to include the `angular-fusioncharts.js` file after all other files.

```
<script type="text/javascript" src="/path/to/fusioncharts.js"></script>
<script type="text/javascript" src="/path/to/angular.js"></script>
<script type="text/javascript" src="/path/to/angular-fusioncharts.js"></script>
```

## Include ng-fusioncharts

Include the `ng-fusioncharts` as a dependency in the application. Search for the call to angular.module to added the dependency.

```
angular.module("myApp", ["ng-fusioncharts"])
```

## Add the Directive

Add the `<div>` with a **fc-chart** directive in your HTML file, assuming that it is inside a `MyController` controller.

```
<div ng-controller="MyController">
    <div fusioncharts
        width="600"
        height="400"
        type="column2d"
        dataSource="" >
    </div>
</div>
```

Now this is bound to a datasource with the `myDataSource` scope object.

## Populate the required variables

Previously, we have binded to the undefined scope variable myDataSource.

Set the `DataSource` like a regular FusionCharts JSON format DataSource inside the controller. Refer to the code below:

```
app.controller('MyController', function($scope) {
    $scope.myDataSource = {
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
        },
        data: [{
                label: "Bakersfield Central",
                value: "880000"
            },
            {
                label: "Garden Groove harbour",
                value: "730000"
            },
            {
                label: "Los Angeles Topanga",
                value: "590000"
            },
            {
                label: "Compton-Rancho Dom",
                value: "520000"
            },
            {
                label: "Daly City Serramonte",
                value: "330000"
            }
        ]
    };
});
```

This completes the setup and you are now ready to begin using the FusionCharts AngularJs plugin.

## Licensing

Angular-FusionCharts is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can **[download an evaluation](https://www.fusioncharts.com/download/)**. You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is **[free for non-commercial and personal use](https://www.fusioncharts.com/download/free/)**) .