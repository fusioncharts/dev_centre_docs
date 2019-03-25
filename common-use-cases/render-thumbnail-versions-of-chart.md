---
title: Render Thumbnail Versions of Charts | FusionCharts
description: This section talks about render a chart in thumbnail version, which is use when space is a limitation.
heading: Render Thumbnail Versions of Charts
chartPresent: true
---

FusionCharts Suite XT gives you an option to render your charts as thumbnail versions, which is useful when space is a limitation. It may be required at times to show only thumbnail versions of charts. These thumbnails when clicked will expand to render a chart.

Shown below is an example with chart thumbnails that enlarge on click.

{% embed_chart render-thumbnail-versions-of-chart-example-1.js %}

Chart thumbnails are characterised by the following:

Only plots are rendered while all other chart elements are hidden

- Interactivity is disabled
- Animation is disabled
- Generic features are disabled

In a nutshell, a chart thumbnail is like a static image with an associated link accessible via click/touch. Lets discuss the characteristic features and how to implement them using FusionCharts.

In this section, you will learn how to:

* Render plots shedding all other charts elements
* Disable all Charting Interactivities
* Present a static chart


## Render Plots shedding all other Chart elements

A chart is composed of a host of elements. The general elements and how to hide them is tabulated as below.

<table>
   <tbody>
      <tr>
         <th>Chart elements</th>
         <th>Attributes and values</th>
         <th>Description</th>
      </tr>
      <tr>
         <td>Captions
         </td>
         <td><code>caption: ""</code>
            <code>subcaption: ""</code>
         </td>
         <td>Hide caption and subcaption
         </td>
      </tr>
      <tr>
         <td>Canvas
         </td>
         <td><code>showCanvasBorder: "0"</code>
            <code>numDivLines: "0"</code>
            <code>showAxisLimitgrid-lines: "0"</code>
         </td>
         <td>Hide canvas along with grid lines
         </td>
      </tr>
      <tr>
         <td>Background
         </td>
         <td><code>bgAlpha: "0"</code>
            <code>showBorder: "0"</code>
         </td>
         <td>Possibly hide chart background and border
         </td>
      </tr>
      <tr>
         <td>Axes
         </td>
         <td><code>showXAxisLine: "0"</code>
            <code>showYAxisLine:  "0"</code>
         </td>
         <td>Do not show axes
         </td>
      </tr>
      <tr>
         <td>Axis Names
         </td>
         <td><code>xAxisName: ""</code>
            <code>yAxisName: ""</code>
         </td>
         <td>Hide axis names
         </td>
      </tr>
      <tr>
         <td>Axis labels
         </td>
         <td><code>showLabels: "0"</code>
            <code>showYAxisValues: "0"</code>
         </td>
         <td>Hide x-axis labels and y-axis values
         </td>
      </tr>
      <tr>
         <td>Data values
         </td>
         <td><code>showValues: "0"</code>
         </td>
         <td>Hide data value labels with the plots
         </td>
      </tr>
      <tr>
         <td>Legend
         </td>
         <td><code>showLegend: "0"</code>
         </td>
         <td>Hide legend
         </td>
      </tr>
      <tr>
         <td>Plot
         </td>
         <td><code>showShadow: "0"</code>
            <code>showPlotBorder: "0"</code>
            <code>drawAnchors: "0"</code>
         </td>
         <td>Remove extra cosmetics from the plots like border and shadow. You may not render anchors in line / area charts.
         </td>
      </tr>
      <tr>
         <td>Logo
         </td>
         <td><code>logoURL: ""</code></td>
         <td>Remove link to logo image if any
         </td>
      </tr>
   </tbody>
</table>

## Disable all Charting Interactivities

Charts have varying interactive feature. However some of these interactivities are common across the suite. The following table summarise the common ones.

