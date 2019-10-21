---
title: Exporting Charts | FusionCharts
description: This article focuses on how you can export your chart using Ruby on Rails.
heading: Exporting Charts
---

FusionCharts Suite XT uses JavaScript to render charts in the browser using SVG and VML. A prominent feature of the suite is the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well. This article focuses on how you can export charts using FusionCharts JSP wrapper.

In this section we will discuss how to:

- [Export Charts as Image and PDF](/getting-started/ruby-on-rails/export-charts-using-ruby-on-rails#export-charts-as-image-and-pdf)
- [Modes of Export](/getting-started/ruby-on-rails/export-charts-using-ruby-on-rails#modes-of-export)
- [Export Chart Data](/getting-started/ruby-on-rails/export-charts-using-ruby-on-rails#export-chart-data)

## Export Charts as Image and PDF

A server-side helper library enables export by conveting the SVG to the required format. You can also export VML as it is converted to SVG internally before exporting. During the export process, the data to be exported is first sent to the FusionCharts servers to be processed, finally generating the output in the required format.

When charts are exported on the client side, the entire exporting process is carried out using the user’s browser. The chart’s SVG is converted into the selected export format and download using the HTML5 `download` attribute.

> You must have an active internet connection for this feature to work.

To enable chart exporting, the `chart` level attribute `exportEnabled` is set to **1**. The <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over this button to see the dropdown menu with export options, as shown in the image below:

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

From the menu rendered, select the required format. The chart is downloaded to your machine in the selected format.

A column 2D chart with export enabled is shown below. Click the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the required export format.

{% embed_all exporting-as-image-and-pdf-introduction-example-1.js %}

The JSON data to render the above chart is given below:

```
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "exportEnabled": "1", //Export Your Chart
        "theme": "fusion",
    },
    // Chart Data
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
},
```

The full code of the above sample is given below:

```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.util.*" %>
<%@page import="fusioncharts.FusionCharts" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>FusionCharts | Export Chart As Image (server-side)</title>
<link href="../Styles/ChartSampleStyleSheet.css" rel="stylesheet" />
<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
<script>
    function onRenderComplete() {
        console.log("event: render");
    }
</script>
</head>
<body>
    <h3>Export Chart As Image (server-side)</h3>
    <div id="column_2d"></div>
    <div><span><a href="../Index.jsp">Go Back</a></span></div>
    <%
        String jsonData;
        jsonData = "{
            // Chart Configuration
            "chart": {
                "caption": "Countries With Most Oil Reserves [2017-18]",
                "subCaption": "In MMbbl = One Million barrels",
                "xAxisName": "Country",
                "yAxisName": "Reserves (MMbbl)",
                "numberSuffix": "K",
                "exportEnabled": "1", //Export Your Chart
                "theme": "fusion",
            },
            // Chart Data
            "data": [{
                "label": "Venezuela",
                "value": "290"
            }, {
                "label": "Saudi",
                "value": "260"
            }, {
                "label": "Canada",
                "value": "180"
            }, {
                "label": "Iran",
                "value": "140"
            }, {
                "label": "Russia",
                "value": "115"
            }, {
                "label": "UAE",
                "value": "100"
            }, {
                "label": "US",
                "value": "30"
            }, {
                "label": "China",
                "value": "30"
            }]
        }";

        FusionCharts column_chart = new FusionCharts(
                  "column2d",
                  "chart-container",
                  "700",
                  "400",
                  "column_2d",
                  "json",
                  jsonData
                );
        %>

    <%=column_chart.render()%>
    <%=column_chart.addEvent("renderComplete","onRenderComplete")%>
</body>
</html>
```

## Modes of Export

FusionCharts Suite XT supports the following three modes of export:

- Server-side export
- Client-side export
- Auto-export

By default, charts are exported using the auto-export feature.

The `exportMode` attribute is used to switch between the different modes of export.

> Starting from version v3.12.1, the `exportMode` attribute **replaces** the `exportAtClientSide` attribute.

To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/configuring-the-export-feature) guide.

## Export Chart Data

FusionCharts lets you export the rendered charts in JPG, PNG, SVG, and PDF formats. Starting v3.11.0, FusionCharts Suite XT introduces exporting chart data in the XLSX format (as an Excel spreadsheet).

To enable chart exporting, set the chart level attribute `exportEnabled` to **1**. The <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button is then visible on the top-right corner of the chart. Click/hover over the button to see a dropdown menu with the export options, as shown in the image below:

![image](/images/exporting-as-image-and-pdf-export-menu.jpg)

To export chart data, select the **Export as XLSX** option. The XLSX file with the chart data gets downloaded to your machine.

A column 2D chart with export enabled is shown below. Click the <span> ![image](/images/exporting-as-image-and-pdf-export-button.jpg) </span> (menu) button and select the **Export as XLSX** option to export the chart data.

{% embed_all exporting-as-image-and-pdf-introduction-example-2.js %}

> To export a chart in the XLSX format using server-side exporting, it is mandatory that the exporting server has the latest code, available in the FusionCharts package. Alternatively, you can also use the FusionCharts export link, `export.api3.fusioncharts.com`. For client-side exporting, the exporting chart data feature is supported only by modern browsers with canvas support (except Safari and IE9). You can still export your charts, without including the configurable data.

> To process the export data on your own server, configure one of the export handlers by following the [Setup Private Export Server](/exporting-charts/using-fc-export-server/configuring-the-export-feature) guide.
