---
permalink: using-with-javascript-libraries/angular4/creating-charts-using-the-fusioncharts-angular4-component.html
title: Creating Charts Using the FusionCharts Angular4 Component | FusionCharts
description: The Vue-FusionCharts component uses the FusionCharts component to create and configure charts using Angular4.
heading: Creating Charts Using the FusionCharts Angular4 Component
chartPresent: true
---

The __angular4-fusioncharts__ component uses the fusioncharts component to create and configure charts using angular4.

This article talks about how you can:

* <a href="/using-with-javascript-libraries/angular4/creating-charts-using-the-fusioncharts-angular4-component#create-a-simple-chart-using-the-angular4-fusioncharts-component" class="smoth-scroll">Create a simple chart using the angular4-fusioncharts component</a>

* <a href="/using-with-javascript-libraries/angular4/creating-charts-using-the-fusioncharts-angular4-component#provide-chart-attributes-using-separate-objects" class="smoth-scroll">Provide chart attributes using separate objects</a>

* <a href="/using-with-javascript-libraries/angular4/creating-charts-using-the-fusioncharts-angular4-component#fetch-chart-data-from-an-external-file" class="smoth-scroll">Fetch chart data from an external file</a>

## Create a simple chart using the angular4-fusioncharts component

For creating charts, the FusionCharts component can be passed as a part of angular4 component.

Take a look at the column 2D chart shown below:

{% embed_chart using-with-javascript-libraries-angular4-creating-charts-using-the-angular4-fusioncharts-component-example-1.js %}

The code to configure this chart is given below:

```javascript
var myDataSource = {
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
```

To render a chart by passing the angular4 component, copy the following code:

```javascript
import {Component} from '@angular/core';

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

## Provide chart attributes using separate objects

An alternate way to create charts using the __angular4-fusioncharts__ component is by creating separate objects for the chart, categories, and dataset configurations. Separate objects are useful when we want to create a chart using more than one dataset, like in the case of a multi-series or a combination chart.

Take a look at the combination chart shown below:

{% embed_chart using-with-javascript-libraries-angular4-creating-charts-using-the-angular4-fusioncharts-component-example-2.js %}

The code to render the above chart is given below:

```javascript
var myDataSource = {
    "chart": {
        "caption": "Actual Revenues, Targeted Revenues & Profits",
        "subcaption": "Last year",
        "xaxisname": "Month",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "ocean"
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
            "seriesname": "Actual Revenue",
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
            "seriesname": "Projected Revenue",
            "renderas": "line",
            "showvalues": "0",
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
            "seriesname": "Profit",
            "renderas": "area",
            "showvalues": "0",
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
```

To render the above chart, pass the angular4 component as shown below:

```javascript
import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `` /* see HTML template */
})
export class AppComponent {
    width = 600;
    height = 400;
    type = 'mscombi2d';
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

To know how a combination chart can be created using the conventional JSON code, click [here](https://www.fusioncharts.com/dev/chart-guide/combination-charts/creating-combination-charts.html).

## Fetch chart data from an external file

The FusionCharts component can be used to fetch chart data stored in an external JSON or XML file. To do this, specify the relative path to the external source file in the HTML code for the chart.

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

The code to render a chart from an external .json file is given below:

```javascript
import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `` /* see HTML template */
})
export class AppComponent {
    width = 600;
    height = 400;
    type = 'mscombi2d';
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