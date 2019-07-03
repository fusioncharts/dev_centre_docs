---
title: Drill-down Charts | FusionCharts
description: Using FusionCharts Suite XT, you can create endless levels of drilldown. It has been kept very generic to accommodate all types of requirements.
heading: Drill-down
---

You can use FusionCharts Suite XT to create drill down  charts. All charts (except for the Zoom line chart) support the drill down  interactivity for data elements - that is, for each chart type, the data plots in a chart (columns in column charts, pie slices in pie charts, etc.) can act as hot-spots. You can create endless levels of drill down , based on your requirements. 

You can include two types of links for data plots in a drill down  chart:

## Simple links

Drill-down to open simple URLs or call JavaScript functions (defined within the same page), which can open in the same page, a new page, or a specified frame/popup window. You can also use these links to render the entire chart as a hotspot.In the section below, you can see how to define simple links that open in different target locations.

### In the same page

Use the `link` attribute to define a simple link for a data plot. It belongs to the `data` object and accepts the URL of the page that will open when the user clicks on a data plot. Specify it for each clickable data plot.

Refer to the code below:

```json
{
    "chart": {
       ...
    },
    "data": [
        {
            "label": "Apple",
            "value": "810000",
            "link": "http://fusioncharts.com"
        },
        {
            "label": "Cranberry",
            "value": "620000",
            "link": "http://fusioncharts.com"
        },
        {
            "label": "Grapes",
            "value": "350000",
            "link": "http://fusioncharts.com"
        }
    ]
}
```

The chart when configured using above feature, looks like as shown below:

{% embed_chart chart-configurations-drill down -example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/L7vLc9n2/) to edit the above chart.

> If you have special characters (**?**, **&**, etc.), in your link, make sure that your link is in the URL Encoded format. Every time you click a data plot, FusionCharts Suite XT decodes the link and invokes the URL. All server-side scripting languages provide a generic function to URL Encode any string - for example, the `server.URLEncode(strURL)` method in ASP and ASP.NET.

### In a new page

Precede the link you pass as the value of the `link` attribute with `n-`, to open the link in a new tab of the browser every time you click on the hotspot. 

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [
        {
            "label": "Apple",
            "value": "810000",
            "link": "n-http://fusioncharts.com"
        },
        {
            "label": "Cranberry",
            "value": "620000",
            "link": "n-http://fusioncharts.com"
        },
        {
            "label": "Grapes",
            "value": "350000",
            "link": "n-http://fusioncharts.com"
        }
    ]
}
```

The chart when configured using above feature, looks like as shown below:

{% embed_chart chart-configurations-drill down -example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/hs7rz3k1/) to edit the above chart.

Note that, internally, the chart decodes the URL that you set as the link. Before invoking the link, it again encodes the URL. If you pass multilingual characters via a URL or do not want this decode-encode mechanism to be handled by the chart, you can use the `unescapeLinks` attribute as shown in the code snippet below:

```json
{
    "chart": {
        "unescapeLinks": "0"
    }
}

```

### In a pop-up window

When defining the `link` attribute, precede the target URL with `P-` to open the link in a popup window. Also, use the following attributes to customize the popup window:

* Specify the height of the pop-up window, in pixels, using the `height` attribute.

* Specify the width of the pop-up window, in pixels, using the `width` attribute.

* Specify whether the user can manually resize the popup window by dragging its edges/ corners, by setting the `resizable` attribute to `yes`. 

* Specify whether scrollbars will be shown in the pop-up window, by setting the `scrollbars` attribute to `yes`.

* Specify whether a menu bar will be shown at the top of the pop-up window, by setting the `menubar` attribute to `yes`.

* Specify whether a toolbar will be shown in the pop-up window, by setting the `toolbar` attribute to `yes`.

* Specify whether the address bar will be shown in the pop-up window, by setting the `location` attribute to `yes`.

* Specify whether any additional toolbar (for example, the Links bar in IE) will be shown in the pop-up window, by setting the `directories` attribute to `yes`.

* Specify whether the status bar will be shown in the pop-up window, by setting the `status` attribute to `yes`.

* Specify the distance, in pixels, of the pop-up window from the left edge of the screen, using the `left` attribute. 

* Specify the distance, in pixels, of the pop-up window from the top edge of the screen, using the `top` attribute.

* Specify whether the pop-up window will be opened in fullscreen mode, by setting the `fullscreen` attribute to `yes`.

> Note that these attributes only work in the Internet Explorer browser. If you use the Netscape Navigator browser, replace the attributes with the ones given below:

* Replace `left` with `screenX`.

* Replace `top` with `screenY`.

Follow the steps given below:

* Specify the `detailsWin` as the name of the new pop-up window in which the target URL will be rendered.

* Configure the functional attributes using its cosmetic and functional attributes.

* Specify the URL of the encoded link. Use a hyphen as the separator between the attributes and the link.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "data": [{
        "label": "Apple",
        "value": "810000",
        "link": "P-detailsWin,width=400,height=300,toolbar=no,scrollbars=yes, resizable=no-http://fusioncharts.com"
    },
    {
        "label": "Cranberry",
        "value": "620000",
        "link": "P-detailsWin,width=400,height=300,toolbar=no,scrollbars=yes, resizable=no-http://www.fusioncharts.com/dev/"
    },
    {
        "label": "Grapes",
        "value": "350000",
        "link": "P-detailsWin,width=400,height=300,toolbar=no,scrollbars=yes, resizable=no-http://blog.fusioncharts.com/"
    }]
}
```

