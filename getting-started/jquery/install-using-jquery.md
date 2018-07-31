---
title: Installation | FusionCharts
description: The FusionCharts Suite XT jQuery helper allows you to use jQuery syntax to render and manipulate your charts and graphs seamlessly across all browsers and devices.
heading: Installation
chartPresent: false
---

The FusionCharts Suite XT jQuery helper allows you to use jQuery syntax to render and manipulate your charts and graphs seamlessly across all browsers and devices.

It helps you add interactive JavaScript charts to your web and mobile applications, combining the delight and comprehensiveness of the FusionCharts Suite XT with the easy-to-use jQuery syntax. 

Some of the basic features of jQuery plugin are:

* It lets you render jQuery charts that work across PCs (including IE6/7/8), Macs, iPads, iPhones, and Android devices seamlessly.
* Update chart type, data, and individual cosmetic properties at run-time.
* Insert, prepend, and append multiple charts in an existing chart container.
* Customize the look and feel of all elements on the chart.
* Plot charts from data contained in HTML tables.

In this article, we will show you how you can download and install the `jQuery helper` and all the other dependencies on your system. 

## Choose your mode of installation:

You can use FusionCharts in your jquery project using any of the two modes given below:

<table>
    <tr>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/jquery/install-using-jquery#install-using-direct-javascript-files-2"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_JS.svg"></a></td>
        <td align="center" style="border: none !important; background-color:#f3f6f9"><a href="{% site.baseurl %}/getting-started/jquery/install-using-jquery#install-fusioncharts-via-npm-5"><img width="100px" height="100px" src="{% site.baseurl %}/images/Icons_NPM.svg"></a></td>
    </tr>
</table>

## Install using Direct JavaScript files

