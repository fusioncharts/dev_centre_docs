---
permalink: using-with-javascript-libraries/angular4/configuring-advanced-features-using-angular4.html
title: Configuring Advanced Features Using Angular4 | FusionCharts
description: This article focuses on how you can use the angular4-fusioncharts component to add annotations, change chart type at runtime, as well as update chart data and attributes dynamically.
heading: Configuring Advanced Features Using Angular4
chartPresent: true
---

FusionCharts Suite XT includes several advanced features that let you add more context to your chart and make data visualization easy. These features include annotations, drill-down charts, trend-lines, and events.

This article focuses on how you can use the angular4-fusioncharts component to:

* <a href="/using-with-javascript-libraries/angular4/configuring-advanced-features-using-angular4#add-annotations-to-the-chart" class="smoth-scroll">Add annotations to the chart</a>

* <a href="/using-with-javascript-libraries/angular4/configuring-advanced-features-using-angular4#add-trend-lines-to-the-chart" class="smoth-scroll">Add trend-lines to the chart</a>

* <a href="/using-with-javascript-libraries/angular4/configuring-advanced-features-using-angular4#change-chart-type-at-runtime" class="smoth-scroll">Change chart type at runtime</a>

* <a href="/using-with-javascript-libraries/angular4/configuring-advanced-features-using-angular4#update-chart-data-dynamically" class="smoth-scroll">Update chart data dynamically</a>

* <a href="/using-with-javascript-libraries/angular4/configuring-advanced-features-using-angular4#update-chart-attributes-dynamically" class="smoth-scroll">Update chart attributes dynamically</a>

## Add annotations to the chart

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while also making it visually appealing.

A spline chart with annotations is shown below:

{% embed_chart using-with-javascript-libraries-angular4-configuring-advanced-features-using-angular4-example-1.js %}

In the above chart, a circle showing the highest value for the week is an annotation.

The code to render the spline chart with annotations is given below:

```javascript
import {Component} from '@angular/core';
var myDataSource = {
    "chart": {
        "caption": "Top 4 Chocolate Brands Sold",
        "subCaption": "Last Year",
        "xAxisName": "Brand",
        "yAxisName": "Amount (In USD)",
        "yAxisMaxValue": "120000",
        "numberPrefix": "$",
        "theme": "fint",
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
            "xScale_": "20",
            "yScale_": "20",
            "items": [{
                    "id": "butterFinger-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/butterFinger.png",
                    "x": "$xaxis.label.0.x - 30",
                    "y": "$canvasEndY - 150",
                    "xScale": "50",
                    "yScale": "40"
                },
                {
                    "id": "tom-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/snickrs.png",
                    "x": "$xaxis.label.1.x - 26",
                    "y": "$canvasEndY - 141",
                    "xScale": "48",
                    "yScale": "38"
                },
                {
                    "id": "Milton-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/coffee_crisp.png",
                    "x": "$xaxis.label.2.x - 22",
                    "y": "$canvasEndY - 134",
                    "xScale": "43",
                    "yScale": "36"
                },
                {
                    "id": "Brian-user-icon",
                    "type": "image",
                    "url": "http://static.fusioncharts.com/sampledata/images/100grand.png",
                    "x": "$xaxis.label.3.x - 22",
                    "y": "$canvasEndY - 131",
                    "xScale": "43",
                    "yScale": "35"
                }
            ]
        }]
    },
    "data": [{
            "label": "Butterfinger",
            "value": "92000"
        },
        {
            "label": "Snickers",
            "value": "87000"
        },
        {
            "label": "Coffee Crisp",
            "value": "83000"
        },
        {
            "label": "100 Grand",
            "value": "80000"
        }
    ]
}

@Component({
    selector: 'app-root',
    template: `` /* see HTML template */
})
export class AppComponent {
    width = 600;
    height = 400;
    type = column2d;
    dataFormat = 'json';
    dataSource = myDataSource
}

```

