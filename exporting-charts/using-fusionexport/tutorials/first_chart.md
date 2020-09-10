---
title: Exporting your first chart | FusionCharts
description: This article shows you how to export your first chart.
heading: Exporting your first chart
---

# Welcome to FusionExport

First of all, thank you very much for downloading FusionExport. FusionExport was developed to help our customers to generate charts on servers. Since the inception, we have improved FusionExport to not only help you export charts but also dashboards.

Now that you have downloaded FusionExport, let's get started!

## Prerequisites

Before starting with the code, ensure that you have:

* [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running
* [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)


## Installation of FusionExport server

Go to the location of the`fusionexport` binary in the downloaded package. To start the server run the following command:

```bash
$ ./fusionexport
```

Once you execute the command the FusionExport server starts on port 1337. You should see a console log similar to the following:

_In case you face any issues while starting the server, get in touch with our support team support@fusioncharts.com to resolve the issue._


## Create a sample project

Now that our server is running, let's create a sample project in Node.js.

First, create an empty directory for your project. You can create your project directory in any location:

```bash
$ mkdir fusionexport-hello-world
$ cd fusionexport-hello-world
```

Next, let's initialize Node.js project in this directory:

```bash
$ npm init
```

For this tutorial use `fusionexport-hello-world` as a name when prompted for package information. You can keep other information blank or enter your own project details.

## Install FusionExport Node.js client

Now that we have set up the project skeleton, to install FusionExport Node.js client run the following command:

```bash
$ npm install fusionexport-node --save
```

**Important Note:** Please ensure that you are using Node.js v8.0.0+ and NPM v5.0.0+

## Import dependencies

Let's create an empty file called `first_export.js` and instantiate `ExportManager` and `ExportConfig` modules from FusionExport. These modules help us perform export related operations and set configurations respectively. You can read more about it on the [API reference](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/sdk-api-reference/nodejs).

```JavaScript
 // Import FusionExport
 const { ExportManager, ExportConfig } = require('fusionexport-node-client');

 // Instantiate ExportManager and ExportConfig
 const exportManager = new ExportManager();
 const exportConfig = new ExportConfig();
```

Now that you imported FusionExport in your project, let's add a simple chart configuration for exporting. By default, FusionExport  accepts FusionCharts configurations to render charts (however, it supports almost all the third party JavaScript charting libraries as well). For this example we will export [a simple column chart](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript):

```JavaScript
// Import FusionExport
const { ExportManager, ExportConfig } = require('fusionexport-node');

// Instantiate ExportManager and ExportConfig
const exportManager = new ExportManager();
const exportConfig = new ExportConfig();

// Define a simple column 2d chart
const chartConfig = [{
  type: "column2d",
  renderAt: "chart-container",
  width: 550,
  height: 350,
  dataSource: {
    chart: {
      caption: "Number of visitors last week",
      theme: "fusion",
      subCaption: "Bakersfield Central vs Los Angeles Topanga"
    },
    data: [
{ label: "Mon", value: 15123 },
      { label: "Tue", value: 14233 },
      { label: "Wed", value: 25507 }
    ]
  }
}];

// Assign it to exportConfig object
exportConfig.set('chartConfig', chartConfig);
```

As you can see above, we defined a simple chart and assigned it `exportConfig` against `chartConfig` property. There are many properties which you can define in `exportConfig`. You can get the full list on the [API reference documentation](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/sdk-api-reference/nodejs#exportconfig-options).  

In case if you are curious about FusionCharts and various charts configurations, go through the [chart attributes documentation](https://www.fusioncharts.com/dev/chart-attributes/) on Dev Center.

## Let's export!

It is to time export our chart. First, let's define `type` to PDF (default type is `PNG`) and export the chart:

```JavaScript
// Import FusionExport
const { ExportManager, ExportConfig } = require('fusionexport-node');

// Instantiate ExportManager and ExportConfig
const exportManager = new ExportManager();
const exportConfig = new ExportConfig();

// Define a simple column 2d chart
const chartConfg = [{
  type: "column2d",
  renderAt: "chart-container",
  width: 550,
  height: 350,
  dataSource: {
    chart: {
      caption: "Number of visitors last 3 days",
      theme: "fusion",
      subCaption: "Bakersfield Central vs Los Angeles Topanga"
    },
    data: [
	{ label: "Mon", value: 15123 },
	{ label: "Tue", value: 14233 },
	{ label: "Wed", value: 25507 }
    ]
  }
}];

// Assign it to exportConfig object
exportConfig.set('chartConfig', chartConfig);

// Set the export file to pdf
exportConfig.set('type', 'pdf');

// Let's export
exportManager.export(exportConfig, '.', true).then((exportedFiles) => {
  exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
  console.log(err);
});
```
By calling `export` method you start the export against the chart you defined in `exportConfig`. The `export` method returns a `promise` which will give you an array of the exported file path. In this case,  only one export file is generated with the default name `export.pdf` in the same directory.

To export your chart run this command:
`$ node first_export.js `

Once you have exported, your exported file should look like this:



In case if you have any feedback or if you are stuck anywhere, reach out to product@fusioncharts.com.
