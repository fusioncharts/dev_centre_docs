---
permalink: advanced-chart-configurations/drill-down/simple-drill-down.html
title: Creating Simple Drill-down Charts | FusionCharts
description: Using FusionCharts Suite XT, you can create endless levels of drilldown. It has been kept very generic to accommodate all types of requirements.
heading: Creating Simple Drill-down Charts
chartPresent: true
---

FusionCharts Suite XT can be easily and extensively used to create drill-down charts. All charts (except for the Zoom line chart) support the drill-down interactivity for data elements - that is, for each chart type, the data plots in a chart (columns in column charts, pie slices in pie charts etc.) can act as hot-spots.

Using FusionCharts Suite XT, you can create endless levels of drilldown. It has been kept very generic to accommodate all types of requirements.

The drill-down interactivity supports two types of links for data plots:

* **Simple links**: Drill-down to open simple URLs or call JavaScript functions (defined within the same page)
Simple links are links that:

* open in the same page

* open in a new page

* open in a specified [frame](/advanced-charting/drill-down/opening-in-pop-up-or-frames)

* open in a new [pop-up window](/advanced-charting/drill-down/opening-in-pop-up-or-frames)

* render the [whole chart as a hotspot](/advanced-charting/drill-down/set-chart-as-hotspot)

* **Chart links** (*Linked Charts*): Drill down to detailed [*LinkedCharts*](/advanced-charting/drill-down/linkedcharts) that show data at different levels of detail*.*

In this section, we will look at how you can define simple links that open in the same page and links that open on a new page.

## Defining Simple Links that Open in the Same Page

A column 2D chart configured with simple links that open in the same page is shown below:

{% embed_all interactivity-drill-down-simple-drill-down-example-1.js %}

In the above chart, every time any of the three data plots is clicked, the user is navigated to the FusionCharts home page, which opens in the same page.

Given below is a brief description of the attribute used to define a simple link for a data plot:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`link`
</td>
    <td>It is used to specify the URL of the page to which the user is redirected to when a data plot is clicked. This attribute belongs to the `data` object and is specified for each data plot that is clickable.</td>
  </tr>
</table>






<p class="text-info"> If you have special characters (`?`, `&` etc.) in your link, make sure that your link is in the URL Encoded format. Every time you click a data plot, FusionCharts Suite XT decodes the link and invokes the URL.

All server-side scripting languages provide a generic function to URL Encode any string - for example, the `server.URLEncode(strURL)` method in ASP and ASP.NET.</p>

## Defining Simple Links that Open in a New Page

A column 2d chart configured with simple links that open in a new page is shown below:

{% embed_all interactivity-drill-down-simple-drill-down-example-2a.js %}

Every time any of the three data plots is clicked, the FusionCharts home page opens in a new tab of the browser.

To open a link in a new page, the URL passed as the value for the `link` attribute is preceded by `n-`. For example, `n-[http://fusioncharts.com](http://fusioncharts.com)`.





<p class="text-info">Internally the chart decodes the URL that you set as the link. Before invoking the link, it again encodes the URL. If you are passing multilingual characters via a URL or do not want this decode-encode mechanism to be handled by the chart, you can use the `unescapeLinks` attribute as shown in the code snippet below :

```javascript
{
    "chart": {
        "unescapeLinks": "0"
        ...
    }
    ...
}


```

</p>