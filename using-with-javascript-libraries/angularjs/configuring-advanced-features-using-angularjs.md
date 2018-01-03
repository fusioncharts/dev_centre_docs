---
permalink: using-with-javascript-libraries/angularjs/configuring-advanced-features-using-angularjs.html
title: Configuring Advanced Features Using AngularJS | FusionCharts
description: This article talks about configuring advanced features using AngularJS. This features include annotations, drill-down, trend-lines, events, etc
heading: Configuring Advanced Features Using AngularJS
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT]{% linkTo tutorials/getting-started/building-your-first-chart.md %}

* [Installing the Angular-FusionCharts directive]{% linkTo tutorials/using-with-javascript-libraries/angularjs/introduction.md %}

* [Creating charts using the Angular-FusionCharts directive]{% linkTo tutorials/using-with-javascript-libraries/angularjs/creating-charts-using-the-angular-fusioncharts-directive.md %}

In addition to an extensive range of [charts, gauges, and maps](http://www.fusioncharts.com/charts/) for plotting static and real-time data, FusionCharts Suite XT includes several advanced features that let you add more context to your chart and make data interpretation easy. These features include [annotations]{% linkTo tutorials/advanced-charting/annotations/introduction.md %}, [drill-down]{% linkTo tutorials/advanced-charting/drill-down/simple-drill-down.md %}, [trend-lines]{% linkTo tutorials/configuring-your-chart-basic/trend-lines-and-zones.md %} and [events]{% linkTo tutorials/advanced-charting/events/introduction-to-events.md %}.

This article focuses on how you can use the Angular-FusionCharts directive to add:

* <a href="{{ site.baseurl }}using-with-javascript-libraries/angularjs/configuring-advanced-features-using-angularjs.html#adding-trend-lines-to-a-chart">Trend-lines</a>

* <a href="{{ site.baseurl }}using-with-javascript-libraries/angularjs/configuring-advanced-features-using-angularjs.html#adding-annotations-to-charts">Annotations</a>

## Adding Trend-lines to a Chart

Trend-lines are horizontal or vertical reference lines that can be used to define limits or targets for the data plotted on a chart.

Look at the column 2D chart shown below:

{% embed_chart using-with-javascript-libraries-angularjs-configuring-advanced-features-using-angularjs-example-1.js %}

The line labeled **Target - $175K** is a trend-line that is used as a reference to see if the sales target for a quarter has been achieved.

The HTML code to create this chart using the Angular-FusionCharts directive is given below:

```html
<fusioncharts
	width="450"
	height="300"
	type="column2d"
	datasource="{{myDataSource}}">
</fusioncharts>
```

The AngularJS code for this chart is given below:

```javascript
$scope.dataSource = {
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
    "trendlines": [{
        "line": [{
            "startvalue": "175000",
            "color": "#1aaf5d",
            "displayvalue": "Target - $175K"
        }]
    }]
};
```

## Adding Annotations to Charts

Annotations are graphical elements (for example, different types of shapes, custom text, and so on) that you can render on your chart to make it more informative and increase its visual appeal.

A column 2D chart rendered with annotations is shown below:

{% embed_chart using-with-javascript-libraries-angularjs-configuring-advanced-features-using-angularjs-example-2.js %}

The text **Promotional activities for Butterfinger made it surpass Snickers, the highest selling brand for 3 years** in the above chart is an annotation of type text, the rectangle around this text is a rectangle annotation, and the chocolate bars are image annotations.

A column 2D chart, without these annotations, is shown below:

{% embed_chart using-with-javascript-libraries-angularjs-configuring-advanced-features-using-angularjs-example-3.js %}

The HTML code to create the chart with annotations is given below:

```html
<fusioncharts
	width="400"
	height="400"
	type="spline"
	datasource="{{myDataSource}}">
</fusioncharts>
```

The AngularJS code is given below:

```javascript
$scope.dataSource = {

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
    "annotations": {
        "width": "500",
        "height": "300",
        "autoScale": "1",
        "groups": [{
            "id": "user-images",
            "items": [{
                "id": "butterFinger-icon",
                "type": "image",
                "url": "http://static.fusioncharts.com/sampledata/images/butterFinger.png",
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
```
