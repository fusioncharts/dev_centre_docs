---
title: Adding Drill Down using jQuery | FusionCharts
description: This article focuses on drill down charts.
heading: Adding Drill Down using jQuery
chartPresent: true
---

With FusionCharts, you can create unlimited levels of drill-down with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill-down to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up, or it can open in a new window or frame.

### Features of the FusionCharts JavaScript Class

* Automatically creates and shows a detailed descendant chart when you click on the corresponding data plot item linked in the parent chart

* Clones all chart configuration settings from the parent chart to create the descendant charts

* Accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configurelink-21) function
* Uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed

* Supports drill-down to an unlimited number of levels

## Create drill down 

To create drill-down charts follow the steps given below:

1. Create the JSON/XML data for the parent chart. This is called the parent data source.

2. Append the data string or the data URL for the descendant charts within the parent data source. If you append the data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

Once you implement these steps, the FusionCharts JavaScript class takes care of the rest. Let's see the steps in details.

As an example, we will consider a simple scenario of a parent chart with a single level of drill-down.

The parent chart here is a **Column 2D** chart showing yearly sales for the top three juice flavors over the last one year. When you click on the data plot for a particular flavor, it drills-down to show a descendant **Column 2D** chart with quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chart add-drill-down-using-angular-example-1.js %}

The JSON data to render the above chart:

```json
{
    "chart": {
        "caption": "Top 3 Juice Flavors",
        "subcaption": "Last year",
        "xaxisname": "Flavor",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fusion",
        "rotateValues": "0"
    },
    "data": [{
        "label": "Apple",
        "value": "810000",
        "link": "newchart-xml-apple"
    }, {
        "label": "Cranberry",
        "value": "620000",
        "link": "newchart-xml-cranberry"
    }, {
        "label": "Grapes",
        "value": "350000",
        "link": "newchart-xml-grapes"
    }],
    "linkeddata": [{
        "id": "apple",
        "linkedchart": {
            "chart": {
                "caption": "Apple Juice - Quarterly Sales",
                "subcaption": "Last year",
                "numberprefix": "$",
                "theme": "fusion",
                "rotateValues": "0",
                "plottooltext": "$label, $dataValue,  $percentValue"
            },
            "data": [{
                "label": "Q1",
                "value": "157000"
            }, {
                "label": "Q2",
                "value": "172000"
            }, {
                "label": "Q3",
                "value": "206000"
            }, {
                "label": "Q4",
                "value": "275000"
            }]
        }
    }, {
        "id": "cranberry",
        "linkedchart": {
            "chart": {
                "caption": "Cranberry Juice - Quarterly Sales",
                "subcaption": "Last year",
                "numberprefix": "$",
                "theme": "fusion",
                "plottooltext": "$label, $dataValue,  $percentValue"
            },
            "data": [{
                "label": "Q1",
                "value": "102000"
            }, {
                "label": "Q2",
                "value": "142000"
            }, {
                "label": "Q3",
                "value": "187000"
            }, {
                "label": "Q4",
                "value": "189000"
            }]
        }
    }, {
        "id": "grapes",
        "linkedchart": {
            "chart": {
                "caption": "Grapes Juice - Quarterly Sales",
                "subcaption": "Last year",
                "numberprefix": "$",
                "theme": "fusion",
                "rotateValues": "0",
                "plottooltext": "$label, $dataValue,  $percentValue"
            },
            "data": [{
                "label": "Q1",
                "value": "45000"
            }, {
                "label": "Q2",
                "value": "72000"
            }, {
                "label": "Q3",
                "value": "95000"
            }, {
                "label": "Q4",
                "value": "108000"
            }]
        }
    }]
}
```

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as string.

The code to render a chart using `require` is given below:

```
let FusionCharts = require('fusioncharts');
let Charts = require('fusioncharts/fusioncharts.charts');
let FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
let $ = require('jquery');
let jQFc = require('jquery-fusioncharts');

Charts(FusionCharts);
FusionTheme(FusionCharts);

$('#chart-container').insertFusionCharts({
    id: 'drill-down-chart',
    type: 'column2d',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {/* see data tab */ },
});

// Trigerred when chart is rendered.
// Configures the linked charts.
$('#chart-container').bind('fusionchartsrendered', function(event, args) {
    FusionCharts.items['drill-down-chart'].configureLink({
        type: 'pie2d',
        width: '500',
        overlayButton: {
          message: 'Back',
          fontColor: '880000',
          bgColor: 'FFEEEE',
          borderColor: '660000',
        },
    }, 0);
});
```

The HTML template of the above sample is shown below:

```html
<div id='chart-container'>
    FusionCharts will render here
</div>
```