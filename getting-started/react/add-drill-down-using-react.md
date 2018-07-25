---
title: Adding Drill Down using React | FusionCharts
description: This article focuses on drill down charts.
heading: Adding Drill Down using React
chartPresent: true
---

In FusionCharts, you can create unlimited levels of drill-down charts with a single data source. The parent chart contains all chart data—for the parent chart as well as all levels of descendant (child, grandchild) charts. The links to all descendant charts are also defined in the parent chart.

You can drill-down into the descendant charts by clicking the data plot items of the parent chart. The descendant charts can either replace the parent chart, with an option to drill-up, or they can open in new windows or frames.

Create linked charts by following the steps given below:

1. Create the JSON/XML data for the parent chart. This is called the parent data source.

2. Append the data string or the data URL for the descendant charts within the parent data source. If you append the data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

Once you implement the steps above, the FusionCharts JavaScript class takes care of the rest.

### Features of the FusionCharts JavaScript Class

* It automatically creates and shows a detailed descendant chart, when you click on the corresponding data plot item link in the parent chart.

* It clones all chart configuration settings from the parent chart to create the descendant charts.

* It accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods.html#configureLink) function.

* It uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed.

* It supports drill-down to an unlimited number of levels.

As an example here, we will consider a simple scenario of a parent chart with the single level of drill-down.

The parent chart is a column 2D chart that shows the yearly sales of the top three juice flavors, for the last year. When you click on the data plot for a particular flavor of juice, it drills-down to show a pie 2D chart that shows the quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chart add-drill-down-using-react-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/k7mn6j5s/ "@@open-newtab") to edit the above chart.