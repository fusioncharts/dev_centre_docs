---
permalink: gauge-and-widgets-guide/gantt-chart/adding-milestones-to-a-chart.html
title: Adding Milestones to a Chart | FusionCharts
description: Milestones, an important part of Gantt chart as they allow you to visually depict any crucial dates. Create your milestones on chart based on dates and tasks
heading: Adding Milestones to a Chart
chartPresent: true
---

Milestones are an important part of the Gantt chart as they allow you to visually depict any crucial dates on the chart. You can create your own milestones on the chart based on dates and tasks, i.e., for a given task you can specify milestones on specific dates. You can also customize all the visual properties of the milestone including the shape (star or polygon), size, and colors. Additionally, you can add tool text for the milestone.

In this section, you will be shown how you can add milestones to a chart.

To add a milestone to the chart, you need to:

* Decide the task to which your milestone relates.

* Decide the date for the milestone.

As an example, we will add milestones to the "Social Media Optimization" Gantt chart to show the completion of development and the successful completion of the campaign.

A Gantt chart with milestones added looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-milestones-to-a-chart-example-1.js %}

Given below is a brief description of the attributes used to add a milestone:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`date`</td>
    <td>It is used to specify the date for the milestone. <br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object.</td>
  </tr>
  <tr>
    <td>`taskId`</td>
    <td>It is used to specify the ID representing that task to which the milestone relates.<br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object.</td>
  </tr>
  <tr>
    <td>`color`</td>
    <td>It is used to specify the hex code of the color that will be used to render the milestone.<br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object.</td>
  </tr>
  <tr>
    <td>`shape`</td>
    <td>It is used to specify the shape of the milestone.<br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object.</td>
  </tr>
  <tr>
    <td>`toolText`</td>
    <td>It is used to specify the tool-tip text that will be rendered when the mouse pointer is hovered over it.<br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object.</td>
  </tr>
  </table>

## Adding Custom Milestone Labels

  You can add custom labels for milestones on a Gantt chart, as shown in the chart below:

{% embed_all gauge-and-widgets-guide-gantt-chart-adding-milestones-to-a-chart-example-2.js %}

  Given below is a brief description of the attributes used to add custom labels for milestones:

  <table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr> 
    <td> `label` </td>
    <td> It is used to define a custom label for the milestone. <br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object.</td>
  </tr>
  <tr> 
  <td> `font` </td>
  <td> It is used to set the font for the milestone label. <br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object. </td>
  </tr>
  <tr> 
  <td> `fontSize` </td>
  <td> It is used to set the font size for the milestone label. <br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object. </td>
  </tr>
  <tr> 
  <td> `fontColor` </td>
  <td> It is used to set the font color for the milestone label. <br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object. </td>
  </tr>
  <tr> 
  <td> `fontBold` </td>
  <td> It is used to set whether the milestone label will be formatted in bold. <br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object. </td>
  </tr>
  <tr> 
  <td> `fontItalic` </td>
  <td> It is used to set whether the milestone label will be formatted in italics. <br> <br> __Note__: This attribute belongs to the `milestone` object, which belongs to the `milestones` object. </td>
  </tr>
  <tr> 
  <td> `milestoneFont` </td>
  <td> It is used to set the font for the milestone label. <br> <br> __Note__: This attribute belongs to the `chart` object. </td>
  </tr>
  <tr> 
  <td> `milestoneFontSize` </td>
  <td> It is used to set the font size for the milestone label. <br> <br> __Note__: This attribute belongs to the `chart` object. </td>
  </tr>
  <tr> 
  <td> `milestoneFontColor` </td>
  <td> It is used to set the font color for the milestone label. <br> <br> __Note__: This attribute belongs to the `chart` object. </td>
  </tr>
  <tr> 
  <td> `milestoneFontBold` </td>
  <td> It is used to set whether the milestone label will be formatted in bold. <br> <br> __Note__: This attribute belongs to the `chart` object. </td>
  </tr>
  <tr> 
  <td> `milestoneFontItalic` </td>
  <td> It is used to set whether the milestone label will be formatted in italics. <br> <br> __Note__: This attribute belongs to the `chart` object. </td>
  </tr>
</table>

Take a look at the chart data in the JSON tab in the live chart above to see how these attributes are used.