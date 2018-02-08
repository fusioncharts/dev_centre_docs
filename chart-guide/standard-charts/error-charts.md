---
permalink: chart-guide/error-charts/introduction.html
title: Introduction to Error Chart | FusionCharts
description: An error chart is used to show the extent of uncertainty in information relative to an average value.
heading: Introduction to Error Chart
chartPresent: true
---

An error chart is used to show the extent of uncertainty in information relative to an average value. Error charts can be used to show the range of values that can be taken up by a data point, instead of being restricted to a point value.

In this section, you will be introduced to the:

* <a href="/chart-guide/error-charts/introduction#basics-of-an-error-chart" class="smoth-scroll">Basics of an error chart</a>

* <a href="/chart-guide/error-charts/introduction#use-of-error-charts" class="smoth-scroll">Use of error charts</a>

* <a href="/chart-guide/error-charts/introduction#types-of-error-charts" class="smoth-scroll">Types of error charts</a>

* <a href="/chart-guide/error-charts/introduction#features-of-an-error-chart" class="smoth-scroll">Features of an error chart</a>

## Basics of an Error Chart

An error chart shows the range of possible errors or deviations that might occur in the given data. Errors are indicated by distinct I-shaped bars that are both positive and negative. Typically the I-bars represent the standard deviation in a measurement indicating the degree of variance observed in a data point. Error charts give a general idea of the accuracy of information or, conversely, the amount of variation in data from it’s expected value.

## Use of Error Charts

Following are a few areas where error charts are commonly used:

* Appliance testing

* Scientific research

* Monitoring systems

* Weather analysis

* Human resource management

## Types of Error Charts

At present, there are three types of multi-series error charts available in the FusionCharts XT Suite:

* [Error bar chart](/chart-attributes?chart=errorbar2d)

* [Error line chart](/chart-attributes?chart=errorline)

* [Error scatter chart (XY plot)](/chart-attributes?chart=errorscatter)

### Error Bar Chart

An error bar chart looks like this:

{% embed_all chart-guide-error-charts-introduction-example-1.js %}

### Error Line Chart

An error line chart looks like this:

{% embed_all chart-guide-error-charts-introduction-example-2.js %}

### Error Scatter Chart

An error scatter chart looks like this:

{% embed_all chart-guide-error-charts-introduction-example-3.js %}

## Features of an Error Chart

The distinct features of an error chart include:

* Supports both half and full error bars for positive and negative errors respectively.

* Provides options to configure error bars by changing their color, thickness, and transparency.

* Automatically customizes the width of the error bars depending on the importance of the deviation from actual data.