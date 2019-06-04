---
title: Adding Drill Down using Vue | FusionCharts
description: This article focuses on drill down charts.
heading: Adding Drill Down using Vue
---

With FusionCharts, you can create unlimited levels of drill-down with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill-down to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up, or it can open in a new window or frame.

### Features of the FusionCharts JavaScript Class

* Automatically creates and shows a detailed descendant chart when you click on the corresponding data plot item linked in the parent chart

* Clones all chart configuration settings from the parent chart to create the descendant charts

* Accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configurelink) function

* Uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed

* Supports drill-down to an unlimited number of levels

## Create drill-down 

As an example, we will consider a simple scenario of a parent chart with the single level of drill-down.

The parent chart is a column 2D chart that shows the yearly sales of the top three juice flavors, for the last year. When you click on the data plot for a particular flavor of juice, it drills down to show a pie 2D chart that shows the quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chart add-drill-down-using-angular-example-1.js %}

The code to render a chart is given below:

```javascript
//Including Vue
import Vue from 'vue';

// Include the vue-fusioncharts component
import VueFusionCharts from 'vue-fusioncharts';

//Include the FusionCharts library
import FusionCharts from 'fusioncharts';

//Include the chart
import Charts from 'fusioncharts/fusioncharts.charts'

// Register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts);

var app = new Vue({
    el: '#app',
    data: function() {
        return {
            width: '700',
            height: '400',
            type: 'column2d',
            dataFormat: 'json',
            dataSource: {
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
        }
    },
    methods: {
        configureLink: function(chart) {
            this.chartInstance = chart; // Save it for further use

            // Configure Drilldown attributes 
            // See this : https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configureLink
            this.chartInstance.configureLink({
                type: "pie2d",
                overlayButton: {
                    message: 'Back',
                    fontColor: '880000',
                    bgColor: 'FFEEEE',
                    borderColor: '660000'
                }
            }, 0)
        }
    },
    mounted: function() {
        this.configureLink(this.$refs.fc.chartObj); // this.$refs.fc gets the vue-fusionchart component
    }
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```html
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ref="fc"
    ></fusioncharts>
</div>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `vue-fusioncharts`, `fusioncharts`, etc.

2. Registered `vue-fusioncharts` component.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d` for the first chart. For Column 2D chart, the alias is `column2d`. Once the data plots in the Column charts are clicked, the rendered chart is a Pie 2D chart (alias name: `pie2d`).Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * Create the JSON/XML data for the parent chart. This is called the parent data source.
    * Append the data string or the data URL for the descendant charts within the parent data source. If you append a data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

4. Created a `fusioncharts` directive in a template.