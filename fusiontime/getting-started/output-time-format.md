---
title: Change output time format | FusionCharts
description: Customize the output time format in time series charts with FusionCharts v1.2.0. Explore our comprehensive article to control the display of output time.
heading: Change output time format
---

In a time series chart, time is primarily displayed on the time axis and tooltip of a data plot. With v1.2.0, developers will be able to control the display of output time using standard [date-time formats](/fusiontime/fusiontime-attributes#date-time-format) for the specific time unit.

FusionTime supports the following time units:

- Year
- Month
- Day
- Hour
- Minute
- Second
- Millisecond

You can customize the output time format for each time unit by specifying date-time tokens for respective time format.

Refer to the example given below:

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

In the above code:

* Define the `xAxis` object.
* Create the `outputTimeFormat` object.
* Set the custom output time format for month and day as `%b'%y (%q)` and `%d/%m (%a)` respectively.

> If yo do not set the data-time tokens for any time unit, the default formatting for the particular time unit will apply.

The date-time tokens for respective time formats is given below:

| Time Unit   | Tokens     | Example |
| ----------- | ---------- | ------- |
| Year        | `%Y`       | 2018    |
| Month       | `%b`       | Jan     |
| Day         | `%d`       | 04      |
| Hour        | `%-I` `%p` | 11 PM   |
| Minute      | `%-M` `m`  | 26 m    |
| Second      | `%-S s`    | 30 s    |
| Millisecond | `%-L ms`   | 75 ms   |

To specify the date-time format in the tooltip, you will have to specify the date-time format for a specific time unit in the `outputTimeFormat` object in `tooltip`.
