---
title: Realtime Charts | FusionCharts
description: Realtime charts, also known as data streaming charts, are charts that automatically update themselves after every n seconds, without any page refreshes
heading: Realtime Charts
---

> These chart types belong to **FusionWidgets XT**.

Realtime charts, also known as data streaming charts, are charts that automatically update themselves after every `n` seconds, without any page refreshes, by getting new data from the server.

FusionCharts Suite XT currently offers the following six realtime charts:

* Realtime Line

* Realtime Area

* Realtime Column

* Realtime Stacked Area

* Realtime Stacked Column

* Realtime Line (Dual Y)

Realtime charts are charts used in livestock monitoring These charts first present the historical data for a given period of time. When new data is available, the charts update automatically and display the new data after discarding the previous value.

## Features

Realtime charts support the following features:

* Multiple datasets with realtime update for each of them

* Multiple data updated in each update, i.e., a single pull to the server can come back with any number of data values updated.

* Multiple updates and refresh intervals on the chart. Update interval fetches the new data, but it will not change the view of the chart. Refresh interval applies the updated data in chart view.

* Message logger

* Alert manager

* Annotations can be used to render custom objects

* JavaScript API can be used to set data, retrieve data, start/stop updates, clear chart.

* JavaScript events can be raised when the chart is initialized and rendered as well as when the data is updated.

* Clearing chart view

* Stop realtime updates from server

* Interactive legend to show/hide datasets in line/area/column charts

* Realtime vertical divisional lines and trendlines are supported

* Context menu to help users to enable/disable realtime updates

* Number Format

* Predefined and automatic color palette support

The format of realtime data for realtime charts depends on:

* The number of datasets you want to update the chart with.

* The number of incremental updates you want to pass to the chart in one attempt.

* The attributes you want to update the chart with.

* The attributes you want to update for each dataset - like the label, color, link, toolText, etc.

* Whether you are passing empty data to the chart.

* The commands for the chart.

## RealTime Line Chart

A realtime line chart looks as follows:

{% embed_chartAnatomy real-time-line-chart.json %}

Let's create our first realtime line chart showcasing the stock price monitoring at Harry's SuperMart.

To create a realtime chart follow the steps given below:

* In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.

* Specify the chart type using the `type` attribute. To render a realtime line chart, set `realtimeline`.

* Set the container object using `renderAt` attribute.

* Specify the dimension of the chart using `width` and `height` attributes.

* Set the type of data (JSON/XML) you want to pass to the chart object using `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=realtimeline) page of realtime line chart.

A realtime line chart looks like:

{% embed_chart standard-charts-real-time-charts-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/43fJn/) to edit the realtime line chart.

## Realtime Area Chart

To create a realtime area chart, set the `type` attribute to `realtimearea` chart. The rest of the data structure remains the same.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=realtimearea) page of realtime area chart.

A realtime area chart looks like:

{% embed_chart standard-charts-real-time-charts-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/kdfX7/) to edit the realtime area chart.

## Realtime Stacked Area Chart

Now, let's create a realtime stacked area chart showcasing the number of live visitors in every 5 seconds interval.

To create a realtime chart, set the `type` attribute to `realtimestackedarea`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=realtimestackedarea) page of realtime stacked area chart.

A realtime stacked area chart looks like:

{% embed_chart standard-charts-real-time-charts-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/C8mkW/) to edit the realtime stacked area chart.

## Realtime Column Chart

In the above samples, we rendered realtime line and area charts. Let's now create a realtime column charts showcasing number of online transactions per second on the e-commerce site.

To create a realtime column chart, set the `type` attribute to `realtimecolumn`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=realtimecolumn) page of realtime column chart.

A realtime column chart looks like:

{% embed_chart standard-charts-real-time-charts-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/NvJat/) to edit the realtime column chart.

## Realtime Stacked Column Chart

FusionCharts also supports realtime stacked column chart. Here the sample below will showcase the number of live visitors on site, updated every 5 seconds.

To create a realtime stacked column chart, set the `type` attribute to `realtimestackedcolumn`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=realtimestackedcolumn) page of realtime stacked column chart.

A realtime stacked column chart looks like:

{% embed_chart standard-charts-real-time-charts-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/bLUw5/) to edit the realtime stacked column chart.

## Realtime Dual Y-axis Line Chart

To create a realtime dual y-axis line chart, set the `type` attribute to `realtimelinedy`.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=realtimelinedy) page of realtime dual y-axis line chart.

A realtime dual y-axis line chart looks like:

{% embed_chart standard-charts-real-time-charts-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/2wn8g/) to edit the realtime dual y-axis line chart.

## Number of Datasets to Update

Let's say you want to update two datasets plotted on a line chart. To do this, you need to output the data in the following format:

```
&value=23|43

```
Here, the two output values, 23 and 43, are separated by the | (pipe character). The value specified first, 23, is set for the first dataset and the value specified second, 43, is set for the second dataset.

Similarly, if you had three datasets to update, the data will be passed in the following format:

```
&value=23|43|45

```
Here, the third value, 45, is set for the third dataset.

## Number of Incremental Updates

Realtime charts let you pass multiple values for one dataset in each update.

If working over HTTP and need to ensure that you utilize the bandwidth efficiently. Considering this, it will not be feasible to set your chart, with three datasets, to update itself every second, because this may create a strain on the server. However, you also do not want to skip the data values that you missed by not updating the data every second. To avoid this, you can provide data to the chart in the following format:

```
&value=23,25,24|43,47,45|45,47,49

```
Here, the values 23, 25, and 24 correspond to the first dataset, 43, 47, and 45 correspond to the second dataset, and 45, 47, and 49 correspond to the third dataset. All values for one dataset are separated by a comma, all datasets are separated by the | (pipe character)

## Attributes to Update the Chart

Assume that you plot a realtime line chart to monitor stock prices for Harry's SuperMart. On this monitoring chart, the stock price is checked at every seventh instance of data update. You want to add a vertical trendline that helps you keep track of every instance when the price is checked.

To do this, you can provide data to the chart in the following format:

```
&label=11:45&value=753|345&vline=0&vLineLabel=vLine&vLineColor=#666666&vLineThickness=2&vLineDashed=1

