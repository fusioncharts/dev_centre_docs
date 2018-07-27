---
title: Installation | FusionCharts
description: This article outlines the steps to install fusioncharts and fusioncharts angularjs component to create charts.
heading: Installation
chartPresent: false
---

The `angularjs-fusioncharts` wrapper **(v1.x)**, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single AngularJS component.

In this article, we will show you how you can download and install the `angularjs-fusioncharts` wrapper and all the other dependencies on your system. 

## Choose your mode of installation:

You can install FusionCharts in your angularjs project using any of the two modes given below:

<table>
    <tr>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/angular/angularjs/install-using-angularjs#install-using-direct-javascript-files-2"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_JS.svg"></a></td>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/angular/angularjs/install-using-angularjs#include-fusioncharts-via-npm-8"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_NPM.svg"></a></td>
    </tr>
</table>

## Install using Direct JavaScript files

In order to install and start working with **Angularjs-FusionCharts** you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to include themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended that you copy the files of the `js` folder from `fusioncharts-suite-xt` to your project folder.

* The download package also contains **angular-fusioncharts.js** file under `fusioncharts-suite-xt > integrations > angularjs > js` folder. The folder structure is shown below:

![AngularJS Js Folder]({% site.baseurl %}/gif/angularjs-folder-structure.gif)

> If you are using 3.12.2 or older versions, download v3.13.0 to get the `angularjs` folder in the FusionCharts Suite XT package. 

> It is recommended that you copy the JavaScript files of the `angular-fusioncharts.js` file from `fusioncharts-suite-xt > integrations > angularjs > js` to your project folder.

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
`maps/*`|This folder contains Map Definition files required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition files of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be applied to charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

Installation of FusionCharts Suite XT is simply copying and pasting the JavaScript files from the downloaded package into your project folder.

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps. Create an HTML file and follow the steps given below:

**Step 1: Include AngularJS file:**

```html
<script type="text/javascript" src="/path/to/local/angularjs.js"></script>
```

**Step 2: Include the FusionCharts package:**

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
```

**Step 3: Include the angularjs-fusioncharts wrapper:**

```html
<script type="text/javascript" src="/path/to/angular-fusioncharts.js"></script>
```

### Include ng-fusioncharts

Include the ng-fusioncharts as a dependency in the application. Call `angular.module()` to add the dependency.

```
angular.module("myApp", ["ng-fusioncharts"])
```

### Add the Directive

Add the `<div>` with a **fc-chart** directive in your HTML file, assuming that it is inside a controller named `MyController`.

```
<div ng-controller="MyController">
    <div fusioncharts
        width="700"
        height="400"
        type="column2d"
        dataSource="{{myDataSource}}" >
    </div>
</div>
```

Now, this is bound to a datasource with the `myDataSource` scope object.

## Populate the required variables

Previously, we have bound to the undefined scope variable myDataSource.

Set the `DataSource` to a JSON following the FusionChart's JSON format. Please refer [here]({% site.baseurl %}/getting-started/angular/angularjs/your-first-chart-using-angularjs#convert-tabular-data-into-json-format-3 '@@open-newtab') for the basic JSON structure.

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

FusionCharts Suite XT provides over `1000+` data-driven maps under the product FusionMaps. 

In the downloaded package, you’ll find the `fusioncharts.maps.js` file and only two map definition files - the world map, and the map of the USA - to reduce the download size. However, you can download the rest of map definition files [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'), when you need to plot maps of those countries/regions. 

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

To render a map, you need the core FusionCharts library `fusioncharts.js` along with `fusioncharts.maps.js`, and the map definition files as shown below:

```
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"></script>
```

In the above example, we’ve include the World Map, whose map definition (path) is contained in `maps/fusioncharts.world.js`.

**Load other map definition files**

To use any other map (except world and USA) from the 1000+ maps, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files, tnen copy those map files to your current `/maps` folder. The map definition files are named in the format `[MAP_ALIAS].js`, where MAP_ALIAS represents the country, state or region name. Then include the respective map file as under:

```
<script type="text/javascript" src="path/to/local/maps/[MAP_ALIAS].js"></script>
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

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allows you to create centralized theme files and apply those themes to any number of charts.

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

## Include FusionCharts via **npm**

Now, let's discuss how to install the `fusioncharts` module via **npm**. The fusioncharts package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

