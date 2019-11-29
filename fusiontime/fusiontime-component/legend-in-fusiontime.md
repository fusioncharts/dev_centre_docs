---
title: Legends | FusionCharts
description: This article outlines the steps to configure legends of a time-series chart.
heading: Legend
---

The legend is a chart element that allows you to display the series name for each dataset in a chart. A chart should have the utmost one legend. Each legend can have a lot of legend items. Each legend item has a key and a name. In FusionTime, currently the key is a rectangular box filled with the color of the series (or plot) it represents; and the name is the name of the series (or plot).

The legend comes in very handy when we have multiple colored plots. It helps in easily identifying the plot. Legends are interactive by nature. You can click on a legend item to disable the plot associated with it

In the screenshot below, you can see the legend rendered below the time series. You can see each dataset represented by an icon.

<img src="{% site.BASE_URL %}/images/time-component-legend.png" alt="Custom Range Selector" width="700" height="420">

> Legend Items cannot be showed in stock charts.

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

### Initially Hidden Legend item

To keep the legend item hidden when the chart is initially rendered, set the value of the `initiallyhidden` attribute to `1` within the `item` object under the `legend` object.

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
