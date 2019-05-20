---
title: Standard Range Selector | FusionCharts
description: This article defines the standard range selector.
heading: Standard Range Selector
---

A standard range selector is an extension used to select standard time periods. There are three sections of standard time periods as, ALL, business-friendly dates like year-to-date (YTD), quarter-to-date (QTD) and month-to-date (MTD), and contextual time periods. The options of the contextual time periods will vary based on the atomicity of the data and the current data displayed. Refer to the image below:

<img src="{% site.BASE_URL %}/images/fusiontime-component-standard-range-selector.png" alt="Standard Range Selector" width="700" height="420">

The three sections of Standard Range Selector are:

- **All** - Selects all of the available data values.

- **Contextual time periods** - 1Y | 6M | 3M | 1M | 15D | etc. - You can select and display data for the last one year, six months, three months, one month, or 15 days of the currently visible time interval, respectively. The options of the contextual time periods will vary based on the atomicity of the data and the current data displayed.

- **Business friendly dates** - YTD | QTD | MTD | WTD - YTD, QTD, MTD, and WTD display data from the beginning of the last year, quarter, month, or week (respectively) of the total time interval in the data to the present date. These options will apppear only if the data is of the current year, quarter, month and week.

A chart with standard range selector is shown below:

{% embed_ftChart online-sales-multi-series %}

## Show/Hide Standard Range Selector

By default, the standard range selector is visible in every chart. However, to turn it off, set the value of the `enabled` attribute within the `standardRangeSelector` extension of the `extensions` object to `0`.

Refer to the code below:

```javascript
dataSource: {
    data: dataStore,
    caption: {
        text: 'Online Sales of a SuperStore'
    },
    // Show/Hide Standard Range Selector
    "extensions": {
        "standardRangeSelector": {
            "enabled": "0"
        }
    }
}
```
See a live chart with Standard Range Selector disabled. Click [here](https://jsfiddle.net/fusioncharts/r5t8fvsd/).