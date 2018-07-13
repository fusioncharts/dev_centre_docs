---
permalink: getting-started/java/your-first-chart-using-java.html
title: Your First Chart in Java using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the FusionCharts JSP wrapper.
heading: Your First Chart in Java using FusionCharts
chartPresent: false
---

FusionCharts Suite XT includes the FusionCharts JSP wrapper that lets you create interactive, data-driven charts.

JavaScript and HTML code is used to generate charts in the browsers. The server-side JSP wrapper generates the required JavaScript and HTML code as a string, which is then used to render charts on a browser page. We'll start with simple examples of creating a [chart]({% site.baseurl %}/getting-started/java/your-first-chart-using-java#create-your-first-chart-1), then a [gauge]({% site.baseurl %}/getting-started/jsp/your-first-chart-using-jsp#create-your-first-gauge-7) and a [map]({% site.baseurl %}/getting-started/jsp/your-first-chart-using-jsp#create-your-first-map-10).

Before going through this article, please [install]({% site.baseurl %}/getting-started/jsp/install-using-jsp '@@open-newtab') FusionCharts JSP wrapper, if not already installed.

## Create your first chart

In this section, we will create a chart using `FusionCharts JSP` server-side wrapper. We will create a **Column 2D** chart, which has the `column2d` chart alias in FusionCharts. We have 95+ chart types with their respective aliases for you to explore. Find the complete list of chart types [here]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab').

Let's start with a simple example of "Countries With Most Oil Reserves" chart, which we will plot in a Column 2D chart as shown below:

{% embed_chart getting-started-your-first-chart.js %}

### The data for this chart is represented in a table below:

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

### Convert tabular data into JSON/XML format

Now that you have the tabular data ready, it's time to convert it into JSON/XML format, as FusionCharts accepts data in JSON or XML format. The converted data will look as shown below:

