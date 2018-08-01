---
title: Installation | FusionCharts
description: The FusionCharts Django wrapper is a Python framework which is responsible for quick web development.
heading: Installation
chartPresent: false
---

FusionCharts Suite XT includes the **FusionCharts server-side Django wrapper** that lets you create interactive, data-driven charts. FusionCharts uses JavaScript and HTML code to generate charts in the browser. Using the wrapper, you can create charts in your browsers without writing any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in the web page for generating charts.

In this article, we will show you how you can download and install the **FusionCharts Django** wrapper and all the other dependencies on your system.

> The **FusionCharts Django** wrapper requires Python 2.7 or higher version.

## Install the FusionCharts Django Wrapper

In order to install and start working with Django-FusionCharts you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to apply themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> You need to copy all the files/folders from `fusioncharts-suite-xt > js` folder to the STATIC folder of your application.

* The download package also contains **fusioncharts.py** file under `fusioncharts-suite-xt > integrations > django > fusioncharts-wrapper` folder. The folder structure is shown below:

![Django Js Folder]({% site.baseurl %}/gif/django-folder-structure.gif)

> The `django` folder in the FusionCharts Suite XT package is available from v3.13.0.

> You need to copy the `fusioncharts.py` file from `fusioncharts-suite-xt > integrations > django > fusioncharts-wrapper` to the `STATIC` folder in your project's folder.

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

After that, you can include the FusionCharts JavaScript library in your web applications and start building your charts, gauges, and maps. Configure your `STATIC_ROOT` path and follow the steps given below:

**Step 1:** Assuming that you have already configured your `STATIC_ROOT` path, place the FusionChart library inside the `static > FusionCharts` folder in your project.

**Step 2 (optional):** Include the theme files in the `static > FusionCharts` folder in your project.

This step is optional, the chart will render with the default theme (`fusion`) even if the theme is not applied.

Add the following code to `templates > index.html` file:

```HTML
{% load static %}
<script type="text/javascript" src="{% static "path/to/local/fusioncharts.js" %}"></script>
<script type="text/javascript" src="{% static "path/to/local/themes/fusioncharts.theme.fusion.js" %}"></script>
```

This completes the installation of FusionCharts in your application. To see how to create a chart, click [here]({% site.baseurl %}/getting-started/django/your-first-chart-using-django '@@open-newtab').

## Installing FusionMaps for your project

FusionCharts Suite XT provides **1400+** data-driven maps as a part of the product FusionMaps. 
To reduce the size of the download package, we have included the `fusioncharts.maps.js` file and only two map definition files - the **World Map**, and the **map of USA**. However, you can [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the rest the of map definition files, when you need to plot maps of those countries/regions. 

> If you are using version v3.12.2 or older, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the latest version and replace for upgrading to the latest map definition files.

To render a map, you need to:

* Include the `fusioncharts.js` file (core FusionCharts library) `templates > index.html`.
* Include the `fusionmaps.js` file to the `templates > index.html` file.
* Include the `fusioncharts.world.js` file to the `templates > index.html` file.

Refer to the code below:

```html
{% load static %} 
<script type="text/javascript" src="{% static "fusioncharts/fusioncharts.js" %}"></script>
<script type="text/javascript" src="{% static "fusioncharts/fusionmaps.js" %}"></script>
<script type="text/javascript" src="{% static "fusioncharts/maps/fusioncharts.world.js" %}"></script>
```

In the above example, we’ve included the World Map, whose map definition (path) is contained in `maps/fusioncharts.world.js`.

**Load other Map Definition files**

To use any other map (except world and USA) from the 1400+ maps, [download](https://www.fusioncharts.com/download/maps/definition/ '@@open-newtab') the map definition files, then copy those map files to your current `maps` folder. The map definition files are named in the format `fusioncharts.[MAP_ALIAS].js`, where MAP_ALIAS represents the country, state or region name.

Insert the `<script>` tag in `templates > index.html` file to include the map defination file. The `<script>` tag is shown below:

```HTMl
<script type="text/javascript" src="path/to/local/maps/fusioncharts.[MAP_ALIAS].js"></script>
```

Therefore, assuming that you need to render the map of California, the alias name **california** replaces **MAP_ALIAS** in the format as shown below:

```
<script type="text/javascript" src="path/to/local/maps/fusioncharts.california.js"></script>
```

Click [here]({% site.baseurl %}/chart-guide/getting-started/list-of-maps '@@open-newtab') to explore all the maps available in FusionMaps XT.

## Themes

[Themes]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab') shipped with FusionCharts Suite XT allow you to apply centralized themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all charts that use the theme)

The FusionCharts Suite download package also contains predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

Include the theme files in the `static > FusionCharts` folder in the `STATIC` folder of your project. 

Add the following code to the `templates > index.html` file:

```HTML
{% load static %}
<script type="text/javascript" src="{% static "path/to/local/fusioncharts.js" %}"></script>
<script type="text/javascript" src="{% static "path/to/local/themes/fusioncharts.theme.fusion.js" %}"></script>
```

> Including only the `fusioncharts.theme.fusion.js` file will not apply the theme. to apply the theme, set the value of `theme` attribute to the respective `theme` name. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').