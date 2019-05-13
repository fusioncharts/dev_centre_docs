---
title: Custom Version of FusionCharts in FusionExport | FusionCharts
description: This article talks about how to update the custom version of FusionCharts in FusionExport.
heading: Custom Version of FusionCharts in FusionExport
---

You can override the default package version of FusionCharts in FusionExport with your current version.

## Prerequisites

Before you start, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

3. [Export a Dashboard](/exporting-charts/using-fusionexport/installation/export-a-dashboard)

4. To override the FusionCharts version, your version should have:
   - `fusioncharts.js` and all the other files like `fusioncharts.widgets.js`, `fusioncharts.timeseries.js`, fusioncharts.charts.js, etc.
   - `Map` files
   - And `themes` in their respective directory.

To override the default package version, follow the steps below:

- Copy all the files in the `js` folder of your licensed distribution.
- Place all the files present inside the `js` folder in folder named `fusioncharts` beside your `fusionexport` file.
- Pass your custom FusionCharts directory to the `-L` options of FusionExport.

Refer to the path shown below:

```bash
./fusionexport -L path/to/fusioncharts/
```
