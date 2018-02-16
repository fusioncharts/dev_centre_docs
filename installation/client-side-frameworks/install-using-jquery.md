---
title: Install using jQuery| FusionCharts
description: FusionCharts Suite XT is a JavaScript library that runs on your desktop/mobile web browsers. This article talks about steps to install using jQuery
heading: jQuery
breadcrumb: [["Home", "/"], ["jQuery"]]
---

The FusionCharts Suite XT jQuery helper allows you to use jQuery syntax to render and manipulate your charts and graphs seamlessly across all browsers and devices.

It helps you add interactive JavaScript charts to your web and mobile applications, combining the delight and comprehensiveness of the FusionCharts Suite XT with the easy-to-use jQuery syntax.

You can download the jQuery-FusionCharts component from [here](https://www.fusioncharts.com/jquery-charts/).

## Set up FusionCharts jQuery Helper

To set up FusionCharts jQuery helper, follow the steps given below:

* Include `jquery.min.js` to enable jQuery in your project:

```html
<script type="text/javascript" src="jquery.min.js"></script>
```

> Import jQuery before including the FusionCharts jQuery helper the project. Note that to support IE 6/7/8, use jQuery 1.x versions.

* Copy `fusioncharts.js` and `fusioncharts.jqueryplugin.js` from the **FusionCharts Download Package > js** folder in your project.

* Add references to the required JavaScript files:

```html
<script type="text/javascript" src="fusioncharts.js"></script>
<script type="text/javascript" src="fusioncharts-jquery-plugin.js"></script>
```

On top of all the existing features, the jQuery helper lets you do the following:

* Render jQuery charts that work across PCs (including IE6/7/8), Macs, iPads, iPhones, and Android devices seamlessly

* Update chart type, data, and individual cosmetic properties at run-time

* Insert, prepend, and append multiple charts in an existing chart container

* Customize the look and feel of all elements on the chart

* Plot charts from data contained in HTML tables

## Install via NPM

The easiest way to use `jquery-fusioncharts` plugin is to install it from npm and include it in your build process (using [Browserify](http://browserify.org/), [Webpack](http://webpack.github.io/) etc). Refer to the code below:

```
npm install jquery-fusioncharts --save
```

## Set up the FusionCharts jQuery plugin

To set up the FusionCharts jQuery plugin, follow the steps given below:

* Include jQuery in your project:

```
var jQuery = require('jquery');
```

> Import jQuery before including the FusionCharts jQuery helper the project. Note that to support IE 6/7/8, use jQuery 1.x versions.

```
var jQuery = require('jquery');
var FusionCharts = require('jquery-fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
```

The above steps complete the setup, and you are now ready to begin using the FusionCharts jQuery plugin.

## Further Links

* [Your First Chart]({% site.baseurl %}/chart-guide/getting-started/building-your-first-chart "@@open-newtab") 
* [Your First Widget]({% site.baseurl %}/chart-guide/getting-started/building-your-first-widget "@@open-newtab") 
* [Your First Map]({% site.baseurl %}/chart-guide/getting-started/building-your-first-map "@@open-newtab")
* [Building Dashboards]({% site.baseurl %}/chart-guide/getting-started/building-dashboards "@@open-newtab")
* [List of Charts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts "@@open-newtab") 
* [List of Maps]({% site.baseurl %}/chart-guide/getting-started/list-of-maps "@@open-newtab") 