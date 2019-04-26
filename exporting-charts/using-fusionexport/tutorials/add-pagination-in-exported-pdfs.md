---
title: Add Pagination in exported PDFs | FusionCharts
description: This article talks how to add pagination in exported pdfs.
heading: Add Pagination in exported PDFs
---

FusionExport allows you to add page breaks the exported PDF files. To do this, you can:

- Firstly, export a dashboard for which you want to customize the height and width of the image.
- Import and resolve the dependencies as per the system/programming language specific dependencies, and the FusionExport SDK client.
- Create a new instance of the `ExportConfig()` object, which will be used to extract the chart configuration by using the chart configuration file path you pass to its `set()` method. You can also pass on an object containing the serialized JSON string representation of the configuration to the `set()` method.
- Set the value of `templateHeight` less than your content height. This automatically divides the page into multiple pages.
- You can also set the value of `templateWidth` to control the viewpoint width where the templates are rendered.
- Create a new instance of the `ExportManager()` object. To export the chart, pass the instance of `ExportConfig()` to `export()`, which is a method of the instance of `ExportManager()`. This will export the chart, and save the output file to the path you provide (by default, it is the directory from which the code is being executed).
- Optionally, you can print the names of the exported files on the console, and the error messages if anything goes wrong.

The sample code to set the dimension of the viewport is given below:

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
exportConfig.set('templateHeight', 900);
exportConfig.set('templateWidth', 900);
exportConfig.set('type', 'pdf');
// provide the export config
exportManager.export(exportConfig, '.', true).then((exportedFiles) => {
  exportedFiles.forEach(file => console.log(file));
}).catch((err) => {
  console.log(err);
});
```

You can also achieve the same result using `templateFormat` which allows you to export PDF files and print friendly format.

The code is given below:

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
