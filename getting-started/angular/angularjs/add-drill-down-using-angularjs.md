---
title: Adding Drill Down Using AngularJS | FusionCharts
description: This article focuses on drill down charts.
heading: Adding Drill Down Using AngularJS
chartPresent: true
---

With FusionCharts, you can create unlimited levels of drill down with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill down to the descendant charts by clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill up, or open in a new window or frame.

### Features of the FusionCharts JavaScript Class

* Automatically creates and shows a detailed descendant chart when you click on the corresponding data plot item linked in the parent chart

* Clones all chart configurations from the parent chart to create the descendant charts

* Accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configurelink) function
* Uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed

* Supports drill down to an unlimited number of levels

## Create Drill Down Charts

Let's consider a simple scenario of a parent chart with a single level of drill down.

The parent chart is a column 2D chart that shows yearly sales of the top three juice flavors, for the last one year. When you click on the data plot for a particular flavor of juice, it drills down to show a pie 2D chart with quarterly sales figures for that specific flavor.

The above chart looks like the following when rendered:

{% embed_chartData add-drill-down-using-angular-example-1.js json %}

The code to render the above chart is given below:

```
//  Require AngularJS 
var angular = require('angular');

// Require FusionCharts 
var FusionCharts = require('fusioncharts');

// Require angularjs-fusioncharts 
require('angularjs-fusioncharts');

// Require Chart modules 
var Charts = require('fusioncharts/fusioncharts.charts');

// Require Fusion theme
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

// Initialize Charts with FusionCharts instance
Charts(FusionCharts);

// Initialize FusionTheme with FusionCharts instance
FusionTheme(FusionCharts);

var myApp = angular.module('myApp', ['ng-fusioncharts']);

myApp.controller('MyController', ['$scope', function($scope) {
    var DataSource = {
        "chart": {
            "caption": "Top 3 Juice Flavors",
            "subcaption": "Last year",
            "xaxisname": "Flavor",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "$",
            "theme": "fusion",
            "rotateValues": "0",
            "id": "myChart"
        },
        "data": [{
                "label": "Apple",
                "value": "810000",
                "link": "newchart-xml-apple"
            },
            {
                "label": "Cranberry",
                "value": "620000",
                "link": "newchart-xml-cranberry"
            },
            {
                "label": "Grapes",
                "value": "350000",
                "link": "newchart-xml-grapes"
            }
        ],
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
                        },
                        {
                            "label": "Q2",
                            "value": "172000"
                        },
                        {
                            "label": "Q3",
                            "value": "206000"
                        },
                        {
                            "label": "Q4",
                            "value": "275000"
                        }
                    ]
                }
            },
            {
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
                        },
                        {
                            "label": "Q2",
                            "value": "142000"
                        },
                        {
                            "label": "Q3",
                            "value": "187000"
                        },
                        {
                            "label": "Q4",
                            "value": "189000"
                        }
                    ]
                }
            },
            {
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
                        },
                        {
                            "label": "Q2",
                            "value": "72000"
                        },
                        {
                            "label": "Q3",
                            "value": "95000"
                        },
                        {
                            "label": "Q4",
                            "value": "108000"
                        }
                    ]
                }
            }
        ]
    };
    $scope.myDataSource = DataSource;

    $scope.events = {
        renderComplete: function(e, a) {
            e.sender.configureLink({
                type: "pie2d",
                renderAt: "myChart",
                overlayButton: {
                    message: 'close',
                    fontColor: '880000',
                    bgColor: 'FFEEEE',
                    borderColor: '660000'
                }
            }, 0)
        }
    };
}
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div fusioncharts
    width="700" 
    height="400"
    type="column2d"
    chart="{{attrs}}"
    categories="{{categories}}"
    dataset="{{dataset}}"
></div>
```

Render the above chart by following the steps mentioned below:

1. Include the necessary libraries (such as `fusioncharts` and `angularjs-fusioncharts`) and components using `require`.

2. Add the chart and the theme as dependencies to the core.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type to `column2d` for the first chart. For Column 2D chart, the alias is `column2d`. Once the data plots in the Column charts are clicked, the rendered chart is a Pie 2D chart (alias name: `pie2d`).Find the complete list of chart types with their respective aliases [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and the height of the chart in pixels. 
    * Set the `dataFormat` as `json`.
    * Create the JSON/XML data for the parent chart. This is called the parent data source.
    * Append the data string or the data URL for the descendant charts within the parent data source. If you append a data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

4. Add the `<div>` with an `fc-chart` directive in your HTML, assuming that it is inside a controller named `MyController`.