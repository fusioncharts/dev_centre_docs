---
title: Your First Chart | FusionCharts
description: This article talks about creating charts which can be made using any real life data. The article also contains steps to download FusionCharts.
heading: Your First Chart
breadcrumb: [["Home", "/"], ["Your First Chart"]]
---

Let's build our first chart using FusionCharts Suite XT! Throughout this documentation, we will create charts for a fictional supermarket, Harry's SuperMart, so that Harry, the owner, can make more sense of the data captured at various touchpoints in his supermarket. This data, when processed and presented effectively, can give Harry actionable insights for effective decision-making.

Let's start with a simple example of "Monthly revenue" chart, which we will plot in a Column 2D chart as shown below: 

{% embed_chart getting-started-your-first-chart-example-1.js %}

The data for this chart is represented in a table as under:

Month|Revenue|
-|-
January|$420,000|
February|$810,000|
March|$720,000|
April|$550,000|
May|$910,000|
June|$510,000|
July|$680,000|
August|$620,000|
September|$610,000|
October|$490,000|
November|$900,000|
December|$730,000|

Let's now get to building the chart.

## Convert tabular data into JSON/XML format

FusionCharts Suite XT JavaScript library only accepts data in JSON or XML format. You can provide data as JSON/XML strings, or use data stored in physical files on your servers. In case your data is stored in database or other data sources, you can write server-side scripts to read that data, iterate through it, and use strings to generate the XML or JSON data.

For example, when you convert the data in the table above to JSON format, it will look as under:

```
{
    "chart": {
        "caption": "Monthly revenue for last year",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Month",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "theme": "fint"
    },
    "data": [{
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
```

## Include FusionCharts Suite XT library

To include the FusionCharts Suite XT JavaScript library in your HTML page, use the `<script>` tag. Next, include a theme file to style the chart. The theme is called `fint` (FusionCharts internal) and it is present in the `themes` folder of your download. Refer to the code below:

```
<html>
<head>
  <title>My first chart using FusionCharts Suite XT</title>
  <script type="text/javascript" src="fusioncharts/js/fusioncharts.js"></script>
  <script type="text/javascript" src="fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>
</head>
</html>
```

## Create a container for the chart

Each chart in the page needs a container to reside in. A `<div>` element works well as a container for the chart, as defined below:

```
<body>
  <div id="chartContainer">FusionCharts XT will load here!</div>
</body>

```

Specify a unique ID for the `<div>` container within the web page. The unique ID is used in the chart initialization code to refer to the container.

## Create an instance of the chart

In the final step, create an instance of the chart type as `column2d`, set the `width` and `height` (in pixels or %), and finally specify the JSON data for the chart, either as string or URL.

The following code does the trick:

```
FusionCharts.ready(function() {
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
            "data": [{
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

    revenueChart.render();
})

```

In the above code:

* We have created an instance of the `FusionCharts` object in the `revenueChart` variable. Each chart or gauge in your HTML page needs to have a separate variable. The initialization code is wrapped within the `FusionCharts.ready` method. This safeguards your chart instantiation code from being called before the FusionCharts Suite XT library is loaded and is ready for use on the page.

* Next, we have created an instance of the `column2d` chart. Each chart type in FusionCharts Suite XT has a unique alias, which you can use to create an instance of that chart. In this case, we are creating an instance of a Column 2D chart with dimensions of 500x300 pixels, and providing JSON data as a string.

* To specify the data format as JSON, we have set the `dataFormat` parameter to `json`. To provide data in XML format, the value of this attribute will  be `xml` which we will discuss in [Using XML as Data Format](https://www.fusioncharts.com/dev/getting-started/using-xml-as-data-format.html) page.

* The actual JSON data is embedded as string value of the `dataSource` parameter. 

* The `chart` object contains a list of key-value pairs that you can use to configure the functional and cosmetic attributes of your chart. For example, you can set the chart caption using `"caption": "Harry's SuperMart"`. Each row of the tabular data is present within the `data` array, with name of month with key as `label`, and revenue with key as `value`.

* Please note, we have used the `theme` attribute in the chart's JSON data and provided `fint` (FusionCharts Suite XT Internal theme) as the value for it. Using themes, you can centralize your cosmetic and functional properties across various charts in your web application. FusionCharts Suite XT is shipped with three default themes - `ocean`, `zune`, and `carbon`. You can also create your own themes, as detailed in a later section.

* Call the `render` method to draw the chart in the `chartContainer` defined using the `<div>` element.

That's it! You have just created your first interactive JavaScript chart using FusionCharts Suite XT.

The full HTML code for the example looks as under:

```
<html>

<head>
    <title>My first chart using FusionCharts Suite XT</title>
    <script type="text/javascript" src="fusioncharts/js/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>
    <script type="text/javascript">
        FusionCharts.ready(function() {
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
                    "data": [{
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
            revenueChart.render();
        })
    </script>
</head>

<body>
    <div id="chartContainer">FusionCharts XT will load here!</div>
</body>

</html>

```

Now view the page in a browser, you should see an interactive Column 2D chart, showing monthly revenues for Harry's SuperMart similar to the live chart at the top of this page. Try rolling over the columns to see the tooltips, or refresh the page to see the chart animating again.

The best part about this chart is that it provides the same experience across mobile devices like iPhones, iPads, Android devices, and older browsers like IE6, including all the interactivity. FusionCharts Suite XT does all the hard work for you, so that you can focus on building your application!

## Problem rendering the chart?

In case something went wrong and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct, and whether the file exists in that location.

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.

Click here for more information on [Troubleshooting](https://www.fusioncharts.com/dev/troubleshooting/debugger.html).

Now that Harry can monitor his monthly revenues using this interactive chart, let's build a gauge to show him the customer satisfaction score in the next section.