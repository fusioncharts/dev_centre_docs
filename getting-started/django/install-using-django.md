---
permalink: getting-started/django/install-using-django.html
title: Installation | FusionCharts
description: The FusionCharts Django wrapper is a Python framework which is responsible for quick web development.
heading: Installation
chartPresent: false
---

The **FusionCharts Django** server-side wrapper lets you create charts in your website without writing any JavaScript code.
Conventionally, FusionCharts Suite XT uses JavaScript and HTML to generate charts in the browser. The Django wrapper lets you generate the required JavaScript and HTML code as a string on the server. This string is then used to render charts on a browser page.

In this article, we will show you how you can download and install the **FusionCharts Django** wrapper and all the other dependencies on your system.

> The **FusionCharts Django** wrapper requires Python 2.7 or higher version.

## Install the FusionCharts Django Wrapper

In order to install and start working with Django-FusionCharts you need to [download](https://www.fusioncharts.com/download/) the FusionCharts Suite XT package which contains:

* JavaScript files to render **Charts**, **Widgets** and **PowerCharts** under the `js` folder.
* JavaScript files to render maps under `js > maps` folder.
* JavaScript files to include themes under `js > themes` folder.

The folder structure is shown below:

![Js Folder Structure]({% site.baseurl %}/gif/js-folder-structure.gif)

> It is recommended that you copy the files of the `js` folder from fusioncharts-suite-xt to your project folder.

* The download package also contains **manage.py** file under `fusioncharts-suite-xt > integrations > django` folder. This folder will also contain Django-FusionCharts native Export Handlers. The folder structure is shown below:

![Django Js Folder]({% site.baseurl %}/gif/django-folder-structure.gif)

> If you are using 3.12.2 or older versions, download v3.13.0 to get the `django` folder in the FusionCharts Suite XT package. 

> It is recommended that you copy the `django` folder from `fusioncharts-suite-xt > integrations > django` to your project's JavaScript folder.

Installation of FusionCharts Suite XT merely involves copying and pasting the JavaScript files from the downloaded package into your project folder. The folder structure is shown below:

Following is the list of JavaScript files present in your `fusioncharts-suite-xt/js` folder:

File Name|Description|
-|-
`fusioncharts.js`|This is the core FusionCharts library, which you need to import in all your pages where you want to generate a chart, gauge, or a map.|
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
`themes/*`|This folder contains pre-packaged themes that can be used by charts, gauges, and maps to style them through a central FusionCharts theme files. Refer each theme with their respective file names.|

Now, place the FusionCharts library inside the **"static/FusionCharts"** folder in your project.

Insert the ``<script>`` tag where you want to include the source of the FusionCharts library link from the specific local folder in the project. The ``<script>`` tag looks like as shown below:

```html
{% load static %} 
<script type="text/javascript" src="{% static "fusioncharts/fusioncharts.js" %}"></script>
```

* Set your STATIC_ROOT path and run the command given below to update the static files:

```
python manage.py collectstatic
```

This completes the installation of FusionCharts in your application. To see how to create a chart, [click here]({% site.baseurl %}/getting-started/django/your-first-chart-using-django '@@open-newtab').

## Installing FusionMaps (map visualizations) for your project

FusionCharts can provide more than 1000 maps that cater to all your map visualization requirements. But to keep the library lightweight, by default it ships only with two maps - the **world** map, and the **map of the USA**. To render rest of the maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files.

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this [here]({% site.baseurl %}/upgrading/change-log#improvements-2 '@@open-newtab').

**Once you have download the map definition files:**

* Place the FusionCharts library inside the **"static/FusionCharts"** folder in your project.
* Insert the ``<script>`` tag where you want to include the source of the FusionCharts library link from the specific local folder in the project. The ``<script>`` tag looks like as shown below:

```html
{% load static %} 
<script type="text/javascript" src="{% static "fusioncharts/fusionmaps.js" %}"></script>
```

* Set your STATIC_ROOT path and run the command given below to update the static files:

```
python manage.py collectserver
```

## Themes

Themes shipped with FusionCharts Suite XT allows you to create centralized theme files and apply those themes to any number of charts.

In a theme file, we can centralize the following aspects of all of your charts, gauges and maps:

* Visual appearance (data plot color, font color, font size, etc.)
* Behavior (hover effects for data plots)
* Intelligence (applying different colors to the positive and negative data plots in all column 2D charts that use the theme)

The FusionCharts Suite download package also contains the predefined theme files under `fusioncharts-suite-xt > js > themes` folder. The folder structure is shown below:

![Theme Folder Structure]({% site.baseurl %}/gif/theme-folder-structure.gif)

> Include the `fusioncharts.theme.fusion.js` file, if you want to set the value of `theme` attribute to `fusion` theme. To add any other theme to your chart, include its corresponding JavaScript file to your project and apply the theme using the `theme` attribute. For more details click [here]({% site.baseurl %}/themes/introduction-to-themes '@@open-newtab').