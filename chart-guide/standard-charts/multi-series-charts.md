---
title: Multi-series Charts | FusionCharts
description: FusionCharts Suite XT includes multi-series charts that allow to plot data for multiple datasets. For example, you can plot the revenue collected each month for the last two years using a multi-series chart.
heading: Multi-series Charts
---

FusionCharts Suite XT includes multi-series charts that allow to plot data for multiple datasets. For example, you can plot the revenue collected each month for the last two years using a multi-series chart. Multi-series charts allow to plot the highs and lows of multiple datasets while also comparing them.

The different types of multi-series charts available in the FusionCharts Suite XT are:

* Multi-series Column 2D Chart

* Multi-series Column 3D Chart

* Multi-series Bar 2D Chart

* Multi-series Bar 3D Chart

* Multi-series Line 2D Chart

* Multi-series Area 2D Chart

## Multi-series Column 2D chart

In this sample, let's create a multi-series column 2D chart  showcasing the comparison between quarterly revenue earned for the previous year and the current year. The columns for both datasets, one for the previous year and one for the current year, have been rendered using different colors. This makes it easy to interpret and compare the data.

The JSON and XML structure of the chart is:

**CODE SNIPPET**

To create a multi-series column 2D chart, set the `type` attribute to `mscolumn2d`.

For a detailed list of attributes you can check the API reference page of multi-series column 2D chart.

A simple multi-series column 2D chart looks like:

**CHART**

Click here to edit the above multi-series chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Multi-series Column 3D chart

To render a multi-series column chart in 3D, change the value of the `type` attribute from `msColumn2D` to `msColumn3D`. The rest of the data structure remains the same.

The multi-series column chart in 3D looks like:

CHART

Click here to edit the above multi-series chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Multi-series Bar 2D chart
Let's move ahead to create a multi-series bar chart in 2D which will show sales as per two major categories in different stores for last month.

To render a multi-series bar chart in 2D, set the `type` to `msbar2d`.

A multi-series bar 2D chart looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/H92Sx/) to edit the above multi-series chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Multi-series Bar 3D chart

To render a multi-series bar chart in 3D, change the value of the `type` attribute from `msBar2D` to `msBar3D`. The rest of the data structure remains the same.

The multi-series bar chart in 3D looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/X9xPM/) to edit the above multi-series chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Multi-series Line chart

Now, it's time to create a multi-series line chart which will show the comparison between the number of visitors in malls in a week. The line segments for both datasets, one for the last week and one for the current week, have been rendered using different colors. This makes it easy to interpret and compare the data.

To render a multi-series line chart, set the `type` to `msline`.

A multi-series line chart looks like:

**CHART**

Click [here](http://jsfiddle.net/fusioncharts/T5C6h/) to edit the above multi-series chart.

The full HTML code for the above sample is:

**HTML CODE SNIPPET**

## Multi-series Area chart

To render a multi-series area chart the same use case as above, set the `type` to `msarea`.

A multi-series area chart looks like:

CHART

Click here to edit the above multi-series chart.

The full HTML code for the above sample is:

HTML CODE SNIPPET

> Note that the number of **category** objects defined should be equal to the number of **data** objects defined, that is, if you mention twelve categories (twelve months), the data for both years (2013 and 2014) should also contain twelve **data** objects (twelve rows of data). Else, the chart will display empty space at that position.