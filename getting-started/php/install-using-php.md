---
permalink: getting-started/php/install-using-php.html
title: Installation | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts PHP wrapper that lets you create interactive, data-driven charts in your PHP website without writing any JavaScript code.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT includes the FusionCharts PHP wrapper that lets you create interactive, data-driven charts in your PHP website without writing any JavaScript code. JavaScript and HTML code is used to generate charts in the browsers. The server-side PHP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts.

In this article, we will show you how you can download and install the `FusionCharts PHP` wrapper and all the other dependencies on your system.

> The FusionCharts PHP server-side wrapper requires PHP 5 or higher.

## Install FusionCharts PHP Wrapper

In order to install and start working with FusionCharts PHP wrapper you need to:

### Step 1

[Download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT which contains the necessary JavaScript files.

Installation of FusionCharts Suite XT merely involves copying and pasting the JavaScript files from the download package into your project folder. The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/images/js-folder-structure.png)

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
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download definition of all the 1000+ maps offered by FusionMaps XT from here. </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files (JSON & CSS). Refer each theme with their respective `JavaScript` and `CSS` file names.|

### Step 2

[Download](https://www.fusioncharts.com/php-charts/) the FusionCharts PHP wrapper which contains the main class file `fusioncharts.php` in `wrappers2/php-wrapper` folder.

That completes the installation of FusionCharts in your application. To see how to create a chart, [click here]({% site.baseurl %}/using-with-javascript-libraries/vuejs/your-first-chart '@@open-newtab').

## Installing FusionMaps (map visualizations) for your project

### Step 1

In order to render maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files.

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this here.

### Step 2

[Download](https://www.fusioncharts.com/php-charts/) the FusionCharts PHP wrapper which contains the main class file `fusioncharts.php` in `wrappers2/php-wrapper/` folder.

That completes the installation of FusionCharts in your application. To see how to create a chart, [click here]({% site.baseurl %}/getting-started/vuejs/your-first-chart-using-vuejs '@@open-newtab').

## Themes

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

To include a theme to your chart, include its corresponding JavaScript file to your project.

> The `fusioncharts.theme.fusion.js` file sets the theme as **fusion**. 