---
title: Time Axis | FusionCharts
description: Explore FusionTime's time axis for ASP.NET, offering intuitive control over date ranges for dynamic data visualization. Learn more now!
heading: Time Axis
---

## The Time Axis will look as shown below:

The X-axis of a timeseries chart displays time-based data and is known as the Time Axis. Based on the atomicity of the data and the active window (of the time navigator) the time axis intelligently creates a timescale to display the chart data. Refer to the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-time-axis.png" alt="Time Axis" width="700" height="420">

### Configure Time Axis

You can set the plot name for the time axis using the `PlotName` method of the `TimeAxis` object within the `timeSeries` class. Refer to the code given below:

```csharp
/* plot name */
timeSeries.TimeAxis.PlotName = "Order Date";
```

The Time Axis will look as shown below:

{% embed_ftChart online-sales-single-series %}