> There are different formats of JSON for different groups of charts in FusionCharts - e.g., single-series (which you're seeing here), [multi-series]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts '@@open-newtab'), [combination]({% site.baseurl %}/chart-guide/standard-charts/combination-charts '@@open-newtab'), etc.

{% embed_data getting-started-your-first-chart.js %}

In the above code we have:

* Created the chart object to define the elements of the `chart`.
* Then, each row of the tabular data is present within the `data` array to specify the labels and their corresponding values.

Both the `chart` object and the `data` array contains a set of key-value pairs known as attributes. These attributes are used to set the functional and cosmetic properties of the chart as defined below:

#### Functional Attributes

Functional attributes let you control a variety of functional elements on the chart. For example, you can opt to show/hide data labels, data values. You can also set chart limits and extended properties. The list of functional attributes used in the above code are:

* `showLabels` sets the  configuration whether the x-axis labels will be displayed or not.
* `showValue` sets the configuration whether data values will be displayed along with the data plot on chart.
* `caption` sets the caption of the chart.
* `subcaption` sets the sub-caption of the chart.
* `xAxisName` sets the name of the x-axis, whereas `yAxisName` sets the name of the y-axis.
* `numberPrefix` adds prefix to all the numbers visible on the chart.
* Please note, we have used the `theme` attribute in the chart's data and provided fusion (default theme) as the value of it. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application.

#### Cosmetics Attributes

Cosmetic attributes let you configure chart cosmetics like color, transparency, font size etc. Since we are using the `fusion` theme to customize the chart's look and feel no cosmetic attributes are used in this sample. For a detailed list of cosmetic attributes click here.

For the detailed list of attributes, click [here]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab').

### Create an instance of the chart

In this step, we will create an instance of the chart type as **column2d**. Import FusionCharts reference to your page, add &lt;div&gt; to render the chart and set the width and height (in pixels or %), and finally specify the data for the chart as string.

**Step 1**

Firstly, import FusionCharts reference to your `.jsp` page.

```
<%@page import="fusioncharts.FusionCharts" %>
```

*Step 2**

Create a container using &lt;div&gt;, to render the chart.

```HTML
<div id="chart"></div>
```

The code to render the chart is given below:

```jsp
//initialize chart
<%
    FusionCharts columnChart= new FusionCharts(
    "column2d", // Chart Type
    "chart1", // Chart ID
    "700", // Width of the chart 
    "400", // Height of the chart
    "chart", // Chart Container
    "json", // Data Format
    "DataSource": {
        "chart": {
            ...
        }
    }
    );
%>

//render chart
<%=columnChart.render()%>
```

In the above code:

* We have created an instance of the **column2d** chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 700x400 pixels using `width` and `height`.
* To specify the data format as JSON, we have set the `dataFormat` parameter to json. You can also provide the data in [XML format]({% site.baseurl %}/chart-guide/getting-started/using-xml-as-data-format '@@open-newtab'). 
* The JSON data is embedded as the value of the `dataSource` parameter.

That's it! When you run this HTML page now, you should see a chart representing your data.

See the complete list of [all possible attributes]({% site.baseurl %}/chart-attributes/?chart=column2d '@@open-newtab') (the keys in the `dataSource` object) for a column 2D chart.

Now, go on and explore other 95+ chart types that we've in [FusionCharts]({% site.baseurl %}/chart-guide/getting-started/list-of-charts '@@open-newtab') or explore the configuration [attribute]({% site.baseurl %}/chart-attributes/?chart=area2d '@@open-newtab') for the charts.

## Create your first gauge

Gauges are powerful tools that can showcase using a radial scale to display data, and a dial is used to indicate the value. In this section, we will create an **Angular Gauge.**

To start with, we'll build a simple gauge showcasing Nordstorm's Customer Satisfaction Score as shown below:

{% embed_chart getting-started-your-first-widget.js %}

The thresholds for the above sample has been defined using the following range.

Range|Color|Hex Code|
-|-|-
0-50|Red|#F2726F|
50-75|Yellow|#FFC533|
75-100|Green|#62B58F|

So any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Scores above 75 mean good and is green.

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Nordstorm's Customer Satisfaction Score for 2017",
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

### Create an instance of the gauge

In this step, we will create an instance of the chart type as **angulargauge**, set the width and height (in pixels or %), and finally specify the data for the chart as string.

**Step 1**

Firstly, import FusionCharts reference to your `.jsp` page.

```
<%@page import="fusioncharts.FusionCharts" %>
```

*Step 2**

Create a container using &lt;div&gt;, to render the chart.

```HTML
<div id="gauge"></div>
```

The code to render the chart is given below:

```jsp
//initialize chart
<%
    FusionCharts gauge= new FusionCharts(
    "angularGauge", // Chart Type
    "gauge1", // Chart ID
    "450", // Width of the chart 
    "250", // Height of the chart
    "gauge", // Chart Container
    "json", // Data Format
    "DataSource": {
        "chart": {
            ...
        }
    }
    );
%>

//render chart
<%=gauge.render()%>
```

See the complete list of[ all possible attributes]({% site.baseurl %}/chart-attributes/?chart=angulargauge '@@open-newtab') for a angular gauge.

## Create your first map

In this section, we will create a visualization using the map of **World**. Take a look at the map shown below:

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in a table below:

State|Entity Name|Value|
-|-|-
North America|NA|82|
South America|SA|2.04|
Asia|AS|1.78|
Europe|EU|40|
Africa|AF|2.58|
Australia|AU|1.30|

### Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format. The converted format will look as shown below:

```javascript
{
    //Map Configuration
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
        "color": [{ // Specific to slider
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
    // Source data as JSON --> id represents states of USA.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1",
        "link": "newchart-json-NAM"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1",
        "link": "newchart-json-SAM"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1",
        "link": "newchart-json-ASI"
    }, {
        "id": "EU",
        "value": ".40",
        "showLabel": "1",
        "link": "newchart-json-EUP"
    }, {
        "id": "AF",
        "value": "2.58",
        "showLabel": "1",
        "link": "newchart-json-AFC"
    }, {
        "id": "AU",
        "value": "1.30",
        "showLabel": "1",
        "link": "newchart-json-AUS"
    }],
    "linkeddata": [{
        "id": "NAM",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - North America",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "paletteColors": "FFD74D",
                "theme": "hulk-light"
            },
            "data": [{
                "label": "1955",
                "value": "1.5078"
            }, {
                "label": "1960",
                "value": "1.5502"
            }, {
                "label": "1965",
                "value": "1.3121"
            }, {
                "label": "1970",
                "value": "0.8648"
            }, {
                "label": "1975",
                "value": "0.6402"
            }, {
                "label": "1980",
                "value": "0.62"
            }, {
                "label": "1985",
                "value": "0.6748"
            }, {
                "label": "1990",
                "value": "0.6882"
            }, {
                "label": "1995",
                "value": "0.6804"
            }, {
                "label": "2000",
                "value": "0.5627"
            }, {
                "label": "2005",
                "value": "0.5373"
            }, {
                "label": "2010",
                "value": "0.5536"
            }, {
                "label": "2015",
                "value": "0.4291"
            }]
        }
    }, {
        "id": "SAM",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - South America",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "paletteColors": "E65100",
                "theme": "hulk-light"
            },
            "data": [{
                "label": "1955",
                "value": "2.6275"
            }, {
                "label": "1960",
                "value": "2.6995"
            }, {
                "label": "1965",
                "value": "2.757"
            }, {
                "label": "1970",
                "value": "2.5376"
            }, {
                "label": "1975",
                "value": "2.3431"
            }, {
                "label": "1980",
                "value": "2.3261"
            }, {
                "label": "1985",
                "value": "2.2036"
            }, {
                "label": "1990",
                "value": "1.9611"
            }, {
                "label": "1995",
                "value": "1.7184"
            }, {
                "label": "2000",
                "value": "1.5965"
            }, {
                "label": "2005",
                "value": "1.4482"
            }, {
                "label": "2010",
                "value": "1.2031"
            }, {
                "label": "2015",
                "value": "1.0698"
            }]
        }
    }, {
        "id": "ASI",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Asia",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "FB8C00",
            },
            "data": [{
                "label": "1955",
                "value": "1.9075"
            }, {
                "label": "1960",
                "value": "1.8842"
            }, {
                "label": "1965",
                "value": "2.1082"
            }, {
                "label": "1970",
                "value": "2.4554"
            }, {
                "label": "1975",
                "value": "2.3036"
            }, {
                "label": "1980",
                "value": "1.9889"
            }, {
                "label": "1985",
                "value": "1.9683"
            }, {
                "label": "1990",
                "value": "2.0176"
            }, {
                "label": "1995",
                "value": "1.6823"
            }, {
                "label": "2000",
                "value": "1.3682"
            }, {
                "label": "2005",
                "value": "1.2435"
            }, {
                "label": "2010",
                "value": "1.1661"
            }, {
                "label": "2015",
                "value": "1.0731"
            }]
        }
    }, {
        "id": "EUP",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Europe",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "FFE0B2",
            },
            "data": [{
                "label": "1955",
                "value": "1.026"
            }, {
                "label": "1960",
                "value": "1.0652"
            }, {
                "label": "1965",
                "value": "0.9381"
            }, {
                "label": "1970",
                "value": "0.6925"
            }, {
                "label": "1975",
                "value": "0.54"
            }, {
                "label": "1980",
                "value": "0.4218"
            }, {
                "label": "1985",
                "value": "0.354"
            }, {
                "label": "1990",
                "value": "0.2971"
            }, {
                "label": "1995",
                "value": "0.0276"
            }, {
                "label": "2000",
                "value": "-0.1301"
            }, {
                "label": "2005",
                "value": "-0.1558"
            }, {
                "label": "2010",
                "value": "-0.0576"
            }, {
                "label": "2015",
                "value": "-0.0292"
            }]
        }
    }, {
        "id": "AFC",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Africa",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "E65100",
            },
            "data": [{
                "label": "1955",
                "value": "2.1242"
            }, {
                "label": "1960",
                "value": "2.338"
            }, {
                "label": "1965",
                "value": "2.5075"
            }, {
                "label": "1970",
                "value": "2.5947"
            }, {
                "label": "1975",
                "value": "2.7175"
            }, {
                "label": "1980",
                "value": "2.8398"
            }, {
                "label": "1985",
                "value": "2.8857"
            }, {
                "label": "1990",
                "value": "2.8243"
            }, {
                "label": "1995",
                "value": "2.6172"
            }, {
                "label": "2000",
                "value": "2.5072"
            }, {
                "label": "2005",
                "value": "2.4853"
            }, {
                "label": "2010",
                "value": "2.5593"
            }, {
                "label": "2015",
                "value": "2.6001"
            }]
        }
    }, {
        "id": "AUS",
        "linkedchart": {
            "chart": {
                "caption": "Average Annual Population Growth - Oceania",
                "subcaption": "1955 - 2015",
                "yAxisName": "Growth",
                "numberSuffix": "%",
                "theme": "hulk-light",
                "paletteColors": "FB8C00",
            },
            "data": [{
                "label": "1955",
                "value": "1.511"
            }, {
                "label": "1960",
                "value": "1.6045"
            }, {
                "label": "1965",
                "value": "1.5578"
            }, {
                "label": "1970",
                "value": "1.455"
            }, {
                "label": "1975",
                "value": "1.4727"
            }, {
                "label": "1980",
                "value": "1.2404"
            }, {
                "label": "1985",
                "value": "1.2398"
            }, {
                "label": "1990",
                "value": "1.1853"
            }, {
                "label": "1995",
                "value": "1.2006"
            }, {
                "label": "2000",
                "value": "1.1244"
            }, {
                "label": "2005",
                "value": "1.0724"
            }, {
                "label": "2010",
                "value": "1.1255"
            }, {
                "label": "2015",
                "value": "1.0397"
            }]
        }
    }]
}
```

### Create an instance of the map

In this step, we will create an instance of the map type as **world**, set the width and height (in pixels or %), and finally specify the data for the chart as string.

**Step 1**

Firstly, import FusionCharts reference to your `.jsp` page.

```
<%@page import="fusioncharts.FusionCharts" %>
```

*Step 2**

Create a container using &lt;div&gt;, to render the chart.

```HTML
<div id="map"></div>
```

The code to render the chart is given below:

```jsp
//initialize chart
<%
    FusionCharts gauge= new FusionCharts(
    "world", // Chart Type
    "map1", // Chart ID
    "800", // Width of the chart 
    "550", // Height of the chart
    "map", // Chart Container
    "json", // Data Format
    "DataSource": {
        "chart": {
            ...
        }
    }
    );
%>

//render chart
<%=map.render()%>
```

See the complete list of [all possible attributes]({% site.baseurl %}/maps/attribute-reference '@@open-newtab') (the keys in the `dataSource` object) for the map of world. The respective `id`, can be found [here]({% site.baseurl %}/maps/spec-sheets/world '@@open-newtab').

## Problem rendering the chart?

In case something went wrong, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct and whether the file exists in that location.

* If you get a Loading Data or Error in loading data message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.