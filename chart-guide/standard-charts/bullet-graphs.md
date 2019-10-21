---
title: Bullet Graph | FusionCharts
description: A bullet graph is a variation of a bar graph and serves as a light weight replacement for dashboard gauges and meters.
heading: Introduction to Bullet Graph
---

> These chart types belong to **FusionWidgets XT**.

A bullet graph is a variation of a bar graph and serves as a lightweight replacement for dashboard gauges and meters. You can use bullet graphs in situations where you don't have enough space available for other types of gauges or widgets.

## Basics of bullet graphs

The bullet graph features a single, primary measure (for example, current year-to-date revenue) and  compares that measure to one or more other measures to enrich its meaning (for example, compared to a target). It then displays the context of qualitative ranges of performance, such as poor, satisfactory, and good.

## Types of bullet graphs

You can orient bullet graphs horizontally or vertically. You can even stack multiple graphs to compare several measures at once.

{% embed_all standard-charts-bullet-graph-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/jGgrU/) to edit the above chart.

{% embed_all standard-charts-bullet-graph-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/Cn6bt/) to edit the above chart.

In the above charts, the filled bar represents the actual value and the line represents the target value.

## Features of bullet graphs

In bullet graphs, you can:

* Plot the value as a filled bar/a dot.

* Show/hide axis division values.

* Show/hide the chart value.

* Customize axis limits.

* Customize tick marks and values.

* Customize plot cosmetics.

* Draw circular/semicircular range bar.

* Customize the color of range bar.

## Create bullet graphs

As an example, create a bullet graph to show a month's revenue for an organization, where the actual revenue is plotted against the target revenue.

Data for the bullet graph is provided in the table below:

Range|What it means|Color|
-|-|-
0-50k|Poor|Light Red|
50k-75k|Moderate|Light Yellow|
75k-100k|Good|Light Green|

Also, plot the following values:

**Intended revenue**: $80,000

**Revenue achieved**: $78,900

To create a bullet graph follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a horizontal bullet graph, set `hbullet`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

* Set the `value` attribute within the `data` object to show the numerical value of the data.

* Set the upper and lower limits (the maximum and minimum values respectively) for the chart using the `upperLimit` and `lowerLimit` attributes under the `chart` object. 

* Set the actual value to $82K and target value to $90K under the `value` and `target` elements respectively. 

* Define the color range (numerical value for qualitative ranges) for the chart under the `colorRange`. Each range value has its own exclusive `minValue` and `maxValue` attributes and also a color code to define qualitative ranges of performance - **poor**, **satisfactory**, and **good**.

The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/yskgsb97/) to edit the above chart.

> To render the above chart as a vertical bullet graph, change the value of the `type` attribute to `vBullet`.

Using FusionCharts Suite XT, you can configure several cosmetic and functional properties for bullet graphs.

## Customize color properties

To customize color properties of the bullet graph, use the following attributes:

* Specify the fill color for the plot bar in hex code, using the `plotFillColor`attribute.

* Specify the transparency for the plot bar between `0` (transparent) and `100` (opaque), using the `plotFillAlpha` attribute.

* Specify the color to be used to render the target line in hex code, using the `targetColor` attribute.

* Set the thickness of the target line in pixels using the `targetThickness` attribute. 

Refer to the code below:

```json
{
    "chart": {        
        "plotFillColor": "#5b0101",
        "plotFillAlpha": "90",
        "targetColor": "#5b0101",
        "targetThickness": "4"
    },
}
```

The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/joyr91g7/) to edit the above chart.

## Customize border cosmetics

To customize the border, use the following attributes:

* Show a border for the plot bar by setting the value of `showPlotBorder`attribute to `1`. 

* Specify the color of the plot border color in hex code using the `plotBorderColor` attribute.

* Specify the thickness of the plot border in pixels using the `plotBorderThickness` attribute.

* Specify the transparency for the plot border between `0` (transparent) and `100` (opaque) using the `plotBorderAlpha`attribute.

Refer to the code below:

