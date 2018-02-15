---
title: Install using PHP wrapper | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts server-side PHP wrapper that lets you create interactive, data-driven charts.
heading: PHP
breadcrumb: [["Home", "/"], ["PHP"]]
---

FusionCharts Suite XT includes the FusionCharts PHP wrapper that lets you create interactive, data-driven charts in your PHP website without writing any JavaScript code.

JavaScript and HTML code is used to generate charts in the browsers. The server-side PHP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts.

## Download

FusionCharts PHP Wrapper can be downloaded from [here](https://www.fusioncharts.com/php-charts/).

## Install

To work with FusionCharts PHP wrapper, follow the steps given below:

* After downloading the wrapper, unzip the archive and move to `wrappers 2/php-wrapper/` to get the main class file `fusioncharts.php`.

* Include `fusioncharts.php` in your project.

* Start using the methods and classes available under the fusioncharts.charts namespace to generate charts in your project.

> FusionCharts JS libraries should already be installed within your project to work with this wrapper.

### Install FusionCharts JS libraries

There are two ways you can install FusionCharts JS library in your project:

* Use FusionCharts CDN

* Use library files placed in the folder of your project

#### Use FusionCharts CDN

Write a script tag in the section of the page where you want to add the source of the FusionCharts library link from the official CDN:

```
<script type="text/javascript" src="[http://static.fusioncharts.com/code/latest/fusioncharts.js](http://static.fusioncharts.com/code/latest/fusioncharts.js)"></script>
```

**Use library files placed in a folder of your project**

Write a script tag in the section of the page where you add the source of FusionCharts library link from local folder:

```
<script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
```
Now, you are ready to prepare the chart using our PHP-wrapper.