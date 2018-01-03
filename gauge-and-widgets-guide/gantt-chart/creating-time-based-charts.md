---
permalink: gauge-and-widgets-guide/gantt-chart/creating-time-based-charts.html
title: Creating Time-based Charts | FusionCharts
description: This section talks about creating time-based charts and date+tim-based charts. One can also specify a time in the JSON data
heading: Creating Time-based Charts
chartPresent: true
---

FusionCharts Suite XT allows you to create both date-based and time-based charts as well as charts that plot both date and time.

In this section, you will be shown how you can create time-based charts and date+time-based charts.

## Time Format Required by FusionCharts Suite XT

FusionCharts Suite XT makes it mandatory to specify time in the 24-hour format as "hour:mins:secs (hh:mm:ss)" in the JSON/XML data.

The 24-hour clock is a convention of time-keeping in which the day runs from midnight to midnight and is divided into 24 hours, numbered from 0 to 23. A time of the day is written in the 24-hour notation in the form hh:mm (for example 01:23) or hh:mm:ss (for example, 01:23:45), where hh (00 to 23) is the decimal number of full hours that have passed since midnight, mm (00 to 59) is the number of full minutes that have passed since the last full hour, and ss (00 to 59) is the number of seconds since the last full minute. In the 24-hour time notation, the day begins at midnight, 00:00 and the last minute of the day is that which begins at 23:59.

So, to specify a time in the JSON data, you will have to define a "category" as shown in the code snippet below::

```javascript
"category": [
    {
        "start": "00:00:00",
        "end": "23:59:59",
        "label": "Day"
    }
]
```

Or, you can define task as shown below:


```javascript
"task": {
    "processid": "EMP121",
    "start": "08:00:00",
    "end": "12:30:00",
    "label": "Morning Shift"
}
```

## Time-based Gantt chart

As an example, we will plot a time-based Gantt chart that represents the time shifts for each employee of the development division at Bakersfield Central. The chart’s time span will be one day only. Within that day, we will distribute the chart into time blocks and show each employee’s work time.

The "Development Division - Time Shifts" Gantt chart thus rendered looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-creating-time-based-chart-example-1.js %}





<p class='text-info'>If you're using only time based charts, you can specify 23:59:59 as 24:00:00 for ease of usage.</p>

## Creating Date+Time-based Charts

As an example here, we will show the development division’s work schedule over two days.

The date+time-based Gantt chart thus created looks like this:

{% embed_all {"source": "gauge-and-widgets-guide-gantt-chart-creating-time-based-chart-example-2.js", "id": "2"} %}