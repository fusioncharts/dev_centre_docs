---
title: Time Marker | FusionCharts
description: This article defines the time markers.
heading: Time Marker
---

FusionTime lets you mark events on the [time axis](/fusiontime/fusiontime-component/time-axis). A time marker appears as an overlay on the canvas. When you hover the mouse pointer over a time marker, a tooltip appears with the information about the marker.

A time marker can be of two types:

- Time instance marker - It occurs at a given instance of time.
- Time band marker - It occurs over a span of time.

## Time instance marker

To create a single time instance marker follow the steps below:

- Create a `timeMarker` object under `xAxis` object

- Within the `timeMarker` object use the `start` attribute to define the time instance at which the marker should be drawn.

- Within the `timeMarker` object use the `timeFormat` attribute to define the format of the time specified in the `start` attribute.

- Within the `timeMarker` object use the `label` attribute to define the label for the time marker.

Refer to the code below:

```javascript
"xAxis": {
    "timemarker": [{
        "start": 'Mar-1982',
        "label": 'Economic downturn was triggered by {br} tight monetary policy in an effort to {br} fight mounting inflation.',
        "timeFormat": "%b-%Y"
    }],
}
```

A sample chart with a time marker is shown below:

{% embed_ftChart fusiontime-components-time-marker-1 %}

To create repeatable time instance markers, follow the steps given below:

- Set the above attributes and the specify the following attribute:
  - Within the `timeMarker` object create the `repeat` object to define the frequency, at which the cyclic time marker will be repeated.
  - Use the `unit` attribute to define the time unit for the time marker inside the `repeat` object. You can set its value as Year, Quarter, Month, Week, Day, Hour, Minute, Second, or Millisecond. You can also set its value as one of the weekdays (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday).
  - Use the `multiplier` attribute to define the multiplier of the time unit. By default, this value is `1`.
  - Use the `end` attribute to define the end time for the marker. Note that if you set the end of the date/time, then the marker will be presented as a band. If you omit it instead, the marker will be represented as a line.

Refer to the code below:

```javascript
xAxis: {
  plot: 'Time',
  timemarker: [{
    start: 'Mar-1980',
    label: 'US inflation peaked at 14.8%.',
    timeFormat: "%b-%Y",
    repeat: {
      unit: 'Year',
      multiplier: 5
    },
    style: {
      marker: {
        fill: '#f8b8b7'
      }
    }
  },
}
```

The sample chart with repeated time instance markers is shown below:

{% embed_ftChart fusiontime-components-time-marker-2 %}

In the above sample, the time marker is a specific point on the time axis. You can also render the time marker from top to bottom (vertically) of the canvas by setting the value of `type` attribute to **full** within the `time marker` object.

Refer to the code given below:

```javascript
xAxis: {
    plot: 'Time',
    timemarker: [{
        start: 'Mar-1980',
        label: 'US inflation peaked at 14.8%.',
        timeFormat: "%b-%Y",
        type: 'full'
        repeat: {
            unit: 'Year',
            multiplier: 5
        },
        style: {
            marker: {
                fill: '#f8b8b7'
            }
        }
    }]
}
```

A sample chart is shown below:

{% embed_ftChart fusiontime-components-time-instance-marker-full %}

## Time span marker

To create the marker just include the `end` attribute along with the other attributes of the single time instance marker under the `timemarker` object within the `xAxis` object. Refer to the code below:

Refer to the code below:

```javascript
xAxis: {
    plot: 'Time',
    timemarker: [{
        start: 'Mar-1980',
        end: 'Jun-1983',
        label: 'US inflation peaked at 14.8%.',
        timeFormat: "%b-%Y",
        style: {
            marker: {
                fill: '#f8b8b7'
            }
        }
    }]
}
```

A sample chart with time span markers is shown below:

{% embed_ftChart fusiontime-components-time-marker-3 %}

In the above sample, the time marker has a specific height according to the width and height of the chart. You can also render the time span marker with a line from top to bottom (vertically) of the canvas by setting the value of `type` attribute to **full** within the `timeMarker` object.

Refer to the code given below:

