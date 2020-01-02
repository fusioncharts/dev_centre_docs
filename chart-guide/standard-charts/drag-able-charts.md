---
title: Learn to create Drag-able Charts for Web & Mobile
description: Drag-able Charts are used to visually manipulate the data on a chart in Real-Time. Learn how to make interactive drag charts with customized axis limits, divisional lines, data retrieval and much more.
heading: Drag-able Charts
---

> These chart types belong to **PowerCharts XT**.

Drag-able charts are a special set of charts that allow you to visually manipulate the data on a chart and then submit it back. These charts can be used intensively for simulations, financial planning, etc. Drag-able charts allow you to visually morph the data to update the figures in the chart. These charts derive their basic features from the multi-series column, the multi-series line, and the multi-series area charts.

FusionCharts Suite XT offers the following three types of drag-able charts:

* Drag-able column 2D Chart

* Drag-able line 2D Chart

* Drag-able area 2D Chart

## Drag-able Column 2D Chart

Let's create our first **drag-able column 2D** chart showcasing the actual and estimated inventory status for the top five food items at Bakersfield Central.

To create a drag-able column 2D chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a drag-able chart, set `dragcolumn2D`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Set the `allowDrag` attribute to specify whether the data plots representing a dataset will be drag-able. Set this attribute to `0` to disable the data plots from being drag-able, and set it to `1` (default) to enable them to be drag-able. This attribute belongs to the `dataset` object and makes all data plots for a dataset drag-able.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=dragcolumn2d) page of drag-able column 2D chart.

The drag-able column 2D chart for the above code looks like:

{% embed_all standard-charts-drag-able-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/8JNRQ/) to edit the above drag-able chart.

In the above chart, the data plots representing the estimated value are drag-able.

The above sample also shows an external table with the values from the 'Estimated Demand' dataset. As soon as a value is updated on the chart, the table gets updated as well. This is done by retrieving the updated values using the `dataPlotDragEnd` event.

Observe that there is also a `Restore` button on the chart. When the restore button is clicked, all data is reset to its original values. This is done using the `dataRestored` event.

Once you are done with the visual updating of data, you can submit the data, either back to the server as form data (like HTML Forms), or, to JavaScript functions present on the same page as the chart. These JavaScript functions can then process the data and do the needful.

## Drag-able Line 2D Chart

To render a drag-able line 2D chart, change the value of the `type` attribute from `dragcolumn2d` to `dragline`. 

This sample will showcase the quarterly sales for Apple and Samsung. The anchors will represent the sales estimates for Apple and Samsung for Q3 and Q4 are drag-able. Recall that in the above drag-able column 2D chart we have configured all the data plots for one dataset to be drag-able. In this chart, however, we have made only selected data points of all datasets drag-able.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=dragline) page of drag-able line 2D chart.

A drag-able line 2D chart created to plot the quarterly sales for Apple and Samsung looks like:

{% embed_all standard-charts-drag-able-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/8Fq44/) to edit the above drag-able chart.

## Drag-able Area 2D Chart

To render a drag-able area 2D chart, change the value of the `type` attribute from `dragline` to `dragarea`. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=dragarea) page of drag-able area 2D chart.

A drag-able area 2D chart thus created looks like:

{% embed_all standard-charts-drag-able-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/2atfY/) to edit the above drag-able chart.

Now, let's customize the appearance and properties of the charts. 

## Change Axis Limits

The chart, by default, calculates the y-axis upper and lower limits based on the data provided to it. To let the column assume a value not covered within this axis range, increase or decrease the limits using the menu button at the top-right of the chart. 

Click the menu button, a pop-up with the options to increase or decrease the upper and lower limits appears.

Select any of the above options, to increase or decrease the chart limits using auto-calculated intervals. 

![Change Axis Limits](/gif/standard-charts-drag-able-charts-gif-1.gif)

However, to set manual values for the upper/lower limits, click the limits and edit them directly.

![Change Axis Limits Manually](/gif/standard-charts-drag-able-charts-gif-2.gif)

> If you enter a limit value which cannot be accepted by the chart, the value will turn red to indicate that the value can not be accepted as shown below:

![Set wrong axis limits](/gif/standard-charts-drag-able-charts-gif-3.gif)

## Manage Chart Limits using JavaScript API

With FusionCharts Suite XT, you can set and retrieve the charts' upper and lower limits using JavaScript APIs. Some of the methods to set and retrieve the charts' limits are given below:

* `setUpperLimit()` - Set this attribute to specify the new upper limit for the chart. It takes a numeric value for the limit as the parameter. If the value is greater than the maximum value of all the data plots of the chart, the chart sets the new upper limit of the chart and returns true. If the value is less than the maximum value of the data plots, the chart does not set the upper limit and returns false.

