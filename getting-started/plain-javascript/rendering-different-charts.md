---
title: Rendering different Charts | FusionCharts
description: This article outlines some of the popular charts and the way to render them with their respective data formats.
heading: Rendering Different Charts
---

By now, we assume that you have already built a single series column chart, and have a basic grasp over the way FusionCharts works. If you have not done so yet, we recommend visiting [this](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript) tutorial to build your first chart and returning to this later.

In this tutorial, we shall discuss how you can work with different data formats in FusionCharts. We’ll be building various types of charts, gauges and maps using FusionCharts like
- Multi Series Charts
- Combination Charts
- Real-time Charts
- Gauges
- Maps
- Heatmap
- Gantt Chart

## Multi-Series Charts

A Multi-series chart is used to plot data for more than one series of data values. It is also used to analyze and compare data points grouped in sub-categories. For example, you can plot the revenue collected each month for the last two years using a multi-series chart. Multi-series charts can also help you plot the highs and lows of multiple datasets, so that you can easily compare them.

In a multi-series chart, we have two or more datasets plotted against the same X-axis (or Y-axis) value. Let us build a Multi-series Column 2D Chart.

{% embed_all standard-charts-multi-series-charts-example-1.js %}

As you can see, a Multi-series Column 2D Chart has vertically aligned rectangular bars on one axis with discrete values shown on the other. The length of a column is proportionate to the value it represents.

To build the chart shown above, we will use the data presented in the following table:

| Quarter | Previous Year | Current Year |
| ----- | ----- | -------- ||
| Q1 | 12000 | 24400 |
| Q2 | 10500 | 29800 |
| Q3 | 23500 | 20800 |
| Q4 | 16000 | 26000 |

In the above chart, we have plotted quarters with data values for the previous and the current years along the X-axis.To convert this to a data format that FusionCharts can use, you need the following two properties:

1. `categories`
2. `dataset`

The diagram below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy data-format1.json %}

The syntax to use the properties is given below:
```json
"categories": [
  {
    "category":[ 
      { "label": "abc" },
      { "label": "xyz" }
    ]
  }
],
"dataset": [
  {
    "seriesname": "Data Series 1",
    "data": [
      { "value": "xx" },
      { "value": "xx" }
    ]
  },
  {
    "seriesname": "Data Series 2",
    "data": [
      { "value": "xx" },
      { "value": "xx" }
    ]
  }
]
```
> The number of objects passed in the series should be the same as the number of labels.

As shown in the sample above, the chart compares the quarterly sales of a company for over two years. The data in the JSON format for the above chart looks as follows:
```json
// Define the categories representing the labels on the X-axis
const categories =  [
  {
    "category": [
      { "label": "Q1" },
      { "label": "Q2" },
      { "label": "Q3" },
      { "label": "Q4" }
    ]
  }
]
// Construct the dataset comprising multiple series 
const dataset = [
  {
    "seriesname": "Previous Year",
    "data": [
      { "value": "12000" },
      { "value": "10500" },
      { "value": "23500" },
      { "value": "16000" }
    ]
  },
  {
    "seriesname": "Current Year",
    "data": [
      { "value": "24400" },
      { "value": "29800" },
      { "value": "20800" },
      { "value": "26800" }
    ]
  }
]
```

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:
```
// Define the categories representing the labels on the X-axis
const categories =  [
  {
    "category": [
      { "label": "Q1" },
      { "label": "Q2" },
      { "label": "Q3" },
      { "label": "Q4" }
    ]
  }
]
// Construct the dataset comprising multiple series 
const dataset = [
  {
    "seriesname": "Previous Year",
    "data": [
      { "value": "12000" },
      { "value": "10500" },
      { "value": "23500" },
      { "value": "16000" }
    ]
  },
  {
    "seriesname": "Current Year",
    "data": [
      { "value": "24400" },
      { "value": "29800" },
      { "value": "20800" },
      { "value": "26800" }
    ]
  }
];
var chartConfigurations = {
        type: 'mscolumn2d',
        renderAt: 'chart-container',
        width: '700',
        height: '400',
        dataFormat: 'json',
        dataSource: {
          "chart": {
      "theme": "fusion",
            "caption": "Comparison of Quarterly Sales",
            "xAxisname": "Quarter",
            "yAxisName": "Sales"
          },
          "categories": categories,
          "dataset": dataset
        }
      }
FusionCharts.ready(function() {
      var revenueChart = new FusionCharts(chartConfigurations);
      revenueChart.render();
    });
```

You can also create various charts belonging to the multi-series family in a similar way. Check out the different types of multi-series charts here.

## Combination Charts

Similar to multi-series charts, combination charts also allow you to plot multiple datasets on the same chart. However, while in multi-series charts you need to use the same plot type for all datasets, in a combination chart you can use a different plot type for each dataset. For instance, you can show a column, a line, and an area plot on the same chart canvas. 

Let us build a 2D Single Y-axis combination chart.

{% embed_all standard-charts-combination-chart-example-1.js %}

As you can see in the 2D Single Y-axis combination chart above, a line, a column, and an area type plot share the same set of X and Y-axis. The line plot displays the projected monthly revenue of Harry’s SuperMart, while the column plot displays the actual revenue earned, and the area plot shows the monthly profit. To build the chart, we will use the data provided in the following table:

|Month|Actual Revenue|Projected Revenue|Profit|
| ----- | ----- | ------ |-----||
| January | 16000 | 15000 | 4000 |
| February | 20000 | 16000 | 5000 |
| March | 18000 | 17000 | 3000 |
| April | 19000 | 18000 | 4000 |
| May | 15000 | 19000 | 1000 |
| June | 21000 | 19000 | 7000 |
| July | 16000 | 19000 | 1000 |
| August | 20000 | 19000 | 4000 |
| September | 17000 | 20000 | 1000 |
| October | 25000 | 21000 | 8000 |
| November | 19000 | 22000 | 2000 |
| Decemebr | 23000 | 23000 | 7000 |

