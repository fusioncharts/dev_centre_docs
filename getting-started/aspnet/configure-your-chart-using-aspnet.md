---
permalink: using-with-javascript-libraries/vuejs/configuring-advanced-features-using-vuejs.html
title: Configuring Advanced Features Using VueJS | FusionCharts
description: This article focuses on how you can use the Vue-FusionCharts component to add annotations, change chart type at runtime, update chart data and attributes dynamically.
heading: Configuring Advanced Features Using VueJS
chartPresent: true
---

FusionCharts Suite XT includes several advanced features that let you add more context to your chart and make data visualization easy. These features include annotations, drill-down charts, trend-lines, and events.

This article focuses on how you can use the vue-fusioncharts component to:

* <a href="/using-with-javascript-libraries/vuejs/configuring-advanced-features-using-vuejs#add-annotations-to-the-chart" class="smoth-scroll">Add annotations to the chart</a>

* <a href="/using-with-javascript-libraries/vuejs/configuring-advanced-features-using-vuejs#change-chart-type-at-runtime" class="smoth-scroll">Change chart type at runtime</a>

* <a href="/using-with-javascript-libraries/vuejs/configuring-advanced-features-using-vuejs#update-chart-data-dynamically" class="smoth-scroll">Update chart data dynamically</a>

* <a href="/using-with-javascript-libraries/vuejs/configuring-advanced-features-using-vuejs#update-chart-attributes-dynamically" class="smoth-scroll">Update chart attributes dynamically</a>


## Add annotations to the chart

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while also making it visually appealing.

A spline chart with annotations is shown below:

{% embed_chart using-with-javascript-libraries-vuejs-configuring-advanced-features-using-vuejs-example-1.js %}

In the above chart, a circle showing the highest value for the week is an annotation.

The code to render the spline chart with annotations is given below:

```javascript
var myDataSource = {
    "chart": {
        "caption": "Bakersfield Central - Total footfalls",
        "subCaption": "Last week",
        "xAxisName": "Day",
        "yAxisName": "No. of Visitors (In 1000s)",
        "showValues": "0",
        "theme": "ocean"
    },
    "annotations": {
        "groups": [
            {
                "id": "anchor-highlight",
                "items": [
                    {
                        "id": "high-star",
                        "type": "circle",
                        "x": "$dataset.0.set.2.x",
                        "y": "$dataset.0.set.2.y",
                        "radius": "12",
                        "color": "#6baa01",
                        "border": "2",
                        "borderColor": "#f8bd19"
                    },
                    {
                        "id": "label",
                        "type": "text",
                        "text": "Highest footfall 25.5K",
                        "fillcolor": "#6baa01",
                        "rotate": "90",
                        "x": "$dataset.0.set.2.x+75",
                        "y": "$dataset.0.set.2.y-2"
                    }
                ]
            }
        ]
    },
    "data": [
        {
            "label": "Mon",
            "value": "15123"
        },
        {
            "label": "Tue",
            "value": "14233"
        },
        {
            "label": "Wed",
            "value": "25507"
        },
        {
            "label": "Thu",
            "value": "9110"
        },
        {
            "label": "Fri",
            "value": "15529"
        },
        {
            "label": "Sat",
            "value": "20803"
        },
        {
            "label": "Sun",
            "value": "19202"
        }
    ]
};

Vue.use(VueFusionCharts);

const app = new Vue({
  el: '#app',
  data: {
    type: 'spline',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: {/* see data tab */}
  }
});
```

The HTML template for the above sample is:

```html
<div id="app">
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource">
    </fusioncharts>
</div>
```

## Change chart type at runtime

Using the runtime feature, you can change properties of the chart once it has been drawn. It is possible to configure the chart’s height, width, type and even the properties like fonts, caption and subcaption.

The chart shown below has been configured to update the chart type dynamically:

{% embed_chart using-with-javascript-libraries-vuejs-configuring-advanced-features-using-vuejs-example-2.js %}

<div>
    <select id="selector">
        <option value="bar2d">Bar 2D</option>
        <option value="line">Line 2D</option>
        <option value="pareto2d">Pareto 2D</option>
    </select>
</div>

The code to render the sample chart is given below:

```javascript
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
};
Vue.use(VueFusionCharts);

const app = new Vue({
    el: '#app',
    data: {
        type: 'bar2d',
        width: 600,
        height: 400,
        dataFormat: 'json',
        dataSource: {myDataSource}
    }
});
```

The HTML code to render the above chart is:

```html
<div id="app">
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource">
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

{% embed_chart using-with-javascript-libraries-vuejs-configuring-advanced-features-using-vuejs-example-3.js %}


The VueJs code to render the sample chart is given below:

```javascript
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
},
Vue.use(VueFusionCharts);

const app = new Vue({
    el: '#app',
    data: {
        type: 'column2d',
        width: 600,
        height: 400,
        dataFormat: 'json',
        dataSource: { /* see data tab */ }
    },
    methods: {
        updateData() {
            const prevDs = Object.assign({}, this.dataSource);
            prevDs.data[2].label = 'Art Supply Store';
            prevDs.data[2].value = '420000';
            prevDs.data[3].label = 'P.C. Richard & Son';
            prevDs.data[3].value = '210000';
            this.dataSource = prevDs;
        }
    }
});
```

The HTML code for the above chart is given below:

```html

<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
    <br/>
    <br/>
    <button @click="updateData">Change Chart Data</button>
</div>

```

## Update chart attributes dynamically

A chart, configured to update the alignment of the chart caption and subcaption dynamically, is shown below:

{% embed_chart using-with-javascript-libraries-vuejs-configuring-advanced-features-using-vuejs-example-4.js %}

Three radio buttons are shown below the chart. Click the appropriate one to set the required alignment.

The VueJS code to render the sample chart is given below:

```javascript
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

Vue.use(VueFusionCharts);

const app = new Vue({
    el: '#app',
    data: {
        type: 'column2d',
        width: '400',
        height: '300',
        dataFormat: 'json',
        dataSource: myDataSource
    },
    methods: {
        leftAlignCaption() {
            const prevDs = Object.assign({}, this.dataSource);
            prevDs.chart.captionAlignment = 'left';
            this.dataSource = prevDs;
        },
        centerAlignCaption() {
            const prevDs = Object.assign({}, this.dataSource);
            prevDs.chart.captionAlignment = 'center';
            this.dataSource = prevDs;
        },
        rightAlignCaption() {
            const prevDs = Object.assign({}, this.dataSource);
            prevDs.chart.captionAlignment = 'right';
            this.dataSource = prevDs;
        }
    }
});
}
```

The HTML code for this chart is given below:

```html
<div id="app">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    ></fusioncharts>
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