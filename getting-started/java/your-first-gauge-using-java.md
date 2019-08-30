---
title: Create a Gauge Using Java | FusionCharts
description: This article outlines the steps to be executed for creating your first gauge using the FusionCharts JSP wrapper.
heading: Create a Gauge Using Java
---

## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple server-side Java (**JSP**) wrapper for FusionCharts. The `FusionCharts server-side JSP` wrapper lets you easily add rich and interactive gauges to any JSP project. Using the wrapper, you can create gauges in your browsers, without writing any JavaScript code.

In this page, we'll see how to install FusionCharts and render a gauge using the `FusionCharts server-side JSP` wrapper.

## Installation

In this section, we will show you how to install FusionCharts Suite XT and the `FusionCharts JSP` wrapper and all the other dependencies on your system.

> The **FusionCharts JSP wrapper** requires **JAVA 6** or higher.

- Copy and paste the `fusioncharts.java` file from `integrations > java > fusioncharts-wrapper` in your project folder.

- Include the FusionCharts JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

- Include the FusionCharts theme file to apply the style to the widgets.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>
</div>
</div>

That completes the installation of FusionCharts and the `jsp-fusioncharts` component.

## Create Your First Gauge

Gauges are powerful tools that can showcase information using a radial or linear scale to display data.

To start with, we'll build a simple angular gauge showcasing Nordstrom's Customer Satisfaction Score as shown below.

> FusionCharts Suite has 95+ chart types for you to explore. Find the complete list of chart types [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The angular gauge is shown below:

{% embed_chart getting-started-your-first-widget.js %}

## Chart data

The thresholds for the above sample is shown in the table below:

| Range | Color | Hex Code |
| ----- | ----- | -------- ||
| 0-50 | Red | #F2726F |
| 50-75 | Yellow | #FFC533 |
| 75-100 | Green | #62B58F |

So, any score less than 50 is bad and is red. Any score between 50 and 75 is average and is yellow. Any score above 75 means good and are green.

FusionCharts accepts data in **JSON** format. Following code is the JSON representation of the above table with the required attributes to render the above chart.

```json
{
  // Chart Configuration
  "chart": {
    "caption": "Nordstrom's Customer Satisfaction Score for 2017",
    "lowerLimit": "0",
    "upperLimit": "100",
    "showValue": "1",
    "numberSuffix": "%",
    "theme": "fusion",
    "showToolTip": "0"
  },
  // Chart Data
  "colorRange": {
    "color": [
      {
        "minValue": "0",
        "maxValue": "50",
        "code": "#F2726F"
      },
      {
        "minValue": "50",
        "maxValue": "75",
        "code": "#FFC533"
      },
      {
        "minValue": "75",
        "maxValue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
}
```

In the above JSON:

- Create the `chart` object to define the elements of the gauge.

- Create the `colorRange` object to set the color associated with the specific range of values.

- Specify `minValue` and `maxValue` within the `color` array under the `colorRange` object.

- Set the `code` attribute to specify the hex color of respective ranges.

- Create the `dials` object to represent the customer satisfaction score.

- Create the `dial` object under `dials` object to set the value of customer satisfaction score.

The chart object and the respective arrays contain a set of key-value pairs known as `attributes`. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have the data in JSON format, let's see how to render the chart.

## Render the Chart

To render the chart, follow the steps below:

- Include the **FusionCharts JSP wrapper** in your project.

- Include the `fusioncharts` library.

- Include the FusionCharts theme file to apply the style to the charts.

- Store label-value pairs in an object.

- Set the JSON data as the data source for the chart.

- Store the chart configurations in an object.

- Convert the final chart configuration to JSON string.

- Create the chart instance and set the following:

  - Set the chart type as `angulargauge`. Each gauge is represented with a unique alias. For Angular Gauge, the alias is `angulargauge`. Find the complete list of gauges with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts#fusionwidgets-xt).

  - Set the gauge `id`.

  - Set the `width` and `height` (in pixels).

  - Set the container for the gauge.

  - Set the `dataFormat` as JSON.

  - Embed the `json` data as the value of the `dataSource`.

- Finally, use a container using `<div>` to render the gauge.

The consolidated code is shown below:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Insert title here</title>
        <script src="path/to/local/fusioncharts.js"></script>
        <script src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
    </head>
    <body>
        <div id="gauge"></div>
        <%
            //store chart config name-config value pair
            Map<String, String> chartConfig = new HashMap<String, String>();
            chartConfig.put("caption", "Nordstrom's Customer Satisfaction Score for 2017");
            chartConfig.put("lowerLimit", "0");
            chartConfig.put("upperLimit", "100");
            chartConfig.put("showValue", "1");
            chartConfig.put("numberSuffix", "%");
            chartConfig.put("theme", "fusion");
            chartConfig.put("showToolTip", "0");
            //store dial value config
            Map<String,String> dial = new HashMap<String,String>();
            dial.put("value","81");
            //store color range-color
            ArrayList<ColorRange> color = new ArrayList<ColorRange>();
            color.add(new ColorRange(0,50,"#F2726F"));
            color.add(new ColorRange(50,75,"#FFC533"));
            color.add(new ColorRange(75,100,"#62B58F"));

            //json data to use as chart data source
            StringBuilder jsonData = new StringBuilder();
            //build chart config object
            jsonData.append("{'chart':{");
            for(Map.Entry conf:chartConfig.entrySet())
            {
                jsonData.append("'" + conf.getKey()+"':'"+conf.getValue() + "',");
            }
            jsonData.replace(jsonData.length() - 1, jsonData.length() ,"},");

            StringBuilder range = new StringBuilder();
            //build colorRange object
            range.append("'colorRange':{");
            range.append("'color':[");
            for(int i =0; i< color.size(); i++)
            {
                range.append("{'minValue':'" + color.get(i).min + "','maxValue':'" + color.get(i).max + "','code':'" + color.get(i).colorCode +"'},");
            }
            range.replace(range.length() - 1, range.length(),"]},");
            //build dials object
            StringBuilder dials = new StringBuilder();
            dials.append("'dials':{");
            dials.append("'dial':[");
            for(Map.Entry dialCnf:dial.entrySet())
            {
                dials.append("{'" + dialCnf.getKey() + "':'" + dialCnf.getValue() +"'},");
            }
            dials.replace(dials.length() - 1, dials.length(),"]}");

            jsonData.append(range.toString());
            jsonData.append(dials.toString());
            jsonData.append("}");

            //Create gauge instance
            // gaugetype, gaugeID, width, height,container id, data format, data
            FusionCharts gauge = new FusionCharts(
                "angularGauge",
                "first_gauge",
                "400",
                "350",
                "gauge",
                "json",
                jsonData.toString()
            );
        %>
        <%= gauge.render() %>
    </body>
</html>

```

That's it! Your first gauge using the FusionCharts JSP wrapper is ready.

## Problem Rendering the Chart?

In case there is an error, and you are unable to see the chart, check for the following:

- If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click <<here>> to get in touch with our support team.

- If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded.

- If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
