---
title: Installation | FusionCharts
description: This article outlines the steps to install fusioncharts and fusioncharts ember component to create charts.
heading: Installation
chartPresent: false
---

The **ember-fusioncharts** component, provide bindings for FusionCharts JavaScript charting library. It lets you add interactive JavaScript charts and graphs to your web and mobile applications using EmberJS component.

In this article, we will show you how to download and install the `ember-fusionCharts` component and all the other dependencies on your system.

> Unlike other tech stacks **ember-fusioncharts** can only be used via `npm`.

Before installing and starting to work with **ember-fusioncharts** component, let's get familiar with the JavaScript files present in the **FusionCharts** package:

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
`maps/*`|This folder contains Map Definition files required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition files of all the 1400+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/map-definition-files). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be applied to charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

## Install Ember-FusionCharts via npm

This section outlines the steps for installing **ember-fusioncharts** via npm:

**Step 1:** Install `ember-fusioncharts`
 
You can install `ember-fusioncharts` component for any of the following CLI:

**Modern Ember CLI**

```PowerShell
$ ember install ember-fusioncharts
```

**Earlier Ember CLI (and addon developers)**

```PowerShell
$ npm install ember-fusioncharts --save-dev
$ ember g ember-fusioncharts
```

**Step 2:** Install `fusioncharts` core library

```PowerShell
$ npm install fusioncharts --save
```

The above steps complete the installation of `ember-fusioncharts`.

To start using `ember-fusioncharts` component, import fusioncharts library and it modules to your `ember-cli-build.js` file:

**Step 1:** Import FusionCharts module

```JavaScript
/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    let app = new EmberApp(defaults, {
    // Add options here
    });

    // Import fusioncharts library
    app.import('node_modules/fusioncharts/fusioncharts.js');
    // Use `app.import` to import additional libraries/files
    return app.toTree();
};
```

**Step 2:** Import Specific Modules

**Charts**

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.charts.js');
```

**PowerCharts**

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.powercharts.js');
```

**FusionWidgets**

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.widgets.js');
```

**Note:** To import specific charts, include the following import statements in your code:

**Gantt Chart**

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.gantt.js');
```

**Treemap**

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.treemap.js');
```

**ZoomScatter**

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.zoomscatter.js');
```

**ZoomLine**

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.zoomline.js');
```

**Overlapped Bar2D Chart**

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.overlappedbar2d.js');
```

**Overlapped Bar2D Chart**

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.overlappedcolumn2d.js');
```

## Include Map via npm

FusionCharts Suite XT provides **1400+** data-driven maps as a part of the FusionMaps product. To reduce the size of the download package, the `fusioncharts` package contains only two map definitions in `fusioncharts/maps` directory - the **World Map**, and the **Map of USA**. To use any of these two map definition files, follow the steps given below:

**Step 1:** Include the core FusionCharts library

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.js');
```

**Step 2:** Load the `FusionMaps` renderer and the map definition file

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.js');
app.import('node_modules/fusioncharts/fusioncharts.maps.js');
app.import('node_modules/fusioncharts/maps/fusioncharts.world.js');
```

**Load other map definition files**

To use any other map (except world and USA) from the **1400+** maps, [download](https://www.fusioncharts.com/download/map-definition-files) the map definition files, then copy those map files to your current `maps` folder. The map definition files are named in the `fusioncharts.[MAP_ALIAS].js` format, where MAP_ALIAS represents the country, state or region name.

**Install FusionMaps**

```PowerShell
$ npm install fusionmaps
```

Once the fusionmaps package is installed you will find all the map definition files in `fusionmaps/maps` folder.

**Note:** The `fusionmaps` package is dependent on the `fusioncharts` package. Therefore, to use fusionmaps, it is necessary to first include `fusioncharts` in your project and the map renderer as shown below:

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.js');
app.import('node_modules/fusioncharts/fusioncharts.maps.js');
```

Load the map definition file(s) from the `fusionmaps` package for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**.

Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files.

Therefore, assuming you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format. So, the complete format will be `fusioncharts.california`.

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.js');
app.import('node_modules/fusioncharts/fusioncharts.maps.js');
app.import('node_modules/fusioncharts/maps/fusioncharts.california.js');
```

> It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the `fusioncharts` directory, all map definition files are stored in the `maps` directory and are fetched from there.

## Include Themes via npm

[Themes]({% site.baseurl %}/themes/introduction-to-themes) shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges, and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all charts that use the theme)

To include themes, follow the steps given below:

**Step 1:** Import FusionCharts core library

```JavaScript
app.import('node_modules/fusioncharts/fusioncharts.js');
```

**Step 2:** Include the theme file

```JavaScript
app.import('node_modules/themes/fusioncharts.theme.fusion.js');
```

> Only including the `fusioncharts.theme.fusion.js` file will not apply the theme. To apply the theme, set the value of `theme` attribute to the respective name of the theme. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes).