---
title: Time Markers | FusionCharts
description: This article defines the time markers.
heading: Time Markers
---

FusionTime lets you mark events on the time axis with the help of markers. A time marker can either represent an event that occurs only once or one that occurs over a range of time. You can indicate these two type of events with a pointer (for an event that occurs once) or a band (for an event that occurs over time).

A time marker appears as an overlay on the canvas. When you hover the mouse pointer over a time marker, a tooltip appears with context-sensitive information about the data the marker represents.

Note: In a multivariate chart, all the canvas share the same time markers.

<image/Code snippet>

A sample chart with time markers is shown below:

<<Live Chart>>

In the given multivariate chart, you can see a time marker extending between two points on the time axis. Note that the label of the marker shows the date where it begins. Also, notice that the time marker begins and ends at exactly the same points on all the chart canvases.

## Configure Time Markers

You can configure data markers using the following attributes:

* Use the `label` attribute to define the label for the time marker.

* Use the `start` attribute to define the start time for the marker, with respect to the start of the date/time. 
**Note:** Start Date is mandatory to get a time marker.

* Use the `end` attribute to define the end time for the marker. Note that if you set the end of the date/time, then the marker will be presented as a band. If you omit it instead, the marker will be represented as a line.

* Use the `timeFormat` attribute to define the format of the start and end values of the time marker.

* Use the `repeat` attribute to define the frequency, at which the cyclic time marker will be repeated.

    * Use the `unit` attribute to define the time unit for the time marker. You can set its value as Year, Quarter, Month, Week, Day, Hour, Minute, Second, or Millisecond. You can also set its value as one of the weekdays (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday).

    * Use the `multiplier` attribute to define the multiplier of the time unit. By default, this value is `1`.

Refer to the code given below:

```

...

        {

          "label": String,

          "start": String,

          "end": String,

          "timeFormat": String,

          "style": {

            "label": Style | String,

            "marker": Style | String

          },

          "repeat": {

            "unit": String,

            "multiplier": Number

          }

        }

```

Note: 

* You can position the time marker label to the left or right using the attribute `text-anchor`.

* For cyclic time markers, the label is always visible for the first time marker.

