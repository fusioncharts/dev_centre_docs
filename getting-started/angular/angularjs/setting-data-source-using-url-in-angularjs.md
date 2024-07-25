---
title: Setting Data Source Using URL in AngularJS | FusionCharts
description: Setting Data Source using URLs in AngularJS with FusionCharts. Take your data visualization capabilities to the next level. Get in touch now.
heading: Setting Data Source Using URL in AngularJS
---

FusionCharts lets you pass the complete JSON/XML chart data as a static string to the `dataSource` attribute. Alternatively, you can also save the chart data in a `.json` or `.xml` file and then pass the relative URL of this file as value to the `dataSource` attribute. 

The only difference between the two methods is the value that is passed to the `dataFormat` attribute. For the first method, the `dataFormat` attribute takes `json` or `xml` as value, depending on the chart data. For the second method, the value is `jsonurl` or `xmlurl`.

This article explains how you can set the chart data using the URL of the corresponding file using `angularjs-fusioncharts` component.

## Load Data Using JSON as URL

Let's build the same revenue chart which we built in the [first example](/getting-started/angular/angularjs/your-first-chart-using-angularjs) using JSON, and use a .json file as the data source.

{% embed_chart plain-js-setting-data-using-url-example-1.js %}

The data for this chart is represented in the table below:

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

The JSON representation for the above table looks as shown below:

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

Copy this into a file, name it `oilReserves.json`, and store it in the same folder as your HTML page. Create the module and the controller for the template.

> If you are using multilingual characters in your JSON, make sure that you save the JSON data with UTF-8 encoding.

The JavaScript code is given below:

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

myApp.controller('MyController', ['$scope', function($scope) {
    $scope.dataSource = { datasource }
}
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
  <fusioncharts
    dataformat="jsonurl"
    datasource="https://static.fusioncharts.com/sample/oilReserves.json"
    type="column2d"
    width="700"
    height="400">
  </fusioncharts>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Stored the chart configuration in a JSON object.

3. To set the datasource using URL:
    * Set the value of `dataFormat` to **jsonurl**.
    * Set a static URL as the value of `dataSource` to render the above chart.

4. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`. In the `div`:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and the height of the chart in pixels.

> When rendering your charts locally (without a web server, even if on the localhost), you will not be able to load data from XML or JSON files present on your hard-drive. This is due to security restrictions enforced by most modern browsers.

## Load Data Using XML as URL

The XML representation for the above chart looks as shown below:

```
<chart caption='Countries With Most Oil Reserves [2017-18] ' subcaption='In MMbbl = One Million barrels ' xaxisname='Country ' yaxisname='Reserves (MMbbl) ' numberprefix='K ' theme='fusion '>
    <set label='Venezuela ' value='290 ' />
    <set label='Saudi ' value='260 ' />
    <set label='Canada ' value='180 ' />
    <set label='Iran ' value='140 ' />
    <set label='Russia ' value='115 ' />
    <set label='UAE ' value='100 ' />
    <set label='US ' value='30 ' />
    <set label='China ' value='30 ' />
</chart>
```

Copy this into a file called `oilReserves.xml` and store it in the same folder as your HTML page.

> If you are using multilingual characters in your XML, make sure you save the XML data with UTF-8 encoding.

The JavaScript code is given below:

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

myApp.controller('MyController', ['$scope', function($scope) {
    $scope.dataSource = { datasource }
}
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div ng-app="myApp">
  <fusioncharts
    dataformat="xmlurl"
    datasource="https://static.fusioncharts.com/sample/oilReserves.xml"
    type="column2d"
    width="700"
    height="400">
  </fusioncharts>
</div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Store the chart configuration in an XML object. In the XML object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the chart type to `column2d`. 
    * Set the `dataFormat` as `xml`.

3. To set the datasource using URL:
    * Set the value of `dataFormat` as **xmlurl**.
    * A static URL has been set to `dataSource` to render the above chart.

4. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`.