[Download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to apply themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> We recommend that you copy all the files/folders from `fusioncharts-suite-xt > js` folder to your project folder.

* The download package also contains **jquery-fusioncharts.js** file under `fusioncharts-suite-xt > integrations > jquery` folder. The folder structure is shown below:

![jQuery Js Folder]({% site.baseurl %}/gif/jquery-folder-structure.gif)

Both the minified (compressed) and source (uncompressed) copies of jQuery files are available in the folder. The uncompressed file `jquery-fusioncharts.js` is used during development or debugging, whereas the compressed file `jquery-fusioncharts.min.js` saves bandwidth and improves performance in production. The folder also contains the source map file `jquery-fusioncharts.js.map` for use, when debugging with a compressed file.

> The `jquery` folder in the FusionCharts Suite XT package is available from v3.13.0. 

> We recommend that you copy the files/folders of the `jquery` folder from `fusioncharts-suite-xt > integrations > jquery > js` to your project folder.

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
`maps/*`|This folder contains Map Definition files required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition files of all the 1400+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be applied to charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

Installation of FusionCharts Suite XT is simply copying and pasting the JavaScript files from the downloaded package into your project folder.

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps. Creat an HTML file and follow the steps below:

**Step 1:** Include [jQuery](https://jquery.com '@@open-newtab') core library

Download the jQuery library from [here](https://jquery.com/download/ '@@open-newtab') and include it in your project by adding the following &lt;script&gt; tag to your html file:

```html
<script type="text/javascript" src="path/to/local/jquery.min.js"></script>
```

**Step 2:** Include the FusionCharts package

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
```

**Step 3:** Include the `jquery-fusioncharts` module

```html
<script type="text/javascript" src="path/to/local/jquery-fusioncharts.js"></script>
```

**Step 4:** Include the theme file. This step is optional, the chart will render with the default theme even if the theme file is not included.

```html
<script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
```

The consolidated code is shown below:

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
        <!-- Fusion Theme -->
        <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
    </head>
</html>
```

This completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/jquery/your-first-chart-using-jquery '@@open-newtab').

### Installing FusionMaps for your project

FusionCharts Suite XT provides **1400+** data-driven maps as a part of the product FusionMaps. 
To reduce the size of the download package, we have included the `fusioncharts.maps.js` file and only two map definition files - the **World Map**, and the **map of USA**. However, you can [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the rest the of map definition files, when you need to plot maps of those countries/regions.

> If you are using version v3.12.2 or older, [donwload](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the latest version and replace to upgrade the latest map definition files.

To render a map, you need the core FusionCharts library `fusioncharts.js` along with `fusioncharts.maps.js`, and the map definition files as shown below:

```HTML
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"></script>
<script type="text/JavaScript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>

```

In the above example, we’ve included the World Map, whose map definition (path) is contained in `maps/fusioncharts.world.js`.

**Load other map definition files**

To use any other map (except world and USA) from the 1400+ maps, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files, then copy those map files to your current `/maps` folder. The map definition files are named in the format `fusioncharts.[MAP_ALIAS].js`, where `MAP_ALIAS` represents the country, state or region name.

```
<!-- The next line describes the format for more map definition files -->
<script type="text/javascript" src="path/to/local/maps/fusioncharts.[MAP_ALIAS].js"></script>

```

Therefore, assuming that you need to render the map of **California**, the alias name **california** replaces **MAP_ALIAS** in the format as shown below:

```
<!-- The next line describes the format for more map definition files -->
<script type="text/javascript" src="path/to/local/maps/fusioncharts.california.js"></script>

```

The consolidated code (which also includes the `jquery.min.js`, `fusioncharts.js` and `jquery-fusioncharts.js`) is as shown below:

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
        <!-- Fusion Theme -->
        <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
        <!-- FusionMaps -->
        <script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
        <!--WORLD -->
        <script type="text/javascript" src="path/to/local/fusioncharts.world.js"></script>
    </head>
</html>
```

> Click [here]({% site.baseurl %}/chart-guide/getting-started/list-of-maps '@@open-newtab') to explore all the maps available in FusionMaps XT.

### Themes

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

The FusionCharts Suite download package also contains the predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

To include a theme to your chart, include its corresponding JavaScript file in your HTML page for that theme as shown in the code below:

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').

## Install FusionCharts via npm

The `fusioncharts` package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

This section outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the FusionCharts jQuery helpers.

**Step 1:** Install the `jquery-fusioncharts` package

```PowerShell
$ npm install jquery-fusioncharts --save
```

**Step 2:** Install the `fusioncharts` package

```PowerShell
$ npm install fusioncharts --save
```

**Step 3:** Include the `fusioncharts` module and `jquery` Helper

```JavaScript
var FusionCharts = require('fusioncharts');
var jQuery = require('jquery');
```

**Step 4:** Include all charts from FusionCharts

```JavaScript
var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
```

**Include PowerCharts**

```JavaScript
// For PowerCharts
var PowerCharts = require('fusioncharts/fusioncharts.powercharts');
```

**Include FusionWidgets**

```JavaScript
// For Widgets
var Widgets = require('fusioncharts/fusioncharts.widgets');
```

**Include jQuery FusionCharts plugin**

```JavaScript
var jQueryFusionCharts = require('jquery-fusioncharts');
```

**Add charts, powercharts and widgets dependencies:**

```JavaScript
// [Module](FusionCharts);
Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
```

To include specific charts, include the following require statements in your code:

**Gantt Chart**

```JavaScript
var Gantt = require('fusioncharts/fusioncharts.gantt');
```

**Treemap**

```JavaScript
var Treemap = require('fusioncharts/fusioncharts.treemap');
```

**Zoom Scatter Chart**

```JavaScript
var ZoomScatter = require('fusioncharts/fusioncharts.zoomscatter');
```

**ZoomLine Chart**

```JavaScript
var ZoomLine = require('fusioncharts/fusioncharts.zoomline');
```

**Overlapped Bar2D and Column2D Charts**

```JavaScript
var OverlappedBar2D = require('fusioncharts/fusioncharts.overlappedbar2d');
var OverlappedColumn2D = require('fusioncharts/fusioncharts.overlappedcolumn2d');
```

## Include Maps via NPM

To reduce the size of the download package, the `fusioncharts` package contains only two map definitions in `fusioncharts/maps` directory - the **World Map**, and the **Map of USA**. To use any of these two map definition files follow the steps given below:

**Include jQuery FusionCharts Helper**

```JavaScript
var jQuery = require('jquery');
```

**Load the `FusionMaps` renderer and the map definition file**

```JavaScript
var Charts = require('fusioncharts');
var FusionMaps = require('fusioncharts/fusioncharts.maps');
var World = require('fusioncharts/maps/fusioncharts.world');
```

**Include jQuery FusionCharts Helper**

```JavaScript
var jQueryFusionCharts = require('jquery-fusioncharts');
```

**To add the map and definition as the dependency to the core:**

```
FusionMaps(FusionCharts);
World(FusionCharts);
```

**Load other map definition files**

You can use rest of the map definition files other than the **World Map** and the **Map of USA** that are shipped with the `fusioncharts` package. To do so, install `fusionmaps` package which contains all the map definition files as shown below:

```PowerShell
$ npm install fusionmaps
```

Once the fusionmaps package is installed you will find all the map definition files in `fusionmaps/maps/es` folder. 

> The `fusionmaps` package is dependent on the `fusioncharts` package. Therefore, to use fusionmaps, it is necessary to first include fusioncharts in your project and map renderer as shown below:

```JavaScript
var Charts = require('fusioncharts');
var FusionMaps = require('fusioncharts/fusioncharts.maps');
Maps(FusionCharts);
```

Load the map definition file(s) from the `fusionmaps` package for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**.  

Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. 

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format. So, the complete format will be `fusioncharts.california`.


```JavaScript
var Charts = require('fusioncharts');
var FusionMaps = require('fusioncharts/fusioncharts.maps');
var California = require('fusioncharts/maps/fusioncharts.california');
FusionMaps(FusionCharts);
California(FusionCharts);
```

> It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the `fusioncharts` directory, all map definition files are stored in the `maps/es` directory and are fetched from there.

### Include Themes via NPM

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all the charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

To include themes, follow the steps below:

**Step 1:** Include jQuery helper

```JavaScript
var jQuery = require('jquery');
```

**Step 2:** Include the theme file

```JavaScript
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
FusionTheme(FusionCharts);
```

**Step 3:** Include jQuery FusionCharts Helper

```JavaScript
var jQueryFusionCharts = require('jquery-fusioncharts');
```

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').