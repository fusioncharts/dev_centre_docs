---
title: Rendering different Charts | FusionCharts
description: This article outlines some of the popular charts and the way to render them with their respective data formats.
heading: Rendering Different Charts
---

By now, we assume that you have already built a single series column chart, and have a basic grasp over the way FusionCharts works. If you have not done so yet, we recommend visiting [Create your first chart tutorial](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript) and returning to this later.

In this tutorial, we shall discuss how you can work with different data formats in FusionCharts. We’ll be building various types of charts, gauges and maps using FusionCharts.

## Multi-Series Charts

A Multi-series chart is used to plot data for more than one series of data values. It is also used to analyze and compare data points grouped in sub-categories. For example, you can plot the revenue collected each month for the last two years using a multi-series chart. Multi-series charts can also help you plot the highs and lows of multiple datasets, so that you can easily compare them.

In a multi-series chart, we have two or more datasets plotted against the same X-axis (or Y-axis) value. Let us build a Multi-series Column 2D Chart.

{% embed_all standard-charts-multi-series-charts-example-1.js %}

As you can see, a Multi-series Column 2D Chart has vertically aligned rectangular bars on one axis with discrete values shown on the other. The length of a column is proportionate to the value it represents.

To build the chart shown above, we will use the data presented in the following table:

| Quarter | Previous Year | Current Year |
| ----- | ----- | -------- ||
| Q1 | 12000 | 24400 |
| Q2 | 10500 | 29800 |
| Q3 | 23500 | 20800 |
| Q4 | 16000 | 26000 |

In the above chart, we have plotted quarters with data values for the previous and the current years along the X-axis.To convert this to a data format that FusionCharts can use, you need the following two properties:

1. `categories`
2. `dataset`

The diagram below can give you an idea about how we are going to assign values to these properties.
{% embed_chartAnatomy data-format1.json %}

The syntax to use the properties is given below:
```json
"categories": [
  {
    "category":[ 
      { "label": "abc" },
      { "label": "xyz" }
    ]
  }
],
"dataset": [
  {
    "seriesname": "Data Series 1",
    "data": [
      { "value": "xx" },
      { "value": "xx" }
    ]
  },
  {
    "seriesname": "Data Series 2",
    "data": [
      { "value": "xx" },
      { "value": "xx" }
    ]
  }
]
```
> The number of objects passed in the series should be the same as the number of labels.

As shown in the sample above, the chart compares the quarterly sales of a company for over two years. The data in the JSON format for the above chart looks as follows:
```json
// Define the categories representing the labels on the X-axis
const categories =  [
  {
    "category": [
      { "label": "Q1" },
      { "label": "Q2" },
      { "label": "Q3" },
      { "label": "Q4" }
    ]
  }
]
// Construct the dataset comprising multiple series 
const dataset = [
  {
    "seriesname": "Previous Year",
    "data": [
      { "value": "12000" },
      { "value": "10500" },
      { "value": "23500" },
      { "value": "16000" }
    ]
  },
  {
    "seriesname": "Current Year",
    "data": [
      { "value": "24400" },
      { "value": "29800" },
      { "value": "20800" },
      { "value": "26800" }
    ]
  }
]
```

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:
```
FusionCharts.ready(function() {
      var revenueChart = new FusionCharts({
        type: 'mscolumn2d',
        renderAt: 'chart-container',
        width: '700',
        height: '400',
        dataFormat: 'json',
        dataSource: {
          "chart": {
      "theme": "fusion",
            "caption": "Comparison of Quarterly Sales",
            "xAxisname": "Quarter",
            "yAxisName": "Sales"
          },
          "categories": categories,
          "dataset": dataset
        }
      });
      revenueChart.render();
    });
```

You can also create various charts belonging to the multi-series family in a similar way. Check out the different types of multi-series charts here.