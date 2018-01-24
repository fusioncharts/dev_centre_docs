---
permalink: advanced-chart-configurations/tutorials/change-chart-messages.html
title: Configure Chart Messages | FusionCharts
description: This section talks about the messeges which are displayed at the time of rendering of the chart. You can add cosmetics for those messages as well.
heading: Configure Chart Messages
chartPresent: true
layout: page
---

You can change the text and style of the chart status messages that appear throughout the life cycle of the chart.

Below is a list of status and error messages that can be set for any chart in the FusionCharts constructor.

In this section, you will be shown how yoou can:

* [Set custom messages](/advanced-chart-configurations/tutorials/change-chart-messages.html#setting-custom-messages)
* [Use style for chart messages](/advanced-chart-configurations/tutorials/change-chart-messages.html#styling-chart-messages)


<table>
    <thead>
  <tr>
    <th>Message Type</th>
    <th>What it does?</th>
    <th>Default Value</th>
  </tr>
</thead>
<tr>
    <td><code>dataLoadStartMessage</code></td>
    <td>Sets a custom message when data is being loaded.</td>
    <td>Retrieving data. Please wait.</td>
  </tr>
  <tr>
    <td><code>dataLoadErrorMessage</code></td>
    <td>Sets a custom message when there is error in loading the chart data from the data URL provided as datasource. This may happen when the URL is invalid or inaccessible.</td>
    <td>Error in loading data.</td>
  </tr>
  <tr>
    <td><code>dataInvalidMessage</code></td>
    <td>Sets a custom message when data is found to be invalid (post-load).</td>
    <td>Invalid data.</td>
  </tr>
  <tr>
    <td><code>dataEmptyMessage</code></td>
    <td>Sets a custom message when the chart has retrieved data which does not contain any data for chart to plot or the data does not conform to the data structure required by the chart type.</td>
    <td>No data to display.</td>
  </tr>
  <tr>
    <td><code>typeNotSupportedMessage</code></td>
    <td>Sets a custom message when specified chart type is not supported.</td>
    <td>Chart type not supported.</td>
  </tr>
  <tr>
    <td><code>loadMessage</code></td>
    <td>Sets a custom message when chart is loading.</td>
    <td>Loading chart. Please wait.</td>
  </tr>
  <tr>
    <td><code>renderErrorMessage</code></td>
    <td>Sets a custom message when an error is encountered while rendering the chart.</td>
    <td>Unable to render chart.</td>
  </tr>
</table>

## Setting custom messages

A simple column 2D chart that displays custom dataLoadStartMessage is shown below:

{% embed_chart change-chart-messages-example-1.js %}

The constructor for the chart is shown below:

```javascript
	var revenueChart = new FusionCharts({
	    type: 'column2d',
	    dataLoadStartMessage: "Fetching revenue data for the previous year",
	    renderAt: 'chart-container',
	    width: '550',
	    height: '350',
	    dataFormat: 'xmlurl',
	    dataSource: 'columndata.php'
	});
```

Simlarly, other chart messages can be set using constructor parameters.

## Styling chart messages

Custom styles can also be applied to these messages, i.e. setting custom text font, font-size and color.

To apply common styling to all chart messages, use these attributes:

<table >
<tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>baseChartMessageFont</code></td>
    <td>Sets custom font for all chart messages.</td>
  </tr>
  <tr>
    <td><code>baseChartMessageFontSize</code></td>
    <td>Sets custom font-size for all chart messages.</td>
  </tr>
  <tr>
    <td><code>baseChartMessageColor</code></td>
    <td>Sets custom font color for all chart messages.</td>
  </tr>
</table>

A column 2D chart that has custom style for all messages looks like this:

{% embed_chart change-chart-messages-example-2.js %}


The constructor data for the chart is shown below:

```javascript
	var revenueChart = new FusionCharts({
	    type: 'column2d',
	    dataLoadStartMessage: "Fetching revenue data for the previous year",
	    baseChartMessageFont: "Arial",
	    baseChartMessageFontSize: "18",
	    baseChartMessageColor: "#FC0000",
	    renderAt: 'chart-container',
	    width: '550',
	    height: '350',
	    dataFormat: 'xmlurl',
	    dataSource: 'columndata.php'
	});
```

To override styling for individual chart messages, there are attributes corresponding to each type of message. These attributes use a common scheme. Append Font, FontSize or Color to the specific chart message constructor parameter to customise the font, font-size or color of the message respectively.

For example, to customise styling of dataLoadStartMessage, the attributes will be:

```javascript
	dataLoadStartMessageFont: 'Helvetica',
	dataLoadStartMessageFontSize: '24',
	dataLoadStartMessageColor: ‘#00FF00'
```


Given below is a table of all the attributes for applying styles for each of these messages:

<table>
  <tbody><tr>
    <th>Message Type</th>
    <th>Style Attributes</th>
  </tr>
  <tr>
    <td><code>dataLoadStartMessage</code></td>
    <td>dataLoadStartMessageFont<br>dataLoadStartMessageFontSize<br>dataLoadStartMessageColor</td>
  </tr>
  <tr>
    <td><code>dataLoadErrorMessage</code></td>
    <td>dataLoadErrorMessageFont<br>dataLoadErrorMessageFontSize<br>dataLoadErrorMessageColor</td>
  </tr>
  <tr>
    <td><code>dataInvalidMessage</code></td>
    <td>dataInvalidMessageFont<br>dataInvalidMessageFontSize<br>dataInvalidMessageColor</td>
  </tr>
  <tr>
    <td><code>dataEmptyMessage</code></td>
    <td>dataEmptyMessageFont<br>dataEmptyMessageFontSize<br>dataEmptyMessageColor</td>
  </tr>
  <tr>
    <td><code>typeNotSupportedMessage</code></td>
    <td>typeNotSupportedMessageFont<br>typeNotSupportedMessageFontSize<br>typeNotSupportedMessageColor</td>
  </tr>
  <tr>
    <td><code>loadMessage</code></td>
    <td>loadMessageFont<br>loadMessageFontSize<br>loadMessageColor</td>
  </tr>
  <tr>
    <td><code>renderErrorMessage</code></td>
    <td>renderErrorMessageFont<br>renderErrorMessageFontSize<br>renderErrorMessageColor</td>
  </tr>
</tbody></table>