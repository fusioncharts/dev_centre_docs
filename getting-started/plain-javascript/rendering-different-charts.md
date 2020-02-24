---
title: Rendering different Charts | FusionCharts
heading: Rendering Different Charts11
description: This article outlines some of the popular charts and the way to render them with their respective data formats.
---
# Rendering Different Charts - Test1
By now11111, we assume that you have already built a single series column chart, and have a basic grasp over the way FusionCharts works. If you have not done so yet, we recommend visiting [this](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript) tutorial to build your first chart and returning to this later.

In this tutorial, we shall discuss how you can work with different data formats in FusionCharts. We’ll be building various types of charts, gauges and maps using FusionCharts like
- Multi Series Charts - this is testing
- Combination Charts
- Real-time Chart
- Gauges
- Maps
- Heatmap
- Gantt Chart

## Multi-Series Charts

A Multi-series chart is used to plot data for more than one series of data values. It is also used to analyze and compare data points grouped in sub-categories. For example, you can plot the revenue collected each month for the last two years using a multi-series chart. Multi-series charts can also help you plot the highs and lows of multiple datasets, so that you can easily compare them.

In a multi-series chart, we have two or more datasets plotted against the same X-axis (or Y-axis) value. Let us build a Multi-series Column 2D Chart.

{%embed_chart standard-charts-multi-series-charts-example-1.js %}

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
<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
<!-- Include fusioncharts core library -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<!-- Include fusion theme -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript">
    //STEP 2 - Chart Data
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
    ];
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

    //STEP 3 - Chart Configurations
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
    FusionCharts.ready(function(){
        var fusioncharts = new FusionCharts(chartConfigurations);
    fusioncharts.render();
    });

</script>
</head>
<body>
    <div id="chart-container">FusionCharts XT will load here!</div>
</body>
</html>
```

You can also create various charts belonging to the multi-series family in a similar way. Check out the different types of multi-series charts here.

## Combination Charts

Similar to multi-series charts, combination charts also allow you to plot multiple datasets on the same chart. However, while in multi-series charts you need to use the same plot type for all datasets, in a combination chart you can use a different plot type for each dataset. For instance, you can show a column, a line, and an area plot on the same chart canvas. 

Let us build a 2D Single Y-axis combination chart.

{% embed_chart standard-charts-combination-chart-example-1.js %}

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
<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
<!-- Include fusioncharts core library -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<!-- Include fusion theme -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript">
    //STEP 2 - Chart Data
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
    ];
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
    ];

    //STEP 3 - Chart Configurations
    var chartConfigurations = {
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
    }
    FusionCharts.ready(function(){
        var fusioncharts = new FusionCharts(chartConfigurations);
    fusioncharts.render();
    });

</script>
</head>
<body>
<div id="chart-container">FusionCharts XT will load here!</div>
</body>
</html>
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
<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
<!-- Include fusioncharts core library -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<!-- Include fusion theme -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript">
    //STEP 2 - Chart Data
    // Define the categories representing the labels on the X-axis
    const categories =  [{
        "category": [{
            "label": "Day Start"
        }]
    }];
    // Construct the dataset comprising multiple series 
    const dataset = [{
        "data": [{
            "value": "35.27"
        }]
    }];

    //STEP 3 - Chart Configurations
    var chartConfigurations = {
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
        "categories": categories,
        "dataset": dataset
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
          }, 3000);
        }
      }
    }

    FusionCharts.ready(function(){
        var fusioncharts = new FusionCharts(chartConfigurations);
    fusioncharts.render();
    });

</script>
</head>
<body>
<div id="chart-container">FusionCharts XT will load here!</div>
</body>
</html>
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
  // Define the colorVariations of the angular gauge
  const colorRange = {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  };
  //Set up the dial value
  const dials = {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
```

In the above JSON:
- Create the colorRange object to set the color associated with the specific range of values.
- Specify minValue and maxValue within the color array under the colorRange object.
- Set the code attribute to specify the hex color of respective ranges.
- Create the dials object to represent the customer satisfaction score.
- Create the dial object under dials object to set the value of customer satisfaction score.

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```
<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
<!-- Include fusioncharts core library -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<!-- Include fusion theme -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript">
    // Define the colorVariations of the angular gauge
    const colorRange = {
    "color": [{
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
        },{
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
        },{
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
        }]
    };
    //Set up the dial value
    const dials = {
        "dial": [
            {"value": "81"}
        ]
    };

    //STEP 3 - Chart Configurations
    var chartConfigurations = {
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
    }

    FusionCharts.ready(function(){
        var fusioncharts = new FusionCharts(chartConfigurations);
    fusioncharts.render();
    });

</script>
</head>
<body>
<div id="chart-container">FusionCharts XT will load here!</div>
</body>
</html>
```

You can also create various charts belonging to the gauges family in a similar way. Check out the different types of gauges here.

## Maps
FusionMaps XT offers interactive maps that allow you to plot geographical data, such as revenue by regions, population by state, survey and election results. You can also add markers to pinpoint specific locations and routes. FusionMaps XT has over 1000 maps including all continents, major countries and all the US states.

To render these maps, you need to download the map definition files from <<here>>. Copy and paste the `maps` folder within your `fusioncharts` directory. (inlcuding map definition files)

In the section below, we will see how to build a world map.

{% embed_chart getting-started-your-first-map.js %}

As you can see in the map above, the data plot is indicating the average annual population growth across the 7 continents. 

| State | Entity Name | Value |
| ----- | ----------- | ----- ||
| North America | NA | 82 |
| South America | SA | 2.04 |
| Asia | AS | 1.78 |
| Europe | EU | 40 |
| Africa | AF | 2.58 |
| Australia | AU | 1.30 |

To convert the data provided in the above table to a data format that FusionCharts can use, you need the following properties:
- `colorRange`
- `data`
- `id`
- `value`

The diagram below can give you an idea about how we are going to assign values to these properties. 

<Map anatomy>

The following code is the JSON representation of the tabular column with the required attributes to render the above map.The data in the JSON format for the above map looks as follows:

```
// Define the colorVariations of the angular gauge
const colorRange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
        "minvalue": "0.5",
        "maxvalue": "1.0",
        "color": "#FFD74D"
    }, {
        "minvalue": "1.0",
        "maxvalue": "2.0",
        "color": "#FB8C00"
    }, {
        "minvalue": "2.0",
        "maxvalue": "3.0",
        "color": "#E65100"
    }]
};
//Set up the Map's data
const data = [{
    "id": "NA",
    "value": ".82",
    "showLabel": "1"
}, {
    "id": "SA",
    "value": "2.04",
    "showLabel": "1"
}, {
    "id": "AS",
    "value": "1.78",
    "showLabel": "1"
}, {
    "id": "EU",
    "value": ".40",
    "showLabel": "1"
}, {
    "id": "AF",
    "value": "2.58",
    "showLabel": "1"
}, {
    "id": "AU",
    "value": "1.30",
    "showLabel": "1"
}];
```

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```
<html>
<head>
<title>My First map using FusionCharts Suite XT</title>
<!-- Including the fusioncharts core library -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<!-- Including the map renderer file -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js "></script>
<!-- Including the map definition file -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.world.js"></script>
<!-- Including the fusion theme -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript">
    // Define the colorVariations of the angular gauge
    const colorRange = {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, {
            "minvalue": "2.0",
            "maxvalue": "3.0",
            "color": "#E65100"
        }]
    };
    //Set up the Map's data
    const data = [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1"
    }];

    //STEP 3 - Map Configurations
    var mapConfigurations = {
        "type": "maps/world",
        "renderAt": "chart-container",
        "width": "800",
        "height": "550",
        "dataFormat": "json",
        "dataSource": {
            // Map Configuration
            "chart": {
                "caption": "Average Annual Population Growth",
                "subcaption": " 1955-2015",
                "numbersuffix": "%",
                "includevalueinlabels": "1",
                "labelsepchar": ": ",
                "entityFillHoverColor": "#FFF9C4",
                "theme": "fusion"
            },
            // Aesthetics; ranges synced with the slider
            "colorrange": colorRange,
            // Source data as JSON --> id represents countries of world.
            "data": data
        }
    }

    FusionCharts.ready(function(){
        var fusioncharts = new FusionCharts(mapConfigurations);
    fusioncharts.render();
    });

</script>
</head>
<body>
<div id="chart-container">FusionCharts XT will load here!</div>
</body>
</html>
```

That’s it. Your first map is ready. You can find more about the differnet types of maps here.


## Heat Map
A heat map chart utilizes different colors to represent data values within a table. It comes in handy the most, when you have to plot large and complex data sets. FusionCharts suite XT supports two types of heat map charts - a numeric heat map to plot numeric values, and a category-based heat map to plot non-numeric data.

In the section below, we will see how to build a heat map chart.

{% embed_all standard-charts-heat-map-chart-example-1.js %}

As you can see in the heat map above, the data plot is indicating the ratings of four different smartphones based on five common components, with the help of different colors. 

| State | Processor | Screen Size | Price | Battery Backup | Camera |
| ----- | --------- | ----------- | ----- | ---------------| ------ ||
| Samsung Galaxy H5 | 8.7 | 8.5 | 9.3 | 9.7 | 8 |
| HTC One (M8) | 9.2 | 8.3 | 7.3 | 8.8 | 8.7 |
| Apple iPhone 5S | 9.1 | 8.6 | 7.2 | 8.4 | 9.5 |
| Nokia Lumia 1520 | 8.8 | 9.1 | 9.7 | 9.2 | 8.1 |

To convert the data provided in the above table to a data format that FusionCharts can use, you need the following properties:
- `rows`
- `columns`
- `dataset`
- `colorRange`

The diagram below can give you an idea about how we are going to assign values to these properties. 

{% embed_chartAnatomy heat-map-chart.json %}

In the sample above, the chart shows the heat map for comparing different smartphones on the basis of a number of common components. The data in the JSON format for the above chart looks as follows:

```
const rows = {
    "row": [
        {
            "id": "SGS5",
            "label": "Samsung Galaxy S5"
        },
        {
            "id": "HTC1M8",
            "label": "HTC One (M8)"
        },
        {
            "id": "IPHONES5",
            "label": "Apple iPhone 5S"
        },
        {
            "id": "LUMIA",
            "label": "Nokia Lumia 1520"
        }
    ]
};
const columns = {
    "column": [
        {
            "id": "processor",
            "label": "Processor"
        },
        {
            "id": "screen",
            "label": "Screen Size"
        },
        {
            "id": "price",
            "label": "Price"
        },
        {
            "id": "backup",
            "label": "Battery Backup"
        },
        {
            "id": "cam",
            "label": "Camera"
        }
    ]
};
const dataset =[{
    "data": [
        {
            "rowid": "SGS5",
            "columnid": "processor",
            "value": "8.7",
            "tllabel": "Quad Core 2.5 GHz",
            "trlabel": "OS : Android 4.4 Kitkat"
        },
        {
            "rowid": "SGS5",
            "columnid": "screen",
            "value": "8.5",
            "tllabel": "5.1 inch",
            "trlabel": "AMOLED screen"
        },
        {
            "rowid": "SGS5",
            "columnid": "price",
            "value": "9.3",
            "tllabel": "$600"
        },
        {
            "rowid": "SGS5",
            "columnid": "backup",
            "value": "9.7",
            "tllabel": "29 Hrs",
            "trlabel": "Battery : 2800 MAH"
        },
        {
            "rowid": "SGS5",
            "columnid": "cam",
            "value": "8",
            "tllabel": "16 MP",
            "trlabel": "Front Camera : 2.1 MP"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "processor",
            "value": "9.2",
            "tllabel": "Quad Core 2.3 GHz",
            "trlabel": "OS : Android 4.4 Kitkat"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "screen",
            "value": "8.3",
            "tllabel": "5 inch",
            "trlabel": "LCD screen"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "price",
            "value": "7.3",
            "tllabel": "$600"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "backup",
            "value": "8.8",
            "tllabel": "20 Hrs",
            "trlabel": "Battery : 2600 MAH"
        },
        {
            "rowid": "HTC1M8",
            "columnid": "cam",
            "value": "8.7",
            "tllabel": "4 MP",
            "trlabel": "Front Camera : 5 MP"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "processor",
            "value": "9.1",
            "tllabel": "Dual Core",
            "trlabel": "OS : iOS 7"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "screen",
            "value": "8.6",
            "tllabel": "4 inch",
            "trlabel": "Retina LCD screen"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "price",
            "value": "7.2",
            "tllabel": "$649"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "backup",
            "value": "8.4",
            "tllabel": "10 Hrs",
            "trlabel": "Battery : 1560 MAH"
        },
        {
            "rowid": "IPHONES5",
            "columnid": "cam",
            "value": "9.5",
            "tllabel": "8 MP",
            "trlabel": "Front Camera : 1.2 MP"
        },
        {
            "rowid": "LUMIA",
            "columnid": "processor",
            "value": "8.8",
            "tllabel": "Quad Core 2.2 GHz",
            "trlabel": "OS: Windows Phone 8"
        },
        {
            "rowid": "LUMIA",
            "columnid": "screen",
            "value": "9.1",
            "tllabel": "6 inch",
            "trlabel": "LCD screen"
        },
        {
            "rowid": "LUMIA",
            "columnid": "price",
            "value": "9.7",
            "tllabel": "$470"
        },
        {
            "rowid": "LUMIA",
            "columnid": "backup",
            "value": "9.2",
            "tllabel": "27 Hrs",
            "trlabel": "Battery : 3400 MAH"
        },
        {
            "rowid": "LUMIA",
            "columnid": "cam",
            "value": "8.1",
            "tllabel": "20MP",
            "trlabel": "Front Camera : 1.2 MP"
        }
    ]
}];
const colorRange = {
    "gradient": "0",
    "minvalue": "0",
    "code": "E24B1A",
    "startlabel": "Poor",
    "endlabel": "Good",
    "color": [
        {
            "code": "E24B1A",
            "minvalue": "1",
            "maxvalue": "5",
            "label": "Bad"
        },
        {
            "code": "F6BC33",
            "minvalue": "5",
            "maxvalue": "8.5",
            "label": "Average"
        },
        {
            "code": "6DA81E",
            "minvalue": "8.5",
            "maxvalue": "10",
            "label": "Good"
        }
    ]
};
```

Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```
<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
<!-- Include fusioncharts core library -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<!-- Include fusion theme -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript">
    // Define the rows of the heatmap
    const rows = {
        "row": [
            {
                "id": "SGS5",
                "label": "Samsung Galaxy S5"
            },
            {
                "id": "HTC1M8",
                "label": "HTC One (M8)"
            },
            {
                "id": "IPHONES5",
                "label": "Apple iPhone 5S"
            },
            {
                "id": "LUMIA",
                "label": "Nokia Lumia 1520"
            }
        ]
    };
    const columns = {
        "column": [
            {
                "id": "processor",
                "label": "Processor"
            },
            {
                "id": "screen",
                "label": "Screen Size"
            },
            {
                "id": "price",
                "label": "Price"
            },
            {
                "id": "backup",
                "label": "Battery Backup"
            },
            {
                "id": "cam",
                "label": "Camera"
            }
        ]
    };
    const dataset =[{
        "data": [
            {
                "rowid": "SGS5",
                "columnid": "processor",
                "value": "8.7",
                "tllabel": "Quad Core 2.5 GHz",
                "trlabel": "OS : Android 4.4 Kitkat"
            },
            {
                "rowid": "SGS5",
                "columnid": "screen",
                "value": "8.5",
                "tllabel": "5.1 inch",
                "trlabel": "AMOLED screen"
            },
            {
                "rowid": "SGS5",
                "columnid": "price",
                "value": "9.3",
                "tllabel": "$600"
            },
            {
                "rowid": "SGS5",
                "columnid": "backup",
                "value": "9.7",
                "tllabel": "29 Hrs",
                "trlabel": "Battery : 2800 MAH"
            },
            {
                "rowid": "SGS5",
                "columnid": "cam",
                "value": "8",
                "tllabel": "16 MP",
                "trlabel": "Front Camera : 2.1 MP"
            },
            {
                "rowid": "HTC1M8",
                "columnid": "processor",
                "value": "9.2",
                "tllabel": "Quad Core 2.3 GHz",
                "trlabel": "OS : Android 4.4 Kitkat"
            },
            {
                "rowid": "HTC1M8",
                "columnid": "screen",
                "value": "8.3",
                "tllabel": "5 inch",
                "trlabel": "LCD screen"
            },
            {
                "rowid": "HTC1M8",
                "columnid": "price",
                "value": "7.3",
                "tllabel": "$600"
            },
            {
                "rowid": "HTC1M8",
                "columnid": "backup",
                "value": "8.8",
                "tllabel": "20 Hrs",
                "trlabel": "Battery : 2600 MAH"
            },
            {
                "rowid": "HTC1M8",
                "columnid": "cam",
                "value": "8.7",
                "tllabel": "4 MP",
                "trlabel": "Front Camera : 5 MP"
            },
            {
                "rowid": "IPHONES5",
                "columnid": "processor",
                "value": "9.1",
                "tllabel": "Dual Core",
                "trlabel": "OS : iOS 7"
            },
            {
                "rowid": "IPHONES5",
                "columnid": "screen",
                "value": "8.6",
                "tllabel": "4 inch",
                "trlabel": "Retina LCD screen"
            },
            {
                "rowid": "IPHONES5",
                "columnid": "price",
                "value": "7.2",
                "tllabel": "$649"
            },
            {
                "rowid": "IPHONES5",
                "columnid": "backup",
                "value": "8.4",
                "tllabel": "10 Hrs",
                "trlabel": "Battery : 1560 MAH"
            },
            {
                "rowid": "IPHONES5",
                "columnid": "cam",
                "value": "9.5",
                "tllabel": "8 MP",
                "trlabel": "Front Camera : 1.2 MP"
            },
            {
                "rowid": "LUMIA",
                "columnid": "processor",
                "value": "8.8",
                "tllabel": "Quad Core 2.2 GHz",
                "trlabel": "OS: Windows Phone 8"
            },
            {
                "rowid": "LUMIA",
                "columnid": "screen",
                "value": "9.1",
                "tllabel": "6 inch",
                "trlabel": "LCD screen"
            },
            {
                "rowid": "LUMIA",
                "columnid": "price",
                "value": "9.7",
                "tllabel": "$470"
            },
            {
                "rowid": "LUMIA",
                "columnid": "backup",
                "value": "9.2",
                "tllabel": "27 Hrs",
                "trlabel": "Battery : 3400 MAH"
            },
            {
                "rowid": "LUMIA",
                "columnid": "cam",
                "value": "8.1",
                "tllabel": "20MP",
                "trlabel": "Front Camera : 1.2 MP"
            }
        ]
    }];
    const colorRange = {
        "gradient": "0",
        "minvalue": "0",
        "code": "E24B1A",
        "startlabel": "Poor",
        "endlabel": "Good",
        "color": [
            {
                "code": "E24B1A",
                "minvalue": "1",
                "maxvalue": "5",
                "label": "Bad"
            },
            {
                "code": "F6BC33",
                "minvalue": "5",
                "maxvalue": "8.5",
                "label": "Average"
            },
            {
                "code": "6DA81E",
                "minvalue": "8.5",
                "maxvalue": "10",
                "label": "Good"
            }
        ]
    };
    const chartConfigurations = {
        type: 'heatmap',
        renderAt: 'chart-container',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Top Smartphone Ratings",
                "subcaption": "By Features",
                "xAxisName": "Features",
                "yAxisName": "Model",
                "plottooltext": "<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel :</div>{br}Rating : <b>$dataValue</b>{br}$columnLabel : <b>$tlLabel</b>{br}<b>$trLabel</b>",
                "theme": "fusion"
            },
        "rows": rows,
        "columns": columns,
        "dataset": dataset,
        "colorrange": colorRange
        }
    };

    FusionCharts.ready(function(){
        var fusioncharts = new FusionCharts(chartConfigurations);
    fusioncharts.render();
    });

</script>
</head>
<body>
<div id="chart-container">FusionCharts XT will load here!</div>
</body>
</html>
```

Heat map belongs to the family of PowerCharts in FusionCharts. You can also create various charts belonging to the PowerCharts family in a similar way. Check out the different types of PowerCharts here.

## Gantt Chart
A Gantt chart is a date/time-based chart, which you can use to plot tasks along with their start and end dates/times. You can also use the chart to define milestones for a project, indicating different stages with their deadlines. That way, you can constantly keep an eye on project status, and plan alternate strategies in case you encounter an unprecedented delay.

In the section below, we will see how to build a Gantt chart.

{% embed_chart standard-charts-gantt-chart-example-1.js %}

As you can see in the Gantt chart above, the data plot is indicating the planned and the actual achievements, as well as the delays, with the help of different colors. In the above chart, we have plotted the Project Plan for the opening of a new store. To convert the data provided above to a data format that FusionCharts can use, you need the following properties:
- `categories`
- `processes`
- `datatable`
- `tasks`
- `connectors`

The diagram below can give you an idea about how we are going to assign values to these properties.

{% embed_chartAnatomy gantt-chart.json %}

In the sample above, the chart shows the project structure for opening a new store. The data in the JSON format for the above chart looks as follows:

```
//Define the categories(month-labels) of the Gantt chart
const categories = [{
    "bgcolor": "#999999",
    "category": [{
    "start": "1/4/2014",
    "end": "30/6/2014",
    "label": "Months",
    "align": "middle",
    "fontcolor": "#ffffff",
    "fontsize": "12"
    }]
}, {
    "bgcolor": "#999999",
    "align": "middle",
    "fontcolor": "#ffffff",
    "fontsize": "12",
    "category": [{
    "start": "1/4/2014",
    "end": "30/4/2014",
    "label": "April"
    }, {
    "start": "1/5/2014",
    "end": "31/5/2014",
    "label": "May"
    }, {
    "start": "1/6/2014",
    "end": "30/6/2014",
    "label": "June"
    }]
}, {
    "bgcolor": "#ffffff",
    "fontcolor": "#333333",
    "fontsize": "11",
    "align": "center",
    "category": [{
    "start": "1/4/2014",
    "end": "5/4/2014",
    "label": "Week 1"
    }, {
    "start": "6/4/2014",
    "end": "12/4/2014",
    "label": "Week 2"
    }, {
    "start": "13/4/2014",
    "end": "19/4/2014",
    "label": "Week 3"
    }, {
    "start": "20/4/2014",
    "end": "26/4/2014",
    "label": "Week 4"
    }, {
    "start": "27/4/2014",
    "end": "3/5/2014",
    "label": "Week 5"
    }, {
    "start": "4/5/2014",
    "end": "10/5/2014",
    "label": "Week 6"
    }, {
    "start": "11/5/2014",
    "end": "17/5/2014",
    "label": "Week 7"
    }, {
    "start": "18/5/2014",
    "end": "24/5/2014",
    "label": "Week 8"
    }, {
    "start": "25/5/2014",
    "end": "31/5/2014",
    "label": "Week 9"
    }, {
    "start": "1/6/2014",
    "end": "7/6/2014",
    "label": "Week 10"
    }, {
    "start": "8/6/2014",
    "end": "14/6/2014",
    "label": "Week 11"
    }, {
    "start": "15/6/2014",
    "end": "21/6/2014",
    "label": "Week 12"
    }, {
    "start": "22/6/2014",
    "end": "28/6/2014",
    "label": "Week 13"
    }]
}];
// Define the processes which are a part of the planning
const processes = {
    "headertext": "Task",
    "fontcolor": "#000000",
    "fontsize": "11",
    "isanimated": "1",
    "bgcolor": "#6baa01",
    "headervalign": "bottom",
    "headeralign": "left",
    "headerbgcolor": "#999999",
    "headerfontcolor": "#ffffff",
    "headerfontsize": "12",
    "align": "left",
    "isbold": "1",
    "bgalpha": "25",
    "process": [{
        "label": "Clear site",
        "id": "1"
        }, {
        "label": "Excavate Foundation",
        "id": "2",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Concrete Foundation",
        "id": "3",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Footing to DPC",
        "id": "4",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Drainage Services",
        "id": "5",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Backfill",
        "id": "6",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Ground Floor",
        "id": "7"
        }, {
        "label": "Walls on First Floor",
        "id": "8"
        }, {
        "label": "First Floor Carcass",
        "id": "9",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "First Floor Deck",
        "id": "10",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Roof Structure",
        "id": "11"
        }, {
        "label": "Roof Covering",
        "id": "12"
        }, {
        "label": "Rainwater Gear",
        "id": "13"
        }, {
        "label": "Windows",
        "id": "14"
        }, {
        "label": "External Doors",
        "id": "15"
        }, {
        "label": "Connect Electricity",
        "id": "16"
        }, {
        "label": "Connect Water Supply",
        "id": "17",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Install Air Conditioning",
        "id": "18",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Interior Decoration",
        "id": "19",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Fencing And signs",
        "id": "20"
        }, {
        "label": "Exterior Decoration",
        "id": "21",
        "hoverBandColor": "#e44a00",
        "hoverBandAlpha": "40"
        }, {
        "label": "Setup racks",
        "id": "22"
    }]
};
//Define the start and end dates of each process
const datatable = {
    "showprocessname": "1",
    "namealign": "left",
    "fontcolor": "#000000",
    "fontsize": "10",
    "valign": "right",
    "align": "center",
    "headervalign": "bottom",
    "headeralign": "center",
    "headerbgcolor": "#999999",
    "headerfontcolor": "#ffffff",
    "headerfontsize": "12",
    "datacolumn": [{
        "bgcolor": "#eeeeee",
        "headertext": "Actual{br}Start{br}Date",
        "text": [{
            "label": "9/4/2014"
        }, {
            "label": "13/4/2014"
        }, {
            "label": "26/4/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40",

        }, {
            "label": "4/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "6/5/2014"
        }, {
            "label": "5/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "11/5/2014"
        }, {
            "label": "16/5/2014"
        }, {
            "label": "16/5/2014"
        }, {
            "label": "21/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "25/5/2014"
        }, {
            "label": "28/5/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "2/6/2014"
        }, {
            "label": "5/6/2014"
        }, {
            "label": "18/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "16/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "23/6/2014"
        }, {
            "label": "18/6/2014"
        }, {
            "label": "25/6/2014"
        }]
        }, {
        "bgcolor": "#eeeeee",
        "headertext": "Actual{br}End{br}Date",
        "text": [{
            "label": "12/4/2014"
        }, {
            "label": "25/4/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "4/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "10/5/2014"
        }, {
            "label": "10/5/2014"
        }, {
            "label": "11/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "14/5/2014"
        }, {
            "label": "19/5/2014"
        }, {
            "label": "21/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "24/5/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "27/5/2014"
        }, {
            "label": "1/6/2014"
        }, {
            "label": "6/6/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "4/6/2014"
        }, {
            "label": "7/6/2014"
        }, {
            "label": "17/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "20/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "23/6/2014"
        }, {
            "label": "23/6/2014"
        }, {
            "label": "23/6/2014",
            "bgcolor": "#e44a00",
            "bgAlpha": "40"
        }, {
            "label": "28/6/2014"
        }]
    }]
};
//Define the actual labelled tasks - Planned and Actual
const tasks = {
    "task": [{
    "label": "Planned",
    "processid": "1",
    "start": "9/4/2014",
    "end": "12/4/2014",
    "id": "1-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "1",
    "start": "9/4/2014",
    "end": "12/4/2014",
    "id": "1",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "2",
    "start": "13/4/2014",
    "end": "23/4/2014",
    "id": "2-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "2",
    "start": "13/4/2014",
    "end": "25/4/2014",
    "id": "2",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "2",
    "start": "23/4/2014",
    "end": "25/4/2014",
    "id": "2-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 2 days."
    }, {
    "label": "Planned",
    "processid": "3",
    "start": "23/4/2014",
    "end": "30/4/2014",
    "id": "3-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "3",
    "start": "26/4/2014",
    "end": "4/5/2014",
    "id": "3",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "3",
    "start": "3/5/2014",
    "end": "4/5/2014",
    "id": "3-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 1 days."
    }, {
    "label": "Planned",
    "processid": "4",
    "start": "3/5/2014",
    "end": "10/5/2014",
    "id": "4-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "4",
    "start": "4/5/2014",
    "end": "10/5/2014",
    "id": "4",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "5",
    "start": "6/5/2014",
    "end": "11/5/2014",
    "id": "5-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "5",
    "start": "6/5/2014",
    "end": "10/5/2014",
    "id": "5",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "6",
    "start": "4/5/2014",
    "end": "7/5/2014",
    "id": "6-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "6",
    "start": "5/5/2014",
    "end": "11/5/2014",
    "id": "6",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "6",
    "start": "7/5/2014",
    "end": "11/5/2014",
    "id": "6-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 4 days."
    }, {
    "label": "Planned",
    "processid": "7",
    "start": "11/5/2014",
    "end": "14/5/2014",
    "id": "7-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "7",
    "start": "11/5/2014",
    "end": "14/5/2014",
    "id": "7",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "8",
    "start": "16/5/2014",
    "end": "19/5/2014",
    "id": "8-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "8",
    "start": "16/5/2014",
    "end": "19/5/2014",
    "id": "8",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "9",
    "start": "16/5/2014",
    "end": "18/5/2014",
    "id": "9-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "9",
    "start": "16/5/2014",
    "end": "21/5/2014",
    "id": "9",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "9",
    "start": "18/5/2014",
    "end": "21/5/2014",
    "id": "9-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 3 days."
    }, {
    "label": "Planned",
    "processid": "10",
    "start": "20/5/2014",
    "end": "23/5/2014",
    "id": "10-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "10",
    "start": "21/5/2014",
    "end": "24/5/2014",
    "id": "10",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "10",
    "start": "23/5/2014",
    "end": "24/5/2014",
    "id": "10-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 1 days."
    }, {
    "label": "Planned",
    "processid": "11",
    "start": "25/5/2014",
    "end": "27/5/2014",
    "id": "11-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "11",
    "start": "25/5/2014",
    "end": "27/5/2014",
    "id": "11",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "12",
    "start": "28/5/2014",
    "end": "1/6/2014",
    "id": "12-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "12",
    "start": "28/5/2014",
    "end": "1/6/2014",
    "id": "12",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "13",
    "start": "4/6/2014",
    "end": "6/6/2014",
    "id": "13-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "13",
    "start": "4/6/2014",
    "end": "6/6/2014",
    "id": "13",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "14",
    "start": "4/6/2014",
    "end": "4/6/2014",
    "id": "14-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "14",
    "start": "4/6/2014",
    "end": "4/6/2014",
    "id": "14",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "15",
    "start": "4/6/2014",
    "end": "4/6/2014",
    "id": "15-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "15",
    "start": "4/6/2014",
    "end": "4/6/2014",
    "id": "15",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "16",
    "start": "2/6/2014",
    "end": "7/6/2014",
    "id": "16-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "16",
    "start": "2/6/2014",
    "end": "7/6/2014",
    "id": "16",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "17",
    "start": "5/6/2014",
    "end": "10/6/2014",
    "id": "17-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "17",
    "start": "5/6/2014",
    "end": "17/6/2014",
    "id": "17",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "17",
    "start": "10/6/2014",
    "end": "17/6/2014",
    "id": "17-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 7 days."
    }, {
    "label": "Planned",
    "processid": "18",
    "start": "10/6/2014",
    "end": "12/6/2014",
    "id": "18-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Delay",
    "processid": "18",
    "start": "18/6/2014",
    "end": "20/6/2014",
    "id": "18",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 8 days."
    }, {
    "label": "Planned",
    "processid": "19",
    "start": "15/6/2014",
    "end": "23/6/2014",
    "id": "19-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "19",
    "start": "16/6/2014",
    "end": "23/6/2014",
    "id": "19",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "20",
    "start": "23/6/2014",
    "end": "23/6/2014",
    "id": "20-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "20",
    "start": "23/6/2014",
    "end": "23/6/2014",
    "id": "20",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Planned",
    "processid": "21",
    "start": "18/6/2014",
    "end": "21/6/2014",
    "id": "21-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "21",
    "start": "18/6/2014",
    "end": "23/6/2014",
    "id": "21",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }, {
    "label": "Delay",
    "processid": "21",
    "start": "21/6/2014",
    "end": "23/6/2014",
    "id": "21-2",
    "color": "#e44a00",
    "toppadding": "56%",
    "height": "32%",
    "tooltext": "Delayed by 2 days."
    }, {
    "label": "Planned",
    "processid": "22",
    "start": "24/6/2014",
    "end": "28/6/2014",
    "id": "22-1",
    "color": "#008ee4",
    "height": "32%",
    "toppadding": "12%"
    }, {
    "label": "Actual",
    "processid": "22",
    "start": "25/6/2014",
    "end": "28/6/2014",
    "id": "22",
    "color": "#6baa01",
    "toppadding": "56%",
    "height": "32%"
    }]
};
//Define the connections between different tasks
const connectors = [{
    "connector": [{
    "fromtaskid": "1",
    "totaskid": "2",
    "color": "#008ee4",
    "thickness": "2",
    "fromtaskconnectstart_": "1"
    }, {
    "fromtaskid": "2-2",
    "totaskid": "3",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "3-2",
    "totaskid": "4",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "3-2",
    "totaskid": "6",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "7",
    "totaskid": "8",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "7",
    "totaskid": "9",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "12",
    "totaskid": "16",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "12",
    "totaskid": "17",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "17-2",
    "totaskid": "18",
    "color": "#008ee4",
    "thickness": "2"
    }, {
    "fromtaskid": "19",
    "totaskid": "22",
    "color": "#008ee4",
    "thickness": "2"
    }]
}];
```
Now that the data is ready, let us dive in directly to render the chart. The consolidated code is given below:

```
<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
<!-- Include fusioncharts core library -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<!-- Include fusion theme -->
<script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script type="text/javascript">
    //Define the categories(month-labels) of the Gantt chart
    const categories = [{
        "bgcolor": "#999999",
        "category": [{
        "start": "1/4/2014",
        "end": "30/6/2014",
        "label": "Months",
        "align": "middle",
        "fontcolor": "#ffffff",
        "fontsize": "12"
        }]
    }, {
        "bgcolor": "#999999",
        "align": "middle",
        "fontcolor": "#ffffff",
        "fontsize": "12",
        "category": [{
        "start": "1/4/2014",
        "end": "30/4/2014",
        "label": "April"
        }, {
        "start": "1/5/2014",
        "end": "31/5/2014",
        "label": "May"
        }, {
        "start": "1/6/2014",
        "end": "30/6/2014",
        "label": "June"
        }]
    }, {
        "bgcolor": "#ffffff",
        "fontcolor": "#333333",
        "fontsize": "11",
        "align": "center",
        "category": [{
        "start": "1/4/2014",
        "end": "5/4/2014",
        "label": "Week 1"
        }, {
        "start": "6/4/2014",
        "end": "12/4/2014",
        "label": "Week 2"
        }, {
        "start": "13/4/2014",
        "end": "19/4/2014",
        "label": "Week 3"
        }, {
        "start": "20/4/2014",
        "end": "26/4/2014",
        "label": "Week 4"
        }, {
        "start": "27/4/2014",
        "end": "3/5/2014",
        "label": "Week 5"
        }, {
        "start": "4/5/2014",
        "end": "10/5/2014",
        "label": "Week 6"
        }, {
        "start": "11/5/2014",
        "end": "17/5/2014",
        "label": "Week 7"
        }, {
        "start": "18/5/2014",
        "end": "24/5/2014",
        "label": "Week 8"
        }, {
        "start": "25/5/2014",
        "end": "31/5/2014",
        "label": "Week 9"
        }, {
        "start": "1/6/2014",
        "end": "7/6/2014",
        "label": "Week 10"
        }, {
        "start": "8/6/2014",
        "end": "14/6/2014",
        "label": "Week 11"
        }, {
        "start": "15/6/2014",
        "end": "21/6/2014",
        "label": "Week 12"
        }, {
        "start": "22/6/2014",
        "end": "28/6/2014",
        "label": "Week 13"
        }]
    }];
    // Define the processes which are a part of the planning
    const processes = {
        "headertext": "Task",
        "fontcolor": "#000000",
        "fontsize": "11",
        "isanimated": "1",
        "bgcolor": "#6baa01",
        "headervalign": "bottom",
        "headeralign": "left",
        "headerbgcolor": "#999999",
        "headerfontcolor": "#ffffff",
        "headerfontsize": "12",
        "align": "left",
        "isbold": "1",
        "bgalpha": "25",
        "process": [{
            "label": "Clear site",
            "id": "1"
            }, {
            "label": "Excavate Foundation",
            "id": "2",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Concrete Foundation",
            "id": "3",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Footing to DPC",
            "id": "4",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Drainage Services",
            "id": "5",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Backfill",
            "id": "6",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Ground Floor",
            "id": "7"
            }, {
            "label": "Walls on First Floor",
            "id": "8"
            }, {
            "label": "First Floor Carcass",
            "id": "9",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "First Floor Deck",
            "id": "10",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Roof Structure",
            "id": "11"
            }, {
            "label": "Roof Covering",
            "id": "12"
            }, {
            "label": "Rainwater Gear",
            "id": "13"
            }, {
            "label": "Windows",
            "id": "14"
            }, {
            "label": "External Doors",
            "id": "15"
            }, {
            "label": "Connect Electricity",
            "id": "16"
            }, {
            "label": "Connect Water Supply",
            "id": "17",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Install Air Conditioning",
            "id": "18",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Interior Decoration",
            "id": "19",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Fencing And signs",
            "id": "20"
            }, {
            "label": "Exterior Decoration",
            "id": "21",
            "hoverBandColor": "#e44a00",
            "hoverBandAlpha": "40"
            }, {
            "label": "Setup racks",
            "id": "22"
        }]
    };
    //Define the start and end dates of each process
    const datatable = {
        "showprocessname": "1",
        "namealign": "left",
        "fontcolor": "#000000",
        "fontsize": "10",
        "valign": "right",
        "align": "center",
        "headervalign": "bottom",
        "headeralign": "center",
        "headerbgcolor": "#999999",
        "headerfontcolor": "#ffffff",
        "headerfontsize": "12",
        "datacolumn": [{
            "bgcolor": "#eeeeee",
            "headertext": "Actual{br}Start{br}Date",
            "text": [{
                "label": "9/4/2014"
            }, {
                "label": "13/4/2014"
            }, {
                "label": "26/4/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40",

            }, {
                "label": "4/5/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "6/5/2014"
            }, {
                "label": "5/5/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "11/5/2014"
            }, {
                "label": "16/5/2014"
            }, {
                "label": "16/5/2014"
            }, {
                "label": "21/5/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "25/5/2014"
            }, {
                "label": "28/5/2014"
            }, {
                "label": "4/6/2014"
            }, {
                "label": "4/6/2014"
            }, {
                "label": "4/6/2014"
            }, {
                "label": "2/6/2014"
            }, {
                "label": "5/6/2014"
            }, {
                "label": "18/6/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "16/6/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "23/6/2014"
            }, {
                "label": "18/6/2014"
            }, {
                "label": "25/6/2014"
            }]
            }, {
            "bgcolor": "#eeeeee",
            "headertext": "Actual{br}End{br}Date",
            "text": [{
                "label": "12/4/2014"
            }, {
                "label": "25/4/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "4/5/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "10/5/2014"
            }, {
                "label": "10/5/2014"
            }, {
                "label": "11/5/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "14/5/2014"
            }, {
                "label": "19/5/2014"
            }, {
                "label": "21/5/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "24/5/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "27/5/2014"
            }, {
                "label": "1/6/2014"
            }, {
                "label": "6/6/2014"
            }, {
                "label": "4/6/2014"
            }, {
                "label": "4/6/2014"
            }, {
                "label": "7/6/2014"
            }, {
                "label": "17/6/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "20/6/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "23/6/2014"
            }, {
                "label": "23/6/2014"
            }, {
                "label": "23/6/2014",
                "bgcolor": "#e44a00",
                "bgAlpha": "40"
            }, {
                "label": "28/6/2014"
            }]
        }]
    };
    //Define the actual labelled tasks - Planned and Actual
    const tasks = {
        "task": [{
        "label": "Planned",
        "processid": "1",
        "start": "9/4/2014",
        "end": "12/4/2014",
        "id": "1-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "1",
        "start": "9/4/2014",
        "end": "12/4/2014",
        "id": "1",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "2",
        "start": "13/4/2014",
        "end": "23/4/2014",
        "id": "2-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "2",
        "start": "13/4/2014",
        "end": "25/4/2014",
        "id": "2",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Delay",
        "processid": "2",
        "start": "23/4/2014",
        "end": "25/4/2014",
        "id": "2-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 2 days."
        }, {
        "label": "Planned",
        "processid": "3",
        "start": "23/4/2014",
        "end": "30/4/2014",
        "id": "3-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "3",
        "start": "26/4/2014",
        "end": "4/5/2014",
        "id": "3",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Delay",
        "processid": "3",
        "start": "3/5/2014",
        "end": "4/5/2014",
        "id": "3-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 1 days."
        }, {
        "label": "Planned",
        "processid": "4",
        "start": "3/5/2014",
        "end": "10/5/2014",
        "id": "4-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "4",
        "start": "4/5/2014",
        "end": "10/5/2014",
        "id": "4",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "5",
        "start": "6/5/2014",
        "end": "11/5/2014",
        "id": "5-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "5",
        "start": "6/5/2014",
        "end": "10/5/2014",
        "id": "5",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "6",
        "start": "4/5/2014",
        "end": "7/5/2014",
        "id": "6-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "6",
        "start": "5/5/2014",
        "end": "11/5/2014",
        "id": "6",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Delay",
        "processid": "6",
        "start": "7/5/2014",
        "end": "11/5/2014",
        "id": "6-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 4 days."
        }, {
        "label": "Planned",
        "processid": "7",
        "start": "11/5/2014",
        "end": "14/5/2014",
        "id": "7-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "7",
        "start": "11/5/2014",
        "end": "14/5/2014",
        "id": "7",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "8",
        "start": "16/5/2014",
        "end": "19/5/2014",
        "id": "8-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "8",
        "start": "16/5/2014",
        "end": "19/5/2014",
        "id": "8",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "9",
        "start": "16/5/2014",
        "end": "18/5/2014",
        "id": "9-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "9",
        "start": "16/5/2014",
        "end": "21/5/2014",
        "id": "9",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Delay",
        "processid": "9",
        "start": "18/5/2014",
        "end": "21/5/2014",
        "id": "9-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 3 days."
        }, {
        "label": "Planned",
        "processid": "10",
        "start": "20/5/2014",
        "end": "23/5/2014",
        "id": "10-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "10",
        "start": "21/5/2014",
        "end": "24/5/2014",
        "id": "10",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Delay",
        "processid": "10",
        "start": "23/5/2014",
        "end": "24/5/2014",
        "id": "10-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 1 days."
        }, {
        "label": "Planned",
        "processid": "11",
        "start": "25/5/2014",
        "end": "27/5/2014",
        "id": "11-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "11",
        "start": "25/5/2014",
        "end": "27/5/2014",
        "id": "11",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "12",
        "start": "28/5/2014",
        "end": "1/6/2014",
        "id": "12-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "12",
        "start": "28/5/2014",
        "end": "1/6/2014",
        "id": "12",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "13",
        "start": "4/6/2014",
        "end": "6/6/2014",
        "id": "13-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "13",
        "start": "4/6/2014",
        "end": "6/6/2014",
        "id": "13",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "14",
        "start": "4/6/2014",
        "end": "4/6/2014",
        "id": "14-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "14",
        "start": "4/6/2014",
        "end": "4/6/2014",
        "id": "14",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "15",
        "start": "4/6/2014",
        "end": "4/6/2014",
        "id": "15-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "15",
        "start": "4/6/2014",
        "end": "4/6/2014",
        "id": "15",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "16",
        "start": "2/6/2014",
        "end": "7/6/2014",
        "id": "16-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "16",
        "start": "2/6/2014",
        "end": "7/6/2014",
        "id": "16",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "17",
        "start": "5/6/2014",
        "end": "10/6/2014",
        "id": "17-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "17",
        "start": "5/6/2014",
        "end": "17/6/2014",
        "id": "17",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Delay",
        "processid": "17",
        "start": "10/6/2014",
        "end": "17/6/2014",
        "id": "17-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 7 days."
        }, {
        "label": "Planned",
        "processid": "18",
        "start": "10/6/2014",
        "end": "12/6/2014",
        "id": "18-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Delay",
        "processid": "18",
        "start": "18/6/2014",
        "end": "20/6/2014",
        "id": "18",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 8 days."
        }, {
        "label": "Planned",
        "processid": "19",
        "start": "15/6/2014",
        "end": "23/6/2014",
        "id": "19-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "19",
        "start": "16/6/2014",
        "end": "23/6/2014",
        "id": "19",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "20",
        "start": "23/6/2014",
        "end": "23/6/2014",
        "id": "20-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "20",
        "start": "23/6/2014",
        "end": "23/6/2014",
        "id": "20",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Planned",
        "processid": "21",
        "start": "18/6/2014",
        "end": "21/6/2014",
        "id": "21-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "21",
        "start": "18/6/2014",
        "end": "23/6/2014",
        "id": "21",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }, {
        "label": "Delay",
        "processid": "21",
        "start": "21/6/2014",
        "end": "23/6/2014",
        "id": "21-2",
        "color": "#e44a00",
        "toppadding": "56%",
        "height": "32%",
        "tooltext": "Delayed by 2 days."
        }, {
        "label": "Planned",
        "processid": "22",
        "start": "24/6/2014",
        "end": "28/6/2014",
        "id": "22-1",
        "color": "#008ee4",
        "height": "32%",
        "toppadding": "12%"
        }, {
        "label": "Actual",
        "processid": "22",
        "start": "25/6/2014",
        "end": "28/6/2014",
        "id": "22",
        "color": "#6baa01",
        "toppadding": "56%",
        "height": "32%"
        }]
    };
    //Define the connections between different tasks
    const connectors = [{
        "connector": [{
        "fromtaskid": "1",
        "totaskid": "2",
        "color": "#008ee4",
        "thickness": "2",
        "fromtaskconnectstart_": "1"
        }, {
        "fromtaskid": "2-2",
        "totaskid": "3",
        "color": "#008ee4",
        "thickness": "2"
        }, {
        "fromtaskid": "3-2",
        "totaskid": "4",
        "color": "#008ee4",
        "thickness": "2"
        }, {
        "fromtaskid": "3-2",
        "totaskid": "6",
        "color": "#008ee4",
        "thickness": "2"
        }, {
        "fromtaskid": "7",
        "totaskid": "8",
        "color": "#008ee4",
        "thickness": "2"
        }, {
        "fromtaskid": "7",
        "totaskid": "9",
        "color": "#008ee4",
        "thickness": "2"
        }, {
        "fromtaskid": "12",
        "totaskid": "16",
        "color": "#008ee4",
        "thickness": "2"
        }, {
        "fromtaskid": "12",
        "totaskid": "17",
        "color": "#008ee4",
        "thickness": "2"
        }, {
        "fromtaskid": "17-2",
        "totaskid": "18",
        "color": "#008ee4",
        "thickness": "2"
        }, {
        "fromtaskid": "19",
        "totaskid": "22",
        "color": "#008ee4",
        "thickness": "2"
        }]
    }];

    //Chart Configurations
    const chartConfigurations = {
        type: 'gantt',
        renderAt: 'chart-container',
        width: '750',
        height: '500',
        dataFormat: 'json',
        dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "New Store Opening - Project Plan",
            "subcaption": "Planned vs Actual",
            "dateformat": "dd/mm/yyyy",
            "outputdateformat": "ddds mns yy",
            "ganttwidthpercent": "60",
            "ganttPaneDuration": "40",
            "ganttPaneDurationUnit": "d",
            "plottooltext": "$processName{br}$label starting date $start{br}$label ending date $end",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "usePlotGradientColor": "0",
            "showCanvasBorder": "0",
            "flatScrollBars": "1",
            "gridbordercolor": "#333333",
            "gridborderalpha": "20",
            "slackFillColor": "#e44a00",
            "taskBarFillMix": "light+0"
        },
        "categories": categories,
        "processes": processes,
        "datatable": datatable,
        "tasks": tasks,
        "connectors": connectors,
        "milestones": {
            "milestone": [{
                "date": "2/6/2014",
                "taskid": "12",
                "color": "#f8bd19",
                "shape": "star",
                "tooltext": "Completion of Phase 1"
            }
            ]
        },
        "legend": {
            "item": [{
            "label": "Planned",
            "color": "#008ee4"
            }, {
            "label": "Actual",
            "color": "#6baa01"
            }, {
            "label": "Slack (Delay)",
            "color": "#e44a00"
            }]
        }
        }
    };


    FusionCharts.ready(function(){
        var fusioncharts = new FusionCharts(chartConfigurations);
    fusioncharts.render();
    });

</script>
</head>
<body>
<div id="chart-container">FusionCharts XT will load here!</div>
</body>
</html>
```

You can also create various charts belonging to the PowerCharts family in a similar way. Check out the different types of otehr charts here.