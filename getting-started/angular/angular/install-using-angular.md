---
title: Installation | FusionCharts
description: This article outlines the steps to install fusioncharts and fusioncharts angular component to create charts.
heading: Installation
chartPresent: false
---

The **angular-fusionCharts** component, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single Angular component.

In this article, we will show you how you can download and install the `angular-fusionCharts` component and all the other dependencies on your system. You can install FusionCharts in your application using npm.

> Unlike, other tech stacks **Angular-FusionCharts** can only be used via `npm`. Since, **Angular2** and onward does not support direct `<script>` inclusion of files this page shows only the steps to install via `npm`.

## Install FusionCharts via npm

Before installing and starting to work with **angular-fusionCharts** wrapper, let's get familiar with the list of JavaScript files present in the **angular-fuioncharts** package:

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
`maps/*`|This folder contains Map Definition files required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition files of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be applied to charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

## Install Angular-FusionCharts via npm

This section outlines the steps to be executed for installing **angular-fusioncharts** via npm:

### Step 1: Install fusioncharts

```shell
$ npm install fusioncharts --save
```

### Step 2: Install `angular-fusioncharts`:

```shell
$ npm install angular-fusioncharts --save
```

### Step 3: Import FusionCharts library via npm in `app.module.ts`(in your application)

To import the `fusioncharts` library , copy the following line of code:

```shell
import * as FusionCharts from 'fusioncharts';
```

### Step 4: Import **FusionChartsModule** in `app.module.ts` (in your application):

```shell
import { FusionChartsModule } from 'angular-fusioncharts';
```

### Step 5: Import PowerCharts module:


```shell
import * as Powercharts from 'fusioncharts/fusioncharts.powercharts'; //PowerCharts
```
**Import FusionWidgets module:
```shell
import * as Widgets from 'fusioncharts/fusioncharts.widgets'; // Widgets
```

Note: To import specific charts, include the following import statements in your code:

**Gantt Chart:**

```shell
import * as Gantt from 'fusioncharts/fusioncharts.gantt'; // Gantt
```
**Treemap**

```shell
import * as Treemap from 'fusioncharts/fusioncharts.treemap'; // Treemap
```
**Zoomscatter**

```shell
import * as Zoomscatter from 'fusioncharts/fusioncharts.zoomscatter'; //Zoom Scatter
```
**Zoomline**

```shell
import * as Zoomline from 'fusioncharts/fusioncharts.zoomline'; //Zoom Line
```
**Overlapped Bar2D and Column2D charts

```shell
import * as Overlappedbar2d from 'fusioncharts/fusioncharts.overlapped2d'; //Overlapped Bar 2D
import * as Overlappedcolumn2d from 'fusioncharts/fusioncharts.overlappedcolumn2d'; //Overlapped Column 2D
```

The above steps completes the installation process. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/angular/angular/your-first-chart-using-angular '@@open-newtab').

## Include Maps via npm

The `fusioncharts` package contains only two map definitions in `fusioncharts/maps` directory - the **World Map**, and the **Map of USA**. This is done to keep the package lightweight. To use any of these two map definition files follow the steps given below:

**Step 1**: Include the core FusionCharts library:
```shell
 import * as FusionCharts from 'fusioncharts/core';
 ```
 **Step 2:** Load the `FusionMaps` renderer and the map definition file:

```Shell
import * as FusionCharts from 'fusioncharts/core';
import * as Maps from 'fusioncharts/fusioncharts.maps'; // Maps
import * as World from 'fusioncharts/maps/es/fusioncharts.world' // World Map

// Add the chart as dependency
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(FusionMaps);
FusionCharts.addDep(World);

// Create an Instance with map options
    var salesByState =   new  FusionCharts({
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


```Shell
$ npm install fusionmaps
```
Once the fusionmaps package is installed you will find all the map definition files in `fusionmaps/maps/es` folder. 

The `fusionmaps` package is dependent on the `fusioncharts` package. Therefore, to use fusionmaps, it is necessary to first include fusioncharts in your project and map renderer as shown below:

```shell
import * as FusionCharts from 'fusioncharts/core';
import * as FusionMaps from 'fusioncharts/maps';
FusionCharts.addDep(FusionMaps);
```
Load the map definition file(s) from the `fusionmaps` package for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**.  

Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. 

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format. So, the complete format will be `fusioncharts.california`.

```shell
import * as FusionCharts from 'fusioncharts/core';
import * as FusionMaps from 'fusioncharts/maps';
import * as California from 'fusionmaps/maps/es/fusioncharts.california';
FusionCharts.addDep(FusionMaps);
FusionCharts.addDep(California);
```
> It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the `fusioncharts` directory, all map definition files are stored in the `maps/es` directory and are fetched from there.

## Include Themes via **npm**

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allows you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme).

To include themes follow the steps below:

**Step 1**: Import FusionCharts core library:

```shell
import * asFusionCharts from 'fusioncharts/core'
```

**Step 2**: Import the theme engine

```shell
import * as ThemeEngine from 'fusioncharts/features/theme-engine';
FusionCharts.addDep(ThemeEngine);
```

**Step 3**: Include the theme file:

```shell
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.fusion'
FusionCharts.addDep(FusionTheme);
```

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').