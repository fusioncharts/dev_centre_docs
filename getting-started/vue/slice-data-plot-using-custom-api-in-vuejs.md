---
title: Slice Data Plot using API | FusionCharts
description: Slice Data Plot using API in Vue.js applications using URLs with FusionCharts, optimizing data presentation. Enhance charts with easy data integration!
heading: Slice Data Plot using API
---

FusionCharts Suite XT includes advanced features that offers a wide range of APIs that you can use for different stages in the ife cycle of a chart or when you interact with a chart. These features include completion of rendering of the chart, handling the radio button at runtime, etc.

This article focuses on how you can slice out the data plots of a Pie 2D chart using chart specific custom API. The chart will be rendered using `vue-fusioncharts` component. 

A chart configured to slice out the data plots of a `pie2d` chart, is shown below:

{% embed_chartData slice-data-plot-using-custom-api-example-1.js json %}

## The code to render a chart is given below:

```
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

//import the theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts, Fusion)

// Copy datasource from 'Data' tab
var dataSource = /*{ "chart": {..}, ..}*/ ;

var app = new Vue({
    el: '#app',
    data: {
        type: 'pie2d',
        width: '450',
        height: '250',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Market Share of Web Servers",
                "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
                "showLegend": "1",
                "showPercentValues": "1",
                "legendPosition": "bottom",
                "useDataPlotColorForLabels": "1",
                "enableMultiSlicing": "0",
                "theme": "fusion",
                "showlegend": "0"
            },
            "data": [{
                    "label": "Apache",
                    "value": "32647479"
                }, {
                    "label": "Microsoft",
                    "value": "22100932"
                }, {
                    "label": "Zeus",
                    "value": "14376"
                }, {
                    "label": "Other",
                    "value": "18674221"
                }
            ]
        },
        radioValue: 'none',
        lastActive: 'none'
    },
    methods: {
        // function to slice items when radio buttons are clicked using the slicePlotItems api
        onChangeItem: function() {
            const chart = this.$refs.fc.chartObj,
                lastActive = this.lastActive,
                value = this.radioValue;
            this.lastActive = value;
            if (value === 'none') {
                chart.slicePlotItem(lastActive, false);
            } else {
                chart.slicePlotItem(value, true);
            }
        },
        // function to activate radio buttons when plots are clicked
        onSliceClick: function(e) {
            var isSliced = e.data.isSliced;
            if (isSliced) {
                this.lastActive = this.radioValue = 'none'
            } else {
                this.lastActive = this.radioValue = e.data.index
            }
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
    @dataPlotClick="onSliceClick"
    ref="fc"
    ></fusioncharts>
    <br>
    <div>
        <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="none" checked/>
            <label>None</label>
        </div>
        <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="0" />
            <label>Apache</label>
        </div>
        <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="1" />
            <label>Microsoft</label>
        </div>
        <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="2" />
            <label>Zeus</label>
        </div>
        <div>
            <input name='items' type="radio" v-model="radioValue" @change="onChangeItem" value="3" />
            <label>Other</label>
        </div>
    </div>
</div>
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `vue-fusioncharts`, `fusioncharts`, etc.

2. Register `vue-fusioncharts` component.

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `pie2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. In the above sample:
    * A function is called to slice items when radio buttons are clicked using the slicePlotItems API.
    * `onSliceClick` method activates the radio buttons when plots are clicked.

5. Create a `fusioncharts` directive in a template. 

6. Create Radio buttons in a template to slice down the data plots.
