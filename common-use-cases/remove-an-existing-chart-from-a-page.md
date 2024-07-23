---
permalink: api/tutorials/remove-an-existing-chart-from-a-page.html
title: Remove an Existing Chart from a Page | FusionCharts
description: Need to remove a chart from your web page? With simple JS commands, you can easily delete any unwanted charts. Give it a try and streamline your development.
heading: Remove an Existing Chart from a Page
chartPresent: true
layout: page
---

## Shown below is a simple column 2D chart that is disposed at runtime when a button is clicked

It is essential to remove content that is no longer used from a page. It helps keep memory consumption to a minimum and keeps the UI smooth even when there are several elements on the page.

Chart objects created as part of FusionCharts Suite XT support the `dispose` method, this completely cleans the memory space and all references to the chart and its data are removed.

This is how you can use the method on a chart object `revenueChart`.

```javascript
	revenueChart.dispose();
```

Shown below is a simple column 2D chart that is disposed at runtime when a button is clicked.

{% embed_chart remove-an-existing-chart-from-a-page-example-1.js %}
