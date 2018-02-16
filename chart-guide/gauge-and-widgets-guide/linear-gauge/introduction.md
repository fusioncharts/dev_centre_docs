---
permalink: gauge-and-widgets-guide/linear-gauge/introduction.html
title: Introduction to Linear Gauge | FusionCharts
description: A linear gauge uses a horizontal scale to display the data range. This section talks about basics of a linear gauge and its elements
heading: Introduction to Linear Gauge
chartPresent: true
---

A linear gauge uses a horizontal scale to display the data range along with a fully configurable data pointer (or multiple pointers) to indicate the data value on the scale.

In this section, you will be introduced to:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/introduction.html#basics-of-a-linear-gauge">Basics of a linear gauge</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/linear-gauge/introduction.html#elements-of-the-linear-gauge">Elements of a linear gauge</a>

## Basics of a Linear Gauge

The FusionCharts Suite XT linear gauge is a real-time gauge, which can update its data at specified intervals, without requiring any page refreshes.

A simple linear gauge looks like this:

{% embed_all gauge-and-widgets-guide-linear-gauge-introduction-example-1.js %}

The linear gauge is used to display a specific data point using a pointer that moves on a horizontal named color scale to indicate whether the monitored data is within the defined limits.

The gauge scale extends between predefined minimum and maximum values. Within that scale we can create various ranges to classify the data. For example, we might define a range called `"Best"` that consists of values between 60 and 100. Or we might create a range called `“Weak”` that consists of values between 30 and 60. For each range, we define a color, which helps visually distinguish the ranges from each other.

The configuration options allow us to configure the gauge into just about any kind of sliding gauge, meter, or mechanism for output. Ideal uses for the linear gauge chart are factory/instrument gauges, range meter, slider, tank or vessel fill indicator, Pipe, Volt/Amp/Ohm Meter to name a few.

## Elements of the Linear Gauge

A linear gauge is made up of the following elements:

* Horizontal scale (Color range)

* Data pointers (Data value indicators)

* Tick marks and values

* Trend-points and trend-zones

* Annotations

### Horizontal Scale

The linear gauge scale is defined by minimum and maximum values. Within that scale, you can create various ranges to classify your data; you can create as many number of ranges as required. For each range, you will have to specify the minimum and maximum limits, a name for the range (than can be rendered as the label for the range), and the hex code for the color to be used for the range.

In the sample linear gauge shown above, the lower limit is 0 and the upper limit is 100. The range limits and names have been defined as:

* 0%-35%: Low

* 35%-70%: Moderate

* 70%-100%: High

The colors specified for each range are green, yellow, and red respectively.

<p class="text-warning">Each color range should have its own unique range value and should not overlap with adjoining color ranges. If a range is defined as 0-35, the next range should begin at 35. Similarly, if the upper limit of the chart is 100, the last range should have maximum value as 100.</p>

### Data Pointers

Data pointers point to the current data value on the linear gauge scale. For the pointer, you can define the number of sides (for the shape) as well as configure its border, background, and radius. You can also create and configure the cosmetics for multiple pointers for the same gauge scale, each pointing to a different value.

### Tick Marks

Tick marks are the calibration marks on the horizontal scale to help interpret the reading. There are two types of tick marks which can be drawn on the gauge:

* Major tick marks – These are the bigger lines below the gauge scale.

* Minor tick marks – These are the smaller lines enclosed within the bigger lines.

For all the tick marks, you can specify the color and the height. You can also opt to show/hide the tick mark values.

### Trend-points and Trend-zones

Trend-points are used to represent a single target value on the gauge scale against which the current value can be compared. Similarly, trend-zones are used to represent a range on the scale.

For example, you can use a trend-point to mark the percentage of CPU utilization that is recommended (say 85%). You can use a trend-zone to show a recommended range(say 70-85%).

### Annotations

Annotations let you draw custom shapes, text, or load images on the linear gauge.