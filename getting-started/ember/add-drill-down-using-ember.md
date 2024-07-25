---
title: Adding Drill Down using Ember | FusionCharts
description: Adding Drill Down using Ember in this comprehensive guide. Create visually appealing applications effortlessly. Visit our website now.
heading: Adding Drill Down using Ember
---

With FusionCharts, you can create unlimited levels of drill-down with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill-down to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up, or it can open in a new window or frame.

### Features of the FusionCharts JavaScript Class

* Automatically creates and shows a detailed descendant chart when you click on the corresponding data plot item linked in the parent chart

* Clones all chart configuration settings from the parent chart to create the descendant charts

* Accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods#configurelink) function

* Uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed

* Supports drill-down to an unlimited number of levels

## Create drill-down charts 

As an example, we will consider a simple scenario of a parent chart with a single level of drill-down.

The parent chart is a column 2D chart that shows yearly sales of the top three juice flavors over the last one year. When you click on the data plot for a particular flavor, it drills down to show a pie 2D chart of quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chartData add-drill-down-using-angular-example-1.js json %}

### Setup `ember-cli-build.js`

In this step we will include all the necessary files and add the dependency to create the drill-down chart. The code is given below:

```
/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
    let app = new EmberAddon(defaults, {
        // Add options here
    });

    // Import FusionCharts library
    app.import('bower_components/fusioncharts/fusioncharts.js');
    app.import('bower_components/fusioncharts/fusioncharts.charts.js');        
    app.import('bower_components/fusioncharts/themes/fusioncharts.theme.fusion.js');

    return app.toTree();
};
```

In the above code necessary libraries and components have been included using import. For example, `ember-fusioncharts`, `fusioncharts`, etc.

> If you need to use different assets in different environments, specify an object as the first parameter. That object's keys should be the environment name and the values should be the asset to use in that environment.

### Add chart data to `chart-viewer.js`

Add the following code to `chart-viewer.js`:

```
import Component from '@ember/component';

export default Component.extend({    
    id: 'drill-chart',    
    width: 700,
    height: 400,
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
},
init() {
    this._super(...arguments);
    const self = this;
    this.set('events', {
        rendered: function (eventObj, dataObj) {
            FusionCharts.items['drill-chart'].configureLink({
                type: 'pie2d',
                width: '700',
                overlayButton: {
					message: 'Back',
					fontColor: '880000',
					bgColor: 'FFEEEE',
					borderColor: '660000',
                },
            }, 0);
        }
    });
}
});
```

In the above code:

1. A chart component is created to render the chart.

2. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * Create the JSON/XML data for the parent chart. This is called the parent data source.

3. `init()` funtion is called which links the descendant chart to the parent data source.

### Add data to `chart-viewer.hbs`

Add the following code to `chart-viewer.hbs`:

```
{{fusioncharts-xt
    width=width
    height=height
    type=type
    dataFormat=dataFormat
    dataSource=dataSource
}}
```

In the above code `fusioncharts` component is added to `chart-viewer.hbs` template to render the chart.
