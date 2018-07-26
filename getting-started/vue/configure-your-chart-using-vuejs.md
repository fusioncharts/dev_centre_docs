---
title: Configuring your Chart using Vue | FusionCharts
description: This article focuses on different type of configurations possible using Vue.
heading: Configuring your Chart using Vue
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization easy. These features include chart update, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `vue-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/vue/configure-your-chart-using-vuejs#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/vue/configure-your-chart-using-vuejs#update-chart-attributes-2)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update chart** data to update the chart data):

{% embed_chart configure-charts-using-angular-example-1.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
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
            type: 'column2d',
            width: '400',
            height: '350',
            dataFormat: 'json',
            dataSource: dataSource
        },
        methods: {
            // Updates the chart data
            updateData: function() {
                const data = Object.assign({}, this.dataSource); //clones data
                data.data[2].label = 'This Label is Updated';
                data.data[2].value = this.getRandomNumber();

                data.data[3].label = 'This is updated as well';
                data.data[3].value = this.getRandomNumber();
                this.dataSource = data;
            },
            // Generates a random number between min and max
            getRandomNumber: function() {
                var max = 300,
                    min = 50;
                return Math.round(((max - min) * Math.random()) + min);
            }
        },
    });
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
    <button @click="updateData">Click to Update Data</button>
</div>
```

## Update Chart Attributes

A chart, configured to update the **chart caption** and **sub-caption** alignment dynamically, is shown below (click any one of the radio buttons shown below the chart to change the caption and sub-caption alignment):

{% embed_chart configure-charts-using-react-example-2.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
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
        methods:{
            // Changes chart background
            changeBackground: function(){
                const data = Object.assign({}, this.dataSource); //copy of object
                data.chart.bgColor = '#efefef';
                this.dataSource = data;
            }
        }
    });
});
```

Now, use the `fusioncharts` directive in a template. The HTML template is given below:

```
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
    <button @click="changeBackground">Change Chart Background</button>
</div>
```