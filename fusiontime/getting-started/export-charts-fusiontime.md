---
title: Exporting Charts | FusionCharts
description: This article focuses on how you can export your chart using plain javascript.
heading: Exporting Charts
---

FusionTime is used to plot time-series data and the ability to export the rendered time-series charts in JPG, PNG, SVG, PDF and XLS formats.

In this article we will discuss how to export time-series charts in FusionTime.

A server-side helper library enables export by conveting the SVG to the required format. You can also export VML as it is converted to SVG internally before exporting. During the export process, the data to be exported is first sent to the FusionCharts servers to be processed, finally generating the output in the required format.

When charts are exported on the client side, the entire exporting process is carried out using the user’s browser. The chart’s SVG is converted into the selected export format and download using the HTML5 `download` attribute.

> You must have an active internet connection for this feature to work.

To enable chart exporting, the `chart` level attribute `exportEnabled` is set to __1__. The <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over this button to see the dropdown menu with export options, as shown in the image below:

<img src="{% site.baseurl %}/images/fusiontime-export-charts.png" alt="Export Time Series" width="700" height="420">

From the menu rendered, select the required format. The chart is downloaded to your machine in the selected format.

A time-series chart with export enabled is shown below. Click the <span> ![image]({% site.baseurl %}/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the required export format.

{% embed_ftChart online-sales-single-series-export-chart %}

To enable the export feature, refer to the code below:

```
new FusionCharts({
    type: 'timeseries',
    ...
    dataSource: {
	    ...
	    chart: {
	        exportEnabled: '1' //Enable Export Feature
	    },
	    ...
	}
})
```

In the above code we have:

* Set the value of the `exportEnabled` attribute to `1` under the `chart` object