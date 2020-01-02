---
title: Candlestick Chart | FusionCharts
description: The FusionCharts Suite XT candlestick chart offers you a powerful and interactive interface to plot your stock data.
heading: Candlestick Chart
---

> This chart type belongs to **PowerCharts XT**.

A candlestick chart is widely used for applications that require analysis of equity and commodity prices. It allows you to show the opening price, closing price, highest trading price, lowest trading price, and the trade volume on a single chart. A combination of the line and bar charts, a candlestick chart represents the range of price movement for a specific time interval.

The FusionCharts Suite XT candlestick chart offers you a powerful and interactive interface to plot your stock data. It offers the following features:

* Integrated price and volume plot, where the volume plot can be turned on or off.

* Multiple chart options for price plotting - candlestick/bar/line.

* Interactive tooltip and customizable hover bar.

* Option to plot trend lines and zones on the chart.

* Option to plot any number of custom trend sets on the chart, which can be customized to show technical indicators.

* Ability to provide missing data.

* Ability to highlight specific candles.

* Option to draw vertical indicator lines at any point on the x-axis.

{% embed_chartAnatomy candlestick-chart.json %}

## Create a Candlestick Chart

As an example, we will create a candlestick chart that shows the daily stock price for Harry's SuperMart (stock name HRYS) for the last two months.

To create a candlestick chart follow the steps given below:

* Specify the chart type using the `type` attribute. To render a candlestick chart, set `candlestick`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

In the JSON data:

* Set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Set the `label` attribute to specify the label for the data item. The label is rendered along the x-axis.

> **Note:** This attribute belongs to the `category` object as well as the `data` object. When used in the `category` object, it specifies the numerical position of a category on the x-axis. When used in the `data` object, it specifies the numerical position of a candlestick point on the x-axis.

* Set the `open` attribute to specify the opening price of a data item.

* Set the `close` attribute to specify the closing price of a data item.

* Set the `high` attribute to specify the highest price of a data item.

* Set the `low` attribute to specify the lowest price of a data item.

