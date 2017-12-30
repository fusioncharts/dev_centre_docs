---
permalink: gauge-and-widgets-guide/gantt-chart/configuring-date-formats.html
title: Configuring Date Formats | FusionCharts
description: FusionCharts Suite XT allows you to configure the input and output date format; you can input the date in one format and output it using a custom format.
heading: Configuring Date Formats
chartPresent: true
---

FusionCharts Suite XT allows you to configure the input and output date format; you can input the date in one format and output it using a custom format.

In this section, you will be shown how you can:

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/configuring-date-formats.html#setting-input-date-format">Set input date format</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/configuring-date-formats.html#setting-input-time-format">Set input time format</a>

* <a href="{{ site.baseurl }}gauge-and-widgets-guide/gantt-chart/configuring-date-formats.html#setting-the-output-date-format">Configure output date format</a>

## Setting Input Date Format

Given below is a brief description of the attribute used to set the input date format:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`dateFormat`</td>
    <td>It is used to specify the input date format for all the dates in your JSON data. This is a mandatory attribute to specify and, once specified, all the dates in your JSON data should conform to the format specified herein.<br/>
    This attribute can take values in any one of the following formats:
    mm/dd/yyyy
    dd/mm/yyyy
    yyyy/mm/dd</td>
  </tr>
</table>


## Setting Input Time Format

FusionCharts Suite XT makes it mandatory to specify time in the 24-hour format as "hour:mins:secs (hh:mm:ss)" in the JSON/XML data.

The 24-hour clock is a convention of time-keeping in which the day runs from midnight to midnight and is divided into 24 hours, numbered from 0 to 23. A time of the day is written in the 24-hour notation in the form hh:mm (for example 01:23) or hh:mm:ss (for example, 01:23:45), where hh (00 to 23) is the decimal number of full hours that have passed since midnight, mm (00 to 59) is the number of full minutes that have passed since the last full hour, and ss (00 to 59) is the number of seconds since the last full minute. In the 24-hour time notation, the day begins at midnight, 00:00 and the last minute of the day is that which begins at 23:59.

A Gantt chart configured for the input time format looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-date-formats-example-1.js %}

Given below is a brief description of the attributes used to set the input time format:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`start`</td>
    <td>It is used to specify the starting time for a task. This attribute can be used with the `category` and the `task` objects.</td>
  </tr>
  <tr>
    <td>`end`</td>
    <td>It is used to specify the ending time for a task. This attribute can be used with the `category` and the `task` objects.</td>
  </tr>
</table>


## Setting the Output Date Format

You can configure the output date format to be different from the input date format.

A Gantt chart with the output date format configured looks like this:

{% embed_all gauge-and-widgets-guide-gantt-chart-configuring-date-formats-example-2.js %}

Given below is a brief description of the attribute used to set the output date format:

<table>
  <tr>
    <th>Attribute Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`outputDateFormat`</td>
    <td>It is used to specify the format in which a date will be rendered on the Gantt chart. You can also specify how the dates look on your Gantt chart using this attribute. This attribute takes the output date format in various output date templates(e.g., `mns ddds, yyyy`).<br/>
    Here, `mns ddds, yyyy` is the custom date format template which is applied to output dates to convert our input dates to a more readable format. For example by using this template the date `01/01/2014` with be converted to `Jan 1st, 2014`.

<p class="text-info"> If you do not explicitly specify the output date format, the chart uses the input date format to render the date on the Gantt chart.</p></td>
  </tr>
</table>


The output date format template can consist of various pre-defined tokens. You can add those tokens to form up a date format. Currently supported tokens for building the output date format template are:

<table>
  <tr>
    <th>Token</th>
    <th>What it represents?</th>
  </tr>
  <tr>
    <td>`dd`</td>
    <td>Numeric Date</td>
  </tr>
  <tr>
    <td>`mm`</td>
    <td>Numeric Month</td>
  </tr>
  <tr>
    <td>`yy`</td>
    <td>Numeric year (2 digits only) </td>
  </tr>
  <tr>
    <td>`yyyy`</td>
    <td>Numeric year (4 digits) </td>
  </tr>
  <tr>
    <td>`hh`</td>
    <td>Hour in 24 hour format - Numeric </td>
  </tr>
  <tr>
    <td>`hh12`</td>
    <td>Hour in 12 hour format - Numeric </td>
  </tr>
  <tr>
    <td>`mn`</td>
    <td>Minute</td>
  </tr>
  <tr>
    <td>`ss`</td>
    <td>Second</td>
  </tr>
  <tr>
    <td>`ampm`</td>
    <td>When using 12 hour format, this specifies whether it's AM or PM </td>
  </tr>
  <tr>
    <td>`mnl`</td>
    <td>Month Name Long (Full) </td>
  </tr>
  <tr>
    <td>`mns`</td>
    <td>Month Name Short </td>
  </tr>
  <tr>
    <td>`dnl`</td>
    <td>Week Day Name (Long) </td>
  </tr>
  <tr>
    <td>`dns`</td>
    <td>Week Day Name (short) </td>
  </tr>
  <tr>
    <td>`ds`</td>
    <td>Suffix for the date (like st, nd, rd, th, etc.) </td>
  </tr>
</table>


Given below are a few sample templates of custom output date formats:

<table>
  <tr>
    <th>Output date format that you need</th>
    <th>What date format to use? </th>
  </tr>
  <tr>
    <td>21st March, 2007</td>
    <td>`ddds mnl, yyyy`</td>
  </tr>
  <tr>
    <td>March 21 2007</td>
    <td>`mnl dd yyyy`</td>
  </tr>
  <tr>
    <td>21-Mar-07</td>
    <td>`mns-dd-yy`</td>
  </tr>
  <tr>
    <td>3/7/2007</td>
    <td>`mm/dd/yyyy`</td>
  </tr>
  <tr>
    <td>21-03</td>
    <td>`dd-mm`</td>
  </tr>
  <tr>
    <td>Friday, 21st March 07 </td>
    <td>`dnl, ddds mnl yy`</td>
  </tr>
  <tr>
    <td>21-7-2007 13:11:20 </td>
    <td>`dd-mm-yyyy hh:mn:ss`</td>
  </tr>
  <tr>
    <td>21-7-2007 1:11:20 PM</td>
    <td>`dd-mm-yyyy hh12:mn:ss ampm`</td>
  </tr>
  <tr>
    <td>1:11:20 PM</td>
    <td>`hh12:mn:ss ampm`</td>
  </tr>
</table>


<p class="text-info">The output format is not restricted to the examples listed above. Using the tokens, you can build your own custom date format templates.</p>