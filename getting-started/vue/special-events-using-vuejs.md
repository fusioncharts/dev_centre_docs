---
title: Special Events using Vue | FusionCharts
description: This article showcases a draggable column chart with special events.
heading: Special Events using Vue
---

FusionCharts Suite XT API offers a wide range of events that you can use to trigger actions for different stages in the life cycle of a chart or when you interact with a chart. For example, events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically drag the column and see modified value as text using `vue-fusioncharts` component.

A dragabble column chart is shown below:

{% embed_chartData special-events-example-1.js json %}

The code to render a chart is given below:

```
//Including Vue
import Vue from 'vue';

// Include the vue-fusioncharts component
import VueFusionCharts from 'vue-fusioncharts';

//Include the FusionCharts library
import FusionCharts from 'fusioncharts';

//Include the chart type
import Charts from 'fusioncharts/fusioncharts.charts';

//import the theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Register VueFusionCharts component
Vue.use(VueFusionCharts);

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

var app = new Vue({
    el: '#app',
    data: {
        width: '700',
        height: '400',
        type: 'dragcolumn2d',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Android and iOS Devices Sales Projections",
                "subCaption": "Drag the top of columns to adjust projections for 2017 & 2018",
                "numberPrefix": "$",
                "numberSuffix": "M",
                "yaxismaxvalue": "200",
                "theme": "fusion",
                "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            },
            "categories": [{
                "category": [{
                    "label": "2014",
                    "fontItalic": "0"
                }, {
                    "label": "2015",
                    "fontItalic": "0"
                }, {
                    "label": "2016",
                    "fontItalic": "0"
                }, {
                    "label": "2017 (Projected)"
                }, {
                    "label": "2018 (Projected)"
                }]
            }],
            "dataset": [{
                "seriesname": "Android Devices",
                "data": [{
                    "value": "73",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "80",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "97",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "110",
                    "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
                }, {
                    "value": "180",
                    "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
                }]
            }, {
                "seriesname": "iOS Devices",
                "data": [{
                    "value": "63.2",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "68",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "82",
                    "alpha": "100",
                    "allowDrag": "0"
                }, {
                    "value": "99",
                    "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
                }, {
                    "value": "150",
                    "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
                }]
            }]
        },
        message: 'Drag any column for years 2017 or 2018 to see updated value along with the label'
    },
    methods: {
        // uses the data of the event 'dataPlotDragEnd' and formats them using FusionCharts formatNumber API
        dataplotdragend: function(e){
          let label = JSON.parse(this.sourceData).categories[0].category[e.data.dataIndex].label;
          let startValue = FusionCharts.formatNumber(e.data.startValue, { decimals: 2 }),
            endValue = FusionCharts.formatNumber(e.data.endValue, { decimals: 2 });
          this.message = `<b>${e.data.datasetName}</b> is modified to <b>${endValue}M</b> from <b>${startValue}M</b> or <b>${label}</b>`;
        }
    }
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```HTML
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    @dataplotdragend="dataplotdragend"
    ></fusioncharts>
    <div v-html='message'></div>
</div>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `vue-fusioncharts`, `fusioncharts`, etc.

2. Registered `vue-fusioncharts` component.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `dragcolumn2d`. Each chart type is represented with a unique chart alias. For Draggable Column 2D chart, the alias is `dragcolumn2d`. Find the complete list of chart types with their respective alias [here]({% site.baseurl %}/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

4. `message` is set which gets displayed with the rendering of the chart.

5. In the above sample, `dataPlotDragEnd` event is triggered whenever the data plot is dragged. The function is called which uses that data ad formats it using FusionCharts `formatNumber` API.

6. Created a `fusioncharts` directive in a template. 

7. A `<div>` is created to displays the message to drag the data plot.