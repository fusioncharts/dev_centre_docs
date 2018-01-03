---
permalink: chart-guide/box-and-whisker-chart/configuring-the-five-summary-numbers.html
title: Configuring the Five Summary Numbers | FusionCharts
description: In this section, you will be shown how you can, show/hide the five summary numbers, customize the median, customize the upper and lower quartiles and customize the minimum and maximum numbers.
heading: Configuring the Five Summary Numbers
chartPresent: true
---

The 'five-number summary' principle is used to plot data on the box and whisker charts. This principle helps to provide a statistical summary for a given set of numbers. It gives information about the range (minimum and maximum numbers), the center (median), and the spread (upper and lower quartiles) for the set of values provided.

FusionCharts Suite XT allows you to customize the five summary numbers and their deviations plotted on a box and a whisker chart according to your requirement.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-the-five-summary-numbers.html#showinghiding-the-five-summary-numbers">Show/hide the five summary numbers</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-the-five-summary-numbers.html#customizing-the-median-q2">Customize the median</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-the-five-summary-numbers.html#customizing-the-upper-and-lower-quartiles-q1-and-q3">Customize the upper and lower quartiles (Q1 and Q3)</a>

* <a href="{{ site.baseurl }}chart-guide/box-and-whisker-chart/configuring-the-five-summary-numbers.html#customizing-the-minimum-and-maximum-numbers-lower-and-upper-whiskers">Customize the minimum and maximum numbers (lower and upper whiskers)</a>

## Showing/Hiding the Five Summary Numbers

A box and whisker chart with three of the five summary numbers - the minimum and maximum numbers and the median - shown looks like this:

{% embed_all chart-guide-box-and-whisker-chart-configuring-the-five-summary-numbers-example-1.js %}

Given below is a brief description of the attributes used to show/hide the five summary numbers:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`showValues`</td>
    <td>It is used to specify whether the five summary numbers will be shown on the box and whisker chart. Setting this attribute to `0` will hide them, setting it to `1` (default) will show them.</td>
  </tr>
  <tr>
    <td>`showMinValues`</td>
    <td>It is used to specify whether the minimum value (or the lower limit) for each data plot will be shown. Setting this attribute to `0` will hide the minimum values, setting it to `1` (default) will show them.

This attribute will work only when `"showValues": "1"`. </td>
  </tr>
  <tr>
    <td>`showMaxValues`</td>
    <td>It is used to specify whether the maximum value (or the upper limit) for each data plot will be shown. Setting this attribute to `0` will hide the maximum values, setting it to `1` (default) will show them.

This attribute will work only when `"showValues": "1"`. </td>
  </tr>
  <tr>
    <td>`showMedianValue`</td>
    <td>It is used to specify whether the median value will be shown. Setting this attribute to `0` will hide the median value, setting it to `1` (default) will show it.

This attribute will work only when `"showValues": "1"`. </td>
  </tr>
  <tr>
    <td>`showQ1Values`</td>
    <td>It is used to specify whether the lower quartile value will be shown or hidden. Setting this attribute to `1` will show the value, setting it to `0` (default) will hide it.

This attribute will work only when `"showValues": "1"`.</td>
  </tr>
  <tr>
    <td>`showQ3Values`</td>
    <td>It is used to specify whether the upper quartile value will be shown or hidden. Setting this attribute to `1` will show the value, setting it to `0` (default) will hide it.

This attribute will work only when `"showValues": "1"`.</td>
  </tr>
</table>






To selectively show summary numbers on the chart, set the `showValues` attribute and the attributes for the values you want to show to `1`. Set the remaining attributes to `0`. For example, if you want to show only the minimum values, use the code snippet shown below:

```javascript
{
    "chart": {
        "caption": "Visits to a Website",
        "subcaption": "In three years",
        "showQ1Values": "0",
        "showQ3Values": "0",
        "showMedianValues": "0",
        "showMinValues": "1",
        "showMaxValues": "1"
    }
}
```

You can also configure the box and whisker chart to show all five summary numbers at once. To do this you can use the code snippet shown below:

```javascript
{
    "chart": {
        "caption": "Visits to a Website",
        "subcaption": "In three years",
        "showQ1values": "1",
        "showQ3values": "1",
        "showMedianValues": "1",
        "showMinValues": "1",
        "showMaxValues": "1"
    }
}
```

