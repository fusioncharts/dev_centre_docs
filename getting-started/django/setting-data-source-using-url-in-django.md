---
title: Setting Data Source Using URL | FusionCharts
description: Find out how to set data sources using URLs in Django with FusionCharts. Check out our guide and simplify the process. Enhance your data visualization game now.
heading: Setting Data Source Using URL
---

FusionCharts lets you pass the complete JSON/XML chart data as a static string to the `dataSource` attribute. Alternatively, you can also save the chart data in a `.json` or `.xml` file and then pass the relative URL of this file as value to the `dataSource` attribute. 

The only difference between the two methods is the value that is passed to the `dataFormat` attribute. For the first method, the `dataFormat` attribute takes `json` or `xml` as values, depending on the chart data. For the second method, the values will be `jsonurl` and `xmlurl`.

This article explains how you can set the chart data using the URL of the corresponding file using **FusionCharts Django wrapper**.

## Load data using JSON as URL

Let's build the same revenue chart which we built in the [first example](/getting-started/react/your-first-chart-using-react) using JSON, and use a .json file as the data source.

{% embed_chartData plain-js-setting-data-using-url-example-1.js json %}

The data for this chart is represented in the table below:

Country|No. of Oil Reserves|
-|-
Venezuela|290|
Saudi|260|
Canada|180|
Iran|140|
Russia|115|
UAE|100|
US|30|
China|30|

The JSON representation for the above table looks as shown below:

```javascript
{
    // Chart Configuration
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
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
}
```

Copy this into a file, name it `oilReserves.json`, and store it in the same folder as your page.

> If you are using multilingual characters in your JSON, make sure that you save the JSON data with UTF-8 encoding.

The full code of the above sample is given below:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file which has required functions to embed the charts in html page from ..fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# It is a example to show a Column 2D chart where data is passed as JSON string format.
# The `chart` method is defined to load chart data from an JSON string.

def chart(request):
    # Create an object for the column2d chart using the FusionCharts class constructor
    column2d = FusionCharts("column2d", "ex1" , "700", "400", "chart-1", "jsonurl","oilReserves.json")
  
    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers.
    return  render(request, 'index.html', {'output' : column2d.render(),'chartTitle': 'Chart using data from JSON URL'})
```

The HTML template used to render the chart is shown below:

```
<!DOCTYPE html>
<html>
<head>
    <title>FC-python wrapper</title>
    
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
</head>
</html>
```

The sample code provided above corresponds to the following tasks:

1. Import and resolve dependencies:

    * `render` from `django.shortcuts`, and `HttpResponse` from `django.http`

    * `FusionCharts` from `fusioncharts` 

2. Define a function `chart`, which takes `request` as an argument. Create a variable `column2d`, which is an instance of the `FusionCharts` class. As argument values for `FusionCharts`, pass the chart details and the configuration (JSON string): 

    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

3. To set the datasource using URL:
    * Set the value of the `dataFormat` to **jsonurl**.
    * Set the static URL to `dataSource` to render the above chart.

4. Return the output of the `render` function (defined in `FusionCharts`):

    * Pass the `request`, which is also the only argument accepted by the `chart` function you are defining.

    * Pass the relative path of the HTML template, where the chart will be rendered.

    * Pass a dictionary:

        * Set the `output` to `column2d.render()`.

        * Set the `chartTitle` to `Chart using data from JSON URL`.

> When rendering your charts locally (without a web server, even if on the localhost), you will not be able to load data from XML or JSON files present on your hard-drive. This is due to security restrictions enforced by most modern browsers.

## Load data using XML as URL

The XML representation for the above chart looks as shown below:

```
<chart caption='Countries With Most Oil Reserves [2017-18] ' subcaption='In MMbbl = One Million barrels ' xaxisname='Country ' yaxisname='Reserves (MMbbl) ' numberprefix='K ' theme='fusion '>
    <set label='Venezuela ' value='290 ' />
    <set label='Saudi ' value='260 ' />
    <set label='Canada ' value='180 ' />
    <set label='Iran ' value='140 ' />
    <set label='Russia ' value='115 ' />
    <set label='UAE ' value='100 ' />
    <set label='US ' value='30 ' />
    <set label='China ' value='30 ' />
</chart>
```
Copy this into a file called `oilReserves.xml` and store it in the same folder as your HTML page.

> If you are using multilingual characters in your XML, make sure you save the XML data with UTF-8 encoding.

The full code of the above sample is:

```
from django.shortcuts import render
from django.http import HttpResponse

# Include the `fusioncharts.py` file which has required functions to embed the charts in html page from ..fusioncharts import FusionCharts

# Loading Data from a Static JSON String
# It is a example to show a Column 2D chart where data is passed as JSON string format.
# The `chart` method is defined to load chart data from an JSON string.

def chart(request):
    # Create an object for the column2d chart using the FusionCharts class constructor
    column2d = FusionCharts("column2d", "ex1" , "700", "400", "chart-1", "xmlurl","oilReserves.xml")
  
    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers.  
    return  render(request, 'index.html', {'output' : column2d.render(), 'chartTitle': 'Chart using data from XML URL'})
```

The HTML template used to render the chart is shown below:

```
<!DOCTYPE html>
<html>
<head>
    <title>FC-python wrapper</title>
    
   <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
</head>
</html>
```

The sample code provided above corresponds to the following tasks:

1. Import and resolve dependencies:

    * `render` from `django.shortcuts`, and `HttpResponse` from `django.http`

    * `FusionCharts` from `fusioncharts` 

2. Define a function `chart`, which takes `request` as an argument. Create a variable `column2d`, which is an instance of the `FusionCharts` class. As argument values for `FusionCharts`, pass the chart details and the configuration (XML string): 

    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as XML.
    * Embed the json data as the value of `dataSource`.

3. To set the datasource using URL:
    * Set the value of the `dataFormat` to **xmlurl**.
    * Set the static URL to `dataSource` to render the above chart.

4. Return the output of the `render` function (defined in `FusionCharts`):

    * Pass the `request`, which is also the only argument accepted by the `chart` function you are defining.

    * Pass the relative path of the HTML template, where the chart will be rendered.

    * Pass a dictionary:

        * Set the `output` to `column2d.render()`.

        * Set the `chartTitle` to `Chart using data from XML URL`.
