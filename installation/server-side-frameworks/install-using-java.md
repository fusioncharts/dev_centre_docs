---
title: Install using JAVA | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts server-side JSP wrapper that lets you create interactive, data-driven charts.
heading: JAVA
breadcrumb: [["Home", "/"], ["Java"]]
---

FusionCharts Suite XT includes the FusionCharts JSP wrapper that lets you create interactive, data-driven charts without writing any JavaScript code.

JavaScript and HTML code is used to generate charts in the browsers. The server-side JSP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts.

## Download

FusionCharts JSP Wrapper can be downloaded from [here](https://www.fusioncharts.com/jsp-charts/).

## Install

To work with FusionCharts JSP wrapper, follow the steps given below:

* After downloading the wrapper, unzip the archive and move its contents to the `/jsp-wrapper-master/src/java/fusioncharts/` to get the `FusionCharts.java` main class file.

* Include `FusionCharts.java` in your project

* Start using the methods and classes available under the **FusionCharts** namespace to generate charts in your project.

> FusionCharts JS libraries should already be installed within your project to work with this wrapper.

### Install FusionCharts JS libraries

There are two ways you can install FusionCharts JS library in your project:

* Use FusionCharts CDN

* Use library files placed in the folder of your project

#### Use FusionCharts CDN

Write a script tag in the section of the page where you want to add the source of the FusionCharts library link from the official CDN:

```
<script type="text/javascript" src="https://static.fusioncharts.com/code/latest/fusioncharts.js"></script>
```

#### Use library files placed in a folder of your project

Next, write a script tag in the section of the page where you want to add the source of the FusionCharts library link from the local folder.

```
<script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
```

Now, you are ready to prepare the chart using our JSP-wrapper.

## Further Links

* [Your First Chart]({% site.baseurl %}/chart-guide/getting-started/building-your-first-chart "@@open-newtab") 
* [Your First Widget]({% site.baseurl %}/chart-guide/getting-started/building-your-first-widget "@@open-newtab") 
* [Your First Map]({% site.baseurl %}/chart-guide/getting-started/building-your-first-map "@@open-newtab")
* [Building Dashboards]({% site.baseurl %}/chart-guide/getting-started/building-dashboards "@@open-newtab")
* [List of Charts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts "@@open-newtab") 
* [List of Maps]({% site.baseurl %}/chart-guide/getting-started/list-of-maps "@@open-newtab") 