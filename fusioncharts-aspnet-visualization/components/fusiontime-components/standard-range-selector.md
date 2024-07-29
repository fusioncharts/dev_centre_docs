---
title: Standard Range Selector | FusionCharts
description: Explore FusionTime's standard range selector for ASP.NET, offering intuitive control over date ranges for dynamic data visualization. Learn more now!
heading: Standard Range Selector
---

The Standard Range Selector lets you select and focus on data within standard time periods. The options of contextual time periods vary according to the atomicity of your data and the data you are currently displaying in the chart.

## A Standard Range Selector looks as shown in the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-standard-range-selector.png" alt="Standard Range Selector" width="700" height="420">

The three sections of Standard Range Selector (as shown in the above screenshot) are:

- **All** - Click on this to select all of the available data values.

- **Contextual time periods** - 1Y | 6M | 3M | 1M | 15D, etc. - Select and display data for the last one year, six months, three months, or one month of the currently visible time interval, respectively. The options of the contextual time periods will vary according to the atomicity of the data and the current data displayed.

- **Business friendly dates** - YTD | QTD | MTD | WTD - Click on YTD, QTD, MTD, or WTD to display data from the beginning of the last year, quarter, month, or week (respectively) of the total time interval in the data to the present date. Note that these options will only appear if the data is of the current year, quarter, month and week.

### Show/Hide Standard Range Selector

To show the Standard Range Selector, set to `true` the value of the `Enable` property of the `StandardRangeSelector` object of the `timeSeries` class. Refer to the code given below:

```csharp
/* standard range selector */
timeSeries.StandardRangeSelector.Enable = true;
```

The Standard Range Selector will look as shown below:

{% embed_ftChart fusioncharts-aspnet-standard-range-selector %}
