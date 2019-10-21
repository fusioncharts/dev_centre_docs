---
title: Upgrade from Evaluation Versions | FusionCharts
description: This section is for users who have used an evaluation version of FusionCharts in their application, and are now upgrading to a commercial license.
heading: Upgrade from Evaluation Versions
---

This section is for users who have used an evaluation version of FusionCharts in their application, and are now upgrading to a commercial license. There is no feature limitation in the evaluation version of FusionCharts, except for the fact that all the charts are watermarked.

To upgrade, you must do the following:

1. Replace the JavaScript files from the evaluation version, with the ones you received during purchase (can be found in the `js` folder of your download).

2. If you are using an __older__ trial version of FusionCharts Suite XT (earlier than v3.4) [the file names have changed](/upgrading/from-flash-to-javascript). So, ensure that you have copied the following files from the `js` folder of your download:

     * `fusioncharts.js`
     * `fusioncharts.charts.js`
     * `fusioncharts.widgets.js`
     * `fusioncharts.powercharts.js`
     * `fusioncharts.gantt.js`
     * `fusioncharts.treemap.js`
     * `fusioncharts.zoomscatter.js`
     * `fusioncharts.zoomline.js`
     * `fusioncharts.overlappedbar2d.js`
     * `fusioncharts.overlappedcolumn2d.js`
     * `fusioncharts.maps.js`

3. __You must clear your browser cache__. This a very important step.

With that you have upgraded to the commercial version of FusionCharts. You will not see any watermarks on the charts when used with your application.

## Licensing only specific sub products

The following points must be kept in mind while upgrading only a specific sub product :

  * __FusionCharts XT__ : If you are upgrading from an evaluation version of FusionCharts XT, you will need to copy the `fusioncharts.charts.js` and `fusioncharts.js` files from the `js` folder to your working directory and include or update that in your source code.

  * __PowerCharts XT__ : In case, you are upgrading from an evaluation version of PowerCharts XT, you need to download the latest PowerCharts XT pack and copy `fusioncharts.charts.js`, `fusioncharts.js` and `fusioncharts.powercharts.js` files from the `js` folder to your working directory and include or update that in your source code.

  * __FusionWidgets XT__ : Similarly, if you are upgrading from an evaluation version of FusionWidgets XT, you need to copy `fusioncharts.js`, `fusioncharts.widgets.js`, and `fusioncharts.gantt.js` files from the `js` folder to your working directory and include or update that in your source code.

  * __FusionMaps XT__ : If you are upgrading from an evaluation version of FusionMaps XT, you must download the latest FusionMaps XT pack, copy `fusioncharts.maps.js` from the `js` folder and the specific map definition js files from the `maps` folder to your working directory and include or update that in your source code.

This method of installing individual products would come handy when you’ve licensed just that product from FusionCharts Suite XT, and need to overwrite the evaluation version files with the licensed ones. In such a scenario, you will copy the licensed JavaScript files of the relevant product from the licensed download pack (provided after purchase) to your project folder and overwrite the existing evaluation files. The charts generated using licensed file would not show the watermark any more. However, any chart generated using other products, which you do not have a license for, would continue showing the evaluation watermark.

If the watermark shows up for your licensed files, even after overwriting, check for these:

  * Are you copying the correct JavaScript files and overwriting at the right location?
  * Have you cleared your browser cache?

## Disable Watermark from Chart Canvas

FusionCharts Licensed Version user can now disable watermark from the chart canvas when downloading the package from npm.

**To disable watermark globally, refer to the code below:**

```javascript
// Global Configuration
FusionCharts.options.creditLabel = false;
```

**To disable the watermark for a particular chart, refer to the code below:**

```javascript
chartObj = new FusionCharts({
    type: 'column2d',
    // Disable credit label
    creditLabel: false,
    width: '700',
    height: '500',
    dataFormat: 'json'
});
```