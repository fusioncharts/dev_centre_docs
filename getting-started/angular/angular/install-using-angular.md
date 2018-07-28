---
title: Installation | FusionCharts
description: This article outlines the steps to install fusioncharts and fusioncharts angular component to create charts.
heading: Installation
chartPresent: false
---

The **angular-fusioncharts** component, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single Angular component.

In this article, we will show you how you can download and install the `angular-fusionCharts` component and all the other dependencies on your system. You can install FusionCharts in your application using npm.

> Unlike, other tech stacks **Angular-FusionCharts** can only be used via `npm`. Since, **Angular2** and onward does not support direct `<script>` inclusion of files this page shows only the steps to install via `npm`.

Before installing and starting to work with **angular-fusionCharts** wrapper, let's get familiar with the list of JavaScript files present in the **angular-fuioncharts** package:

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

## Install Angular-FusionCharts via npm

This section outlines the steps to be executed for installing **angular-fusioncharts** via npm:

### Step 1: Install `angular-fusioncharts`:

```PowerShell
$ npm install angular-fusioncharts --save
```
### Step 2: Install fusioncharts

```PowerShell
$ npm install fusioncharts --save
```

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='angular4'>Angular 4 onwards</a></li>
  <li><a data-toggle='angular2'>Angular 2</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div><strong>To include the core fusioncharts class:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let FusionCharts = require('fusioncharts/core').default;
</code></pre>
<div><strong>To include the theme engine extension:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let ThemeEngine = require('fusioncharts/features/theme-engine').default;
</code></pre>
<div><strong>To include the theme file:</strong></div>
<pre><code class="custom-hlc language-javascript">
    let Fusion = require('fusioncharts/themes/fusioncharts.fusion');
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

<div class='tab angular2-tab'>
<div class='tab angular4-tab active'>
<div class="mt-30"><strong>Step 3:</strong>Import <strong>FusionChartsModule</strong> in `in the root @NgModule` (in your application)</div>
<pre><code class="custom-hlc language-javascript">
    import { FusionChartsModule } from 'angular-fusioncharts';
</code></pre>
<div class="mt-30"><strong>Step 4:</strong>Import FusionCharts library via npm in `in the root @NgModule`(in your application)</div>
<pre><code class="custom-hlc language-javascript">
    import * as FusionCharts from 'fusioncharts';
</code></pre>
<div class="mt-30"><strong>Step 5:</strong>Import Specific modules</div>
<div class="mt-20"><strong>Import Charts</strong></div>
<pre><code class="custom-hlc language-javascript">
import * as Charts from 'fusioncharts/fusioncharts.charts';    
</code></pre>
<div class="mt-20"><strong>PowerCharts</strong></div>
<pre><code class="custom-hlc language-javascript">
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts'; //PowerCharts
</code></pre>
<div class="mt-20"><strong>FusionWidgets</strong></div>
<pre><code class="custom-hlc language-javascript">
import * as Widgets from 'fusioncharts/fusioncharts.widgets'; // Widgets
</code></pre>
<div class="mt-10"><strong>Note: </strong>To import specific charts, include the following import statements in your code:</div>
<div class="mt-20"><strong>Gantt Chart</strong></div>
<pre><code class="custom-hlc language-javascript">
import * as Gantt from 'fusioncharts/fusioncharts.gantt'; // Gantt
</code></pre>
<div class="mt-20"><strong>Treemap</strong></div>
<pre><code class="custom-hlc language-javascript">
import * as Treemap from 'fusioncharts/fusioncharts.treemap'; // Treemap
</code></pre>
<div class="mt-20"><strong>ZoomScatter</strong></div>
<pre><code class="custom-hlc language-javascript">
import * as ZoomScatter from 'fusioncharts/fusioncharts.zoomscatter'; //Zoom Scatter
</code></pre>
<div class="mt-20"><strong>ZoomLine</strong></div>
<pre><code class="custom-hlc language-javascript">
import * as ZoomLine from 'fusioncharts/fusioncharts.zoomline'; //Zoom Line
</code></pre>
<div class="mt-20"><strong>Overlapped Bar2D and Column2D Charts</strong></div>
<pre><code class="custom-hlc language-javascript">
import * as OverlappedBar2D from 'fusioncharts/fusioncharts.overlapped2d'; //Overlapped Bar 2D
import * as OverlappedColumn2D from 'fusioncharts/fusioncharts.overlappedcolumn2d'; //Overlapped Column 2D
</code></pre>
<div class="mt-30">The above steps completes the installation process. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/angular/angular/your-first-chart-using-angular '@@open-newtab').</div>

