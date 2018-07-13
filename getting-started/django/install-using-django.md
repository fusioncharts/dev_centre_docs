---
permalink: getting-started/django/install-using-django.html
title: Installation | FusionCharts
description: The FusionCharts Django wrapper is a Python framework which is responsible for quick web development.
heading: Installation
chartPresent: false
---

The FusionCharts Django wrapper is a Python framework which is responsible for quick web development. It is basically a subroutine within a software library whose job is to call another subroutine with minimum amount of coding. It lets you generate the required JavaScript and HTML code as a string on the server, which is then used to render charts on a browser page.

In this article, we will show you how you can download and install the `FusionCharts Django` wrapper and all the other dependencies on your system.

> The FusionCharts Django wrapper requires Python 2.7 or higher version.

## Install the FusionCharts Django Wrapper

In order to install and start working with FusionCharts Django wrapper you need to:

* Include the `FusionCharts.py` (present in the [django-wrapper](https:/github.com/fusioncharts/django-wrapper/blob/master/fusioncharts/fusioncharts.py '@@open-newtab') repository) file into your project. Once done, you can start rendering the charts using the classes and methods under the FusionCharts namespace.

* To download the FusionCharts library using files placed in the folder of your project, you need to:

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

* Place the FusionCharts library inside the **"static/FusionCharts"** folder in your project.
* Insert the ``<script>`` tag where you want to include the source of the FusionCharts library link from the specific local folder in the project. The ``<script>`` tag looks like as shown below:

```html
{% load static %} 
<script type="text/javascript" src="{% static "fusioncharts/fusioncharts.js" %}"></script>
```

* Set your STATIC_ROOT path and run the command given below to update the static files:

```
python manage.py collectstatic
```

That completes the installation of FusionCharts in your application. To see how to create a chart, [click here]({% site.baseurl %}/getting-started/django/your-first-chart-using-django '@@open-newtab').

## Installing FusionMaps (map visualizations) for your project

### Step 1

In order to render maps, you need to [download](https://www.fusioncharts.com/download/maps/definition/) the map definition files.

> If you're an existing user of FusionMaps (v3.12.2 or older), you'll need to upgrade the map definition files with the latest files. Read more on this here.

### Step 2

* Place the FusionCharts library inside the **"static/FusionCharts"** folder in your project.
* Insert the ``<script>`` tag where you want to include the source of the FusionCharts library link from the specific local folder in the project. The ``<script>`` tag looks like as shown below:

```html
{% load static %} 
<script type="text/javascript" src="{% static "fusioncharts/fusioncharts.js" %}"></script>
```

* Set your STATIC_ROOT path and run the command given below to update the static files:

```
python manage.py collectserver
```

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

> The `fusioncharts.theme.fusion.js` and `fusioncharts.theme.fusion.css` file sets the theme as **fusion**. To add any other theme to your chart, include its corresponding JavaScript file to your project.