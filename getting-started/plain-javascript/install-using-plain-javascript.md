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

### Package-specific Dependencies

All package-specific charts are dependent on the `fusioncharts.js`. Therefore, whenever you include a package-specific chart in your project, it must be preceded by inclusion of `fusioncharts.js`.

* To render the charts specific to the PowerCharts package, include only `powercharts.js` along with `fusioncharts.js`:

```html
<script src="path/to/local/fusioncharts.js"> </script>
<script src="path/to/local/fusioncharts.powercharts.js"> </script>
```

* To render only the widgets specific to the FusionWidgets package, include the `fusionwidgets.js along with `fusioncharts.js`:

```html
<script src="path/to/local/fusioncharts.js"> </script>
<script src="path/to/local/fusioncharts.widgets.js"> </script>
```

> To know which chart belongs to which package, refer to **[list of charts](https://www.fusioncharts.com/dev/getting-started/list-of-charts.html)**.

### Chart-specific Dependencies

For some chart types, you need to include/exclude certain files and in a specific order. Following  are the chart types, and the corresponding files:

* To render the **Zoom-Scatter** chart, it is necessary to include the `fusioncharts.js` and `fusioncharts.charts.js` files before the `fusioncharts.zoomscatter.js` file.

```html
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script> 
<script src = "path/to/local/fusioncharts/fusioncharts.charts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.zoomscatter.js"> </script>
```

* To render the treemap chart, include the **fusioncharts.js** and **fusioncharts.powercharts.js** files before the **fusioncharts.treemap.js** file.

```html
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.powercharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.treemap.js"> </script>
```

* To render the Gantt chart only the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

```html
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.gantt.js"> </script>
```

* To render the Zoom line chart only the **fusioncharts.js** and the **fusioncharts.zoomline.js** files are needed.

```html
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.zoomline.js"> </script>
```

* To render the Overlapped Bar 2D chart only the **fusioncharts.js** and the **fusioncharts.overlappedbar2d.js** files are needed.

```html
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.overlappedbar2d.js"> </script>
```

* To render the Overlapped Column 2D chart only the **fusioncharts.js** and the **fusioncharts.overlappedcolumn2d.js** files are needed.

```html
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.overlappedcolumn2d.js"> </script>
```

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
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>ES6</a></li>
  <li><a data-toggle='xml'>CJS</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<div><strong>.aspx</strong></div>
<pre><code class="custom-hlc language-cs">
    CODE
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<div><strong>Step 1: Install the fusioncharts package via npm</strong></div>
<div>To include the fusioncharts package as shown below:</div>
<pre><code class="custom-hlc language-cv">
    npm install fusioncharts
</code></pre>
<div><strong>Step 2: Load the fusioncharts module</strong></div>
<div>After you have installed fusioncharts via npm, you can include it in one of the three ways:</div>
<div><strong>Using require():</strong></div>
<pre><code class="custom-hlc language-cv">
    require('path/to/local/node_modules/fusioncharts/fusioncharts.js');
</code></pre>
<div><strong>Using import statements:</strong></div>
<pre><code class="custom-hlc language-cv">
    import FusionCharts from 'path/to/local/node_modules/fusioncharts/fusioncharts.js';
</code></pre>
<div><strong>Using &lt;script&gt;&lt;/script&gt; tags in the head of HTML file:</strong></div>
<pre><code class="custom-hlc language-cv">
    &lt;script src="path/to/local/node_modules/fusioncharts/fusioncharts.js"&gt;&lt;/script&gt;
</code></pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>



**Step 1: Install the `fusioncharts` package via `npm`**

To install the `fusioncharts` package as shown below:

```Shell
npm install fusioncharts
```

**Step 2: Load the `fusioncharts` module**

After you have installed `fusioncharts` via `npm`, you can include it in one of the three ways:

Using `require()`:

```javascript
require('path/to/local/node_modules/fusioncharts/fusioncharts.js');
```

Using `import` statements:

```javascript
import FusionCharts from 'path/to/local/node_modules/fusioncharts/fusioncharts.js';
```

Using `<script></script>` tags in the head of HTML file:

```html
<script src="path/to/local/node_modules/fusioncharts/fusioncharts.js"></script>
```
> We don't recommend this method if you installed the package using `npm`.

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


**Step 3: Load the `fusionmaps` module** and the map in any one of the two modes:

**Using `require()`:**

```javascript
require('path/to/local/node_modules/fusionmaps');
require('path/to/local/node_modules/fusionmaps/maps/fusioncharts.world.js');
```

**Using `import` statements:**

```javascript
import FusionMaps from 'path/to/local/node_modules/fusionmaps';
import California from 'path/to/local/node_modules/fusionmaps/maps/fusioncharts.california.js';
```



To load the `fusionmaps` module 

If you have installed `fusionmaps` and is about to use it in your project, most likely it is because your map visualization requirements are not fulfilled by the **World Map** and the **Map of USA** that are shipped with the `fusioncharts` package by default.

However, to be able to include the map-specific definition files, you must include the module `fusioncharts.maps.js`.

Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**.

Replace **MAP_ALIAS** by the map's JavaScript alias. Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. Include map definition files for all maps to render in the application.

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format. You can do it using any one of the following three methods:



**Using `<script></script>` tags in the head of HTML file:**

> We don't recommend this method if you installed the package using `npm`.

```html
<script src="path/to/local/node_modules/fusionmaps/fusioncharts.maps.js"></script>
<script src="path/to/local/node_modules/fusionmaps/fusioncharts.california.js"></script>
```

> It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are fetched from there.