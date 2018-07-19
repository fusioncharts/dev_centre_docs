---
title: Installation | FusionCharts
description: This article outlines the steps to install fusioncharts and fusioncharts angularjs component to create charts.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT includes an extensive range of charts, gauges, and maps that you can use to plot all types of static and real-time data.

The angularjs-fusionCharts wrapper, along with FusionCharts Suite XT, lets you add interactive JavaScript charts and graphs to your web and mobile applications using only a single AngularJS component.

In this article, we will show you how you can download and install the `angularjs-fusionCharts` wrapper and all the other dependencies on your system. You can install FusionCharts in your application using NPM.

## Install FusionCharts via npm

Before installing and start working with angularjs-fusionCharts wrapper, let's checkout the list of JavaScript files present in your `fusioncharts-suite-xt` folder:

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

Now, let's discuss how to install the fusioncharts module via npm. The fusioncharts package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

This section outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the angularjs-FusionCharts wrapper.

You can install `angularjs fusioncharts` wrapper using any of the following steps:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Script Tags</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>Install angular(1.x) package:</strong></div>
<pre><code class="custom-hlc language-cs">
    npm install angular@1.7.2 --save
</code></pre>
<div><strong>Install fusioncharts package:</strong></div>
<pre><code class="custom-hlc language-cs">
    npm install fusioncharts --save
</code></pre>
<div><strong>Install angularjs-fusioncharts wrapper:</strong></div>
<pre><code class="custom-hlc language-cs">
    npm install angularjs-fusioncharts --save
</code></pre>
<div><strong>In your index.html, include all the script tags</strong></div>
<pre><code class="custom-hlc language-cs">
    &lt;script src="node_modules/fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/angular/angular.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/angular-fusioncharts/dist/angular-fusioncharts.min.js"&gt;
    &lt;/script&gt;
</code></pre>
<div><strong>In scripts.js, add the dependency</strong></div>
<pre><code class="custom-hlc language-cs">
    angular.module('your-app-name', ["ng-fusioncharts"]);
</code></pre>
<div><strong>Now fusioncharts directive as a attribute as well as tag is available in your app.</strong></div>
<div>Other required files</div>
<div><strong>Include charts in script tag</strong></div>
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
<div><strong>Install fusioncharts package</strong></div>
<pre><code class="custom-hlc language-cv">
    npm install fusioncharts --save
</code></pre>
<div><strong>Install angularjs-fusioncharts wrapper</strong></div>
<pre><code class="custom-hlc language-cv">
    npm install angularjs-fusioncharts --save
</code></pre>
<div><strong>In your script.js file:</strong></div>
<div>require <strong>angular</strong></div>
<pre><code class="custom-hlc language-cv">
    const angular = require('angular');
</code></pre>
<div>require <strong>fusioncharts</strong></div>
<pre><code class="custom-hlc language-cv">
    const FusionCharts = require('fusioncharts');
</code></pre>
<div>require your chart module</div>
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
<div>Require the <strong>angularjs-fusioncharts</strong> module</div>
<pre><code class="custom-hlc language-cv">
    require('angularjs-fusioncharts');
</code></pre> 
<div>Pass the FusionCharts module to the Charts Modules</div>
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
<div><strong>Include map definitions in script tag</strong></div>
<pre><code class="custom-hlc language-cs">
    &lt;script src="node_modules/fusioncharts/maps/fusioncharts.world.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/maps/fusioncharts.usa.js"&gt;&lt;/script&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div>require your map module</div>
<pre><code class="custom-hlc language-cv">
    const Charts = require('fusioncharts/maps.fusioncharts.world'); // World Map
    const Widgets = require('fusioncharts/maps.fusioncharts.usa'); // Map of USA
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

## Include Themes via NPM

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

<div><strong>To include theme definition in script tag</strong></div>
<pre><code class="custom-hlc language-cs">
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.ocean.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.zune.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.fint.js"&gt;&lt;/script&gt;
    &lt;script src="node_modules/fusioncharts/theme/fusioncharts.theme.carbon.js"&gt;&lt;/script&gt;
</code></pre>

> The `fusioncharts.theme.fusion.js` and `fusioncharts.theme.fusion.css` file sets the theme as **fusion**. To add any other theme to your chart, include its corresponding JavaScript file to your project.