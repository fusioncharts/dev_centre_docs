---
permalink: gauge-and-widgets-guide/gantt-chart/introduction.html
title: Introduction to Gantt Chart | FusionCharts
description: The Gantt chart is a specialized chart used for displaying various timelines like project timelines, development timelines, etc.
heading: Introduction to Gantt Chart
chartPresent: true
---

The Gantt chart is a specialized chart used for displaying various timelines like project timelines, development timelines, etc.

In this section, you will be introduced to the:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/introduction.html#basics-of-the-gantt-chart">Basics of the Gantt chart</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/introduction.html#features-of-the-gantt-chart">Features of the Gantt chart</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/introduction.html#elements-of-the-gantt-chart">Elements of the Gantt chart</a>

## Basics of the Gantt Chart

A Gantt chart is a date/time-based chart that allows you to plot tasks visually with their exact start and end date/time. You can also define milestones for the project which assert how much of the project should be completed at a given point in time. This helps you keep track of the project progress and plan remedial actions to bring the project back on course, if there is a delay.

A typical FusionCharts Suite XT Gantt chart looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-introduction-example-1.js %}

## Features of the Gantt Chart

* Supports both date & time display.

* Multiple and irregular division of dates on the visual timeline. The categories can be customized for labels and cosmetic properties.

* Customizable input and output date format. This allows you to provide dates in JSON the data in one format and then customize the output format. Additionally, the output format supports extensive customization of date format.

* Ability to show each task’s completion in percentage as either empty bar or using a different fill color (slack fill color).

* Ability to show a scrollable data table at the side of Gantt chart. This data table can have any number of columns containing any data that you wish to show. You can customize the cosmetics of each cell of this table.

* Ability to restrict the Gantt view pane area to a specified date/time duration. The rest can be viewed upon scrolling of the chart.

* Tasks are linked to processes by an ID. Therefore, multiple tasks can be defined for each process. This helps in cases where you are plotting a Gantt chart indicating allotted work for all team members and each member has multiple jobs allotted during the same period.

* Option to show/hide task labels, percent labels, individual task bar dates, etc.

* Ability to show individual task bars as groups – to indicate task groups.

* Customizable connectors to connect any two tasks on the chart. The connectors can be connected to either start or end of both the tasks and can be rendered in four different ways. The cosmetics of each connector can be individually customized.

* Ability to display milestones at specified dates. Milestones can be displayed as polygons or stars with customizable properties. You can show additional tool text for milestones.

* Trend-lines or trend-zones can be added to the chart to highlight a single date or a range of dates. For example, a trend line can be added to show "Today", or trend-zones can be added to show a “Holiday”, etc.

* Customizable tooltip properties. Also, you can opt to show task date as part of the tool-tip text. Additional macros are supported to create a dynamic tool-tip.

* Ability to add a legend to the chart to show color keys. Fully customizable legend cosmetics.

* Pre-defined palettes and single color theme selectors to help you easily set colors for the chart.

* Ability to define the width ratio in which the data table and Gantt area is to be distributed.

* Fully customizable Gantt & grid cosmetics. Various other cosmetics can be customized like scroll properties etc.

* Round-edged task bars supported.

* Customizable gradient mix and shadow effect for task bars.

* Ability to define annotations over the Gantt chart to show further information.

* Ability to enable the hovering effect. Customizable hovering properties for categories, processes, connectors, and task bars are available.

* Ability to support vertical scrolling.

## Elements of the Gantt Chart

A Gantt chart consists of the following elements:

* Categories and sub-categories (dates) in the visual time-line

* Scrollable data table that includes:

    * Process names

    * Additional user-defined columns of data

* Scrollable Gantt view pane that includes:

    * Gantt task bars

    * Milestones

    * Task connectors

    * Trend-lines

* Legend to show the color keys used in the chart

The images below show a standard Gantt chart with a few of the above elements labeled:

![Gantt Chart 1]({{ site.baseurl }}assets/images/gauge-and-widgets-guide-gantt-chart-introduction-image-1.gif)

![Gantt Chart 2]({{ site.baseurl }}assets/images/gauge-and-widgets-guide-gantt-chart-introduction-image-2.gif)

### Categories and Sub-categories (Dates) on the Visual Time-line

A Gantt chart has a horizontal axis representing the total time span of the project. This axis can then be  broken down into increments (for example, days, weeks, or months). You can also define any number of sub-categories to show dates broken into smaller units. For example, if you were to show a Gantt chart spanning two years, you can show the first sub-category as quarters, then divide these quarters into months, then weeks, and finally into days.

Irregular distribution of the time-line is also possible. For example, if you want to plot a Gantt chart illustrating the development of a certain project during a time span of three months and you want to show the weekly progress, you can easily divide the time period into weeks based on their actual dates. In the visual date time-line, the bar on the top  can represent the months by their names and the bar below it could display the weeks.

In most of the other Gantt charts, you are forced to divide a month into four weeks only, thereby resulting to aberrations in the visual data display, as a month always is more than 4 weeks. But because the FusionCharts Suite XT Gantt chart is date based, all your divisions of date are perfect. You can therefore show a week starting in one month and ending in other.

### Process Names

Each task in a Gantt chart is represented as a process. For example, in the images shown above, we have the processes "Writing", "Signing", "Financing", etc. Whenever you build a Gantt chart, you need to specify the process names and also the tasks within each process.

The process names show up in a scrollable data table to the left of the Gantt pane.

### Data Table to Show Additional Data Columns

If you need to provide more data pertinent to each process, you can show that data in an interactive and fully customizable data table. This data table is drag-able and scrollable. Also, each cell's cosmetics can be thoroughly customized and data in each cell can be linked to external links.

### Task Bars

Task bars are the actual bars which represent the duration of each task. They run through the horizontal length of the chart and are positioned w.r.t dates specified for each of them.

### Milestones

Milestones are an important part of the Gantt chart as they allow you to visually depict any crucial dates on the chart. You can create your own milestones on the chart based on the date and the tasks, i.e., for a given task you can specify milestones on specific dates. You can customize all the visual properties of the milestone including shape (star or polygon), size, and colors.

Additionally, you can add tool text and link for the milestone.

### Task Connectors

You can draw connectors between the task bars to indicate the process flow.

On the functional side, to draw a connector, all you need to do is specify the `Id` of the two tasks that you want to connect. Apart from this, you can also specify where the connector joins the start and end task bar individually – at their start or end.

For example, if you need to plot two connecting tasks which are simultaneous in nature, that is each process starts at the same time and relates to the same thing, you can connect the start of task bar to the start of end bar to give the visual effect. Similarly, if the second process can start only after the first process has ended, you can connect the end of the first task bar to the start of the succeeding task bar.

### Trend-lines

Trend-lines can be used to show important dates on the chart - like today or scheduled date etc.

### Legend

For the chart, you can define your own legend and keys for the same. This is an optional requirement, but can be useful to depict what each color represents.

### Vertical Scroll Bar

A vertical scroll bar appears at the right side of the Gantt view pane in Gantt chart.