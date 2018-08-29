---
title: Configuring your Chart using jQuery | FusionCharts
description: This article focuses on different type of configurations possible using jQuery.
heading: Configuring your Chart using jQuery
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, annotations, trend-lines, and events.

This article focuses on how you can configure the following using `jquery-fusioncharts` component:

* [Update Chart Data]({% site.baseurl %}/getting-started/jquery/configure-your-chart-using-jquery#update-chart-data-1)
* [Update Chart Attributes]({% site.baseurl %}/getting-started/jquery/configure-your-chart-using-jquery#update-chart-attributes-2)

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update Chart Data** to see changes):

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

The code to render a chart using `require` is given below:

```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {/* see data tab */ },
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = chartConfigs;

    this.updateData = this.updateData.bind(this);
  }

  // This function generates random number.
  getRandomNumber() {
    var max = 290, min = 30;
    return Math.round(((max - min) * Math.random()) + min);
  }

  // Handler for update button.
  // Randomly updates the values of the chart.
  updateData() {
    var prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[2].value = this.getRandomNumber();
    prevDs.data[3].value = this.getRandomNumber();
    this.setState({
      dataSource: prevDs,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <center><button className='btn btn-outline-secondary btn-sm' onClick={this.updateData}>Change Chart Data</button></center>
      </div>
    );
  }
}

ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);
```

The HTML template of the above sample is shown below:

```html
<div id="chart-container">
    FusionCharts will render here
</div>
<center><button id="update">Change Chart Data</button></center>
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

The code to render a chart using `require` is given below:

```
var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');
var $ = require('jquery');
var jQFc = require('jquery-fusioncharts');

Charts(FusionCharts);
FusionTheme(FusionCharts);

var dataSource = {/* see data tab */ };
var dataSourceOrg = JSON.parse(JSON.stringify(dataSource));
// Using FusionChart's jQuery method insertFusionCharts() to create FusionCharts.
$('#chart-container').insertFusionCharts({
  type: 'column2d',
  width: 600,
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

{% embed_chart configure-charts-using-jquery-example-3.js %}

{% embed_chart configure-charts-using-jquery-example-4.js %}

The code snippet for selecting all charts is shown below:

```javascript
$('#applyTheme').click(function() {
    // Use `FusionCharts` jQuery selector and apply theme to the charts
    $(':FusionCharts').attrFusionCharts({
        "theme": "fusion"
    });
});

```

The `:FusionCharts` selector selects all the charts in the specified context, which in this case is the current page. You can use it as a conventional jQuery selector.

## Selecting  Charts in a Specific Scope

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

## Handling Events Using jQuery

The FusionCharts jQuery helper enables you to bind FusionCharts events using the jQuery `bind`/`on` methods. The event handler needs to be attached to an HTML element containing the `FusionCharts` object.

In this section, you will learn how to work with FusionCharts events using the jQuery helper.

A chart with the `dataPlotClick` event configured using the jQuery helper looks like this:

{% embed_chart configure-charts-using-jquery-example-5.js %}

<div id='messageView' style='width:250px; text-align:center; font-size:12px; color:#333; padding:10px; margin:20px 100px'>Click on a data plot to trigger event</div>

When a data plot on the chart is clicked, the `dataPlotClick` event is fired and the event listener displays the corresponding message in the div container.

The code snippet for this chart is shown below:

```javascript
$('#chart-container').insertFusionCharts({
    type: 'column2d',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            ...
        },
        "data": [
            ...
        ]
    }
});

// Display text when data plot is clicked
$('#chart-container').bind('fusionchartsdataplotclick', function(event, args) {
    $('#messageView').text("You selected " + args.toolText);
});
```

>  The complete list of events exposed by FusionCharts is available [here](/api/fusioncharts/fusioncharts-events). These events can be used with the FusionCharts jQuery helper by prefixing them with the text "fusioncharts" and using the lowercase representation of the event name. For example, the `beforeRender` event will be named as `fusionchartsbeforerender`. This is done to avoid conflict with the existing jQuery events that might have the same names. The parameters passed to the event handler function, however, are the same.