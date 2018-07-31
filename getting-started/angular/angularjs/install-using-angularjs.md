---
title: Installation | FusionCharts
description: This article outlines the steps to install fusioncharts and fusioncharts angularjs module to create charts.
heading: Installation
chartPresent: false
---

The `angularjs-fusioncharts` module for **FusionCharts Suite XT**, lets you add interactive JavaScript charts to your **AngularJS (v1.x)** web and mobile applications.

In this article, we will show you how to download and install the `angularjs-fusioncharts` module and all the other dependencies. 

## Choose your mode of installation:

You can install `angularjs-fusionCharts` in your **AngularJS** project using any of the two modes given below:

<table>
    <tr>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/angular/angularjs/install-using-angularjs#install-using-direct-javascript-files-2"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_JS.svg"></a></td>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/angular/angularjs/install-using-angularjs#include-fusioncharts-via-npm-8"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_NPM.svg"></a></td>
    </tr>
</table>

## Install using Direct JavaScript files

In order to install and start working with **angularjs-fusionCharts** you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to apply themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended that you copy all the files/folders from `fusioncharts-suite-xt > js` folder to your project folder.

* The download package also contains **angular-fusioncharts.js** file under `fusioncharts-suite-xt > integrations > angularjs > js` folder. The folder structure is shown below:

![AngularJS Js Folder]({% site.baseurl %}/gif/angularjs-folder-structure.gif)

> The `angularjs` folder in the FusionCharts Suite XT package is available from v3.13.0. 

> It is recommended that you copy the `angular-fusioncharts.js` file from `fusioncharts-suite-xt > integrations > angularjs > js` to your project folder.

Following is the list of JavaScript files present in your `fusioncharts-suite-xt/js` folder:

File Name|Description|
-|-
`fusioncharts.js`|This is the core FusionCharts library, which you need to import in all your pages where you want to generate a chart, gauge or a map.|
`fusioncharts.charts.js`|This file is required to render all charts present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.charts.js` provided they are in the same folder.|
`fusioncharts.widgets.js`|This file is required to render all gauges present under FusionWidgets XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.widgets.js` provided they are in the same folder.|
`fusioncharts.powercharts.js`|This file is required to render all charts present under PowerCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.powercharts.js` provided they are in the same folder.|
`fusioncharts.gantt.js`|This file is required to render the Gantt chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.gantt.js` provided they are in the same folder.|
`fusioncharts.treemap.js`|This file is required to render the Treemap. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.treemap.js` provided they are in the same folder.|
`fusioncharts.zoomscatter.js`|This file is required to render the Zoom scatter chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomscatter.js` provided they are in the same folder.|
`fusioncharts.zoomline.js`|This file is required to render the Zoom line charts. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomline.js` provided they are in the same folder.|
`fusioncharts.overlappedbar2d.js`|This file is required to render the Overlapped Bar 2D chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedbar2d.js` provided they are in the same folder.|
`fusioncharts.overlappedcolumn2d.js`|This file is required to render the Overlapped Column 2D chart, present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedcolumn2d.js` provided they are in the same folder.|
`fusioncharts.maps.js`|This file is the core map renderer file. The map definitions, however, are stored separately, as explained next. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.maps.js` provided they are in the same folder.|
`maps/*`|This folder contains Map Definition files required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition files of all the 1400+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be applied to charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

Installation of FusionCharts Suite XT is simply copying and pasting the JavaScript files from the downloaded package into your project folder.

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps. Create an HTML file and follow the steps given below:

