---
title: Installation | FusionCharts
description: FusionCharts Suite XT is a JavaScript library that runs on your desktop and mobile web browsers.
heading: Installation
chartPresent: false
---

**FusionCharts Suite XT** — the industry's most comprehensive JavaScript charting solution — is all about easing the whole process of data visualization through charts.

In this article, we will show you how to download and install the **FusionCharts Suite XT**  library and all the other dependencies on your system.

## Choose Your Mode of Installation:

You can include FusionCharts in your project using any of the two modes given below:

<table>
    <tr>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/plain-javascript/install-using-plain-javascript#install-using-direct-javascript-files-2"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_JS.svg"></a></td>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/plain-javascript/install-using-plain-javascript#install-fusioncharts-via-npm-5"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_NPM.svg"></a></td>
    </tr>
</table>

## Install using Direct JavaScript files

[Download](https://www.fusioncharts.com/download/) the `fusioncharts-suite-xt` package which contains:

* JavaScript files to render **Charts**, **Widgets**, and **PowerCharts** in the `js` folder.
* JavaScript files to render maps in the `js > maps` folder.
* JavaScript files to apply themes in the `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> We recommend that you copy all the files/folders from `fusioncharts-suite-xt > js` folder to your project folder.

Following is the list of JavaScript files present in your `fusioncharts-suite-xt > js` folder:

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
`maps/*`|This folder contains Map Definition files required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition files of all the 1400+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) to the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be applied to charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

To install FusionCharts Suite XT, simply copy and paste the JavaScript files from the downloaded package into your project folder.

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps. Create an HTML file and follow the steps given below:

**Step 1:** Include the `fusioncharts.js` (FusionCharts core library) file. This file is required to render any **charts**, **widgets** and **map**.

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
```

**Step 2 (optional):** Include the theme file.

This step is optional, the chart will render with the default theme even if the theme file is not included.

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

## Installing FusionMaps for your project

FusionCharts Suite XT provides **1400+** data-driven maps as a part of the FusionMaps product. 
To reduce the size of the download package, we have included the `fusioncharts.maps.js` file and only two map definition files - the **World Map**, and the **map of USA**. However, you can [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the rest the of map definition files to plot maps of those countries/regions. 

> If you are using version v3.12.2 or older, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the latest version and replace to upgrade the latest map definition files.

To render a map, you need the core FusionCharts library `fusioncharts.js` along with `fusioncharts.maps.js`, and the map definition files as shown below:

```
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"></script>
```

In the above example, we’ve included the World Map, whose map definition (path) is contained in `maps/fusioncharts.world.js`.

**Load other map definition files**

To use any other map (except world and USA) from the **1400+** maps, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files, then copy those map files to your current `maps` folder. The map definition files are named in the `fusioncharts.[MAP_ALIAS].js` format, where MAP_ALIAS represents the country, state or region name. 

```
<script type="text/javascript" src="path/to/local/maps/fusioncharts.[MAP_ALIAS].js"></script>
```

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format as shown below:

```
<script type="text/javascript" src="path/to/local/maps/fusioncharts.california.js"></script>
```

Click [here]({% site.baseurl %}/chart-guide/getting-started/list-of-maps '@@open-newtab') to explore all the maps available in FusionMaps XT.

The consolidated code is shown below:

```
<head>
    <meta charset="utf-8">
    <title>FusionCharts</title>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- FusionMaps -->
    <script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
    <!--world -->
    <script type="text/javascript" src="path/to/local/maps/fusioncharts.california.js"></script>
    <script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>
```

## Themes

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all the charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots that uses the theme)

The FusionCharts Suite download package also contains predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

To include a theme to your chart, include its corresponding JavaScript file in your HTML page as shown in the code below:

```html
<script type="text/JavaScript" src="path/to/local/fusioncharts.js"></script>
<script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

> Only including the `fusioncharts.theme.fusion.js` file will not apply the theme. To apply the theme, set the value of `theme` attribute to the respective name of the theme. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').

## Install FusionCharts via **npm**

To install the `fusioncharts` package via  npm run the command below:

```
$ npm install fusioncharts
```

The `fusioncharts` package for `npm` can now be used in two different ways:

* **FusionCharts ES module** - From v3.13.0 we are providing the FusionCharts library as ES (ECMAScript) modules within the `fusioncharts` npm package. This package lets you selectively add modules as per your requirement. For example - You need to render the **angular gauge**, **pie chart** and the **column chart**. The FusionCharts ES module allows you to cherry-pick only these visualizations and use in your application. 
 
The folders of the `fusioncharts` npm package are shown in the table below:

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
        <td>`maps/es`</td>
        <td>Contains the map renderer and the map definition files of **World** and **USA**</td>
    </tr>
    <tr>
        <td>`themes/es`</td>
        <td>Contaians all the theme files. </td>
    </tr>
</table>

* **FusionCharts CJS module (`deprecated`)** - This module is the traditional FusionCharts library which does not allow you to load charts and features selectively. If you want to use an angular gauge, you have to include the entire `fusionwidgets` module. 

The installation steps for both the modules are shown below:

<div class="code-wrapper">
<ul class="code-tabs extra-tabs">
    <li class="active"><a data-toggle="es6">ES6</a></li>
    <li><a data-toggle="cjs">CJS</a></li>
</ul>
<div class="tab-content extra-tabs">
<div class="tab es6-tab active">
<div><strong>Step 1</strong></div>
<pre><code class="custom-hlc language-javascript">
    // Install fusioncharts package
    $ npm install fusioncharts
    </code></pre>
<div><strong>Step 2</strong></div>
<pre><code class="custom-hlc language-javascript">
    // Include the core fusioncharts file from core  -
    import FusionCharts from 'fusioncharts/core';
    
    // Include the chart from viz folder
    // E.g. - import ChartType from fusioncharts/viz/[ChartType]
    import Column2D from 'fusioncharts/viz/column2d';
        
    // Add the chart as dependency
    // E.g. FusionCharts.addDep(ChartType)
    FusionCharts.addDep(Column2D);
        
    // Create an Instance with chart options
    var chartInstance = new FusionCharts({
        type: 'Column2D',
        width: '700', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        renderAt:'chart-container', //container where the chart will render
        dataSource: {
            // Chart Configuration
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion"
            },
            // Chart Data
            "data": [{
                "label": "Venezuela",
                "value": "290"
            }, {
                "label": "Saudi",
                "value": "260"
            }, {
                "label": "Canada",
                "value": "180"
            }, {
                "label": "Iran",
                "value": "140"
            }, {
                "label": "Russia",
                "value": "115"
            }, {
                "label": "UAE",
                "value": "100"
            }, {
                "label": "US",
                "value": "30"
            }, {
                "label": "China",
                "value": "30"
            }]
        }
    });
    // Render
    chartInstance.render();
</code></pre>
<div><strong>Step 3</strong></div>
<pre><code class="custom-hlc language-javascript">
&lt;!-- Create an element to render the chart with id as chart-container --&gt;
&lt;div id="chart-container"&gt;FusionCharts XT will load here!&lt;/div&gt;
</code></pre>
</div>

<div class="tab cjs-tab">
<div class="pb-10"><strong>Step 1: Install the fusioncharts package via npm</strong></div>
<pre><code class="custom-hlc language-bash">
$ npm install fusioncharts
</code></pre>
<div class="mt-20"><strong>Step 2: Load the fusioncharts module</strong></div>
<div class="pb-10">After you have installed fusioncharts via npm, include the `fusioncharts` module<strong>using require():</strong> </div>
<pre><code class="custom-hlc language-json">
    var FusionCharts = require('fusioncharts');
</code></pre>
<pre><code class="custom-hlc language-json">
    var FusionCharts = require('fusioncharts');
    var Charts = require('fusioncharts/fusioncharts.charts');
    Charts(FusionCharts);

    // Create an Instance with chart options
    var chartInstance = new FusionCharts({
        type: 'Column2D',
        renderAt: 'chart-container',
        width: '700', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            // Chart Configuration
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion"
            },
            // Chart Data
            "data": [{
                "label": "Venezuela",
                "value": "290"
            }, {
                "label": "Saudi",
                "value": "260"
            }, {
                "label": "Canada",
                "value": "180"
            }, {
                "label": "Iran",
                "value": "140"
            }, {
                "label": "Russia",
                "value": "115"
            }, {
                "label": "UAE",
                "value": "100"
            }, {
                "label": "US",
                "value": "30"
            }, {
                "label": "China",
                "value": "30"
            }]
        }
    });
    // Render
    chartInstance.render();
</code></pre>
<div class="mt-20"><strong>To include PowerCharts using require();</strong></div>
<pre><code class="custom-hlc language-json">
    var FusionCharts = require('fusioncharts');
    var PowerCharts = require('fusioncharts/fusioncharts.powercharts');
    PowerCharts(FusionCharts);
</code></pre>
<div class="mt-20"><strong>To include FusionWidgets using require();</strong></div>
<pre><code class="custom-hlc language-json">
    var FusionCharts = require('fusioncharts');
    var Widgets = require('fusioncharts/fusioncharts.widgets');
    Widgets(FusionCharts);
</code></pre>
<div class="mt-30"><strong>To include specific chart types individually using `require`:</strong></div>
<div class="mt-20"><strong>To render Gantt Chart:</strong></div>
<pre><code class="custom-hlc language-json">
    var FusionCharts = require('fusioncharts');
    var Gantt = require('fusioncharts/fusioncharts.gantt'); // Gantt
    Gantt(FusionCharts);
</code></pre>
<div class="mt-20"><strong>To render Treemap Chart:</strong></div>
<pre><code class="custom-hlc language-json">
    var FusionCharts = require('fusioncharts');
    var Treemap = require('fusioncharts/fusioncharts.treemap'); // Treemap
    Treemap(FusionCharts);
</code></pre>
<div class="mt-20"><strong>To render Zoomscatter Chart:</strong></div>
<pre><code class="custom-hlc language-json">
    var FusionCharts = require('fusioncharts');
    var Zoomscatter = require('fusioncharts/fusioncharts.zoomscatter'); //Zoom Scatter
    Zoomscatter(FusionCharts);
</code></pre>
<div class="mt-20"><strong>To render Zoomline Chart:</strong></div>
<pre><code class="custom-hlc language-json">
    var FusionCharts = require('fusioncharts');
    var Zoomline = require('fusioncharts/fusioncharts.zoomline'); // Zoomline
    Zoomline(FusionCharts);
</code></pre>
<div class="mt-20"><strong>To render Ovelapped Bar and Column charts:</strong></div>
<pre><code class="custom-hlc language-json">
    var FusionCharts = require('fusioncharts');
    var OverlappedBar2d = require('fusioncharts/fusioncharts.overlappedbar2d');
    var Overlappedcolumn2d = require('fusioncharts/fusioncharts.overlappedcolumn2d');
    OverlappedBar2d(FusionCharts);
    Overlappedcolumn2d(FusionCharts);
</code></pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

## Include Maps via **npm**

To reduce the size of the download package, the `fusioncharts` package contains only two map definitions in `fusioncharts/maps` directory - the **World Map**, and the **Map of USA**. To use any of these two map definition files, follow the steps given below:

**Step 1: Load the `fusioncharts` module**:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='es6'>ES6</a></li>
  <li><a data-toggle='cjs'>CJS</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab es6-tab active'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
    // Include the core fusioncharts file from core 
    import FusionCharts from 'fusioncharts/core';
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab cjs-tab'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
var FusionCharts = require('fusioncharts');
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>


**Step 2:** Load the `FusionMaps` renderer and the map definition file:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='es6'>ES6</a></li>
  <li><a data-toggle='cjs'>CJS</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab es6-tab active'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts/core';
    import FusionMaps from 'fusioncharts/maps';
    import World from 'fusioncharts/maps/es/fusioncharts.world';

    // Add the chart as dependency
    // E.g. FusionCharts.addDep(ChartType)
    FusionCharts.addDep(FusionMaps);
    FusionCharts.addDep(World);
        
    // Create an Instance with map options
    var annualPopulation =   new  FusionCharts({
        type: 'world', // Map type
        renderAt: 'chart-container', // Container
        width: '800', // Width of the chart
        height: '550', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
            // Map Configuration
            "chart": {
                "caption": "Average Annual Population Growth",
                "subcaption": " 1955-2015",
                "numbersuffix": "%",
                "includevalueinlabels": "1",
                "labelsepchar": ": ",
                "entityFillHoverColor": "#FFF9C4",
                "theme": "fusion"
            },
            // Aesthetics; ranges synced with the slider
            "colorrange": {
                "minvalue": "0",
                "code": "#FFE0B2",
                "gradient": "1",
                "color": [{
                    "minvalue": "0.5",
                    "maxvalue": "1.0",
                    "color": "#FFD74D"
                }, {
                    "minvalue": "1.0",
                    "maxvalue": "2.0",
                    "color": "#FB8C00"
                }, {
                    "minvalue": "2.0",
                    "maxvalue": "3.0",
                    "color": "#E65100"
                }]
            },
            // Source data as JSON --> id represents countries of world.
            "data": [{
                "id": "NA",
                "value": ".82",
                "showLabel": "1"
            }, {
                "id": "SA",
                "value": "2.04",
                "showLabel": "1"
            }, {
                "id": "AS",
                "value": "1.78",
                "showLabel": "1"
            }, {
                "id": "EU",
                "value": ".40",
                "showLabel": "1"
            }, {
                "id": "AF",
                "value": "2.58",
                "showLabel": "1"
            }, {
                "id": "AU",
                "value": "1.30",
                "showLabel": "1"
            }]
        }
    }
});
// Render
chartInstance.render()
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab cjs-tab'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
    var FusionCharts = require('fusioncharts');
    var FusionMaps = require('fusioncharts/fusioncharts.maps');
    var World = require('fusioncharts/maps/fusioncharts.world');
    FusionMaps(FusionCharts);
    World(FusionCharts);

    // Create an Instance with map options
    var annualPopulation =   new  FusionCharts({
        type: 'world', // Map type
        renderAt: 'chart-container', // Container
        width: '800', // Width of the chart
        height: '550', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
            // Map Configuration
            "chart": {
                "caption": "Average Annual Population Growth",
                "subcaption": " 1955-2015",
                "numbersuffix": "%",
                "includevalueinlabels": "1",
                "labelsepchar": ": ",
                "entityFillHoverColor": "#FFF9C4",
                "theme": "fusion"
            },
            // Aesthetics; ranges synced with the slider
            "colorrange": {
                "minvalue": "0",
                "code": "#FFE0B2",
                "gradient": "1",
                "color": [{
                    "minvalue": "0.5",
                    "maxvalue": "1.0",
                    "color": "#FFD74D"
                }, {
                    "minvalue": "1.0",
                    "maxvalue": "2.0",
                    "color": "#FB8C00"
                }, {
                    "minvalue": "2.0",
                    "maxvalue": "3.0",
                    "color": "#E65100"
                }]
            },
            // Source data as JSON --> id represents countries of world.
            "data": [{
                "id": "NA",
                "value": ".82",
                "showLabel": "1"
            }, {
                "id": "SA",
                "value": "2.04",
                "showLabel": "1"
            }, {
                "id": "AS",
                "value": "1.78",
                "showLabel": "1"
            }, {
                "id": "EU",
                "value": ".40",
                "showLabel": "1"
            }, {
                "id": "AF",
                "value": "2.58",
                "showLabel": "1"
            }, {
                "id": "AU",
                "value": "1.30",
                "showLabel": "1"
            }]
        }
    }
});
// Render
chartInstance.render()
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

**Load other map definition files**

You can also use the remaining map definition files, other than the **World Map** and the **Map of USA** that are shipped with the `fusioncharts` package. To do so, install `fusionmaps` package which contains all the map definition files as shown below:

**Install `fusionmaps` package**

```Shell
$ npm install fusionmaps
```

Once the fusionmaps package is installed you will find all the map definition files in `fusionmaps/maps/es` folder. 

> The `fusionmaps` package is dependent on the `fusioncharts` package. Therefore, to use fusionmaps, it is necessary to first include fusioncharts in your project and map renderer as shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='es6'>ES6</a></li>
  <li><a data-toggle='cjs'>CJS</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab es6-tab active'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts/core';
    import FusionMaps from 'fusioncharts/maps';
    FusionCharts.addDep(FusionMaps);
</code></pre>
</div>
<div class='tab cjs-tab'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
    var FusionCharts = require('fusioncharts');
    var FusionMaps = require('fusioncharts/fusioncharts.maps');
    FusionMaps(FusionCharts);
</code></pre>
</div>
</div>
</div>

Load the map definition file(s) from the `fusionmaps` package for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**.  

Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. 

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format. So, the complete format will be `fusioncharts.california`.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='es6'>ES6</a></li>
  <li><a data-toggle='cjs'>CJS</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab es6-tab active'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts/core';
    import FusionMaps from 'fusioncharts/maps';
    import California from 'fusionmaps/maps/es/fusioncharts.california';
    FusionCharts.addDep(FusionMaps);
    FusionCharts.addDep(California);
</code></pre>

<div class="mt-30"> <strong>Note: </strong>It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the `fusioncharts` directory, all map definition files are stored in the `maps/es` directory and are fetched from there.
</div>

</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab cjs-tab'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
    var FusionCharts = require('fusioncharts');
    var FusionMaps = require('fusioncharts/fusiocharts.maps');
    var California = require('fusionmaps/maps/fusioncharts.california');
    FusionMaps(FusionCharts);
    California(FusionCharts);
</code></pre>

<div class="mt-30"><strong>Note: </strong>It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the `fusioncharts` directory, all map definition files are stored in the `maps` directory and are fetched from there.
</div>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

## Include Themes via **npm**

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges, and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all charts that use the theme)

To include the definition files placed in **fusioncharts/themes**, follow any of the two ways shown below:


<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='es6'>ES6</a></li>
  <li><a data-toggle='cjs'>CJS</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab es6-tab active'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionCharts from 'fusioncharts/core'
</code></pre>
<div><strong>To include the theme file, copy the following line of code:</strong></div>
<pre><code class="custom-hlc language-javascript">
    import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion'
    FusionCharts.addDep(FusionTheme);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab cjs-tab'>
<div><strong></strong></div>
<pre><code class="custom-hlc language-javascript">
    var FusionCharts = require('fusioncharts');
    var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
    FusionTheme(FusionCharts);
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

> Only including the `fusioncharts.theme.fusion.js` file will not apply the theme. To apply the theme, set the value of `theme` attribute to the respective name of the theme. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').