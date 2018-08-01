---
permalink: getting-started/react/install-using-react.html
title: Installation | FusionCharts
description: The React-FusionCharts Component, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications.
heading: Installation
chartPresent: false
---

The **React-FusionCharts** component lets you include **FusionCharts** in your **React** projects and adds interactive JavaScript charts and graphs to your React applications. Before we get into the installation process of the component, let's take a look at the salient features of **React-FusionCharts** component:

* Easily create charts in JavaScript using your React code.

* Can render charts using **props** binding. There are more than 50 props that you can use.
* Accepts data in three formats:
    - JSON
    - XML
    - An URI pointing to a file containing JSON/XML data. However, each chart/map expects data to be formatted in JSON data structure, and the data you provide must comply with the required format.

In this article, we will show you how you to download and install the React-FusionCharts component and all the other dependencies on your system. 

## Choose your mode of installation:

You can use FusionCharts in your React project using any of the two modes given below:

<table>
    <tr>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/react/install-using-react#install-using-direct-javascript-files-2"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_JS.svg"></a></td>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/react/install-using-react#install-fusioncharts-via-npm-5"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_NPM.svg"></a></td>
    </tr>
</table>

## Install using Direct JavaScript files

In order to install and start working with React-FusionCharts you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to apply themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> We recommend that you copy all the files/folders from `fusioncharts-suite-xt > js` folder to your project folder.

* The download package also contains **react-fusioncharts.js** file from `fusioncharts-suite-xt > integrations > react > js` folder. The folder structure is shown below:

![React Js Folder]({% site.baseurl %}/gif/react-folder-structure.gif)

> Both the minified (compressed) and source (uncompressed) copies of React files are available in the folder. The uncompressed file `react-fusioncharts.js` is used during development or debugging, whereas the compressed file `react-fusioncharts.min.js` saves bandwidth and improves performance in production. The folder also contains the source map file `react-fusioncharts.js.map` for use, when debugging with a compressed file.

> The `react` folder in the FusionCharts Suite XT package is available from v3.13.0.

> We recommend that you copy the JavaScript files of the `react-fusioncharts.js` file from `fusioncharts-suite-xt > integrations > react > js` to your project folder.

Following is the list of JavaScript files present in your `fusioncharts-suite-xt` folder:

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

After that, you can include the FusionCharts JavaScript library in the web applications and start building your charts, gauges, and maps. Create an HTML file and follow the steps below:

**Step 1:** Include [React](https://reactjs.org/ '@@open-newtab') core library:

```HTML
<script type="text/javascript" src="path/to/local/react.js"></script>
<script type="text/javascript" src="path/to/local/react-dom.js"></script>
```
**Step 2:** Include [Babel](https://babeljs.io/ '@@open-newtab') for [JSX](https://reactjs.org/docs/introducing-jsx.html '@@open-newtab') transpiling

```HTML
<script type="text/javascript" src="path/to/local/babel-core.js"></script>
```

**Step 3:** Include the FusionCharts package

```HTML
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
```

**Step 4:** Include the react-fusioncharts module

```HTML
<script type="text/javascript" src="path/to/local/react-fusioncharts.js"></script>
```

**Step 5 (optional):** Include the theme file.

This step is optional, the chart will render with the default theme even if the theme file is not included.

```HTML
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

The consolidated code is shown below:

```HTML
<head>
    <meta charset="utf-8">
    <title>React - FusionCharts</title>
    <!-- React -->
    <script type="text/javascript" src="path/to/local/react.js"></script>
    <script type="text/javascript" src="path/to/local/react-dom.js"></script>
    <!-- Babel -->
    <script type="text/javascript" src="path/to/local/babel-core.js"></script>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- React-FusionCharts -->
    <script type="text/javascript" src="path/to/local/react-fusioncharts.js"></script>
    <!-- Fusion Theme -->
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>
```

This completes the installation process. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/react/your-first-chart-using-react '@@open-newtab').

### Installing FusionMaps for your project

FusionCharts Suite XT provides **1400+** data-driven maps as a part of the product FusionMaps. 
To reduce the size of the download package, we have included the `fusioncharts.maps.js` file and only two map definition files - the **World Map**, and the **map of USA**. However, you can [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the rest the of map definition files, when you need to plot maps of those countries/regions.

> If you are using version v3.12.2 or older, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the latest version and replace for upgrading to the latest map definition files.

To render a map, you need the core FusionCharts library `fusioncharts.js` along with `fusioncharts.maps.js`, and the map definition files as shown below:

```HTML
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"></script>
<script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>

```

In the above example, we’ve included the World Map, whose map definition (path) is contained in `maps/fusioncharts.world.js`.

**Load other map definition files**

To use any other map (except world and USA) from the 1400+ maps, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files, then copy those map files to your current `/maps` folder. The map definition files are named in the format `fusioncharts.[MAP_ALIAS].js`, where `MAP_ALIAS` represents the country, state or region name.

```
<!-- The next line describes the format for more map definition files -->
<script type="text/javascript" src="path/to/local/maps/fusioncharts.[MAP_ALIAS].js"></script>

```

Therefore, assuming that you need to render the map of **California**, the alias name **california** replaces **MAP_ALIAS** in the format as shown below:

```
<!-- The next line describes the format for more map definition files -->
<script type="text/javascript" src="path/to/local/maps/fusioncharts.california.js"></script>

```

The consolidated code (which also includes the `react.js`, `fusioncharts.js` and `react-fusioncharts.js`) is as shown below:

```HTML
<head>
    <meta charset="utf-8">
    <title>React - FusionCharts</title>
    <!-- react -->
    <script type="text/javascript" src="path/to/local/react.js"></script>
    <script type="text/javascript" src="path/to/local/react-dom.js"></script>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- React-FusionCharts -->
    <script type="text/javascript" src="path/to/local/react-fusioncharts.js"></script>
    <!-- FusionMaps -->
    <script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
    <!--California -->
    <script type="text/javascript" src="path/to/local/maps/fusioncharts.california.js"></script>
    <!-- Fusion Theme -->
    <script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>
```

> Click [here]({% site.baseurl %}/chart-guide/getting-started/list-of-maps '@@open-newtab') to explore all the maps available in FusionMaps XT.

### Themes

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, you can centrally customize the following aspects of a chart, gauge, or map:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

The FusionCharts Suite download package also contains the predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

To include a theme to your chart, include its corresponding JavaScript file in your HTML page for that theme as shown in the code below:

```HTML
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

> Including the `fusioncharts.theme.fusion.js` file will not apply the theme. To apply the theme you have to set the value of `theme` attribute to the respective name of the theme. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').

## Install FusionCharts via npm

The `fusioncharts` package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

This section outlines the steps to be executed for installing all the node modules via npm and rendering charts using **react-fusioncharts** component.

**Step 1:** Install the `react-fusioncharts` module:

```PowerShell
$ npm install react-fusioncharts --save
```

**Step 2:** Install `fusioncharts` package:

```PowerShell
$ npm install fusioncharts --save
```

**Step 3**: Include `React-FusionCharts`:

```JavaScript
import ReactFC from 'react-fusioncharts';
```

**Step 4:** Include the `fusioncharts` library:

```JavaScript
import FusionCharts from 'fusioncharts/core';
```

**Step 5** : Include specific modules:

```JavaScript
// E.g. - import ChartType from fusioncharts/viz/[ChartType]
import Column2D from 'fusioncharts/viz/column2d';
```

**Step 6** : Add the charts as the dependency to the core:

```JavaScript
ReactFC.fcRoot(FusionCharts, Column2D);
```

The consolidated code is shown below:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
    type: 'column2d',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
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
};

ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);

