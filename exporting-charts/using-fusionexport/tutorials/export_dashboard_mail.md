---
title: Exporting Dashboards in mail body | FusionCharts
description: This article shows you how to export as stream.
heading: Export a dashboard in the body of an email
---

This tutorial shows you how to export a dashboard in the body of an email. It is advisable that you read [how to export your first chart](/dev/exporting-charts/using-fusionexport/tutorials/exporting-first-chart) before trying this tutorial.

## Prerequisites

Before starting with the code, ensure that you have:

* [Installed the nodemailer package](https://nodemailer.com)
* [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running
* [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

> **Note:**  You need to provide SMTP details for this tutorial. If this is something new for you, try using https://mailtrap.io for quickly getting started.
> If you are using Gmail, read the setup instructions here - https://nodemailer.com/usage/using-gmail

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
$ mkdir dashboard-in-mail
```

2. Change to the newly created directory.
```bash
$ cd dashboard-in-mail
```

3. Initialize Node.js project in this directory:
```bash
$ npm init
```
When prompted for a project name use `dashboard-in-mail`. You can keep other information blank or enter your own project details.

## Install FusionExport Node.js client

Next, to install FusionExport Node.js client run the following command:

```bash
$ npm install fusionexport-node-client --save
```

**Important Note:** Please ensure that you are using Node.js v8.0.0+ and NPM v5.0.0+

## Adding resources
 In your project root folder create a "resources" directory, inside this directory place a `template.html` with the following content:

```
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Wealth Management</title>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet" type="text/css">
      <style>
         body {
         font-family: 'Source Sans Pro', sans-serif;
         margin: 0;
         background-color: #f8f9fd;
         width: 800px;
         }
         .dashboard-container {
         box-sizing: border-box;
         padding-left: 8px;
         padding-right: 8px;
         background-color: #f8f9fd;
         padding: 30px;
         }
         .dashboard-container .dashboard-row {
         margin-left: -8px;
         margin-right: -8px;
         }
         .dashboard-container .dashboard-row:after {
         content: "";
         display: table;
         clear: both;
         }
         .dashboard-container .dashboard-row .intro-block,
         .dashboard-container .dashboard-row .chart {
         box-sizing: border-box;
         padding: 8px 8px;
         }
         .dashboard-container .dashboard-row .intro-block h1 {
         margin-bottom: 10px;
         }
         .dashboard-container .dashboard-row .chart {
         width: 50%;
         float: left;
         }
         .dashboard-container .dashboard-row .chart:first-child {
         box-sizing: border-box;
         float: initial;
         width: 100%;
         }
         .dashboard-container .dashboard-row .chart .chart-block {
         background-color: #fff;
         border: 1px solid #f0f1f7;
         border-radius: 4px;
         padding: 10px;
         box-shadow: 0 2px 10px 0 rgba(33, 35, 68, 0.05) !important;
         }
         .pri-chart {
         width: auto;
         height: 300px;
         }
         .sec-chart {
         width: auto;
         height: 350px;
         }
         .dashboard-container .mt-0 {
         margin-top: 0;
         }
         .dashboard-container hr {
         border: none;
         border-top: 1px dotted rgba(49, 49, 49, 0.09);
         margin: 25px 0 15px;
         }
      </style>
   </head>
   <body>
      <div class="dashboard-container">
         <div class="dashboard-row">
            <div class="intro-block">
               <h1>Your dashboard header</h1>
               <p class="mt-0">Your amazing subtitle</p>
               <hr />
            </div>
         </div>
         <div class="dashboard-row">
            <div class="chart">
               <div class="chart-block">
                  <div class="pri-chart" id="chart-container-map"></div>
               </div>
            </div>
            <div class="chart">
               <div class="chart-block">
                  <div class="sec-chart" id="chart-container-top-adv"></div>
               </div>
            </div>
            <div class="chart">
               <div class="chart-block">
                  <div class="sec-chart" id="chart-container-reg"></div>
               </div>
            </div>
         </div>
      </div>
   </body>
</html>
```
This is our dashboard template, for more information refer to [Dashboard Template and Chart Configuration](/dev/exporting-charts/using-fusionexport/tutorials/export-a-dashboard#dashboard-template-and-chart-configuration).


## Import dependencies

In you project folder create an empty file called `export_stream.js`, load the `path` and `nodemailer` modules and instantiate `ExportManager` and `ExportConfig` modules from FusionExport. These modules help us perform export related operations and set configurations respectively. You can read more about it on the [API reference](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/sdk-api-reference/nodejs).

```JavaScript
// load path and nodemail modules
const nodemailer = require('nodemailer');
const path = require('path');

 // Import FusionExport
  const { ExportManager, ExportConfig } = require('fusionexport-node-client');

   // Instantiate ExportManager and ExportConfig
 const exportManager = new ExportManager();
 const exportConfig = new ExportConfig();
```

## Configuring nodemailer

Next provide your SMPT settings. For testing purposes you can use https://mailtrap.io.

```JavaScript
const transporter = nodemailer.createTransport({
  host: '<SMPT HOST>',
  auth: {
    user: "<USER>",
    pass: "<PASSWORD>",
  },
});
```

## Chart Configuration
For this example we will export [a simple column chart](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript):

```JavaScript
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
```

## Configuring export

After defining a simple chart assign it as the `chartConfig` property  for `exportConfig`. Next, set the path for the template, finally set the export type to `png`. There are many properties which you can define in `exportConfig`. You can get the full list on the [API reference documentation](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/sdk-api-reference/nodejs#exportconfig-options).

In case you are curious about FusionCharts and various charts configurations, go through the [chart attributes documentation](https://www.fusioncharts.com/dev/chart-attributes/) on Dev Center.

```JavaScript
// set the exportConfig object
exportConfig.set('chartConfig', chartConfig);
exportConfig.set('templateFilePath', path.join(__dirname, 'resources', 'template.html'));
exportConfig.set('type', 'png');
```

## Let's export!

It is to time export your chart. First, let's define `type` to PDF (default type is `PNG`) and export the chart:

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
