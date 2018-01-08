---
permalink: chart-guide/real-time-charts/adding-data-stamp.html
title: Adding Data Stamp | FusionCharts
description: Using FusionCharts you can add data stamp in real-time charts.
heading: Adding Data Stamp
chartPresent: true
---

Assume that you are plotting a real-time line chart to monitor the stock prices for Harry’s SuperMart. You want the stock price change to be recorded every 5 seconds. However, to efficiently consume bandwidth, you want to this stream this data to the chart only after every 15 seconds.

The real-time line chart thus rendered is shown below:

{% embed_all advanced-charting-real-time-charts-adding-data-stamp-example-1.js %}





In the data above, we have set `refreshInterval` to 5 and `updateInterval` to 15.The `dataStreamURL` attribute is set to `dataProviderPage.php`, which means that this page will be responsible for providing the stock price statistics. Now, each time the data provider page is invoked, it needs to provide the chart with three historical values (although the chart data is refreshed every 15 seconds, data is updated every 5 seconds).

In traditional systems, the data provider page will have to keep track of the data that was last sent to the chart using either session variables or by storing this information in a database. Either way, this can be a cumbersome task to do in a stateless environment - sessions will not scale well and using a database will require a lot of additional code to store details of each connected user.

FusionCharts Suite XT uses the data stamp feature to solve this problem. Data stamp is a token of information that is passed with each update to the chart and back to the server, and helps to easily identify the data that was last sent to the chart.

For our scenario, we would want to use the data stamp as follows:

1. When the chart is first rendered, we will provide the initial date/time as data stamp in the XML/JSON data , so that the chart can pass it to the data provider page as querystring.

2. The data provider page will now request this data stamp from the querystring and provide any stock price data recorded after that time as output data. Thereafter, it will build the data string and then append the updated data stamp, which is the data/time of the last data sent to the chart.

3. The entire data and the data stamp will now be sent to the chart as a real-time update.

4. The chart will read this data, update the view, and then update its own data stamp.

5. After this, when the chart again polls the server for real-time data, it appends the updated data stamp to the data provider page and requests new data. Steps 2, 3, and 4 will thus be executed recursively.

## Setting up the Initial Data Stamp

The following code snippet is used to set the initial data stamp:

```javascript

{
    "chart": {
        "dataStreamURL": "files/php/advanced-charting-real-time-charts-adding-data-stamp-php-1.php",
        "refreshInterval": "15",
        "dataStamp": "13:43:45",
        ...
    },
}

```

After every 15 seconds now, the chart will call the following URL:

```javascript

files/php/advanced-charting-real-time-charts-adding-data-stamp-php-1.php?FCTimeIndex=35454&dataStamp=13:43:45

```

The `dataStamp` attribute is used to add the data stamp to the URl. The `FCTimeIndex` is a paramter added by the chart to avoid caching.

The code in the data provider page will now request this data stamp and then provide the values updated after this time. After providing the three updated values (for the last 15 seconds) the data provider page will need to update the data stamp by providing the time of the last stock price reading.

Therefore, the output provided by the data provider page will read something like this:

```javascript

&label=13:43:55,13:44:05,13:44:15|value=34,23,65&dataStamp=13:45:15

```

The above output contains:

* the labels for the three updated values

* the three updated values

* the updated data stamp - which is the time of the last update that was sent to the chart

Once the chart receives this update, it will update itself to plot the three new values and will also update its data stamp. Next time when the chart invokes the data provider page, it will invoke the following URL:

```javascript

dataProviderPage.php?FCTimeIndex=37564&dataStamp=13:45:15

```

Note how the `dataStamp` has been updated to the one specified by the real-time update. This helps to constantly update the data stamp and thereby, keep a track of the last data sent to chart.