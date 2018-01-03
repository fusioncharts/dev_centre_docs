---
permalink: using-with-javascript-libraries/jquery/updating-chart-properties-using-jquery.html
title: Updating Chart Properties Using jQuery | FusionCharts
description: The FusionCharts jQuery helper can be used to retrieve and update chart data and properties, for example, the chart type, width, height, caption, and so on
heading: Updating Chart Properties Using jQuery
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts JQuery Helper can be downloaded from <a href="http://www.fusioncharts.com/jquery-charts" target="_blank">here</a>.</p>

The FusionCharts jQuery helper can be used to retrieve and update chart data and properties, for example, the chart type, width, height, caption, background color, and so on. dynamically at run-time. This feature is useful when you wish to change chart titles, theme colors, number formatting or scaling setup, divisional line and grid configurations, or any other functional and cosmetic features of an existing chart.

<p class="text-info">While the API allows you to update selective configurations and properties, internally the entire chart is redrawn.</p>

The methods in the jQuery helper that let you retrieve and update chart data and properties are:

<table>
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`updateFusionCharts`</td>
    <td>It helps in updating configurations of existing charts at run-time, Except for `id`, you can update all other configuration parameters.</td>
  </tr>
  <tr>
    <td>`attrFusionCharts`</td>
    <td>It helps in retrieving and updating the values of chart attributes that belong to the `chart` object.</td>
  </tr>
</table>


In this section, you will be shown how you can use each of these methods.

## The updateFusionCharts Method

The `updateFusionCharts` method accepts new configuration values as a set of key-value pairs.  To understand how this method works, we will look at how you can:

* <a href="{{ site.baseurl }}using-with-javascript-libraries/jquery/updating-chart-properties-using-jquery.html#changing-the-type-of-an-existing-chart">Change the type of an existing chart</a>

* <a href="{{ site.baseurl }}using-with-javascript-libraries/jquery/updating-chart-properties-using-jquery.html#changing-the-data-for-an-existing-chart">Change the data for an existing chart</a>

* <a href="{{ site.baseurl }}using-with-javascript-libraries/jquery/updating-chart-properties-using-jquery.html#changing-the-width-and-the-height-at-run-time">Change the width and height of an existing chart</a>

### Changing the Type of an Existing Chart

An example that updates the chart type dynamically is shown below:

{% embed_chart using-with-javascript-libraries-jquery-updating-chart-properties-using-jquery-example-1.js %}

In the above chart, the chart type is changed dynamically when the corresponding radio button is selected. The code snippet used to change the chart type is shown below:

```html
<div id="chart-container">FusionCharts will render here</div>
<div id="controllers">
    <label><input name='chart-type' id='line' type='radio' value='line' /> Line chart</label>
    <label><input name='chart-type' id='bar2d' type='radio' value='bar2d' /> Bar chart</label>
    <label><input name='chart-type' checked id='column2d' type='radio' value='column2d' /> Column chart</label>
</div>
```

```javascript
$('#chart-container').insertFusionCharts({
    type: 'column2d',
    id: 'type-chart',
    width: '500',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            ...
        },
        "data": [...]
    }
});

$('input').click(function() {
    $('#chart-container').updateFusionCharts({
        'type': $(this).attr('value')
    });
});
```

### Changing the Data for an Existing Chart

When the value of the `dataFormat` attribute is set to `jsonurl`, the value of the `dataSource` attribute is the path of a JSON file that contains the data for the chart. At any time, we can change the chart data by simply changing the file referenced in the `dataSource` attribute.

The code snippet below shows how the `dataSource` can be updated for an existing chart:

```javascript
$("#chart-container1").updateFusionCharts({dataSource: 'MyNewChart.json', dataFormat: 'jsonURL'});
```

### Changing the Width and the Height at Run-time

An example that shows how you can change the chart width and height at run-time is shown below:

{% embed_chart using-with-javascript-libraries-jquery-updating-chart-properties-using-jquery-example-2.js %}

The code snippet used to do this is shown below:

```javascript
$('#chart-container').insertFusionCharts({
    type: 'column2d',
    id: 'wh-chart',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            ...
        },
        "data": [...]
    }
});

// Get chart object
var revenueChart = FusionCharts.items['wh-chart'];

// resize the chart by attaching functions to buttons that increase or
// decrease chart dimensions
$("#wplus").click(function() {
    $('#chart-container').updateFusionCharts({
        'width': Number(revenueChart.width) + 20
    });
});

$("#wminus").click(function() {
    $('#chart-container').updateFusionCharts({
        'width': Number(revenueChart.width) - 20
    });
});

$("#hplus").click(function() {
    $('#chart-container').updateFusionCharts({
        'height': Number(revenueChart.height) + 20
    });
});

$("#hminus").click(function() {
    $('#chart-container').updateFusionCharts({
        'height': Number(revenueChart.height) - 20
    });
});
```

## The attrFusionCharts Method

The `attrFusionCharts` method can be used to retrieve or update the value of a chart attribute.

To get the current value of a chart attribute, you can pass the name of the attribute as a string parameter to the `attrFusionCharts` method.

The code snippet below retrieves the value of the caption attribute of a chart:

```javascript
$('#chart-container’).attrFusionCharts('caption’);
```

You can also set values of chart attributes using this method. The example below shows how you can set the chart caption:

{% embed_chart using-with-javascript-libraries-jquery-updating-chart-properties-using-jquery-example-3.js %}

The code snippet for this example is shown below:

```javascript
$('#chart-container').insertFusionCharts({
    type: 'column2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    id: 'caption-chart',
    dataSource: {
        "chart": {
           ...
        },
        "data": [...]
    }
});

// Set text field value by getting chart's caption
$('#caption').attr('value', $('#chart-container').attrFusionCharts('caption'));

// Set chart caption
$('#update').click(function() {
    $('#chart-container').attrFusionCharts({
        'caption': document.getElementById('caption').value
    });
});
```