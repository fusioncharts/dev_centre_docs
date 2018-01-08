---
permalink: advanced-chart-configurations/drill-down/set-chart-as-hotspot.html
title: Setting the Chart as a Hotspot | FusionCharts
description: FusionCharts Suite XT enables you to render the entire chart as one clickable hotspot.
heading: Setting the Chart as a Hotspot
chartPresent: true
---

FusionCharts Suite XT enables you to render the entire chart as one clickable hotspot. A prominent example of a chart rendered as a hotspot is showing a thumbnail image of the chart, which, when clicked, will open as its maximized version.

In this section, you will be shown how you can set a chart as a hotspot.

A column 2D chart rendered as a hotspot is shown below:

{% embed_all interactivity-drill-down-set-chart-as-hotspot-example-1.js %}

Clicking anywhere on this chart redirects you to the FusionCharts home page in a new browser tab.

Given below is a brief description of the attribute used to render the chart as a hotspot:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`clickURL`
</td>
    <td>It is used to specify the target URL to which the user is redirected to when the chart is clicked.

By default, the target URL opens in the same browser page as the chart. To open it in a new page, prepend `n-` to the URL.</td>
  </tr>
</table>


You can configure the target URL to:

* open in [the same window]{% linkTo tutorials/advanced-charting/drill-down/simple-drill-down.md %}

* open in [a new window]{% linkTo tutorials/advanced-charting/drill-down/simple-drill-down.md %}

* open in [another frame]{% linkTo tutorials/advanced-charting/drill-down/opening-in-pop-up-or-frames.md %}

* open [in a new pop-up window]{% linkTo tutorials/advanced-charting/drill-down/opening-in-pop-up-or-frames.md %}

* invoke existing [JavaScript functions]{% linkTo tutorials/advanced-charting/drill-down/linkedcharts.md %} defined within the same page

<p class="text-info"> If you set the entire chart as hotspot, the other links on the chart (individual links for data plots) will not work.  </p>

<p class="text-info">Internally the chart decodes the URL that you set as the link. Before invoking the link, it again encodes the URL. If you are passing multilingual characters via a URL or do not want this decode-encode mechanism to be handled by the chart, you can use the `unescapeLinks` attribute as shown in the code snippet below :
```
{
    "chart" : {
        "unescapeLinks" : "0"
        ...
    }
    ...
}
```
</p>

### Creating a Thumbnail of the Chart

An example of creating thumbnails for charts is shown below:

{% embed_all interactivity-drill-down-set-chart-as-hotspot-example-2.js %}

In the example above, a column 2D chart shows the monthly revenue for the last year at Harry’s SuperMart. To the left of the column 2D chart are three thumbnails - one for a column 2D chart, one for a pie chart, and one for a bar 2D chart. When a thumbnail is clicked, the monthly revenue data for Harry’s SuperMart is shown using the chart type in the thumbnail.

<p class="text-info"> The code above shows clones of the existing chart being created. FusionCharts Suite XT v3.5.0 supports the `clone()` method that allows you to render a copy of an existing chart - one that displays the same data with a different chart type. This saves you from writing the code multiple times to render it with different chart types.</p>