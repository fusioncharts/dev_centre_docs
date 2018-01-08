---
permalink: using-with-javascript-libraries/reactjs/configuring-advanced-features-using-reactjs.html
title: Configuring Advanced Features Using ReactJS | FusionCharts
description: This section talks about configuring advanced features using ReactJS. These features include annotations, drill-down charts, trend-lines, events, etc
heading: Configuring Advanced Features Using ReactJS
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT](/getting-started/building-your-first-chart)

* [Installing the React-FusionCharts Component](/using-with-javascript-libraries/reactjs/introduction)

* [Installing the React-FusionCharts Component via NPM](/using-with-javascript-libraries/reactjs/install-fusioncharts-reactjs-component-via-npm)

* [Creating Charts Using the React-FusionCharts Component](/using-with-javascript-libraries/reactjs/creating-charts-using-the-react-fusioncharts-component)

* [Configuring Charts Using the ReactJS Props Object](/using-with-javascript-libraries/reactjs/configuring-charts-using-the-reactjs-props-object)

In addition to an extensive range of [charts, gauges, and maps](http://www.fusioncharts.com/charts/) for plotting static and real-time data, FusionCharts Suite XT includes several advanced features that let you add more context to your chart and make data visualization easy. These features include [annotations](/advanced-charting/annotations/introduction).

This article focuses on how you can use the React-FusionCharts component to: 

* <a href="/using-with-javascript-libraries/reactjs/configuring-advanced-features-using-reactjs#adding-trend-lines-on-a-chart" class="smoth-scroll">Add trend-lines on a chart</a>

* <a href="/using-with-javascript-libraries/reactjs/configuring-advanced-features-using-reactjs#adding-annotations-on-charts" class="smoth-scroll">Add annotations on a chart</a>

## Adding Trend-lines on a Chart

Trend-lines are horizontal or vertical reference lines that can be used to define targeted data values for the x-axis categories.

A column 2D chart with a trend-line is shown below:

{% embed_chart using-with-javascript-libraries-reactjs-configuring-advanced-features-using-reactjs-example-1.js %}

The line labeled __Target - $175K__ is a trend-line representing the targeted quarterly sales. This line is used as a visual reference to compare the actual sales with the targeted sales.

An HTML container element to contain the rendered chart is created first, as shown below:

```html

<div id="chart-container"></div>

```

The code to render this chart is given below:

```javascript

var myDataSource = {
    "chart": {
        "caption": "Quarterly Sales Summary",
        "subcaption": "Last year",
        "xaxisname": "Quarter",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fint"
    },
    "data": [{
        "label": "Q1",
        "value": "195000"
    }, {
        "label": "Q2",
        "value": "155000"
    }, {
        "label": "Q3",
        "value": "178000"
    }, {
        "label": "Q4",
        "value": "192000"
    }],

    /**
    ** Adding trendlines via configurations
    **/
    "trendlines": [{
        "line": [{
            "startvalue": "175000",
            "color": "#1aaf5d",
            "displayvalue": "Target - $175K"
        }]
    }]
};

var quarterlyRevenueChartConfigs = {
    type: 'column2d',
    width: '450',
    height: '300',
    dataSource: myDataSource
};

ReactDOM.render(
    <ReactFC {...quarterlyRevenueChartConfigs} />,
    document.getElementById('chart-container')
);

```

## Adding Annotations on Charts

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while making it visually appealing.

A column 2D chart with annotations is shown below:

{% embed_chart using-with-javascript-libraries-reactjs-configuring-advanced-features-using-reactjs-example-2.js %}

In this chart, the text __Promotional activities for Butterfinger made it surpass Snickers, the highest selling brand for 3 years__ is an annotation of type text, the rectangle around this text is a rectangle annotation, and the chocolate bars are image annotations.

An HTML container element to contain the rendered chart is created first, as shown below:

```html

<div id="chart-container"></div>

```

The code to render this chart is given below:

```javascript

var myDataSource = {
    "chart": {
        "caption": "Sales figures for top 4 chocolate brands - FY2013-2014",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Brand",
        "yAxisName": "Amount (In USD)",
        "yAxisMaxValue": "120000",
        "numberPrefix": "$",
        "theme": "fint",
        "chartBottomMargin": "70",
        "PlotfillAlpha": "0",
        "placeValuesInside": "0",
        "rotateValues": "0",
        "valueFontColor": "#333333"
    },

    /**
    ** Adding annotations via configurations
    **/
    "annotations": {
        "width": "500",
        "height": "300",
        "autoScale": "1",
        "groups": [{
            "id": "user-images",
            "items": [{
                "id": "butterFinger-icon",
                "type": "image",
                "url": "http://static.fusioncharts.com/sampledata/images/butterFinger.png", /** Path to the graphical element **/
                "x": "$xaxis.label.0.x - 30",
                "y": "$canvasEndY - 169",
                "xScale": "50",
                "yScale": "45",
            }, {
                "id": "tom-user-icon",
                "type": "image",
                "url": "http://static.fusioncharts.com/sampledata/images/snickrs.png",
                "x": "$xaxis.label.1.x - 26",
                "y": "$canvasEndY - 160",
                "xScale": "48",
                "yScale": "43"
            }, {
                "id": "Milton-user-icon",
                "type": "image",
                "url": "http://static.fusioncharts.com/sampledata/images/coffee_crisp.png",
                "x": "$xaxis.label.2.x - 22",
                "y": "$canvasEndY - 154",
                "xScale": "43",
                "yScale": "41"
            }, {
                "id": "Brian-user-icon",
                "type": "image",
                "url": "http://static.fusioncharts.com/sampledata/images/100grand.png",
                "x": "$xaxis.label.3.x - 22",
                "y": "$canvasEndY - 150",
                "xScale": "43",
                "yScale": "40"
            }, {
                "id": "dyn-label-bg",
                "type": "rectangle",
                "showBorder": "1",
                "borderColor": "12345d",

                "fillcolor": "ffffff",
                "x": "$canvasEndY-245",
                "y": "$canvasEndY+45",
                "tox": "$canvasEndX+10",
                "toy": "$canvasEndY + 80"

            }, {
                "id": "dyn-label",
                "type": "text",
                "fillcolor": "#000000",
                "fontsize": "11",
                "text": "Promotional activities for Butterfinger made it surpass Snickers, the highest selling brand for 3 years",
                "bold": "1",
                "wrap": "1",
                "wrapWidth": "350",
                "x": "$canvasEndY-72",
                "y": "$canvasEndY + 60",
            }]
        }]
    },
    "data": [{
        "label": "Butterfinger",
        "value": "92000"
    }, {
        "label": "Snickers",
        "value": "87000"
    }, {
        "label": "Coffee Crisp",
        "value": "83000"
    }, {
        "label": "100 Grand",
        "value": "80000"
    }]
};

var salesChartConfigs = {
    width: "400",
    height: "400",
    type: "spline",
    dataSource: myDataSource
};

ReactDOM.render(
    <ReactFC {...salesChartConfigs} />,
    document.getElementById('chart-container')
);

```

