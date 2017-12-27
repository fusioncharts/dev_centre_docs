---
permalink: getting-started/building-your-gauge.html
title: Your First Gauge | FusionCharts
description: This articles talks about the 5 simple steps to build a chart using FusionWidgets XT.
heading: Your First Gauge
chartPresent: true
---

In this section, we will create a gauge (speedometer or dial chart) for Harry so that he can quickly monitor the customer satisfaction score for Harry’s SuperMart. Gauges are powerful tools that can be used to showcase things like a speedometer or the fuel remaining in your car. They use a radial scale to display data and a dial is used to indicate the value.

An angular/meter/dial gauge chart is used to display a specific dataset utilizing an indicator that moves within a circular range to indicate whether the monitored data is within defined limits. Colors can be selected for the data range to suit your application such as green for satisfactory, yellow for caution and red for alarm.

Gauges, in FusionCharts Suite XT, are available as part of FusionWidget XT. To start with, we'll build a simple "Weekly Customer Satisfaction Index" gauge, which would look as under once complete.

{% embed_chart getting-started-your-first-charts-building-your-gauge-example-1.js %}

Harry defines the thresholds for his customer satisfaction score using the following range.

Range | Color | Hex Code
---|---|----
0-50| Red | #e44a00
50-75| Yellow | #f8bd19
75-100| Green | #6baa01

So any score <50 is bad, and gets a red color. Any score between 50 and 75 is average, and gets a yellow color. Scores above 75 mean good, and get a green color

#### Let's Begin

Let's now get to building the gauge. There are 5 simple steps to building a chart using FusionWidgets XT


1. [Installing FusionCharts Suite XT for your application](/getting-started/building-your-gauge?id=installing-fusioncharts-suite-xt-for-your-application).
2. [Converting your data to a JSON or XML format](/getting-started/building-your-gauge?id=converting-your-data-to-fusioncharts-suite-xt-jsonxml-format)
3. [Including the FusionCharts Suite XT JavaScript library in your HTML page](/getting-started/building-your-gauge?id=including-fusioncharts-suite-xt-library-in-your-page)
4. [Creating a container &lt;div&gt; for the chart](/getting-started/building-your-gauge?id=creating-a-container-for-your-gauge-in-the-web-page)
5. [Using the new `FusionCharts()` constructor to create the chart instance, and then calling the `render()` method](/getting-started/building-your-gauge?id=creating-an-instance-of-the-gauge)

### Installing FusionCharts Suite XT for your application

To see whether you have FusionCharts Suite XT installed for your web application, as detailed [here]{% linkTo tutorials/getting-started/installation.md %}, check for the following files in your `fusioncharts` folder:

  * `fusioncharts.charts.js`
  * `fusioncharts.js`
  * `fusioncharts.powercharts.js`
  * `fusioncharts.gantt.js`
  * `fusioncharts.treemap.js`
  * `fusioncharts.zoomscatter.js`
  * `fusioncharts.maps.js`
  * `fusioncharts.widgets.js`

### Converting your data to FusionCharts Suite XT JSON/XML format

Here is the JSON/XML representation of the data you will use to build this gauge

{% embed_data getting-started-your-first-charts-building-your-gauge-example-1.js %}

### Including FusionCharts Suite XT library in your page

To include the FusionCharts Suite XT JavaScript library in your HTML page, you use the `<script>` tag as under. Next, we include a theme file to style the chart. The theme is called `fint` (FusionCharts internal) and it is present in the `themes` folder of your download.

```html
<html>
    <head>
    <title>My first gauge using FusionWidgets XT</title>
    <script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fint.js"></script>
    </head>
</html>
```
It informs the browser where to load the FusionCharts Suite XT library from. We recommend using a relative path to the library hosted on the same domain as your web application.

### Creating a container for your gauge in the web page

Next, you will need to create a container for your chart in the form of a `<div>` element, as under.

```html
<body>
  <div id="chart-container">An angular gauge will load here!</div>
</body>
```

This will later allow us to reference the `chart-container` id and render a gauge in this container.


### Creating an instance of the gauge

The final step is to create an instance of an angular gauge, initialize it with the correct `width`, `height` and then set the JSON data source.

```javascript
<script type="text/javascript">
FusionCharts.ready(function () {
    var csatGauge = new FusionCharts({
        "type": "angulargauge",
        "renderAt": "chart-container",
        "width": "400",
        "height": "250",
        "dataFormat": "json",
        "dataSource":{
               "chart": {
                  "caption": "Customer Satisfaction Score",
                  "subcaption": "Last week",
                  "lowerLimit": "0",
                  "upperLimit": "100",
                  "theme": "fint"
               },
               "colorRange": {
                  "color": [
                     {
                        "minValue": "0",
                        "maxValue": "50",
                        "code": "#e44a00"
                     },
                     {
                        "minValue": "50",
                        "maxValue": "75",
                        "code": "#f8bd19"
                     },
                     {
                        "minValue": "75",
                        "maxValue": "100",
                        "code": "#6baa01"
                     }
                  ]
               },
               "dials": {
                  "dial": [
                     {
                        "value": "67"
                     }
                  ]
               }
            }
      });

    csatGauge.render();
});
</script>
```

In the above code:

  * We created an instance of the `FusionCharts` object in the `csatGauge` variable. Here the instance we created was of the `angularGauge` chart type. Each chart or gauge in your HTML page needs to have a separate variable. The initialization code is wrapped within the `FusionCharts.ready` method. This safeguards your chart instantiation code from being called before the FusionCharts Suite XT library is loaded and is ready to be used on the page.
  *  Next, we specified the width and height of the chart (in pixels) using the `width` and `height` property of the constructor.
  *  To specify the data format as JSON, we set the `dataFormat` parameter to json.
  *  The actual JSON data is embedded as string as value of the `dataSource` parameter. The `chart` object contains a list of key-value pairs that let you configure the functional and cosmetic attributes of your gauge. The `colorrange` object lets you define different numeric ranges, each associated with a color, to indicate progressive thresholds. The `dial` element specifies the properties and value for the dial.
  * If you noted, we have used the `theme` attribute in the chart's JSON data and provided `fint` (FusionCharts Suite XT Internal theme) as the value for it. Themes let you centralize your cosmetic and functional properties across various charts in your web application. FusionCharts Suite XT is shipped with three default themes - `ocean`, `zune` and `carbon`. You can also create your own themes, as detailed in a later section.
  *  Call the `render` method to draw the gauge in chart-container `<div>` element.

Thats it! You just created your first interactive JavaScript gauge using FusionCharts Suite XT.

The full HTML code for the example looks as under:


```html
<html>
<head>
<title>My first gauge using FusionWidgets XT</title>
<script type="text/javascript" src="fusioncharts/js/fusioncharts.js"></script>
<script type="text/javascript" src="fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>
<script type="text/javascript">
FusionCharts.ready(function () {
    var csatGauge = new FusionCharts({
        "type": "angulargauge",
        "renderAt": "chart-container",
        "width": "400",
        "height": "250",
        "dataFormat": "json",
            "dataSource": {
                   "chart": {
                      "caption": "Customer Satisfaction Score",
                      "subcaption": "Last week",
                      "lowerLimit": "0",
                      "upperLimit": "100",
                      "theme": "fint"
                   },
                   "colorRange": {
                      "color": [
                         {
                            "minValue": "0",
                            "maxValue": "50",
                            "code": "#e44a00"
                         },
                         {
                            "minValue": "50",
                            "maxValue": "75",
                            "code": "#f8bd19"
                         },
                         {
                            "minValue": "75",
                            "maxValue": "100",
                            "code": "#6baa01"
                         }
                      ]
                   },
                   "dials": {
                      "dial": [
                         {
                            "value": "67"
                         }
                      ]
                   }
            }
      });

    csatGauge.render();
});
</script>
</head>
<body>
  <div id="chart-container">An angular guage will load here!</div>
</body>
</html>
```


When you now view the page in a browser, you should see an interactive angular gauge, showing weekly customer satisfaction score for Harry's SuperMart.

### Was there a problem rendering the gauge?

In case something went wrong and you are unable to see the gauge, check for the following:

 * If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.
 *  If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct, and whether the file exists in that location.

 * If you get a __Loading Data__ or __Error in loading data__ message, check whether your JSON data structure is correct, and there are no conflicts related to quotation marks in your code.

Click here for more information on [Troubleshooting]{% linkTo tutorials/troubleshooting/debugger.md %}.

Now that Harry can monitor his weekly customer satisfaction score using this gauge, let's build a map to plot his sales across various states in US.

