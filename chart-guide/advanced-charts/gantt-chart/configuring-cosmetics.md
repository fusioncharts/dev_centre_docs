---
permalink: gauge-and-widgets-guide/gantt-chart/configuring-cosmetics.html
title: Configuring Cosmetics | FusionCharts
description: This sections talks about configuration of cosmetics in gantt chart. Here you can add and customize process headers, add more columns, etc
heading: Configuring Cosmetics
chartPresent: true
---

You can configure several cosmetic properties for a Gantt chart that help you improve the visual representation of your chart.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/configuring-cosmetics.html#defining-and-showinghiding-task-labels">Define and show/hide task labels</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/configuring-cosmetics.html#showinghiding-task-start-and-end-dates">Show/hide task start and end dates</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/configuring-cosmetics.html#adding-and-customizing-the-process-header">Add and customize process headers</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/configuring-cosmetics.html#adding-more-columns-to-the-data-table">Add more columns to the data table</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/configuring-cosmetics.html#customizing-the-hover-effect">Configure hover effects</a>

## Defining and Showing/Hiding Task Labels

A Gantt chart with task labels defined and shown looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-cosmetics-example-1.js %}

Given below is a brief description of the attributes used to define and set the visibility of the task labels:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showTaskLabels`</td>
    <td>This attribute belongs to the `chart` object and is applicable to all tasks defined under all the `tasks` objects in the JSON data. It is used to specify whether task labels will be rendered on the chart. Setting this attribute to `1` will show task labels, setting it to `0` (default) will hide them. </td>
  </tr>
  <tr>
    <td>`showLabels`</td>
    <td>This attribute belongs to the `tasks` object and is applicable only to the `tasks` object for which it is defined. It is used to specify whether task labels will be rendered on the chart. Setting this attribute to `1` will show task labels, setting it to `0` (default) will hide them.  </td>
  </tr>
  <tr>
    <td>`showLabel`</td>
    <td>It is used to specify whether task labels will be rendered on the chart. Setting this attribute to `1` will show task labels, setting it to `0` (default) will hide them. This attribute belongs to the `task` object and is applicable only to the `task` object for which it is defined.  </td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label for the task, e.g. Promotion Applications.</td>
  </tr>
</table>


## Showing/Hiding Task Start and End Dates

A Gantt chart that demonstrates how you can show and hide task start and end dates looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-cosmetics-example-2.js %}

Given below is a brief description of the attributes used to show/hide task start and end dates:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showTaskStartDate`</td>
    <td>It is used to specify whether the task start date will be shown with the task bar. Setting this attribute to `1` will show the start date, setting it to `0` (default) will hide it. The start date is rendered to the left of the task bar. This attribute belongs to the `charts` object and is applicable to all the tasks defined using all the `tasks` object in the JSON data.</td>
  </tr>
  <tr>
    <td>`showTaskEndDate`</td>
    <td>It is used to specify whether the task end date will be shown with the task bar. Setting this attribute to `1` will show the end date, setting it to `0` (default) will hide it. The end date is rendered to the right of the task bar. This attribute belongs to the `charts` object and is applicable to all the tasks defined using all the `tasks` object in the JSON data.</td>
  </tr>
  <tr>
    <td>`showStartDate`</td>
    <td>It is used to specify whether the task start date will be shown with the task bar. Setting this attribute to `1` will show the start date, setting it to `0` (default) will hide it. The start date is rendered to the left of the task bar. This attribute belongs to the `task` object and is applicable to only the specific object  defined using the `task` object in the JSON data.</td>
  </tr>
  <tr>
    <td>`showEndDate`</td>
    <td>It is used to specify whether the task end date will be shown with the task bar. Setting this attribute to `1` will show the end date, setting it to `0` (default) will hide it. The end date is rendered to the right of the task bar. This attribute belongs to the `task` object and is applicable to only the specific object  defined using the `task` object in the JSON data.</td>
  </tr>
</table>


## Adding and Customizing the Process Header

A Gantt chart with a process header defined and customized looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-cosmetics-example-3.js %}

Given below is a brief description of the attributes used to add and customize process headers:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`headerText`</td>
    <td>It is used to specify the text for the header. e.g. "What to do?"</td>
  </tr>
  <tr>
    <td>`headerAlign`</td>
    <td>It is used to specify the horizontal alignment for the column header. This attribute takes the values `left`, `center`, and `right`.  </td>
  </tr>
  <tr>
    <td>`headerVAlign`</td>
    <td>It is used to specify the vertical alignment for the column header. This attribute takes the values `top`, `middle`, and `bottom`. </td>
  </tr>
  <tr>
    <td>`headerFont`</td>
    <td>It is used to specify the font family to render the process header, e.g. Times New Roman. </td>
  </tr>
  <tr>
    <td>`headerFontSize`</td>
    <td>It is used to specify the font size for the process header, e.g. 72.</td>
  </tr>
  <tr>
    <td>`headerFontColor`</td>
    <td>It is used to specify the hex code for the font color of the process header, e.g. #ACD34E.</td>
  </tr>
  <tr>
    <td>`headerIsBold`</td>
    <td>It is used to specify whether bold formatting should be applied to the process header. Setting this attribute to `1` applies bold formatting, setting it to `0` (default) does not apply it. </td>
  </tr>
  <tr>
    <td>`headerIsItalic`</td>
    <td>It is used to specify whether process header should be italicized. Setting this attribute to `1` will italicize the header, setting it to `0` (default) will not. </td>
  </tr>
  <tr>
    <td>`headerIsUnderline`</td>
    <td>It is used to specify whether the process header should be underlined. Setting this attribute to `1` will underline the header, setting it `0` (default) will not.</td>
  </tr>
