---
title: Installation | FusionCharts
description: This article outlines the steps to install fusioncharts and fusioncharts angularjs component to create charts.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT includes an extensive range of charts, gauges, and maps that you can use to plot all types of static and real-time data.

The `angularjs-fusioncharts` wrapper, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single AngularJS component.

In this article, we will show you how you can download and install the `angularjs-fusioncharts` wrapper and all the other dependencies on your system. 

You can install FusionCharts in your angularjs project using any of the two modes given below:

## Choose your mode of installation:

<table>
    <tr>
        <td align="center">[Direct JavaScript files]({% site.baseurl %}/getting-started/angular/angularjs/install-using-angularjs#install-using-direct-javascript-files-2)</td>
        <td align="center">[npm]({% site.baseurl %}/getting-started/angular/angularjs/install-using-angularjs#install-fusioncharts-via-npm-8)</td>
    </tr>
</table>

## Install using Direct JavaScript files

In order to install and start working with Angularjs-FusionCharts you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to include themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended that you copy the `js` folder from within fusioncharts-suite-xt to your project's JavaScript folder.

* The download package also contains **angularjs-fusioncharts.js** file under `fusioncharts-suite-xt > integrations > frontend-plugins > angularjs` folder. This folder will also contain Angularjs-FusionCharts native Export Handlers. The folder structure is shown below:

![AngularJS Js Folder]({% site.baseurl %}/gif/angularjs-folder-structure.gif)

> If you are using 3.12.2 or older versions, download v3.13.0 to get the `angularjs` folder in the FusionCharts Suite XT package. 

> It is recommended that you copy the `angularjs` folder from within `fusioncharts-suite-xt > integrations > frontend-plugins > angularjs` to your project's JavaScript folder.

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
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download definition of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript`file names.|

In order to install, create an HTML file and follow the steps given below:

**Step 1: Include AngularJS file:**

```html
<script type="text/javascript" src="/path/to/angularjs.js"></script>
```

**Step 2: Include the FusionCharts package:**

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
```

**Step 3: Include the angularjs-fusioncharts module:**

```html
<script type="text/javascript" src="/path/to/angular-fusioncharts.js"></script>
```

### Include ng-fusioncharts

Include the ng-fusioncharts as a dependency in the application. Search for the call to angular.module to add the dependency.

```
angular.module("myApp", ["ng-fusioncharts"])
```

### Add the Directive

Add the `<div>` with a **fc-chart** directive in your HTML file, assuming that it is inside a `MyController` controller.

```
<div ng-controller="MyController">
    <div fusioncharts
        width="700"
        height="400"
        type="column2d"
        dataSource="" >
    </div>
</div>
```

Now, this is bound to a datasource with the `myDataSource` scope object.

## Populate the required variables

Previously, we have bound to the undefined scope variable myDataSource.

Set the `DataSource` like a regular FusionCharts JSON format DataSource inside the controller. Refer to the code below:

```
app.controller('MyController', function($scope) {
    $scope.myDataSource = {
        chart: {
            ...
        },
        data: [ ... ]
    };
});
```

### Installing FusionMaps (map visualizations) for your project

To render maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files and include them to your HTML as shown below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

```
<script type="text/JavaScript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/JavaScript" src="path/to/local/fusioncharts.world.js"></script>
```

The `fusioncharts.world.js` file includes path drawings of the map of **world**.

The consolidated code(which also includes the `angularjs.js`, `fusioncharts.js` and `angularjs-fusioncharts.js`)  looks like as shown below:

```html
<head>
    <meta charset="utf-8">
    <title>AngularJS - FusionCharts</title>
    <!-- AngularJS -->
    <script type="text/JavaScript" src="path/to/local/angularjs.js"></script>
    <!-- FusionCharts -->
    <script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
    <!-- AngularJS-FusionCharts -->
    <script type="text/JavaScript" src="path/to/local/angularjs-fusioncharts.js"></script>
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

The FusionCharts Suite download package also contains the theme files under `fusioncharts-suite-xt > js > themes` folder. The predefined themes are:

* `fusion`
* `zune`
* `ocean`
* `carbon`

The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

To include a theme to your chart, include its corresponding JavaScript file in your HTML page for that theme as shown in the code below:

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
<script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project.

## Install FusionCharts via **npm**

Now, let's discuss how to install the `fusioncharts` module via **npm**. The fusioncharts package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

This section outlines the steps to be executed for installing all the node modules via **npm** and rendering charts using the `angularjs-Fusioncharts` wrapper.

You can install `angularjs fusioncharts` wrapper using any of the following steps:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Script Tags</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div class="mt-10 pb-10">Install angular(1.x) package:</div>
<pre><code class="custom-hlc language-cs">
    npm install angular@1.7.2 --save
</code></pre>
<div class="mt-10 pb-10">Install fusioncharts package:</div>
<pre><code class="custom-hlc language-cs">
    npm install fusioncharts --save
</code></pre>
<div class="mt-10 pb-10">Install angularjs-fusioncharts wrapper:</div>
<pre><code class="custom-hlc language-cs">
    npm install angularjs-fusioncharts --save
</code></pre>
<div class="mt-10 pb-10">In your index.html, include all the script tags:</div>
<pre><code class="custom-hlc language-cs">
    &lt;script src="node_modules/fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/angular/angular.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/angular-fusioncharts/dist/angular-fusioncharts.min.js"&gt;
    &lt;/script&gt;
</code></pre>
<div class="mt-10 pb-10">In scripts.js, add the dependency:</div>
<pre><code class="custom-hlc language-cs">
    angular.module('your-app-name', ["ng-fusioncharts"]);
</code></pre>
<div class="pb-10">Now fusioncharts directive as a attribute as well as tag is available in your app.</div>
<div class="mt-10 pb-10">Other required files</div>
<div class="mt-10 pb-10">Include charts in script tag:</div>
<pre><code class="custom-hlc language-cs">
    &lt;script src="node_modules/fusioncharts/fusioncharts.charts.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/fusioncharts.widgets.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/fusioncharts.powercharts.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/fusioncharts.gantt.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/fusioncharts.treemap.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/fusioncharts.zoomscatter.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/fusioncharts.zoomline.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/fusioncharts.overlappedbar2d.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/fusioncharts.overlappedcolumn2d.js"&gt;&lt;/script&gt;
</code></pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div class="mt-10 pb-10">Install fusioncharts package:</div>
<pre><code class="custom-hlc language-cv">
    npm install fusioncharts --save
</code></pre>
<div class="mt-10 pb-10">Install angularjs-fusioncharts wrapper:</div>
<pre><code class="custom-hlc language-cv">
    npm install angularjs-fusioncharts --save
</code></pre>
<div class="mt-10 pb-10">In your script.js file:</div>
<div class="pb-10">1. require <strong>angular</strong></div>
<pre><code class="custom-hlc language-cv">
    const angular = require('angular');
</code></pre>
<div class="pb-10">2. require <strong>fusioncharts</strong></div>
<pre><code class="custom-hlc language-cv">
    const FusionCharts = require('fusioncharts');
</code></pre>
<div class="pb-10">3. require your chart module</div>
<pre><code class="custom-hlc language-cv">
    const Charts = require('fusioncharts/fusioncharts.charts'); // Charts
    const Widgets = require('fusioncharts/fusioncharts.widgets'); // Widgets
    const Powercharts = require('fusioncharts/fusioncharts.powercharts');//PC
    const Gantt = require('fusioncharts/fusioncharts.gantt'); // Gantt
    const Treemap = require('fusioncharts/fusioncharts.treemap'); // Treemap
    const Zoomscatter = require('fusioncharts/fusioncharts.zoomscatter'); //ZS
    const Zoomline = require('fusioncharts/fusioncharts.zoomline'); //zoomline
    const OverlappedBar2d = require('fusioncharts/fusioncharts.overlappedbar2d');
    const Overlappedcolumn2d = require('fusioncharts/fusioncharts.overlappedcolumn2d');
</code></pre>
<div><strong>Note: </strong>Include the needed chart module</div>
<div class="pb-10">4. Require the <strong>angularjs-fusioncharts</strong> module</div>
<pre><code class="custom-hlc language-cv">
    require('angularjs-fusioncharts');
</code></pre> 
<div class="pb-10">5. Pass the FusionCharts module to the Charts Modules</div>
<pre><code class="custom-hlc language-cv">
    Charts(FusionCharts);
    Widgets(FusionCharts);
    Powercharts(FusionCharts);
    Gantt(FusionCharts);
    Treemap(FusionCharts);
    Zoomscatter(FusionCharts);
    Zoomline(FusionCharts);
    OverlappedBar2d(FusionCharts);
    Overlappedcolumn2d(FusionCharts);
</code></pre> 

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

## Include Maps via NPM

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Script Tags</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div class="mt-10 pb-10">Include map definitions in script tag:</div>
<pre><code class="custom-hlc language-cs">
&lt;script src="node_modules/fusioncharts/fusioncharts.maps.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/maps/fusioncharts.world.js"&gt;&lt;/script&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div class="pb-10">// require your map module</div>
<pre><code class="custom-hlc language-cv">
    const Maps = require('fusioncharts/fusioncharts.maps.js');
    const World = require('fusioncharts/maps/fusioncharts.world.js');
</code></pre>
<div class="pb-10">// Pass the FusionCharts module to the Maps Modules</div>
<pre><code class="custom-hlc language-cv">
    Maps(FusionCharts);
    World(FusionCharts);
</code></pre> 
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

## Include Themes via NPM

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

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Script Tags</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div class="mt-10 pb-10">// To include theme definition in script tag:</div>
<pre><code class="custom-hlc language-cs">
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.ocean.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.zune.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.carbon.js"&gt;&lt;/script&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>
<div class='tab xml-tab'>
<div class="pb-10">// require your themes</div>
<pre><code class="custom-hlc language-cv">
    const Fusion = require('fusioncharts/themes/fusioncharts.fusion.js');
    const Zune = require('fusioncharts/themes/fusioncharts.zune.js');
    const Ocean = require('fusioncharts/themes/fusioncharts.ocean.js');
    const Carbon = require('fusioncharts/themes/fusioncharts.carbon.js');
</code></pre>
<div class="pb-10">// Pass the FusionCharts module to the Theme Modules</div>
<pre><code class="custom-hlc language-cv">
    Fusion(FusionCharts);
    Zune(FusionCharts);
    Ocean(FusionCharts);
    Carbon(FusionCharts);
</code></pre> 

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project.