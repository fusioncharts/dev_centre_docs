---
title: Your First Chart in AngularJS Using FusionCharts | FusionCharts
description: This article outlines the steps to create your first chart, widget and map using the fusionCharts AngularJS component.
heading: Your First Chart in AngularJS using FusionCharts
chartPresent: false
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps, and dashboards in JavaScript. In this page, we'll see how to render charts using FusionCharts and the `angularjs-fusioncharts` wrapper. 

We'll start with a simple example of creating a [chart]({% site.baseurl %}/getting-started/angular/angularjs/your-first-chart-using-angularjs#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/angular/angularjs/your-first-chart-using-angularjs#create-your-first-gauge-7) and a [map]({% site.baseurl %}/getting-started/angular/angularjs/your-first-chart-using-angularjs#create-your-first-map-10).

Before going through this article, please [install]({% site.baseurl %}/getting-started/angular/angularjs/install-using-angularjs '@@open-newtab') `angularjs-fusioncharts` plugin, if you haven’t installed it already.

## Create your first chart

In this section, we will create a chart using the `angularjs-fusioncharts` component. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

To create charts, the `angularjs-fusioncharts` component can be passed as a part of another `angularjs` component.

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

#### The data for this chart is represented in the table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

> There are different JSON formats for different groups of charts in FusionCharts - e.g., [single-series]({% site.baseurl %}/chart-guide/standard-charts/line-area-and-column-charts), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

```javascript
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
}
```

In the above JSON we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contain a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels or data values. You can also set chart limits and extended properties. The functional attributes used in the above JSON are:

* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds a prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's JSON data and provided `fusion` (default theme) as its value. Using themes, you can centralize cosmetic and functional properties across various charts in your web application.

#### Cosmetic Attributes

Cosmetic attributes let you configure chart cosmetics like color, transparency, font size, etc. Since we are using the `fusion` theme to customize the chart's look and feel no cosmetic attributes are used in this sample.

For a detailed list of attributes click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Setup the main module

In this step, we will setup the main module to create the **column2d** chart. 

Create module and controller for the template. The code for the `script.js` file is given below:

```
/*
  // if using require
  const angular = require('angular');
  const FusionCharts = require('fusioncharts');
  const Charts = require('fusioncharts/fusioncharts.charts'); // Charts
  Charts(FusionCharts);
  require('angular-fusioncharts');
*/
let myApp = angular.module('your-app-name', ['ng-fusioncharts']);
myApp.controller('MyController', ['$scope', function($scope) {
    $scope.myDataSource = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion",
        },
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
    }
}])
```

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a Column 2D chart.

Now, use the `fusioncharts` directive in a template. The code for the `index.html` file is given below:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
    <script src="path/to/local/node_modules/fusioncharts/fusioncharts.js"></script>
    <script src="path/to/local/node_modules/fusioncharts/fusioncharts.charts.js"></script>
    <script src="path/to/local/node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js"></script>
    <script src="path/to/local/node_modules/angular/angular.js"></script>
    <script src="path/to/local/node_modules/angular-fusioncharts/js/angular-fusioncharts.js"></script>
</head>

<body ng-app="my-app">
    <div ng-controller="MyController">
        <div fusioncharts id="my-chart-id" width="700" height="400" type="column2d" dataSource="{{myDataSource}}">
        </div>
    </div>
    <script src="./script.js"></script>
    <!-- 
  if using require , eg. using requirejs, browserify, webpack 
  <script src="./bundle.js"></script> 
  bundle.js is output file generated by bundler 
 -->
</body>

</html>
```
Now, go on and explore other 95+ chart types that we have at [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab'), or explore the configuration [attributes]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for different charts

## Create your first gauge

Gauges are powerful tools that can showcase information using a radial scale to display data, and a dial to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple gauge showcasing Nordstorm's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample have been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "1",
        "numberSuffix": "%",
        "theme": "fusion",
        "showToolTip": "0"
    },
    // Chart Data
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "50",
            "code": "#F2726F"
        }, {
            "minValue": "50",
            "maxValue": "75",
            "code": "#FFC533"
        }, {
            "minValue": "75",
            "maxValue": "100",
            "code": "#62B58F"
        }]
    },
    "dials": {
        "dial": [{
            "value": "81"
        }]
    }
}
```