* Set the `volume` attribute to specify the volume of the transaction. To render the volume chart, specify the value to this attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=candlestick) page of candlestick chart.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [
        {
            "category": [...]
        }
    ],
    "dataset": [
        {
            "data": [
                {
                    "open": "18.74",
                    "high": "19.16",
                    "low": "18.67 ",
                    "close": "18.99",
                    "x": "1",
                    "volume": "4991285"
                },
                {
                    "open": "23.97",
                    "high": "23.99",
                    "low": "23.14",
                    "close": "23.32",
                    "x": "61",
                    "volume": "4879546"
                }
            ]
        }
    ]
}
```

The candlestick chart thus created will look like:

{% embed_all standard-charts-candlestick-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/Hcm78/) to edit the candlestick chart.

In the chart above, the price chart is rendered in the first half of the candlestick chart while the volume chart is rendered in the second half.

A candlestick chart is widely used for applications that require analysis of equity and commodity prices. It allows you to show the opening price, closing price, highest trading price, lowest trading price, and the trade volume on a single chart.

Candlestick chart has both x-axis and y-axis as numeric. This chart does not directly accept dates for the data and category labels. Instead, it accepts an x-value for each data. This allows for greater flexibility as you can plot days, hours, weeks, months, years, etc. using this chart.

> Converting your dates into x-values is very simple. Using your server side script, select the first date in your chart as base date. Now, use date difference function (with respect to this base date) to get the x-values for each date. So, if you want to show daily quotes on the chart, you can use "day" as the date difference parameter. Similarly, if you want to show weekly quotes, you can use "weeks" as the date difference parameter and so on.

Now, let's customize the appearance and properties of the charts. 

## Set a chart type for the Price chart

You can render the price chart using a candle chart, a bar chart, or a line chart. To render the price chart as per your requirement, set `plotPriceAs` attribute as `candlestick`, `bar` or `line`.

Refer to the code given below:

```json
{
  "chart": {
    "plotPriceAs" : "line"
  }
}
```
A candlestick chart with the price chart rendered as a line chart looks like this:

{% embed_chart standard-charts-candlestick-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/b3xfLrmg/) to edit the candlestick chart.

## Set the Price to Plot for the Line Price chart

For a price chart rendered as a line chart, you can decide whether you want to plot the chart w.r.t. the opening price or the closing price, using the `plotClosingPrice` attribute.

As discussed before, high and low price values are not required for the line chart.

Refer to the code given below:

```json
{
  "chart": {
    "plotClosingPrice" : "0"
  }
}
```
A candlestick chart looks like:

{% embed_chart standard-charts-candlestick-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/b3xfLrmg/) to edit the candlestick chart.

## Show/Hide the Volume chart

The volume chart in a candlestick chart can be set as hidden by specifying the `showVolumeChart` attribute as `0`.  The default value for this attribute is `1`.

Refer to the code given below:

```json
{
  "chart": {
    "showVolumeChart" : "0"
  }
}
```
A candlestick chart rendered with the volume chart hidden looks like this:

{% embed_chart standard-charts-candlestick-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/urzeqo6d/) to edit the candlestick chart.

> You can also customize the height of the volume chart by **volumeHeightPercent** attribute. The default value is **40%** and you can choose any value between **20%** to **80%**.

## Configure Trend-Sets and Trend-Lines

### Trend-Sets

For a candlestick chart, you can plot overlay lines on the existing data plots. These lines, known as trend-sets, can be effectively used to show technical indicators.

To add cosmetics to the trend-sets, take a look at the following attributes and their usage:

* Specify the `trendSetColor` attribute to set the hex code of the color used to render all trend-sets on the chart.

* Specify the `trendSetAlpha` attribute to set the transparency for all trend-sets on the chart. This attribute takes values between `0` (transparent) and `100` (opaque).

* Specify the `trendSetThickness` attribute to set the thickness for all trend-sets on the chart.

* Specify the `trendSetDashed` attribute as `1`, to set the trend-sets as dashed. The default value of this attribute is `0`. 

* Specify the length of the dashed trend-sets using `trendSetDashLen` attribute. 

* `trendSetDashGap` attribute sets the gap between each dash, if the trend-sets are rendered as dashed.

Refer to the code given below:

```json
{
  "chart": {
    "trendSetColor" : "0",
    "trendSetAlpha" : "0",
    "trendSetThickness" : "0",
    "trendSetDashed" : "0",
    "trendSetDashLen" : "0",
    "trendSetDashGap" : "0"
  }
}
```

To customize a specific trend-set, follow the steps given below:

* `name` attribute sets the name of a trend-set. This attribute belongs to the `trendset` object.

* Specify the `color` attribute under `trendset` object to set the hex code of the color that will be used to render a specific trend-set.

* Specify the `alpha` attribute under `trendset` object to set the transparency of a specific trend-set.

* Specify the `thickness` attribute under `trendset` object to set the thickness of a  specific trend-set.

* Set the `includeInLegend` attribute under `trenset` object to specify whether the name of a trend-set will be included in the legend. Setting this attribute to 0 will not show the trend-set in the legend, whereas the default value for this attribute is `1`.

* Specify the `dashed` attribute under `trendset` object as `1`, to set the trend-sets as dashed for a particular trend-set. The default value of this attribute is `0`. 

* Specify the length of the dashed for a particular trend-sets using `dashlen` attribute.

* `dashGap` attribute sets the gap between each dash for a particular trend-set, if the trend-sets are rendered as dashed.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [],
    "trendset": [{
        "name": "High trends",
        "color": "#0000CC",
        "alpha": "1",
        "thickness": "1",
        "includeInLegend": "1",
        "dashed": "1",
        "dashlen": "3",
        "dashGap": "4"
    }]
}
```

A candlestick chart rendered with a trend-set looks like this:

{% embed_chart standard-charts-candlestick-chart-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/hqvpoLrm/) to edit the candlestick chart.

Each individual object in the `set` object under `trendset` can have two attributes: `x` and `value`. `x`  represents the x-axis index where this `value` should be plotted.