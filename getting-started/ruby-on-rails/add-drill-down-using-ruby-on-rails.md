---
title: Adding Drill Down using Vue | FusionCharts
description: Adding Drill Down using Vue in Ruby on Rails using FusionCharts themes, enhancing visual appeal and user interaction effortlessly.
heading: Adding Drill Down using Vue
chartPresent: true
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

To create drill-down charts, follow the steps given below:

1. Create the JSON/XML data for the parent chart. This is called the parent data source.

2. Append the data string or the data URL for the descendant charts within the parent data source. If you append a string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

Once you implement these steps, the FusionCharts JavaScript class takes care of the rest. Let's see the steps in details.

As an example, we will consider a simple scenario of a parent chart with the single level of drill-down.

The parent chart is a column 2D chart that shows the yearly sales of the top three juice flavors, for the last year. When you click on the data plot for a particular flavor of juice, it drills down to show a pie 2D chart that shows the quarterly sales figures for that flavor.

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

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as a string.

The code to render a chart is given below:

```
FusionCharts.ready(function() {

    Vue.use(VueFusionCharts);

    // Load datasource from data.json
    var dataSource = getDataSource();

    var app = new Vue({
        el: '#app',
        data: {
            width: '700',
            height: '400',
            type: 'column2d',
            dataFormat: 'json',
            dataSource: dataSource
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