In the above chart, we have plotted monthly values for projected revenue, actual revenue, and profits made by Harry’s Supermart with monthly data values along the X-axis. To convert the data provided in the above table to a data format that FusionCharts can use, you need the following two properties:
- `categories`
- `dataset`

The diagram below can give you an idea about how we are going to assign values to these properties.

<img src="{https://octodex.github.com/images/minion.png" width="250" height="350" alt="Combination Data Format">

The syntax to use the properties is given below:

```
"categories": [
  {
    "category":[ 
      { "label": "a1" },
      { "label": "a2" },
      { "label": "a3" }
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
    "renderAs":  "type1"
    "data": [
      { "value": "xx" },
      { "value": "xx" }
    ]
  },
{
    "seriesname": "Data Series 3",
     "renderAs":  "type2"
    "data": [
      { "value": "xx" },
      { "value": "xx" }
    ]
  }
]
```

> The number of objects passed in the series should be the same as the number of labels.


As shown in the sample above, the chart compares the monthly sales and profits of the Supermart. The data in the JSON format for the above chart looks as follows:


```
// Define the categories representing the labels on the X-axis
const categories =  [
  {
    "category": [
        {"label": "Jan"},
        {"label": "Feb"},
        {"label": "Mar"},
        {"label": "Apr"},
        {"label": "May"},
        {"label": "Jun"},
        {"label": "Jul"},
        {"label": "Aug"},
        {"label": "Sep"},
        {"label": "Oct"},
        {"label": "Nov"},
        {"label": "Dec"}
    ]
  }
]
// Construct the dataset comprising multiple series 
const dataset = [
  {
    "seriesname": "Actual Revenue",
    "data": [
        { "value": "16000" },
        { "value": "20000" },
        { "value": "18000" },
        { "value": "19000" },
        {"value": "15000"},
        {"value": "21000"},
        {"value": "16000"},
        {"value": "20000"},
        {"value": "17000"},
        {"value": "25000"},
        {"value": "19000"},
        {"value": "23000"}
    ]
  },
  {
    "seriesname": "Projected Revenue",
    "data": [
        { "value": "15000" },
        { "value": "16000" },
        { "value": "17000" },
        { "value": "18000" },
        {"value": "19000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "20000"},
        {"value": "21000"},
        {"value": "22000"},
        {"value": "23000"}
    ]
  }
]
```

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```
FusionCharts.ready(function() {
  var salesAnlysisChart = new FusionCharts({
    type: 'mscombi2d',
    renderAt: 'chart-container',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Harry's SuperMart",
        "subCaption": "Sales analysis of last year",
        "xAxisname": "Month",
        "yAxisName": "Amount (In USD)",
        "numberPrefix": "$",
        "divlineColor": "#999999",
        "divLineIsDashed": "1",
        "divLineDashLen": "1",
        "divLineGapLen": "1",
        "toolTipColor": "#ffffff",
        "toolTipBorderThickness": "0",
        "toolTipBgColor": "#000000",
        "toolTipBgAlpha": "80",
        "toolTipBorderRadius": "2",
        "toolTipPadding": "5",
        "theme": "fusion"
      },
      "categories": [{
        "category": [{
            "label": "Jan"
          },
          {
            "label": "Feb"
          },
          {
            "label": "Mar"
          },
          {
            "label": "Apr"
          },
          {
            "label": "May"
          },
          {
            "label": "Jun"
          },
          {
            "label": "Jul"
          },
          {
            "label": "Aug"
          },
          {
            "label": "Sep"
          },
          {
            "label": "Oct"
          },
          {
            "label": "Nov"
          },
          {
            "label": "Dec"
          }
        ]
      }],
      "dataset": [{
          "seriesName": "Actual Revenue",
          "showValues": "1",
          "data": [{
              "value": "16000"
            },
            {
              "value": "20000"
            },
            {
              "value": "18000"
            },
            {
              "value": "19000"
            },
            {
              "value": "15000"
            },
            {
              "value": "21000"
            },
            {
              "value": "16000"
            },
            {
              "value": "20000"
            },
            {
              "value": "17000"
            },
            {
              "value": "25000"
            },
            {
              "value": "19000"
            },
            {
              "value": "23000"
            }
          ]
        },
        {
          "seriesName": "Projected Revenue",
          "renderAs": "line",
          "data": [{
              "value": "15000"
            },
            {
              "value": "16000"
            },
            {
              "value": "17000"
            },
            {
              "value": "18000"
            },
            {
              "value": "19000"
            },
            {
              "value": "19000"
            },
            {
              "value": "19000"
            },
            {
              "value": "19000"
            },
            {
              "value": "20000"
            },
            {
              "value": "21000"
            },
            {
              "value": "22000"
            },
            {
              "value": "23000"
            }
          ]
        },
        {
          "seriesName": "Profit",
          "renderAs": "area",
          "data": [{
              "value": "4000"
            },
            {
              "value": "5000"
            },
            {
              "value": "3000"
            },
            {
              "value": "4000"
            },
            {
              "value": "1000"
            },
            {
              "value": "7000"
            },
            {
              "value": "1000"
            },
            {
              "value": "4000"
            },
            {
              "value": "1000"
            },
            {
              "value": "8000"
            },
            {
              "value": "2000"
            },
            {
              "value": "7000"
            }
          ]
        }
      ]
    }
  }).render();
});
```

You can also create various charts belonging to the combination type in a similar way. Check out the different types of combination charts here.