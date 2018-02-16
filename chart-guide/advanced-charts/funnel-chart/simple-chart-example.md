---
permalink: gauge-and-widgets-guide/funnel-chart/simple-chart-example.html
title: Simple Funnel Chart Example | FusionCharts
description: A funnel chart is used to show streamlined data; each slice in the funnel represents a process that has filtered out data.
heading: Simple Funnel Chart Example
chartPresent: true
---

A funnel chart is used to show streamlined data; each slice in the funnel represents a process that has filtered out data. The last funnel bears the value that is the final result of the entire procedure.

In this section, you will be shown how you can create a simple funnel chart.

## Creating a Simple Funnel Chart

For our example, we will create a funnel chart that shows the purchase-conversion analysis; it will filter out data to finally show how many people, who visited the website, actually ended up purchasing something from the website.

To create a funnel chart, you will need to define the data to be represented on the chart. For our example, this data is shown in the table below:

<table>
  <tr>
    <th>Process</th>
    <th>Number of People</th>
  </tr>
  <tr>
    <td>Unique Website Visits</td>
    <td>1,460,000</td>
  </tr>
  <tr>
    <td>Programme Details Section Visits</td>
    <td>930,000</td>
  </tr>
  <tr>
    <td>Attempts to Register</td>
    <td>540,000</td>
  </tr>
  <tr>
    <td>Successful Registrations</td>
    <td>210,000</td>
  </tr>
  <tr>
    <td>Logged In</td>
    <td>190,000</td>
  </tr>
  <tr>
    <td>Purchased on Introductory Offers</td>
    <td>120,000</td>
  </tr>
</table>


A funnel chart created to show the above purchase-conversion analysis looks like this:

{% embed_all gauge-and-widgets-guide-funnel-chart-simple-chart-example-example-1.js %}

Given below is a brief description of the attributes used to create a simple funnel chart:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`value`</td>
    <td>It is used to show the numerical value for the data represented by a funnel slice. For example, for the slice representing the "Attempts to Register" process, the value will be 540, 000. This attribute belongs to the `data` object.</td>
  </tr>
  <tr>
    <td>`label`</td>
    <td>It is used to specify the label to be be rendered for a funnel slice, e.g. “Unique Website Visits”. This attribute belongs to the `data` object.</td>
  </tr>
</table>