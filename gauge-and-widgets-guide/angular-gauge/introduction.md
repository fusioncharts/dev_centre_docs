---
permalink: gauge-and-widgets-guide/angular-gauge/introduction.html
title: Introduction to Angular Gauge | FusionCharts
description: Angular gauges are essentially like the speedometer or the fuel gauge. They use a radial scale to display the data range & a dial to indicate the data value.
heading: Introduction to Angular Gauge
chartPresent: true
---

Angular gauges are essentially like the speedometer or the fuel gauge of a car. They use a radial scale to display the data range and a dial to indicate the data value.

An angular (also called a meter or dial gauge) is used to display a specific data point using a dial over a radial scale with defined limits. Colors can be associated for the sections of the data to suit the application e.g. green for satisfactory, yellow for caution, and red for alarm.

In this section, you will be introduced to:

* <a href="/gauge-and-widgets-guide/angular-gauge/introduction#a-simple-angular-gauge" class="smoth-scroll">A simple angular gauge</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/introduction#elements-of-the-gauge" class="smoth-scroll">Elements of an angular gauge</a>

## A Simple Angular Gauge

A simple angular gauge looks like this:

{% embed_all gauge-and-widgets-guide-angular-gauge-introduction-example-1.js %}

As you can see in the example above, the gauge is created by defining the minimum and maximum values (referred to as lower limit and upper limit). Within that scale, you can create various qualitative ranges (color ranges) to classify your data. The purpose is to classify a value as belonging to a predetermined range. For example, you might define a range called "Best" that consists of values between 60 and 100. Or you might create a range called “Weak” that consists of values between 30 and 60. For each range, you can define a color, which helps to visually distinguish the ranges from each other.

## Elements of the gauge

An angular gauge consists of the following elements:

* <a href="/gauge-and-widgets-guide/angular-gauge/introduction#color-range" class="smoth-scroll">Color range (radial scale)</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/introduction#dials-data-indicators" class="smoth-scroll">Dials (data value indicators)</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/introduction#tick-marks" class="smoth-scroll">Tick marks and values</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/introduction#tool-tips" class="smoth-scroll">Tool-tips</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/introduction#trend-points--trend-arcs--trend-markers" class="smoth-scroll">Trend points, trend arcs, and trend markers</a>

* <a href="/gauge-and-widgets-guide/angular-gauge/introduction#annotations" class="smoth-scroll">Annotations</a>

We will see each of them in detail. Let’s first have a look at a standard angular gauge chart enlisting the various basic components:

{% embed_all gauge-and-widgets-guide-angular-gauge-introduction-example-2.js %}

## Color Range

An angular gauge displays the data values on a radial scale. The radial scale is marked by a lower limit and an upper limit, i.e. the minimum and maximum values that can be plotted. Within that scale, you can create various sections to classify your data - each section can have a different background color, border color, etc. to differentiate them from one another. These sections are called color ranges. In the above chart, we have 3 color ranges marked as green, yellow, and red. There can be any number of color ranges. For each color range, you will have to specify the minimum and maximum values and the hex color code for the range.

<p class="text-info">Each color range should have it’s own unique range value. So, if a range is defined as 0-50, the next range should have the minimum value as 50 necessarily. It cannot have an overlap with the previous section. Similarly, if the upper limit of the chart is 100, the last range should have max value set as 100.</p>

## Dials (Data Indicators)

Dials are used to point to the desired value on the radial scale. You can point to more than one value using multiple dials. Each dial can have its individual properties like color (border and background), width (both base and top), radius, and value of the dial.

## Tick Marks

Tick marks are the calibration marks on the radial scale to help interpret the reading. There are two types of tick marks which can be drawn on the chart:

* Major Tick Marks – These are the bigger lines around the radial scale.

* Minor Tick Marks – These are the smaller lines enclosed within the bigger lines.

For all the tick marks, you can specify the color, height, and thickness. You can also specify the number of tick marks that you want to have on the chart. You also have the option to show/hide the tick mark values.

## Tool-tips

For each dial on the chart, you can set a tool-tip to display the value indicated by that particular dial. You can customize the tool-tip background color and border color. You can also opt to show/hide it.

## Trend Points / Trend Arcs / Trend Markers

The angular gauge allows you to define trend points, arcs or markers on the chart. For example, if you wish to highlight a certain value (e.g. last year’s average), you could use the trend point feature to do so.

## Annotations

Annotations allow you to draw custom shapes, text, or load images on the gauge.

With this, you have seen what is an angular gauge and the various elements it comprises of.
