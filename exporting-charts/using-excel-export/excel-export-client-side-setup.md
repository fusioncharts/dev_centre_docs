---
permalink: exporting-charts/using-excelexport/excel-export-client-side-setup.html
title: Client side set-up | FusionCharts
description: This page talks about setting up the client side excel export feature.
heading: Client side set-up
chartPresent: False
---

To set up FusionCharts Excel export on the client side, follow the steps given below: 

* Include the FusionCharts.js (version 3.12.3-beta.1) in your HTML file using: https://s3.amazonaws.com/fusionimplementation/fusioncharts-3.12.3-beta.1/fusioncharts.js

* You can also include the file using NPM by running the following command:

```
npm install https://s3.amazonaws.com/fusionimplementation/fusioncharts_lib/fusioncharts-3.12.3-beta.1.tgz 
```

* To show the **Export As Excel** menu option, set the following fields in the chart config:

    * `exportEnabled: "1"`

    * `exportMode: "server"`

    * `exportExcelHandler: "<YOUR-ASP-SERVER-URL>"` (give the URL as specified during server setup)

> If  `exportExcelHandler` is not specified, all requests will be served from FusionCharts Excel export server.