```

The realtime line chart thus rendered is shown below:

{% embed_chart standard-charts-real-time-charts-example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/k703vvrm/) to edit the realtime line chart.

## Attributes to Update each Dataset

### The `label` Attribute

#### Update the Label as Part of Realtime Data

Consider that you are plotting a realtime multi-series line chart that indicates the load on three servers. The time is plotted on the x-axis, and the corresponding load for all three servers is plotted on the y-axis. With each incremental data, you will now also have to provide the label for the x-axis along with the data value for the y-axis.

To do this, you can provide data to the chart in the following format:

```
&label=11:45&value=23|43|45

```
When the chart receives this data, it shifts all existing data and labels one position to the left. Next, it plots the new label on the x-axis and the three new data values on the y-axis.

#### Hide the Label

For charts plotting a large number of data points, you may not want to render all labels on the chart to avoid cluttering. Instead, you may want to show alternate labels, while updating your data every minute.

For the data label that you want to hide, you can provide your incremental data to the chart in the following format:

```
&label=11:45&showLabel=0&value=23|43|45

```

The `showLabel` attribute, when set to `0`, hides the data label from the x-axis.

### The `link` Attribute

For realtime charts, you can render a data plot as a clickable link that opens in a new window, a pop-up window, in a frame, etc.

To do this, you can provide the incremental data to the chart in the following format:

```
&label=11:45&value=23|43|45&link=showdetail.asp?server=1%26time=1145|showdetail.asp?server=2%26time=1145|showdetail.asp?server=3%26time=1145

```
The link in the above data has been URL encoded, because it contains special characters like `&`, `%`, etc.

### The `tooltext` Attribute

To update the tooltext, you can provide the corresponding incremental data to the chart in the following format:

```
&label=11:45&toolText=12/3/2007 11:45:23 AM &value=23|43|45

```

### The `color` Attribute

To update the color, you can provide the corresponding incremental data to the chart in the following format:

```
&label=11:45&value=23|43|45&color=FF0000|0372AB|FF5904

```
The colors for each dataset are separated by the `|` (pipe character). The colors specified for realtime updates will always be filled with solid colors and not gradients.

## Provide Empty Data

To provide empty data to the chart, so that a break in the data plot (column/line/area) shows, you can provide the incremental data to the chart in the following format:

```
&label=11:45&value=||

```
## Commands Sent

### The `clearChart` Command

To clear the historical data displayed on the chart, you can send the `clearChart` command to the server in the following format:

```
&clear=1

```

### The `stopUpdate` Command

To stop the chart from the polling the server for realtime updates, you can send the `stopUpdate` command in the following format:

```
&stopUpdate=1

```
After you have stopped updates for a chart, you can restart updates either by user interaction or by using client side JavaScript API.

## Send Messages Pertinent

For realtime charts that show the message logger, update various parameters for the message logger in realtime.

## Multiple Datasets and Updates

Realtime charts in the FusionCharts Suite XT can be plotted for any number of datasets. This feature, however, is configured differently from adding and updating a single dataset.

## Add Multiple Datasets

To add multiple datasets, let's create a realtime chart plotted for two datasets - retail store transactions and online transaction. In the chart `dataStreamURL` attribute will be used to set `advance-charting-real-time-charts-multiple-datasets-and-updates-php-1.php` as the data provider page.

A realtime column chart that compares the retail and online store transactions at Harry's SuperMart looks like this:

{% embed_chart standard-charts-real-time-charts-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/bmfwdck3/) to edit the realtime column chart.

## Data Provider Page

The data provider page now contains the following code:

```php
<?php

    date_default_timezone_set("UTC");

    $now =  date("H:i:s", time());

    //Get random numbers

    $randomValueRetail = floor(rand(5,30));

    $randomValueOnline = floor(rand(1,10));

    //Output

    echo  "&label=".$now."&value=".$randomValueRetail."|".$randomValueOnline;

?>
```

An example of how data values will be sent as output to the chart is given below:

```
&label=19:26:56&value=22|7

```

In the data shown above, we have defined a common label that takes two values - one for each dataset. The values are separated using the `|` (pipe character). In the example above, 22 is the value for the Retail Store dataset, and 7 is the value of the Online dataset. The order of values here should correspond with the order of dataset object arrays defined in the JSON/XML data.

### Interactive Legend

Like most other charts in the FusionCharts Suite XT, realtime charts with multiple datasets are also rendered with an interactive legend. An interactive legend is useful when, out of multiple datasets, you want to focus on only one. To hide a dataset, you click the corresponding data series name in the legend, and the dataset will not be displayed. When the series name is clicked again, the dataset can be viewed on the chart.

The image below is a screenshot of the above realtime chart with the online transactions dataset hidden:

![realtime charts](/images/standard-charts-real-time-charts-image-1.png)

Even when a dataset is not visible, it will continue updating itself in the background from the realtime data. Also, all alert managers associated with the dataset will continue to work.

To disable the interactive legend, set the value of `interactiveLegend` attribute to `0`. Refer to the code below:

```json
{
    "chart": {
        "interactiveLegend": "0"
    }
}
```

## Push Multiple Updates

So far, for every dataset rendered on the chart, we have passed only single-value updates. FusionCharts Suite XT lets you pass multiple updates for each dataset at one time.

The example below shows the format used to push multiple updates at one time:

```
&label=11:45:55,11:46:00,11:46:05&value=22,27,28|7,6,5

