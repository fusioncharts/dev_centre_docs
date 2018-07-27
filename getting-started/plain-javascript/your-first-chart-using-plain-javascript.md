---
title: Your First Chart using Plain JS | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the plain javascript.
heading: Your First Chart using Plain JS
chartPresent: false
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. Let's build our first chart using FusionCharts Suite XT!

We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/plain-javascript/your-first-chart-using-plain-javascript#create-your-first-chart-1), followed by a [gauge]({% site.baseurl %}/getting-started/plain-javascript/your-first-chart-using-plain-javascript#create-your-first-gauge-8) and a [map]({% site.baseurl %}/getting-started/plain-javascript/your-first-chart-using-plain-javascript#create-your-first-map-13).

Before going through this article, please [install]({% site.baseurl %}/getting-started/plain-javascript/install-using-plain-javascript '@@open-newtab') the `fusioncharts` package, if not already installed.

## Create your first chart

In this section, we will create a chart using the FusionCharts Suite XT library. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a **Column 2D** chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

The data for this chart is represented in a table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

### Convert tabular data into JSON format

FusionCharts accepts data in JSON or XML format. In this section, we will convert the tabular data into JSON format. The converted format is shown below:

> There are different formats of JSON for different groups of charts in FusionCharts - e.g., [single-series]({% site.baseurl %}/chart-guide/standard-charts/line-area-and-column-charts), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
}
```

In the above JSON we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contains a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels or data values. You can also set chart limits and extended properties. The list of functional attributes used in the above JSON are:

* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's JSON data and provided `fusion` (default theme) as its value. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application.

#### Cosmetic Attributes

These attributes let you configure chart cosmetics like color, transparency, font size, etc. Since we are using the `fusion` theme to customize the chart's aesthetics no cosmetic attributes are used in this sample.

For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Include FusionCharts Suite XT library

To include the FusionCharts Suite XT JavaScript library in your HTML page, use the `<script>` tag. Next, include a theme file to style the chart. The theme is called `fusion`, and it is present in the `themes` folder of your download. Refer to the code below:

```html
<html>
<head>
    <title>My first chart using FusionCharts Suite XT</title>
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>
</html>
```

### Create a container for the chart

Each chart in the page needs a container to reside in. A `<div>` element works well as a container for the chart, as defined below:

```html
<body>
  <div id="chartContainer">FusionCharts XT will load here!</div>
</body>

```

Specify a unique ID for the `<div>` container within the web page. The unique ID is used in the chart initialization code to refer to the container.

### Create an instance of the chart

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart is given below:

```javascript
FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
        type: 'column2d', // The chart type
        width: '700', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            chart: {
                // Chart Configuration
                "chart": {
                    "caption": "Countries With Most Oil Reserves [2017-18]",
                    "subCaption": "In MMbbl = One Million barrels",
                    "xAxisName": "Country",
                    "yAxisName": "Reserves (MMbbl)",
                    "numberSuffix": "K",
                    "theme": "fusion",
                },
                // Chart Data
                "data": [{
                    "label": "Venezuela",
                    "value": "290"
                }, {
                    "label": "Saudi",
                    "value": "260"
                }, {
                    "label": "Canada",
                    "value": "180"
                }, {
                    "label": "Iran",
                    "value": "140"
                }, {
                    "label": "Russia",
                    "value": "115"
                }, {
                    "label": "UAE",
                    "value": "100"
                }, {
                    "label": "US",
                    "value": "30"
                }, {
                    "label": "China",
                    "value": "30"
                }]
            }
        }
    }
});
```

In the above code:

* We have created an instance of the **column2d** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 600x400 pixels using `width` and `height`.
* To specify the data format as JSON, we have set the `dataFormat` parameter to json. You can also provide the data in [XML format]({% site.baseurl %}/chart-guide/getting-started/using-xml-as-data-format '@@open-newtab'). 
* The JSON data is embedded as the value of the `dataSource` parameter.

That's it! When you run this HTML page now, you should see a chart representing your data.

The full HTML code is shown below:

```html
<html>

<head>
    <title>My first chart using FusionCharts Suite XT</title>
    <script type="text/javascript" src="https://static.fusioncharts.com/code/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript">
        FusionCharts.ready(function() {
            var revenueChart = new FusionCharts({
                "type": "column2d",
                "renderAt": "chartContainer",
                "width": "700",
                "height": "400",
                "dataFormat": "json",
                "dataSource": {
                    // Chart Configuration
                    "chart": {
                        "caption": "Countries With Most Oil Reserves [2017-18]",
                        "subCaption": "In MMbbl = One Million barrels",
                        "xAxisName": "Country",
                        "yAxisName": "Reserves (MMbbl)",
                        "numberSuffix": "K",
                        "theme": "fusion",
                    },
                    // Chart Data
                    "data": [{
                        "label": "Venezuela",
                        "value": "290"
                    }, {
                        "label": "Saudi",
                        "value": "260"
                    }, {
                        "label": "Canada",
                        "value": "180"
                    }, {
                        "label": "Iran",
                        "value": "140"
                    }, {
                        "label": "Russia",
                        "value": "115"
                    }, {
                        "label": "UAE",
                        "value": "100"
                    }, {
                        "label": "US",
                        "value": "30"
                    }, {
                        "label": "China",
                        "value": "30"
                    }]
                }
            });
            revenueChart.render();
        })
    </script>
</head>
<body>
    <div id="chartContainer">FusionCharts XT will load here!</div>
</body>
</html>
```

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') for a Column 2D chart.

Now, go on and explore other 95+ chart types that we've at [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab'), or explore the configuration [attribute]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## Create your first gauge

Gauges are powerful tools that can showcase using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple "Weekly Customer Satisfaction Index" gauge as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for his customer satisfaction score has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and is green.

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
    // Chart Configuration
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
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "50",
            "code": "#F2726F"
        }, {
            "minValue": "50",
            "maxValue": "75",
            "code": "#FFC533"
        }, {
            "minValue": "75",
            "maxValue": "100",
            "code": "#62B58F"
        }]
    },
    "dials": {
        "dial": [{
            "value": "81"
        }]
    }
}
```

### Include FusionCharts Suite XT library

To include the FusionCharts Suite XT JavaScript library in your HTML page, use the `<script>` tag. Next, include a theme file to style the gauge. The theme is called `fusion`, and it is present in the `themes` folder of your download. Refer to the code below:

```html
<html>
<head>
    <title>My first gauge using FusionCharts Suite XT</title>
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>
    <script type="text/javascript" src="path/to/local/fusioncharts.theme.fusion.js"></script>
</head>
</html>
```

### Create a container for the gauge

Each gauge in the page needs a container to reside in. A `<div>` element works well as a container for the gauge, as defined below:

```html
<body>
  <div id="chartContainer">FusionCharts XT will load here!</div>
</body>
```

Specify a unique ID for the `<div>` container within the web page. The unique ID is used in the chart initialization code to refer to the container.

### Create an instance of the gauge

In this step, we will:

* Create an instance of the gauge type as **angulargauge**.
* Set the width and height (in pixels or %).
* Finally, specify the JSON data for the chart as string.

The code to render a guage is given below:

```javascript
FusionCharts.ready(function() {
    var csatGauge = new FusionCharts({
        type: 'angulargauge', // Chart type
        renderAt: 'chart-container', // Container
        width: '450', // Width of the chart
        height: '250', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
            chart: {
                // Chart Configuration
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
                "colorRange": {
                    "color": [{
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#F2726F"
                    }, {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#FFC533"
                    }, {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#62B58F"
                    }]
                },
                "dials": {
                    "dial": [{
                        "value": "81"
                    }]
                }
            }
        }
    }
});
```

The full HTML code is given below:

```html
<html>

<head>
    <title>My first gauge using FusionWidgets XT</title>
    <script type="text/javascript" src="https://static.fusioncharts.com/code/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript">
        FusionCharts.ready(function() {
            var csatGauge = new FusionCharts({
                "type": "angulargauge",
                "renderAt": "chart-container",
                "width": "400",
                "height": "250",
                "dataFormat": "json",
                "dataSource": {
                    // Chart Configuration
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
                    "colorRange": {
                        "color": [{
                            "minValue": "0",
                            "maxValue": "50",
                            "code": "#F2726F"
                        }, {
                            "minValue": "50",
                            "maxValue": "75",
                            "code": "#FFC533"
                        }, {
                            "minValue": "75",
                            "maxValue": "100",
                            "code": "#62B58F"
                        }]
                    },
                    "dials": {
                        "dial": [{
                            "value": "81"
                        }]
                    }
                }
            csatGauge.render();
        });
    </script>
</head>

<body>
    <div id="chart-container">An angular gauge will load here!</div>
</body>

</html>
```

See the complete list of[ all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for a angular gauge.

## Create your first map

In this section, we will create a visualization using the map of **World** showing the **Average annual population growth** across all continents. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for the map is represented in a table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

> In the above table, the column **Entity Name** represents the geographical entities represnted in the map, whose full names are given in the **State** column in this example. 

However, when you convert the data in a format acceptable by FusionCharts, the entities are denoted by the `id` key in the `data` object (refer to the `json` data in the next section). 

For any map visualization you create, it is imperative that you provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF`, and not `AFR`. 

We have detailed [Map Specification Sheet]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab') for all the maps that can be rendered using FusionCharts - please refer to them for the correct `id`s of the map you want to create.

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
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
    "colorrange": {
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
    },
    // Source data as JSON --> id represents countries of world.
    "data": [{
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
    }]
}
```

### Create an instance of the map

In this step, we will create an instance of the map type as **world**, set the **width** and the **height** (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart is given below:

```javascript
FusionCharts.ready(  function  () { 
    var  salesByState =   new  FusionCharts({
        type: 'world', // Map type
        renderAt: 'chart-container', // Container
        width: '800', // Width of the chart
        height: '550', // Height of the chart
        dataFormat: 'json', // Data Type
        dataSource: {
            chart: {
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
                "colorrange": {
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
                },
                // Source data as JSON --> id represents countries of world.
                "data": [{
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
                }]
            }
        }
    }
});
```

The full HTML code is given below:

```html
<html>

<head>
    <title>My First map using FusionCharts Suite XT</title>
    <script type="text/javascript" src="https://static.fusioncharts.com/code/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="https://static.fusioncharts.com/code/latest/fusioncharts.maps.js"></script>
    <script type="text/javascript" src="https://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script type="text/javascript">
        FusionCharts.ready(function() {
            var salesByState = new FusionCharts({
                "type": "maps/world",
                "renderAt": "chartContainer",
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
                    "colorrange": {
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
                    },
                    // Source data as JSON --> id represents countries of world.
                    "data": [{
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
                    }]
                }
            });
            salesByState.render();
        });
    </script>
</head>

<body>
    <div id="chartContainer">FusionMaps XT will load map here!</div>
</body>

</html>
```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') for the map of world. A list of countries of WORLD, and their respective `id`, can be found at [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case something is wrong, and you are unable to see the chart, check for the following:

* If you don't see the chart getting rendered on the browser, it might be because some browsers does not allow JavaScript files to be loaded and run from the local filesystem. In such cases, either try with a different browser, or create a local/remote server and server the webpages containing the charts from the server.

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.