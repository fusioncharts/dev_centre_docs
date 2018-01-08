---
permalink: using-with-javascript-libraries/angularjs/creating-charts-using-the-angular-fusioncharts-directive.html
title: Creating Charts Using the Angular-FusionCharts Directive | FusionCharts
description: This section talks about creating charts using the Angular-FusionCharts directive. The directive uses the fusioncharts directive to create and configure charts
heading: Creating Charts Using the Angular-FusionCharts Directive
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT](/getting-started/building-your-first-chart)

* [Installing the Angular-FusionCharts directive](/using-with-javascript-libraries/angularjs/introduction)

The Angular-FusionCharts directive uses the `fusioncharts` directive to create and configure charts using AngularJS.

This article describes how you can use the directive to create charts.

## Creating a Simple Chart using the Angular-FusionCharts Directive

To create charts, the `fusioncharts` directive can be used in two different ways - as a tag or as an attribute of the `<div>` element.

### Using the fusioncharts Directive as a Tag

A simple column 2D chart is shown below:

{% embed_chart using-with-javascript-libraries-angularjs-creating-charts-using-the-angular-fusioncharts-plugin-example-1.js %}

The HTML code to render this chart using the `fusioncharts` AngularJS directive is given below:

```html
<fusioncharts
    width="600"
    height="400"
    type="column2d"
    datasource="{{myDataSource}}">
</fusioncharts>
```

In this example, the `fusioncharts` directive is used as a tag to define the view (the chart width, height, and the chart type) and the variable for the datasource.

The AngularJS code to render this chart is given below:

```javascript
$scope.myDataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        numberPrefix: "$",
        theme: "fint"
    },
    data: [{
        label: "Bakersfield Central",
        value: "880000"
    }, {
        label: "Garden Groove harbour",
        value: "730000"
    }, {
        label: "Los Angeles Topanga",
        value: "590000"
    }, {
        label: "Compton-Rancho Dom",
        value: "520000"
    }, {
        label: "Daly City Serramonte",
        value: "330000"
    }]
};
```

### Using the fusioncharts Directive as an Attribute

When the `fusioncharts` directive is used as an attribute of the `<div>` element, only the HTML code for the chart changes; the AngularJS code remains the same.

The HTML code for the above chart, with the `fusioncharts` directive is used as an attribute, is given below:

```html
<div fusioncharts
    width="300"
    height="200"
    type="column2d",
    datasource="{{dataSource}}">
</div>
```

## Providing Attributes using Separate Objects

An alternate way to create charts using the Angular-FusionCharts directive is by creating separate scope objects for chart, categories, and dataset objects.

As an example, take a look at how a multi-series line chart, shown below, to compare the sales for 2012 and 2013 can be created using separate scope objects.

{% embed_chart using-with-javascript-libraries-angularjs-creating-charts-using-the-angular-fusioncharts-plugin-example-2.js %}

<p class="text-info"> To know how a multi-series line chart can be created using conventional JSON code and a description of the data structure used, click [here](/chart-guide/multi-series-charts/creating-multi-series-charts).</p>

The HTML code for this chart is given below:

```html
<div fusioncharts
	width="600”
	height="400”
	type="msline”
	chart="{{attrs}}”
	categories="{{categories}}”
	dataset="{{dataset}}”>
</div>
```

The AngularJS code for this chart is given below:

```javascript
$scope.attrs = {

    "caption": "Sales Comparison: 2013 versus 2014",
    "subCaption": “Harry’ s SuperMart”,
    "numberprefix": "$",
    "plotgradientcolor": "",
    "bgcolor": "FFFFFF",
    "showalternatehgridcolor": "0",
    "divlinecolor": "CCCCCC",
    "showvalues": "0",
    "showcanvasborder": "0",
    "canvasborderalpha": "0",
    "canvasbordercolor": "CCCCCC",
    "canvasborderthickness": "1",
    "yaxismaxvalue": "30000",
    "captionpadding": "30",
    "linethickness": "3",
    "yaxisvaluespadding": "15",
    "legendshadow": "0",
    "legendborderalpha": "0",
    "palettecolors": "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",
    "showborder": "0"
};

$scope.categories = [{
    "category": [{
        "label": "Jan"
    }, {
        "label": "Feb"
    }, {
        "label": "Mar"
    }, {
        "label": "Apr"
    }, {
        "label": "May"
    }, {
        "label": "Jun"
    }, {
        "label": "Jul"
    }, {
        "label": "Aug"
    }, {
        "label": "Sep"
    }, {
        "label": "Oct"
    }, {
        "label": "Nov"
    }, {
        "label": "Dec"
    }]
}];

$scope.dataset = [{
        "seriesname": "2013",
        "data": [{
            "value": "22400"
        }, {
            "value": "24800"
        }, {
            "value": "21800"
        }, {
            "value": "21800"
        }, {
            "value": "24600"
        }, {
            "value": "27600"
        }, {
            "value": "26800"
        }, {
            "value": "27700"
        }, {
            "value": "23700"
        }, {
            "value": "25900"
        }, {
            "value": "26800"
        }, {
            "value": "24800"
        }]
    },

    {
        "seriesname": "2012",
        "data": [{
            "value": "10000"
        }, {
            "value": "11500"
        }, {
            "value": "12500"
        }, {
            "value": "15000"
        }, {
            "value": "16000"
        }, {
            "value": "17600"
        }, {
            "value": "18800"
        }, {
            "value": "19700"
        }, {
            "value": "21700"
        }, {
            "value": "21900"
        }, {
            "value": "22900"
        }, {
            "value": "20800"
        }]
    }
];
```

## Fetching Chart Data from an External File

Chart data can be stored in an external **.json** (for JSON data) or **.xml** (for XML data) file. The `fusioncharts` directive can be used to fetch data from an external file. To do this, specify the relative path to that file in the HTML code for the chart.

A column 2D chart showing the monthly revenue for the previous year at Harry’s SuperMart is shown below:

{% embed_chart using-with-javascript-libraries-angularjs-creating-charts-using-the-angular-fusioncharts-plugin-example-3.js %}

The attributes used to specify the type and URL of the external file are:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dataformat`</td>
    <td>Specifies the type of data (JSON or XML) that will be used to render the chart. If JSON data is used,  set this attribute to `jsonurl`. If XML data is used, set it to `xmlurl`.</td>
  </tr>
  <tr>
    <td>`datasource`</td>
    <td>Specifies the relative path of the file from where chart data will be fetched.</td>
  </tr>
</table>


The HTML code to render the above chart from a .json file is given below:

```html
<fusioncharts
    dataformat="jsonurl"
    datasource="data/data.json"
    type="column2d"
    width="600"
    height="400">
</fusioncharts>
```

Because all chart data is in the `data.json` file, this example does not need a separate AngularJS code to be written.
