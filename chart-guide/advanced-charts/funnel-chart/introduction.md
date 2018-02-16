---
permalink: gauge-and-widgets-guide/funnel-chart/introduction.html
title: Introduction to Funnel Chart | FusionCharts
description: A funnel chart is used to plot streamlined data. For example, it can be used to plot the sales data for a sales pipeline analysis.
heading: Introduction to Funnel Chart
chartPresent: true
---

A funnel chart is used to plot streamlined data. For example, it can be used to plot the sales data for a sales pipeline analysis. A funnel chart consists of multiple segments, each segment representing a data point. You can render a funnel chart in either 2D or 3D.

In this section, you will be introduced to the:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/funnel-chart/introduction.html#basics-of-a-funnel-chart">Basics of a funnel chart</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/funnel-chart/introduction.html#salient-features">Features of a funnel chart</a>

## Basics of a Funnel Chart

In a funnel chart, the data is stream-lined, i.e., each funnel slice in the funnel represents a process flow that has filtered out data. For example, if you use  a funnel chart to display the employment process, the first funnel slice will represent the "Number of candidates who applied". Thereafter, each process flow (like "Interview Phase 1", "IQ Test", "Project" etc.) will be represented by subsequent funnel slices, each slice filtering the data provided to the previous slice. The last slice bears the value that is the final result of the entire procedure (for e.g., "Candidates recruited" in this scenario).

A streamline funnel chart to show the purchase-conversion analysis looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-introduction-example-1.js %}

## Salient Features

The funnel chart incorporates the following features:

* [Interactive funnel slices]{% linkTo tutorials/gauge-and-widgets-guide/funnel-chart/configuring-chart.md %}, which when clicked can separate from the main funnel

* Option to plot funnel slices as [hollow]{% linkTo tutorials/gauge-and-widgets-guide/funnel-chart/configuring-chart.md %} or [filled]{% linkTo tutorials/gauge-and-widgets-guide/funnel-chart/configuring-chart.md %}

* Option to set same slant angle for each funnel slice (or make them dependent on data)

* Ability to seamlessly [convert 3D funnel to 2D funnel]{% linkTo tutorials/gauge-and-widgets-guide/funnel-chart/configuring-chart.md %}, by right clicking on the chart and selecting `View 2D`

* Option to render the funnel in 2D mode with more control over the [border]{% linkTo tutorials/gauge-and-widgets-guide/funnel-chart/configuring-chart.md %} and fill properties

* Option to show values as actual values or in percentage

* Option to show a value as a [percentage of the first value or the previous value]{% linkTo tutorials/gauge-and-widgets-guide/funnel-chart/configuring-chart.md %}.

* Smart labels to avoid overlapping of funnel labels

* Option to [place labels at the side or at the center]{% linkTo tutorials/gauge-and-widgets-guide/funnel-chart/configuring-chart.md %} of the funnel chart

* Custom tool text for each funnel slice

* Links supported for each funnel slice