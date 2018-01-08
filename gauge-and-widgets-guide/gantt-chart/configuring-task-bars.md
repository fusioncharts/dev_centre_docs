---
permalink: gauge-and-widgets-guide/gantt-chart/configuring-task-bars.html
title: Configuring Task Bars | FusionCharts
description: This section talks about creating task bars indication perentage of task completed, customize hover effects, create task bars, etc
heading: Configuring Task Bars
chartPresent: true
---

There are various ways in which you can customize the way your task bars render on the chart.

In this section, you will be shown how you can:

* <a href="/gauge-and-widgets-guide/gantt-chart/configuring-task-bars#creating-task-bars-to-indicate-percent-complete-figures" class="smoth-scroll">Create task bars indicating percentage of task completed</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/configuring-task-bars#customizing-the-hover-effect-for-tasks" class="smoth-scroll">Customize hover effects for task bars</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/configuring-task-bars#creating-task-bars-that-look-like-task-groups" class="smoth-scroll">Create task bars that look like a task group</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/configuring-task-bars#drawing-task-bars-with-rounded-corners" class="smoth-scroll">Draw task bars with rounded corners</a>

* <a href="/gauge-and-widgets-guide/gantt-chart/configuring-task-bars#customizing-tool-text-for-task-bars" class="smoth-scroll">Customize the tool text for each task</a>

## Creating Task Bars to Indicate Percent Complete Figures

You can have task bars on your chart that tell you what percentage of a task has been completed.

A Gantt chart rendered with task bars indicating percent complete figures looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-task-bars-example-1.js %}

Given below is a brief description of the attributes used to render percent complete task bars:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`percentComplete`</td>
    <td>It is used to specify what percentage of a task has been completed. This attribute takes values between 0 and 100. It belongs to the `task` object, which in turn belongs to the `tasks` object. The portion of the task that is yet to be completed is called the slack. </td>
  </tr>
  <tr>
    <td>`slackFillColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the slack, e.g. #432ACD. By default, the slack is rendered in a shade of red. This attribute belongs to the `chart` object.</td>
  </tr>
  <tr>
    <td>`showSlackAsFill`</td>
    <td>It is used to specify if the slack will be rendered as a filled bar or as an empty bar. Setting this attribute to `0` will render the slack as an empty bar, setting it to `1` (default) will render it as a filled bar. This attribute belongs to the `chart` object.</td>
  </tr>
</table>


## Customizing the Hover Effect for Tasks

By default, hover effects are enabled for Gantt charts. You can further customize the hover effect for the color and transparency.

A Gantt chart with the hover effect for the tasks customized looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-task-bars-example-2.js %}

Given below is a brief description of the attributes used to customize the hover effect for tasks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`taskHoverFillColor`</td>
    <td>It is used to specify the hex code of the task bar fill color when the mouse pointer is hovered over it, e.g. #444444. This attribute belongs to the `chart` object and is applicable to all tasks created in the JSON data.</td>
  </tr>
  <tr>
    <td>`taskHoverFillAlpha`</td>
    <td>It is used to specify the transparency of the task bar fill color when the mouse pointer is hovered over it. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 40. It belongs to the `chart` object and is applicable to all tasks created in the JSON data.</td>
  </tr>
  <tr>
    <td>`hoverFillColor`</td>
    <td>It is used to specify the hex code of the task bar fill color when the mouse pointer is hovered over it, e.g. #444444. This attribute, when used with the `tasks` object, is applicable to all the tasks created under the object. When used with the `task` object, it is applicable to only one task created using this object. </td>
  </tr>
  <tr>
    <td>`hoverFillAlpha`</td>
    <td>It is used to specify the transparency  the task bar fill color when the mouse pointer is hovered over it. It takes values between 0 (transparent) and 100 (opaque), e.g. 40. This attribute, when used with the `tasks` object, is applicable to all the tasks created under the object. When used with the `task` object, it is applicable to only one task created using this object. </td>
  </tr>
  <tr>
    <td>`showHoverEffect`</td>
    <td>It is used to specify whether the hover effect will be enabled or disabled for all the elements on the chart. Setting this attribute to `0` will disable the hover effect, setting it to `1` (default) will enable it.</td>
  </tr>
  <tr>
    <td>`showTaskHoverEffect`</td>
    <td>It is used to specify whether the hover effect will be enabled or disabled for all the tasks on the chart. Setting this attribute to `0` will disable the hover effect, setting it to `1` (default) will enable it.</td>
  </tr>
</table>


### Customizing Hover Effect for Slacks

A Gantt chart with the hover effect customized for slacks looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-task-bars-example-3.js %}

Given below is a brief description of the attributes used to customize the hover effect for slacks:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`slackHoverFillColor`</td>
    <td>It is used to specify the hex code of the task bar fill color when the mouse pointer is hovered over it, e.g. #444444. This attribute can be used with the `chart`, `tasks`, and `task` objects.</td>
  </tr>
  <tr>
    <td>`slackHoverFillAlpha`</td>
    <td>It is used to specify the transparency  the task bar fill color when the mouse pointer is hovered over it. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 40. It can be used with the `chart`, `tasks`, and `task` objects.</td>
  </tr>
</table>


## Creating Task Bars that Look like Task Groups

A Gantt chart with task bars presented as task groups looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-task-bars-example-4.js %}

Given below is a brief description of the attributes used to represent a task as a parent group visually:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showAsGroup`</td>
    <td>It is used to specify whether the task bars should be rendered as a task group. Setting this attribute to `1` will render the task bars as task groups, setting it to `0` (default) will not.</td>
  </tr>
