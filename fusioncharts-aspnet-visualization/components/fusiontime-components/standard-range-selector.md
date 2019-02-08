---
title: Standard Range Selector | FusionCharts
description: This article defines the standard range selector.
heading: Standard Range Selector
---

The Standard Range Selector lets you select and focus on data within standard time periods. The options of contextual time periods vary according to the atomicity of your data and the data you are currently displaying in the chart.

A Standard Range Selector looks as shown in the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-standard-range-selector.png" alt="Standard Range Selector" width="700" height="420">

### Show/Hide Standard Range Selector

To show the Standard Range Selector, set to `true` the value of the `Enable` property of the `StandardRangeSelector` object of the `timeSeries` class. Refer to the code given below:

```csharp
/* standard range selector */
timeSeries.StandardRangeSelector.Enable = true;
```

The Standard Range Selector will look as shown below:

{% embed_ftChart fusioncharts-aspnet-standard-range-selector %}