</table>


## Adding More Columns to the Data Table

The Social Media Optimization Gantt chart that we have been looking at so far looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-cosmetics-example-4.js %}

The above Gantt chart rendered with an additional "Owner" column looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-cosmetics-example-5.js %}


Because the chart width is relatively small here, a scroll bar comes up and allows the users to scroll through the data table. You can increase the width of data table by:

* Either increasing the chart width

* Or, by setting `ganttWidthPercent` in `chart` object  to a lower value (0-100). This attribute indicates the percent space (width) the Gantt pane takes.

You can also explicitly set the width of each data column using the `width` attribute of the `datacolumn` object. This can be set as a pixel value or as a percentage of the entire data grid width.

<p class="text-info">If you wish to hide the scroll bar of the data column, you can set `showFullDataTable` to `0` (false) in `chart` object. This will wrap &amp; truncate the data labels and try to squeeze them in the required space (only if possible).</p>

## Customizing the Hover Effect

In a Gantt chart, the hover effect is rendered as a vertical/horizontal band when the mouse pointer is hovered over a category/process header. Different ways in which you can customize the hover effect for a Gantt chart are:

1. Customize the hover effect globally

2. Customize the hover effect for processes

3. Customize the hover effect for categories

4. Disable the hover effect

### Customizing the Hovering Effect Globally

A Gantt chart with the hover effect customized globally looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-cosmetics-example-6.js %}

Given below is a brief description of the attributes used to customize the hover effect globally.

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`hoverBandColor`</td>
    <td>It is used to specify the hex code for the hover band color of the `categories` and `processes` objects, e.g. #ABCDEF.</td>
  </tr>
  <tr>
    <td>`hoverBandAlpha`</td>
    <td>It is used to specify the transparency for the hover band of the `categories` and `processes` objects. This attribute takes values between 0 (transparent) and 100 (opaque), e.g. 70.</td>
  </tr>
</table>


### Customizing Hover Effect for Processes

A Gantt chart with the hover effect customized for all processes looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-cosmetics-example-7.js %}

Given below is a brief description of the attributes used to customize the hover effect for processes:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`processHoverBandColor`</td>
    <td>It is used to specify the hex code of the hover band color for all processes, e.g. #AA11A1. This attribute belongs to the `chart` object and is applicable to all processes created using all the `processes` objects in the JSON data. </td>
  </tr>
  <tr>
    <td>`processHoverBandAlpha`</td>
    <td>It is used to specify the transparency of the hover band color for all processes. This attribute takes values between 0 and 100, e.g. 50. This attribute belongs to the `chart` object and is applicable to all processes created using all the `processes` objects in the JSON data. </td>
  </tr>
  <tr>
    <td>`hoverBandColor`</td>
    <td>It is used to specify the hex code of the hover band color for all processes, e.g. #AD34A1. This attribute, when used with the `processes` object, is applicable to all the processes created under the object. When used with the `process` object, it is applicable to only one process created using this object.</td>
  </tr>
  <tr>
    <td>`hoverBandAlpha`</td>
    <td>It is used to specify the transparency of the hover band color for all processes. This attribute takes values between 0 and 100, e.g. 75. This attribute, when used with the `processes` object, is applicable to all the processes created under the object. When used with the `process` object, it is applicable to only one process created using this object.</td>
  </tr>
</table>


### Customizing the Hover Effect for Categories

A Gantt chart customized for the hover effect for categories looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-cosmetics-example-8.js %}

Given below is a brief description of the attributes used to customize the hover effect for categories:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`categoryHoverBandColor`</td>
    <td>It is used to specify the hex code of the hover band color for all categories, e.g. #AA11A1. This attribute belongs to the `chart` object and is applicable to all categories created using all the `categories ` objects in the JSON data. </td>
  </tr>
  <tr>
    <td>`categoryHoverBandAlpha`</td>
    <td>It is used to specify the transparency of the hover band color for all categories . This attribute takes values between 0 and 100, e.g. 50. This attribute belongs to the `chart` object and is applicable to all categories created using all the `categories ` objects in the JSON data. </td>
  </tr>
  <tr>
    <td>`hoverBandcolor`</td>
    <td>It is used to specify the hex code of the hover band color for all categories, e.g. #AD34A1. This attribute, when used with the `categories` object, is applicable to all the categories created under the object. When used with the `category ` object, it is applicable to only one category created using this object.</td>
  </tr>
  <tr>
    <td>`hoverBandAlpha`</td>
    <td>It is used to specify the transparency of the hover band color for all categories. This attribute takes values between 0 and 100, e.g. 75. This attribute, when used with the `categories` object, is applicable to all the categories created under the object. When used with the `category` object, it is applicable to only one category created using this object.</td>
  </tr>
</table>


### Disabling Hover Effects

Given below is a brief description of the attributes used to disable the hover effect:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showHoverEffect`</td>
    <td>It is used to specify whether the hover effect will be enabled for the Gantt chart. Setting this attribute to `0` disables the hover effect, setting it to `1` (default) enables it. To disable hover effects for all categories, processes, tasks, and connectors on the chart, set `"showHoverEffect": "0"` with the `chart` object. Similarly, to disable the hover effect for one or multiple categories/processes, use this attribute with their respective objects.</td>
  </tr>
  <tr>
    <td>`showHoverBand`</td>
    <td>It is used to specify whether the hover effect will be enabled for the color bands. Setting this attribute to `0` will disable the hover effect, setting it to `1` (default) will enable it. This attribute is used when you want to enable the hover effects for the categories and processes only and disable the hover effects for tasks and connectors</td>
  </tr>
</table>