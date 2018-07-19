---
title: Installation | FusionCharts
description: The FusionCharts Suite XT jQuery helper allows you to use jQuery syntax to render and manipulate your charts and graphs seamlessly across all browsers and devices.
heading: Installation
chartPresent: false
---

The FusionCharts Suite XT jQuery helper allows you to use jQuery syntax to render and manipulate your charts and graphs seamlessly across all browsers and devices.

It helps you add interactive JavaScript charts to your web and mobile applications, combining the delight and comprehensiveness of the FusionCharts Suite XT with the easy-to-use jQuery syntax. 

Some of the basic features of jQuery plugin are:

* It lets you render jQuery charts that work across PCs(including IE6/7/8), Macs, iPads, iPhones, and Android devices seamlessly.
* Update chart type, data, and individual cosmetic properties at run-time.
* Insert, prepend, and append multiple charts in an existing chart container.
* Customize the look and feel of all elements on the chart.
* Plot charts from data contained in HTML tables.

In this article, we will show you how you can download and install the `jQuery helper` and all the other dependencies on your system. You can use FusionCharts in your Vue project using any of the two modes given below:

## Choose your mode of installation:

<table>
    <tr>
        <td align="center">[Direct JavaScript files]({% site.baseurl %}/using-with-javascript-libraries/jquery/installation#install-using-direct-javascript-files-1)</td>
        <td align="center">[NPM]({% site.baseurl %}/using-with-javascript-libraries/jquery/installation#install-fusioncharts-via-npm-4)</td>
    </tr>
</table>

## Install using Direct JavaScript files

In order to install and start working with Vue-FusionCharts you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT which contains the necessary JavaScript files and the `jquery` helper folder.

> Post version 3.13.0, `jquery` helper is provided in the download package. Look for the `jquery` folder under **fusioncharts-suite-xt/integrations/frontend-plugins** in downloaded package.

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


**Step 1:** To set up the FusionCharts jQuery plugin, follow the steps given below:

* Include jquery.min.js to enable jQuery in your project:

```html
<script type="text/javascript" src="jquery.min.js"></script>
```

**Step 2:** jQuery needs to be imported before the FusionCharts jQuery plugin is included in the project. 

> In order to support IE 6/7/8, jQuery 1.x versions should be used.

* Copy fusioncharts.js and fusioncharts.jqueryplugin.js from the FusionCharts Download Package mentioned above.

* Add references to the required JavaScript files in your code:

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.jqueryplugin.js"></script>
```

* Include the theme file and CSS:

```html
<script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.css"></script>
```

The consolidated code looks like as shown below:

```html
<head>
    <meta charset="utf-8">
    <title>jQuery Helper - FusionCharts</title>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- jQuery-FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.jqueryplugin.js"></script>
    <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.css"></script>
</head>
```

That completes the installation of FusionCharts in your application. To see how to create a chart, [click here]({% site.baseurl %}/using-with-javascript-libraries/vuejs/your-first-chart '@@open-newtab').

### Installing FusionMaps (map visualizations) for your project

In order to render maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files and include them to your HTML as shown below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

```
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.world.js"></script>
```

The `fusioncharts.world.js` file includes path drawings of the map of **world**.

The consolidated code(which also includes the `vue.js`, `fusioncharts.js` and `vue-fusioncharts.js`)  looks like as shown below:

```html
<head>
    <meta charset="utf-8">
   <title>jQuery Helper - FusionCharts</title>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- jQuery-FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.jqueryplugin.js"></script>
    <!-- FusionMaps -->
    <script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
    <!--world -->
    <script type="text/javascript" src="path/to/local/fusioncharts.world.js"></script>
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

> The `fusioncharts.theme.fusion.js` and `fusioncharts.theme.fusion.css` file sets the theme as **fusion**. To add any other theme to your chart, include its corresponding JavaScript file to your project.

## Install FusionCharts via npm

Now, let's discuss how to install the fusioncharts module via npm. The fusioncharts package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

This section outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the FusionCharts jQuery helpers.

### Step 1: Install the fusioncharts module via npm

To install the `fusioncharts` module, execute the following command in the terminal:

```Shell
npm install fusioncharts --save
```

### Step 2: Install the `fusioncharts jquery` helper via npm

To install the `fusioncharts jquery` helper, execute the following command in the terminal:

```Shell
npm install jquery-fusioncharts --save
```

You can also combine the above commands in a single line, as shown below:

```Shell
npm install fusioncharts jquery-fusioncharts --save
```

### Step 3: Include the fusioncharts module

Once the installation is done, you need to register the fusioncharts module. You can register in multiple ways as per your requirement like:

**Register using all charts:**

You can include the fusioncharts class and FusionCharts jQuery helper using any of the following process:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include the fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import jQuery from 'jquery';
    import FusionCharts from 'jquery-fusioncharts';
</code></pre>
<div><strong>Load charts module to render column2D chart using:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import Charts from 'fusioncharts/fusioncharts.charts';
</code></pre>
<div><strong>To use charts and gauges from PowerCharts and Widgets, import their respective modules using:</strong></div>
<pre><code class="custom-hlc language-javascript">
    // For PowerCharts
    import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
    // For Widgets 
    import Widgets from 'fusioncharts/fusioncharts.widgets'; 
</code></pre>
<div><strong>Once the window with a document is ready, execute the Chart module and pass FusionCharts as a dependency Charts(FusionCharts);</strong></div>
<pre><code class="custom-hlc language-javascript">
    import ReactFC from 'react-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include the fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let FusionCharts = require('fusioncharts');
    let Charts = require('fusioncharts/fusioncharts.charts');
</code></pre>
<div><strong>To use charts and gauges from PowerCharts and Widgets, import their respective modules using:</strong></div>
<pre><code class="custom-hlc language-javascript">
    // For PowerCharts
    let PowerCharts = require('fusioncharts/fusioncharts.powercharts'); 
    // For Widgets
    let Widgets = require('fusioncharts/fusioncharts.widgets'); 
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let ReactFC = require('react-fusioncharts').default;
</code></pre>
<div><strong>To add chart dependency:</strong></div>
<pre><code class="custom-hlc language-javascript">
    ReactFC.fcRoot(FusionCharts, Charts);
</code></pre>
<div><strong>To add charts, powercharts and widgets dependencies:</strong></div>
<pre><code class="custom-hlc language-javascript">
    // ReactFC.fcRoot(FusionCharts, Charts, [Module]);
    ReactFC.fcRoot(FusionCharts, Charts, PowerCharts, Widgets);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>








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