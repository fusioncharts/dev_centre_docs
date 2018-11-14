---
permalink: troubleshooting/datasource-url-from-secure-network-is-not-working.html
title: Datasource URL from a Secure Network is not working | FusionCharts
description: When the URL of the data source is present within a secured network, FusionCharts may not always be able to access it. This page shows how to solve the problem.
heading: Datasource URL from a Secure Network is not working
chartPresent: false
---

If you provide a secure (`https`) static link to the dataSource, make sure that the chart rendering on the web page is also secure (`https`). Otherwise, it would result in cross origin errors.

Also, since this is an asynchronous call, if you want to perform some operation after the data is loaded you need to make use of events like `dataLoaded` or `renderComplete` to execute them on loading or on rendering.

Click [here](https://www.fusioncharts.com/dev/chart-guide/getting-started/setting-data-source-using-url) for more details.