```

In the above example, three updated have been provided for each dataset present on the chart together. Three new labels has also been provided for the x-axis, each label corresponding to each value update for both datasets.

When providing multiple values, values within a dataset should be comma-separated. For multiple datasets, each dataset should be separated by a `|` (pipe character).

In the chart shown below, the `dataStreamURL` attribute will be used to set `advance-charting-real-time-charts-multiple-datasets-and-updates-php-1.php` as the data provider page.

A realtime chart with multiple updates for each dataset sent at one time looks like this:

{% embed_chart standard-charts-real-time-charts-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/kmayyt5o/) to edit the realtime line chart.

### Data Provider Page

The updated data provider page `advance-charting-real-time-charts-multiple-datasets-and-updates-php-1.php` to output multiple values contains the following code:

```php
<?php
    date_default_timezone_set("UTC");
    //Get random numbers
    $randomValueRetail1 = floor(rand(5,30));
    $randomValueRetail2 = floor(rand(5,30));
    $randomValueOnline1 = floor(rand(1,10));
    $randomValueOnline2 = floor(rand(1,10));
    //Times
    $time1 =  date('H:i:s', strtotime('-3 seconds'));
    $time2 =  date("H:i:s", time());
    //Output
   echo  "&label=".$time1.",".$time2."&value=".$randomValueRetail1.",".$randomValueRetail2."|".$randomValueOnline1.",".$randomValueOnline2;
?>

```

This page outputs the data in following format:

```
&label=11:16:09,11:16:12&value=26,25|1,3

```

## Add Historical Data

In most applications of realtime charts, you would want the chart to initially show historical data and then continue updating itself - instead of starting with a blank canvas and receiving data updates thereafter. You can do this by specifying the historical data in your JSON/XML data.

In this section, you will be shown how you can specify historical data on a chart.

## Specify Historical Data

Here let's create a chart which tracks the online purchases from Bakersfield Central at Harry's SuperMart. When the chart first renders, it shows the purchases record from 8 minutes before the chart was rendered to a minute before. After that, the chart updates itself every 5 seconds.

In the data structure above, you will see:

* Addition of categories > category object array to - creation of x-axis labels for the historical data

* Addition of dataset > data object array to specify data values - equal to the number of x-axis labels specified.

A realtime chart rendered with historical data looks like this:

{% embed_chart standard-charts-real-time-charts-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/s74a1zme/) to edit the realtime line chart.

Now, in the chart shown below, observe that the chart view shows 10 data plots at any given time. Increase/decrease the number of data points/data plots that are displayed on the chart at one time.

Look at the realtime column chart shown below:

{% embed_chart standard-charts-real-time-charts-example-11.js %}

Now, let's create a realtime column chart configuring to display 15 data plots at a time. To specify the number of data plots in one screen at a given time, set the value of `numDisplaySets` attribute to `15`. As soon as the 16th data comes in, the first data towards the left will be deleted, and the rest of the data will be shifted one position to the left.

Refer to the code given below:

```json
{
    "chart": {
        "numDisplaySets": "15"

    }
}
```
A realtime column chart configured to display 15 data plots at a time is shown below:

{% embed_chart standard-charts-real-time-charts-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/1xL2nd76/) to edit the realtime column chart.

## Add Data Stamp

Let's plot a realtime line chart to monitor the stock prices for Harry's SuperMart. T stock price change to be recorded every 5 seconds. However, to efficiently consume bandwidth, you want to this stream this data to the chart only after every 15 seconds.

Now, let's create a realtime chart where we will set `refreshInterval` to 5 and `updateInterval` to 15. The `dataStreamURL` attribute is set to `dataProviderPage.php`, which means that this page will be responsible for providing the stock price statistics. Now, each time the data provider page is invoked, it needs to provide the chart with three historical values (although the chart data is refreshed every 15 seconds, data is updated every 5 seconds).

In traditional systems, the data provider page will have to keep track of the data that was last sent to the chart using either session variables or by storing this information in a database. Either way, this can be a cumbersome task to do in a stateless environment - sessions will not scale well and using a database will require a lot of additional code to store details of each connected user.

The realtime line chart thus rendered is shown below:

{% embed_chart standard-charts-real-time-charts-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/vmgcbnok/) to edit the realtime line chart.

FusionCharts Suite XT uses the data stamp feature to solve this problem. Data stamp is a token of information that is passed with each update to the chart and back to the server, and helps to easily identify the data that was last sent to the chart.

For our scenario, we would want to use the data stamp as follows:

1. When the chart is first rendered, we will provide the initial date/time as data stamp in the XML/JSON data, so that the chart can pass it to the data provider page as `queryString`.

2. The data provider page will now request this data stamp from the `queryString` and provide any stock price data recorded after that time as output data. Thereafter, it will build the data string and then append the updated data stamp, which is the data/time of the last data sent to the chart.

3. The entire data and the data stamp will now be sent to the chart as a realtime update.

4. The chart will read this data, update the view, and then update its data stamp.

5. After this, when the chart again polls the server for realtime data, it appends the updated data stamp to the data provider page and requests new data. Steps 2, 3, and 4 will thus be executed recursively.

## Set up the Initial Data Stamp

The following code snippet is used to set the initial data stamp:

```json
{
    "chart": {
        "dataStreamURL": "files/php/advanced-charting-real-time-charts-adding-data-stamp-php-1.php",
        "refreshInterval": "15",
        "dataStamp": "13:43:45"
    }
}
```

After every 15 seconds, the chart will call the following URL:

```
files/php/advanced-charting-real-time-charts-adding-data-stamp-php-1.php?FCTimeIndex=35454&dataStamp=13:43:45

```

The `dataStamp` attribute is used to add the data stamp to the URL. The `FCTimeIndex` is a parameter added to the chart to avoid caching.

The code in the data provider page will now request this data stamp and then provide the values updated after this time. After providing the three updated values (for the last 15 seconds) the data provider page will need to update the data stamp by providing the time of the last stock price reading.

Therefore, the output provided by the data provider page will read something like this:

```
&label=13:43:55,13:44:05,13:44:15|value=34,23,65&dataStamp=13:45:15

