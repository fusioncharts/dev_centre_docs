---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.13.0.

## Updated Options Menu

The **restore** and **submit** button in select-scatter and drag-able chart has been moved to options menu. From v3.13.0 if you want to restore or submit your chart, click on the respective option in the options menu at the top right corner of the canvas.

The options menu looks like shown below:

![Change Axis Limits](/gif/standard-charts-drag-able-charts-gif-1.gif)

Following is the list of attributes which have been replaced with new ones:

Old Attribute|New Attribute
--|--
`showFormBtn` (deprecated)|`enableSubmit`
`formBtnTitle` (deprecated)|`submitText`
`showRestoreBtn` (deprecated)|`enableRestore`
`restoreBtnTitle` (deprecated)|`restoreText`

## Inversed Data Plot

The inverse y-axis charts are similar to the normal column charts, except that the y-axis in these charts are inverted. The lower limit and upper limit value positions are swapped in the inverse y-axis chart. In v3.13.0 inverse chart comes with a new appearance, i.e., the data plots (column and area) will now appear from the top of the canvas.

> The inverse data plots (column and area) will be applicable to the charts with positive y-axis range (> = 0).  

The new visualization of the inverse chart looks like:

{% embed_all changed-behavior-inverse-charts-example-1.js %}

> If you like to view the chart as in older version (3.12.2), contact [support@fusioncharts.com](support@fusioncharts.com).

## Secondary Data Plots overlap Primary Data Plots

From version 3.13.0 visualization of dual y-axis multi-series chart is changed. Now, if the data plots for both the axes are set as column, the secondary plots overlaps the primary plots.

The multi-series chart with both the data plots set as column looks like:

{% embed_all changed-behavior-multi-series-example-2.js %}

> If you like to view the chart as in older version (3.12.2), contact [support@fusioncharts.com](support@fusioncharts.com).

## npm Package Updated for Angular

From v3.13.0, following packages for angular has been remaned:

* `angular-fusioncharts` has been renamed to `angularjs-fusioncharts`.

Install `angularjs-fusioncharts` wrapper using following command:

```
npm install angularjs-fusioncharts --save
```

* `angular2-fusioncharts` has been renamed to `angular-fusioncharts`.

Install `angular-fusioncharts` wrapper using following command:

```
npm install angular-fusioncharts --save
```

* `angular4-fusioncharts` has been renamed to `angular-fusioncharts`.

Install `angular-fusioncharts` wrapper using following command:

```
npm install angular-fusioncharts --save
```

## Updated FusionCharts Suite XT Download Package 

Since, v3.13.0 the FusionCharts Suite XT download package folder structure is updated. The downloaded package will now contain a folder named **integrations**. This folder consists all the front end and server side wrappers under respective folders with their native export handlers if applicable. The folder structure of the downloaded package is shown below:

![Folder Structure](/gif/upgrading-plugins.gif)

## Removed Attributes and Methods

Following are the list of attributes which have been removed from the FusionCharts XT Suite:

* `Annrenderdelay`

* `btnTextColor`

* `btnFontSize`

* `formBtnWidth`

* `formBtnBorderColor`

* `formBtnBgColor`

* `btnPadding`

* `btnSpacing`

* `restoreBtnWidth`

* `restoreBtnBorderColor`

* `restoreBtnBgColor`

* `clickBubbles`

* The deprecated methods `getXML()` & `setDataXML()` have been removed.

* The deprecated method `setCurrentRenderer()` has been removed.

* The method `getChartFromId()` has been removed. Use `getObjectReference()` instead.

* The method `getMapFromId()` has been removed.  Use `getObjectReference()` instead.

## Deprecated

* `showFormBtn` (deprecated)

* `formBtnTitle` (deprecated)

* `showRestoreBtn` (deprecated)

* `restoreBtnTitle` (deprecated)

* `setTransparent()` method is deprecated. Use `containerBackgroundOpacity` instead.

* `ref` property is deprecated. Use `getObjectReference()` instead.

* `dataXMLInvalid` event is deprecated. Use `dataInvalid` instead.

* `Fusioncharts.Version` is deprecated.