The chart when configured using above feature, looks like as shown below:

{% embed_chart chart-configurations-drill down -example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/28nqcyu7/) to edit the above chart.

### In a frame

When defining the `link` attribute, precede the target URL with `F-` to open the link in a frame. You can open links in specified frames on the web page, which is useful when you need to create simulated drill down  boards and dashboards.

Refer to the code below:

```json
{
    "chart": {
       ...
    },
    "data": [{
        "label": "Apple",
        "value": "810000",
        "link": "F-drill-http://fusioncharts.com"
    },
    {
        "label": "Cranberry",
        "value": "620000",
        "link": "F-drill-http://www.fusioncharts.com/explore/charts/"
    },
    {
        "label": "Grapes",
        "value": "350000",
        "link": "F-drill-http://blog.fusioncharts.com/"
    }]
}
```

The chart when configured using above feature, looks like as shown below:

{% embed_chart chart-configurations-drill down -example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/28ru7erc/) to edit the above chart.

> You can provide `_parent` as the name of the frame. The URL will get loaded in the frame or browser window which is the parent of the current window. Typically, the main browser space becomes the parent frame that contains all the other frames. Hence, if you wish to remove all frames and load the URL freshly in the same location, you can use `_parent` as the name of the frame.

### Set the chart as a hotspot

Set an entire chart as a hotspot using the `clickURL` attribute, which accepts a target URL as value. You can display a thumbnail image of a chart as the hotspot, which will open the maximized version of the chart when clicked.

You can configure the target URL to:

* Open in the same window

* Open in a new window

* Open in another frame

* Open in a new popup window

* Invoke existing JavaScript functions

Refer to the code below, which sets the chart as a hotspot that, when clicked, opens the homepage of FusionCharts website in a new tab:

```json
{
    "chart": {
        ...
        "clickURL": "n-http://www.fusioncharts.com"
    }
}
```

The chart when configured using above feature, looks like as shown below:

{% embed_chart chart-configurations-drill down -example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/3q9qzo8h/) to edit the above chart.

> Note that if you set the entire chart as hotspot, the other links on the chart (individual links for data plots) will not work.

### Create a thumbnail of the chart

Create a thumbnail of a chart, which, when clicked, will open the maximized chart in the same window:

```
"chart": {
       ...
        "clickURL": "DetailedChart.html"
    }
}
```

In the above chart, when you click the hotspot, the maximized version of the chart will open in the same window.

{% embed_chart chart-configurations-drill down -example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/pj9u9ym2/) to edit the above chart.

## Chart links (Linked Charts)

Drill down to detailed **linked charts** that show data at different levels of detail.

### Create and configure linked charts

Using linked charts, you can create unlimited levels of drill down  charts with a single data source. The parent chart contains all chart data—for the parent chart as well as all levels of descendant (child, grandchild) charts. The links to all descendant charts are also defined in the parent chart.

You can drill down  into the descendant charts by clicking the data plot items of the parent chart. The descendant charts can either replace the parent chart, with an option to drill-up, or they can open in new windows or frames.

Create linked charts by following the steps given below:

1. Create the JSON/XML data for the parent chart. This is called the parent data source.

2. Append the data string or the data URL for the descendant charts within the parent data source. If you append the data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

Once you implement the steps above, the FusionCharts JavaScript class takes care of the rest.

### Features of the FusionCharts JavaScript Class

* It automatically creates and shows a detailed descendant chart, when you click on the corresponding data plot item link in the parent chart.

* It clones all chart configuration settings from the parent chart to create the descendant charts.

* It accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods.html#configureLink) function.

* It uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed.

* It supports drill down  to an unlimited number of levels.

As an example here, we will consider a simple scenario of a parent chart with the single level of drill down .