```json
{
    "chart": {
        "showPlotBorder": "1",
        "plotBorderColor": "#333333",
        "plotBorderThickness": "1",
        "plotBorderAlpha": "100"
    },
}
```

The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/710b7267/) to edit the above chart.

## Customize the plot and target width/height

By default, the chart automatically decides the width/height (width in case of a vertical bullet graph and height in case of the horizontal bullet graph) based on the data you provide. However, you can configure these manually. Use the following attributes to do so.

* Specify the percentage of color range that the plot fill bar will occupy, using the `plotfillpercent` attribute.

* Specify the percentage of color range that the target fill bar will occupy using the `targetFillPercent` attribute.

Refer to the code below:

```json
{
    "chart": {
        "plotfillpercent": "30",
        "targetFillPercent": "30"
    },
}
```

The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/mefby40r/) to edit the above chart.

## Configure color

You can configure the color range to be filled with a gradient mix instead of a solid color. Use the following attributes to do so.

* Specify the gradient fill formula for the color range using the `colorRangeFillMix` attribute.

* Specify the ratio of each color constituent in the gradient fill mix using the `colorRangeFillRatio` attribute.

* Show a border for the color range by setting the `showColorRangeBorder`attribute to `1`.

* Specify the hex code for the border color using the `colorRangeBorderColor` attribute.

* Specify the thickness of the color range border, in pixels, using the `colorRangeBorderThickness` attribute.

* Specify the transparency of the color range border between `0` (transparent) and `100` (opaque) using the `colorRangeBorderAlpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        "colorRangeFillMix": "{light-10},{light-70},{dark-10}",
        "colorRangeFillRatio": "10,70,20",
        "showColorRangeBorder": "1",
        "colorRangeBorderColor": "#CCCCCC",
        "colorRangeBorderThickness": "1",
        "colorRangeBorderAlpha": "100"
    },
}
```
The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/uxhr8wnk/) to edit the above chart.

> To render the bullet graph in 2D, set the `colorRangeFillMix` attribute to an empty value, like this `colorRangeFillMix`.

## Configure shadow

Set the value of `showShadow` attribute to `1`, to enable shadow effects for the color range.

Refer to the code below:

```json
{
    "chart": {
     "showShadow": "1"
    }
}
```
The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/jgk1xjtx/) to edit the above chart.

## Customize tick/value visibility and position

In a horizontal bullet graph, tick marks are rendered below the graph by default. However, you can render them above the graph. In a vertical bullet graph, tick marks are rendered on the right, by default. However, you can show them on the left instead. You can also the tick marks and the tick values if you wish. Use the following attributes to do so:

* Show tick marks of the graph by setting the `showTickMarks`attribute to `1`.

* Show tick values of the graph by setting the `showTickValues`attribute to `1`.

* Show tick marks and tick values above the graph by setting the value of `ticksBelowGraph`attribute to `0`.

Refer to the code below:

```json
{
    "chart": {
        "showTickMarks": "1",
        "showTickValues": "1",
        "ticksBelowGraph": "1"
    },
}
```

The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/cot6n25d/) to edit the above chart.

> The above chart is rendered with three check boxes: 

* Select the "Show Tick Mark?" option to show the tick marks, or deselect it to hide them. 

* Select the "Show Tick Value?" option to show the tick values, or deselect it to hide them. 

* Select the "Tick on Top?" option to show the tick marks above the graph, or deselect it to show them below it.

## Customize the number and cosmetics of major and minor tick marks

By default, the chart determines the number of major and minor tick marks automatically, based on the data you provide. However, you can customize them using the attributes given below:

* Specify the number of major tick marks using the `majorTMNumber` attribute. 

* Specify the number of minor tick marks using the `minorTMNumber` attribute.

* Specify the color of the major tick marks in hex code, using the `majorTMColor`attribute.

* Specify the transparency of the major tick marks between `0` (transparent) and `100` (opaque), using `minorTMThickness`attribute.

* Specify the height of the major tick marks, using the `majorTMHeight` attribute.

* Specify the thickness of the major tick marks, using the `majorTMThickness` attribute.

