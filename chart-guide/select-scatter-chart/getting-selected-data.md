---
permalink: chart-guide/select-scatter-chart/getting-selected-data.html
title: Getting Selected Data | FusionCharts
description: In scatter charts you can see how the upated data is read using JavaScript functions present on the page.
heading: Getting Selected Data
chartPresent: true
---

After you select a subset of data points in a select-scatter chart and click `Submit`, the selected data is sent to a server-side script, or a JavaScript function, for further processing.

In this section, you will be shown how the updated data is read using the JavaScript functions present on the same page.

After the chart is rendered, to access the chart data as an array, the following function is called:

```javascript
//Get a reference to our chart
var chartObject= FusionCharts("chartId");

//Now get the data as array.
var arrData = chartObject.getData();
```

You first need to get a reference to the chart object. You can do so using the `FusionCharts` item reference method. Next, to get the data as an array, call the `getData()` method of the chart. This method returns the data of the chart in a two-dimensional array.

Given below is a brief description of the structure of this array:

<table>
  <tr>
    <td>[1,0] - Dataset 1 - This cell contains the dataset id</td>
    <td>Selected data point id for dataset 1	</td>
    <td>Selected data point id for dataset 1	</td>
    <td>Selected data point id for dataset 1</td>
    <td>Selected data point id for this dataset… </td>
  </tr>
  <tr>
    <td>[2,0] - Dataset 2 - This cell contains the dataset id</td>
    <td>Selected data point id for dataset 2	</td>
    <td>Selected data point id for dataset 2	</td>
    <td>Selected data point id for dataset 2	</td>
    <td>Selected data point id for this dataset...</td>
  </tr>
  <tr>
    <td>[n,0] - Dataset n - This cell contains the dataset id</td>
    <td>Selected data point id for dataset n	</td>
    <td>Selected data point id for dataset n	</td>
    <td>Selected data point id for dataset n	</td>
    <td>Selected data point id for this dataset...</td>
  </tr>
</table>


Now, from this chart, if you select three data points from the Televisions dataset and five from the Cell Phones dataset and then return the data of chart as an array using the `getData()` method of the chart object, the tabular mapping of the array returned can be traced as under:

<table>
  <tr>
    <td>Televisions</td>
    <td>TV_1</td>
    <td>TV_2</td>
    <td>TV_3</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Cell Phones</td>
    <td>Mob_1</td>
    <td>Mob_2</td>
    <td>Mob_3</td>
    <td>Mob_4</td>
    <td>Mob_5</td>
  </tr>
</table>


If you map this with the JSON data, you will find the following:

* Each dataset is returned as a single row in the array

* The first column of each row contains the dataset index

* The rest of the columns contain the ids of the selected points of that dataset

* The length of each row's array (horizontally) can be different, depending on the number of data points chosen for that dataset

## Reading JSON Data from the Chart

The chart also provides a method to read the selected data in the JSON/XML format. This method is named as the `getJSONData()` and can be invoked as under:

```javascript
//Get a reference to our chart
var chartObject= FusionCharts("SelectChart");

//Get the data from chart
var jsonRtn = chartObject.getJSONData();

//Show it to user in alert box
alert(jsonRtn);
```

The function `getJSONData()` returns the selected data. This function is also used to retrieve the complete data from the chart. To get the complete data from the chart you need to pass `false` as a parameter to the function. For example, `var jsonRtn = chartObject.getJSONData(false);`

A select-scatter chart configured to show how the selected data is retrieved and updated looks like this:

{% embed_all {"source": "chart-guide-select-scatter-chart-getting-selected-data-example-1.js", "id": "1"} %}