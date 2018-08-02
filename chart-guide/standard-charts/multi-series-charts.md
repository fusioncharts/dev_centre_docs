---
title: Multi-series Charts | FusionCharts
description: FusionCharts Suite XT includes multi-series charts that allow to plot data for multiple datasets. For example, you can plot the revenue collected each month for the last two years using a multi-series chart.
heading: Multi-series Charts
breadcrumb: [["Home", "/"], ["Multi-Series Charts"]]
---

> These chart types belong to **FusionCharts XT**.

FusionCharts Suite XT includes multi-series charts that allow to plot data for multiple datasets. For example, you can plot the revenue collected each month for the last two years using a multi-series chart. Multi-series charts allow to plot the highs and lows of multiple datasets while also comparing them.

The different types of multi-series charts available in the FusionCharts Suite XT are:

* Multi-series Column 2D Chart

* Multi-series Column 3D Chart

* Overlapped Column 2D Chart

* Multi-series Bar 2D Chart

* Multi-series Bar 3D Chart

* Overlapped Bar 2D Chart

* Multi-series Line 2D Chart

* Multi-series Area 2D Chart

## Multi-series Column 2D Chart

In this sample, let's create a multi-series column 2D chart showcasing the comparison between quarterly revenue earned for the previous year and the current year. The columns for both datasets, one for the previous year and one for the current year, have been rendered using different colors. This makes it easy to interpret and compare the data.

To create a multi-series column 2D chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a multi-series column 2D chart, set `mscolumn2d`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=mscolumn2d "@@open-newtab") page of multi-series column 2D chart.

A simple multi-series column 2D chart looks like:

{% embed_all standard-charts-multi-series-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/ppcas1oo/ "@@open-newtab") to edit the above multi-series chart.

## Multi-series Column 3D Chart

To render a multi-series column chart in 3D, change the value of the `type` attribute from `msColumn2D` to `msColumn3D`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=mscolumn3d "@@open-newtab") page of multi-series column 3D chart.

The multi-series column chart in 3D looks like:

{% embed_all standard-charts-multi-series-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/3x4xcn70/ "@@open-newtab") to edit the above multi-series chart.

## Multi-series Bar 2D Chart

Let's move ahead to create a multi-series bar chart in 2D which will show sales as per two major categories in different stores for last month.

To render a multi-series bar chart in 2D, set the `type` to `msbar2d`.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=msbar2d "@@open-newtab") page of multi-series bar 2D chart.

A multi-series bar 2D chart looks like:

{% embed_all standard-charts-multi-series-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/H92Sx/ "@@open-newtab") to edit the above multi-series chart.

## Multi-series Bar 3D Chart

To render a multi-series bar chart in 3D, change the value of the `type` attribute from `msBar2D` to `msBar3D`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=msbar3d "@@open-newtab") page of multi-series bar 3D chart.

The multi-series bar chart in 3D looks like:

{% embed_all standard-charts-multi-series-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/X9xPM/ "@@open-newtab") to edit the above multi-series chart.

## Multi-series Line Chart

Now, let's create a multi-series line chart which will show the comparison between the number of visitors in malls in a week. The line segments for both datasets, one for the last week and one for the current week, have been rendered using different colors. This makes it easy to interpret and compare the data.

To render a multi-series line chart, set the `type` to `msline`.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=msline "@@open-newtab") page of multi-series line 2D chart.

A multi-series line chart looks like:

{% embed_all standard-charts-multi-series-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/T5C6h/ "@@open-newtab") to edit the above multi-series chart.

## Multi-series Area Chart

To render a multi-series area chart the same use case as above, set the `type` to `msarea`.

For a detailed list of attributes, refer to the [chart attributes]({% site.baseurl %}/chart-attributes?chart=MSArea "@@open-newtab") page of multi-series area 2D chart.

A multi-series area chart looks like:

{% embed_all standard-charts-multi-series-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/jf73mv1e/ "@@open-newtab") to edit the above multi-series chart.

> Note that the number of **category** objects defined should be equal to the number of **data** objects defined, that is, if you mention twelve categories (twelve months), the data for both years (2013 and 2014) should also contain twelve **data** objects (twelve rows of data). Else, the chart will display empty space at that position.