* Specify the color of the minor tick marks in hex code, using the `minorTMColor` attribute.

* Specify the transparency of the minor tick marks between `0` (transparent) and `100` (opaque), using the `minorTMAlpha` attribute.

* Specify the height of the minor tick marks, using the `minorTMHeight`attribute.

* Specify the thickness of the minor tick marks using the `minorTMThickness`attribute.

Refer to the code below:

```json
{
    "chart": {
        "minorTMNumber": "3",
        "majorTMcolor": "#0075c2",
        "majorTMalpha": "50",
        "majorTMheight": "5",
        "majorTMthickness": "2",
        "minorTMcolor": "#0075c2",
        "minorTMalpha": "50",
        "minorTMheight": "2",
        "minorTMThickness": "1"
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/ma7ndkhg/) to edit the above chart.

## Render a dot as the plot instead of a filled bar

Set the value of the `plotAsDot` attribute to `1`, to render a dot as the plot.

Refer to the code below:

```json
{
    "chart": {
        "plotAsDot": "1"
    },
}
```
The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/2vopy2jm/) to edit the above chart.

## Show/hide chart value

Set the value of the `showValue`attribute to `0`, to hide the value.

Refer to the code below:

```json
{
    "chart": {
        "showValue": "1"
    },
}
```

The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/2gd2htrt/) to edit the above chart.

Note: The chart above is rendered with a "Show Value?" check box. Select this check box to show the chart value, or deselect it to hide the value.

## Configure hover effects

Use the following attributes to enable and configure hover effects, to improve the visual representation of your gauge.

* Set the value of the `showHoverEffect` attribute to `1`, to enable hover effects.

* Set the target line color when you hover the mouse pointer over it, in hex code, using the `targetHoverColor`attribute.

* Set the transparency for the target line when you hover the mouse pointer over it, between `0` (transparent) and `100` (opaque), using the `targetHoverThickness`attribute.

* Set the thickness of the target line when you hover the mouse pointer over it, using the `targetHoverThickness` attribute.

* Set the value of the `showPlotBorderOnHover`attribute to `1`, to show the plot border when you hover the mouse pointer over it. Note that if you set the `showPlotBorder` attribute to `0` but configure the other hover properties for the plot border, the border is still rendered.

* Specify the hex code for the plot border when you hover the mouse pointer over it, using the `targetHoverAlpha`attribute.

* Specify the transparency for the plot border when you hover the mouse pointer over it, between `0` (transparent) and `100` (opaque), using the `plotBorderHoverAlpha`attribute.

* Specify the thickness of the plot border when you hover the mouse pointer over it, using the `plotBorderHoverThickness` attribute.

Refer to the code below:

```json
{
    "chart": {
        "showHoverEffect": "1"
        "targetHoverColor": "#1aaf5d",
        "targetHoverAlpha": "75",
        "targetHoverThickness": "5",
        "showPlotBorderOnHover": "1",
        "plotBorderHoverColor": "#001421",
        "plotBorderHoverAlpha": "75",
        "plotBorderHoverThickness": "2"
    },
}
```

The chart will look as shown below:

![Bullet-Graph-GIF-1](/gif/standard-charts-bullet-graph-gif-1.gif)

Click [here](http://jsfiddle.net/fusioncharts/tfmv5km3/) to edit the above chart.

## Real-time Bullet Graph

The bullet graph (horizontal and vertical bullet) is a real-time chart, which can continuously request new data from the server and display it, without involving any page refresh. The chart initializes itself, loads new data periodically, and auto-updates to reflect the current state of data. There are two different ways to update the bullet graph - one method directly polls data from the server while the other retrieves data using JavaScript API methods.

### Configure real-time updates using JavaScript API

The real-time data format for bullet chart depends on the data value being passed. In the simplest form, if you want to update the bullet chart, pass a single value to the `value` attribute using the JSON key-value pair format. If this data is within the acceptable range of the chart, the chart will be updated to depict this value. However, to dynamically pass values to the gauge, you need to use the JavaScript API.

A bullet graph configured for real-time updates using JavaScript API looks like the following:

<div style="border: 1px solid; font-family: Open Sans; width: 454px;">
<div style="color: #595959;display: inline-block;width: 250px; text-align: center; margin: 10px 100px;">
   <span style="font-weight: bold;font-size: small;">Daily Sales Tracker by Salesperson</span>
   <span style="font-size: small;">Stereo Exchange Ltd, New York</span>
</div>  <div style="padding-left: 2px; margin-top: -25px;">
<p>{% embed_chart standard-charts-bullet-graph-example-14.js %}</p>
<p>{% embed_chart standard-charts-bullet-graph-example-15.js %}</p>
<p>{% embed_chart standard-charts-bullet-graph-example-16.js %}</p>
<p>{% embed_chart standard-charts-bullet-graph-example-17.js %}</p>
<p>{% embed_chart standard-charts-bullet-graph-example-18.js %}</p>
</div></div></br>

Click [here](http://jsfiddle.net/fusioncharts/tqndwy20/) to edit the above chart.

As you can see above, 5 real-time horizontal charts are rendered at a time to showcase a Daily Sales Tracker of salesperson for Stereo Exchange Ltd, New York.

## Configure real-time updates using server-side scripts

Configure real-time updates from the server using the attributes given below:

* Set the path of the page that will relay real-time data to the chart, using the `dataStreamURL` attribute. If you have special characters as a part of the data stream URL, like `**?` **or `**&`**, you will have to URL encode the entire `dataStreamURL`. Also, this page must be in the same subdomain, in which the chart is hosted and invoked from. Otherwise, security will restrict it from accessing the data and hence the real-time feature won't work.

* Specify the number of seconds after which the chart will look for new data using the `refreshInterval` attribute. 

* Specify the constantly changing data stamp that can be added to the real-time data URL, using the `dataStamp` attribute, to maintain a state. For more information, read the (Adding Data Stamp	FusionCharts](/dev/chart-guide/real-time-charts/adding-data-stamp.html) article.

The JSON code looks as below:

```json
"dataStreamURL": "https://static.fusioncharts.com/sample/dev2.0/gauge-and-widgets-guide-bullet-chart-real-time-bullet-chart-php-1.php",
        "refreshInterval": "10"