The HTML template for the above sample is:

```html
<fusioncharts
    [width]="width"
    [height]="height"
    [type]="type"
    [dataFormat]="dataFormat"
    [dataSource]="dataSource">
</fusioncharts>

```

## Add trend-lines to the chart

Trend-lines are horizontal or vertical reference lines that can be used to define limits or targets for the data plotted on a chart.

Take a look at the column 2D chart shown below:

{% embed_chart using-with-javascript-libraries-angular4-configuring-advanced-features-using-angular4-example-2.js %}

The line labeled __Target - $175K__ is a trend-line that is used as a reference to see if the sales target for a quarter has been achieved.

The code to create this chart using the angular4-fusioncharts component is given below:

```javascript
import {Component} from '@angular/core';
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
    "trendlines": [{
        "line": [{
            "startvalue": "175000",
            "color": "#1aaf5d",
            "displayvalue": "Target - $175K"
        }]
    }]
}

@Component({
    selector: 'app-root',
    template: `` /* see HTML template */
})
export class AppComponent {
    width = 600;
    height = 400;
    type = column2d;
    dataFormat = 'json';
    dataSource = myDataSource
}

```

The HTML template for the above sample is:

```html
<fusioncharts
    [width]="width"
    [height]="height"
    [type]="type"
    [dataFormat]="dataFormat"
    [dataSource]="dataSource">
</fusioncharts>
```

## Change chart type at runtime

Using the runtime feature, you can change properties of the chart once it has been drawn. It is possible to configure the chart’s height, width, type and even properties like fonts, caption and subcaption.

The chart shown below has been configured to update the chart type dynamically:

{% embed_chart using-with-javascript-libraries-angular4-configuring-advanced-features-using-angular4-example-3.js %}

<div>
    <select id="selector">
        <option value="bar2d">Bar 2D</option>
        <option value="line">Line 2D</option>
        <option value="pareto2d">Pareto 2D</option>
    </select>
</div>

The code to render the sample chart is given below:

```javascript
import {Component} from '@angular/core';
var myDataSource = {
    "chart": {
        "caption": "Monthly revenue for last year",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Month",
        "yAxisName": "Revenue (In USD)",
        "numberPrefix": "$",
        "theme": "ocean"
    },
    "data": [{
            "label": "Jan",
            "value": "420000"
        },
        {
            "label": "Feb",
            "value": "810000"
        },
        {
            "label": "Mar",
            "value": "720000"
        },
        {
            "label": "Apr",
            "value": "550000"
        },
        {
            "label": "May",
            "value": "910000"
        },
        {
            "label": "Jun",
            "value": "510000"
        },
        {
            "label": "Jul",
            "value": "680000"
        },
        {
            "label": "Aug",
            "value": "620000"
        },
        {
            "label": "Sep",
            "value": "610000"
        },
        {
            "label": "Oct",
            "value": "490000"
        },
        {
            "label": "Nov",
            "value": "900000"
        },
        {
            "label": "Dec",
            "value": "730000"
        }
    ]
}

@Component({
    selector: 'app-root',
    template: `` /* see HTML template */
})
export class AppComponent {
    width = 600;
    height = 400;
    type = 'bar2d';
    dataFormat = 'json';
    dataSource = myDataSource
}

```

The HTML code to render the above chart is:

```html
<div id="app">
    <fusioncharts
    [width]="width"
    [height]="height"
    [type]="type"
    [dataFormat]="dataFormat"
    [dataSource]="dataSource">
    </fusioncharts>
    </br>
    </br>
    <select id="selector">
        <option value="bar2d">Bar 2D</option>
        <option value="line">Line 2D</option>
        <option value="pareto2d">Pareto 2D</option>
    </select>
</div>

```

## Update chart data dynamically

A chart, configured to update data values dynamically, is shown below (click __Update chart data__ to update):

{% embed_chart using-with-javascript-libraries-angular4-configuring-advanced-features-using-angular4-example-4.js %}

