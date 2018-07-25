---
title: Installation | FusionCharts
description: FusionCharts Suite XT is a JavaScript library that runs on your desktop and mobile web browsers.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT — the industry's most comprehensive JavaScript charting solution — is all about easing the whole process of data visualization through charts.

In this article, we will show you how you can download and install the `FusionCharts Suite XT` library and all the other dependencies on your system.

## Choose Your Mode of Installation:

You can include FusionCharts in your project using any of the two modes given below:

<table>
    <tr>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/plain-javascript/install-using-plain-javascript#install-using-direct-javascript-files-2"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_JS.svg"></a></td>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/plain-javascript/install-using-plain-javascript#include-fusioncharts-via-npm-7"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_NPM.svg"></a></td>
    </tr>
</table>

## Install using Direct JavaScript files

[Download](https://www.fusioncharts.com/download/) the `fusioncharts-suite-xt` package which contains:

* JavaScript files to render **Charts**, **Widgets**, and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to include themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended that you copy the files of the `js` folder from `fusioncharts-suite-xt` download package to your project folder.

Following is the list of JavaScript files present in your `fusioncharts-suite-xt > js` folder:

File Name|Description|
-|-
`fusioncharts.js`|This is the core FusionCharts library, which you need to import in all your pages where you want to generate a chart, gauge or a map.|
`fusioncharts.charts.js` (optional)|This file is required to render all charts present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.charts.js`.|
`fusioncharts.widgets.js`|This file is required to render all gauges present under FusionWidgets XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.widgets.js`.|
`fusioncharts.powercharts.js`|This file is required to render all charts present under PowerCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.powercharts.js`.|
`fusioncharts.gantt.js`|This file is required to render the Gantt chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.gantt.js`.|
`fusioncharts.treemap.js`|This file is required to render the Treemap. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.treemap.js`.|
`fusioncharts.zoomscatter.js`|This file is required to render the Zoom scatter chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomscatter.js`.|
`fusioncharts.zoomline.js`|This file is required to render the Zoom line charts. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.zoomline.js`.|
`fusioncharts.overlappedbar2d.js`|This file is required to render the Overlapped Bar 2D chart. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedbar2d.js`.|
`fusioncharts.overlappedcolumn2d.js`|This file is required to render the Overlapped Column 2D chart, present under FusionCharts XT. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.overlappedcolumn2d.js`.|
`fusioncharts.maps.js`|This file is the core map renderer file. The map definitions, however, are stored separately, as explained next. </br>**Note:** When you include `fusioncharts.js` file in your page, you do not need to include this file separately, as `fusioncharts.js` internally loads `fusioncharts.maps.js`.|
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition files of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

Installation of FusionCharts Suite XT is simply copying and pasting the JavaScript files from the downloaded package into your project folder.

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps. Create an HTML file and follow the steps given below:

**Step 1: Include the FusionCharts package:**

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
```

**Step 2: Include the theme file:**

```html
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

The consolidated code is shown below:

```html
<head>
    <meta charset="utf-8">
    <title>FusionCharts</title>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>
```

This completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/plain-javascript/your-first-chart-using-plain-javascript '@@open-newtab').

### Installing FusionMaps (map visualizations) for your project

FusionCharts Suite XT provides over `1000+` data-driven maps under the product FusionMaps. To render a map, you need the `fusioncharts.maps.js`, and the map definition files. 

In the downloaded package, you’ll find the `fusioncharts.maps.js` file and only two map definition files - the world map, and the map of the USA - to reduce the download size. However, you can download the rest of map definition files [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'), when you need to plot maps of those countries/regions. 

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

To render a map using FusionCharts, you first need to include `fusioncharts.maps.js` and then the relevant map definition file, as below.

```
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"></script>
```

In the above example, we’ve include the World Map, whose map definition (path) is contained in `maps/fusioncharts.world.js`.

To use any other map (except world and USA) from the 1000+ maps, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files, tnen copy those map files to your current `/maps` folder. The map definition files are named in the format `[MAP_ALIAS].js`, where MAP_ALIAS represents the country, state or region name. Then include the respective map file as under:

```
<script type="text/javascript" src="path/to/local/maps/[MAP_ALIAS].js"></script>
```

Click [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') to explore all the maps available in FusionMaps XT.

The consolidated code looks like as shown below:

```
<head>
    <meta charset="utf-8">
    <title>FusionCharts</title>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- FusionMaps -->
    <script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
    <!--world -->
    <script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"></script>
    <script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>
```

### Themes

Themes shipped with FusionCharts Suite XT allows you to create centralized theme files and apply those themes to any number of charts.

In a theme file, we can centralize the following aspects of all the charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

The FusionCharts Suite download package also contains the predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

To include a theme to your chart, include its corresponding JavaScript file in your HTML page as shown in the code below:

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
<script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

> Note: Including the `fusioncharts.theme.fusion.js` file will not apply the theme. To apply the theme you have to set the value of `theme` attribute to the respective name of the theme. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').

## Install FusionCharts via **npm**

The `fusioncharts` package for `npm` can now be installed using two different modules:

* **FusionCharts ES module** - From v3.13.0 we are providing the FusionCharts library as ES modules within the `fusioncharts` npm package. This package let's you selectively add modules as per your requirement. For example - You only need the angular guage, pie chart and the column chart. The FusionCharts ES module allows you to cherry pick only these visualizations and use in your application. 
 
 Similarly, you can also select specific features to be used in your application. For example - You can opt only to show trendlines. The folders of the module is shown in the table below:

 <table>
    <tr>
        <th>Folder</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`core`</td>
        <td>Contains the FusionCharts constructor.</td>
    </tr>
    <tr>
        <td>`viz`</td>
        <td>Contains all the individual vizualizations (Charts , PowerCharts, Widgets)</td>
    </tr>
    <tr>
        <td>`charts`</td>
        <td>Contains all the vizualizations of the **Charts** package. (similar to `fusioncharts.charts.js`)</td>
    </tr>
    <tr>
        <td>`powercharts`</td>
        <td>Contains all the vizualizations of the **PowerCharts** package.</td>
    </tr>
    <tr>
        <td>`widgets`</td>
        <td>Contains all the vizualizations of the **FusionWidgets** package.</td>
    </tr>
    <tr>
        <td>`maps`</td>
        <td>Contains the map renderer and the map definition files of **World** and **USA**</td>
    </tr>
    <tr>
        <td>`themes`</td>
        <td>Contaians all the theme files. </td>
    </tr>
    <tr>
        <td>`features`</td>
        <td>
            Included optional Features. The optional features are as listed below:
            <ul>
                <li>Ignore-case-ext</li>
                <li>Alert manager</li>
                <li>Center-label-extension</li>
                <li>Crossline-adapter</li>
                <li>csv-transcoder</li>
                <li>Data-skipping</li>
                <li>Default-theme</li>
                <li>Exports-module</li>
                <li>Input-ext</li>
                <li>json-url-transcoder</li>
                <li>Linkedcharts</li>
                <li>Logo</li>
                <li>Messagelogger</li>
                <li>Regression-extension</li>
                <li>Theme-engine</li>
                <li>Tooltip-controller</li>
                <li>xml-transcoder</li>
                <li>Xml-url-transcoder</li>
                <li>annotation-ext</li>
                <li>Batch export</li>
                <li>Consolidated-tooltip</li>
                <li>Crossline-zoomline</li>
                <li>Debugger</li>
                <li>Highlighter</li>
                <li>Legend-event-manager-linker</li>
                <li>Multicanvas-crossline-manager</li>
                <li>vml</li>
            </ul>
        </td>
    </tr>
</table>

* **FusionCharts CJS module (`deprecated`)** - This module is the traditional FusionCharts library which does not allow you to selectively load charts and features. If you want to use an angular gauge you have to include the entire `fusionwidgets` module. 

The installation of both the module is shown below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="es6">ES6</a></li>
    <li><a data-toggle="cjs">CJS</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab es6-tab active">
<div class="mt-10 pb-10"><strong>How to use ES6 to render a chart?</strong></div>
<div><strong>Step 1</strong></div>
<pre><code class="custom-hlc language-javascript">
    // Include the core fusioncharts file from core  -
    import FusionCharts from 'fusioncharts/core';
    
    // Include the chart from viz folder
    import ChartType from fusioncharts/viz/[ChartType]
    
    // E.g. import Pie2d from 'fusioncharts/viz/pie2d';
    // Add the chart as dependency
    FusionCharts.addDep(ChartType);
    
    // E.g. FusionCharts.addDep(Pie2d) -( Pie2d from above )
    // Create an Instance with chart options
    var chartInstance = new FusionCharts({
        type: 'chartType',
        ...allOtherAttributes
    });
    // Render
    chartInstance.render()
</code></pre>
<div class="mt-30"><strong>Using optional features</strong></div>
<div class="pb-10">Optional features reside inside the features folder <strong>node_modules/fusioncharts/features/</strong></div>
<div class="mt-20"><strong>ignore-case-ext</strong></div>
<div class="pb-10">Extension is required if you want all the attributes's case to be ignored , Otherwise the attributes provided must be in lowercase as shown below:</div>
<pre><code class="custom-hlc language-bash">
    var gantt = new FusionCharts({
        type:'column2d',
        width: '700',
        height: '400',
        dataFormat: 'json',
        dataSource: dataSourceList.gantt
    }) .render('gantt');
</code></pre>
<div class="pb-10">Above example work with the ignore-case-ext, if we don't add the extension we have to choose lowercase version shown below:</div>
<pre><code class="custom-hlc language-bash">
    var gantt = new FusionCharts({
        type:'gantt',
        width: '750',
        height: '500',
        dataformat: 'json',
        datasource: dataSourceList.gantt
    }) .render('gantt');
</code></pre>
<div class="pb-10">Adding extension is same as adding any other dependency</div>
<pre><code class="custom-hlc language-json">
    import IgnoreCaseExt from 'fusioncharts/features/ignore-case-ext';
    FusionCharts.addDep(IgnoreCaseExt);
</code></pre>
<div class="mt-20"><strong>alertmanager</strong></div>
<div class="pb-10">Extension is required if you want to display alerts on real time updates You can get the details here: https://www.fusioncharts.com/dev/chart-guide/standard-charts/real-time-charts#set-alert-manager <br/> Adding extension is same as adding any other dependency:</div>
<pre><code class="custom-hlc language-javascript">
    import AlertManager from 'fusioncharts/features/alertmanager';
    FusionCharts.addDep(AlertManager);
</code></pre>
<div class="mt-20"><strong>center-label-extension</strong></div>
<div class="pb-10">Sets the center label in Doughnut 2D chart. The label cosmetics are configurable via the second optional parameter, which accepts a host of related properties.</div>
<pre><code class="custom-hlc language-javascript">
    import CenterLabelExtension from 'fusioncharts/features/center-label-extension';
    FusionCharts.addDep(CenterLabelExtension);
</code></pre>
<div class="mt-20"><strong>crossline-adapter</strong></div>
<div class="pb-10">Draw crossline when crossline is enabled.</div>
<pre><code class="custom-hlc language-javascript">
    import CrosslineAdapter from 'fusioncharts/features/crossline-adapter';
    FusionCharts.addDep(CrosslineAdapter);
</code></pre>
<div class="mt-20"><strong>csv-transcoder</strong></div>
<div class="pb-10">Get the data as csv , avail getDataAsCsv() in FusionCharts instance.</div>
<pre><code class="custom-hlc language-javascript">
    import CsvTranscoder from 'fusioncharts/features/csv-transcoder';
    FusionCharts.addDep(CsvTranscoder);
</code></pre>
<div class="mt-20"><strong>data-skipping</strong></div>
<div class="pb-10">Add data skipping features for charts Read more here: https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts#data-skipping.</div>
<pre><code class="custom-hlc language-javascript">
    import DataSkipping from 'fusioncharts/features/data-skipping';
    FusionCharts.addDep(DataSkipping);
</code></pre>
<div class="mt-20"><strong>default-theme</strong></div>
<div class="pb-10">Add default theme to charts and canvas.</div>
<pre><code class="custom-hlc language-javascript">
    import DefaultTheme from 'fusioncharts/features/default-theme';
    FusionCharts.addDep(DefaultTheme);
</code></pre>
<div class="mt-20"><strong>exports-module</strong></div>
<div class="pb-10">Exports a chart to image or PDF document using this function. The function can be configured to export a chart and present it as a file download. Exporting of a chart is not enabled by default. The chart's data must have the exportEnabled chart attribute explicitly set to 1.</div>
<pre><code class="custom-hlc language-javascript">
    import ExportsModule from 'fusioncharts/features/exports-module';
    FusionCharts.addDep(ExportsModule);
</code></pre>
</div>

<div class="tab cjs-tab">
<div class="pb-10"><strong>Step 1: Install the fusioncharts package via npm</strong></div>
<pre><code class="custom-hlc language-bash">
    npm install fusioncharts
</code></pre>
<div class="mt-20"><strong>Step 2: Load the fusioncharts module</strong></div>
<div class="pb-10">After you have installed fusioncharts via npm, you can include it in one of the three ways:</div>
<div class="mt-20"><strong>Using require():</strong></div>
<pre><code class="custom-hlc language-json">
    require('path/to/local/node_modules/fusioncharts/fusioncharts.js');
</code></pre>
<div class="mt-30 pb-10"><strong>Using import statements:</strong></div>
<pre><code class="custom-hlc language-json">
    import FusionCharts from 'path/to/local/node_modules/fusioncharts/fusioncharts.js';
</code></pre>

<div class="mt-20pb-10"><strong>Using &lt;script&gt;&lt;/script&gt; tags in the head of HTML file:</strong></div>
<pre><code class="custom-hlc language-javascript">
    &lt;script src="path/to/local/node_modules/fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
</code></pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

### Include Maps via `npm`

When installed via `npm`, the `fusioncharts` package contains only two map definitions in `node_modules/fusioncharts/maps` directory - the **World Map**, and the **Map of USA**. This is done to keep the package lightweight. To use any of these two map definition files follow the steps given below:

**Step 1: Install `fusionmaps` package**

Install the `fusionmaps` module as shown below:

```Shell
npm install fusionmaps
```

**Step 2: Load `fusioncharts` module**

The `fusionmaps` package has dependency on the `fusioncharts` package. Therefore, to use `fusionmaps`, it is necessary to first include `fusioncharts` in your project in any one of the two ways:

Using `require()`:

```javascript
require('path/to/local/node_modules/fusioncharts/fusioncharts.js');
```

Using `import` statements:

```javascript
import FusionCharts from 'path/to/local/node_modules/fusioncharts/fusioncharts.js';
```

**Step 3: Load the `fusionmaps` module** and the map definition file in any one of the two modes:

**Using `require()`:**

```javascript
require('path/to/local/node_modules/fusioncharts/fusioncharts.js');
require('path/to/local/node_modules/fusionmaps');
require('path/to/local/node_modules/fusionmaps/maps/fusioncharts.world.js');
```

**Using `import` statements:**

```javascript
import FusionCharts from 'path/to/local/node_modules/fusioncharts/fusioncharts.js';
import FusionMaps from 'path/to/local/node_modules/fusionmaps';
import California from 'path/to/local/node_modules/fusionmaps/maps/fusioncharts.world.js';
```

**Load other map definition files**

You can use the other map definition files other than the **World Map** and the **Map of USA** that are shipped with the `fusioncharts` package by default. To do so, follow the steps below:

* First include the module `fusioncharts.maps.js`.
* Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**.  Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. 

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format. You can do it using any one of the following two methods:

**Using `require()`:**

```javascript
require('path/to/local/node_modules/fusioncharts/fusioncharts.js');
require('path/to/local/node_modules/fusionmaps');
require('path/to/local/node_modules/fusionmaps/maps/fusioncharts.california.js');
```

**Using `import` statements:**

```javascript
import FusionCharts from 'path/to/local/node_modules/fusioncharts/fusioncharts.js';
import FusionMaps from 'path/to/local/node_modules/fusionmaps';
import California from 'path/to/local/node_modules/fusionmaps/maps/fusioncharts.california.js';
```

> It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are fetched from there.

### Include Themes via **npm**

Themes shipped with FusionCharts Suite XT allows you to create centralized theme files and apply those themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

The FusionCharts Suite download package also contains the predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

To include the definition files placed in **fusioncharts/themes**, copy the following line of code:

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

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').