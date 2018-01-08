---
permalink: gauge-and-widgets-guide/gantt-chart/creating-simple-gantt-chart.html
title: Creating a Simple Gantt Chart | FusionCharts
description: The Gantt chart is a specialized chart typically used to monitor the progress of a project. This section talks about creating a simple Gantt chart
heading: Creating a Simple Gantt Chart
chartPresent: true
---

The Gantt chart is a specialized chart typically used to monitor the progress of a project.

In this section, you will be shown how you can create a simple Gantt chart.

As an example, you will be shown how to create a Gantt chart  that monitors the various processes and tasks involved in optimizing an organization's reach on the social media.

<p class="text-info"> In order to render gantt chart, include fusioncharts.gantt.js in the project folder with rest of the .js files as mentioned [here](/getting-started/installation). </p>

A Gantt chart created to track the progress of a Social Media Optimization project looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-creating-simple-gantt-chart-example-1.js %}

To create a Gantt chart, you need to:

1. Define the data you want to plot using the Gantt chart

2. Define the visual timeline for the chart

3. Define processes

4. Define tasks

To create the Social Media Optimization Gantt chart, we will use the data shown in the table below:

<table>
  <tr>
    <th>Process Name</th>
    <th>Start Date</th>
    <th>End Date </th>
  </tr>
  <tr>
    <td>Identify Customers</td>
    <td>08/04/2014</td>
    <td>08/10/2014</td>
  </tr>
  <tr>
    <td>Survey 500 Customers</td>
    <td>08/08/2014</td>
    <td>08/19/2014</td>
  </tr>
  <tr>
    <td>Interpret Requirements</td>
    <td>08/19/2014</td>
    <td>09/02/2014</td>
  </tr>
  <tr>
    <td>Market Analysis</td>
    <td>08/24/2014</td>
    <td>09/02/2014</td>
  </tr>
  <tr>
    <td>Brainstorm concepts</td>
    <td>09/02/2014</td>
    <td>09/21/2014</td>
  </tr>
  <tr>
    <td>Define Ad Requirements</td>
    <td>09/21/2014</td>
    <td>10/06/2014</td>
  </tr>
  <tr>
    <td>Design &amp; Develop</td>
    <td>10/06/2014</td>
    <td>01/21/2015</td>
  </tr>
  <tr>
    <td>Mock test</td>
    <td>01/21/2015</td>
    <td>02/19/2015</td>
  </tr>
  <tr>
    <td>Documentation</td>
    <td>01/28/2015</td>
    <td>02/24/2015</td>
  </tr>
  <tr>
    <td>Start Campaign</td>
    <td>02/24/2015</td>
    <td>03/27/2015</td>
  </tr>
</table>


In the above table, we have outlined the various processes involved and the start and end date for each.





The Gantt chart shown above tracks the monthly progress of each proces. Each month here represents a category.  Let’s say you want to monitor both, the quarterly and the monthly progress. In this case, you will have to render the chart with two categories - one for the months and another for the quarters.

The Social Media Optimization Gantt chart rendered with multiple categories looks like this:

{% embed_all {"source": "gauge-and-widgets-guide-gantt-chart-creating-simple-gantt-chart-example-2.js", "id": "2"} %}