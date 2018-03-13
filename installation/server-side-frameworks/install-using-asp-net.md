---
title: Install using ASP.NET | FusionCharts
description: FusionCharts Suite XT includes the FusionCharts server-side ASP.NET wrapper that lets you create interactive, data-driven charts.
heading: ASP.NET
breadcrumb: [["Home", "/"], ["ASP.NET"]]
---

FusionCharts Suite XT includes the FusionCharts server-side ASP.NET wrapper that lets you create interactive, data-driven charts. FusionCharts uses JavaScript and HTML code to generate charts in the browser. Using the ASP.NET wrapper, you can create charts in your ASP.NET website without writing any JavaScript code. The required JavaScript and HTML code is generated as a string in the server and inserted in the web page for generating charts.

> The FusionCharts ASP.NET server-side wrapper requires a .NET Framework 3.5 or higher.

> Before you begin, make sure that you have copied the **[FusionCharts.dll](https://github.com/fusioncharts/asp-net-wrapper/tree/master/DLLFile)** file in the **Bin** folder of your application.

## Download

FusionCharts ASP.NET (C# & VB.NET) Wrapper can be downloaded from [here](https://www.fusioncharts.com/asp-net-charts/).

## Install

To work with FusionCharts ASP.NET wrapper, follow the steps given below:

* After downloading of the wrapper, unzip the archive and move to `asp-net-wrapper/Src/` to get the main class file `FusionCharts.cs`.

* To add the file inside your project right-click the project name from **Solution Explorer** and select **Add->Existing item**. Don't forget to select the file type as code files from the file explorer window that appears. Select the `FusionCharts.cs` file from the explorer and click **add**.

> FusionCharts JS libraries should already be installed within your project to work with this wrapper.

### Install FusionCharts JS libraries

There are two ways you can install FusionCharts JS library in your project

* Use FusionCharts CDN

* Use library files placed in the folder of your project

#### Use FusionCharts CDN

Write a script tag in the section of the page where you want to add the source of the FusionCharts library link from the official CDN:

```html
<script type="text/javascript" src="http://static.fusioncharts.com/code/latest/fusioncharts.js"></script>

```

#### Use library files placed in a folder of your project

Next, write a script tag in the section of the page where you add the src of FusionCharts library link from local folder

```html
<script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>

```

Now, you are ready to prepare the chart using our ASP.NET wrapper.

## Further Links

* [Your First Chart]({% site.baseurl %}/chart-guide/getting-started/building-your-first-chart "@@open-newtab") 
* [Your First Widget]({% site.baseurl %}/chart-guide/getting-started/building-your-first-widget "@@open-newtab") 
* [Your First Map]({% site.baseurl %}/chart-guide/getting-started/building-your-first-map "@@open-newtab")
* [Building Dashboards]({% site.baseurl %}/chart-guide/getting-started/building-dashboards "@@open-newtab")
* [List of Charts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts "@@open-newtab") 
* [List of Maps]({% site.baseurl %}/chart-guide/getting-started/list-of-maps "@@open-newtab") 