```

The above output contains:

* the labels for the three updated values

* the three updated values

* the updated data stamp - which is the time of the last update that was sent to the chart

Once the chart receives this update, it will update itself to plot the three new values and will also update its data stamp. Next time when the chart invokes the data provider page, it will invoke the following URL:

```
dataProviderPage.php?FCTimeIndex=37564&dataStamp=13:45:15

```
Note how the `dataStamp` has been updated to the one specified by the realtime update. This helps to constantly update the data stamp and thereby, keep track of the last data sent to chart.

## Set Alert Manager

The alert manager helps you define thresholds for data values and perform specific actions for the defined thresholds. For example, if you are plotting a realtime temperature chart and wish to play a sound when the temperature reaches between 90 and 100 Fahrenheit, you can do this using the Alert Manager.

As long as they don't overlap, you can define any number of threshold ranges. For each threshold range, you can specify one of the following actions:

* Call a JavaScript function and pass parameters to it.

* Show a predefined annotation on the chart.

Now, let's see how the Alert Manager can be configured.

## Configure the Alert Manager for All Datasets

Let's create a realtime chart, in which the alert manager is configured to call a JavaScript function. The container object for alerts is `alerts` property, which is a child of the `datasource` object.

Now, for each alert range object, you need to define an alert array element as a child of the alerts object. The alert array elements can be configured using following points:

* Set the `minValue` attribute to specify the minimum value for the threshold range. For example, to define an alert for the range 5-8, 5 is the minimum value. When realtime values are matched against the value for `minValue`, the value is inclusive.

* Set the `maxValue` attribute to specify the maximum value for the threshold range. Like the minimum value, the maximum value is also inclusive during value checks.

* Set the `action` attribute to define the action to be taken, when the chart value matches an alert range. Possible values for this attribute are:

`CALLJS` – It calls a JavaScript function (specified using the `param` attribute – explained next) when the chart value matches against an alert range. To pass parameters to the JavaScript function, specify the exact function name and parameters in the `param` attribute – for example, `"param": "showAlert('Online Transaction above average');"`
`SHOWANNOTATION` – You can create custom annotations and annotation groups (with named IDs). This action lets you show a predefined annotation group in the chart. For example, you may define an annotation group of three circles, that represent three status indicators in the colors red, green, and yellow, and assign an annotation group ID for them. By default, you may hide all status indicators. Later, based on the chart's value, you may show an annotation. The group Id of the annotation to be shown is defined using the `param` attribute. When the chart value falls out of the alert range, the chart hides the annotation.

* Set the `param` attribute to accept the parameter for an action, depending on the type of action specified using the `action` attribute. For the `CALLJS` action, it takes the name of the JavaScript function and for the `SHOWANNOTATION` action, it takes the ID of the annotation group in order to show the annotation.
Due to some security policies, usage of `eval` has been removed and some of the features of `param` attribute has been deprecated:

    * Special characters like `(`, `)`, `-` and, cannot be passed as a parameter while function call.

    * Multiple functions cannot be passed after `param` attribute.

    * A function cannot be defined after `param` attribute.

* Set the `occurOnce` attribute to specify an alert threshold range to execute once. Set this attribute to `1` will notify the Alert Manager only the first time a value falls within that range. For example, for a temperature range 70-80 Fahrenheit, if you want to be notified only once when the temperature is 75, set the `occurOnce` attribute to 1 for this range.

A chart thus created looks like :

{% embed_chart standard-charts-real-time-charts-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/ned9rmu6/) to edit the realtime chart.

ALERT|
-
Footfall exceeded average|

## Configure the Alert Manager for Individual Datasets

In realtime charts, you can control the datasets that are checked by the Alert Manager to raise any events.

For example, if you are comparing the transactions of a Retail Store and an Online Store using a single realtime column chart, you may want alerts to be defined and raised only for the Online Store. In this case, you can disable the alerts for the Retail Store's dataset.

To configure the alert manager for individual datasets, set the value of `checkForAlerts` attribute to either `1` or `0`. Setting this attribute to `0` disables the check for that dataset, setting it to `1` (default) enables it.

Given below is a brief description of the attribute used to configure the alert manager for individual datasets:

Refer to the code given below:

```json
{
    "chart": {
        ...
    },
    {
        "dataset": [{
            "seriesname": "Retail Store",
            "checkForAlerts": "0",
            "alpha": "100",
            "data": [{
                "value": "15"
            }]
        }, {
            "seriesname": "Online",
            "alpha": "100",
            "data": [{
                "value": "2"
            }]
        }]
    }
}
```

## Set Message Logger

FusionCharts Suite XT uses the concept of streaming and showing realtime messages on the chart using the message logger. The message logger can be effectively used to show necessary realtime information or live error bugs.

The message logger is essentially a scrollable text-based scrollable window that can listen to messages streamed the from the server and then do one of the following:

* Display the message in the message logger window.

* Pass it to custom JavaScript functions (defined by you) for further actions.

The FusionCharts Suite XT message logger has the following features:

* Message logger is supported by all realtime charts and gauges. The non realtime charts do not support the message logger.

* Each realtime update of the chart can have one message to be added to the logger.

* Because it is scrollable, the message logger can contain any number of messages.

* The cosmetics of this message logger are fully customizable.

* Messages streamed to the message logger can either be displayed in the inbuilt logger or passed to any JavaScript function present in the same page. This helps you build your custom client-side loggers, without having to worry about retrieving realtime data from the server.

* The message logger be switched on or off by setting `useMessageLog` to 0 or 1 in the `chart` object of the JSON data (or in the `<chart>` element of the XML data) for the chart.

* Additionally, end users can also show/hide the logger at client-side by pressing Shift + M.

* You can also use client-side JavaScript to show/hide the message logger for a chart.

* Messages streamed to the logger can be of 4 types - `INFO`, `ERROR`, `LITERAL`, or `LINK`. You can decide the type for each message that you send to the logger. Messages displayed in the logger are formatted based on their type.

* The logger can be cleared dynamically at runtime (to get rid of existing messages) either by sending a `&clearLog=1` flag in the realtime data stream, or by using client-side JavaScript.

* The message logger window in JavaScript realtime charts and gauges shows a close button that allows you to close the logger.

A simple message logger looks as shown in the image below:

![Message Logger](/images/real-time-charts-image-1.png)

In the above image, we have a realtime column chart that monitors the footfalls at Bakersfield Central. Overlapping this chart is the message logger that contains messages that were streamed to the message logger by the server.

## Set up the Message Logger

The following two steps are involved in configuring and using the message logger.

* Configure your JSON data to use the message logger by setting its functional and cosmetic properties.

* Configure the realtime data provider page to broadcast/stream messages to the logger.

### Configure the Message Logger

To configure the message logger, follow the steps given below:

* Set the value of `useMessageLog` attribute to `1` to specify the message logger for a realtime chart/gauge.
The message logger, however, will become visible only when it listens to the first message streamed from the server.

* Set the value to `showRTMenuItem` attribute to `1` to specify the realtime update-related menu items in the chart's  context menu.
The context menu appears as a button in the bottom-left corner of the chart (you can refer to the image shown above).

The following code snippet enables the use of the message logger for a realtime chart:

```json
{
   "chart": {
   ...
   "useMessageLog": "1",
   "showRTMenuItem": "1"
   }
}
```

When the first message is streamed to the chart from server, the message logger is displayed as shown in the image below:

![First Message](/images/real-time-charts-image-2.png)

A close button appears at the top-right corner of the message logger window that you can use to close the message logger. Or you can click anywhere outside the message logger window. To re-open the message logger, click the `Show Log` option from the context menu, as shown in the image below:

![Context Menu](/images/real-time-charts-image-3.png)

The `messageGoesToJS` attribute is used to pass only the "Message Text" parameter to the JavaScript function, whereas, the `messagePassAllToJS` is used to pass all the four parameters to the JavaScript function.

For a detailed list of attributes used to configure the functional and cosmetic properties of the message logger, refer to the API reference page of the realtime chart.

### Stream Message

Each realtime update of the chart can contain one message to be added to the message logger. The messages to be logged should be provided in the realtime data stream and not in the JSON/XML data. Real-time data stream refers to the data provided by the URL specified in the `dataStreamURL` attribute.

To log messages provided in the realtime data stream, follow the points given below:

* Set the `msgId` attribute to specify a unique ID for each message, which can be used to track messaged in the custom JavaScript function and take the required actions. The ID is NOT displayed in the message logger window.

* Set the `msgTitle` to specify the message title to be displayed in the message logger window or passed to the JavaScript function.

* Set the `megText` attribute to specify the message text.

* Set the `msgtype` attribute to specify the message type. Possible values are `INFO`, `ERROR`, `LITERAL`, or `LINK`.
Each message type is rendered using a different formatting style to aid instant interpretation. `INFO` messages are shown using normal font properties. `ERROR` messages are highlighted in a shade of red. `LITERAL` type messages are shown in code-like blocks. `LINK` messages serve as clickable links.

* The messages streamed to the chart can either be displayed in the message log window or can be passed to JavaScript functions(which we'll see next). Set the value of `msgGoesToLog` attribute to `1` to specify the message to be logging in the built-in log window.
By default, this attribute takes its value from the `messageGoesToLog` attribute defined for the chart object.

* Set the `msgGoesToJS` attribute to specify whether each message streamed from the server will be passed to the local JavaScript function. Setting this attribute to `1` will pass the message to the JavaScript function, setting it to `0` will show it in the built-in log window.
By default, this attribute takes its value from the `messageGoesToJS` attribute of the `chart` object.

* Set the value of`clearLog` attribute to `1` to clear the message history for the chart currently rendered.

In the next section, let's look at different examples of realtime updates that can be streamed to the message logger.

## Examples of Realtime Update

### Simple Example

An example of a realtime update string passed to the message logger (contained in the column chart shown above) is given below:

```
&label=13%3A18%3A46&value=12&msgTitle=Footfall at : &msgText=13%3A18%3A46 hrs is  13 Customers"