> If you are not aware about the different files of FusionCharts package and its purpose, refer [here]({% site.baseurl %}/getting-started/angular/angularjs/install-using-angularjs#install-using-direct-javascript-files-2 '@@open-newtab').

This section outlines the steps to be executed for installing all the node modules via **npm** and rendering charts using the `angularjs-Fusioncharts` wrapper.

You can install `angularjs fusioncharts` wrapper using any of the following steps:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="require">Require</a></li>
    <li><a data-toggle="scripttags">Script Tags</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab require-tab active">
<div class="mt-30"><strong>Include `fusioncharts` package:</strong></div>
<pre><code class="custom-hlc language-bash">
    npm install fusioncharts --save
</code></pre>
<div class="mt-30"><strong>Include `angularjs-fusioncharts` wrapper:</strong></div>
<pre><code class="custom-hlc language-bash">
    npm install angular-fusioncharts --save
</code></pre>
<div class="mt-30 pb-10">In your <strong>script.js</strong> file:</div>
<div class="mt-20">1. require <strong>angular</strong>:</div>
<pre><code class="custom-hlc language-javascript">
    const angular = require('angular');
</code></pre>
<div class="mt-20">2. require <strong>fusioncharts</strong>:</div>
<pre><code class="custom-hlc language-javascript">
    const FusionCharts = require('fusioncharts');
</code></pre>
<div class="mt-20">3. require your chart module:</div>
<pre><code class="custom-hlc language-javascript">
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
<div class="mt-30 pb-10"><strong>Note: </strong>Include the chart module needed</div>
<div class="mt-20">4. require the <strong>angularjs-fusioncharts</strong> module:</div>
<pre><code class="custom-hlc language-javascript">
    require('angularjs-fusioncharts');
</code></pre>
<div class="mt-20">5. Pass the FusionCharts module to the Charts Modules:</div>
<pre><code class="custom-hlc language-javascript">
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
<div class="tab scripttags-tab">
<div class="mt-30"><strong>Include `angularjs` package:</strong></div>
<pre><code class="custom-hlc language-bash">
    npm install angular@1.7.2 --save
</code></pre>
<div class="mt-30"><strong>Include `fusioncharts` package:</strong></div>
<pre><code class="custom-hlc language-bash">
    npm install fusioncharts --save
</code></pre>
<div class="mt-30"><strong>Include `angularjs-fusioncharts` wrapper:</strong></div>
<pre><code class="custom-hlc language-bash">
    npm install angularjs-fusioncharts --save
</code></pre>
<div class="mt-30 pb-10">In your `index.html`, include all the **&lt;script&gt;** tags:</div>
<pre><code class="custom-hlc language-html">
    &lt;script src="node_modules/fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/angular/angular.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/angular-fusioncharts.js"&gt;
    &lt;/script&gt;
</code></pre>
<div class="mt-30 pb-10">In `scripts.js`, add the dependency:</div>
<pre><code class="custom-hlc language-javascript">
    angular.module('your-app-name', ["ng-fusioncharts"]);
</code></pre>
<div class="mt-30 pb-10">Now the fusioncharts directive is available in your app both as an attribute as well as a tag. Include charts other required files in **&lt;script&gt;** tag:</div>
<pre><code class="custom-hlc language-html">
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

</div>
</div>

## Include Maps via NPM

When installed via `npm`, the `fusioncharts` package contains only two map definitions in `node_modules/fusioncharts/maps` directory - the **World Map**, and the **Map of USA**. This is done to keep the package lightweight. To use any of these two map definition files follow the steps given below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="require">Require</a></li>
    <li><a data-toggle="scripttags">Script Tags</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab require-tab active">
<div class="mt-30"><strong>require your `map` module:</strong></div>
<pre><code class="custom-hlc language-javascript">
    const Maps = require('fusioncharts/fusioncharts.maps.js');
    const World = require('fusioncharts/maps/fusioncharts.world.js');
</code></pre>
<div class="mt-30"><strong>Pass the `fusioncharts` module to the `maps` module:</strong></div>
<pre><code class="custom-hlc language-javascript">
    Maps(FusionCharts);
    World(FusionCharts);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>
<div class="tab scripttags-tab">
<div class="mt-30"><strong>Include map definitions in **&lt;script&gt;** tag:</strong></div>
<pre><code class="custom-hlc language-html">
    &lt;script src="node_modules/fusioncharts/fusioncharts.maps.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/maps/fusioncharts.world.js"&gt;&lt;/script&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

**Load other map definition files**

You can use the other map definition files other than the **World Map** and the **Map of USA** that are shipped with the `fusioncharts` package by default. To do so, follow the steps below:

* First include the module `fusioncharts.maps.js`.
* Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**.  Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. 

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format. You can do it using any one of the following two methods:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="require">Require</a></li>
    <li><a data-toggle="scripttags">Script Tags</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab require-tab active">
<div class="mt-30"><strong>require your `map` module:</strong></div>
<pre><code class="custom-hlc language-javascript">
    const Maps = require('fusioncharts/fusioncharts.maps.js');
    const World = require('fusioncharts/maps/fusioncharts.california.js');
</code></pre>
<div class="mt-30"><strong>Pass the `fusioncharts` module to the `maps` module:</strong></div>
<pre><code class="custom-hlc language-javascript">
    Maps(FusionCharts);
    World(FusionCharts);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>
<div class="tab scripttags-tab">
<div class="mt-30"><strong>Include map definitions in **&lt;script&gt;** tag:</strong></div>
<pre><code class="custom-hlc language-html">
    &lt;script src="node_modules/fusioncharts/fusioncharts.maps.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/maps/fusioncharts.california.js"&gt;&lt;/script&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

## Include Themes via NPM

Themes shipped with FusionCharts Suite XT allows you to create centralized theme files and apply those themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme).

To include the definition files placed in **fusioncharts/themes**, follow any of the two ways shown below:


<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="require">Require</a></li>
    <li><a data-toggle="scripttags">Script Tags</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab require-tab active">
<div class="mt-30"><strong>require your `themes`:</strong></div>
<pre><code class="custom-hlc language-javascript">
    const Fusion = require('fusioncharts/themes/fusioncharts.fusion.js');
    const Zune = require('fusioncharts/themes/fusioncharts.zune.js');
    const Ocean = require('fusioncharts/themes/fusioncharts.ocean.js');
    const Carbon = require('fusioncharts/themes/fusioncharts.carbon.js');
</code></pre>
<div class="mt-30"><strong>Pass the `fusioncharts` module to the `theme` module:</strong></div>
<pre><code class="custom-hlc language-javascript">
    Fusion(FusionCharts);
    Zune(FusionCharts);
    Ocean(FusionCharts);
    Carbon(FusionCharts);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>
<div class="tab scripttags-tab">
<div class="mt-30"><strong>Include the theme files in **&lt;script&gt;** tag:</strong></div>
<pre><code class="custom-hlc language-html">
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.ocean.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.zune.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.carbon.js"&gt;&lt;/script&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').