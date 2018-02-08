---
title: Install using JAVA | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts server-side JSP wrapper that lets you create interactive, data-driven charts.
heading: JAVA
---

FusionCharts Suite XT includes the FusionCharts JSP wrapper that lets you create interactive, data-driven charts without writing any JavaScript code.

JavaScript and HTML code is used to generate charts in the browsers. The server-side JSP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts.

## Download

FusionCharts JSP Wrapper can be downloaded from [here](https://www.fusioncharts.com/jsp-charts/).

## Install

To work with FusionCharts JSP wrapper, follow the steps given below:

* Once you are done with the downloading of the wrapper, unzip the archive and move its contents to the `/jsp-wrapper-master/src/java/fusioncharts/` to get the `FusionCharts.java` main class file.

* Include `FusionCharts.java` in your project

* Start using the methods and classes available under the **FusionCharts** namespace to generate charts in your project.

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

Next, write a script tag in the section of the page where you want to add the source of the FusionCharts library link from the local folder.

```
<script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>

```
Now, you are ready to prepare the chart using our JSP-wrapper.

## Related Resources

* How to render a chart using Java?

* How to render a gauge using Java?

* How to render a map using Java?