```

In this update, the `&label` and `&value` parameters are absorbed by the chart for data update.

The `&msgTitle` and `&msgText` parameters are absorbed by the message logger. `&msgTitle` is set to "Footfall at : " and `&msgText` is set to "13:18:46 hrs is 13 Customers".

When a chart (with `useMessageLog` set to `1`) accepts this data stream, the message logger, as shown in the image below, is displayed:

![Data Stream](/images/real-time-charts-image-4.png)

> If you are passing any special characters as part of your message text or title (like &, %, etc.), you will need to URL Encode the text/title.

### Change the Message Type

Let's configure a chart to display an `ERROR` message in the message logger whenever the number of footfalls goes below 9. Open the message logger to look at the messages displayed for each realtime update.

A realtime chart that plots the footfalls at Bakersfield Central is shown below:

{% embed_chart standard-charts-real-time-charts-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/eqv91fqc/) to edit the realtime column chart.

To specify the message type, you can provide data in the following format:

```
&label=14%3A46%3A12&value=6&msgTitle=Footfall at : &msgText=14%3A46%3A12 hrs is  6 Customers WARNING !!!&msgType=ERROR

```

### Create Messages with Links

To display messages of type `LINK`, you can provide the following data:

```
&msgTitle=Check Dashboards for details&msgText=http%3A%2F%2Fwww%2Efusioncharts%2Ecom%3Fid%3D34&msgType=LINK

```
Because we want to link the message to `http://www.fusioncharts.com?id=34`, the `&msgText` contains the URL Encoded link.

## Clear the Message Logger from the Server

Send instruction to the chart from the server to clear the contents of the visible message logger. To do this, you need to send the following command:

```
&clearLog=1

```

You can send it as a part of the message stream, as shown in the example below:

