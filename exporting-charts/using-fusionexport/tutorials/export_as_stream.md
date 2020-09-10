---
title: Exporting as stream | FusionCharts
description: This article shows you how to export as stream.
heading: Export as stream
---

This tutorial shows you how to export a chart as a stream. It is advisable that you read [how to export your first chart](/dev/exporting-charts/using-fusionexport/tutorials/exporting-first-chart) before trying this tutorial.

## Prerequisites

Before starting with the code, ensure that you have:

* [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running
* [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)


# Running FusionExport server

To start the server run the following command:

```bash
$ ./fusionexport
```
FusionExport server should start on port 1337.


## Create a sample project

Once the server is running create a sample project in Node.js.
1. Create an empty directory for your project. For this tutorial create a directory named "export-as-stream":
```bash
$ mkdir export-as-stream
```

2. Change to the newly created directory.
```bash
$ cd export-as-stream
```

3. Initialize Node.js project in this directory:
```bash
$ npm init
```

When prompted for a project name use `export-as-stream`. You can keep other information blank or enter your own project details.

## Install FusionExport Node.js client

Next, to install FusionExport Node.js client run the following command:

```bash
$ npm install fusionexport-node-client --save
```

**Important Note:** Please ensure that you are using Node.js v8.0.0+ and NPM v5.0.0+

## Import dependencies

Let's create an empty file called `export_stream.js` and instantiate `ExportManager` and `ExportConfig` modules from FusionExport. These modules help us perform export related operations and set configurations respectively. You can read more about it on the [API reference](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/sdk-api-reference/nodejs).

```JavaScript
 // Import FusionExport
 const { ExportManager, ExportConfig } = require('fusionexport-node-client');

 // Instantiate ExportManager and ExportConfig
 const exportManager = new ExportManager();
 const exportConfig = new ExportConfig();
```

## Chart Configuration
By default, FusionExport  accepts FusionCharts configurations to render charts (however, it supports almost all the third party JavaScript charting libraries as well). For this example we will export [a simple column chart](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript):

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
exportConfig.set('quality', 'best');
```

After defining a simple chart we assigned it as the `chartConfig` property  for `exportConfig`. We can also set the export quality using the `quality` property. There are many properties which you can define in `exportConfig`. You can get the full list on the [API reference documentation](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/sdk-api-reference/nodejs#exportconfig-options).  

In case you are curious about FusionCharts and various charts configurations, go through the [chart attributes documentation](https://www.fusioncharts.com/dev/chart-attributes/) on Dev Center.


## Let's export!

It is to time export our chart. First, let's define `type` to PDF (default type is `PNG`) and export the chart:

```JavaScript
// provide the export config
exportManager.exportAsStream(exportConfig, '.', true).then((exportedFiles) => {
 Object.keys(exportedFiles).forEach((key) => {
    console.log(key, exportedFiles[key]);
  });
}).catch((err) => {
  console.log(err);
});
```
By calling the `exportAsStream` method you start the export against the chart you defined in `exportConfig`. The `exportAsStream` method returns...

The full code should look like this:

```JavaScript
// Require FusionExport
const { ExportManager, ExportConfig } = require('fusionexport-node-client');

// Instantiate ExportManager
const exportManager = new ExportManager();

// Instantiate ExportConfig and add the required configurations
const exportConfig = new ExportConfig();
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

exportConfig.set('chartConfig', chartConfig);
exportConfig.set('quality', 'best');

// provide the export config
exportManager.exportAsStream(exportConfig, '.', true).then((exportedFiles) => {
  Object.keys(exportedFiles).forEach((key) => {
    console.log(key, exportedFiles[key]);
  });
}).catch((err) => {
  console.log(err);
});
```

To export your chart run this command:
`$ node first_export.js `
