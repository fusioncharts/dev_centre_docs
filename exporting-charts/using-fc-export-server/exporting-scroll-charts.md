---
title: Exporting Scroll Charts | FusionCharts
description: Export scroll charts effortlessly and overcome the hassle of exporting large datasets in one go. Check our comprehensive article for more information.
heading: Exporting Scroll Charts
---

Scroll charts work great when you need to plot large datasets. As long as you don't mind scrolling, there is virtually no limit to the number of plot points a scroll chart can have. However, this outstanding benefit also gives rise to one of the major problems associated with the chart type - more specifically, with exporting the same.

While you can easily export the current view of a scroll chart, exporting the entire chart can prove to be a hassle. Consider a chart with a large dataset represented through a scroll column 2D as shown below.

{% embed_chart exporting-chart-data-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/enwsqj0d/) to edit the above chart.

Exporting this chart in a single image would result in something like the following:

![Export Scroll Charts](/images/export-scroll-charts.png)

We can see that the above exported image includes all the data plots of the chart. But the clarity and the purpose is defeated with an overall chart export. So the intent of the export feature wears thin with increase in the data plots if we export the entire scroll chart at one go. Considering this scenario, we've designed our export module for scroll charts such that only the current view of the scroll chart is exported as an image.

Let us look at all the available scenarios that are possible with FusionCharts. Depending on your use case, you can try out either of the two following options:

## Use the Native Export Feature

The export feature for a scroll chart is only designed to give you the current canvas view at the point of export. Have a look at the chart below and try exporting your desired data plots. You can adjust the number of data plots appearing on the canvas by using the attribute **numVisiblePlot**. This example below shows the client-side image export of the chart.

{% embed_chart exporting-chart-data-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/fnx5h9ak/) to edit the above chart.

Whereas, one can export server-side using FusionExport. Follow the steps in [this](https://www.fusioncharts.com/dev/exporting-charts/using-fusionexport/tutorials/export-chart-as-image) tutorial to export the current view of your scroll Column 2D chart using FusionExport.

However, if you need to export the entire chart, follow the process detailed below:

## Export the Entire Scroll Chart

Use this method only if the number of data plots of a scroll chart are not too many and can fit inside a single exported image/pdf, etc., while displaying each data plot with perfect visual clarity.

Use the code given below:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>FusionCharts | Exporting Scroll Charts with Dynamic Resize</title>

    <!-- including FusionCharts core package JS files -->
    <script
      type="text/javascript"
      src="<http://static.fusioncharts.com/code/latest/fusioncharts.js>"
    ></script>
    <script
      type="text/javascript"
      src="<http://static.fusioncharts.com/code/latest/fusioncharts.charts.js>"
    ></script>

    <!-- including theme file -->
    <script
      type="text/javascript"
      src="<http://static.fusioncharts.com/code/latest/themes/fusioncharts.theme.fint.js>"
    ></script>

    <!-- chart object -->
    <script type="text/javascript">
      FusionCharts.ready(function() {
        revenueChart = new FusionCharts({
          type: "scrollColumn2d",
          renderAt: "chart-container",
          width: "550",
          id: "myChartId",
          height: "350",
          dataFormat: "json",
          dataSource: {
            chart: {
              caption: "Sales Trends",
              subcaption: "FY 2012 - FY 2013",
              xaxisname: "Month",
              yaxisname: "Revenue",
              showvalues: "1",
              placeValuesInside: "1",
              rotateValues: "1",
              valueFontColor: "#ffffff",
              numberprefix: "$",
              exportEnabled: "1",

              // Hide export menu item
              exportShowMenuItem: "0",
              theme: "fint"
            },
            categories: [
              {
                category: [
                  { label: "Jan 2012" },
                  { label: "Feb 2012" },
                  { label: "Mar 2012" },
                  { label: "Apr 2012" },
                  { label: "May 2012" },
                  { label: "Jun 2012" },
                  { label: "Jul 2012" },
                  { label: "Aug 2012" },
                  { label: "Sep 2012" },
                  { label: "Oct 2012" },
                  { label: "Nov 2012" },
                  { label: "Dec 2012" },
                  { label: "Jan 2013" },
                  { label: "Feb 2013" },
                  { label: "Mar 2013" },
                  { label: "Apr 2013" },
                  { label: "May 2013" },
                  { label: "Jun 2013" },
                  { label: "Jul 2013" },
                  { label: "Aug 2013" },
                  { label: "Sep 2013" },
                  { label: "Oct 2013" },
                  { label: "Nov 2013" },
                  { label: "Dec 2013" }
                ]
              }
            ],
            dataset: [
              {
                data: [
                  { value: "27400" },
                  { value: "29800" },
                  { value: "25800" },
                  { value: "26800" },
                  { value: "29600" },
                  { value: "32600" },
                  { value: "31800" },
                  { value: "36700" },
                  { value: "29700" },
                  { value: "31900" },
                  { value: "34800" },
                  { value: "24800" },
                  { value: "26300" },
                  { value: "31800" },
                  { value: "30900" },
                  { value: "33000" },
                  { value: "36200" },
                  { value: "32100" },
                  { value: "37500" },
                  { value: "38500" },
                  { value: "35400" },
                  { value: "38200" },
                  { value: "33300" },
                  { value: "38300" }
                ]
              }
            ]
          }
        });
        revenueChart.render();
      });
      function myJS() {
        revenueChart.resizeTo("1000", "350");
        DrawCompleteFunc();
      }
      function DrawCompleteFunc() {
        if (FusionCharts.items["myChartId"].width == "1000") {
          //to check if it is called after chart is redrawn

          setTimeout(function() {
            FusionCharts("myChartId").exportChart({ exportFormat: "jpg" });
          }, 1500);

          setTimeout(function() {
            revenueChart.resizeTo("550", "350");
          }, 5000);
        }
      }
    </script>
  </head>

  <body>
    <center>
      <div id="chart-container"></div>
      <input type="submit" id="export" value="Export Chart" onClick="myJS()" />
    </center>
  </body>
</html>
```

> You can make use of the **numVisiblePlot** attribute to change the number of visible data plots in the canvas. Find out more about it [here](/chart-guide/standard-charts/scroll-charts#configure-the-number-of-visible-data-plots).

### Export Formats

In FusionCharts, you can export charts in different formats, ranging between images to Excel spreadsheets and PDF files. You can also customize various aspects of the export process, such as the name to be displayed in the export menu, the name of the exported file, or whether a number of charts are to be exported in a batch.

Let us look into the different possible export formats for a scroll chart.

- Image Formats (PNG, JPG, SVG)

- Document Formats (PDF)

- Data Formats (XLSX, CSV)

Let us look into an example with data export feature:

{% embed_chart exporting-chart-data-example-2.js %}

In the above example, we are exporting the scroll chart's data in csv format. Unlike the image export where we can export only the current canvas view of the chart; the data export feature lets us export the entire chart data irrespective of the canvas view.

Learn more about Scroll charts [here](https://www.fusioncharts.com/dev/chart-guide/standard-charts/scroll-charts).

Hope that you could successfully export your scroll chart by following the above methods. If any queries or issues, please get in touch with our support team.
