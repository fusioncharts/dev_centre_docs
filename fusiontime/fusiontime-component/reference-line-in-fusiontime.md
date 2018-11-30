---
title: Reference Line | FusionCharts
description: This article defines the reference line.
heading: Reference Line
---

A Reference Line is essentially an arbitrary fixed line (mapped to one of the axes), which indicates a specific value. It helps viewers to quickly compare values of individual data plots with a predefined value. 

<<Annotated Image>>

When mapped to the Y-axis, a reference line is a horizontal line that corresponds to a particular value on the axis. It has a label, which is displayed as text right below the line when the viewer hovers the mouse pointer over the line. 

<<Live chart>>

In the example given above, whenever you hover the mouse pointer over a data plot, a reference line appears at the peak of the column, parallel to the time axis. Notice that the label displayed at the beginning of the line along the Y-axis shows the value of the plot.

## Configure the Reference Line

You can configure reference lines using the following attributes of the `ReferenceLineConfig` object:

* Use the `label` attribute to set the value of the label.

* Use the `value` attribute to set the value, at which the reference line should appear.

Refer to the code given below:

```

...

        {

          "label": String,

          "value": Number,

          "style": {

            "label": Style | String,

            "marker": Style | String

          }

        }

```

Note: You can set the top and bottom positioning of the reference line label `vertical-align` attribute.

