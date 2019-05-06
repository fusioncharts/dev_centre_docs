---
title: Disable Watermark | FusionCharts
description: This article tells how to disable watermarks while exporting the chart in fusionexport.
heading: Disable Watermark
---

In FusionExport, there are two types of watermark when you are exporting chart:

- FusionCharts Trial Mark
- FusionExport Trial Mark

![Water Mark](/images/export-chart-with-watermark.png)

## Prerequisites

Before you start, ensure that you have:

1. [Downloaded and installed FusionExport Server](/exporting-charts/using-fusionexport/installation/install-fusionexport-server), and the server is running

2. [Downloaded and installed the FusionExport SDK client](/exporting-charts/using-fusionexport/installation/install-fusionexport-server-sdks)

3. [Export a Dashboard](/exporting-charts/using-fusionexport/installation/export-a-dashboard)

Now, let’s see how you can remove the watermarks from your exported chart.

<div style="position: relative; padding-bottom: 62.5%; height: 0;">
    <iframe src="https://www.loom.com/embed/527a63befb2f46dd9b296ae6d6dc6b1b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## Remove FusionExport Watermark

To remove FusionExport watermark, you need to purchase the licensed version. Contact our [sales team](mailto:sales@fusioncharts.com) to purchase the license. Once you have purchased the license, run the licensed package and export; FusionExport watermark will go away.

The chart looks like as shown below:

![FusionExport Water Mark removed](/images/export-chart-without-export-watermark.png)

## Remove FusionCharts Trial mark

To remove the FusionCharts watermark, you have to buy a FusionCharts licensed version and use the downloaded files as a custom library. You can either contact our [sales team](mailto:sales@fusioncharts.com) or go to our [pricing page](https://www.fusioncharts.com/buy) to download the licensed package of FusionCharts

You can override the default package version of **FusionCharts** in **FusionExport** with your current version by passing your custom FusionCharts directory to the `-L` options of FusionExport.

```bash
./fusionexport -L <path_to_fusioncharts_lib>
```

To remove the FusionCharts watermark, follow the steps below:

- Copy all the files in the `js` folder of your licensed distribution.
- Place all the files present inside the `js` folder in folder named `fusioncharts` beside your `fusionexport` file.

To run licensed FusionExport with licensed FusionCharts run:

```bash
./fusionexport -L fusioncharts/
```

After removing the watermarks, the chart looks like:

![No Water Mark](/images/export-chart-without-watermark.png)
