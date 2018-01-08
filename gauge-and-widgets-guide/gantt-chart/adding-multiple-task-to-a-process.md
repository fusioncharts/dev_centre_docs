---
permalink: gauge-and-widgets-guide/gantt-chart/adding-multiple-task-to-a-process.html
title: Adding Multiple Tasks to a Process | FusionCharts
description: There can be scenarios wherein a process may have multiple tasks. A Gantt chart allows to create multiple tasks for processes by mapping tasks using IDs.
heading: Adding Multiple Tasks to a Process
chartPresent: true
---

There can be scenarios wherein a process may have multiple tasks. A Gantt chart allows you to create multiple tasks for processes by mapping tasks and processes using IDs.

In this section, using a simple example, you will be shown how you can add multiple tasks to a process.

## Example Data to Plot: Employee Schedule

Assume that we have a Gantt chart showing the employee schedule where each employee is a process. For this chart, you might need to create multiple tasks for each employee.

For this example, we'll be plotting a Gantt chart showing the scheduled work list for each employee during a particular week. The data can be visualized as shown in the data table below (all input dates are in mm/dd/yyyy  hh:mm:ss format).

<table>
  <tr>
    <th>Employee Name </th>
    <th>Employee Id</th>
    <th>Team</th>
    <th>Allotted tasks for this week </th>
  </tr>
  <tr>
    <td>John.S</td>
    <td>EMP121</td>
    <td>Graphics</td>
    <td>Date: 7/21/2014 09:30:00 - 7/21/2014 17:00:00<br/>
    Task: Logo-I<br/><br/>
    Date: 7/22/2014 09:30:00 - 7/22/2014 16:30:00<br/>
    Task: Logo-II<br/><br/>
    Date: 7/23/2014 14:00:00 - 7/24/2014 16:30:00<br/>
    Task: Website Template</td>
  </tr>
  <tr>
    <td>David.G</td>
    <td>EMP122</td>
    <td>PHP</td>
    <td>Date: 7/21/2014 10:00:00 - 7/25/2014 14:30:00<br/>
    Task: PHP Blueprint</td>
  </tr>
  <tr>
    <td>Mary.P</td>
    <td>EMP123</td>
    <td>Testing</td>
    <td>Date: 7/21/2014 10:00:00 - 7/21/2014 15:30:00<br/>
    Task: Testing Specification<br/><br/>
    Date: 7/22/2014 09:30:00 - 7/22/2014 16:00:00<br/>
    Task: Testing tool research<br/><br/>
    Date: 7/23/2014 09:30:00 - 7/25/2014 16:30:00<br/>
    Task: Testing tool integration</td>
  </tr>
  <tr>
    <td>Andrew.H</td>
    <td>EMP124</td>
    <td>QA</td>
    <td>Date: 7/22/2014 09:30:00 - 7/22/2014 16:30:00<br/>
    Task: QA<br/><br/>
    Date: 7/23/2014 09:00:00 - 7/23/2014 16:30:00<br/>
    Task: QA<br/><br/>
    Date: 7/24/2014 09:30:00 - 7/25/2014 14:30:00<br/>
    Task: QA</td>
  </tr>
  <tr>
    <td>Neil.M</td>
    <td>EMP125</td>
    <td>Documentation</td>
    <td>Date: 7/25/2014 15:00:00 - 7/25/2014 16:59:00<br/>
    Task: Weekly Meet</td>
  </tr>
</table>


From the above data, you can deduce that:

* Each employee is a process.

* Each employee is assigned a unique ID that will be used to map the tasks with the employees.

* Each employee is assigned multiple tasks.

* Each task is assigned a unique ID (not shown in the table above).

When you dynamically generate the Gantt chart's JSON data from your database, in all probability, you will have internal IDs defined for each task and each process. You can use those IDs as the process ID and task ID.

## Converting to JSON

The above table when converted to JSON looks as under:



In the above JSON, we have:

* Defined the visual timeline (categories) to show days in the fourth week of July 2014.

* Defined each employee as a process and assigned the employee ID as process ID.

* Added each employee's team name and an additional data column.

* Defined each task with its own ID. Each task is linked to its employee using the process ID.

When you now view this chart, you'll get something as under:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-multiple-tasks-to-a-process-example-1.js %}

## Showing Projected vs Actual Dates

The technique of allocating multiple tasks can be used effectively to show the projected vs actual duration for different tasks.

A Gantt chart shown with the projected and actual timelines looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-multiple-tasks-to-a-process-example-2.js %}

In the above chart, we are showing the time required by various tasks in a construction process. The projected time required is rendered in blue and the actual time required is rendered in gray.





## Adding Legend to the Projected vs Actual Gantt Chart

As you can see in the chart above, we have used color coding to distinguish between the actual dates and projected dates. We have also used the labels ‘Planned’ and ‘Actual’, repeatedly, to indicate which color indicates what. A better alternative to rendering these labels is adding a legend to the chart.

A projected vs actual Gantt chart rendered with a legend looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-multiple-tasks-to-a-process-example-3.js %}

Given below is a brief description of the attributes used to render a legend:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for the legend. This attribute belongs to the `item` object, which in turn belongs to the `legend` object.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color to be used for a legend, e.g. #34ACDE. This attribute belongs to the `item` object, which in turn belongs to the `legend` object.</td>
  </tr>
  <tr>
    <td>`legendCaption`</td>
    <td>It is used to specify a caption for the legend box. This attribute belongs to the `chart` object.</td>
  </tr>
</table>