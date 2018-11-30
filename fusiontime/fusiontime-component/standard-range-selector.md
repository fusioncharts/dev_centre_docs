---
title: Standard Range Selector | FusionCharts
description: This article defines the standard range selector.
heading: Standard Range Selector
---

A standard range selector allows you to focus on the set of data for a specific pre-defined period of time with respect to the currently visible data on the chart canvas. 

For example, out of 15 years of data (2000-2015), you are currently viewing 5 years of data (2008-2013). Now, if you select `1Y` of data from the Standard range selector, the chart will display data for the last one year out of the 5 years (2013). 

<<Annotated image>>

The major features of Standard Range Selector include the following:

* Can select data based on three logical types of intervals:

    * All - Selects all of the available data values.

    * 1Y | 6M | 3M | 1M - Selects and displays data for the last one year, six months, three months, or one month of the currently visible time interval, respectively.

    * YTD | QTD | MTD | WTD - YTD, QTD, MTD, and WTD display data from the beginning of the last year, quarter, month, or week (respectively) of the total time interval in the data to the present date.

Once you select the total time period to be covered, as well as the interval between two consecutive data values, FusionTime intelligently selects the data values and displays them in the chart, without requiring any further input.

A chart with Standard range selector is shown below:

<<Live chart>>

In the example given above, you can see the sales made by an organization on a daily basis for a number years, plotted in a column chart. When the chart is loaded, by default, `All` is selected in the Standard Range Selector. Click on any of the other given intervals to dive deeper into the sales data. 

For instance, click on `6M` to see the sales records for the last 6 months instantly. Similarly, click `YTD`, `QTD`, `MTD`, or `WTD` to see the sales records from between the present date and the beginning of the last year, quarter, month, or week respectively.

You can hover the mouse pointer over any of the data plots to see details about the underlying data in a tooltip. A cross line will also appear instantly on the chart to indicate the position of the data value on the Y-axis.

## Show/Hide Standard Range Selector

Standard Range Selector is visible in every chart, by default. However, to turn it off, set the value of the `enabled` attribute to `0` within the `standardRangeSelector` extension of the `extensions` object.

Refer to the code below:

```

...

{

  "extensions": {

    "standardRangeSelector": {

      "enabled": "0"

    },

...

```

