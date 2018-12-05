---
title: Time Markers | FusionCharts
description: This article defines the time markers.
heading: Time Markers
---

FusionTime lets you mark events on the [time axis]({% site.baseurl %}/fusiontime/fusiontime-component/time-axis). A time marker appears as an overlay on the canvas. When you hover the mouse pointer over a time marker, a tooltip appears with the information about the marker.

A time marker can be of two types:

* Time instance marker - It occurs at a given instance of time.  
* Time band marker -  It occurs over a span of time.

## Time instance marker

To create a single time instance marker follow the steps below:

* Create a `timeMarker` object under `xAxis` object

* Within the `timeMarker` object use the `start` attribute to define the time instance at which the marker should be drawn.

* Within the `timeMarker` object use the `timeFormat` attribute to define the format of the time specified in the `start` attribute.

* Within the `timeMarker` object use the `label` attribute to define the label for the time marker.

Refer to the code below:

```
xAxis: {
    timemarker: [{
        start: 'Mar-1982',
        label: 'Economic downturn was triggered by {br} tight monetary policy in an effort to {br} fight mounting inflation.',
        timeFormat: "%b-%Y"
    }],
}
```

A sample chart with a time marker is shown below:

{% embed_ftChart fusiontime-components-time-marker-1 %}

To create repeatable time instance markers follw the stpes below:

* Set the above attributes and the specify the following attribute:
    
    * Within the `dataMarker object create the `repeat` object to define the frequency, at which the cyclic time marker will be repeated.

        * Use the `unit` attribute to define the time unit for the time marker inside the `repeat` object. You can set its value as Year, Quarter, Month, Week, Day, Hour, Minute, Second, or Millisecond. You can also set its value as one of the weekdays (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday).

        * Use the `multiplier` attribute to define the multiplier of the time unit. By default, this value is `1`.
Refer to the code below:

* Use the `end` attribute to define the end time for the marker. Note that if you set the end of the date/time, then the marker will be presented as a band. If you omit it instead, the marker will be represented as a line.

```
xAxis: {
    columnname: 'Time',
    timemarker: [{
        start: 'Mar-1982',
        label: 'Economic downturn was triggered by {br} tight monetary policy in an effort to {br} fight mounting inflation.',
        timeFormat: "%b-%Y"
        repeat {
        unit: Year,
        multiplier: 5
    }
},
```
The sample chart with repeated time instance markers is shown below:

{% embed_ftChart fusiontime-components-time-marker-2 %}

## Time span marker 

To create the marker just include the `end` attribute along with the other attributes of the single time instance marker under the `timemarker` object within the `xAxis` object. Refer to the code below:

Refer to the code below:

```
 xAxis: {
    columnname: 'Time',
    timemarker: [{
        start: 'Mar-1980',
        end: 'Jun-1983',
        label: 'Economic downturn was triggered by {br} tight monetary policy in an effort to {br} fight mounting inflation.',
        timeFormat: "%b-%Y"
    },
```

A sample chart with time spam markers is shown below:

{% embed_ftChart fusiontime-components-time-marker-3 %}