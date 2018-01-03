---
permalink: using-with-javascript-libraries/jquery/rendering-charts-from-html-tables.html
title: Rendering Charts from HTML Tables | FusionCharts
description: The FusionCharts jQuery helper exposes methods for rendering charts, where the FusionCharts constructor object is passed as argument to the rendering methods
heading: Rendering Charts from HTML Tables
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts JQuery Helper can be downloaded from <a href="http://www.fusioncharts.com/jquery-charts" target="_blank">here</a>.</p>

The FusionCharts jQuery helper exposes [methods for rendering charts]{% linkTo tutorials/using-with-javascript-libraries/jquery/rendering-charts-using-jquery.md %}, where the FusionCharts constructor object is passed as an argument to the rendering methods.

An additional feature provided by the jQuery helper is the ability to convert a table containing numeric data into a relevant chart type. That is, instead of a JSON or XML data, your data source can be an HTML table.

The following example converts the table shown to a multi-series column chart:

<table id="dataTable">
    <tbody>
        <tr>
            <th>Month</th>
            <th>2012</th>
            <th>2013</th>
        </tr>
        <tr>
            <td>January</td>
            <td>400</td>
            <td>800</td>
        </tr>
        <tr>
            <td>February</td>
            <td>600</td>
            <td>320</td>
        </tr>
        <tr>
            <td>March</td>
            <td>540</td>
            <td>740</td>
        </tr>
        <tr>
            <td>April</td>
            <td>430</td>
            <td>650</td>
        </tr>
        <tr>
            <td>May</td>
            <td>350</td>
            <td>650</td>
        </tr>
        <tr>
            <td>June</td>
            <td>420</td>
            <td>750</td>
        </tr>
        <tr>
            <td>July</td>
            <td>430</td>
            <td>760</td>
        </tr>
        <tr>
            <td>August</td>
            <td>490</td>
            <td>550</td>
        </tr>
        <tr>
            <td>September</td>
            <td>480</td>
            <td>640</td>
        </tr>
        <tr>
            <td>October</td>
            <td>450</td>
            <td>650</td>
        </tr>
        <tr>
            <td>November</td>
            <td>440</td>
            <td>640</td>
        </tr>
        <tr>
            <td>December</td>
            <td>600</td>
            <td>820</td>
        </tr>
    </tbody>
</table>

<div id="chart-container"></div>

<input style="margin: 10px 10px 10px 0;" type="button" id="convert" value="Create chart from table" />

The data structure for this example is shown below:

```javascript
$("#dataTable").convertToFusionCharts({
    type: "mscolumn2d",
    width: "700",
    height: "350",
    dataFormat: "htmltable",
    renderAt: "chart-container"
}, {
    "chartAttributes": {
        caption: "Units sold for last 2 years",
        xAxisName: "Month",
        yAxisName: "Units",
        bgColor: "FFFFFF",
        theme: "fint"
    }
});
```

The `convertToFusionCharts` method is used to convert the data contained in the table to the JSON/XML format, in which data is consumed by the chart. It is important to provide a valid chart container in the `renderAt` parameter in the chart configuration. If `renderAt` is not provided then the chart will be drawn next to the table. The return value of the function is a jQuery object containing all the newly created instances of FusionCharts.

Refer [here]{% linkTo tutorials/using-with-javascript-libraries/jquery/api-reference.md %}{:target='_blank'} for more details on this method.

<script pagespeed_no_defer="" type="text/javascript" data-chart='true' src='{{ site.baseurl }}/resources/js/rendering-charts-from-html-tables.js'></script>
