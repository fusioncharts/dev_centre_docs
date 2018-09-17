---
title: Configuring your Chart using jQuery | FusionCharts
description: This article focuses on different type of configurations possible using jQuery.
heading: Configuring your Chart using jQuery
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `jquery-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/jquery/configure-your-chart-using-jquery#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/jquery/configure-your-chart-using-jquery#update-chart-attributes-2)
* [Selecting Charts in a Specific Scope]({% site.baseurl %}/getting-started/jquery/configure-your-chart-using-jquery#selecting-charts-in-a-specific-scope-3)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to see changes):

{% embed_chartData configure-charts-using-angular-example-1.js json %}

The code to render a chart using `require` is given below:

```
//Include fusioncharts
var FusionCharts = require('fusioncharts');

//Include chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

//Include the theme file
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

var $ = require('jquery');
var jQFc = require('jquery-fusioncharts');

//Pass FusionCharts as dependency
Charts(FusionCharts);

//Pass theme as dependency
FusionTheme(FusionCharts);

var dataSource = {
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
};
// Using FusionChart's jQuery method insertFusionCharts() to create FusionCharts.
$('#chart-container').insertFusionCharts({
    type: 'column2d',
    width: 700,
    height: 400,
    dataFormat: 'json',
    dataSource: dataSource
});

// This function generates random number.
function getRandomNumber() {
    var max = 300, min = 50;
    return Math.round(((max - min) * Math.random()) + min);
}

var btn = document.getElementById('update');

// Handler for update button.
// Randomly updates the values of the chart.
btn.addEventListener('click', function() {
    var dataArrayNew = $.extend({}, dataSource);
    dataArrayNew.data[2].value = getRandomNumber();
    dataArrayNew.data[3].value = getRandomNumber();
    $('#chart-container').updateFusionCharts({
        dataFormat: 'json',
        dataSource: dataArrayNew
    });
});
```

The HTML template of the above sample is shown below:

```html
<div id="chart-container">
    FusionCharts will render here
</div>
<center><button id="update">Change Chart Data</button></center>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Passed FusionCharts and Fusion Theme as dependency.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

4. Used FusionChart's jQuery method `insertFusionCharts()` to create FusionCharts.

5. In the above sample, to update the chart we have generated random data using **Math.random()**.

6. An event handler `addEventListener` is added to update chart button.

7. Created an HTML template to render the chart and the **Change Chart Data** button.

## Update Chart Attributes

A chart, configured to update the **chart caption**, **sub-caption** alignment and chart **background** dynamically, is shown below (click any one of the buttons shown below the chart to change the chart background and caption, sub-caption alignment):

{% embed_chart configure-charts-using-react-example-2.js %}

In this step, we will create an instance of the chart type as **column2d**, set the width and height (in pixels or %), and finally specify the JSON data for the chart as a string.

The code to render a chart using `require` is given below:

```
//Include fusioncharts
var FusionCharts = require('fusioncharts');

//Include chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

//Include the theme file
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

var $ = require('jquery');
var jQFc = require('jquery-fusioncharts');

//Pass FusionCharts as dependency
Charts(FusionCharts);

//Pass theme as dependency
FusionTheme(FusionCharts);

var dataSource = {
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
};
var dataSourceOrg = JSON.parse(JSON.stringify(dataSource));
// Using FusionChart's jQuery method insertFusionCharts() to create FusionCharts.
$('#chart-container').insertFusionCharts({
    type: 'column2d',
    width: 700,
    height: 400,
    dataFormat: 'json',
    dataSource: dataSource
});

var btnBG = document.getElementById('change-background');
var btnCA = document.getElementById('change-caption-alignment');
var btnReset = document.getElementById('reset-chart');

// Handler for 'Change Background' button.
// Changes the chart background color.
btnBG.addEventListener('click', function() {
    var dataArrayNew = JSON.parse(JSON.stringify(dataSource));
    dataArrayNew.chart.bgColor = '#efefef';
    $('#chart-container').updateFusionCharts({
        dataFormat: 'json',
        dataSource: dataArrayNew
    });
});

// Handler for 'Change Caption Alignment' button.
// Moved the caption to the left.
btnCA.addEventListener('click', function() {
    var dataArrayNew = JSON.parse(JSON.stringify(dataSource));
    dataArrayNew.chart.captionAlignment = 'left';
    $('#chart-container').updateFusionCharts({
        dataFormat: 'json',
        dataSource: dataArrayNew
    });
});

// Handler for 'Reset' button.
// Resets the chart to the original version.
btnReset.addEventListener('click', function() {
    var dataArrayNew = JSON.parse(JSON.stringify(dataSourceOrg));
    dataSource = JSON.parse(JSON.stringify(dataSourceOrg));
    $('#chart-container').updateFusionCharts({
        dataFormat: 'json',
        dataSource: dataArrayNew
    });
});
```

The HTML template of the above sample is shown below:

```html
<div id="chart-container">
    FusionCharts will render here
</div>
<center>
    <button id="change-background">Change Chart Background</button>
    <button id="change-caption-alignment">Make Caption Text Left-Aligned</button>
    <button id="reset-chart">Reset Attributes</button>
</center>
```

The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `jquery-fusioncharts`, `fusioncharts`, etc.

2. Passed FusionCharts and Fusion Theme as dependency.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

4. Used FusionChart's jQuery method `insertFusionCharts()` to create FusionCharts.

5. In the above sample, to update the chart we have generated random data using **Math.random()**.

6. An event handler `addEventListener` is added to change the chart background of the chart when the button is clicked..

7. An event handler to change the caption alignment of the chart when the button is clicked.

8. The third event handler is added for the Reset button. When clicked this handler sends the chart to its rendered state.

9. Created an HTML template to render the chart and the:
    * **Change Chart Background Button** button.
    * **Make Caption Text Left-Aligned** button.    
    * **Reset Attributes** button.

## Selecting Charts in a Specific Scope

To select all charts in a limited scope, such as an HTML element, you can use the element `id` or the `class` as the selector.

Given below are a few code snippets that show how you can select charts in specific HTML elements:

For applying a common theme to all charts inside all the `<div>` elements in the page, use the code snippet given below:

```javascript
$('div').attrFusionCharts({"theme": "fusion"});
```

For applying a common theme to only those charts that belong to HTML elements having the `selectorExample` class, use the code snippet given below:

```javascript
$('.selectorExample’).attrFusionCharts({"theme": "fusion"});
```