---
permalink: chart-guide/real-time-charts/feeding-and-retrieving-data-through-api.html
title: Feeding & Retrieving Data Through API | FusionCharts
description: The FusionCharts Suite XT real-time charts let you feed and retrieve data using the JavaScript API, instead of using the data provider page.
heading: Feeding & Retrieving Data Through API
chartPresent: true
---

The FusionCharts Suite XT real-time charts let you feed and retrieve data using the JavaScript API, instead of using the data provider page.

In this section, you will be shown how you can:

* <a href="/chart-guide/real-time-charts/feeding-and-retrieving-data-through-api#feeding-data-using-javascript" class="smoth-scroll">Feed data using the JavaScript API</a>

* <a href="/chart-guide/real-time-charts/feeding-and-retrieving-data-through-api#retrieving--data-using-javascript" class="smoth-scroll">Retrieve data using the JavaScript API</a>

## Feeding Data using JavaScript

When feeding data using the JavaScript API, you need to ensure that the format of the data feed is same as that specified by the real-time data provider page.

You can use the `feedData(strData)` method to feed data to the chart. Here, `strData` is a string value which contains data in exactly the same format as that provided by the real-time data provider page.

A real-time line chart for which data is set using the `feedData(strData)` method is shown below:

{% embed_all advanced-charting-real-time-charts-feeding-and-retrieving-data-through-API-example-1.js %}


In the above data, we:

1. Instantiate the chart without any data and with one dataset.

2. Define a custom function `updateData()` that is invoked with a JavaScript interval - this function builds the data (in the real-time data format) to be specified for the chart. In this code, the function contains a random value for demonstration purposes.

3. Feed data to the chart using the `feedData(strData)` method.

## Retrieving  Data using JavaScript

Real-time charts allow you to get the current view of data (i.e., the data which is currently being shown on the chart) using JavaScript.

Additionally, the charts allow you to track events in JavaScript whenever new data is provided to the chart (either from the real-time data provider page or using JavaScript).

You can get data using:

* the `FC_ChartUpdated()` method

* the `realTimeUpdateComplete` and `realTimeUpdateError` events

* the `getData()` method

### The FC_ChartUpdated() Method

Real-time charts let you track data updates for the real-time chart(s) rendered on a page. You can configure charts to notify you of new data fetches and data updates by calling the `FC_ChartUpdated(DOMId)` JavaScript method.

You can define the `FC_ChartUpdated()` method in your HTML code as shown below:

```javascript
function FC_ChartUpdated(DOMId) {
    //Check if DOMId is that of the chart we want
    if (DOMId == "ChId1") {
        //Get reference to the chart
        var chartRef = FusionCharts(DOMId);
        //Now you can do anything with the chart...
    }
}
```

Whenever a real-time chart (present in this page) receives new data (from the data provider page or the JavaScript `feedData()` method), it will now call the `FC_ChartUpdated()` method and pass its DOM Id to this method.

If you have multiple real-time charts on the same page, you can use the DOMI d to track which chart was updated and based on that, take future actions.

### The realTimeUpdateComplete and realTimeUpdateError Events

The `realTimeUpdateComplete` event is raised every time a real-time chart or gauge completes updating itself with new data.

A sample implementation of the `realTimeUpdateComplete` event is shown below:

```javascript
FusionCharts("mychart").addEventListener("RealtimeUpdateComplete",
    function(event, parameter)
    {
        showData();
    }
);
```

Existing JavaScript implementations using the FC_ChartUpdated event will continue to function without any problem.



The `realtimeUpdateError` event is raised when an error occurs while updating data for a real-time chart or gauge. This event passes the HTTP Status (as number) of the error occurred.



A sample implementation of the `realtimeUpdateError` event is shown below:

```javascript
FusionCharts("mychart").addEventListener("RealtimeUpdateError",
    function(event, parameter)
    {
        document.getElementById('ErrorView').innerHTML = "Problem occurred while updating real-time data. The error status code is" + parameter.httpStatus;
    }
);
```

### The getData() Method

