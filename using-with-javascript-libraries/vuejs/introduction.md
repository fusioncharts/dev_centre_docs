---
permalink: using-with-javascript-libraries/vuejs/introduction.html
title: Introduction to the FusionCharts VueJS Component | FusionCharts
description: The Vue-FusionCharts component lets you include FusionCharts in your VueJS projects and add interactive JavaScript charts and graphs to your VueJS applications.
heading: Introduction to the FusionCharts VueJS Component
chartPresent: false
---

FusionCharts Suite XT comes with an extensive range of [charts, gauges, and maps](http://www.fusioncharts.com/charts/) that can be used to plot static and real-time data.

The Vue-FusionCharts component lets you include FusionCharts in your VueJS projects and add interactive JavaScript charts and graphs to your VueJS applications. Before we get into the installation process of the component, let’s take a look at what sets the VueJS component apart. 

Some of the basic features of VueJS component are:

* Enables interactivity between more than one chart.

* Auto-updates the chart object when the data source is modified.

* Can render charts using a JSON/XML URL or Props array binding.

In this article, we will talk about how you can download and install the Vue-FusionCharts component on your system.

## Downloading the component

You can download the Vue-FusionCharts component from [here](https://www.fusioncharts.com/vue-fusioncharts/).

## Installing the Vue-FusionCharts component

To install the Vue-FusionCharts component for your applications, follow the steps given below:

### Step 1: Include `fusioncharts.js` and `vue-fusioncharts.js`

In your HTML code, include the `fusioncharts.js` and `vue-fusioncharts.js` JavaScript files, as shown in the code below:

```html
<script type="text/javascript" src="https://unpkg.com/vue@2.3.3"></script>
<script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.js"></script>
<script type="text/javascript" src="https://unpkg.com/fusioncharts/fusioncharts.charts.js"></script>
<script type="text/javascript" src="https://unpkg.com/fusioncharts@3.12.1/themes/fusioncharts.theme.fint.js"></script>
<script type="text/javascript" src="https://unpkg.com/vue-fusioncharts/dist/vue-fusioncharts.min.js"></script>
```

<p class="text-info"> It is mandatory to add the __vue-fusioncharts.js__ file __after__ all the other script files. </p>

### Step 2: Define the chart configuration

As shown in the code below, in your JavaScript code, define an object that contains the configuration for a FusionCharts Suite XT chart. Set the chart data source using the regular [FusionCharts JSON format](http://www.fusioncharts.com/charts/).

```javascript
data = {
    type: 'column2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: myDataSource
}
```

### Step 3: Render the Chart

To pass the chart configuration, we have added the code from step 2 to `Vue.use(VueFusionCharts)`. The combined code is shown below:

```javascript
Vue.use(VueFusionCharts);

const myDataSource = {
};

const chart = new Vue({
    el: '#app',
    data: {
        type: 'column2d',
        width: '500', //to specify the width of the chart
        height: '300', //to specify the height of the chart
        dataFormat: 'json',
        dataSource: myDataSource
    }
});
```

The HTML template to render the chart is:

```javascript
<div id="app">
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
    ></fusioncharts>
</div>
```


Once the installation is complete, you will be ready to start creating and customizing your charts using the vue-fusioncharts component. The subsequent articles in this section will tell you how.


## Licensing

Vue-FusionCharts is an open-source resource and distributed under the terms of the MIT/X11 License. You will still need to include FusionCharts in your page. This project provides no direct functionality. You can download a [free evaluation version](https://www.fusioncharts.com/download/) here. You will still need to purchase a FusionCharts license to use in a commercial environment ([FusionCharts is free for noncommercial and personal use](https://www.fusioncharts.com/download/free/)).