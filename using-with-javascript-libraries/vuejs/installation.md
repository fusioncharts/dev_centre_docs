---
permalink: using-with-javascript-libraries/vuejs/installation.html
title: Installation | FusionCharts
description: The Vue-FusionCharts component lets you include FusionCharts in your VueJS projects and add interactive JavaScript charts and graphs to your VueJS applications.
heading: Installation
chartPresent: false
---

The Vue-FusionCharts component lets you include FusionCharts in your VueJS projects and adds interactive JavaScript charts and graphs to your VueJS applications. Before we get into the installation process of the component, let's take a look at what sets the VueJS component apart.

Some of the basic features of VueJS component are:

* Easily create charts in JavaScript using your Vue code.
* Can render charts using a **JSON/XML** URL or props array binding.
* Auto-updates the chart object when the data source is modified.

In this article, we will show you how you can download and install the `Vue-FusionCharts` component and all the other dependencies on your system. You can use FusionCharts in your Vue project using any of the two modes given below:

## Choose your mode of installation:

<table>
    <tr>
        <td align="center">[Direct JavaScript files]({% site.baseurl %}/using-with-javascript-libraries/vuejs/installation#install-using-direct-javascript-files-1)</td>
        <td align="center">[NPM]({% site.baseurl %}/using-with-javascript-libraries/vuejs/installation#install-fusioncharts-via-npm-4)</td>
    </tr>
</table>

## Install using Direct JavaScript files

In order to install and start working with Vue-FusionCharts you need to:

* [Download](https://vuejs.org/v2/guide/installation.html) the `Vue core library`.
* [Download](https://www.fusioncharts.com/vue-fusioncharts/) the Vue-FusionCharts plugin which contains the `vue-fusioncharts.js` file.
* [Download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT which contains the necessary JavaScript files.

Installation of FusionCharts Suite XT merely involves copying and pasting the JavaScript files from the download package into your project folder. The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/images/js-folder-structure.png)

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps.

Following is the list of JavaScript files present in your `fusioncharts-suite-xt` folder:

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
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download definition of all the 1000+ maps offered by FusionMaps XT from here. </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files (JSON & CSS). Refer each theme with their respective `JavaScript` and `CSS` file names.|

In order to install, create an HTML file and follow the steps below.

**Step 1: Include Vue core library:**

```html
<script type="text/javascript" src="path/to/local/vue.js"></script>
```

**Step 2: Include the FusionCharts package:**

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
```

**Step 3: Include the vue-fusioncharts module:**

```html
<script type="text/javascript" src="path/to/local/vue-fusioncharts.js"></script>
```

**Step 4: Include the theme file and CSS:**

```html
<script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.css"></script>
```

The consolidated code looks like as shown below:

```html
<head>
    <meta charset="utf-8">
    <title>Vue - FusionCharts</title>
    <!-- vue -->
    <script type="text/javascript" src="path/to/local/vue.js"></script>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- Vue-FusionCharts -->
    <script type="text/javascript" src="path/to/local/vue-fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.css"></script>
</head>
```

That completes the installation of FusionCharts in your application. To see how to create a chart, [click here]({% site.baseurl %}/using-with-javascript-libraries/vuejs/your-first-chart '@@open-newtab').

### Installing FusionMaps (map visualizations) for your project

In order to render maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files and include them to your HTML as shown below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this here.

```
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.california.js"></script>
```

The `fusioncharts.california.js` file includes path drawings of the map of **California**.

The consolidated code(which also includes the `vue.js`, `fusioncharts.js` and `vue-fusioncharts.js`)  looks like as shown below:

```html
<head>
    <meta charset="utf-8">
    <title>Vue - FusionCharts</title>
    <!-- vue -->
    <script type="text/javascript" src="path/to/local/vue.js"></script>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- Vue-FusionCharts -->
    <script type="text/javascript" src="path/to/local/vue-fusioncharts.js"></script>
    <!-- FusionMaps -->
    <script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
    <!--usa -->
    <script type="text/javascript" src="path/to/local/fusioncharts.california.js"></script>
</head>
```

### Themes

Themes shipped with FusionCharts Suite XT allows you to create centralized theme files (similar to CSS files) and apply those themes to any number of charts.

In a theme file, you can centralize the following aspects of a chart, gauge, or map:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

FusionCharts Suite XT ships with the following predefined themes:

* `fusion`
* `zune`
* `ocean`
* `carbon`

To include a theme to your chart, include its corresponding JavaScript file in your HTML page and the CSS file for that theme as shown in the code below:

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.css"></script>
```

The `fusioncharts.theme.fusion.js` file sets the theme as **fusion**. 

## Install FusionCharts via npm

Now, let's discuss how to install the fusioncharts module via npm. The fusioncharts package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

This section outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the Vue-FusionCharts component.

### Step 1: Install the fusioncharts module via npm

To install the `fusioncharts` module, execute the following command in the terminal:

```Shell
npm install fusioncharts --save
```

Step 2: Install the `vue-fusioncharts` module via npm

To install the `vue-fusioncharts` module, execute the following command in the terminal:

```Shell
npm install vue-fusioncharts --save
```

You can also combine the above commands in a single line, as shown below:

```Shell
npm install fusioncharts vue-fusioncharts --save
```

### Step 3: Include the fusioncharts module

Once the installation is done, you need to register the fusioncharts module. You can register in multiple ways as per your requirement like:

**Register using all charts:**

To include the `vue` component, execute the following command:

```Shell
import Vue from 'vue';
```

To include the 'vue-fusioncharts' component, execute the following command:

```Shell
import VueFusionCharts from 'vue-fusioncharts';
```

To include the fusioncharts class, execute the following command:

```Shell
import FusionCharts from 'fusioncharts/core';
import Charts from 'fusioncharts/charts';

Note: To use charts and gauges from PowerCharts and Widgets, import their respective modules using:

import PowerCharts from 'fusioncharts/powercharts'; // for PowerCharts
import Widgets from 'fusioncharts/widgets'; // for Widgets
```

To add chart dependency, execute the following command:

```Shell
// FusionCharts.addDep([ChartType])

FusionCharts.addDep(Charts);
```

**Include only specific chart modules:**

To register using a specific chart type, import the specific chart instead of all the charts after importing the fusioncharts class. Also, you need to add the dependency for the specific chart type as shown in the code below:

To include the fusioncharts class, execute the following command:

```Shell
import FusionCharts from 'fusioncharts/core';
```

To include the specific chart from `viz` folder, execute the following command:

```Shell
// import ChartType from 'fusioncharts/viz/[ChartType]'

import Column2D from 'fusioncharts/viz/column2d'
```

To add chart dependency, execute the following command:

```Shell
// FusionCharts.addDep(ChartType);

FusionCharts.addDep(Column2D);
```

**Register using multiple specific chart types:**

To register using multiple specific chart types, import the specific charts instead of all the charts after importing the fusioncharts class. Also, you need to add the dependency for all the specific chart types as shown in the code below:

To include the fusioncharts class, execute the following command:

```Shell
import FusionCharts from 'fusioncharts/core';
```

To include more than one chart from `viz` folder, execute the following command:

```Shell
// import ChartType from 'fusioncharts/viz/[ChartType]'

import Column2D from 'fusioncharts/viz/column2d';
import Line2D from 'fusioncharts/viz/line2d';
```

To add chart dependency, execute the following command:

```Shell
// FusionCharts.addDep(ChartType);

FusionCharts.addDep(Column2D);
FusionCharts.addDep(Line2D);
```

### Step 4: Register the vue-component

Once the fusioncharts module is registered you need to register the `vue-component`. You can do this in two modes:

**Globally**

In your Javascript code, use the `Vue.use()` method to register the vue-fusioncharts component globally. Registering the Vue component globally allows you to use them in the template of any root Vue instance created after registration.

To include the `vue` component, execute the following command:

```Shell
import Vue from 'vue';
```

To include the `vue-fusioncharts` component, execute the following command:

```Shell
import VueFusionCharts from 'vue-fusioncharts';
```

To include the fusioncharts class, execute the following command:

```Shell
import FusionCharts from 'fusioncharts/core';
```

To include the specific chart from `viz` folder, execute the following command:

```Shell
// import ChartType from 'fusioncharts/viz/[ChartType]'

import Column2D from 'fusioncharts/viz/column2d';
```

To add chart dependency, execute the following command:

```Shell
// FusionCharts.addDep(ChartType);

FusionCharts.addDep(Column2D);
```

To register the **VueFusionCharts** component globally, execute the following command:

```Shell
Vue.use(VueFusionCharts);
```

**Locally**

Registering components globally makes sure that even if you want to stop using that component it will be a part of your final build. This results in an increase in JavaScript code that the users have to download. This is where you can register a component locally to avoid such scenarios. 

In your Javascript code, use the Vue.component() method to register the vue-fusioncharts component locally. To register locally, use **Vue.component()** instead of **Vue.use()**, the rest of the code remains same. Refer to the code below:

```Shell
Vue.component('fusioncharts', FCComponent);
```

### Include Maps via NPM

In your Javascript code, use the Vue.use() method to register the vue-fusioncharts component.

To include the core fusioncharts files, execute the following command:

```Shell
import FusionCharts from 'fusioncharts/core'
```

To include the **core map** files from maps, execute the following command:

```Shell
import Maps from 'fusioncharts/maps';
```

To include the **map definition** file you want to render, execute the following command:

```Shell
import World from 'fusioncharts/maps/es/fusioncharts.world';
```

> If you want to render a map which is not in the fusioncharts package(world and USA), then you need to install **fusionmaps** which contains all the ES6 map definition:
* npm install fusionmaps
* ES-6 definitions can be found in node_modules/fusionmaps/maps/es/fusioncharts.[MAP-ALIAS].js

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this here.

To add the map and definition as the dependency to the core, execute the following command:

```Shell
FusionCharts.addDep(Maps). (Maps -  reference from above)
FusionCharts.addDep(World). (World - reference from above)
```

### Include Themes via NPM

In your Javascript code, use the **Vue.use()** method to register the vue-fusioncharts component.

To include the core fusioncharts files, execute the following command:

```Shell
import FusionCharts from 'fusioncharts/core'
```

To include the **theme engine extension**, execute the following command:

```Shell
import ThemeEngine from 'fusioncharts/features/theme-engine';
```

To include the theme file and CSS for the theme, execute the following command:

```Shell
import fusion from 'fusioncharts/themes/es/fusioncharts.fusion'
import css file from 'fusioncharts/themes/es/fusioncharts.fusion.css'
```

To add **ThemeEngine** and fusion as dependency to the core, execute the following command:

```Shell
FusionCharts.addDep(ThemeEngine).  (ThemeEngine - reference from above)
FusionCharts.addDep(fusion). (fusion - reference from above)
```