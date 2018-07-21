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

In this article, we will show you how you can download and install the `jQuery helper` and all the other dependencies on your system. You can use FusionCharts in your jquery project using any of the two modes given below:

## Choose your mode of installation:

<table>
    <tr>
        <td align="center">[Direct JavaScript files]({% site.baseurl %}/getting-started/jquery/install-using-jquery#install-using-direct-javascript-files-2)</td>
        <td align="center">[NPM]({% site.baseurl %}/getting-started/jquery/install-using-jquery#install-fusioncharts-via-npm-5)</td>
    </tr>
</table>

## Install using Direct JavaScript files

In order to install and start working with jQuery-FusionCharts you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to include themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended that you copy the `js` folder from within fusioncharts-suite-xt to your project's JavaScript folder.

* The download package also contains **jquery-fusioncharts.js** file under `fusioncharts-suite-xt > integrations > frontend-plugins > jquery` folder. This folder will also contain jQuery-FusionCharts native Export Handlers. The folder structure is shown below:

![jQuery Js Folder]({% site.baseurl %}/gif/jquery-folder-structure.gif)

> If you are using 3.12.2 or older versions, download v3.13.0 to get the `jquery` folder in the FusionCharts Suite XT package. 

> It is recommended that you copy the `jquery` folder from within `fusioncharts-suite-xt > integrations > frontend-plugins > jquery` to your project's JavaScript folder.

Installation of FusionCharts Suite XT involves copying and pasting the JavaScript files from the downloaded package into your project folder.

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
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download definition of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

**Step 1: Include jQuery core library**

To include the jQuery library, add the following &lt;script&gt; tag to your html file:

```html
<script type="text/javascript" src="path/to/local/jquery.min.js"></script>
```

**Step 2: Include the FusionCharts package**

To include the FusionCharts package, add the following &lt;script&gt; tag to your html file:

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
```

**Step 3: Include the jQuery-fusioncharts module**

To include the jQuery-fusioncharts module, add the following &lt;script&gt; tag to your html file:

```html
<script type="text/javascript" src="path/to/local/jquery-fusioncharts.js"></script>
```

Step 4: Include the theme file

To include `Fusion` theme, add the following &lt;script&gt; tag to your html file:

```html
<script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
```

The consolidated code looks like as shown below:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>jQuery - FusionCharts</title>
        <!-- jQuery -->
        <script type="text/javascript" src="path/to/local/jquery.min.js"></script>
        <!-- FusionCharts -->
        <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
        <!-- jQuery-FusionCharts -->
        <script type="text/javascript" src="path/to/local/jquery-fusioncharts.js"></script>
    </head>
</html>
```

That completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/jquery/your-first-chart-using-jquery '@@open-newtab').

### Installing FusionMaps (map visualizations) for your project

In order to render maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files and include them to your HTML as shown below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

```
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.world.js"></script>
```

The `fusioncharts.world.js` file includes path drawings of the map of **world**.

The consolidated code (which also includes the `jquery.js, fusioncharts.js` and `jquery-fusioncharts.js`) looks like as shown below:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>jQuery - FusionCharts</title>
        <!-- jQuery -->
        <script type="text/javascript" src="path/to/local/jquery.min.js"></script>
        <!-- FusionCharts -->
        <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
        <!-- jQuery-FusionCharts -->
        <script type="text/javascript" src="path/to/local/jquery-fusioncharts.js"></script>
        <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
        <!-- FusionMaps -->
        <script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
        <!--WORLD -->
        <script type="text/javascript" src="path/to/local/fusioncharts.world.js"></script>
    </head>
</html>
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
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project.

## Install FusionCharts via npm

Now, let's discuss how to install the fusioncharts module via npm. The fusioncharts package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

This section outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the FusionCharts jQuery helpers.

**Step 1: Install the fusioncharts module via npm**

To install the `fusioncharts` module, execute the following command in the terminal:

```Shell
npm install fusioncharts --save
```

**Step 2: Install the `jquery-fusioncharts` module via npm**

To install the `jquery-fusioncharts` module, execute the following command in the terminal:

```Shell
npm install jquery-fusioncharts --save
```

You can also combine the above commands in a single line, as shown below:

```Shell
npm install fusioncharts jquery-fusioncharts --save
```

**Step 3: Include the fusioncharts module**

Once the installation is done, you need to register the `fusioncharts` module. You can register in multiple ways as per your requirement like:

**Register using all charts:**

You can include the fusioncharts class and jquery-fusioncharts module using any of the following process:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include jQuery:</strong></div>
<pre><code class="custom-hlc language-cs">
    import jQuery from 'jquery';
</code></pre>
<div><strong>To include all charts from FusionCharts:</strong></div>
<pre><code class="custom-hlc language-cs">
    import Charts from 'fusioncharts/fusioncharts.charts';
</code></pre>
<div><strong>To use charts and gauges from PowerCharts and Widgets, import their respective modules using:</strong></div>
<pre><code class="custom-hlc language-cs">
    // For PowerCharts
    import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
    // For Widgets
    import Widgets from 'fusioncharts/fusioncharts.widgets';
</code></pre>
<div><strong>To include jQuery FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-cs">
    import FusionCharts from 'jquery-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include jQuery:</strong></div>
<pre><code class="custom-hlc language-cv">
    let jQuery = require('jquery');
</code></pre>
<div><strong>To include all charts from FusionCharts:</strong></div>
<pre><code class="custom-hlc language-cv">
    let Charts = require('fusioncharts/fusioncharts.charts');
</code></pre>
<div><strong>To use charts and gauges from PowerCharts and Widgets, import their respective modules using:</strong></div>
<pre><code class="custom-hlc language-cv">
    // For PowerCharts
    let PowerCharts = require('fusioncharts/fusioncharts.powercharts');
    // For Widgets
    let Widgets = require('fusioncharts/fusioncharts.widgets');
</code></pre>
<div><strong>To include jQuery FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-cv">
    let FusionCharts = require('jquery-fusioncharts');
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

**To add chart dependency:**

```
Charts(FusionCharts);
```

**To add charts, powercharts and widgets dependencies:**

```
// [Module](FusionCharts);
Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
```

## Include Maps via NPM

You an include the map files using any of the following process:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include jQuery:</strong></div>
<pre><code class="custom-hlc language-cs">
    import jQuery from 'jquery';
</code></pre>
<div><strong>To include the core map files from maps:</strong></div>
<pre><code class="custom-hlc language-cs">
    import Maps from 'fusioncharts/fusioncharts.maps';
</code></pre>
<div><strong>To include the map definition file you want to render:</strong></div>
<pre><code class="custom-hlc language-cs">
    import World from 'fusioncharts/maps/fusioncharts.world';
</code></pre>
<div><strong>To include jQuery FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-cs">
    import FusionCharts from 'jquery-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include jQuery:</strong></div>
<pre><code class="custom-hlc language-cv">
    let jQuery = require('jquery');
</code></pre>
<div><strong>To include the core map files from maps:</strong></div>
<pre><code class="custom-hlc language-cv">
    let Maps = require('fusioncharts/fusioncharts.maps');
</code></pre>
<div><strong>To include the map definition file you want to render:</strong></div>
<pre><code class="custom-hlc language-cv">
    let World = require('fusioncharts/maps/fusioncharts.world');
</code></pre>
<div><strong>To include jQuery FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-cv">
    let FusionCharts = require('jquery-fusioncharts');
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

**To add the map and definition as the dependency to the core:**

```
Maps(FusionCharts);
World(FusionCharts);
```

> If you want to render a map which is not in the fusioncharts package(world and USA), then you need to install **fusionmaps** which contains all the ES6 map definition:
* `npm install fusionmaps`
* ES-6 definitions can be found in `node_modules/fusionmaps/maps/fusioncharts.[MAP-ALIAS].js`

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

### Include Themes via NPM

FusionCharts Suite XT ships with the following predefined themes:

* `fusion`
* `zune`
* `ocean`
* `carbon`

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project.

You can include the themes using any of the following process:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>Import</a></li>
  <li><a data-toggle='xml'>Require</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>To include jQuery:</strong></div>
<pre><code class="custom-hlc language-cs">
    import jQuery from 'jquery';
</code></pre>
<div><strong>To include the theme file:</strong></div>
<pre><code class="custom-hlc language-cs">
    import Fusion from 'fusioncharts/themes/fusioncharts.fusion';
</code></pre>
<div><strong>To include jQuery FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-cs">
    import FusionCharts from 'jquery-fusioncharts';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>To include jQuery:</strong></div>
<pre><code class="custom-hlc language-cv">
    let jQuery = require('jquery');
</code></pre>
<div><strong>To include the theme file:</strong></div>
<pre><code class="custom-hlc language-cv">
    let Fusion = require('fusioncharts/themes/fusioncharts.fusion');
</code></pre>
<div><strong>To include jQuery FusionCharts plugin:</strong></div>
<pre><code class="custom-hlc language-cv">
    let FusionCharts = require('jquery-fusioncharts');
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>