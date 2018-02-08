---
title: Install using PHP wrapper | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts server-side PHP wrapper that lets you create interactive, data-driven charts.
heading: PHP
---
## Set up FusionCharts Suite XT on web server

* Create a folder named `fusioncharts` in the document root of your web application. You can name the folder differently, and place it within another folder as well instead of root. However, copying it to the root of your application allows all the pages in your application to easily access the library from anywhere.

* In the download package, locate the `js` folder. Copy all the JavaScript files from this folder and paste it in the `fusioncharts` folder, which you created earlier.

And that's it. The installation is complete and you can start building charts using FusionCharts XT in your web applications.

FusionCharts Suite XT includes the FusionCharts PHP wrapper that lets you create interactive, data-driven charts in your PHP website without writing any JavaScript code.

JavaScript and HTML code is used to generate charts in the browsers. The server-side PHP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts.

## Download

FusionCharts PHP Wrapper can be downloaded from [here](https://www.fusioncharts.com/php-charts/).

## Install

To work with FusionCharts PHP wrapper, follow the steps given below:

* Once you are done with the downloading of the wrapper, unzip the archive and move to `wrappers 2/php-wrapper/` to get the main class file `fusioncharts.php`.

* Include `fusioncharts.php` in your project.

* Start using the methods and classes available under the fusioncharts.charts namespace to generate charts in your project.

> FusionCharts JS libraries should already be installed within your project in order to work with this wrapper.

### Install FusionCharts JS libraries

There are two ways you can install FusionCharts JS library in your project:

* Using FusionCharts CDN

* Using library files placed in the folder of your project

**Using FusionCharts CDN**

Write a script tag in the section of the page where you want to add the source of the FusionCharts library link from the official CDN:

```
<script type="text/javascript" src="[http://static.fusioncharts.com/code/latest/fusioncharts.js](http://static.fusioncharts.com/code/latest/fusioncharts.js)"></script>

```
**Using library files placed in a folder of your project**

Write a script tag in the section of the page where you add the source of FusionCharts library link from local folder:

```
<script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>

```
Now, you are ready to prepare the chart using our PHP-wrapper.

## Related Resources

* How to render a chart using PHP?

* How to render a gauge using PHP?

* How to render a map using PHP?