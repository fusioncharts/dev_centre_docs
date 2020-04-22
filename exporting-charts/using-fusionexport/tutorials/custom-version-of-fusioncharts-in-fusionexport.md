---
title: Use custom version of FusionCharts in FusionExport | FusionCharts
description: This article talks about how to update the custom version of FusionCharts in FusionExport.
heading: Use custom version of FusionCharts in FusionExport
---

By default, whenever you download FusionExport it uses the latest version of FusionCharts. However, you might be using an older version of FusionCharts, for example - 3.11. FusionExport allows you to override the default FusionCharts version with the version you are using.

Before you start with the code implementations, check out the following video which contains the step by step process.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/e9239f4b436f4109bb47207b95a90a81" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Now let's follow the steps to override the default version.

## Prerequisites

Before you start, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

3. [Export a Dashboard](/exporting-charts/using-fusionexport/installation/export-a-dashboard)

## Override the default version

To override the FusionCharts version, your version should have:
   - `fusioncharts.js` and all the other files like `fusioncharts.widgets.js`, `fusioncharts.timeseries.js`, `fusioncharts.charts.js`, etc.
   - `Map` files
   - And `themes` in their respective directory.

Now, follow the steps to override the default package version of FusionCharts:

- Copy all the files in the `js` folder of your licensed distribution.
- Place all the files present inside the `js` folder in a folder named `fusioncharts` beside your `fusionexport` file.
- Pass your custom FusionCharts directory to the `-L` options of FusionExport.

To run `FusionExport` with your version of `FusionCharts` run:

```bash
./fusionexport -L path/to/fusioncharts/
```

## Related Resources

After you've learnt how to use the custom version of FusionCharts, we recommend to learn how to:

* [Disable Watermark](/exporting-charts/using-fusionexport/tutorials/disable-watermark-in-fusionexport)

* [Customize the Width and Height of an Exported Chart](/exporting-charts/using-fusionexport/tutorials/customize-the-width-and-height-of-an-exported-chart)

* [Override a Chart Config](/exporting-charts/using-fusionexport/tutorials/override-the-chart-config)