**Step 1:** [Download](https://angularjs.org/ '@@open-newtab') the AngularJS core library and include the AngularJS file as shown below:

```html
<script type="text/javascript" src="path/to/local/angular.js"></script>
```

**Step 2:** Include the `fusioncharts.js` (FusionCharts core library) file. This file is required to render any **chart, widget and map.**

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
```

**Step 3: Include the angularjs-fusioncharts module:**

```html
<script type="text/javascript" src="/path/to/local/angular-fusioncharts.js"></script>
```

### Include ng-fusioncharts

Include the ng-fusioncharts as a dependency in the application. Call `angular.module()` to add the dependency.

```
angular.module("myApp", ["ng-fusioncharts"])
```

### Add the module

Add the `<div>` with an **fc-chart** directive in your HTML, assuming that it is inside a controller named `MyController`.

```
<div ng-controller='MyController'>
    <div fusioncharts
        width='700'
        height='400'
        type='column2d'
        dataSource='{{myDataSource}}' >
    </div>
</div>
```

Now, this is bound to a datasource with the `myDataSource` scope object.

## Populate the required variables

Previously, we have bounded the scope variable `myDataSource`.

Set the `myDataSource` to a JSON following the FusionChart's JSON data format. Please refer [here]({% site.baseurl %}/getting-started/angular/angularjs/your-first-chart-using-angularjs#convert-tabular-data-into-json-format-3 '@@open-newtab') for the basic JSON structure.

```
app.controller('MyController', function($scope) {
    $scope.myDataSource = {
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
});
```

### Installing FusionMaps for your project

FusionCharts Suite XT provides over `1400+` data-driven maps under the product FusionMaps. 

In the downloaded package, you’ll find the `fusioncharts.maps.js` file and only two map definition files - the world map, and the map of the USA - to reduce the download size. However, you can download the rest of map definition files [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'), when you need to plot maps of those countries/regions. 

> If you are using version v3.12.2 or older, [donwload](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the latest version and replace to upgrade the latest map definition files.

To render a map, you need the core FusionCharts library `fusioncharts.js` along with `fusioncharts.maps.js`, and the map definition files as shown below:

```
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"></script>
```

In the above example, we’ve include the World Map, whose map definition (path) is contained in `maps/fusioncharts.world.js`.

**Load other map definition files**

To use any other map (except world and USA) from the 1400+ maps, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files, tnen copy those map files to your current `/maps` folder. The map definition files are named in the format `fusioncharts.[MAP_ALIAS].js`, where MAP_ALIAS represents the country, state or region name. Then include the respective map file as under:

```
<script type="text/javascript" src="path/to/local/maps/fusioncharts.[MAP_ALIAS].js"></script>
```

Click [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') to explore all the maps available in FusionMaps XT.

If you have specifically included all the files your head section should look like this:

```html
<head>
    <meta charset="utf-8">
    <title>AngularJS - FusionCharts</title>
    <!-- AngularJS -->
    <script type="text/JavaScript" src="path/to/local/angular.js"></script>
    <!-- FusionCharts -->
    <script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
    <!-- AngularJS-FusionCharts -->
    <script type="text/JavaScript" src="path/to/local/angular-fusioncharts.js"></script>
    <!-- FusionMaps -->
    <script type="text/JavaScript" src="path/to/local/fusioncharts.maps.js"></script>
    <!--world -->
    <script type="text/JavaScript" src="path/to/local/fusioncharts.world.js"></script>
</head>
```

### Themes

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

The FusionCharts Suite download package also contains the predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

To include a theme to your chart, include its corresponding JavaScript file in your HTML page for that theme as shown in the code below:

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
<script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').

## Install AngularJS-FusionCharts via **npm**

Now, let's discuss how to install the `angularjs-fusioncharts` package via **npm**. 

The fusioncharts package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**. 

> If you are not aware about the different files of FusionCharts package and its purpose, refer [here]({% site.baseurl %}/getting-started/angular/angularjs/install-using-angularjs#install-using-direct-javascript-files-2 '@@open-newtab').

Now, to install the AngularJS-FusionCharts follow the steps given below:

**Step 1**: Install `angularjs` core library:

```PowerShell
$ npm install angular
```

**Step 2**: Install `angularjs-fusioncharts`:

```PowerShell
$ npm install angularjs-fusioncharts
```

**Step 3**: Install `fusioncharts` package:

```PowerShell
$ npm install fusioncharts
```
**Step 4:** Include `angularjs` core library using `require`:

```JavaScript
var Angular = require('angular');
```

**Step 5:** Include `fusioncharts` core library using `require`:

```JavaScript
var FusionCharts = require('fusioncharts');
```

**Step 6:** Include `angularjs-fusioncharts` module using `require`:

```JavaScript
require('angularjs-fusioncharts');
```

**Step 7:** Include the ng-fusioncharts as a dependency in the application. Call `angular.module()` to add the dependency.

```JavaScript
angular.module("myApp", ["ng-fusioncharts"])
``` 

Add the &lt;div&gt; with an **fc-chart** directive in your HTML, assuming that it is inside a controller named `MyController`.

```HTML
<div ng-controller='MyController'>
    <div fusioncharts
        width='700'
        height='400'
        type='column2d'
        dataSource='{{myDataSource}}' >
    </div>
</div>
```

Now, this is bound to a datasource with the `myDataSource` scope object.

**Populate the required variables**

Previously, we have bounded the scope variable `myDataSource`.

Set the `myDataSource` to a JSON following the FusionChart's JSON data format. Please refer [here]({% site.baseurl %}/getting-started/angular/angularjs/your-first-chart-using-angularjs#convert-tabular-data-into-json-format-3 '@@open-newtab') for the basic JSON structure.

```json
app.controller('MyController', function($scope) {
    $scope.myDataSource = {
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
});
```
**To include PowerCharts using `require`:**

```JavaScript
var Angular = require('angular');
require('angularjs-fusioncharts');
var FusionCharts = require('fusioncharts');
var PowerCharts = require('fusioncharts/fusioncharts.powercharts');
PowerCharts(FusionCharts);
```

**To include FusionWidgets using `require`:**

```JavaScript
var Angular = require('angular');
require('angularjs-fusioncharts');
var FusionCharts = require('fusioncharts');
var Widgets = require('fusioncharts/fusioncharts.widgets');
Widgets(FusionCharts);
```

**To include specific chart types individually using `require`:**

**Gantt Chart:**

```JavaScript
var Angular = require('angular');
require('angularjs-fusioncharts');
var FusionCharts = require('fusioncharts');
var Gantt = require('fusioncharts/fusioncharts.gantt'); // Gantt
Gantt(FusionCharts);
```

**Treemap Chart:**

```JavaScript
var Angular = require('angular');
require('angularjs-fusioncharts');
var FusionCharts = require('fusioncharts');
var Treemap = require('fusioncharts/fusioncharts.treemap'); // Treemap
Treemap(FusionCharts);
```

**ZoomScatter chart:**

```JavaScript
var Angular = require('angular');
require('angularjs-fusioncharts');
var FusionCharts = require('fusioncharts');
var ZoomScatter = require('fusioncharts/fusioncharts.zoomscatter'); //ZoomScatter
ZoomScatter(FusionCharts);
```

**ZoomLine chart:**

```JavaScript
var Angular = require('angular');
require('angularjs-fusioncharts');
var FusionCharts = require('fusioncharts');
var ZoomLine = require('fusioncharts/fusioncharts.zoomline'); //zoomline
ZoomLine(FusionCharts);
```

**Ovelapped Bar and Column charts:**

```JavaScript
var Angular = require('angular');
require('angularjs-fusioncharts');
var FusionCharts = require('fusioncharts');
var OverlappedBar2D = require('fusioncharts/fusioncharts.overlappedbar2d');
var OverlappedColumn2D = require('fusioncharts/fusioncharts.overlappedcolumn2d');
OverlappedBar2D(FusionCharts);
OverlappedColumn2D(FusionCharts);
```

## Include Maps via **npm**

To reduce the size of the download package, the `fusioncharts` package contains only two map definitions in `fusioncharts/maps` directory - the **World Map**, and the **Map of USA**. To use any of these two map definition files follow the steps given below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

**Step 1: Load `fusioncharts` module**:

```
// Include the core fusioncharts file from core 
var FusionCharts = require('fusioncharts');
```
**Step 2:** Load the `FusionMaps` renderer and the map definition file:

```JavaScript
var FusionCharts = require('fusioncharts');
var FusionMaps = require('fusioncharts/fusioncharts.map');
var World = require('fusioncharts/maps/fusioncharts.world');
FusionMaps(FusionCharts);
World(FusionCharts);

// Create an Instance with map options
    var salesByContinent =   new  FusionCharts({
        type: 'world', // Map type
        renderAt: 'chart-container', // Container
        width: '800', // Width of the chart
        height: '550', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
        chart: {
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
    }
});
// Render
chartInstance.render()

```

**Load other map definition files**

You can use rest of the map definition files other than the **World Map** and the **Map of USA** that are shipped with the `fusioncharts` package. To do so, install `fusionmaps` package which contains all the map definition files as shown below:

**Install `fusionmaps` package**

```Shell
$ npm install fusionmaps
```

Once the fusionmaps package is installed you will find all the map definition files in `fusionmaps/maps` folder. 

> The `fusionmaps` package is dependent on the `fusioncharts` package. Therefore, to use fusionmaps, it is necessary to first include fusioncharts in your project and map renderer as shown below:

```
var FusionCharts = require('fusioncharts');
var FusionMaps = require('fusioncharts/fusioncharts.maps');
FusionMaps(FusionCharts);
```

Load the map definition file(s) from the `fusionmaps` package for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**.  

Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. 

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format. So, the complete format will be `fusioncharts.california`.

```JavaScript
var FusionCharts = require('fusioncharts');
var FusionMaps = require('fusioncharts/fusioncharts.maps');
var California = require('fusionmaps/maps/fusioncharts.california');
FusonMaps(FusionCharts);
California(FusionCharts);
```

> It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the `fusioncharts` directory, all map definition files are stored in the `maps` directory and are fetched from there.


## Include Themes via NPM

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme).

To include the definition files placed in **fusioncharts/themes**, follow the steps below:

```JavaScript
    var FusionTheme = require('fusioncharts/themes/fusioncharts.fusion');
    FusionTheme(FusionCharts);
```
> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').