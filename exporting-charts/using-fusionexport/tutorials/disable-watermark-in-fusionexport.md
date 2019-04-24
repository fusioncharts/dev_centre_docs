---
title: Disable Watermark | FusionCharts
description: This article tells how to disable watermarks while exporting the chart in fusionexport.
heading: Disable Watermark
---

If you are using the trial version there will be two kinds of watermark.

At first, your exports will look something like this.

**IMAGE**

In FusionExport, there are two types of watermark when you are exporting chart:

- FusionCharts Trial Mark
- FusionExport Trial Mark

**IMAGE**

Now, let’s see how you can remove the watermarks from your exported chart.

## Remove FusionExport Watermark

**FusionExport Licensed Version** user can now disable watermark from the chart canvas when downloading the package.

Once you have downloaded the Licensed Version, the chart looks like as shown below:

**IMAGE**

## Remove FusionCharts Trial mark

To remove the FusionCharts watermark, you have to buy a FusionCharts licensed version and use the downloaded files as a custom library.

You can override FusionCharts latest version with your current version by passing your custom FusionCharts directory to the `-L` options of FusionExport.

```bash
./fusionexport -L <path_to_fusioncharts_lib>
```

To remove the FusionCharts watermark, follow the steps below:

- Copy all the files in the `js` folder of your licensed distribution.
- Place the `js` folder in a folder named `fusioncharts` beside your `fusionexport` file. The folder contains:
  - `fusioncharts.js` and all the other files like `fusioncharts.widgets.js`, `fusioncharts.timeseries.js`, fusioncharts.charts.js, etc.
  - `Map` files
  - And `themes` in their respective folder.

To run licensed FusionExport with licensed FusionCharts run:

```bash
./fusionexport -L fusioncharts/
```

After removing the watermarks, the chart looks like:

**IMAGE**