```
&label=14%3A46%3A12&value=6&msgTitle=Footfall at : &msgText=14%3A46%3A12 hrs is  6 Customers WARNING !!!&msgType=ERROR&clearLog=1

```

This will clear all the contents of the existing message logger and start afresh.

> If you send `&clearLog=1` with each realtime update, the chart will not show any messages in the logger, because the log will be cleared with each update. Therefore, be careful to send this command only when the log needs to be cleared.

Additionally, clear the message logger using client-side JavaScript API.

## Handle Messages in JavaScript

Pass the entire (or partial) message envelope to custom JavaScript functions present in the page that contains chart.

A realtime column chart configured to pass all parameters from the message envelope to your custom JavaScript function. The `useMessageLog`, `messageGoesToJS`, `messageJSHandler`, and `messagePassAllToJS` attributes (described earlier in this article) are used to pass all parameters from the message envelope to your function.

Refer to the chart below:

{% embed_chart standard-charts-real-time-charts-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/u7h1arjq/) to edit the realtime column chart.

## Use the Client Side JavaScript API

Using the client-side JavaScript API, you can manipulate the message logger to show/hide the logger or clear the message history.

To do any of these actions, you will need to get a reference to the chart. To get the reference to a chart, you can use the DOMID of the chart and pass it using any of the following ways:

```
var chartRef = FusionCharts("myChartId");

```

Or

```
var chartRef = FusionCharts.items["myChartId"];

```

The legacy function `getChartFromId()` still works as show below:

```
var chartRef =  getChartFromId("myChartId");

```

However, note that `getChartFromId()` has been deprecated.

> You can call the JavaScript APIs of a chart only after it has rendered. You can use the [rendered event listener](/api/fusioncharts/fusioncharts-events) to check if a chart has rendered.

Once you have obtained the reference to the chart, you can use any of the functions below on the chart's logger:

* `chartRef.showLog()` - This function is used to show the message logger if it is not already visible.

* `chartRef.hideLog()` - This function is used to hide the message logger, if it is already visible.

* `chartRef.clearLog()` - This function is used to clear the contents of the message logger.

If you get JavaScript errors when accessing the above functions, make sure that:

* Enable the message logger for the chart as mentioned in Setting up the **Message Logger** and **Configuring the Message Logger** section above.