</table>


## Drawing Task Bars with Rounded Corners

A Gantt chart having task bars with rounded corners looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-task-bars-example-5.js %}

Given below is a brief description of the attributes used to render task bars with rounded corners:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`taskBarRoundRadius`</td>
    <td>It is used to specify the radius for the rounded corners of task bars.</td>
  </tr>
</table>


## Customizing Tool Text for Task Bars

FusionCharts Suite XT allows you to add custom tool text for the task bars in a Gantt chart using attributes and macros.

A Gantt chart rendered with a custom tool text (using attributes and macros) for task bars is given below:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-task-bars-example-6.js %}

Given below is a brief description of the attributes used to render a custom tool text:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dateInToolTip`</td>
    <td>It is used to specify whether the date should be rendered as a part of the tool-tip text. Setting this attribute to `1` will render the date in the tool-tip text, setting it to `0` will not render the date.</td>
  </tr>
  <tr>
    <td>`plotToolText`</td>
    <td>If you want to have custom tool text for each task bar, you can specify it here. </td>
  </tr>
</table>


### Macros in Tool-tip Variables

You can add macros to configure dynamic and contextual content in tooltip. This saves a lot of manual effort and provides for a lot of customization options.

Given below is a brief description of the attribute used to support Gantt chart-specific macros:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`milestoneToolText`</td>
    <td>It is used to set to specify the tool-text for milestones. </td>
  </tr>
</table>


Given below is a brief description of the Gantt chart-specific macros:

<table>
  <tr>
    <th>Macro Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`$start`</td>
    <td>It is used to specify the start time of a task.</td>
  </tr>
  <tr>
    <td>`$end`</td>
    <td>It is used to specify the end time of a task.</td>
  </tr>
  <tr>
    <td>`$processName`</td>
    <td>It is used to specify the corresponding process name of a task.</td>
  </tr>
  <tr>
    <td>`$label`</td>
    <td>It is used to specify the label of a task. </td>
  </tr>
  <tr>
    <td>`$percentComplete`</td>
    <td>It is used to specify the percentage of task completed (if provided). </td>
  </tr>
  <tr>
    <td>`$date`</td>
    <td>It is used to specify the milestone date. </td>
  </tr>
  <tr>
    <td>`$taskStartDate`</td>
    <td>It is used to specify the start date of the task that corresponds to the milestone. </td>
  </tr>
  <tr>
    <td>`$taskEndDate`</td>
    <td>It is used to specify the end date of the task that corresponds to the milestone. </td>
  </tr>
  <tr>
    <td>`$taskLabel`</td>
    <td>It is used to specify the label of the task that corresponds to the milestone. </td>
  </tr>
  <tr>
    <td>`$taskPercentComplete`</td>
    <td>It is used to specify the percentage completion (if provided) of the task that corresponds to the milestone. </td>
  </tr>
  <tr>
    <td>`$processName`</td>
    <td>It is used to specify the name of the process that corresponds to the milestone. </td>
  </tr>
</table>