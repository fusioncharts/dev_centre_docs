---
title: Installation | FusionCharts
description: The **Vue-FusionCharts** component lets you include FusionCharts in your VueJS projects and add interactive JavaScript charts and graphs to your VueJS applications.
heading: Installation
chartPresent: false
---

The **Vue-FusionCharts** component lets you include FusionCharts in your VueJS projects and adds interactive JavaScript charts and graphs to your VueJS applications. Before we start the installation process of the component, some of the salient features of **Vue-FusionCharts** are:

* Easily create charts in JavaScript using your Vue code.
* Can render charts using "props" binding. There are more than 50 props that you can use.
* Accepts data in three formats:
    - JSON
    - XML
    - An URI pointing to a file containing JSON/XML data. However, each chart/map expects data to be formatted in a specific manner, and the data you provide must comply with the required format.
* Auto-updates the chart object when the data source is modified.

In this article, we will demonstrate how to download and install the `Vue-FusionCharts` component and all the other dependencies on your system. You can install FusionCharts in your Vue project using any of the two modes given below:

## Choose your mode of installation:

<table>
    <tr>
        <td align="center">[npm]({% site.baseurl %}/getting-started/vuejs/install-using-vuejs#install-fusioncharts-via-npm-2)</td>
        <td align="center">[Direct JavaScript files]({% site.baseurl %}/getting-started/vuejs/install-using-vuejs#install-using-direct-JavaScript-files-8)</td>
    </tr>
</table>

## Install FusionCharts via **npm**

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

To include the `vue` component, do the following:

```Shell
import Vue from 'vue';
```

To include the 'vue-fusioncharts' component, do the following:

```Shell
import VueFusionCharts from 'vue-fusioncharts';
```

To include the `fusioncharts` class, do the following:

```Shell
import FusionCharts from 'fusioncharts/core';
import Charts from 'fusioncharts/charts';

Note: To use charts and gauges from PowerCharts and Widgets, import their respective modules using:

import PowerCharts from 'fusioncharts/powercharts'; // for PowerCharts
import Widgets from 'fusioncharts/widgets'; // for Widgets
```

To add chart dependency, do the following:

```Shell
// FusionCharts.addDep([ChartType])

FusionCharts.addDep(Charts);
```

**Include only specific chart modules:**

To register using a specific chart type, import the specific chart instead of all the charts after importing the `fusioncharts` class. Also, you need to add dependencies for the specific chart type, as shown in the code below:

To include the `fusioncharts` class, do the following:

```Shell
import FusionCharts from 'fusioncharts/core';
```

To include the specific chart from `viz` folder, do the following:

```Shell
// import ChartType from 'fusioncharts/viz/[ChartType]'

import Column2D from 'fusioncharts/viz/column2d'
```

To add chart dependency, do the following:

```Shell
// FusionCharts.addDep(ChartType);

FusionCharts.addDep(Column2D);
```

**Register using multiple specific chart types:**

To register using multiple specific chart types, import the specific charts instead of all the charts after importing the `fusioncharts` class. Also, you need to add the dependency for all the specific chart types as shown in the code below:

To include the `fusioncharts` class, do the following:

```Shell
import FusionCharts from 'fusioncharts/core';
```

To include more than one chart from `viz` folder, do the following:

```Shell
// import ChartType from 'fusioncharts/viz/[ChartType]'

import Column2D from 'fusioncharts/viz/column2d';
import Line2D from 'fusioncharts/viz/line2d';
```

To add chart dependency, do the following:

```Shell
// FusionCharts.addDep(ChartType);

FusionCharts.addDep(Column2D);
FusionCharts.addDep(Line2D);
```

### Step 4: Register the vue-component

Once the `fusioncharts` class is registered you need to register the `vue-component`. You can do this in two modes:

**Globally**

In your JavaScript code, use the `Vue.use()` method to register the `vue-fusioncharts` component globally. Registering the component globally allows you to use them in the template of any root Vue instance created after registration.

To include the `vue` component, do the following:

```Shell
import Vue from 'vue';
```

To include the `vue-fusioncharts` component, do the following:

```Shell
import VueFusionCharts from 'vue-fusioncharts';
```

To include the `fusioncharts` class, do the following:

```Shell
import FusionCharts from 'fusioncharts/core';
```

To include the specific chart from `viz` folder, do the following:

```Shell
// import ChartType from 'fusioncharts/viz/[ChartType]'

import Column2D from 'fusioncharts/viz/column2d';
```

To add chart dependency, do the following:

```Shell
// FusionCharts.addDep(ChartType);

FusionCharts.addDep(Column2D);
```

To register the **VueFusionCharts** component globally, do the following:

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

To include the core FusionCharts files, do the following:

```Shell
import FusionCharts from 'fusioncharts/core'
```

To include the **core map** files from maps, do the following:

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

To add the map and definition as the dependency to the core, do the following:

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

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project.

In your JavaScript code, use the `Vue.use()` method to register the `vue-fusioncharts` component.

To include the core FusionCharts files, do the following:

```Shell
import FusionCharts from 'fusioncharts/core'
```

To include the **theme engine extension**, do the following:

```Shell
import ThemeEngine from 'fusioncharts/features/theme-engine';
```

To include the theme file, do the following:

```Shell
import fusion from 'fusioncharts/themes/es/fusioncharts.fusion'
```

To add `ThemeEngine` and `fusion` as dependencies to the core, do the following:

```Shell
FusionCharts.addDep(ThemeEngine);  (ThemeEngine - reference from above)
FusionCharts.addDep(fusion); (fusion - reference from above)
```

## Install using Direct JavaScript files

In order to install and start working with Vue-FusionCharts you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT download package which contains:

* JavaScript files to render Charts, Widgets and powerCharts under the **js** folder.
* JavaScript files to render maps under **js > maps** folder.
* JavaScript files to include themes under **js > themes** folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/images/.png)

> It is recommended that you copy the **js** folder from within fusioncharts-suite-xt to your project's JavaScript folder.

* The download package also contains `vue-fusioncharts.js` file under **fusioncharts-suite-xt > integrations > frontend-plugins > vue** folder. This folder will also contain Vue-FusionCharts specific Export Handlers. The folder structure is shown below:

![Vue Js Folder]({% site.baseurl %}/images/.png)

> If you are using 3.12.2 or older versions, download v3.13.0 to get the **vue** folder in the FusionCharts Suite XT package. 

> It is recommended that you copy the **vue** folder from within **fusioncharts-suite-xt > integrations > frontend-plugins > vue** to your project's JavaScript folder.

Installation of FusionCharts Suite XT involves copying and pasting the JavaScript files from the downloaded package into your project folder. 

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps.

Following is the list of JavaScript files present in your `fusioncharts-suite-xt/js` folder:

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
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

In order to install, create an HTML file and follow the steps given below:

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

That completes the installation of FusionCharts in your application. To see how to create a chart, [click here]({% site.baseurl %}/getting-started/vuejs/your-first-chart-using-vuejs '@@open-newtab').

### Installing FusionMaps (map visualizations) for your project

To render maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files and include them to your HTML as shown below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

```
<script type="text/JavaScript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/JavaScript" src="path/to/local/fusioncharts.world.js"></script>
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

In a theme file, you can centralize the following aspects of a chart, gauge, or map:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

FusionCharts Suite XT ships with the following predefined themes:

* `fusion`
* `zune`
* `ocean`
* `carbon`

To include a theme to your chart, include its corresponding JavaScript file in your HTML page for that theme as shown in the code below:

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
<script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project.