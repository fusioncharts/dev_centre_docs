---
title: Rendering different Charts | FusionCharts
heading: Rendering Different Charts111
description: This article outlines some of the popular charts and the way to render them with their respective data formats.
---
# Rendering Different Charts
By now, we assume that you have already built a single series column chart, and have a basic grasp over the way FusionCharts works. If you have not done so yet, we recommend visiting [this](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript) tutorial to build your first chart and returning to this later.

In this tutorial, we shall discuss how you can work with different data formats in FusionCharts. We’ll be building various types of charts, gauges and maps using FusionCharts like
- Multi Series Charts
- Combination Charts
- Real-time Chart
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

The illustration below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy multiseries-data.json %}

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

> The number of objects passed in the series should be the same as the number of labels.

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

<<Data Anatomy - combination chart>>

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
        {"value": "16000"},
        {"value": "20000"},
        {"value": "18000"},
        {"value": "19000"},
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
        {"value": "15000"},
        {"value": "16000"},
        {"value": "17000"},
        {"value": "18000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "20000"},
        {"value": "21000"},
        {"value": "22000"},
        {"value": "23000"}
    ]
  },
  {
    "seriesName": "Profit",
    "renderAs": "area",
    "data": [
        {"value": "4000"},
        {"value": "5000"},
        {"value": "3000"},
        {"value": "4000"},
        {"value": "1000"},
        {"value": "7000"},
        {"value": "1000"},
        {"value": "4000"},
        {"value": "1000"},
        {"value": "8000"},
        {"value": "2000"},
        {"value": "7000"}
    ]
}
]
```

> The number of objects passed in the series should be the same as the number of labels.

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

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
        {"value": "16000"},
        {"value": "20000"},
        {"value": "18000"},
        {"value": "19000"},
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
        {"value": "15000"},
        {"value": "16000"},
        {"value": "17000"},
        {"value": "18000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "19000"},
        {"value": "20000"},
        {"value": "21000"},
        {"value": "22000"},
        {"value": "23000"}
    ]
  },
  {
    "seriesName": "Profit",
    "renderAs": "area",
    "data": [
        {"value": "4000"},
        {"value": "5000"},
        {"value": "3000"},
        {"value": "4000"},
        {"value": "1000"},
        {"value": "7000"},
        {"value": "1000"},
        {"value": "4000"},
        {"value": "1000"},
        {"value": "8000"},
        {"value": "2000"},
        {"value": "7000"}
    ]
}
]
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
      "categories": categories,
      "dataset": dataset
    }
  }).render();
});
```

You can also create various charts belonging to the combination type in a similar way. Check out the different types of combination charts here.

## Real Time Charts
Real-time charts are also referred to as data streaming charts, because they can automatically update themselves at regular intervals, by fetching new data from the server and discarding the previous values. You do not need to keep refreshing the page to see the updated versions of these charts. 

FusionCharts XT supports six types of Real-time charts - Line, Area, Column, Stacked Area, Stacked Column, and Line (Dual Y axis). In the section below, we will see how to build a real-time area 2D chart.

{% embed_chart standard-charts-real-time-charts-example-2.js %}

As you can see in the real-time 2D area chart above, the data plot is presenting the values present at a given instance. As soon as new values are available in the source data, the chart will update itself with the fresh values, gradually discarding the data plots displayed above. 

In the above chart, we have plotted values of a stock (of Harry’s Supermart) on a business day, at intervals of 5 seconds between any two consecutive values. To convert the data provided in the above table to a data format that FusionCharts can use, you need the following two properties:
- `categories`
- `dataset`

The diagram below can give you an idea about how we are going to assign values to these properties. 

<<Data Anatomy - Real-time chart>>

In the sample above, the chart shows the values of the Harry’s Supermart stock throughout a single business day, at intervals of 5 seconds. The data in the JSON format for the above chart looks as follows:

```
// Define the category representing the labels on the X-axis
const categories =  [
  {
    "category": [
      { "label": "Day Start" },...
    ]
  }
]
// Construct the dataset
const dataset = [
  {
    "seriesname": "Time",
    "data": [
      { "value": "10:32:58" },
      { "value": "10:33:03" },
      { "value": "10:33:08" }, ...
    ]
  }
]
```

Now that we’ve seen the structuring of the data object, let us deal with feeding the real-time data into this format. There are multiple ways in which one can feed real-time data to FusionCharts.
- The real-time data from the server can be transported through APIs, web sockets depending on the requirement
- The data can be fetched at regular intervals from third-party endpoints as per the requirement
- Data can be fed from google sheets in real-time.

To build the sample chart, we will feed the data at regular intervals from a random generator (math.random function), for the sake of simplicity.