<h2>Include Maps via npm</h2>
<div class="mt-30">The `fusioncharts` package contains only two map definitions in `fusioncharts/maps` directory - the <strong>World Map</strong>, and the <strong>Map of USA</strong>. This is done to keep the package lightweight. To use any of these two map definition files follow the steps given below:</div>
<div class="mt-20"><strong>Step 1: </strong>Include the core FusionCharts library</div>
<pre><code class="custom-hlc language-javascript">
import * as FusionCharts from 'fusioncharts';
</code></pre>
<div class="mt-20"><strong>Step 2: </strong>Load the `FusionMaps` renderer and the map definition file</div>
<pre><code class="custom-hlc language-javascript">
import * as FusionCharts from 'fusioncharts';
import * as Maps from 'fusioncharts/fusioncharts.maps'; // Maps
import * as World from 'fusioncharts/maps/fusioncharts.world' // World Map
</code></pre>
<div class="mt-30"><strong>Load other map definition files</strong></div>
<div class="mt-20">You can use rest of the map definition files other than the <strong>World Map</strong> and the <strong>Map of USA</strong> that are shipped with the `fusioncharts` package. To do so, install `fusionmaps` package which contains all the map definition files as shown below:</div>
<pre><code class="custom-hlc language-javascript">
$ npm install fusionmaps
</code></pre>
<div class="mt-20">Once the fusionmaps package is installed you will find all the map definition files in `fusionmaps/maps` folder.</div>
<div class="mt-20">The `fusionmaps` package is dependent on the `fusioncharts` package. Therefore, to use fusionmaps, it is necessary to first include fusioncharts in your project and map renderer as shown below:</div>
<pre><code class="custom-hlc language-javascript">
import * as FusionCharts from 'fusioncharts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
</code></pre>
<div class="mt-20">Load the map definition file(s) from the `fusionmaps` package for the map(s) to be rendered using the format: <strong>fusioncharts.&lt;MAP_ALIAS&gt;</strong>.</div>
<div class="mt-20">Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files.</div>
<div class="mt-20">Therefore, assuming that you need to render the map of California, the alias name <strong>california</strong> replaces <strong>MAP_ALIAS</strong> in the format. So, the complete format will be `fusioncharts.california`.</div>
<pre><code class="custom-hlc language-javascript">
import * as FusionCharts from 'fusioncharts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as California from 'fusionmaps/maps/fusioncharts.california';
</code></pre>
<div clas="mt-10">It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the `fusioncharts` directory, all map definition files are stored in the `maps` directory and are fetched from there.</div>

<h2>Include Themes via `npm`</h2>
<div class="mt-30">[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allows you to apply centralized themes to any number of charts.</div>
<div class="mt-20">In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:
    <ul>
        <li>Visual appearance (data plot color, font color, font size, etc.)</li>
        <li>Behavior (hover effects for data plots)</li>
        <li>Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme).</li>
    </ul>
</div>
<div class="mt-30"><strong>To include themes follow the steps below:</strong></div>
<div class="mt-20"><strong>Step 1: </strong>Import FusionCharts core library</div>
<pre><code class="custom-hlc language-javascript">
import * asFusionCharts from 'fusioncharts'
</code></pre>
<div class="mt-20"><strong>Step 2: </strong>Include the theme file</div>
<pre><code class="custom-hlc language-javascript">
import FusionTheme from 'fusioncharts/themes/fusioncharts.fusion'
</code></pre>
<div class="mt-10">Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').</div>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>