<table>
   <tbody>
      <tr>
         <th>Attribute</th>
         <th>Value</th>
         <th>Description</th>
      </tr>
      <tr>
         <td><code>showTooltip</code></td>
         <td><code>0</code></td>
         <td>Disable tooltext on plot hover</td>
      </tr>
      <tr>
         <td><code>showHoverEffect</code></td>
         <td><code>0</code></td>
         <td>Deactivate plot hover effects</td>
      </tr>
      <tr>
         <td><code>clickURL</code></td>
         <td><code>""</code></td>
         <td>Remove link associated to chart if any</td>
      </tr>
   </tbody>
</table>

## Static Presentation of Chart

An image type presentation makes it necessary to be visually static. Some of the required measures in this context are given below.

<table>
  <tbody>
    <tr>
        <th>Attribute</th>
        <th>Value</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>animation</code></td>
        <td><code>0</code></td>
        <td>Disable initial animation</td>
    </tr>
</tbody>
</table>

The JavaScript code to show the above effect is given below:

```javascript
	FusionCharts.ready(function() {
    // write a function which creates a thumbnail of the required dimensions but turning off some of the properties which are not required in a thumbnail, for some other charts there might be a few more additional properties that need to be turned off.
    var createThumbNail = function(chartId, width, height, divId) {
        // we clone the chart first and then set new width and height
        var chartRef = FusionCharts(chartId),
            clonedChart = chartRef.clone({
                "width": width,
                "height": height
            });
 
        // turn off properties which are not required
        clonedChart.setChartAttribute({
            "showValues": "0",
            "showLabels": "0",
            "animation": "0",
            "exportEnabled": "0",
            "showTooltip": "0",
            "showHoverEffect": "0",
            "showYAxisValues": "0",
            "caption": "",
            "subCaption": "",
            "xAxisName": "",
            "yAxisName": "",
            "showXAxisLine": "0",
            "showYAxisLine": "0",
            "numDivLines": "0",
            "enableSlicing": "0",
            "enableRotation": "0"
        });
 
        // listen for the chartClick event to render the detailed chart
        clonedChart.addEventListener('chartClick', function() {
            FusionCharts(chartId).render('chart-container');
        });
 
        // create the thumbnail
        clonedChart.render(divId, 'append');
    };
 
    // since data is common for all three charts, we store it in a common variable
    var chartData = {
        "chart": {
            "caption": "Harry's SuperMart",
            "subCaption": "Monthly revenue for last year",
            "xAxisName": "Month",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fusion",
            "rotateValues": "1",
            "exportEnabled": "1"
        },
 
        "data": [{
            "label": "Jan",
            "value": "420000"
        }, {
            "label": "Feb",
            "value": "810000"
        }, {
            "label": "Mar",
            "value": "720000"
        }, {
            "label": "Apr",
            "value": "550000"
        }, {
            "label": "May",
            "value": "910000",
            "anchorRadius": "10",
            "anchorBorderColor": "0372AB",
            "anchorBgColor": "E1f5ff"
        }, {
            "label": "Jun",
            "value": "510000"
        }, {
            "label": "Jul",
            "value": "680000"
        }, {
            "label": "Aug",
            "value": "620000"
        }, {
            "label": "Sep",
            "value": "610000"
        }, {
            "label": "Oct",
            "value": "490000"
        }, {
            "label": "Nov",
            "value": "900000"
        }, {
            "label": "Dec",
            "value": "730000"
        }]
    };
 
    // create all the three chart instances of column, pie, bar
    var revenueChartColumn = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        id: 'revenue-chart-column',
        dataSource: chartData
    });
    var revenueChartPie = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        id: 'revenue-chart-pie',
        dataSource: chartData
    });
    var revenueChartBar = new FusionCharts({
        type: 'bar2d',
        renderAt: 'chart-container',
        width: '400',
        height: '300',
        dataFormat: 'json',
        id: 'revenue-chart-bar',
        dataSource: chartData
    });
 
    // create thumbnails for all the three charts
    createThumbNail('revenue-chart-column', 100, 100, 'thumbnail-column');
    createThumbNail('revenue-chart-pie', 100, 100, 'thumbnail-pie');
    createThumbNail('revenue-chart-bar', 100, 100, 'thumbnail-bar');
 
    // render column chart by default
    revenueChartColumn.render();
});
```