```

The chart will look as shown below:

{% embed_chart standard-charts-bullet-graph-example-19.js %}

## Stop/restart updates

A horizontal bullet configured to stop receiving real-time updates looks like the following:

{% embed_chart standard-charts-bullet-graph-example-20.js %}

## Configure real-time events

FusionCharts Suite XT introduces two events to track real-time updates on bullets, `realTimeUpdateComplete` and `realTimeUpdateError`.

Following is an implementation of `realTimeUpdateComplete` event in a real-time bullet graph:

{% embed_chart standard-charts-bullet-graph-example-21.js %}

The `realTimeUpdateComplete` event is raised every time the real-time bullet updates itself with new data. This event is raised in any of the following cases:

* Real-time update using `datastreamURL`

* Real-time update using JavaScript API (using `setData`, `feedData`, `setDataForId` functions)

The event arguments provided in the advanced model are:

* `eventObject`: This object contains the `eventId`, `eventType`, and `sender` properties.

* `argumentsObject`: This object contains the values of the updated data and the previous data.

Take a look at a horizontal bullet configured to listen to the `realTimeUpdateError` event, given below:

{% embed_chart standard-charts-bullet-graph-example-22.js %}

The `realTimeUpdateError` event is raised when an error occurs while performing real-time update using `datastreamURL`. The event arguments provided in the advanced model are:

* `eventObject `: This object contains `eventId`, `eventType` and `sender` properties.

* `argumentsObject` : This object contains the `httpStatus` property: this contains the HTTP Error status value as number (e.g., 404)

> While accessing any of the JavaScript methods listed above, if you get an error like `"... is not a function of ..."`, make sure that you are NOT running the chart from the local file system (C:\ , D:\). Instead, run the chart from a server (localhost - IIS, Apache etc.). This is because the default security settings do not allow the chart to perform JavaScript interactions on the local file system.
