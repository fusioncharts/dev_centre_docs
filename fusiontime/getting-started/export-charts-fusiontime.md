---
title: Exporting Charts | FusionCharts
description: Export charts seamlessly with FusionTime! Learn how to export charts in various formats. Enhance your data visualization now! Explore the guide.
heading: Exporting Charts
---

## The dropdown menu with export options looks as shown below:

FusionTime allows you to export your rendered charts in JPG, PNG, SVG, and PDF formats.

In this article we will discuss how to export time-series charts in FusionTime.

The dropdown menu with export options looks as shown below:

<img src="{% site.BASE_URL %}/images/fusiontime-export-charts.png" alt="Export Time Series" width="700" height="420">

To enable export:

- Set the `exportEnabled` attribute to `1` under chart level.

- The <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart.

Hover over this button to see the dropdown menu with export options. From the menu, select the required format. The chart is exported to your machine in the selected format.

A time-series chart with export enabled is shown below. Hover over the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the required export format.

{% embed_ftChart online-sales-single-series-export-chart %}

Click [here](https://jsfiddle.net/fusioncharts/2q3ba784/) to edit the above chart.

To enable the export feature, refer to the code below:

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    chart: {
      exportEnabled: "1" //Enable Export Feature
    }
  }
});
```

In the above code we have:

- Set the value of the `exportEnabled` attribute to `1` under the `chart` object
