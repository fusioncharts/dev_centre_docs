---
permalink: gauge-and-widgets-guide/cylinder-gauge/introduction.html
title: Introduction to Cylinder Gauge | FusionCharts
description: The cylinder gauge is represented by a vertical cylinder, whose fill level is defined by the data value being plotted.
heading: Introduction to Cylinder Gauge
chartPresent: true
---

The cylinder gauge is represented by a vertical cylinder, whose fill level is defined by the data value being plotted. It is used to report inventory levels, fuel levels, etc.

The cylinder gauge is a real-time chart, which can update its data after specified intervals, without requiring any page refreshes.

In this section, you will be introduced to:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/cylinder-gauge/introduction.html#a-simple-cylinder-gauge">A simple cylinder gauge</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/cylinder-gauge/introduction.html#elements-of-the-gauge">Elements of a cylinder gauge</a>

## A Simple Cylinder Gauge

A simple example of a cylinder gauge has been showcased below:

{% embed_all gauge-and-widgets-guide-cylinder-gauge-introduction-example-1.js %}

The cylinder gauge shown here has been designed to monitor the diesel level in the generator at Bakersfield Central.

What makes a cylinder gauge different from other gauges is that this gauge can be rendered with only one fill color; it cannot be setup with color ranges.

## Elements of the Gauge

A cylinder gauge chart consists of the following elements:

* Cylinder fill

* Tick marks

* Chart value

* Annotations

Here we’ll see each of them in detail. Let’s first have a look at a standard cylinder chart enlisting the various basic components:

![image cylinder-gauge]({{ site.baseurl }}assets/images/cylinder-gauge-introduction-1.jpg)

### Cylinder Fill

The cylinder is the main component in a cylinder chart – the percentage of cylinder filled helps the end user to decipher the value being illustrated.

### Tick Marks

Tick marks are the calibration marks on the vertical scale to the left/right of the cylinder to help interpret the reading. There are two types of tick marks which can be drawn on the chart:

* Major Tick Marks – These are the bigger lines on the tick mark scale.

* Minor Tick Marks – These are the smaller lines enclosed within the bigger lines.

### Chart Value

The value display box helps you display the current value of the cylinder fill.

### Annotations

Annotations are graphical elements that can be created and positioned anywhere on a chart or a gauge. These elements can be configured in a number of ways and allow you to customise your chart in imaginative and useful ways. Although annotations are non-chart elements, you have the option to render them on the chart to improve the visual representation of data.

With this, you have seen what is a cylinder gauge and the the basic components that make up a cylinder gauge.
