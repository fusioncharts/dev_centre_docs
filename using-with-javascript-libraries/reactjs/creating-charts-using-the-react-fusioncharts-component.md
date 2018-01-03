---
permalink: using-with-javascript-libraries/reactjs/creating-charts-using-the-react-fusioncharts-component.html
title: Creating Charts Using the React-FusionCharts Component | FusionCharts
description: This article talks about to create simple chart using the React-FusionCharts Component, provide chart attributes using separate objects, fetch chart data
heading: Creating Charts Using the React-FusionCharts Component
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT]{% linkTo tutorials/getting-started/building-your-first-chart.md %}{:target='_blank'}

* [Installing the React-FusionCharts Component]{% linkTo tutorials/using-with-javascript-libraries/reactjs/introduction.md %}{:target='_blank'}

* [Installing the React-FusionCharts Component via NPM]{% linkTo tutorials/using-with-javascript-libraries/reactjs/install-fusioncharts-reactjs-component-via-npm.md %}{:target='_blank'}

The React-FusionCharts component uses the `FusionCharts` component to create and configure charts using ReactJS.

This article talks about how you can:

* <a href="{{ site.baseurl }}using-with-javascript-libraries/reactjs/creating-charts-using-the-react-fusioncharts-component.html#creating-a-simple-chart-using-the-react-fusioncharts-component">Create a simple chart using the React-FusionCharts component</a>

* <a href="{{ site.baseurl }}using-with-javascript-libraries/reactjs/creating-charts-using-the-react-fusioncharts-component.html#providing-attributes-using-separate-objects">Provide chart attributes using separate objects</a>

* <a href="{{ site.baseurl }}using-with-javascript-libraries/reactjs/creating-charts-using-the-react-fusioncharts-component.html#fetching-chart-data-from-an-external-file">Fetch chart data from an external file</a>

## Creating a Simple Chart Using the React-FusionCharts Component

For creating charts, the `FusionCharts` component can be:

* Passed directly to the `ReactDOM.render()` method

__OR__

* Passed as a part of another ReactJS component

### Passing the `FusionCharts` Component to the `ReactDOM.render()` Method

Take a look at the column 2D chart shown below:

{% embed_chart using-with-javascript-libraries-reactjs-creating-charts-using-the-react-fusioncharts-plugin-example-1.js %}

The code to configure this chart that will be passed to the `FusionCharts` component is given below:

```javascript

var salesChartConfigs = {
    width: "600",
    height: "400",
    type: "column2d",
	dataSource: {
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
	}
};

```

Now, to render this chart, the `FusionCharts` component, used as a tag, will be passed directly to the `ReactDOM.render()` method, as shown in the code below:

```html

ReactDOM.render(
    <ReactFC {...salesChartConfigs} />,
    document.getElementById('sales-chart-container')
);

```

### Passing the `FusionCharts` Component as a Part of Another ReactJS Component

To render a chart by passing the `FusionCharts` component as a part of another ReactJS component, this is how the code will change:

```html

var SalesChart = React.createClass({
    /** ReactJS code **/

    render: function () {
        return (

            /** FusionCharts Component --- Sales Chart **/
            <ReactFC {...salesChartConfigs} />

            /** Other ReactJS component(s) **/
            <..... />
            <..... />

        );
    }
});

```

## Providing Attributes Using Separate Objects

An alternate way to create charts using the React-FusionCharts component is by creating separate objects for the chart, categories, and dataset configurations.

Take a look at the multi-series line chart shown below:

{% embed_chart using-with-javascript-libraries-reactjs-creating-charts-using-the-react-fusioncharts-plugin-example-2.js %}

The code to render this chart, using the alternate method, is given below:

```javascript

var attrs = {
    "caption": "Sales Comparison: 2013 versus 2014",
    "subCaption": "Harry's SuperMart",
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

var categories = [{
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

var dataset = [{
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

ReactDOM.render(
    <ReactFC
		width="600"
		height="400"
		type="msline"
		chart=attrs
		categories=categories
		dataset=dataset />,
    document.getElementById('chart-container')
);

```

<p class="text-info">
To know how a multi-series line chart can be created using the conventional JSON code, click [here](http://www.fusioncharts.com/dev/usage-guide/chart-guide/multi-series-charts/creating-multi-series-charts.html#creating-a-multi-series-line-2d-chart){:target='_blank'}.
</p>

## Fetching Chart Data from an External File

 The `FusionCharts` component can be used to fetch chart data stored in an external **.json** or **.xml** file. To do this, specify the relative path to the external source file in the HTML code for the chart.

The attributes used to specify the type and URL of the external file are:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dataformat`</td>
    <td>Specifies the type of data (JSON or XML) that will be fetched to render the chart. If JSON data is used,  set this attribute to __jsonurl__. If XML data is used, set it to __xmlurl__.</td>
  </tr>
  <tr>
    <td>`datasource`</td>
    <td>Specifies the relative path of the source file, from which chart data will be fetched.</td>
  </tr>
</table>

The code to render a chart from an external __.json__ file is given below:

```html

ReactDOM.render(
    <ReactFC
		dataformat="jsonurl"
    	datasource="data/data.json"
    	type="column2d"
    	width="600"
    	height="400" />,
    document.getElementById('chart-container')
);

```

Depending on the chart configuration specified in the __data.json__ file, the chart is rendered.