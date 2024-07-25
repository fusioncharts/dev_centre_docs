---
title: Custom Range Selector | FusionCharts
description: Explore FusionTime's custom range selector for ASP.NET, offering intuitive control over date ranges for dynamic data visualization. Learn more now!
heading: Custom Range Selector
---

## A Custom Range Selector looks as shown in the image below:

The Custom Range Selector lets you select and focus on data within a specific time period by selecting the start and end points. It comes in handy when you are aware of the exact time period, for which you want to see the data.

A Custom Range Selector looks as shown in the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-custom-range-selector.png" alt="Custom Range Selector" width="700" height="420">

### Show/Hide Custom Range Selector

To show the Custom Range Selector, set to `true` the value of the `Enable` property of the `CustomRangeSelector` object of the `timeSeries` class. Refer to the code given below:

```csharp
/* Custom range selector */
timeSeries.CustomRangeSelector.Enable = true;
```

The Custom Range Selector will look as shown below:

{% embed_ftChart fusioncharts-aspnet-custom-range-selector %}