* `setLowerLimit()` - Set this attribute to specify the new lower limit for the chart. It takes a numeric value for the limit as the parameter. If the value is less than the minimum value of all the data plots of the chart, the chart sets the new lower limit of the chart and returns true. If the value is greater than the minimum value of the data plots, the chart does not set the lower limit and returns false.

* `getUpperLimit()` - Set this attribute to return the current upper limit of the chart.

* `getLowerLimit()` - Set this attribute to return the current lower limit of the chart.

Refer to the code given below:

```json
events: {
    'rendered': function(evtObj, argObj) {
        var chartIns = evtObj.sender,
            chartMaxLimit = chartIns.getUpperLimit(),
            chartMinLimit = chartIns.getLowerLimit();
            document.getElementById('max-limit').value = chartMaxLimit;
            document.getElementById('min-limit').value = chartMinLimit;
    },
    'beforeRender': function(evt, args) {
        if (!document.getElementById('controllers')) {
            var controllers = document.createElement('div'),
            chartRef = evt.sender,
            maxBtn,
            minBtn,
            maxTxtFld,
            minTxtFld,

            setMaxLimit = function() {
                var maxLimit = maxTxtFld.value,
                crntLimit = chartRef && chartRef.getUpperLimit(),
                status;
                if (maxLimit != crntLimit) {
                    status = chartRef && chartRef.setUpperLimit(maxLimit);
                    if (status) {
                        alert('Max limit updated successfully');
                    } else {
                        maxTxtFld.value = crntLimit;
                        alert('Max limit could not be updated!')
                    }
                }
            },
            setMinLimit = function() {
                var minLimit = minTxtFld.value,
                crntLimit = chartRef && chartRef.getLowerLimit(),
                status;
                if (minLimit != crntLimit) {
                    status = chartRef && chartRef.setLowerLimit(minLimit);
                    if (status) {
                        alert('Min limit updated successfully');
                    } else {
                        minTxtFld.value = crntLimit;
                        alert('Min limit could not be updated!')
                    }
                }
            };
            controllers.setAttribute('id', 'controllers');

            // Create elements inside div
            controllers.innerHTML = '<div id="controllers" style="margin-left: 20px;font-weight:bold;"><p>Reset values to update limits.<p><div style="padding-top: 10px;"><span><input type="text" id="max-limit" style="max-width: 100px;font-weight: bold; margin-bottom:0px !important;"/><input type="button" id="max-btn" style="font-size: 16px; margin-left: 5px; margin-top: 0px; padding: 2px 5px; width:120px;" value="Set Max Value"/></span></div><div style="padding-top: 10px;"><span><input type="text" id="min-limit" style="max-width: 100px;font-weight: bold; margin-bottom:0px !important;"/><input type="button" id="min-btn" style="font-size: 16px; margin-left: 5px; margin-top: 0px; padding: 2px 5px; width:120px;" value="Set Min Value"/></span></div></div>';
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);\\
            maxBtn = document.getElementById('max-btn');
            minBtn = document.getElementById('min-btn');
            maxTxtFld = document.getElementById('max-limit');
            minTxtFld = document.getElementById('min-limit');

            //Add listener to buttons
            if (maxBtn.addEventListener) {
                maxBtn.addEventListener("click", setMaxLimit);
                minBtn.addEventListener("click", setMinLimit);
            } else {
                maxBtn.onclick && maxBtn.onclick(setMaxLimit);
                minBtn.onclick && minBtn.onclick(setMinLimit);
            }
        }
    }
}
```

A drag-able area chart configured to manage chart limits using JavaScript API looks like:

{% embed_chart standard-charts-drag-able-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/r8fgby9g/) to edit the above drag-able chart.

## Snap to the Nearest Divisional Lines

Limit the dragging of data plots with respect to the divisional lines on the chart i.e. you can configure a data plot to snap to the nearest divisional line if it falls within a specified distance of the divisional line.

To snap to the nearest divisional lines, follow the steps given below:

* Specify the `snapToDivOnly` attribute to set the dragging of the data points till the nearest divisional lines on the chart. The data points cannot acquire a value between any two divisional lines and, as such, they will always fall on divisional line value.

* When dragging the area plots, snap them to the nearest divisional line on the chart. To do so, just set the `snapToDiv` attribute as 1. The difference between this attribute and the `snapToDivOnly` attribute is that `snapToDivOnly` attribute (when set to 1) allows you to drag the data points onto a div line. But using this attribute, you can create a "sticky" kind of interface, so that when the data point is dropped near a divisional line, it assumes the divisional line value. However, if it is dropped at a farther location, it will stay where it is.

