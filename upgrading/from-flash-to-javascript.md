---
title: From Flash to JavaScript | FusionCharts
description: This section talks about how can a user upgrade to JavaScript version from the flash version.
heading: From Flash to JavaScript
---

This section is for those who are using any version of FusionCharts older than v3.3.1 and upgrading to v3.4 or beyond.

## What's Changed?

* To define the type of the datasource (JSON, XML, XMLURL, etc), use the `dataFormat` attribute. Starting v3.4, the default value of the `dataFormat` attribute is `JSON`.
* Starting v3.4, the file names and package structure of FusionCharts JavaScript library files have changed. Additionally, all file names are now in lower case to avoid conflicts on case-sensitive servers.
* Huge performance increase in rendering charts and memory leak issues are fixed.
* All charts now rendered in JavaScript only. Flash Charts are deprecated, and you will no longer need to explicitly specify the renderer as Flash or JavaScript. If you have explicitly set the renderer to flash, it needs to be removed.
* `<style>` element is now deprecated, and is replaced with `<chart>` element attributes
* Dependency on jQuery has been removed.

Old File names| New File names
------|-------
FusionCharts.js | fusioncharts.js
FusionCharts.HC.js | Not Required any longer
FusionCharts.HC.Charts.js | fusioncharts.charts.js
FusionCharts.HC.Maps.js | fusioncharts.maps.js
FusionCharts.HC.Widgets.js | fusioncharts.widgets.js
FusionCharts.HC.gantt.js| fusioncharts.gantt.js
FusionCharts.HC.PowerCharts.js | fusioncharts.powercharts.js
FusionChartsExportComponent.js |Not Required any longer
jquery.min.js|Not Required any longer

The files ending with HC.js are no longer needed, as all charts now render in JavaScript only.

Do the following while upgrading:

1. Copy the following files from the js folder of your download and replace the existing files in your application's fusioncharts folder:

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

2. If you already have dashboards running, then you will need to rename the include path with the updated file name depending on the product you are using. Also note that filenames should NOT be renamed to the old names.

3. __You must clear your browser cache__. This is a very important step.

That's it ! You have upgraded to the latest version of FusionCharts.

## Upgrade only specific Individual products

The following points must be kept in mind while upgrading only a specific sub product :

  * __FusionCharts XT__ : If you are upgrading from an earlier version of FusionCharts XT, you will need to copy the `fusioncharts.charts.js` and `fusioncharts.js` files from the `js` folder to your working directory and include or update that in your source code.

  * __PowerCharts XT__ : In case, you are upgrading from an earlier version of PowerCharts XT, you need to download the latest PowerCharts XT pack and copy `fusioncharts.charts.js` and `fusioncharts.js` files from the `js` folder to your working directory and include or update that in your source code.

  * __FusionWidgets XT__ : Similarly, if you are upgrading from an earlier version of FusionWidgets XT, you need to copy `fusioncharts.js`, `fusioncharts.widgets.js`, and `fusioncharts.gantt.js` files from the `js` folder to your working directory and include or update that in your source code.

  * __FusionMaps XT__ : If you are upgrading from an earlier version of FusionMaps XT, you must download the latest FusionMaps XT pack, copy `fusioncharts.maps.js` from the `js` folder and the specific map definition js files from the `maps` folder to your working directory and include or update that in your source code.

This upgrades your earlier charts to the latest version of FusionCharts XT. Some features are deprecated, if that's the case, you'll find a mention of this in the documentation. You may need to modify code to use the new features or adapt to the deprecated functionality, especially if you have been using Flash charts.
