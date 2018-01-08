---
permalink: basic-chart-configurations/changing-the-size-and-type.html
title: Changing the Size and Type | FusionCharts
description: FusionCharts Suite XT lets you specify the dimensions of charts either in pixels or in percentage. You can also create a chart which resizes automatically.
heading: Changing the Size and Type
chartPresent: true
---

Till now, you have seen how to build standalone charts, gauges and maps for Harry. Each chart was rendered in a separate HTML page. Harry now wants to integrate them together in a single page, to get a consolidated view. To do this, we first need to change the size of each component to fit in well into the page. In this section, we'll see how to do that.

FusionCharts Suite XT lets you specify the dimensions of charts either in pixels or in percentage (relative to its container). If the size is specified in pixels, then the chart's dimensions remain constant, irrespective of what device or screen-size it is viewed on. But, if the width and height of the chart is set as percentage of the container, the chart converts that % value into pixels during render time, and if the size of container changes, then the chart automatically changes the size in tandem.

### Setting width and height in pixels, during initialization

In the previous example, we have already seen how to specify `width` and `height` in pixels. The code is replicated below, again. You just need to provide the numeric values, and NOT add px at the end of such values.

```html
<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
<script type="text/javascript" src="fusioncharts/js/fusioncharts.js"></script>
<script type="text/javascript" src="fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>
<script type="text/javascript">
 FusionCharts.ready(function(){
        var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "theme": "fint"
         },
        "data": [
            {
               "label": "Jan",
               "value": "420000"
            },
            {
               "label": "Feb",
               "value": "810000"
            },
            {
               "label": "Mar",
               "value": "720000"
            },
            {
               "label": "Apr",
               "value": "550000"
            },
            {
               "label": "May",
               "value": "910000"
            },
            {
               "label": "Jun",
               "value": "510000"
            },
            {
               "label": "Jul",
               "value": "680000"
            },
            {
               "label": "Aug",
               "value": "620000"
            },
            {
               "label": "Sep",
               "value": "610000"
            },
            {
               "label": "Oct",
               "value": "490000"
            },
            {
               "label": "Nov",
               "value": "900000"
            },
            {
               "label": "Dec",
               "value": "730000"
            }
         ]
      }
    });
    revenueChart.render("chartContainer");
  })

</script>
</head>
<body>
    <div id="chartContainer">FusionCharts XT will load here!</div>
</body>
</html>
```

### Setting width and height in percent, during initialization

If you want to create a chart that automatically resizes when its parent container (another `<div>` or the entire windows) resizes, you can set the `width` and `height` of chart in percentage as under:

```html
<html>
<head>
<title>My first chart using FusionCharts Suite XT</title>
<script type="text/javascript" src="fusioncharts/js/fusioncharts.js"></script>
<script type="text/javascript" src="fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>
<script type="text/javascript">
 FusionCharts.ready(function(){
        var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer",
        "width": "100%",
        "height": "100%",
        "dataFormat": "json",
        "dataSource":{
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "theme": "fint"
         },
        "data": [
            {
               "label": "Jan",
               "value": "420000"
            },
            {
               "label": "Feb",
               "value": "810000"
            },
            {
               "label": "Mar",
               "value": "720000"
            },
            {
               "label": "Apr",
               "value": "550000"
            },
            {
               "label": "May",
               "value": "910000"
            },
            {
               "label": "Jun",
               "value": "510000"
            },
            {
               "label": "Jul",
               "value": "680000"
            },
            {
               "label": "Aug",
               "value": "620000"
            },
            {
               "label": "Sep",
               "value": "610000"
            },
            {
               "label": "Oct",
               "value": "490000"
            },
            {
               "label": "Nov",
               "value": "900000"
            },
            {
               "label": "Dec",
               "value": "730000"
            }
         ]
      }
    });
    revenueChart.render("chartContainer");
  })

</script>
</head>
<body>
<div id="parentContainer">
    <div id="chartContainer">FusionCharts XT will load here!</div>
</div>
</body>
</html>
```

You will just need to ensure that you set the parent container of the chart in such a way that its dimensions change dynamically when the browser resizes or due to other changes taking place in the page (like when an element is added or removed).


Whenever the container element resizes, the chart will also dynamically resize itself instantly.

<p class ="text-info">In certain cases, if the HTML container element itself has not acquired proper width or height (due to error in rendering by browser), the chart might look squeezed, or it may not render in the first place. If this happens, then you'll have to specify the chart's dimensions in pixels.</p>

### Changing width and height through `resizeTo()` method

Once you have initialized a chart, you can also change the dimensions dynamically, at client-side, through the JavaScript API `resizeTo()`.

To showcase this, we create the same chart which we created in the [Your first chart](/getting-started/building-your-first-chart) article. The data remains the same as well.

When the chart needs to be resized dynamically, we invoke the `resizeTo()` method specifying the new `width` and `height` of your chart (in pixels). You can call this method anytime after the chart has finished rendering.

Shown below is an example, along with the code :

{% embed_all getting-started-your-first-charts-changing-chart-size-example-1.js %}


### Dynamically changing chart type using the `chartType()` method

For the monthly revenue chart, Harry wants the ability to convert the Column Chart to Line chart, at the click of a button, so that he can compare the trend. The standard approach would have been to create an instance of line chart, pass it the same JSON data, and then render it.

However, FusionCharts Suite XT makes it simple for you to change chart types using the `chartType()` method. This method lets you convert  from one chart type to another (as long as they consume the same type of data e.g., single-series). This API is useful when you want your users to be able to select the right view for their data, without you having to re-build the entire chart.

Shown below is an example, along with the code :

{% embed_all getting-started-your-first-charts-changing-chart-type-example-2.js %}


You can also provide a new data source and format as an optional second parameter of `chartType(chartType, options)` method, to change the data along with the chart.

Now that you have learnt how to configure the size of various charts for putting in a single page, next we will look at how to centralize cosmetic properties of chart across the entire application.

