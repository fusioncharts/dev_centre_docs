---
permalink: exporting-charts/using-excelexport/export-charts-in-excel.html
title: Export charts in Excel | FusionCharts
description: This page will showcase number of samples to export your charts to excel.
heading: Export charts in Excel
chartPresent: True
---

The Excel export is done using a server-side component running on .NET framework, that converts the chart configuration into excel file. FusionCharts provide self-hosted export server which can be used to perform Excel export. You can also set-up your private export server for data privacy and better efficiency.

Depending on the chart type, some of the charts will be exported as interactive charts in excel and others will be exported as a static image in the excel. However, the spreadsheet will always contain the chart data.

Let's check out a few examples of specific chart types using Excel export.

> For detailed list of supported chart types and attributes click [here]({% site.baseurl %}/exporting-charts/using-excelexport/supported-charts-and-attributes?chart=area2d "@@open-newtab").

## Export multi-series area 2D chart

{% embed_all exporting-charts-in-excel-example-1.js 207vp6yu %}

Click __Export as Excel__ option from the menu, to download an excel file with corresponding chart and data.

## Export the column 3D chart

{% embed_all exporting-charts-in-excel-example-2.js ayanxgk5 %}

In the above sample, 3D column chart is exported in excel format.

Following attributes are used to customize the caption and subcaption of the above chart.

`"captionFontSize": "20"`
`"captionFontBold":"1"`
`"subcaptionFontSize": "20"`
`"subcaptionFontBold": "1"`

## Export doughnut chart

{% embed_all exporting-charts-in-excel-example-3.js vm6bdg65 %}

Set the starting angle of the first slice using `startingAngle` attribute.

## Export error bar chart

{% embed_all exporting-charts-in-excel-example-4.js o8w457n9 %}

Set `rotateValues` attribute to `1` to rotate data values in chart.

## Export radar chart

{% embed_all exporting-charts-in-excel-example-5.js ubhb4xhr %}

Radar Chart is useful in visualizing multiple series of multi-dimensional data. Set `showLegend` attribute to `1` to show the legend.

## Export box and whisker chart

{% embed_all exporting-charts-in-excel-example-6.js 70yrjm62 %}

Set the `legendPosition` attribute to `right` or `bottom` (default) to specify the legend position.

## Export spline chart

{% embed_all exporting-charts-in-excel-example-7.js ccuheL7k %}

Embed a logo on the chart using `logoURL` attribute.

## Exporting the multi-axis line chart

{% embed_all exporting-charts-in-excel-example-8.js 13g80ft1 %}

This chart will be rendered as a static image in excel sheet. Since excel supports only upto two axes, this chart cannot be represented as an interactive excel chart. So, the chart is exported as static image.

> Detailed List of supported Charts types and attributes can be found [here]({% site.baseurl %}/exporting-charts/using-excelexport/supported-charts-and-attributes?chart=area2d "@@open-newtab").