The Angular4 code to render the sample chart is given below:

```javascript
import {Component} from '@angular/core';
var myDataSource = {
    "chart": {
        "caption": "Harry's SuperMart",
        "subCaption": "Top 5 stores in last month by revenue",
        "numberPrefix": "$",
        "theme": "ocean"
    },
    "data": [{
        "label": "Bakersfield Central",
        "value": "880000"
    },
    {
        "label": "Garden Groove harbour",
        "value": "730000"
    },
    {
        "label": "Los Angeles Topanga",
        "value": "590000"
    },
    {
        "label": "Compton-Rancho Dom",
        "value": "520000"
    },
    {
        "label": "Daly City Serramonte",
        "value": "330000"
        }
    ]
}

@Component({
    selector: 'app-root',
    template: `` /* see HTML template */
})
export class AppComponent {
    width = 600;
    height = 400;
    type = 'column2d';
    dataFormat = 'json';
    dataSource = myDataSource

    updateData() {
        this.dataSource.data[2].label = 'Art Supply Store';
        this.dataSource.data[2].value = '420000';
        this.dataSource.data[3].label = 'P.C. Richard & Son';
        this.dataSource.data[3].value = '210000';
    }
}

```

The HTML code for the above chart is given below:

```html

<fusioncharts
    [width]="width"
    [height]="height"
    [type]="type"
    [dataFormat]="dataFormat"
    [dataSource]="dataSource">
</fusioncharts>
<br/>
<br/>
<button (click)="updateData()">Change Chart Data</button>

```

## Update chart attributes dynamically

A chart, configured to update the alignment of the chart caption and subcaption dynamically, is shown below:

{% embed_chart using-with-javascript-libraries-angular4-configuring-advanced-features-using-angular4-example-5.js %}

Three radio buttons are shown below the chart. Click the appropriate one to set the required alignment.

The Angular4 code to render the sample chart is given below:

```javascript
import { Component } from '@angular/core';
var myDataSource = {
    type: 'column2d',
    width: '600',
    height: '400',
    dataFormat: 'json',
    renderAt: "chart-container",
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue for FY2013-2014",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Quarter",
            "yAxisName": "Revenue",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "borderAlpha": "20",
            "canvasBorderAlpha": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placevaluesInside": "1",
            "rotatevalues": "1",
            "valueFontColor": "#ffffff",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "showAlternateHGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "14"
        },
        "data": [{
            "label": "Q1",
            "value": "420000"
        }, {
            "label": "Q2",
            "value": "810000"
        }, {
            "label": "Q3",
            "value": "720000"
        }, {
            "label": "Q4",
            "value": "550000"
        }]
    }
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    width = '600'
    height = '400';
    type = 'column2d';
    dataFormat = 'json';
    dataSource = myDataSource;

    leftAlignCaption() {
        this.dataSource.chart.captionAlignment = 'left';
    }
    centerAlignCaption() {
        this.dataSource.chart.captionAlignment = 'center';
    }
    rightAlignCaption() {
        this.dataSource.chart.captionAlignment = 'right';
    }
}
```

The HTML code for this chart is given below:

```html
<div id="app">
    <fusioncharts
    [width]="width"
    [height]="height"
    [type]="type"
    [dataFormat]="dataFormat"
    [dataSource]="dataSource">
    </fusioncharts>
    <p>
      Change caption alignment:
      <input type="radio" name="caption-alignment" id="left" value="left" @click="leftAlignCaption">
      <label for="left">Left</label>
      <input type="radio" name="caption-alignment" id="center" value="center" @click="centerAlignCaption" checked>
      <label for="center">Center</label>
      <input type="radio" name="caption-alignment" id="right" value="right" @click="rightAlignCaption">
      <label for="right">Right</label>
    </p>
</div>

```

For the complete list of attributes to configure a column 2D chart, click [here](https://www.fusioncharts.com/dev/chart-attributes.html?chart=column2d).