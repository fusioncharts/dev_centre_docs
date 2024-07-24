---
title: Reference Line | FusionCharts
description: Explore FusionTime's reference line for ASP.NET, offering intuitive control over date ranges for dynamic data visualization. Learn more now!
heading: Reference Line
---

## A Reference Line looks as shown in the image below:

A Reference Line is essentially an arbitrary fixed line (mapped to the Y-axis), which indicates a specific value. It can help you quickly compare any data value against a fixed value represented by a line. For multivariate charts, you can set separate reference lines for each chart canvas.

A Reference Line looks as shown in the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-reference-line.png" alt="Reference Line" width="700" height="420">

### Configure Reference Line

To include a Reference Line in a chart, you need to use the `Add` method of the `ReferenceLine` object. The `Add` method accepts the following two parameters:

- `label` - It is of type string, and accepts the label text for the Reference Line.

- `value` - It is of type double, and accepts the value of the point of the Y-axis at which the Reference Line will originate.

If you want to include more than one Reference Line in a chart, you need to invoke `Add` separately for each of them, along with the parameters.

Refer to the code given below:

```csharp
/* add reference line */
timeSeries.ReferenceLine.Add("label1", 500);
```

The Reference Line will look as shown below:

{% embed_ftChart fusioncharts-aspnet-reference-lines %}
