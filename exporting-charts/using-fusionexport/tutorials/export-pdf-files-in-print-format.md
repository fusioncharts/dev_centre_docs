---
title: Export PDF files in Print Format | FusionCharts
description: This article talks about how to export PDF files in print format.
heading: Export PDF files in Print Format
---

FusionExport allows you to export your PDFs in a print-friendly format.

Before you start, check out the video given below which guides you how to export PDF files in print format.

<div style="position: relative; padding-bottom: 62.5%; height: 0;">
    <iframe src="https://www.loom.com/share/e9ff3172776345659455b6ef7eb240d3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

Now, let’s check the steps to export PDF files in print format.

## Prerequisites

Before you start, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

3. [Export a Dashboard](/exporting-charts/using-fusionexport/installation/export-a-dashboard)

Using `templateFormat` (which only accepts letters) you can export your PDF files in Print-friendly format. `templateFormat`
is a parameter which accepts the PDF format when you export charts.

Setting the `templateFormat` for a particular PDF page sets the priority over `templateWidth` and `templateHeight` of the exported file.

The list of template formats and their default height and width is given below:

| Format    | Width (inches) | Height (inches) |
| --------- | -------------- | --------------- |
| `Letter`  | 8.5            | 11              |
| `Legal`   | 8.5            | 14              |
| `Tabloid` | 11             | 17              |
| `Ledger`  | 17             | 11              |
| `A0`      | 33.1           | 46.8            |
| `A1`      | 23.4           | 33.1            |
| `A2`      | 16.5           | 23.4            |
| `A3`      | 11.7           | 16.5            |
| `A4`      | 8.27           | 11.7            |
| `A5`      | 5.83           | 8.27            |

The sample code to export PDF files in print format is given below:

```csharp
// Exporting a dashboard
const path = require('path');
// Require FusionExport
const { ExportManager, ExportConfig } = require('fusionexport-node-client');
// Instantiate ExportManager
const exportManager = new ExportManager();
// Instantiate ExportConfig and add the required configurations
const exportConfig = new ExportConfig();
exportConfig.set('chartConfig', path.join(__dirname, 'resources', 'multiple.json'));
exportConfig.set('templateFilePath', path.join(__dirname, 'resources', 'template.html'));
exportConfig.set('templateFormat', 'letter');
exportConfig.set('type', 'pdf');
// provide the export config
exportManager.export(exportConfig, '.', true).then((exportedFiles) => {
  exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
  console.log(err);
});
```

In the above code:

- Firstly, export a dashboard for which you want to customize the height and width of the image.
- Import and resolve the dependencies as per the system/programming language specific dependencies, and the FusionExport SDK client.
- Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its set() method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method.
- Set the `type` to `pdf`.
- Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`. This will export the chart, and save the output file to the path you provide (by default, it is the directory from which the code is being executed).
- Optionally, you can print the names of the exported files on the console, and the error messages if anything goes wrong.

Click [here](https://github.com/fusioncharts/fusionexport-tutorials/blob/master/dimensions/chart_configs.json) to get the JSON data.

The HTML template for the above code is given below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Wealth Management</title>
    <link
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600"
      rel="stylesheet"
      type="text/css"
    />
    <style>
      body {
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        background-color: #f8f9fd;
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
        height: 600px;
      }
      .sec-chart {
        width: auto;
        height: 400px;
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
          <p class="mt-0">
            Your amazing subtitle
          </p>
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
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-reg-monthly"></div>
          </div>
        </div>
        <div class="chart">
          <div class="chart-block">
            <div class="sec-chart" id="chart-container-product"></div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

The output of the above template looks like as shown below:

![Output](/images/fusionexport-output.png)

Click [here](https://github.com/fusioncharts/fusionexport-tutorials/tree/master/dimensions) to download the above project.
