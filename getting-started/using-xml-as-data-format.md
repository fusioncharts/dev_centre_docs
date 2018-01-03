---
permalink: getting-started/using-xml-as-data-format.html
title: Using XML as Data Format | FusionCharts
description: FusionCharts Suite XT allows developers to pick  XML/JSON, without losing any functionality, whatsoever. Server-side developers find it easier to build XML
heading: Using XML as Data Format
chartPresent: true
---

Tom is a server-side developer working in Harry's team. He prefers working with XML over JSON, because of the verbose nature of JSON. FusionCharts Suite XT allows developers like Tom to pick either XML or JSON, without losing any functionality, whatsoever. Server-side developers find it easier to build XML (using string concatenation), whereas JavaScript developers find it easier to work with JSON.

Let us build the same Revenue chart, which we built in the [first example]{% linkTo tutorials/getting-started/building-your-first-chart.md %} using JSON, and use XML data in this example.

{% embed_chart getting-started-your-first-charts-building-your-chart-example1.js %}

## Let’s Begin

### Creating an XML file from your datasource

The data for this chart can be represented in a table as under:

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

The XML representation for this table looks as under:

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

Copy this into a file called chartdata.xml and store it in the same folder as your HTML page. If you use multi-lingual characters in your XML, ensure to save the XML data with UTF-8 encoding.

<p class="text-info">
Do note that while rendering your charts locally (without a web server, even if `localhost`), you will not be able to load data from XML or JSON files present on your hard-drive, due to security restrictions enforced by most modern browsers.
</p>

### Initialize the chart with this data

To initialize the chart and to instruct it to use XML data, you use the following embedding code.

```html
<script type="text/javascript">
FusionCharts.ready(function () {
  var myChart = new FusionCharts({
    "type": "column2d",
    "renderAt": "chartContainer",
    "width": "500",
    "height": "300",
    "dataFormat": "xml",
    "dataSource": "<chart caption='Harry\'s SuperMart' subcaption='Monthly revenue for last year' xaxisname='Month' yaxisname='Amount' numberprefix='$' palettecolors='#008ee4' bgalpha='0' borderalpha='20' canvasborderalpha='0' useplotgradientcolor='0' plotborderalpha='10' placevaluesinside='1' rotatevalues='1' valuefontcolor='#ffffff' captionpadding='20' showaxislines='1' axislinealpha='25' divlinealpha='10'><set label='Jan' value='420000' /><set label='Feb' value='810000' /><set label='Mar' value='720000' /><set label='Apr' value='550000' /><set label='May' value='910000' /><set label='Jun' value='510000' /><set label='Jul' value='680000' /><set label='Aug' value='620000' /><set label='Sep' value='610000' /><set label='Oct' value='490000' /><set label='Nov' value='900000' /><set label='Dec' value='730000' /></chart>"
  });

  myChart.render();
});
</script>
```

Note how we've used `xml` as `dataformat` as we are providing the XML as a string, and provided the XML string as value to the `dataSource` attribute.

The full HTML code to create this chart is as follows

```html
<html>
<head>
<title>My First chart using FusionCharts Suite XT</title>
<script type="text/javascript" src="fusioncharts/js/fusioncharts.js"></script>
<script type="text/javascript" src="fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>
<script type="text/javascript">
FusionCharts.ready(function () {
    var myChart = new FusionCharts({
      "type": "column2d",
      "renderAt": "chartContainer",
      "width": "500",
      "height": "300",
      "dataFormat": "xml",
      "dataSource": "<chart caption='Harrys SuperMart' subcaption='Monthly revenue for last year' xaxisname='Month' yaxisname='Amount' numberprefix='$' palettecolors='#008ee4' bgalpha='0' borderalpha='20' canvasborderalpha='0' theme='fint' useplotgradientcolor='0' plotborderalpha='10' placevaluesinside='1' rotatevalues='1' valuefontcolor='#ffffff' captionpadding='20' showaxislines='1' axislinealpha='25' divlinealpha='10'><set label='Jan' value='420000' /><set label='Feb' value='810000' /><set label='Mar' value='720000' /><set label='Apr' value='550000' /><set label='May' value='910000' /><set label='Jun' value='510000' /><set label='Jul' value='680000' /><set label='Aug' value='620000' /><set label='Sep' value='610000' /><set label='Oct' value='490000' /><set label='Nov' value='900000' /><set label='Dec' value='730000' /></chart>"
    });

  myChart.render();
});
</script>
</head>
<body>
  <div id="chartContainer">FusionCharts XT will load here!</div>
</body>
</html>
```

## Was there a problem rendering the chart?

In case something went wrong and you are unable to see the chart, check for the following:

 *  If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly.

 *  If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. Check if the path to `fusioncharts.js` file is correct, and whether the file exists in that location.

 *  If you get a __Loading Data__ or __Error in loading data__ message, check whether your XML data structure is correct, and there are no conflicts related to quotation marks in your code.

Click here for more information on [Troubleshooting]{% linkTo tutorials/troubleshooting/debugger.md %}.

Now that you’re familiar with the basics of FusionCharts Suite XT, let’s build some advanced chart types, including multiple series of data, real-time updates etc.
