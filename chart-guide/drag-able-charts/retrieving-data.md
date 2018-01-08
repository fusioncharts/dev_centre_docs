---
permalink: chart-guide/drag-able-charts/retrieving-data.html
title: Retrieving Data | FusionCharts
description: FusionCharts API includes several methods that allow you to fetch real-time data from drag-able charts.
heading: Retrieving Data
chartPresent: true
---

FusionCharts API includes several methods that allow you to fetch real-time data from drag-able charts.

In this section, you will be shown how you can:

* <a href="/chart-guide/drag-able-charts/retrieving-data#retrieving-a-data-set-in-the-json-format" class="smoth-scroll">Retrieve a data set in the JSON format</a>
* <a href="/chart-guide/drag-able-charts/retrieving-data#retrieving-a-data-set-in-the-xml-format" class="smoth-scroll">Retrieve a data set in the XML format</a>
* <a href="/chart-guide/drag-able-charts/retrieving-data#retrieving-a-data-set-in-the-csv-format" class="smoth-scroll">Retrieve a data set in the CSV format</a>
* <a href="/chart-guide/drag-able-charts/retrieving-data#retrieving-data-using-the-getdatawithid-function" class="smoth-scroll">Retrieve data using the `getDataWithID()` method</a>
* <a href="/chart-guide/drag-able-charts/retrieving-data#retrieving-data-using-the-getdata-function" class="smoth-scroll">Retrieve data using the `getData()` method</a>

## Retrieving a Data Set in the JSON Format

A drag-able column 2D chart configured to retrieve JSON data and render it in an `alert` window looks like this:

{% embed_all chart-guide-drag-able-charts-retrieving-data-example-1.js %}

Given below is a brief description of the function used to retrieve JSON data:

<table>
  <tr>
    <th>Function Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`getJSONData`</td>
    <td>It is used to fetch data that has been set on a chart in the JSON format. This function needs to be called on an existing chart. If this function is called on a chart which has no data set on it, it returns an empty `{ }` object.</td>
  </tr>
</table>


## Retrieving a Data Set in the XML Format

Given below is a brief description of the function used to retrieve XML data:

<table>
  <tr>
    <th>Function Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`getXMLData`</td>
    <td>It is used to fetch data that has been set on a chart in the XML format. This function needs to be called on an existing chart. If this function is called on a chart which has no data set on it, it returns an empty `<chart />` element as string.</td>
  </tr>
</table>


## Retrieving a Data Set in the CSV Format

Given below is a brief description of the function used to retrieve CSV data:

<table>
  <tr>
    <th>Function Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`getCSVData`</td>
    <td>It is used to fetch data that has been set on a chart in the CSV format. The data returned is the closest possible comma-separated value representation that has been provided to the chart. The exported data does not contain any functional or cosmetic attribute that was set on the chart.</td>
  </tr>
</table>


## Retrieving Data Using the getDataWithID() Function

The `getDataWithID()` function returns a three-dimensional array that contains the data and the dataset IDs. Once the reference for the chart is obtained, this function can be invoked to retrieve data.

A drag-able column chart configured to retrieve data using the `getDataWithID()` function looks like this:

{% embed_all chart-guide-drag-able-charts-retrieving-data-example-2.js %}

The data returned by the `getDataWithID()` function is without any editing.

The key pointers of this method are:

* [0,0] index of the array is empty

* The first row in the array returned contains the series name of each dataset placed horizontally (sequentially)

* The first column in the array returned contains the labels of all the categories

* The remaining columns map to their respective category and dataset. For each data, its id and last updated value on the chart is returned. In our example, because we have not changed any data visually on the chart, it is showing the original data.

Given below is the structure of the three-dimensional array returned by this function:

<table>
  <tr>
    <td>[0,0] - Empty</td>
    <td>[0,1]- Dataset id</td>
    <td>[0,2] - Dataset Id</td>
    <td>[0,n]- Dataset Id</td>
  </tr>
  <tr>
    <td>[1,0] - Category label of data index 1</td>
    <td>Data for dataset [1] data index [1] - returned as an array with two elements.

Sub array [0] - Id of set
Sub array [1] - Updated value of set
</td>
    <td>Data for dataset [2] data index [1] - returned as an array with two elements.

Sub array [0] - Id of set
Sub array [1] - Updated value of set
</td>
    <td>Data for dataset [n] data index [m] - returned as an array with two elements.

Sub array [0] - Id of set
Sub array [1] - Updated value of set
</td>
  </tr>
  <tr>
    <td>[2,0] - Category label of data index 2 </td>
    <td>Data for dataset [1] data index [2] - returned as an array with two elements.

Sub array [0] - Id of set
Sub array [1] - Updated value of set
</td>
    <td>Same as above </td>
    <td>Same as above </td>
  </tr>
  <tr>
    <td>[m,0] - Category label of data index m</td>
    <td>Data for dataset [n] data index [m] - returned as an array with two elements.

Sub array [0] - Id of set
Sub array [1] - Updated value of set
</td>
    <td>Same as above </td>
    <td>Same as above </td>
  </tr>
</table>


## Retrieving Data Using the getData() Function

The `getData()` function is similar to the `getDataWithID()` function except that it returns just the updated value of the data on the chart and not its ID.

Thus, the array returned by the `getData()` function is a two-dimensional array where each data cell contains just the numeric value representing the final value of the data on the chart.

A drag-column chart configured to retrieve data using the `getData()` method looks like this:

{% embed_all {"source": "chart-guide-drag-able-charts-retrieving-data-example-3.js", "id": "3"} %}