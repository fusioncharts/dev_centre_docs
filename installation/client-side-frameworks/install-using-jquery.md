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

jQuery needs to be imported before the FusionCharts jQuery helper is included in the project. Note that in order to support IE 6/7/8, jQuery 1.x versions should be used.

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

The easiest way to use `jquery-fusioncharts` plugin is to install it from npm and include it in your own build process (using [Browserify](http://browserify.org/), [Webpack](http://webpack.github.io/) etc). Refer to the code below:

```
npm install jquery-fusioncharts --save
```

## Set up the FusionCharts jQuery plugin

To set up the FusionCharts jQuery plugin, follow the steps given below:

* Include jQuery in your project:

```
var jQuery = require('jquery');
```

> jQuery needs to be imported before the FusionCharts jQuery plugin is included in the project. Note that in order to support IE 6/7/8, jQuery 1.x versions should be used.

```
var jQuery = require('jquery');

var FusionCharts = require('jquery-fusioncharts');

var Charts = require('fusioncharts/fusioncharts.charts');
```

This completes the setup and you are now ready to begin using the FusionCharts jQuery plugin.