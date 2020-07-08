---
title: Changed Behavior | FusionCharts
description: This section talks about the change in behavior of the charts with the latest released version.
heading: Changed Behavior
---

This section is for users who are using previous version of FusionCharts in their application. Here we'll talk about the change in behavior of the charts after v3.15.2.

## Task labels in Gannt Charts

In Gantt charts, the task labels are now displayed properly. Previously, when horizontal scrolling the task labels overlapped with the vertical scroll bar.

The Gantt chart looks like as shown below:

(ImageBefore) (ImageAfter)


## Legend spacing in all Charts

For an optimal data visualization, the space between legend items has been decreased in order to improve the visual space of the data plot.

For more information see [legend](chart-guide/chart-configurations/legend).

(ImageBefore) (ImageAfter)


## Improved the csv structure for Spark Charts

FusionCharts XT suite now allows Spark Charts to export csv files which contain label names for the column headers. Previously, exported spark charts data to a csv file had no label name for the column headers.

For more information see, [spark charts](chart-guide/standard-charts/spark-charts)

(Need screenshots)



## The "%" symbol correctly displays in all Stacked Charts

In Stacked bar charts the percentage “%” symbol now displays properly on the numeric axis. Previously, when the stack100Percent attribute was set to 1, the “%” symbol did not get applied on the numeric axis

(ImageBefore) (ImageAfter)


## Setting yAxisValueDecimals when setAdaptiveYMin is enabled.

yAxisValueDecimal now displays the right number of decimal places when `setAdaptiveYMin` and `forceYAxisValueDecimals` are enabled. Previously, yAxisValueDecimal failed to work  properly with values lower than 3 when `setAdaptiveYMin` was enabled.

**Before the fix**

yAxisValueDecimals is to 2 and setAdaptiveYMin to 1 (enabled) the chart shows values with 3 decimal places.

![Decimal Issue](/images/Decimal_Issue.png)

**After the fix**

yAxisValueDecimals is to 2 and setAdaptiveYMin to 1 (enabled) the chart shows values with 2 decimal places.

![Decimal Fix](/images/Decimal_Fix.png)


## Crossline tooltips position.

`zoomline` and `zoomlineDY` charts now show tooltips values sorted in decreasing order. Previously, tooltip values were displayed in the same order they had on the category object. For further information refer to [Displaying Values in Tooltips](chart-guide/standard-charts/zoom-line-charts#displaying-values-in-tooltips)


## Returning property names using getJSONData() and getChartData()

With the introduction of the `isRaw` property `getJSONData()` and `getChartData()` now return property names without changing the casing used in the dataSource. Previously, `getJSONData()` and `getChartData()` returned al property names as lowercase regardless of the casing used on the dataSource.

 `getJSONData()` can now return all property names as defined on the data source.

```
        "chart": {
          "theme": "fusion",
          "caption": "Top 5 Stores by Sales",
          "subCaption": "Last month",
          "yAxisName": "Sales (In USD)",
          "numberPrefix": "$",
          "alignCaptionWithCanvas": "0"
        },

        "data": [{
            "label": "Bakersfield Central",
            "value": "880000",
            "aCamelCaseValue":"text"
          },
    ...
    data = topStores.getJSONData({isRaw:1});
```

 `getChartData()` can now return all property names as defined on the data source.

```
        "chart": {
          "theme": "fusion",
          "caption": "Top 5 Stores by Sales",
          "subCaption": "Last month",
          "yAxisName": "Sales (In USD)",
          "numberPrefix": "$",
          "alignCaptionWithCanvas": "0"
        },

        "data": [{
            "label": "Bakersfield Central",
            "value": "880000",
            "aCamelCaseValue":"text"
          },
    ...
    data = topStores.getJSONData({format:'json', isRaw:1});
```

For more information refer to [getChartData](api/fusioncharts/fusioncharts-methods#getChartData) and [getJSONData](api/fusioncharts/fusioncharts-methods#getJSONData).


## Task labels in Gannt Charts

In Gantt charts, the task labels are now displayed properly. Previously, when scrolling horizontally  the task labels overlapped with the vertical scroll bar.

**Before the fix**
![label overlap](/images/LabelOverlap_original.png)

**After the fix**
![label overlap fixed](/images/LabelOverlap_update.png)


## Legend spacing in all Charts

For an optimal data visualization, the space between legend items has been decreased in order to improve the visual space of the data plot.

For more information see [legend](chart-guide/chart-configurations/legend).

**Before the fix**
![legend spacing](/images/legend_spacing_original.png)

**After the fix**
![legend spacing fixed](/images/legend_spacing_update.png)


## The "%" symbol correctly displays in all Stacked Charts

In Stacked bar charts the percentage "%" symbol now displays properly on the numeric axis. Previously, when the `stack100Percent` attribute was set to 1, the "%" symbol did not get applied on the numeric axis

**Before the fix**
![legend spacing](/images/percentage_original.png)

**After the fix**
![legend spacing](/images/percentage_update.png)