* Set the `snapToDivRelaxation` attribute to specify the distance in pixels from the divisional lines where the data points will behave sticky.
**Note**: This attribute works only when the `snapToDiv` attribute is set to `1`.

* Set the `doNotSnap` attribute to `1`, which will not allow the data points stick to the div lines. Setting this attribute to `0` will allow them to stick.

Refer to the code given below:

```json
{
    "chart": {
        "snapToDiv": "1",
        "snapToDivRelaxation": "5"
    }
}
```

A drag-able column chart configured for snapping to the nearest div interval looks like this:

{% embed_chart standard-charts-drag-able-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/oq5vqv7n/) to edit the above drag-able chart.

## Retrieve a Dataset

A drag-able column 2D chart can be configured to retrieve JSON data and render it in an alert window. `getJSONData` function needs to be called on an existing chart. It fetches data that has been set on the chart in the JSON format. Calling this function on a chart with no data set will return an empty `{  }` object.

The chart retrieving datasets looks like this:

{% embed_chart standard-charts-drag-able-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/d6cLm0em/) to edit the above drag-able chart.

A drag-able column 2D chart can also be configured to retrieve a data in XML and CSV format. The function to retrieve them are:

* `getXMLData` - Set this function to fetch data that has been set on a chart in the XML format. This function needs to be called on an existing chart. If this function is called on a chart which has no data set on it, it returns an empty `<chart />` element as a string.

* `getCSVData` - Set this function to fetch data that has been set on a chart in the CSV format. The data returned is the closest possible comma-separated value representation that has been provided to the chart. The exported data does not contain any functional or cosmetic attribute that was set on the chart.

Rest of the data structure remains the same as that of JSON format.

## Retrieve Data using getDataWithID() Function

The `getDataWithID()` function returns a three-dimensional array that contains the data and the dataset IDs. Once the reference for the chart is obtained, this function can be invoked to retrieve data.

A drag-able column chart configured to retrieve data using the `getDataWithID()` function looks like this:

{% embed_chart standard-charts-drag-able-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/cvcn499t/) to edit the above drag-able chart.

The data returned by the `getDataWithID()` function is without any editing.

The key pointers of this method are:

* [0,0] index of the array is empty.

* The first row in the array returned contains the series name of each dataset placed horizontally (sequentially).

* The first column in the array returned contains the labels of all the categories.

* The remaining columns map to their respective category and dataset. For each data, its id and last updated value on the chart are returned. In our example, because we have not changed any data visually on the chart, it is showing the original data.

Given below is the structure of the three-dimensional array returned by this function:

<table>
  <tr>
    <th>[0,0] - Empty</th>
    <th>[0,1]- Dataset id</th>
    <th>[0,2] - Dataset Id</th>
    <th>[0,n]- Dataset Id</th>
  </tr>
  <tr>
    <td>[1,0] - Category label of data index 1</td>
    <td>Data for dataset [1] data index [1] - returned as an array with two elements.</br>

Sub array [0] - Id of set
</br>
Sub array [1] - Updated value of set
</td>
    <td>Data for dataset [2] data index [1] - returned as an array with two elements.</br>

Sub array [0] - Id of set
</br>
Sub array [1] - Updated value of set
</td>
    <td>Data for dataset [n] data index [m] - returned as an array with two elements.</br>

Sub array [0] - Id of set
</br>
Sub array [1] - Updated value of set
</td>
  </tr>
  <tr>
    <td>[2,0] - Category label of data index 2 </td>
    <td>Data for dataset [1] data index [2] - returned as an array with two elements.</br>

Sub array [0] - Id of set
</br>
Sub array [1] - Updated value of set
</td>
    <td>Same as above </td>
    <td>Same as above </td>
  </tr>
  <tr>
    <td>[m,0] - Category label of data index m</td>
    <td>Data for dataset [n] data index [m] - returned as an array with two elements.</br>

Sub array [0] - Id of set
</br>
Sub array [1] - Updated value of set
</td>
    <td>Same as above </td>
    <td>Same as above </td>
  </tr>
</table>

## Retrieve Data using getData() Function

The `getData()` function is similar to the `getDataWithID()` function except that it returns just the updated value of the data on the chart and not its ID.

Thus, the array returned by the `getData()` function is a two-dimensional array where each data cell contains just the numeric value representing the final value of the data on the chart.

A drag-column chart configured to retrieve data using the `getData()` method looks like this:

{% embed_chart standard-charts-drag-able-charts-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/qzm79rsv/) to edit the above drag-able chart.