```

## Include Maps via npm

To reduce the size of the download package, the `fusioncharts` package contains only two map definitions in `fusioncharts/maps` directory - the **World Map**, and the **Map of USA**. To use any of these two map definition files follow the steps given below:

**Step 1:** Include React FusionCharts plugin

```JavaScript
import ReactFC from 'react-fusioncharts';
```

**Step 2:** Include the core FusionCharts library

```JavaScript
import FusionCharts from 'fusioncharts/core';
```

**Step 3:** Load the `FusionMaps` renderer and the map definition file

```JavaScript
import FusionMaps from 'fusioncharts/maps';
import World from 'fusioncharts/maps/es/fusioncharts.world';
```

**Step 4:** Add the map as the dependency to the core

```JavaScript
// Maps -  reference from above
ReactFC.fcRoot(FusionCharts, Maps, World);
```

**Load other map definition files**

You can use rest of the map definition files other than the **World Map** and the **Map of USA** that are shipped with the `fusioncharts` package. To do so, install `fusionmaps` package which contains all the map definition files as shown below:

```PowerShell
$ npm install fusionmaps
```

Once the fusionmaps package is installed you will find all the map definition files in `fusionmaps/maps/es` folder. 

> The `fusionmaps` package is dependent on the `fusioncharts` package. Therefore, to use fusionmaps, it is necessary to first include fusioncharts in your project and map renderer as shown below:

```JavaScript
import FusionCharts from 'fusioncharts/core';
import FusionMaps from 'fusioncharts/maps';
```

Load the map definition file(s) from the `fusionmaps` package for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**.  

Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. 

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format. So, the complete format will be `fusioncharts.california`.

The consolidated code to render a **world** map is:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts/core';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/es/fusioncharts.world';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

const chartConfigs = {
    type: 'world',
    width: '800',
    height: '5500',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Average Annual Population Growth",
            "subcaption": " 1955-2015",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
        },
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
    },
};

ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);
```

> It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the `fusioncharts` directory, all map definition files are stored in the `maps/es` directory and are fetched from there.


### Include Themes via npm

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

To include themes, follow the steps below:

**Step 1**: Include `React-FusionCharts`:

```JavaScript
import ReactFC from 'react-fusioncharts';
```

**Step 2:** Import `fusioncharts` core library:

```javaScript
import FusionCharts from 'fusioncharts/core';
```

**Step 3:** Import the theme file:

```JavaScript
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
```

**Step 4:** Add `fusion` theme as dependency to the core:

```JavaScript
ReactFC.fcRoot(FusionCharts, Fusion);
```

> Including the `fusioncharts.theme.fusion.js` file will not apply the theme. To apply the theme you have to set the value of `theme` attribute to the respective name of the theme. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').