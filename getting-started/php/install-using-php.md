---
permalink: getting-started/php/install-using-php.html
title: Installation | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts PHP wrapper that lets you create interactive, data-driven charts in your PHP website without writing any JavaScript code.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT includes the **FusionCharts server-side PHP** wrapper that lets you create interactive, data-driven charts. Using the wrapper, you can create charts in your browsers without writing any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in your web page to generate charts.

In this article, we will show you how to download and install the `FusionCharts PHP` wrapper and all the other dependencies on your system.

> The FusionCharts PHP server-side wrapper requires **PHP 5** or higher.

## Install FusionCharts PHP Wrapper

In order to install and start working with PHP-FusionCharts you need to [download](https://www.fusioncharts.com/download/ '@@open-newtab') the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets**, and **PowerCharts** in the `js` folder.
* JavaScript files to render maps in the `js > maps` folder.
* JavaScript files to apply themes in the `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> You need to copy all the files/folders from `fusioncharts-suite-xt > js` folder to your project folder.

* The download package also contains `fusioncharts.php` file under the `fusioncharts-suite-xt > integrations > php > fusioncharts-wrapper` folder and the FusionCharts PHP native **[Export Handler]({% site.baseurl %}/exporting-charts/using-fc-export-server/server-side-export/setup-private-export-server/php '@@open-newtab')**. The folder structure is shown below:

![PHP Js Folder]({% site.baseurl %}/gif/php-folder-structure.gif)

> The `php` folder in the FusionCharts Suite XT package is available from v3.13.0.

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

To install FusionCharts Suite XT, simply copy and paste the JavaScript files from the downloaded package into your project folder. 

Once you have copied FusionCharts Suite XT into your project, you can now include the FusionCharts JavaScript library in your web page and start building your charts, gauges, and maps.

Create a PHP file and follow the steps given below:

**Step 1:** Include the FusionCharts package:

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
```

**Step 2 (optional):** Include the theme file:

```html
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

**Step 3:** To use **FusionCharts PHP wrapper** in your project, include the `fusioncharts.php` wrapper to your PHP page:

```PHP
<?php
   	/* Include the `fusioncharts.php` file that contains functions to embed the charts. */
   	include(“path/to/local/fusioncharts.php”);
?>
```

This completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/php/your-first-chart-using-php '@@open-newtab').

## Installing FusionMaps for your project

FusionCharts Suite XT provides **1400+** data-driven maps as a part of the FusionMaps product. To reduce the size of the download package, we have included the `fusioncharts.maps.js` file and only two map definition files - the **World Map**, and the **Map of USA**. However, you can [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the remaining map definition files to plot maps of those countries/regions.

> If you are using version v3.12.2 or older, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the latest version and replace for upgrading to the latest map definition files.

To install FusionMaps follow the steps given below:

**Step 1:** Copy/paste the `fusioncharts.php` file from `fusioncharts-suite-xt > integrations > php > fusioncharts-wrapper` to your project’s folder and include it to your PHP page.

**Step 2:** To render a map, you need to include the core FusionCharts library `fusioncharts.js` along with `fusioncharts.maps.js`, and the map definition files to your project's folder. 

**Step 3:** Once done, insert the `<script>` tag where you want to include the source of the FusionCharts library link from the specific local folder in the project. The `<script>` tag is shown below:

```
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"></script>
```

In the above example, we’ve included the **World Map**, whose map definition (path) is in `maps/fusioncharts.world.js`.

**Load other map definition files**

To use any other map (except **World** and **USA**) from our **1400+** maps, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files and copy them to your current `maps` folder. The map definition files are named in `fusioncharts.[MAP_ALIAS].js` format, where MAP_ALIAS represents the country, state, or region name.

Insert the `<script>` tag where you want to include the source of the FusionCharts library link from the specific local folder in the project. The `<script>` tag is shown below:

```
<script type="text/javascript" src="path/to/local/maps/fusioncharts.[MAP_ALIAS].js"></script>
```

Therefore, assuming that you want to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format as shown below:

```
<script type="text/javascript" src="path/to/local/maps/fusioncharts.california.js"></script>
```

Click [here]({% site.baseurl %}/chart-guide/getting-started/list-of-maps '@@open-newtab') to explore all the maps available in FusionMaps XT.

This completes the installation of FusionMaps in your application. To see how to create a map,
* JavaScript files to apply themes in the `js > themes` folder. click [here]({% site.baseurl %}/getting-started/php/your-first-chart-using-php#create-your-first-map-10 '@@open-newtab').

## Themes

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all charts that use the theme)

The FusionCharts Suite download package also contains predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

To add any theme, you need to include the `.js` file of the theme in the `<script>` tag as shown below:

```HTML
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
<script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
```

> Only including the `fusioncharts.theme.fusion.js` file will not apply the theme. To apply the theme, set the value of `theme` attribute to the respective name of the theme. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').