---
title: Legends | FusionCharts
description: This article outlines the steps to configure legends of a time-series chart.
heading: Legend
---

The legend is a chart element that allows you to display the series name for each dataset, in a chart. You can click on the icon for one of the datasets to disable its plots in the chart. This is useful when you want to focus on a single dataset of a multivariate or a multi-series chart.

In the screenshot below, you can see the legend rendered below the time series. You can see each dataset represented by an icon.

<img src="{% site.BASE_URL %}/images/time-component-legend.png" alt="Custom Range Selector" width="700" height="420">

### Show/Hide the Legend

To show/hide the legend, set the value of the `enabled` attribute under the `legend` object to `1`.

Refer to the code below:

```javascript
legend: {
    enabled: '1',
    item: [{
        value: 'Series A' // name of visible legend item
    }, {
        value: 'Series B'
    }]
}
```

### Keep Legend Initially Hidden

To keep the legend hidden when the chart is initially rendered, set the value of the `initiallyhidden` attribute to `1` within the `item` object under the `legend` object.

Refer to the code below:

```javascript
legend: {
    enabled: '1',
    item: [{
        value: 'Series A' // name of visible legend item
        initiallyhidden: 1, // boolean attribute (default 0) to control the visibility of plot
    }, {
        value: 'Series B'
        initiallyhidden: 0,
    }]
}
```
