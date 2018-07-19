---
permalink: getting-started/react/install-using-react.html
title: Installation | FusionCharts
description: The React-FusionCharts Component, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications.
heading: Installation
chartPresent: false
---

The **React-FusionCharts** component lets you include **FusionCharts** in your **React** projects and adds interactive JavaScript charts and graphs to your React applications. Before we get into the installation process of the component, let's take a look at what sets the React-FusionCharts component apart.

Some of the basic features of the React component are:

* Easily create charts in JavaScript using your React code.

* Can render charts using a JSON/XML URL or props array binding.

* Auto-updates the chart object when the data source is modified.

In this article, we will show you how you to download and install the React-FusionCharts component and all the other dependencies on your system. You can use FusionCharts in your React project using any of the two modes given below:

## Choose your mode of installation:

<table>
    <tr>
        <td align="center">[Direct JavaScript files]({% site.baseurl %}/getting-started/react/install-using-react#install-using-direct-javascript-files-2)</td>
        <td align="center">[NPM]({% site.baseurl %}/getting-started/react/install-using-react#install-fusioncharts-via-npm-5)</td>
    </tr>
</table>

## Install using Direct JavaScript files

In order to install and start working with React-FusionCharts, you need to:

* [Download](https://reactjs.org/docs/getting-started.html)the React core library.

* [Download](https://www.fusioncharts.com/react-charts)the React-FusionCharts plugin which contains the react-fusioncharts.js file.

* [Download](https://www.fusioncharts.com/download/)the FusionCharts Suite XT which contains the necessary JavaScript files.

Installation of FusionCharts Suite XT merely involves copying and pasting the JavaScript files from the download package into your project folder. The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/images/js-folder-structure.png)

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps.

Following is the list of JavaScript files present in your fusioncharts-suite-xt folder:

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

### **Step 1: Include React core library:**

```html
<script type="text/javascript" src="path/to/local/react.js"></script>
<script type="text/javascript" src="path/to/local/react-dom.js"></script>
```
### **Step 2: Include Babel for JSX transpiling:**

```html
<script type="text/javascript" src="path/to/local/babel-core.js"></script>
```

### **Step 3: Include the FusionCharts package:**

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
```

### **Step 4: Include the react-fusioncharts module:**

```html
<script type="text/javascript" src="path/to/local/react-fusioncharts.js"></script>
```

### **Step 5: Include the theme file and CSS:**

```html
<script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.css"></script>
```

The consolidated code looks like as shown below:

```html
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
    <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.css"></script>
</head>
```

That completes the installation of FusionCharts in your application. To see how to create a chart, [click here]({% site.baseurl %}/getting-started/react/your-first-chart-using-react '@@open-newtab').

### Installing FusionMaps (map visualizations) for your project

In order to render maps, you need to [download ](https://www.fusioncharts.com/download/maps/definition/)the map definition files and include them to your HTML as shown below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this here.

```html
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.world.js"></script>
```

The `fusioncharts.world.js` file includes path drawings of the map of **world**.

The consolidated code (which also includes the `react.js`, `fusioncharts.js` and `react-fusioncharts.js`) looks like as shown below:

```html
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
    <!--world -->
    <script type="text/javascript" src="path/to/local/fusioncharts.world.js"></script>
</head>
```

### Themes

Themes shipped with FusionCharts Suite XT allows you to create centralized theme files (similar to CSS files) and apply those themes to any number of charts.

In a theme file, you can centrally customize the following aspects of a chart, gauge, or map:

* Visual appearance (data plot color, font color, font size, etc.)

* Behavior (hover effects for data plots)

* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

FusionCharts Suite XT ships with the following predefined themes:

* `fusion`

* `zune`

* `ocean`

* `carbon`

> To include a theme to your chart, include its corresponding JavaScript file in your HTML page and the CSS file for that theme as shown in the code below:

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.css"></script>
```

The fusioncharts.theme.fusion.js file sets the theme as fusion.

## Install FusionCharts via npm

This section outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the React-FusionCharts component.

> **The fusioncharts package installed by npm contains files for all charts and widgets and only two map definition files - for the World map and the USA map.**

**Step 1: Install the fusioncharts module via npm**

To install the fusioncharts module, execute the following command in the terminal:

```
npm install fusioncharts --save
```

**Step 2: Install the react-fusioncharts module via npm**

To install the react-fusioncharts module, execute the following command in the terminal:

```
npm install react-fusioncharts --save
```

You can also combine the above commands in a single line, as shown below:

```
npm install fusioncharts react-fusioncharts --save
```

**Step 3: Include the fusioncharts module**

Once the installation is done, you need to register the fusioncharts module. You can register in multiple ways as per your requirement like:

### Register using all charts

You can include the fusioncharts class and React FusionCharts plugin using any of the following process:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include the fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
</code></pre>
<div><strong>To use charts and gauges from PowerCharts and Widgets, import their respective modules using:</strong></div>
<pre><code class="custom-hlc language-javascript">
    // For PowerCharts
    import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
    // For Widgets 
    import Widgets from 'fusioncharts/fusioncharts.widgets'; 
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
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

### Include only Specific Modules

To register using a specific chart type, import the the fusioncharts class and then the specific chart (instead of all the charts). Also, you need to add the dependency for the specific chart type as shown in the code below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include the core fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts/core';
</code></pre>
<div><strong>To include the specific chart from viz folder:</strong></div>
<pre><code class="custom-hlc language-javascript">
    // import ChartType from 'fusioncharts/viz/[ChartType]';
    import Column2D from 'fusioncharts/viz/column2d';
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import ReactFC from 'react-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include the core fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let FusionCharts = require('fusioncharts/core').default;
</code></pre>
<div><strong>To include the specific chart from viz folder:</strong></div>
<pre><code class="custom-hlc language-javascript">
    // let ChartType = require('fusioncharts/viz/[ChartType]').default;
    let Column2D = require('fusioncharts/viz/column2d').default;
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let ReactFC = require('react-fusioncharts').default;
</code></pre>
<div><strong>To add chart dependency:</strong></div>
<pre><code class="custom-hlc language-javascript">
    // ReactFC.fcRoot(FusionCharts, [ChartType]);
    ReactFC.fcRoot(FusionCharts, Column2D);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

### Register using multiple specific chart types

To register using multiple specific chart types, import the specific charts instead of all the charts after importing the fusioncharts class. Also, you need to add the dependency for all the specific chart types as shown in the code below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include the core fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts/core';
</code></pre>
<div><strong>To include the specific chart from viz folder:</strong></div>
<pre><code class="custom-hlc language-javascript">
        
    import Column2D from 'fusioncharts/viz/column2d';
    import AngularGauge from 'fusioncharts/viz/angulargauge';
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import ReactFC from 'react-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include the core fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let FusionCharts = require('fusioncharts/core').default;
</code></pre>
<div><strong>To include the specific chart from viz folder:</strong></div>
<pre><code class="custom-hlc language-javascript">
    // let ChartType = require('fusioncharts/viz/[ChartType]').default;
    let Column2D = require('fusioncharts/viz/column2d').default;
    let AngularGauge = require('fusioncharts/viz/angulargauge').default;
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let ReactFC = require('react-fusioncharts').default;
</code></pre>
<div><strong>To add chart dependency:</strong></div>
<pre><code class="custom-hlc language-javascript">
    // ReactFC.fcRoot(FusionCharts, [ChartType]);
    ReactFC.fcRoot(FusionCharts, Column2D, AngularGauge);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

## Include Maps via NPM

You can include the map files via **ES5** using any of the following process:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include the fusioncharts files:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts';
</code></pre>
<div><strong>To include the core map files from maps:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import Maps from 'fusioncharts/fusioncharts.maps';
</code></pre>
<div><strong>To include the map definition file you want to render:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import World from 'fusioncharts/maps/fusioncharts.world';
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import ReactFC from 'react-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include the fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let FusionCharts = require('fusioncharts');
</code></pre>
<div><strong>To include the core map files from maps:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let Maps = require('fusioncharts/fusioncharts.maps');
</code></pre>
<div><strong>To include the map definition file you want to render:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let World = require('fusioncharts/maps/fusioncharts.world');
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let ReactFC = require('react-fusioncharts').default;
</code></pre>
<div><strong>To add the map and definition as the dependency to the core:</strong></div>
<pre><code class="custom-hlc language-javascript">
    ReactFC.fcRoot(FusionCharts, Maps, World);   // Maps -  reference from above
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

You can include the map files via **ES6** using any of the following process:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include the core fusioncharts files:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts/core';
</code></pre>
<div><strong>To include the core map files from maps:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import Maps from 'fusioncharts/fusioncharts.maps';
</code></pre>
<div><strong>To include the map definition file you want to render:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import World from 'fusioncharts/maps/es/fusioncharts.world';
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import ReactFC from 'react-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include the core fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let FusionCharts = require('fusioncharts/core').default;
</code></pre>
<div><strong>To include the core map files from maps:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let Maps = require('fusioncharts/fusioncharts.maps');
</code></pre>
<div><strong>To include the map definition file you want to render:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let World = require('fusioncharts/maps/es/fusioncharts.world').default;
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let ReactFC = require('react-fusioncharts').default;
</code></pre>
<div><strong>To add the map and definition as the dependency to the core:</strong></div>
<pre><code class="custom-hlc language-javascript">
    ReactFC.fcRoot(FusionCharts, Maps, World);   // Maps -  reference from above
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

If you want to render a map which is not in the fusioncharts package(world and USA), then you need to install **fusionmaps** which contain all the ES6 map definition:

```
npm install fusionmaps
```

ES-6 definitions can be found in `node_modules/fusionmaps/maps/es/fusioncharts.[MAP-ALIAS].js`

If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this here.

To add the map and definition as the dependency to the core:

```
ReactFusionCharts.fcRoot(FusionCharts, Maps);   // Maps -  reference from above
ReactFusionCharts.fcRoot(FusionCharts, World);  // World - reference from above
```

### Include Themes via NPM

FusionCharts Suite XT ships with the following predefined themes:

* `fusion`
* `zune`
* `ocean`
* `carbon`

> The `fusioncharts.theme.fusion.js` and `fusioncharts.theme.fusion.css` file sets the theme as **fusion**. To add any other theme to your chart, include its corresponding JavaScript file to your project.

You can include the themes via **ES5** using any of the following process:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include the fusioncharts files:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts';
</code></pre>
<div><strong>To include the theme file and CSS for the theme:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import Fusion from 'fusioncharts/themes/fusioncharts.fusion';
    import css from 'fusioncharts/themes/fusioncharts.fusion.css';
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import ReactFC from 'react-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include the fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let FusionCharts = require('fusioncharts');
</code></pre>
<div><strong>To include the theme file and CSS for the theme:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let Fusion = 'fusioncharts/themes/fusioncharts.fusion';
    let css = require('fusioncharts/themes/fusioncharts.fusion.css');
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let ReactFC = require('react-fusioncharts').default;
</code></pre>
<div><strong>To add Fusion as dependency to the core:</strong></div>
<pre><code class="custom-hlc language-javascript">
    ReactFC.fcRoot(FusionCharts, Fusion);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

You can include the themes via **ES6** using any of the following process:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include the core fusioncharts files:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts/core';
</code></pre>
<div><strong>To include the theme engine extension:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import ThemeEngine from 'fusioncharts/features/theme-engine';
</code></pre>
<div><strong>To include the theme file and CSS for the theme:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import Fusion from 'fusioncharts/themes/fusioncharts.fusion';
    import css from 'fusioncharts/themes/fusioncharts.fusion.css';
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import ReactFC from 'react-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include the core fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let FusionCharts = require('fusioncharts/core').default;
</code></pre>
<div><strong>To include the theme engine extension:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let ThemeEngine = require('fusioncharts/features/theme-engine').default;
</code></pre>
<div><strong>To include the theme file and CSS for the theme:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let Fusion = 'fusioncharts/themes/fusioncharts.fusion';
    let css = require('fusioncharts/themes/fusioncharts.fusion.css');
</code></pre>
<div><strong>To include React FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let ReactFC = require('react-fusioncharts').default;
</code></pre>
<div><strong>To add ThemeEngine and Fusion as dependency to the core:</strong></div>
<pre><code class="custom-hlc language-javascript">
    ReactFC.fcRoot(FusionCharts, ThemeEngine, Fusion);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>