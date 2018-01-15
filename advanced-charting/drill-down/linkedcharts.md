---
permalink: advanced-chart-configurations/drill-down/linkedcharts.html
title: Creating and Configuring Linked Charts | FusionCharts
description: LinkedCharts allow you to create unlimited levels of drill-down charts using a single data source.
heading: Creating and Configuring Linked Charts
chartPresent: true
---

*LinkedCharts* allow you to create unlimited levels of drill-down charts using a single data source. The parent chart contains all chart data—for the parent chart as well as all levels of descendant (child, grand-child) charts. The links to all descendant charts are also defined in the parent  chart.

You can drill-down into the descendant charts by clicking the data plot items of the parent chart. The descendant charts can either replace the parent chart, with an option to drill-up, or they can be opened in new windows or frames.

The procedure for creating *LinkedCharts* follows the steps given below:

1. Create the JSON/XML data for the parent chart. This is called the parent data source.

2. Append the data string or the data URL for the descendant charts within the parent data source. If you append the data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

Once you have implemented these steps, the FusionCharts JavaScript class takes care of the rest.

## Features of the FusionCharts JavaScript Class

* It automatically creates and shows a detailed descendant chart, when the corresponding data plot item link in the parent chart is clicked.

* It clones all chart configuration settings from the parent chart to create the descendant charts.

