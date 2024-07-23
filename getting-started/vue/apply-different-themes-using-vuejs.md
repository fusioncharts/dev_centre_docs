---
title: Apply Different Themes using Vue | FusionCharts
description: Apply Different Themes using Vue applications using URLs with FusionCharts, optimizing data presentation. Enhance charts with easy data integration!
heading: Apply Different Themes using Vue
---

## FusionCharts Suite XT ships with the following predefined themes:

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)
* `gammel` (since v3.13.0)
* `candy` (since v3.13.0)
* `zune`
* `ocean`
* `carbon`

This article focuses on how you can apply different themes to the chart at runtime using `vue-fusioncharts` component. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

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

//import the themes
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel'
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy'
import ZuneTheme from 'fusioncharts/themes/fusioncharts.theme.zune'
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean'
import CarbonTheme from 'fusioncharts/themes/fusioncharts.theme.carbon'

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme, GammelTheme, CandyTheme, ZuneTheme, OceanTheme, CarbonTheme)

var app = new Vue({
    el: '#app',
    data: {
        width: '700',
        height: '400',
        type: 'column2d',
        dataFormat: 'json',
        dataSource: {
            // Chart configuration
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "theme": "fusion"
            },
            // Chart data
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
        }
    },
    methods:{
        // sets the theme attribute through FusionCharts API 'setChartAttribute'
        onChangeTheme: function (e) {
            const chart = this.$refs.fc.chartObj,
                theme = e.target.value.toLowerCase();
            chart.setChartAttribute('theme', theme);
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
    ref="fc"
    ></fusioncharts>
    <div style="display: flex; position: absolute; bottom: 2px;">
        <div id="select-text">Choose a theme:</div>
        <div class="change-type">
          <input name='theme' type="radio" @change="onChangeTheme" value="Fusion" checked/>
          <label>Fusion</label>
        </div>
        <div>
          <input name='theme' type="radio" @change="onChangeTheme" value="Gammel" />
          <label>Gammel</label>
        </div>
        <div>
          <input name='theme' type="radio" @change="onChangeTheme" value="Candy" />
          <label>Candy</label>
        </div>
        <div>
          <input name='theme' type="radio" @change="onChangeTheme" value="Zune" />
          <label>Zune</label>
        </div>
        <div>
          <input name='theme' type="radio" @change="onChangeTheme" value="Ocean" />
          <label>Ocean</label>
        </div>
        <div>
          <input name='theme' type="radio" @change="onChangeTheme" value="Carbon" />
          <label>Carbon</label>
        </div>
    </div>
</div>
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `vue-fusioncharts`, `fusioncharts`, etc.

2. Include the theme files for all the six themes.

3. Register `vue-fusioncharts` component.

4. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

5. Call a FusionCharts API `setChartAttribute` to apply themes to the chart at runtime.

6. Create a `fusioncharts` directive in a template. 

7. Create Radio buttons for Fusion, Gammel, Candy, Zune, Ocean and Carbon in a template.
