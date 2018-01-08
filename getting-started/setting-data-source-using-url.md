---
permalink: getting-started/setting-data-source-using-url.html
title: Setting Data Source using URL | FusionCharts
description: FusionCharts lets you pass the complete JSON/XML chart data using a JSON file or a URL without losing any functionality
heading: Setting Data Source using URL
chartPresent: true
---

FusionCharts lets you pass the complete JSON/XML chart data as a static string to the dataSource attribute. Another method to do this, without losing any functionality, is to save the chart data in a .json/.xml file and then pass the relative URL of this file as value to the dataSource attribute.

In this section, you will be shown how to:

* <a href="/getting-started/setting-data-source-using-url#loading-data-using-the-json-url" class="smoth-scroll">Load data using the JSON URL</a>
* <a href="/getting-started/setting-data-source-using-url#loading-data-using-the-xml-url" class="smoth-scroll">Load data using the XML URL</a>

The only difference between the two methods is the value that will be passed to the `dataFormat` attribute. For the first method, the dataFormat attribute takes json or xml as values, depending on the chart data. For the second method, the values will be jsonurl and xmlurl. 

This article explains how you can set the chart data using the URL of the corresponding file.

## Loading Data using the JSON URL

Let us build the same revenue chart, which we built in the [first example](/getting-started/building-your-first-chart) using JSON, and use a .json file as the data source in this example.

{% embed_chart getting-started-your-first-charts-building-your-chart-example1.js %}

The data for this chart is shown in the table below:

Month | Revenue
---|---
January| $420,000
February| $810,000
March| $720,000
April| $550,000
May| $910,000
June| $510,000
July| $680,000
August| $620,000
September| $610,000
October| $490,000
November| $900,000
December| $730,000

The JSON representation for the above table looks as under:


```javascript
{
    "chart": {
        "caption": "Monthly",
        "xaxisname": "Month",
        "yaxisname": "Revenue",
        "numberprefix": "$",
        "showvalues": "1",
        "animation": "1"
    },
    "data": [{
        "label": "Jan",
        "value": "420000"
    }, {
        "label": "Feb",
        "value": "810000"
    }, {
        "label": "Mar",
        "value": "720000"
    }, {
        "label": "Apr",
        "value": "550000"
    }, {
        "label": "May",
        "value": "910000"
    }, {
        "label": "Jun",
        "value": "510000"
    }, {
        "label": "Jul",
        "value": "680000"
    }, {
        "label": "Aug",
        "value": "620000"
    }, {
        "label": "Sep",
        "value": "610000"
    }, {
        "label": "Oct",
        "value": "490000"
    }, {
        "label": "Nov",
        "value": "900000"
    }, {
        "label": "Dec",
        "value": "730000"
    }],
    "trendlines": [{
        "line": [{
            "startvalue": "700000",
            "istrendzone": "1",
            "valueonright": "1",
            "tooltext": "AYAN",
            "endvalue": "900000",
            "color": "009933",
            "displayvalue": "Target",
            "showontop": "1",
            "thickness": "5"
        }]
    }]
}
}
```

Copy this into a file, name it monthlyRevenue.json, and store it in the same folder as your HTML page.
<p class="text-info">
If you are using multi-lingual characters in your JSON, make sure that you save the JSON data with UTF-8 encoding.
</p>

The data structure needed to render the above chart is given below:

```javascript
FusionCharts.ready(function() {
    var fusioncharts = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-container',
        width: '500',
        height: '300',
        dataFormat: 'jsonurl',
        dataSource: 'http://static.fusioncharts.com/sample/monthlyRevenue.json'
    });
    fusioncharts.render();
});
```

<p class="text-info">
While rendering your charts locally (without a web server, even if on the localhost), you will not be able to load data from XML or JSON files present on your hard-drive due to security restrictions enforced by most modern browsers.
</p>


## Loading Data using the XML URL

The XML representation for the above chart looks as under:

```html
<chart caption='Harry&#39;s SuperMart' subcaption='Monthly revenue for last year' xaxisname='Month' yaxisname='Amount' numberprefix='$' palettecolors='#008ee4' bgalpha='0' borderalpha='20' canvasborderalpha='0' useplotgradientcolor='0' plotborderalpha='10' placevaluesinside='1' rotatevalues='1' valuefontcolor='#ffffff' captionpadding='20' showaxislines='1' axislinealpha='25' divlinealpha='10'>
    <set label='Jan' value='420000' />
    <set label='Feb' value='810000' />
    <set label='Mar' value='720000' />
    <set label='Apr' value='550000' />
    <set label='May' value='910000' />
    <set label='Jun' value='510000' />
    <set label='Jul' value='680000' />
    <set label='Aug' value='620000' />
    <set label='Sep' value='610000' />
    <set label='Oct' value='490000' />
    <set label='Nov' value='900000' />
    <set label='Dec' value='730000' />
</chart>
```

Copy this into a file called monthlyRevenue.xml and store it in the same folder as your HTML page.

<p class="text-info">
If you are using multi-lingual characters in your XML, make sure that you save the XML data with UTF-8 encoding.
</p>

To initialize the chart and to instruct it using XML URL, you use the following code:

```javascript
FusionCharts.ready(function() {
    var myChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "xmlurl",
        "dataSource": "http://static.fusioncharts.com/sample/monthlyRevenue.xml"
    });
    myChart.render();
});
```

## Was there a problem rendering the chart?

In case something went wrong and you are unable to see the chart, check for the following:

 *  If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

 *  If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct, and whether the file exists in that location.

 *  If you get a __Loading Data__ or __Error in loading data__ message, check whether your JSON/XML data structure is correct, and there are no conflicts related to quotation marks in your code.

Click here for more information on [Troubleshooting](/troubleshooting/debugger).

Now that you’re familiar with the basics of FusionCharts Suite XT, let’s build some advanced chart types, including multiple series of data, real-time updates etc.
