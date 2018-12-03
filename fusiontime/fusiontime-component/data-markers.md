---
title: Data Markers | FusionCharts
description: This article outlines the steps to configure Data Markers.
heading: Data Markers
---

Data marker in a chart represents an important event, which occurred on a specific data point. A data marker can be a bubble or a flag which is visible only when the active window contains the date. Hovering on a data marker shows additional description in the tooltip, which can include a paragraph with details on the data, link to a particular web page, images, etc.

Data marker has:

* **Type**: Type of the data marker. Example: flag.

* **Label**: Label of the specific data markers.

* **Description**: Description is visible only when you hover over the data marker. A description of a data marker can have text, image, URL, etc.

A data marker appears as shown in the chart below:

<<Live Chart>>

In the given example, you can see data markers indicating the following information:

* The exact name of the series on which the data marker is being displayed. 

* The time at which the data marker is being shown. Note that this value corresponds to the start of the date range you are viewing.

Apart from these, you can also hover the mouse pointer over the marker to see the underlying data in a tooltip. If you entered a description about the data plot you are hovering over, it will appear here as well.

## Configure Data Markers

You can customize data markers using the following attributes:

* Use the `seriesName` attribute to specify the exact name of the series, against which the data marker will be displayed. If you need to mention the exact name of the series as a combination of a series name and a measure name, then specify it in the format `<series_name>-<measure_name>`.

* Use the `time` attribute to set the time at which the data marker will be displayed. 

* Use the `timeFormat` attribute to set the format of the date corresponding to the marker.

* Use the `type` attribute to defines the type of the marker as `flag` or `pin`.

* Use the `identifier` attribute to set the character to be displayed within the marker. Note that you can only use this attribute if the marker is of the `flag` type.

* Use the `tooltext` attribute to set the text to be displayed in the tooltip, when you hover the mouse pointer over the data marker.

Refer to the code given below:

```

```