```javascript
xAxis: {
    plot: 'Time',
    timemarker: [{
        start: 'Mar-1980',
        end: 'Jun-1983',
        label: 'US inflation peaked at 14.8%.',
        timeFormat: "%b-%Y",
        type: 'full',
        style: {
            marker: {
                fill: '#f8b8b7'
            }
        }
    }]
}
```

A sample chart is shown below:

{% embed_ftChart fusiontime-components-time-span-marker-full %}


### Time Span Marker Tooltip

The `showTimeSpanMarkerTooltipAt` attribute allows you to configure the behavior of time span marker tooltips. This attribute accepts either 1 or 0.

+ Setting `showTimeSpanMarkerTooltipAt` to 0 disables the time span marker tooltip. 

+ Setting `showTimeSpanMarkerTooltipAt` to 1 shows the time span marker tooltip while the time span marker width is less than the width of the chart canvas.

+ When `showTimeSpanMarkerTooltipAt` is not specified the behavior is the same as setting it to 1.

When `showTimeSpanMarkerTooltipAt` is set to 0 if you hover the mouse over any part of the chart canvas a vertical crossline shows bin details in a tooltip. 

In the example below `showTimeSpanMarkerTooltipAt` is set to 1, hovering over a time span marker shows its tooltip. If we zoom in until the time span marker is bigger than the chart canvas, hovering over the time span marker now shows a vertical crossline displaying bin details on a tooltip. This behavior could be useful in cases where you have various time span markers that should be easy to identify on  a zoomed out view and can be explored in more detail while zoomed in.

{% embed_ftChart fusiontime-components-time-span-marker-tooltip %}

Refer to the code given below:

```javascript
xAxis: {
    plot: 'Time',
    showTimeSpanMarkerTooltipAt: 1, 
	timemarker: [{
        start: 'Mar-1980',
        end: 'Jun-1983',
        label: 'US inflation peaked at 14.8%.',
        timeFormat: "%b-%Y",
        type: 'full',
        style: {
            marker: {
                fill: '#f8b8b7'
            }
        }
    }]
}
```

[__Try it Yourself__](https://jsfiddle.net/fusioncharts/jntb04f9/)

## Style Definition

You can set the cosmetic properties of all the parts of a time marker using familiar CSS styling approach by specifying the different style parameters in the 'style' object' of the 'timeMarker' object. Even the cosmetic properties for the hover state of each time marker element can be specified.

The image below highlights the marker-box, marker-line, and the marker-notch of the time marker.

<img src="{% site.BASE_URL %}/images/fusiontime-time-marker-components.png" alt="Time Axis" width="700" height="420">

The image below highlights the time marker and the text of the time marker.

<img src="{% site.BASE_URL %}/images/time-span-marker-text.png" alt="Time Axis" width="700" height="420">

Refer to the code given below:

```javascript
"dataSource": {
    "yAxis": [{
        "timemarker": [{
            "style": {
                "marker": { }, // Affects style of marker box, line and notch
                "marker:hover": { }, // Affects hover style of marker box, line and
                // notch
                "marker-box": { },
                "marker-box:hover": { },
                "marker-line": { },
                "marker-line:hover": { },
                "marker-notch": { },
                "marker-notch:hover": { },
                "text": { },
                "text:hover": { }
            }
        }]
    }]
}
```

In the above code:

- Create a `style` object under `timemarker` object to add styling to the different elements of `timemarker`.
- In the style `object`:
  - `marker` is used to style the marker box, line, and notch.
  - `marker:hover` is used to style the marker box, line, and notch when hovered.
  - `marker-box` is used to style the marker box of the time marker.
  - `marker-box:hover` is used to style the marker box of the time marker when hovered.
  - `marker-line` is used to style the marker line of the time marker.
  - `marker-line:hover` is used to style the marker line of the time marker when hovered.
  - `marker-notch` is used to style the notch of the time marker.
  - `marker-notch:hover` is used to style the notch of the time marker when hovered.
  - `text` is used to style the text of the time marker.
  - `text:hover` is used to style the text of the time marker when hovered.
