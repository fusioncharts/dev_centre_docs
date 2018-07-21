---
permalink: getting-started/aspnet/install-using-aspnet.html
title: Installation | FusionCharts
description: This article talks about how you can install FusionCharts ASP wrapper.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT includes the FusionCharts server-side ASP.NET wrapper that lets you create interactive, data-driven charts. FusionCharts uses JavaScript and HTML code to generate charts in the browser. Using the ASP.NET wrapper, you can create charts in your ASP.NET website without writing any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in the web page for generating charts. Before we get into the installation process of the wrapper, let's take a look at what sets the wrapper apart.

Some of the basic features of the ASP.NET wrapper are:

* Easily create charts in JavaScript using your C#/VB code.
* Can render charts using **JSON/XML** data or URL.

In this article, we will show you how you can download and install the `FusionCharts ASP.NET` wrapper and all the other dependencies on your system. You can use FusionCharts in your ASP.NET project using direct JavaScript files.

> The FusionCharts ASP.NET server-side wrapper requires a .NET Framework 3.5 or higher.

## Install FusionCharts ASP.NET Wrapper

In order to install and start working with FusionCharts ASP.NET wrapper you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to include themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended that you copy the `js` folder from within fusioncharts-suite-xt to your project's JavaScript folder.

* The download package also contains **.aspx.vb** file under `fusioncharts-suite-xt > integrations > serverside-extensions > asp.net > asp.net-vb` folder.

* The download package also contains **.aspx.cs** file under `fusioncharts-suite-xt > integrations > serverside-extensions > asp.net > asp.net-cs` folder. 

This folder will also contain FusionCharts ASP.NET's native Export Handlers. The folder structure is shown below:

![ASP.NET Folder Structure]({% site.baseurl %}/gif/aspnet-folder-structure.gif)

> If you are using 3.12.2 or older versions, download v3.13.0 to get the `asp.net-vb` and `asp.net-cs` folders in the FusionCharts Suite XT package. 

> It is recommended that you copy the above folders from within `fusioncharts-suite-xt > integrations > serverside-extensions > asp.net` to your project's JavaScript folder.

Installation of FusionCharts Suite XT merely involves copying and pasting the JavaScript files from the downloaded package into your project folder.

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
`maps/*`|This folder contains path data required by each map to be rendered by `fusioncharts.maps.js`. To keep the download package size small, it contains only 2 maps - `fusioncharts.world.js` and `fusioncharts.usa.js`. You can download the definition of all the 1000+ maps offered by FusionMaps XT from [here](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab'). </br>**Note:** Replace the map definition files (of v3.12.2 or older) with the latest files available in download package while upgrading to v3.13.0.|
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective `JavaScript` file names.|

To add any of the files in your project, drag and drop the file in `App_Code` folder inside your project.

> You can also add a reference to `FusionCharts.dll` in your project to work with either VB or C#. `FusionCharts.dll` is present in `asp.net-cs-wrapper/Bin` folder or `asp.net-vb-wrapper/DLLFile`.

That completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/aspnet/your-first-chart-using-aspnet '@@open-newtab').

## Installing FusionMaps (map visualizations) for your project

### Step 1

In order to render maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files.

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

To add any of the above files in your project, drag and drop the file in `App_Code` folder inside your project.

> You can also add a reference to `FusionCharts.dll` in your project to work with either VB or C#. FusionCharts.dll is present in `asp-net-wrapper/Bin` folder or `vb-net-wrapper-master/DLLFile`.

That completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/aspnet/your-first-chart-using-aspnet#create-your-first-map-10 '@@open-newtab').

## Themes

Themes shipped with FusionCharts Suite XT allow you to create centralized theme files and apply those themes to any number of charts.

In a theme file, you can centralize the following aspects of a chart, gauge, or map:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

FusionCharts Suite XT ships with the following predefined themes:

* `fusion`
* `zune`
* `ocean`
* `carbon`

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion`. To add any other theme to your chart, include its corresponding JavaScript file to your project.