See the complete list of[ all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for an angular gauge.

### Setup the main module

In this step, we will setup the main module to create the **Angular Gauge**. 

Create the module and the controller for the template. The code for the `script.js` file is given below:

```
/*
  // if using require
  const angular = require('angular');
  const FusionCharts = require('fusioncharts');
  const Widgets = require('fusioncharts/fusioncharts.widgets); // Charts
  Widgets(FusionCharts);
  require('angular-fusioncharts');
*/
let myApp = angular.module('your-app-name', ['ng-fusioncharts']);
myApp.controller('MyController', ['$scope', function($scope) {
    $scope.myDataSource = {
        "chart": {
            "caption": "Nordstorm's Customer Satisfaction Score for 2017",
            "lowerLimit": "0",
            "upperLimit": "100",
            "showValue": "1",
            "numberSuffix": "%",
            "theme": "fusion",
            "showToolTip": "0"
        },
        // Chart Data
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#F2726F"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#FFC533"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#62B58F"
            }]
        },
        "dials": {
            "dial": [{
                "value": "81"
            }]
        }
    };
}])
```

Now, use the `fusioncharts` directive in a template. The code for the `index.html` file is given below:

```html
<body ng-app="my-app">
    <div ng-controller="MyController">
        <div fusioncharts 
            id="my-chart-id"
            width="450"
            height="250"
            type="angulargauge"
            dataSource="{{myDataSource}}">
        </div>
    </div>
</body>
```

## Create your first map

In this section, we will create a visualization using the map of **World Map** showing the **Average annual population growth** across all continents. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in the table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

> In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column in this example. 

However, when you convert the data in a format acceptable by FusionCharts, the entities are denoted by the `id` key in the `data` object (see the code snippet of the next section). 

For any map visualization you create, it is imperative that you provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF`, and not `AFR`. 

We have detailed [Map Specification Sheets]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab') for all the maps that can be rendered using FusionCharts - refer to them for the correct `id` of the map you want to create.

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
    // Map Configuration
    "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        "labelsepchar": ": ",
        "entityFillHoverColor": "#FFF9C4",
        "theme": "fusion"
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
        }]
    },
    // Source data as JSON --> id represents countries of world.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1"
    }]
}
```

### Setup the main module

In this step, we will setup the main module to create the **World Map**. 

Create the module and the controller for the template. The code for the `script.js` file is given below:

```
/*
  // if using require
  const angular = require('angular');
  const FusionCharts = require('fusioncharts');
  const Maps = require('fusioncharts/fusioncharts.maps); // Maps
  const World = require('fusioncharts/maps/fusioncharts.world); // Maps
  Maps(FusionCharts);
  World(FusionCharts);
  require('angular-fusioncharts');
*/
let myApp = angular.module('your-app-name', ['ng-fusioncharts']);
myApp.controller('MyController', ['$scope', function($scope) {
    $scope.myDataSource = {
        // Map Configuration
        "chart": {
            "caption": "Average Annual Population Growth",
            "subcaption": " 1955-2015",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": {
            "minvalue": "0",
            "code": "#FFE0B2",
            "gradient": "1",
            "color": [{
                "minvalue": "0.5",
                "maxvalue": "1.0",
                "color": "#FFD74D"
            }, {
                "minvalue": "1.0",
                "maxvalue": "2.0",
                "color": "#FB8C00"
            }, {
                "minvalue": "2.0",
                "maxvalue": "3.0",
                "color": "#E65100"
            }]
        },
        // Source data as JSON --> id represents countries of world.
        "data": [{
            "id": "NA",
            "value": ".82",
            "showLabel": "1"
        }, {
            "id": "SA",
            "value": "2.04",
            "showLabel": "1"
        }, {
            "id": "AS",
            "value": "1.78",
            "showLabel": "1"
        }, {
            "id": "EU",
            "value": ".40",
            "showLabel": "1"
        }, {
            "id": "AF",
            "value": "2.58",
            "showLabel": "1"
        }, {
            "id": "AU",
            "value": "1.30",
            "showLabel": "1"
        }]
        }
    };

}]);
```

Now, use the `fusioncharts` directive in a template. The code for the `index.html` file is given below:

```html
<body ng-app="my-app">
    <div ng-controller="MyController">
        <div fusioncharts
        id="my-chart-id"
        width="800"
        height="550"
        type="world"
        dataSource="{{myDataSource}}">
        </div>
    </div>
</body>
```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of **World Map**. The respective `id` can be found [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case there is an error and you are unable to see the chart, check for the following:

* If you don't see the chart rendered on your browser, it might be because some browsers do not allow JavaScript files to be loaded and run from the local file system. In such cases, either try a different browser, or create a local/remote server and provide the webpages containing the charts from the server.

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a `Loading Data` or `Error in Loading Data` message, check whether your JSON data structure is correct, or if there are conflicts related to quotation marks in your code.