## Customizing the Median (Q2)

The median for a set of numbers is represented by a line at the center of the box plot. The median acts as the separator between the upper and lower quartile boxes.

Given below is a brief description of the attributes used to customize the median:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`medianColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the median line.</td>
  </tr>
  <tr>
    <td>`medianThickness`</td>
    <td>It is used to specify the thickness of the median line.</td>
  </tr>
  <tr>
    <td>`medianAlpha`</td>
    <td>It is used to specify the transparency of the median line. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
</table>


<p class="text-info"> All these attributes can be used with the `chart`, `dataset`, and the `data` objects, depending on the requirement. </p>

## Customizing the Upper and Lower Quartiles (Q1 and Q3)

The quartiles of a set of data are spread as two boxes, separated by the median. The roof of the upper quartile box represents the exact value of the upper quartile (Q3) . The base of the lower quartile box represents the exact value of the lower quartile (Q1).

Given below is a brief description of the attributes used to customize the quartile points and the boxes.

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`upperQuartileColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the line that represents the exact value of the upper quartile. This line is the roof of the upper quartile box. </td>
  </tr>
  <tr>
    <td>`upperQuartileThickness`</td>
    <td>It is used to specify the thickness of the upper quartile line. </td>
  </tr>
  <tr>
    <td>`upperQuartileAlpha`</td>
    <td>It is used to specify the transparency of the upper quartile line. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`upperBoxColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the upper quartile box.</td>
  </tr>
  <tr>
    <td>`upperBoxAlpha`</td>
    <td>It is used to specify the transparency of the upper quartile box. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`upperBoxBorderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the two sides of the upper quartile box. </td>
  </tr>
  <tr>
    <td>`upperBoxBorderAlpha`</td>
    <td>It is used to set the transparency of the two sides of the upper quartile box. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`upperBoxBorderThickness`</td>
    <td>It is used to specify the thickness of the two sides of the upper quartile box. </td>
  </tr>
  <tr>
    <td>`lowerQuartileColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the line that represents the exact value of the lower quartile. This line is the roof of the lower quartile box. </td>
  </tr>
  <tr>
    <td>`lowerQuartileThickness`</td>
    <td>It is used to specify the thickness of the lower quartile line. </td>
  </tr>
  <tr>
    <td>`lowerQuartileAlpha`</td>
    <td>It is used to specify the transparency of the lower quartile line. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>  
  <tr>
    <td>`lowerBoxColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the lower quartile box.</td>
  </tr>
  <tr>
    <td>`lowerBoxAlpha`</td>
    <td>It is used to specify the transparency of the lower quartile box. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>  
  <tr>
    <td>`lowerBoxBorderColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the two sides of the lower quartile box. </td>
  </tr>
  <tr>
    <td>`lowerBoxBorderAlpha`</td>
    <td>It is used to set the transparency of the two sides of the lower quartile box. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`lowerBoxBorderThickness`</td>
    <td>It is used to specify the thickness of the two sides of the lower quartile box.</td>
  </tr>
</table>


## Customizing the Minimum and Maximum Numbers (Lower and Upper Whiskers)

The box and whisker chart displays the biggest number of a set of values as the upper whisker and the smallest number of the set as the lower whisker.

Given below is a brief description of the attributes used to customize the whiskers:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`upperWhiskerColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the upper whisker of the data plot. </td>
  </tr>
  <tr>
    <td>`upperWhiskerThickness`</td>
    <td>It is used to specify the thickness of the upper whisker. </td>
  </tr>
  <tr>
    <td>`upperWhiskerAlpha`</td>
    <td>It is used to specify the transparency of the upper whisker. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`lowerWhiskerColor`</td>
    <td>It is used to specify the hex code of the color that will be used to render the lower whisker of the data plot. </td>
  </tr>
  <tr>
    <td>`lowerWhiskerThickness`</td>
    <td>It is used to specify the thickness of the lower whisker. </td>
  </tr>
  <tr>
    <td>`lowerWhiskerAlpha`</td>
    <td>It is used to specify the transparency of the lower whisker. This attribute takes values between 0 (transparent) and 100 (opaque).</td>
  </tr>
  <tr>
    <td>`whiskersLimitsWidthRatio`</td>
    <td>It is used to specify the width of the whiskers in percentage with respect to the width of the box plot.</td>
  </tr>
</table>