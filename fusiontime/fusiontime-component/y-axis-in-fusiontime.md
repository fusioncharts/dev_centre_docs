---
title: Y-Axis | FusionCharts
description: This article defines the y-axis.
heading: Y-Axis
---

In FusionTime, you can have different y-axis for different measures visualized in a multi-variate chart.

<Annotated Image multivariate chart>

You can configure the y-axis of the chart by creating the Y-axis object.

```
yAxis: [{
    "plot": {
        "value": "Sales",
        "type": "line"
    }
}],
```

In the above code, the plot type has been changed to `column` (default is `line`). 

The output looks like as shown below:

{% embed_ftChart online-sales-multi-variate-column-data-plot %}

By default, if there is more than one measure, FusionTime renders a multivariate chart with multiple canvases. To configure the y-axis for each canvas you just have to set different values to render the chart.

In the given example, you can see how the Y-axes differ in all the charts, although the time axis is identical in all of them. This is because the charts represent different types of data within the same time interval. From the top: 

* The first chart shows **sales** figures achieved by the company.
* The second one shows the **quantity** of products sold.
* The third one displays the **shipping costs** borne by the company to get the products delivered to customers.