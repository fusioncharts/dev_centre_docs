---
title: Installation | FusionCharts
description: The Vue-FusionCharts wrapper lets you include FusionCharts in your VueJS projects and add interactive JavaScript charts and graphs to your VueJS applications.
heading: Installation
chartPresent: false
---

The `Vue-FusionCharts` wrapper lets you include FusionCharts in your Vue projects and adds interactive JavaScript charts and graphs to your Vue applications. Before we start the installation process of the wrapper, some of the salient features of `Vue-FusionCharts` are:

* Easily create charts in JavaScript using your Vue code.
* Can render charts using "props" binding. There are more than 50 props that you can use.
* Accepts data in three formats:
    - JSON
    - XML
    - An URI pointing to a file containing JSON/XML data. However, each chart/map expects data to be formatted in a specific manner, and the data you provide must comply with the required format.

In this article, we will demonstrate how to download and install the `Vue-FusionCharts` wrapper and all the other dependencies on your system. 

## Choose your mode of installation:

You can install FusionCharts in your Vue project using any of the two modes given below:

<table>
    <tr>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/vue/install-using-vuejs#install-using-direct-javascript-files-2"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_JS.svg"></a></td>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/vue/install-using-vuejs#include-fusioncharts-via-npm-5"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_NPM.svg"></a></td>
    </tr>
</table>

## Install using Direct JavaScript files

In order to install and start working with `Vue-FusionCharts` you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to include themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended to copy the `js` folder from the FusionCharts Suite XT download package to your project folder.

* The download package also contains files of the `Vue-FusionCharts` wrapper under `fusioncharts-suite-xt > integrations > vue` folder.

The folder structure is shown below:

![Vue Js Folder]({% site.baseurl %}/gif/vue-folder-structure.gif)

Both the minified (compressed) and source (uncompressed) copies of Vue files are available in the folder. The uncompressed file `vue-fusioncharts.js` is used during development or debugging, whereas the compressed file `vue-fusioncharts.min.js` saves bandwidth and improves performance in production. The folder also contains the sourcemap file `vue-fusioncharts.js.map` for use, when debugging with a compressed file.

> If you are using 3.12.2 or older versions, download v3.13.0 to get the `vue` folder in the FusionCharts Suite XT package. 

> It is recommended to copy the `vue` folder from `fusioncharts-suite-xt > integrations` to your project folder.

Following is the list of files present in your `fusioncharts-suite-xt/js` folder:

File Name|Description|
-|-
`fusioncharts.js`|This is the core FusionCharts library, which you need to import in all your pages where you want to generate a chart, gauge or a map.|
`fusioncharts.charts.js`|This file is required to render all charts present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.charts.js`.|
`fusioncharts.widgets.js`|This file is required to render all gauges present under FusionWidgets XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.widgets.js`.|
`fusioncharts.powercharts.js`|This file is required to render all charts present under PowerCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.powercharts.js`.|
`fusioncharts.gantt.js`|This file is required to render the Gantt chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.gantt.js`.|
`fusioncharts.treemap.js`|This file is required to render the Treemap. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.treemap.js`.|
`fusioncharts.zoomscatter.js`|This file is required to render the Zoom scatter chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomscatter.js`.|
`fusioncharts.zoomline.js`|This file is required to render the Zoom line charts. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomline.js`.|
`fusioncharts.overlappedbar2d.js`|This file is required to render the Overlapped Bar 2D chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedbar2d.js`.|
`fusioncharts.overlappedcolumn2d.js`|This file is required to render the Overlapped Column 2D chart, present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedcolumn2d.js`.|
`fusioncharts.maps.js`|This file is the core map renderer file. The map definitions, however, are stored separately, as explained next. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.maps.js`.|
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download definitions of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective file names.|

Installation of FusionCharts Suite XT is simply copying and pasting the files from the downloaded package into your project folder. 

After that, you can include the file in your web applications and start building your charts, gauges, and maps. In order to include, create an HTML file and follow the steps given below:

**Step 1: Include Vue core library:**

```html
<script type="text/JavaScript" src="path/to/local/vue.js"></script>
```

**Step 2: Include the FusionCharts package:**

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
```

**Step 3: Include the vue-fusioncharts module:**

```html
<script type="text/JavaScript" src="path/to/local/vue-fusioncharts.js"></script>
```

**Step 4: Include the theme file:**

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
```

The consolidated code looks like as shown below:

```html
<head>
    <meta charset="utf-8">
    <title>Vue - FusionCharts</title>
    <!-- vue -->
    <script type="text/JavaScript" src="path/to/local/vue.js"></script>
    <!-- FusionCharts -->
    <script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
    <!-- Vue-FusionCharts -->
    <script type="text/JavaScript" src="path/to/local/vue-fusioncharts.js"></script>
    <script type="text/JavaScript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
</head>
```

This completes the installation of FusionCharts in your application. To see how to create a chart, [click here]({% site.baseurl %}/getting-started/vuejs/your-first-chart-using-vuejs '@@open-newtab').

### Installing FusionMaps (map visualizations) for your project

FusionCharts can provide more than 1000 maps that cater to all your map visualization requirements. But to keep the library lightweight, by default it ships only with two maps - the **world** map, and the **map of the USA**. To render rest of the maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files and include them in to your HTML as shown below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

```
<script type="text/JavaScript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/JavaScript" src="path/to/local/fusioncharts.world.js"></script>

!-- The next line describes the format for more map definition files -->
<script type="text/javascript" src="path/to/local/[MAP_ALIAS].js"></script>
```

The `fusioncharts.world.js` file includes path drawings of the map of **world**.

The consolidated code(which also includes the `vue.js`, `fusioncharts.js` and `vue-fusioncharts.js`)  looks like as shown below:

```html
<head>
    <meta charset="utf-8">
    <title>Vue - FusionCharts</title>
    <!-- vue -->
    <script type="text/JavaScript" src="path/to/local/vue.js"></script>
    <!-- FusionCharts -->
    <script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
    <!-- Vue-FusionCharts -->
    <script type="text/JavaScript" src="path/to/local/vue-fusioncharts.js"></script>
    <!-- FusionMaps -->
    <script type="text/JavaScript" src="path/to/local/fusioncharts.maps.js"></script>
    <!--world -->
    <script type="text/JavaScript" src="path/to/local/fusioncharts.world.js"></script>
</head>
```

### Themes

Themes shipped with FusionCharts Suite XT allows you to create centralized theme files and apply those themes to any number of charts.

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

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project and set the theme attribute to the correct name. Which could be `zune`, `carbon`, `ocean`.

## Include FusionCharts via **npm**

The `fusioncharts` package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

This section outlines the steps to be executed for installing all the node modules via npm and rendering charts using the **Vue-FusionCharts** component.

### Step 1: Install the `fusioncharts` module via npm

To install the `fusioncharts` module, execute the following command in the terminal:

```Shell
npm install fusioncharts --save
```

### Step 2: Install the `vue-fusioncharts` module via npm

To install the `vue-fusioncharts` module, execute the following command in the terminal:

```Shell
npm install vue-fusioncharts --save
```

You can also combine the above commands in a single line, as shown below:

```Shell
npm install fusioncharts vue-fusioncharts --save
```

### Step 3: Include the fusioncharts module

Once the installation is done, you need to register the `fusioncharts` module. You can register in multiple ways like:

**Register using all charts:**

To include the `vue` component, copy the following line of code:

```Shell
import Vue from 'vue';
```

To include the 'vue-fusioncharts' component, copy the following line of code:

```Shell
import VueFusionCharts from 'vue-fusioncharts';
```

To include the `fusioncharts` class, copy the following line of code:

```Shell
import FusionCharts from 'fusioncharts/core';
import Charts from 'fusioncharts/charts';

Note: To use charts and gauges from PowerCharts and Widgets, import their respective modules using:

import PowerCharts from 'fusioncharts/powercharts'; // for PowerCharts
import Widgets from 'fusioncharts/widgets'; // for Widgets
```

To add chart dependency, copy the following line of code:

```Shell
// FusionCharts.addDep([ChartType])

FusionCharts.addDep(Charts);
```

**Include only specific chart modules:**

To register using a specific chart type, import the specific chart instead of all the charts after importing the `fusioncharts` class. Also, you need to add dependencies for the specific chart type, as shown in the code below:

To include the `fusioncharts` class, copy the following line of code:

```Shell
import FusionCharts from 'fusioncharts/core';
```

To include the specific chart from `viz` folder, copy the following line of code:

```Shell
// import ChartType from 'fusioncharts/viz/[ChartType]'

import Column2D from 'fusioncharts/viz/column2d'
```

To add chart dependency, copy the following line of code:

```Shell
// FusionCharts.addDep(ChartType);

FusionCharts.addDep(Column2D);
```

