---
title: Chanage output time format | FusionCharts
description: This article defines how to change the output time format.
heading: Change output time format
---

In a time series chart, time is primarily displayed on the time axis and tooltip of a data plot. With v1.2.0, developers will be able to control the display of output time using standard date-time formats for the specific time unit.

FusionTime supports the following a list of time formats:

- Year
- Month
- Day
- Hour
- Minute
- Second
- Millisecond

Refer the example given below:

{% embed_ftChart output-time-format-sample %}

In the above example, we have tried to specify the output time format on the time axis. Refer to the code below:

```json
"xAxis": {
    outputTimeFormat: {
        //year: "",
        month: "%b'%y (%q)",
        day: "%d/%m (%a)",
        //hour: "",
        //minute: "",
        //second: "",
        //millisecond: ""
    }
}
```

Here, we have specified date-time tokens for 'month' and 'day' only. So, for situations when the data bin with time unit of 'month' or 'day' occurs (while zooming in and out of chart), the time will be displayed according to the date-time tokens specified in the above code.

For situations where the data bins on other time units, the default formatting for the particular time unit will apply.

To specify the date-time format in the tooltip, you will have to specify the date-time format for a specific time unit in the `outputTimeFormat` object in `tooltip`.