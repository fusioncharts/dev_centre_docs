---
title: Introduction to Real-time Gauges | FusionCharts
description: Real-time gauges are useful in sectors like healthcare, IT, automotive, networking, for applications where continuous monitoring of a state is required.
heading: Introduction to Real-time Gauges
chartPresent: true
---

FusionCharts Suite XT is shipped with different types of [charts, gauges, and maps](http://www.fusioncharts.com/charts/). Each of these categories of the product can be used to plot static as well as real-time data. This section covers how gauges can be used to plot real-time data.

Real-time gauges are useful in sectors such as healthcare, IT, automotive, manufacturing, stock market, networking, essentially for all applications where continuous monitoring of a state is required. They let you -

* Monitor a KPI set for a system/business

* Analyze current/single value of interest

* Set alerts to notify critical events

* Compare performance based on different business goals

A real-time gauge polls for new data at regular preset intervals and displays the current data on the gauge without having to refresh the page. It is silently updated with new data and the current state is reflected on the page after every interval.

A bulb gauge configured for real time updates is shown below:

{% embed_all advanced-charting-real-time-gauges-introduction-example-1.js %}

This bulb gauge shows temperature status of a deep freezer. The gauge shows a single value, which is the current temperature of the freezer. It is configured to change color and display a message in real-time based on the range the current temperature value falls in.

In this example, when the temperature falls below -35°C, the bulb turns red and a message is displayed that alerts you to take action because the temperature has fallen below the minimum value. Similarly, if the current temperature is in the range of -25°C and -5°C, the bulb turns green with a message indicating all is well and no action is required.

All gauges offered by FusionCharts Suite XT support real-time updates. For a detailed description on each gauge type, click the type-specific links given below:

* [Angular]({% site.baseurl %}/chart-guide/gauge-and-widgets-guide/angular-gauge/creating-real-time-gauges "@@open-newtab")

* [Linear]({% site.baseurl %}/chart-guide/gauge-and-widgets-guide/linear-gauge/real-time-gauges "@@open-newtab")

* [LED]({% site.baseurl %}/chart-guide/gauge-and-widgets-guide/led-gauge/real-time-gauges "@@open-newtab")

* [Thermometer]({% site.baseurl %}/chart-guide/gauge-and-widgets-guide/thermometer-gauge/real-time-gauges "@@open-newtab")

* [Cylinder]({% site.baseurl %}/chart-guide/gauge-and-widgets-guide/cylinder-gauge/real-time-gauges "@@open-newtab")

* [Bulb]({% site.baseurl %}/chart-guide/gauge-and-widgets-guide/bulb-gauge/real-time-gauges "@@open-newtab")

Read ahead to understand how you can setup and work with real-time gauges.