**Register using multiple specific chart types:**

To register using multiple specific chart types, import the specific charts instead of all the charts after importing the `fusioncharts` class. Also, you need to add the dependency for all the specific chart types as shown in the code below:

To include the `fusioncharts` class, copy the following line of code:

```Shell
import FusionCharts from 'fusioncharts/core';
```

To include more than one chart from `viz` folder, copy the following line of code:

```Shell
// import ChartType from 'fusioncharts/viz/[ChartType]'

import Column2D from 'fusioncharts/viz/column2d';
import Line2D from 'fusioncharts/viz/line2d';
```

To add chart dependency, copy the following line of code:

```Shell
// FusionCharts.addDep(ChartType);

FusionCharts.addDep(Column2D);
FusionCharts.addDep(Line2D);
```

### Step 4: Register the vue-component

Once the `fusioncharts` class is registered you need to register the `vue-component`. You can do this in two modes:

**Globally**

In your JavaScript code, use the `Vue.use()` method to register the `vue-fusioncharts` component globally. Registering the component globally allows you to use them in the template of any root Vue instance created after registration.

To include the `vue` component, copy the following line of code:

```Shell
import Vue from 'vue';
```

To include the `vue-fusioncharts` component, copy the following line of code:

```Shell
import VueFusionCharts from 'vue-fusioncharts';
```

To include the `fusioncharts` class, copy the following line of code:

```Shell
import FusionCharts from 'fusioncharts/core';
```

To include the specific chart from `viz` folder, copy the following line of code:

```Shell
// import ChartType from 'fusioncharts/viz/[ChartType]'

import Column2D from 'fusioncharts/viz/column2d';
```

To add chart dependency, copy the following line of code:

```Shell
// FusionCharts.addDep(ChartType);

FusionCharts.addDep(Column2D);
```

To register the **VueFusionCharts** component globally, copy the following line of code:

```Shell
Vue.use(VueFusionCharts);
```

**Locally**

Registering components globally ensures that even if you want to stop using that component, it will be a part of your final build. This results in an increase in JavaScript code that the users have to download. To avoid bloated code, we recommend registering the component locally. 

In your JavaScript code, use the `Vue.component()` method to register the `vue-fusioncharts` component locally. To register locally, use `Vue.component()` instead of `Vue.use()`, the rest of the code remains same. Refer to the code below:

```Shell
Vue.component('fusioncharts', FCComponent);
```

### Include Maps via npm

In your JavaScript code, use the `Vue.use()` method to register the `vue-fusioncharts` component.

To include the core FusionCharts files, copy the following line of code:

```Shell
import FusionCharts from 'fusioncharts/core'
```

To include the **core map** files from maps, copy the following line of code:

```Shell
import Maps from 'fusioncharts/maps';
```

To include the **map definition** file you want to render, following:

```Shell
import World from 'fusioncharts/maps/es/fusioncharts.world';
```

> If you want to render a map which is not in the `fusioncharts` package (World and USA), then you need to install **fusionmaps**, which contains all the ES6 map definitions:
* npm install fusionmaps
* ES-6 definitions can be found in `node_modules/fusionmaps/maps/es/fusioncharts.[MAP-ALIAS].js`

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

To add the map and definition as the dependency to the core, copy the following line of code:

```Shell
FusionCharts.addDep(Maps); (Maps -  reference from above)
FusionCharts.addDep(World); (World - reference from above)
```

### Include Themes via npm

FusionCharts Suite XT ships with the following predefined themes:

* `fusion`
* `zune`
* `ocean`
* `carbon`

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project and set the theme attribute to the correct name. Which could be `zune`, `carbon`, `ocean`.

In your JavaScript code, use the `Vue.use()` method to register the `vue-fusioncharts` component.

To include the core FusionCharts files, copy the following line of code:

```Shell
import FusionCharts from 'fusioncharts/core'
```

To include the **theme engine extension**, copy the following line of code:

```Shell
import ThemeEngine from 'fusioncharts/features/theme-engine';
```

To include the theme file, copy the following line of code:

```Shell
import fusion from 'fusioncharts/themes/es/fusioncharts.fusion'
```

To add `ThemeEngine` and `fusion` as dependencies to the core, copy the following line of code:

```Shell
FusionCharts.addDep(ThemeEngine);  (ThemeEngine - reference from above)
FusionCharts.addDep(fusion); (fusion - reference from above)
```