* It allows you to configure specific properties for descendant charts using the [configureLink()](/api/fusioncharts/fusioncharts-methods#configureLink) function.

* It uses events to notify your code of when a link is invoked, a link item is opened, and a link item is closed.

* It allows you to drill-down to an unlimited number of levels.

As an example here, we will consider a simple scenario of a parent chart with single level of drill-down.

The parent chart is a column 2D chart that shows the yearly sales of the top three juice flavors, for the last year. When a data plot for a flavor of juice is clicked, it drills-down to show a descendant column 2D chart that shows the quarterly sales figures for the selected flavor.

The above chart, when rendered, looks like this:

{% embed_chart interactivity-drill-down-creating-and-configuring-linkedcharts-example-1.js %}

In this section, you will be shown how you can:

* Create a basic *LinkedChart* that loads the descendant charts using the data URL method

* Create a *LinkedChart* with all data for descendant charts specified using the data string method

* Configure *LinkedCharts* events

As an example here, we will consider a simple scenario of a parent chart with single level of drill-down and see how you can create it using the data URL and the data string method.

The parent chart is a column 2D chart that shows the yearly sales of the top three juice flavors, for the last year. When a data plot for a flavor of juice is clicked, it drills-down to show a descendant column 2D chart that shows the quarterly sales figures for the selected flavor.

The above chart, when rendered, looks like this:

{% embed_chart interactivity-drill-down-creating-and-configuring-linkedcharts-example-1.js %}

## Creating *LinkedCharts* using the Data URL Method

Given below is a brief description of the attribute used to link charts using the data URL method:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`link`
</td>
    <td>It is used to specify the URL of the file that contains the data for the linked chart. This attribute belongs to the `data` object and is specified for each data plot that is clickable. Every time a data plot is clicked, the corresponding linked chart is rendered.

The syntax for the `link` attribute is:
`"link”: "newchart-dataformat-datasource”`

Here, `newchart` is constant.

For the data URL method, `dataformat` takes `jsonurl` (if the data for the descendant chart is in a `.json` file) or `xmlurl` (if the data for the descendant  chart is in a `.xml` file) as values.

`datasource` specifies the URL of the `.json`/`.xml` file.</td>
  </tr>
</table>


The data structure needed to render the above parent chart using the data URL method is given below:

```javascript
 {
    "chart": {
        "caption": "Top 3 Juice Flavors",
        "subcaption": "Last year",
        "xaxisname": "Flavor",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fint",
        "plottooltext": "$label, $dataValue,  $percentValue"
    },
    "data": [{
        "label": "Apple",
        "value": "810000",
        "link": "newchart-jsonurl-apple.json"
    }, {
        "label": "Cranberry",
        "value": "620000",
        "link": "newchart-jsonurl-cranberry.json"
    }, {
        "label": "Grapes",
        "value": "350000",
        "link": "newchart-jsonurl-grapes.json"
    }]
}
```

From the data shown above, you can understand that when the user clicks the first data plot, chart data to render the subsequent linked chart is sourced from the `apple.json` file. Similarly, when the other two data plots are clicked, linked charts are rendered from the data given in the `cranberry.json` and `grapes.json` files.

The `apple.json` file contains the data to plot a column 2D chart showing the quarterly sales figures of apple juice for the last year. The data structure for the `apple.json` file is given below:

```javascript
{
    "chart": {
        "caption": "Apple Juice - Quarterly Sales",
        "subcaption": "Last year",
        "numberprefix": "$",
        "theme": "fint",
        "plottooltext": "$label, $dataValue,  $percentValue"
    },
    "data": [{
        "label": "Q1",
        "value": "157000"
    }, {
        "label": "Q2",
        "value": "172000"
    }, {
        "label": "Q3",
        "value": "206000"
    }, {
        "label": "Q4",
        "value": "275000"
    }]
}
```

Similarly, the `cranberry.json` and the `grapes.json` files contain the data to plot column 2D charts showing the quarterly sales figures for the cranberry juice and grapes juice, respectively.

If you are using XML data for the chart, refer to the data structure for the parent chart is given below:

```html
<chart caption="Top 3 Juice Flavors" subcaption="Last year" xaxisname="Flavor" yaxisname="Amount (In USD)" numberprefix="$" theme="fint" plottooltext="$label, $dataValue,  $percentValue" animation="0">

<set label="Apple" value="810000" link="newchart-xmlurl-apple.xml" />
<set label="Cranberry" value="620000" link="newchart-xmlurl-cranberry.xml" />
<set label="Grapes" value="350000" link="newchart-xmlurl-grapes.xml" />
</chart>
```

Similarly, the data structure for the `apple.xml` file is given below:

```html
<chart caption="Apple Juice - Quarterly Sales" subcaption="Last year" numberprefix="$" theme="fint" plottooltext="$label, $dataValue,  $percentValue">

<set label="Q1" value="157000" />
<set label="Q2" value="172000" />
<set label="Q3" value="206000" />
<set label="Q4" value="275000" />
</chart>
```

Likewise, you can create the `cranberry.xml` and the `grapes.xml` files to create *LinkedCharts*.

## Creating *LinkedCharts* using the Data String Method

Given below is a brief description of how the `link` attribute is used for the data string method:

<table>
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`link`
</td>
    <td>For the data string method, `dataformat` takes `json` (if the JSON data for the descendant chart is embedded inside the parent chart data) or `xml` (if the XML data for the descendant chart is embedded inside parent chart data) as values.

`datasource` takes the value of the unique identifier that refers to the data embedded inside the `linkeddata` array (that contains the JSON data for descendant charts) or the `<linkeddata>` node (that contains the XML data for the descendant charts) in the parent data source.</td>
  </tr>
</table>


The data structure needed to render our sample column 2D drill-down chart using the data string method is given below:

{% embed_data interactivity-drill-down-creating-and-configuring-linkedcharts-example-1.js %}

## Configuring LinkedCharts Events

The FusionCharts JavaScript class includes events that are raised when linked items are opened or closed.

An implementation of the *LinkedCharts* events for a column 2D drill-down chart is shown below:

{% embed_chart interactivity-drill-down-creating-and-configuring-linkedcharts-example-2.js %}

Given below is a brief description of these events:

<table>
  <tr>
    <th>Event Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`beforeLinkedItemOpen`
</td>
    <td>It is fired each time a linked item is about to open, after the link in the parent chart is clicked.</td>
  </tr>
  <tr>
    <td>`linkedItemOpened`</td>
    <td>It is fired each time a linked (descendant) chart is rendered.</td>
  </tr>
  <tr>
    <td>`beforeLinkedItemClosed`</td>
    <td>The user can navigate back to the parent chart from the linked chart by clicking the back button at the top-right corner of the linked chart. This event is fired just before the linked chart is closed and the parent chart is rendered.</td>
  </tr>
  <tr>
    <td>`linkedItemClosed`</td>
    <td>It is fired each time a linked chart is closed, before the parent chart is re-opened.</td>
  </tr>
</table>


The `addEventListener()` method is configured for the parent chart to listen to these events.

The data structure that shows the implementation of these events is given below:

{% embed_data interactivity-drill-down-creating-and-configuring-linkedcharts-example-2.js %}

The `events` object, under the `dataSource` object, is used to configure the events that will be raised for a chart.

<p class="text-info"> The `FusionCharts.addEventListener()` static function can be used to trap events globally—for all charts.</p>

<p class="text-info"> For detailed descriptions of the _LinkedChart_ events, refer the [FusionCharts API Reference](/api/fusioncharts/fusioncharts-events).</p>