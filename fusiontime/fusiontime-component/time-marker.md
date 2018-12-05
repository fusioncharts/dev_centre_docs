---
title: Time Markers | FusionCharts
description: This article defines the time markers.
heading: Time Markers
---

FusionTime lets you mark events on the [time axis]({% site.baseurl %}/fusiontime/fusiontime-component/time-axis) with the help of markers. A time marker can either represent an event that occurs only once or one that occurs over a range of time. You can indicate these two type of events with a pointer (for an event that occurs once) or a band (for an event that occurs over time).

A time marker appears as an overlay on the canvas. When you hover the mouse pointer over a time marker, a tooltip appears with context-sensitive information about the data the marker represents.

> In a multivariate chart, all the canvas share the same time markers.

<img src="{% site.baseurl %}/images/fusiontime-component-time-markers.png" alt="Time Markers" width="700" height="420">

A sample chart with time markers is shown below:

{% embed_ftChart fusiontime-components-time-marker %}

In the above chart, you can see a time marker extending between two points on the time axis. Note that the label of the marker shows the date where it begins.

## Configure Time Markers

You can configure time markers using the following attributes:

* Use the `label` attribute to define the label for the time marker.

* Use the `start` attribute to define the start time for the marker, with respect to the start of the date/time. 
**Note:** Start Date is mandatory to get a time marker.

* Use the `end` attribute to define the end time for the marker. Note that if you set the end of the date/time, then the marker will be presented as a band. If you omit it instead, the marker will be represented as a line.

* Use the `timeFormat` attribute to define the format of the start and end values of the time marker.

* Use the `repeat` attribute to define the frequency, at which the cyclic time marker will be repeated.

    * Use the `unit` attribute to define the time unit for the time marker. You can set its value as Year, Quarter, Month, Week, Day, Hour, Minute, Second, or Millisecond. You can also set its value as one of the weekdays (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday).

    * Use the `multiplier` attribute to define the multiplier of the time unit. By default, this value is `1`.

> Time Markers are configured using `timeMarker` object under `xAxis` object defined as follows:

```
xAxis: {
    timemarker: [{
        "start": String,
        "end": String,
        "label": String,
        "timeFormat": String,
    ]}
}
```

The code to render the above chart is shown below:

```
xAxis: {
    columnname: 'Time',
    timemarker: [{
        start: 'Jul-1981',
        end: 'Nov-1982',
        label: 'Economic downturn was triggered by {br} tight monetary policy in an effort to {br} fight mounting inflation.',
        timeFormat: "%b-%Y"
    }, {
        start: 'Jul-1990',
        end: 'Mar-1991',
        label: 'This eight month recession period {br} was characterized by a sluggish employment recovery, {br} most commonly referred to as a jobless recovery.',
        timeFormat: "%b-%Y"
    }, {
        start: 'Jun-2004',
        end: 'Jul-2006',
        label: 'The Fed after raising interest rates {br} at 17 consecutive meetings, ends its campaign {br} to slow the economy and forestall inflation.',
        timeFormat: "%b-%Y"
    }, {
        start: 'Dec-2007',
        end: 'Jun-2009',
        label: 'Recession caused by the worst {br} collapse of financial system in recent {br} times.',
        timeFormat: "%b-%Y"
    }]
},
```

Note: 

* You can position the time marker label to the left or right using the attribute `text-anchor`.
* For cyclic time markers, the label is always visible for the first time marker.