---
title: Installation | FusionCharts
description: FusionCharts Suite XT is a JavaScript library that runs on your desktop and mobile web browsers.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT—the industry's most comprehensive charting solution— is all about easing the whole process of data visualization through charts. This developer center includes everything that you'd want to know about FusionCharts Suite XT.

In this article, we will show you how you can download and install the `FusionCharts` library and all the other dependencies on your system. You can install FusionCharts in your project using any of the two modes given below:

## Choose your mode of installation:

<table>
    <tr>
        <td align="center">[Direct JavaScript files]({% site.baseurl %}/getting-started/plain-javascript/install-using-plain-javascript#install-using-direct-javascript-files-2)</td>
        <td align="center">[NPM]({% site.baseurl %}/getting-started/plain-javascript/install-using-plain-javascript#install-fusioncharts-via-npm-7)</td>
    </tr>
</table>

## Install using Direct JavaScript files

[Download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to include themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended that you copy the `js` folder from fusioncharts-suite-xt to your project's JavaScript folder.

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
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition files of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

In order to install, create an HTML file and follow the steps given below:

**Step 1: Include the FusionCharts package:**

```html
<script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
```

**Step 2: Include the theme file:**

```html
<script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
```

The consolidated code is shown below:

```html
<head>
    <meta charset="utf-8">
    <title>FusionCharts</title>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
</head>
```

That completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/plain-javascript/your-first-chart-using-plain-javascript '@@open-newtab').

### Package-specific Dependencies

* To render a chart belonging to the PowerCharts package, load the PowerCharts module:

```
<script src="path/to/local/fusioncharts/fusioncharts.powercharts.js"> </script>
```

* To render a chart belonging to the FusionWidgets package, load the FusionWidgets module:

```
<script src="path/to/local/fusioncharts/fusioncharts.fusionwidgets.js"> </script>
```

> To know which chart belongs to which package, refer the **[list of charts](https://www.fusioncharts.com/dev/getting-started/list-of-charts.html)**.

### Chart-specific Dependencies

For some chart types, you need to include/exclude certain files and in a specific order. Following  are the chart types, and the corresponding files:

* To render the **Zoom-Scatter** chart, it is necessary to include the `fusioncharts.js` and `fusioncharts.charts.js` files before the `fusioncharts.zoomscatter.js` file.

```
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script> 
<script src = "path/to/local/fusioncharts/fusioncharts.charts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.zoomscatter.js"> </script>
```

* To render the treemap chart, include the **fusioncharts.js** and **fusioncharts.powercharts.js** files before the **fusioncharts.treemap.js** file.

```
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.powercharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.treemap.js"> </script>
```

* To render the SS Grid chart only the **fusioncharts.js** and the **fusioncharts.ssgrid.js** files are needed.

```
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.ssgrid.js"> </script>
```

* To render the Gantt chart only the **fusioncharts.js** and the **fusioncharts.gantt.js** files are needed.

```
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.gantt.js"> </script>
```

* To render the Zoom line chart only the **fusioncharts.js** and the **fusioncharts.zoomline.js** files are needed.

```
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.zoomline.js"> </script>
```

* To render the Overlapped Bar 2D chart only the **fusioncharts.js** and the **fusioncharts.overlappedbar2d.js** files are needed.

```
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.overlappedbar2d.js"> </script>
```

* To render the Overlapped Column 2D chart only the **fusioncharts.js** and the **fusioncharts.overlappedcolumn2d.js** files are needed.

```
<script src = "path/to/local/fusioncharts/fusioncharts.js"> </script>  
<script src = "path/to/local/fusioncharts/fusioncharts.overlappedcolumn2d.js"> </script>
```

### Installing FusionMaps (map visualizations) for your project

In order to render maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files and include them to your HTML as shown below:

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

```
<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
<script type="text/javascript" src="path/to/local/fusioncharts.world.js"></script>
```

The `fusioncharts.world.js` file includes path drawings of the map of **world**.

The consolidated code looks like as shown below:

```html
<head>
    <meta charset="utf-8">
    <title>FusionCharts</title>
    <!-- FusionCharts -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <!-- FusionMaps -->
    <script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>
    <!--world -->
    <script type="text/javascript" src="path/to/local/fusioncharts.world.js"></script>
</head>
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

## Install FusionCharts via **npm**

Let's discuss how to install the FusionCharts package via npm. The FusionCharts package contains files for all charts and widgets and only two map definition files, for the **World map** and the **USA map**.

**Step 1: Install the `fusioncharts` package via npm**

To install the `FusionCharts` package, execute the following command in the terminal:

```Shell
npm install fusioncharts
```

**Step 2: Load `fusioncharts` module**

To load the `fusioncharts` module, add the following code to your HTML file:

```html
<script src="path/to/local/fusioncharts/fusioncharts.js"></script>
```

### Include Maps via NPM

**Step 1: Install `fusionmaps` module**

To install the `fusionmaps` module, execute the following command:

```Shell
npm install fusionmaps
```

**Step 2: Load `fusioncharts` module**

To load the FusionCharts module, add the following code to your HTML file:

```html
<script src="path/to/local/fusionmaps/fusioncharts.js"></script>
```

**Step 3: Load the maps module**

To load the maps module, add the folliwing code to your HTML file:

```html
<script src="path/to/local/fusionmaps/fusioncharts.maps.js"></script>
```

**Step 4: Load Map Definition Files**

Load the map definition file(s) for the map(s) to be rendered using the format: **fusioncharts.&lt;MAP_ALIAS&gt;**. 

Replace **MAP_ALIAS** by the map's JavaScript alias. Click [here](https://www.fusioncharts.com/dev/getting-started/list-of-maps.html) to get the alias names for all map definition files. Include map definition files for all maps to render in the application.

Therefore, assuming that you need to render the world map, the alias name **world** replaces **MAP_ALIAS** in the format.

```
<script src="path/to/local/fusionmaps/maps/fusioncharts.world.js"></script>
```

> It is mandatory to include the map definition files for all maps that you want to render in your application. Unlike the core files that are stored in the **fusioncharts** directory, all map definition files are stored in the **maps** directory and are fetched from there.