---
permalink: chart-guide/real-time-charts/troubleshooting.html
title: Troubleshooting | FusionCharts
description: In this section you will be shown how you can debug errors that might crop up with real-time charts.
heading: Troubleshooting
chartPresent: false
---

In this section you will be shown how you can debug errors that might crop up with real-time charts. We've grouped the possible errors and suggested solutions for them.

### If you do not see any chart at all:

If you see an endless loading progress bar in your browser, or if the right click menu (right click at the place where the chart should render) shows "Chart not loaded", check the following:

* Have you pasted the correct JavaScript files in the required folder?

* Have you provided the name of the chart correctly in your code?

### If you get the "Error in Loading Data" message, check:

* Whether you've provided the correct path to the JSON/XML data in your code.

* Whether your JSON/XML file is named properly and does not have a `.txt` extension (as many basic text editors append `.txt` after the file name).

* Whether your chart JavaScript files and JSON/XML data are on the same sub-domain. Cross domain data loading is not allowed.

* Whether your JSON/XML and chart file names are in accordance to the naming conventions imposed by your operating system

### If you get the "Invalid Data." message, it means that the JSON/XML data is malformed. Check it again for common errors like:

* Presence of duplicate attributes in the JSON/XML.

* Difference in case of tags in XML. `<chart>` should end with `</chart>` and **not** `</Chart>` or `</CHART>`

* Missing opening/closing quotation marks for any attributes in XML. e.g., <chart numberSuffix=%' should be <chart numberSuffix='%'.

* Missing closing tag for any element.

### If you get a screen showing "The chart will appear within this DIV..." or "Chart." or "FusionWidgets XT will load here", check if:

* You have copied the required JavaScript files in the right folder.

* You have included and provided the correct path of `fusioncharts.js` in your HTML code.

* There are any JavaScript syntax or runtime errors that might have halted the execution of FusionCharts APIs.

* Unique names are used for the chart's JavaScript variable, chart's ID, and the HTML div’s ID

### If the chart renders initially, but doesn't update in real time, make sure that:

* you have specified a correct and valid path for the `dataStreamURL` attribute in the JSON/XML data.

* you have specified a valid value for `refreshInterval` in your JSON/XML data

* the `dataStreamURL` attribute is returning proper data. To test this, just open your browser and run this page. It should return the data in text format.

* the output data does not contain any carriage returns (new-line characters) or HTML elements. In many scripting languages, these are automatically added. You will need to remove them.

* the page which provides the incremental update data to the charts is hosted on the same sub-domain in which the charts are hosted. Otherwise, owing to security restrictions, the charts will not be able to receive updated data. Real-time charts are allowed to retrieve data only from the same sub-domain in which the charts are residing. Data can only be loaded from a domain that is an exact match to the location of the charts, including sub-domains. For this reason, a chart residing at `server1.mydomain.com` will not be able to access data from `mydomain.com`.

<p class="text-info">If you wish to load data from a different domain, you can set up a proxy page at the same sub-domain that will actually request data from the distant domain and then relay it to the charts. You must be able to upload and run a server-side script on a server in the same domain as the charts. In this method, a chart accesses the script, which loads the information, retrieves it, and returns the information back to the chart. This method is best if the server hosting the data is not under your control (for example, a public source or a web service).</p>