The parent chart is a column 2D chart that shows the yearly sales of the top three juice flavors, for the last year. When you click on the data plot for a particular flavor of juice, it drills-down to show a descendant column 2D chart that shows the quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chart chart-configurations-drill down -example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/wvpzfz5g/) to edit the above chart.

### Create linked charts using Data URL method

Specify the `link` attribute (which belongs to the data object) for each data plot, to link charts using the data URL method. Every time you click on a data plot, the corresponding linked chart will be rendered. 

The syntax for the link attribute is:

```json
{
    "chart": {
        "link": "newchart-dataformat-datasource"        
    }
}
```

The above chart, when rendered, looks like the following:

{% embed_chart chart-configurations-drill down -example-7.js %}

Click [here](http://jsfiddle.net/fusioncharts/v76phqq5/) to edit the above chart.

Here, newchart is constant.For the data URL method, assign `jsonurl` (if the data for the descendant chart is in a .json file) or `xmlurl` (if the data for the descendant chart is in a .xml file) as the value of `dataformat`. Specify the URL of the .json/.xml file as the value of the `datasource` attribute.

The data structure needed to render the parent chart given above using the data URL method is given below:

```json
{
    "chart": {
        "caption": "Top 3 Juice Flavors",
        "subcaption": "Last year",
        "xaxisname": "Flavor",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fusion",
        "plottooltext": "$label, $dataValue,  $percentValue"
    },
    "data": [{
        "label": "Apple",
        "value": "810000",
        "link": "newchart-jsonurl-apple.json"
    }, {
        "label": "Cranberry",
        "value": "620000",
        "link": "newchart-jsonurl-cranberry.json"
    }, {
        "label": "Grapes",
        "value": "350000",
        "link": "newchart-jsonurl-grapes.json"
    }]
}
```
From the data shown above, you can understand that when the user clicks the first data plot, the chart sources the data to render the subsequent linked chart from the **apple.json** file. Similarly, when you click on the other two data plots, the chart renders the respective linked charts from the data are given in the cranberry.json and grapes.json files.

The **apple.json** file contains the data to plot a column 2D chart showing the quarterly sales figures of apple juice for the last year. The data structure for the **apple.json** file is given below:

```json
{
    "chart": {
        "caption": "Apple Juice - Quarterly Sales",
        "subcaption": "Last year",
        "numberprefix": "$",
        "theme": "fusion",
        "plottooltext": "$label, $dataValue,  $percentValue"
    },
    "data": [{
        "label": "Q1",
        "value": "157000"
    }, {
        "label": "Q2",
        "value": "172000"
    }, {
        "label": "Q3",
        "value": "206000"
    }, {
        "label": "Q4",
        "value": "275000"
    }]
}
```

Similarly, the cranberry.json and the grapes.json files contain the data to plot column 2D charts showing the quarterly sales figures for the cranberry juice and grape juice, respectively.

If you are using XML data for the chart, refer to the data structure for the parent chart given below:

```html
<chart caption="Top 3 Juice Flavors" subcaption="Last year" xaxisname="Flavor" yaxisname="Amount (In USD)" numberprefix="$" theme="fusion" plottooltext="$label, $dataValue,  $percentValue" animation="0">

<set label="Apple" value="810000" link="newchart-xmlurl-apple.xml" />
<set label="Cranberry" value="620000" link="newchart-xmlurl-cranberry.xml" />
<set label="Grapes" value="350000" link="newchart-xmlurl-grapes.xml" />
</chart>
```

Similarly, the data structure for the **apple.xml** file is given below:

```html
<chart caption="Apple Juice - Quarterly Sales" subcaption="Last year" numberprefix="$" theme="fusion" plottooltext="$label, $dataValue,  $percentValue">

<set label="Q1" value="157000" />
<set label="Q2" value="172000" />
<set label="Q3" value="206000" />
<set label="Q4" value="275000" />
</chart>
```

Likewise, you can create the **cranberry.xml** and the **grapes.xml** files to create linked charts.

### Create linked charts using data string method

For the data string method, `dataformat` accepts either `json` (if the JSON data for the descendant chart is embedded inside the parent chart data) or `xml` (if the XML data for the descendant chart is embedded inside parent chart data) as values. `datasource` takes the value of the unique identifier that refers to the data embedded inside the `linkeddata` array (which in turn contains the JSON data for descendant charts) or the `<linkeddata>` node (which contains the XML data for the descendant charts) in the parent data source.

Refer to the code below:

```json
{
    "chart": {
        "caption": "Top 3 Juice Flavors",
        "subcaption": "Last year",
        "xaxisName": "Flavor",
        "yaxisName": "Amount (In USD)",
        "numberPrefix": "$",
        "theme": "fusion",
        "rotateValues": "0"
    },
    "data": [{
        "label": "Apple",
        "value": "810000",
        "link": "newchart-xml-apple"
    }, {
        "label": "Cranberry",
        "value": "620000",
        "link": "newchart-xml-cranberry"
    }, {
        "label": "Grapes",
        "value": "350000",
        "link": "newchart-xml-grapes"
    }],
    "linkeddata": [{
        "id": "apple",
        "linkedchart": {
            "chart": {
                "caption": "Apple Juice - Quarterly Sales",
                "subcaption": "Last year",
                "xaxisname": "Quarter",
                "yaxisname": "Amount (In USD)",
                "numberprefix": "$",
                "theme": "fusion",
                "rotateValues": "0"
            },
            "data": [{
                "label": "Q1",
                "value": "157000"
            },
            {
                "label": "Q2",
                "value": "172000"
            },
            {
                "label": "Q3",
                "value": "206000"
            },
            {
                "label": "Q4",
                "value": "275000",
                "rotateValues": "0"
            }]
        }
    }, {
        "id": "cranberry",
        "linkedchart": {
            "chart": {
                "caption": "Cranberry Juice - Quarterly Sales",
                "subcaption": "Last year",
                "xaxisname": "Quarter",
                "yaxisname": "Amount (In USD)",
                "numberprefix": "$",
                "theme": "fusion",
                "rotateValues": "0"
            },
            "data": [{
                "label": "Q1",
                "value": "102000"
            },
            {
                "label": "Q2",
                "value": "142000"
            },
            {
                "label": "Q3",
                "value": "187000"
            },
            {
                "label": "Q4",
                "value": "189000"
            }]
        }
    }, {
        "id": "grapes",
        "linkedchart": {
            "chart": {
                "caption": "Grape Juice - Quarterly Sales",
                "subcaption": "Last year",
                "xaxisname": "Quarter",
                "yaxisname": "Amount (In USD)",
                "numberprefix": "$",
                "theme": "fusion",
                "rotateValues": "0"
            },
            "data": [{
                "label": "Q1",
                "value": "45000"
            },
            {
                "label": "Q2",
                "value": "72000"
            },
            {
                "label": "Q3",
                "value": "95000"
            },
            {
                "label": "Q4",
                "value": "108000"
            }]
        }
    }]
}
```

### Configure events for linked charts

The FusionCharts JavaScript class includes events raised when you open or close linked items, as detailed below:

* `beforeLinkedItemOpen` is fired every time a linked item is about to open, right after you click the link in the parent chart.

* `linkedItemOpened` is fired every time a linked (descendant) chart is rendered.

* `beforeLinkedItemClosed` is fired every time the linked chart is closed and the parent chart is rendered. This happens whenever you navigate back to the parent chart by clicking on the Back button at the top right corner of the linked chart.

* `linkedItemClosed` is fired every time a linked chart is closed, and before the parent chart is reopened.

A chart utilizing these events is given below:

{% embed_chart chart-configurations-drill down -example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/sknyboh5/) to edit the above chart.

Configure the `addEventListener()` method for the parent chart to listen to these events. The data structure that shows how to implement these events is given below:

```json
{
    "chart": {
        "caption": "Top 3 Juice Flavors",
        "subcaption": "Last year",
        "xaxisname": "Flavor",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fusion",
        "rotateValues": "0"
    },
    "data": [
        {
            "label": "Apple",
            "value": "810000",
            "link": "newchart-xml-apple"
        },
        {
            "label": "Cranberry",
            "value": "620000",
            "link": "newchart-xml-cranberry"
        },
        {
            "label": "Grapes",
            "value": "350000",
            "link": "newchart-xml-grapes"
        }
    ],
    "linkeddata": [
        {
            "id": "apple",
            "linkedchart": {
                "chart": {
                    "caption": "Apple Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "rotateValues": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [
                    {
                        "label": "Q1",
                        "value": "157000"
                    },
                    {
                        "label": "Q2",
                        "value": "172000"
                    },
                    {
                        "label": "Q3",
                        "value": "206000"
                    },
                    {
                        "label": "Q4",
                        "value": "275000"
                    }
                ]
            }
        },
        {
            "id": "cranberry",
            "linkedchart": {
                "chart": {
                    "caption": "Cranberry Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [
                    {
                        "label": "Q1",
                        "value": "102000"
                    },
                    {
                        "label": "Q2",
                        "value": "142000"
                    },
                    {
                        "label": "Q3",
                        "value": "187000"
                    },
                    {
                        "label": "Q4",
                        "value": "189000"
                    }
                ]
            }
        },
        {
            "id": "grapes",
            "linkedchart": {
                "chart": {
                    "caption": "Grapes Juice - Quarterly Sales",
                    "subcaption": "Last year",
                    "numberprefix": "$",
                    "theme": "fusion",
                    "rotateValues": "0",
                    "plottooltext": "$label, $dataValue,  $percentValue"
                },
                "data": [
                    {
                        "label": "Q1",
                        "value": "45000"
                    },
                    {
                        "label": "Q2",
                        "value": "72000"
                    },
                    {
                        "label": "Q3",
                        "value": "95000"
                    },
                    {
                        "label": "Q4"
                        "value": "108000"
                    }
                ]
            }
        }
    ]
}
```

Use the events object (under the dataSource object) to configure the events raised for a chart.

> The FusionCharts.addEventListener() static function can be used to trap events globally—for all charts. For detailed descriptions of the LinkedChart events, refer to the [FusionCharts API Reference](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-events.html).

### Use JavaScript functions as links

Instead of using simple links in drill down  charts, you can also use JavaScript functions, present in the same page, which you can invoke when a data plot on the chart is clicked. FusionCharts provides two ways for setting JavaScript functions as links, as detailed below:

The `j-` prefix

To use this method, place the JavaScript function name after the `j-` notation. The function is evaluated as a standard JavaScript function. You can pass a single parameter of type string to the function by placing a ‒ (dash) after the function name and the parameter value. Using this method, you can only pass one JavaScript function as a link.

The `JavaScript:` prefix

To use this, place the function name and the parameter after the `JavaScript:` notation. To call a function in `JavaScript:` notation, make the function available in the global scope and ensure that the function name is the same as that of the string you provide after the `JavaScript:` prefix.

Note:

* Due to some security policies, you can no longer use `eval`, as well as some of the features of `Javascript:` prefix.

* You cannot pass special characters like **(**, **)**, **-**, **%** as parameters when you call a function.

* You cannot define a function, or pass multiple functions, after the `Javascript:` prefix.

Both prefixes are discussed in detail below:

**The j- Prefix**

Take a look at an example of a drill down  chart and its corresponding code, used to link charts using the **j- prefix**, given below. For this example, a JavaScript function, `showAlert`, is defined to show the label and value of the data plot you click. For example, when you click the data plot labeled **Apple**, the `showAlert` function is invoked, and an alert box is displayed with the data value and the label.

The chart looks like as shown below:

{% embed_chart chart-configurations-drill down -example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/cgLLusuL/) to edit the above chart.

Following is the HTML code:

```html
<div id="chart-container">FusionCharts will render here</div>
<!-- Drill-down: Simple Link Open in Same Page. Attribute: # link -->
<script language="JavaScript" src="fusioncharts/js/fusioncharts.js"></script>
<script language="JavaScript">
    <!--
    function showAlert(myVar) {
        window.alert(myVar);
    }
    -->
</script>
```

In the code snippet given above, `showAlert` is a custom function that is present in the HTML page that embeds the chart. **Apple, $810K** is the parameter value passed to the function. As mentioned before, you can only pass one one string parameter to the JavaScript function using the **j- prefix**.

Now, when you click the data plot labeled **Apple**, the string **Apple, $810K** is passed as a parameter to the `showAlert` function.

For this example, the parameter string contains the data label and data value only for demonstration purposes. For actual implementations, you can pass identifier numbers or strings of data. When a user clicks the link, the identifiers are sent back to the JavaScript function for further actions (for example, loading detailed data for that identifier using AJAX, or any such tasks—the possibilities are endless).

### The JavaScript: Prefix

An example of a drill down  chart and its corresponding code, that implements linking using the JavaScript: prefix, is given below:

{% embed_chart chart-configurations-drill down -example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/z7vnp56d/) to edit the above chart.

Similar to the above example, the showAlert function is defined to show an alert message that contains the clicked data plot label and value.

The code for the above example is given below:

**HTML code:**

```html
<div id="chart-container">FusionCharts will render here</div>
<!-- Drill-down: Simple Link Open in Same Page. Attribute: # link -->
<script language="JavaScript" src="fusioncharts/js/fusioncharts.js"></script>
<script language="JavaScript">
    <!--
    function showAlert(myVar) {
        window.alert(myVar);
    }
    -->
</script>
```

**Apple** and **$810K** are passed as two parameters to the showAlert function— **Apple** is passed as a string parameter and **$810K** is passed as a numeric parameter.

Now, when the data plot labeled **Apple** is clicked, the showAlert function is invoked and the two parameters are passed to it.