* Accessing these functions after the chart has rendered (you can use the [rendered](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-events.html#event-rendered) [event listener](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-typedefs.html#eventListener) to track if a chart has finished rendering).

## Clear Chart View

Chart clearing helps to reduce CPU usage by realtime charts when they have been running live for several days or months. Clearing the chart re-instantiates many objects in the chart, thereby clearing a lot of memory.

The chart view can be cleared:

* From the server

* By setting a clear interval

* Using JavaScript API

Now, let's discuss how you can clear the chart view using each of the above listed methods.

## Clear the Chart from the Server

Consider the following scenario: You are plotting the values of a certain counter, in real-time, 24/7. At the start of each day, you want to clear the existing data being shown on the chart (of the previous day).

To do this, you will have to send the following command to the chart as part of your realtime data update:

```
&clear=1

```
The above command clears all the data that is currently being shown on the chart. The chart now bears an empty canvas - ready to accept new incremental values from the realtime data provider page.

In the sample rendered below, the `feedData()` method is used to send the clearing command from the server to the chart.

A realtime chart that clears all its data after every 10th update looks like this:

{% embed_chart standard-charts-real-time-charts-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/4pmbt9b8/) to edit the realtime chart.

> When sending this command from the realtime data provider page to the chart, you need to make sure that it is not sent with each incremental data update. Otherwise, you will not see anything plotted on the chart because the chart will clear itself with each update.

## Set a Chart-clearing Interval

Real-time charts allow to set a predefined interval in the JSON/XML data to clear the chart. The interval should be specified in `clearChartInterval` attribute. For the sample given below, we'll set the interval to 50 seconds. Therefore, after every 50 seconds, the chart will clear itself and start drawing with a fresh canvas.

Refer to the code given below:

```json
{
    "chart": {
        "clearChartInterval": "50"
    }
}
```

A realtime column chart configured to do this looks like this:

{% embed_chart standard-charts-real-time-charts-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/qbp4t2hj/) to edit the realtime column chart.

## Clear Chart Using JavaScript API

Real-time charts expose a JavaScript API that enables you to clear charts at the client-side. To do this, you need to:

* Get a reference to the chart

* Call the `clearChart()` method

Let's create a realtime chart where the `chartRef` variable will be used to get the chart reference. The `clearChart()` method is then called using the `chartRef` variable.

A realtime column chart that is configured to be cleared using the JavaScript API after every 10th update looks like this:

{% embed_chart standard-charts-real-time-charts-example-19.js %}

Click [here](http://jsfiddle.net/fusioncharts/yvvypqbg/) to edit the realtime column chart.

> You can call the JavaScript APIs of a chart only after it has rendered.

Now, let's check out how to feed data for the realtime charts.

## Feed Data Using JavaScript

When feeding data using the JavaScript API, ensure that the format of the data feed is same as that specified by the realtime data provider page.

Use the `feedData(strData)` method to feed data to the chart. Here, `strData` is a string value which contains data in the same format as that provided by the realtime data provider page.

Let's create a chart where the data follows the pointers below:

1. Instantiate the chart without any data and with one dataset.

2. Define a custom function `updateData()` that is invoked with a JavaScript interval - this function builds the data (in the realtime data format) to be specified for the chart. In this code, the function contains a random value for demonstration purposes.

3. Feed data to the chart using the `feedData(strData)` method.

A realtime line chart for which data is set using the `feedData(strData)` method is shown below:

{% embed_chart standard-charts-real-time-charts-example-20.js %}

Click [here](http://jsfiddle.net/fusioncharts/rngL29jb/) to edit the realtime line chart.

## Retrieve Data Using JavaScript

Real-time charts allow you to get the current view of data (i.e., the data which is currently being shown on the chart) using JavaScript.

Additionally, the charts allow you to track events in JavaScript whenever new data is provided to the chart (either from the realtime data provider page or using JavaScript).

You can get data using:

* The `FC_ChartUpdated()` method

* The `realTimeUpdateComplete` and `realTimeUpdateError` events

* The `getData()` method

### The FC_ChartUpdated() Method

Real-time charts let you track data updates for the realtime chart(s) rendered on a page. Configure charts to notify new data fetches and data updates by calling the `FC_ChartUpdated(DOMId)` JavaScript method.

You can define the `FC_ChartUpdated()` method in your HTML code as shown below:

```
function FC_ChartUpdated(DOMId) {

    //Check if DOMId is that of the chart we want
    if (DOMId == "ChId1") {

        //Get reference to the chart
        var chartRef = FusionCharts(DOMId);

        //Now you can do anything with the chart...
    }
}
```

Whenever a realtime chart (present in this page) receives new data (from the data provider page or the JavaScript `feedData()` method), it will now call the `FC_ChartUpdated()` method and pass its DOM Id to this method.

If you have multiple realtime charts on the same page, you can use the DOMI d to track which chart was updated and based on that, take future actions.

### The realTimeUpdateComplete and realTimeUpdateError Events

The `realTimeUpdateComplete` event is raised every time a realtime chart or gauge completes updating itself with new data.

A sample implementation of the `realTimeUpdateComplete` event is shown below:

```json
FusionCharts("mychart").addEventListener("RealtimeUpdateComplete",
    function(event, parameter)
    {
        showData();
    }
);
```

Existing JavaScript implementations using the FC_ChartUpdated event will continue to function without any problem.

The `realtimeUpdateError` event is raised when an error occurs while updating data for a realtime chart or gauge. This event passes the HTTP Status (as the number) of the error occurred.

A sample implementation of the `realtimeUpdateError` event is shown below:

```json
FusionCharts("mychart").addEventListener("RealtimeUpdateError",
    function(event, parameter)
    {
        document.getElementById('ErrorView').innerHTML = "Problem occurred while updating realtime data. The error status code is" + parameter.httpStatus;
    }
);
```

### The getData() Method

For any realtime chart present in the HTML page, you can use the `getData()` method to get the current chart data in a JavaScript array.

The following code snippet shows how you can use the `getData()` method for the above chart:

```json
function showData() {

    //Retrieving the data

    var dataArr = FusionCharts("mychart").getData(),

        i,

        str = "";

    //Creating the table format

    str += '<table border="1" cellpadding="1" cellspacing="0" bordercolor="#cccccc" width="100%">';

    str += '  <tr>';

    str += '      <td width="50%" class="fontBold valueFont">Time</td>';

    str += '      <td width="50%" class="fontBold valueFont">Customers</td>';

    str += '  </tr>';

    //Preparing html string to create the table with data

    for (i = 0; i < dataArr.length; i++) {

        if (dataArr[i][0] !== null) {

            str += '  <tr>';

            str += '      <td width="50%" class="valueFont">' + dataArr[i][0] + '</td>';

            str += '      <td width="50%" class="valueFont">' + dataArr[i][1] + '</td>';

            str += '  </tr>';

        }

    }

    str += '</table>';

    //Adding html string in the div container

    document.getElementById('tableView').innerHTML = str;
}
```

A realtime column chart configured to retrieve data using the `getData()` method is shown below:

{% embed_chart standard-charts-real-time-charts-example-21.js %}

Click [here](http://jsfiddle.net/fusioncharts/qtgncuyg/) to edit the realtime column chart.

Whenever the data for a chart with the `myChart` ID updates in the page, the `showData()` function is invoked. This function gets the new data for the chart in a JavaScript array using the `getData()`method. The `showData()` function then creates an HTML table and renders the new data in that table.

The structure of the JavaScript array returned by the `getData()` function is shown below:


[0,0] - Empty|[0,1]- Dataset series name|[0,2] - Dataset series name|[0,n] - Dataset series name|
-|-|-|-
[1,0] - Category label of data index 1|Data for dataset [1] data index [1]|Data for dataset [2] data index [1]|Data for dataset [n] data index [m]|
,0] - Category label of data index 2|Data for dataset [1] data index [2]|Same as above|Same as above|
[m,0] - Category label of data index m|Data for dataset [n] data index [m]|Same as above|Same as above|
[m,0] - Category label of data index m|Same as above|Same as above|Same as above|
[m,0] - Category label of data index m|Same as above|Same as above|Same as above|

Click the `Get Data` button rendered below the chart, to populate the with data updates as shown below:

Time|Customers|
-|-
14:37:22|13|
14:37:27|16|
14:37:32|6|
14:37:37|16|
14:37:42|7|
14:37:47|16|
14:37:52|7|
14:37:57|16|
14:38:02|11|
14:38:07|19|

> Using the methods explained above, you can build a wide variety of interactive AJAX driven applications. You can use the chart as an interface to retrieve the data and then handle it in your JavaScript code.

## Listen to Events

The FusionCharts JavaScript Class API provides some events for realtime charts. These events are categorized into two broad groups - simple events and advanced events. Each event provides arguments to the event-listeners.

In the advanced model, two event parameters are passed to the event listener function. The first parameter, `eventObject` is is structurally common for all events. The second parameter, `argumentsObject` contains event specific properties.

## Event Parameters in the Simple Model

In the simple events model, most events (except the `FC_Exported` and the `FC_Resized` events) provide the DOM Id of the source chart - the chart that raised the event.

## Event Parameters in the Advanced Model

In the advanced model, two event parameters are passed to the event listener function. The first parameter, `eventObject` is is structurally common for all events. The second parameter, `argumentsObject` contains event specific properties.

The details of these objects are explained below:

* `eventObject`, the first argument, provides details of the event. This object has the following three properties:

    * **eventId** : An unique id given to the event.

    * **eventType** : A string containing the name or the event type e.g. "rendered" etc.

    * **sender** : A FusionCharts JavaScript Object reference to the chart that has raised the event. `argumentsObject`, the second argument, contains details of the event fired. Depending on the type of event raised, the properties of the object vary.

For more information on simple and advanced events and the `argumentsObject` for each event, refer to the [FusionCharts Events API](/api/fusioncharts/fusioncharts-events) page.

## Realtime Events

### The realtimeUpdateComplete Event

The FusionCharts JavaScript Class API `realTimeUpdateComplete` event is raised every time a realtime chart or gauge updates itself with new data.

Let's create a chart which shows the realtime statistics of footfalls at the Bakersfield Central outlet. The chart will be updated with new data every five seconds. Whenever there is a data update, the `realTimeUpdateComplete` event will be fired. The event is configured to retrieve the last data updated and display it in an HTML table rendered below the chart.

A realtime column chart configured to listen to the `realTimeUpdateComplete` event is shown below:

{% embed_chart standard-charts-real-time-charts-example-22.js %}

Click [here](http://jsfiddle.net/fusioncharts/5ukb0qLq/) to edit the realtime column chart.

More details pertaining to this event are given in the table below:

Name (Advanced model)|Name (Simple model)|When is it raised?|Event parameters|
-|-|-|-
`realtimeUpdateComplete`|FC_ChartUpdated|This event is raised whenever data is updated in realtime using:

the data provider page specified in the `datastreamURL` attribute

JavaScript API (using `setData`, `feedData`, `setDataForId` functions)|The event argument provided by `FC_ChartUpdated` function (simple event model) is the `DOMId` of the chart raising the event.
The event arguments provided in the advanced model are:

`eventObject` : This object contains the `eventId, eventType`, and `sender` properties.

`argumentsObject`: This is passed as a blank object.|

### The realtimeUpdateError Event

The `realTimeUpdateError` event is raised when an error occurs while performing a realtime update from the data provider page specified using the `dataStreamURL` attribute.

Let's create a chart with the URL to a fake data provider page has passed as value to the `dataStreamURL` attribute. It will be done to trigger the `realTimeUpdateError` event. When this event is raised, a custom error message and the error status code will be displayed.

A realtime column chart configured to listen to the `realTimeUpdateError` event is shown below:

{% embed_chart standard-charts-real-time-charts-example-23.js %}

Click [here](http://jsfiddle.net/fusioncharts/rwmmg6cg/) to edit the realtime column chart.

More details pertaining to this event are given in the table below:

Name (Advanced model)|Name (Simple model)|When is it raised?|Event parameters|
-|-|-|-
`realtimeUpdateError`|Not available|This event is raised when an error occurs while performing realtime update using `datastreamURL`.|The event arguments provided in the advanced model are:

`eventObject` : This object contains `eventId`, `eventType` and `sender` properties.

`argumentsObject`: This object contains the property listed below:

`httpStatus` : The HTTP Error status value is specified as a number (e.g., 404)|

Now let's see how you can debug errors that might crop up with realtime charts. We've grouped the possible errors and suggested solutions for them.

## Troubleshooting

**If you do not see any chart at all:**

If you see an endless loading progress bar in your browser, or if the right click menu (right click at the place where the chart should render) shows "Chart not loaded", check the following:

* Have you pasted the correct JavaScript files in the required folder?

* Have you provided the name of the chart correctly in your code?

**If you get the "Error in Loading Data" message, check:**

* Whether you've provided the correct path to the JSON/XML data in your code.

* Whether your JSON/XML file is named properly and does not have a `.txt` extension (as many basic text editors append `.txt` after the file name).

* Whether your chart JavaScript files and JSON/XML data are on the same sub-domain. Cross domain data loading is not allowed.

* Whether your JSON/XML and chart file names are in accordance with the naming conventions imposed by your operating system.

**If you get the "Invalid Data." message, it means that the JSON/XML data is malformed. Check it again for common errors like:**

* Presence of duplicate attributes in the JSON/XML.

* Difference in case of tags in XML. `<chart>` should end with `</chart>` and **not** `</Chart>` or `</CHART>`

* Missing opening/closing quotation marks for any attributes in XML. e.g., `<chart numberSuffix=%` should be `<chart numberSuffix='%`.

* Missing closing tag for any element.

**If you get a screen showing "The chart will appear within this DIV…" or "Chart." or "FusionWidgets XT will load here", check if:**

* You have copied the required JavaScript files in the right folder.

* You have included and provided the correct path of `fusioncharts.js` in your HTML code.

* There are any JavaScript syntax or runtime errors that might have halted the execution of FusionCharts APIs.

* Unique names are used for the chart's JavaScript variable, chart's ID, and the HTML div's ID

**If the chart renders initially, but doesn't update in real time, make sure that:**

* You have specified a correct and valid path for the `dataStreamURL` attribute in the JSON/XML data.

* You have specified a valid value for `refreshInterval` in your JSON/XML data

* The `dataStreamURL` attribute is returning proper data. To test this, just open your browser and run this page. It should return the data in text format.

* The output data does not contain any carriage returns (new-line characters) or HTML elements. In many scripting languages, these are automatically added. You will need to remove them.

* The page which provides the incremental update data to the charts is hosted on the same sub-domain in which the charts are hosted. Otherwise, owing to security restrictions, the charts will not be able to receive updated data. Real-time charts are allowed to retrieve data only from the same sub-domain in which the charts are residing. Data can only be loaded from a domain that is an exact match to the location of the charts, including sub-domains. For this reason, a chart residing at `server1.mydomain.com` will not be able to access data from `mydomain.com`.

> If you wish to load data from a different domain, you can set up a proxy page at the same sub-domain that will actually request data from the distant domain and then relay it to the charts. You must be able to upload and run a server-side script on a server in the same domain as the charts. In this method, a chart accesses the script, which loads the information, retrieves it, and returns the information back to the chart. This method is best if the server hosting the data is not under your control (for example, a public source or a web service).