For any real-time chart present in the HTML page, you can use the `getData()` method to get the current chart data in a JavaScript array.

A real-time column chart configured to retrieve data using the `getData()` method is shown below:

{% embed_all advanced-charting-real-time-charts-feeding-and-retrieving-data-through-API-example-2.js %}

The following code snippet shows how you can use the `getData()` method for the above chart:

```html
function showData() {
    //Retrieving the data
    var dataArr = FusionCharts("mychart").getData(),
        i,
        str = "";
    //Creating the table format
    str += '<table border="1" cellpadding="1" cellspacing="0" bordercolor="#cccccc" width="100%">';
    str += '  <tr>';
    str += '      <td width="50%" class="fontBold valueFont">Time</td>';
    str += '      <td width="50%" class="fontBold valueFont">Customers</td>';
    str += '  </tr>';

    //Preparing html string to create the table with data
    for (i = 0; i < dataArr.length; i++) {
        if (dataArr[i][0] !== null) {
            str += '  <tr>';
            str += '      <td width="50%" class="valueFont">' + dataArr[i][0] + '</td>';
            str += '      <td width="50%" class="valueFont">' + dataArr[i][1] + '</td>';
            str += '  </tr>';
        }
    }
    str += '</table>';
    //Adding html string in the div container
    document.getElementById('tableView').innerHTML = str;
}
```

Whenever the data for a chart with the `myChart` ID updates in the page, the `showData()` function is invoked. This function gets the new data for the chart in a JavaScript array using the `getData()` method. The `showData()` function then creates an HTML table and renders the new data in that table.

The structure of the JavaScript array returned by the `getData()` function is shown below:

<table>
  <tr>
    <td>[0,0] - Empty </td>
    <td>[0,1]- Dataset series name </td>
    <td>[0,2] - Dataset series name</td>
    <td>[0,n] - Dataset series name</td>
  </tr>
  <tr>
    <td>[1,0] - Category label of data index 1</td>
    <td>Data for dataset [1] data index [1]</td>
    <td>Data for dataset [2] data index [1]</td>
    <td>Data for dataset [n] data index [m]</td>
  </tr>
  <tr>
    <td>,0] - Category label of data index 2</td>
    <td>Data for dataset [1] data index [2]</td>
    <td>Same as above</td>
    <td>Same as above</td>
  </tr>
  <tr>
    <td>[m,0] - Category label of data index m</td>
    <td>Data for dataset [n] data index [m]</td>
    <td>Same as above</td>
    <td>Same as above</td>
  </tr>
  <tr>
    <td>[m,0] - Category label of data index m</td>
    <td>Same as above</td>
    <td>Same as above</td>
    <td>Same as above</td>
  </tr>
  <tr>
    <td>[m,0] - Category label of data index m</td>
    <td>Same as above</td>
    <td>Same as above</td>
    <td>Same as above</td>
  </tr>
</table>


When you click the `Get Data` button rendered below the chart, the HTML table is populated with data updates as shown below:

<table>
  <tr>
    <th>Time</th>
    <th>Customers</th>
  </tr>
  <tr>
    <td>14:37:22</td>
    <td>13</td>
  </tr>
  <tr>
    <td>14:37:27</td>
    <td>16</td>
  </tr>
  <tr>
    <td>14:37:32</td>
    <td>6</td>
  </tr>
  <tr>
    <td>14:37:37</td>
    <td>16</td>
  </tr>
  <tr>
    <td>14:37:42</td>
    <td>7</td>
  </tr>
  <tr>
    <td>14:37:47</td>
    <td>16</td>
  </tr>
  <tr>
    <td>14:37:52</td>
    <td>7</td>
  </tr>
  <tr>
    <td>14:37:57</td>
    <td>16</td>
  </tr>
  <tr>
    <td>14:38:02</td>
    <td>11</td>
  </tr>
  <tr>
    <td>14:38:07</td>
    <td>19</td>
  </tr>
</table>


Using the methods explained above, you can build a wide variety of interactive AJAX driven applications. You can use the chart as an interface to retrieve the data and then handle it in your JavaScript code.