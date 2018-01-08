---
permalink: using-with-javascript-libraries/vuejs/installing-the-fusioncharts-vuejs-component-via-npm.html
title: Installing the FusionCharts VueJS Component via NPM | FusionCharts
description: This article outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the vue-fusioncharts component.
heading: Installing the FusionCharts VueJS Component via NPM
chartPresent: false
---

The __Vue-FusionCharts__ component lets you include FusionCharts in your VueJS projects and add interactive JavaScript charts and graphs to your VueJS applications.

This article outlines the steps to be executed for installing all the node modules via NPM and rendering charts using the Vue-FusionCharts component.

### Step 1: Install the Vue-FusionCharts wrapper framework via NPM

To install the `fusioncharts` module, execute the following command in the terminal:

```html
npm install fusioncharts --save
```

To install the `vue-fusioncharts` module, execute the following command in the terminal:

```html
npm install vue-fusioncharts --save
```

You can also combine the above commands in a single line, as shown below:

```html
npm install fusioncharts vue-fusioncharts --save
```

### Step 2: Register the vueFusionCharts component

In your Javascript code, use the Vue.use() method to register the vue-fusioncharts component globally.

```html
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

// resolve charts dependency
Charts(FusionCharts);

// register VueFusionCharts component
Vue.use(VueFusionCharts);
```

To register the component locally, use the Vue.component method.

```html
import Vue from 'vue';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import { FCComponent } from 'vue-fusioncharts';

// resolve charts dependency
Charts(FusionCharts);

// register Vue-FusionCharts component
Vue.component('fusioncharts', FCComponent);
```

### Step 4: Render the Chart

Following is the code structure of a pie chart, which can be used to render a chart using Vue-FusionCharts component.

```html
Vue.use(VueFusionCharts);

const myDataSource = {
    "chart": {
        "caption": "Age profile of website visitors",
        "subcaption": "Last Year",
        "theme": "ocean"
    },
    "data": [{
            "label": "Teenage",
            "value": "1250400"
        },
        {
            "label": "Adult",
            "value": "1463300"
        },
        {
            "label": "Mid-age",
            "value": "1050700"
        },
        {
            "label": "Senior",
            "value": "491000"
        }
    ]
};

const chart = new Vue({
    el: '#app',
    data: {
        type: 'pie2d',
        width: '500',
        height: '300',
        dataFormat: 'json',
        dataSource: myDataSource
    }
});
```

HTML template of the above sample is:

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

Once you are done with executing the steps, the chart will be rendered when you load the page.

## Licensing

Vue-FusionCharts is an open-source resource and distributed under the terms of the MIT/X11 License. You will still need to include FusionCharts in your page. This project provides no direct functionality. You can download a [free evaluation version](https://www.fusioncharts.com/download/) here. You will still need to purchase a FusionCharts license to use in a commercial environment ([FusionCharts is free for noncommercial and personal use](https://www.fusioncharts.com/download/free/)).