```
function addLeadingZero(num) {
    return (num <= 9) ? ("0" + num) : num;
}

function updateData() {
    // Get reference to the chart using its ID(stockRealTimeChart)
    var chartRef = FusionCharts("stockRealTimeChart"),
    // We need to create a querystring format incremental update, containing
    // label in hh:mm:ss format
    // and a value (random).
    currDate = new Date(),
    label = addLeadingZero(currDate.getHours()) + ":" +
    addLeadingZero(currDate.getMinutes()) + ":" +
    addLeadingZero(currDate.getSeconds()),
    // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
    randomValue = Math.floor(Math.random() *50) / 100 + 35.25,
    // Build Data String in format &label=...&value=...
    strData = "&label=" + label + "&value=" + randomValue;
    // Feed it to the chart. chartRef is the instance of the chart.
    chartRef.feedData(strData);
}
```

Now that the data and its transporting mechanism are ready, let us dive in directly to render the chart. The consolidated code is given below:

```
FusionCharts.ready(function() {
  var stockPriceChart = new FusionCharts({
      id: "stockRealTimeChart",
      type: 'realtimearea',
      renderAt: 'chart-container',
      width: '700',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "theme": "fusion",
          "caption": "Real-time stock price monitor",
          "subCaption": "Harry's SuperMart",
          "xAxisName": "Time",
          "yAxisName": "Stock Price",
          "numberPrefix": "$",
          "refreshinterval": "5",
          "yaxisminvalue": "35",
          "yaxismaxvalue": "36",
          "numdisplaysets": "10",
          "labeldisplay": "rotate",
          "showRealTimeValue": "0"

        },
        "categories": [{
          "category": [{
            "label": "Day Start"
          }]
        }],
        "dataset": [{
          "data": [{
            "value": "35.27"
          }]
        }]
      },
      "events": {
        "initialized": function(e) {
          function addLeadingZero(num) {
            return (num <= 9) ? ("0" + num) : num;
          }

          function updateData() {
            // Get reference to the chart using its ID
            var chartRef = FusionCharts("stockRealTimeChart"),
              // We need to create a querystring format incremental update, containing
              // label in hh:mm:ss format
              // and a value (random).
              currDate = new Date(),
              label = addLeadingZero(currDate.getHours()) + ":" +
              addLeadingZero(currDate.getMinutes()) + ":" +
              addLeadingZero(currDate.getSeconds()),
              // Get random number between 35.25 & 35.75 - rounded to 2 decimal places
              randomValue = Math.floor(Math.random() *
                50) / 100 + 35.25,
              // Build Data String in format &label=...&value=...
              strData = "&label=" + label +
              "&value=" +
              randomValue;
            // Feed it to chart.
            chartRef.feedData(strData);
          }

          var myVar = setInterval(function() {
            updateData();
          }, 5000);
        }
      }
    }).render();
});
```

You can also create various types of real-time charts in a similar way. Check out the different types of real-time charts here.

## Gauges
Gauges are powerful tools that can showcase information using a radial or linear scale to display data. An angular gauge is used to show a specific value over a radial scale. The gauge is rendered with a radial scale that displays the data range.
This scale can be color-coded to indicate divisions within the range. A dial is used to point to the data value. The gauge can also be rendered with multiple dials. It is often used to simulate a speedometer and on dashboards.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

{% embed_chart getting-started-your-first-widget.js %}

So, any score less than 50 is bad and is shown in red. Any score between 50 and 75 is average and is shown in yellow. Any score above 75 means good and is shown in green.

To build the gauge shown above, we will use the data presented in the table below:

| Range | Color | Hex Code |
| ----- | ----- | -------- ||
| 0-50 | Red | #F2726F |
| 50-75 | Yellow | #FFC533 |
| 75-100 | Green | #62B58F |

FusionCharts accepts data in JSON format. To convert this to a data format that FusionCharts can use, you need the following two properties:
- `colorRange`
- `dials`

The diagram below can give you an idea about how we are going to assign values to these properties. 

<Data Anatomy - gauge>

The following code is the JSON representation of the tabular column with the required attributes to render the above gauge.The data in the JSON format for the above gauge looks as follows:
```
  // Chart Data
  "colorRange": {
    "color": [
      {

        "minValue": "xx",
        "maxValue": "xx",
        "code": "xx"
      }]
  },
  "dials": {
    "dial": [
      {
        "value": "xx"
```

In the above JSON:
- Create the colorRange object to set the color associated with the specific range of values.
- Specify minValue and maxValue within the color array under the colorRange object.
- Set the code attribute to specify the hex color of respective ranges.
- Create the dials object to represent the customer satisfaction score.
- Create the dial object under dials object to set the value of customer satisfaction score.

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```
// Create an Instance with chart options
var gaugeInstance = new FusionCharts({
type: 'angulargauge', // The gauge type
width: '450', // Width of the gauge
height: '250', // Height of the gauge
dataFormat: 'json', // Data type
renderAt:'chart-container', //Container where the chart will render
dataSource: {

// Gauge Configuration
"chart": {
"caption": "Nordstrom's Customer Satisfaction Score for 2017",
"lowerLimit": "0",
"upperLimit": "100",
"showValue": "1",
"numberSuffix": "%",
"theme": "fusion",
"showToolTip": "0"
},

// Chart Data
"colorRange": colorRange,
"dials": dials
}
});
// Render
gaugeInstance.render();
```

You can also create various charts belonging to the gauges family in a similar way. Check out the different types of gauges here.

