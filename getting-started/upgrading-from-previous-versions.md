---
permalink: getting-started/upgrading-from-previous-versions.html
title: Upgrading from Previous Versions | FusionCharts
description: This section talks about how can a user upgrade his version from the previous one.
heading: Upgrading from Previous Versions
chartPresent: false
---

This section is for those who are using any version of FusionCharts older than v3.3.1 and upgrading to v3.4 or beyond.

#### What's Changed?

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

     * `fusioncharts.charts.js`
     * `fusioncharts.js`
     * `fusioncharts.powercharts.js`
     * `fusioncharts.gantt.js`
     * `fusioncharts.treemap.js`
     * `fusioncharts.zoomscatter.js`
     * `fusioncharts.maps.js`
     * `fusioncharts.widgets.js`

2. If you already have dashboards running, then you will need to rename the include path with the updated file name depending on the product you are using. Also note that filenames should NOT be renamed to the old names.

3. __You must clear your browser cache__. This is a very important step.

That's it ! You have upgraded to the latest version of FusionCharts.

#### Upgrading only specific Individual products

The following points must be kept in mind while upgrading only a specific sub product :

  * __FusionCharts XT__ : If you are upgrading from an earlier version of FusionCharts XT, you will need to copy the `fusioncharts.charts.js` and `fusioncharts.js` files from the `js` folder to your working directory and include or update that in your source code.

  * __PowerCharts XT__ : In case, you are upgrading from an earlier version of PowerCharts XT, you need to download the latest PowerCharts XT pack and copy `fusioncharts.charts.js` and `fusioncharts.js` files from the `js` folder to your working directory and include or update that in your source code.

  * __FusionWidgets XT__ : Similarly, if you are upgrading from an earlier version of FusionWidgets XT, you need to copy `fusioncharts.js`, `fusioncharts.widgets.js`, and `fusioncharts.gantt.js` files from the `js` folder to your working directory and include or update that in your source code.

  * __FusionMaps XT__ : If you are upgrading from an earlier version of FusionMaps XT, you must download the latest FusionMaps XT pack, copy `fusioncharts.maps.js` from the `js` folder and the specific map definition js files from the `maps` folder to your working directory and include or update that in your source code.

This upgrades your earlier version of the charts to the latest version of FusionCharts XT. There are some features that are deprecated, which you can find [here](/getting-started/deprecated-functionalities). You may need to modify code to make use of the new features, or adapt to the deprecated functionality, especially if you have been using Flash charts.
