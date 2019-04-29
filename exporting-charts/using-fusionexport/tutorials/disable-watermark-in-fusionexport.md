---
title: Disable Watermark | FusionCharts
description: This article tells how to disable watermarks while exporting the chart in fusionexport.
heading: Disable Watermark
---

In FusionExport, there are two types of watermark when you are exporting chart:

- FusionCharts Trial Mark
- FusionExport Trial Mark

![Water Mark](/images/export-chart-with-watermark.png)

Now, let’s see how you can remove the watermarks from your exported chart.

<video width="100%" controls>
 <source src="{% site.BASE_URL %}/videos/disable-watermark-in-fusionexport.mp4" type="video/mp4">
</video>

## Remove FusionExport Watermark

To remove FusionExport watermark, you need to purchase the licensed version. Contact our [sales team](mailto:sales@fusioncharts.com) to purchase the license. Once you have purchased the license, run the licensed package and export; FusionExport watermark will go away.

Once you have downloaded the Licensed Version, the chart looks like as shown below:

![FusionExport Water Mark removed](/images/export-chart-without-export-watermark.png)

## Remove FusionCharts Trial mark

To remove the FusionCharts watermark, you have to buy a FusionCharts licensed version and use the downloaded files as a custom library. You can either contact our [sales team](mailto:sales@fusioncharts.com) or go to our [pricing page](https://www.fusioncharts.com/buy) to download the licensed package of FusionCharts

You can override the default package version of **FusionCharts** in **FusionExport** with your current version by passing your custom FusionCharts directory to the `-L` options of FusionExport.

```bash
./fusionexport -L <path_to_fusioncharts_lib>
```

To remove the FusionCharts watermark, follow the steps below:

- Copy all the files in the `js` folder of your licensed distribution.
- Place all the files present inside the `js` folder in folder named `fusioncharts` beside your `fusionexport` file. The folder contains:
  - `fusioncharts.js` and all the other files like `fusioncharts.widgets.js`, `fusioncharts.timeseries.js`, fusioncharts.charts.js, etc.
  - Map files in `maps` folder
  - Theme files in `themes` folder.

To run licensed FusionExport with licensed FusionCharts run:

```bash
./fusionexport -L fusioncharts/
```

After removing the watermarks, the chart looks like:

![No Water Mark](/images/export-chart-without-watermark.png)
