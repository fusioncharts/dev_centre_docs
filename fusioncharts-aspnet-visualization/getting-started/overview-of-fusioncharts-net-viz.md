---
title: Overview | FusionCharts
description: FusionCharts.NET Overview
heading: Overview
---

`FusionCharts.NET` is a charting library for ASP.NET MVC and ASP.NET WebForms, which uses FusionCharts JavaScript (HTML5) library to render interactive charts.

FusionCharts.NET helps you avoid writing messy JavaScript and JSON code within your ASP.NET code, by providing an object-oriented paradigm in which you can render charts using C# or VB. It comes with two modules: 

* **Data Engine** - The data engine of FusionCharts.NET allows you to store data and perform operations on it. As such, you can transform and optimize the data, before sending it to the chart renderer. In FusionCharts.NET, the chart renderer accepts data only in the form of `DataModel`.  The data engine consists of the following:

	* The data source class, which receives the raw data and creates an object to provide the data to the `DataModel`. 

	* The `DataModel` receives and stores the converted data. This is the parent `DataModel`, which you can provide to the chart renderer to visualize the data. 

	* A `DataModel` also contains data operations, which can be applied to create multiple optimized `DataModels`. You can provide any of these `DataModels` to the chart renderer. 

* **Visualization** - The visualization module of FusionCharts.NET allows you to render the chart with functional and cosmetic configurations, after receiving the data from the data engine. 

##  FusionCharts ASP.NET wrapper vs FusionCharts.NET

FusionCharts ASP.NET wrapper|FusionCharts.NET|
-|-
Provide data manually as JSON/XML to the chart renderer. |Provide the raw data and the data engine converts the raw data into an acceptable format to render the chart.
Static data only, no option to slice and dice the data. |Dynamic data, option to slice and dice the data using the data operators available.
Different data structures for different charts. So, you need to build chart specific json for different chart types.|As we are building json based on chart object and data source, users do not need to worry about the specific chart json structure.
No option to set a common theme for all charts in a single page. |It gives you an option to set a single theme which can be applied to all of the charts in a particular page.
For Chart customization, the json has to be configured manually. So, you have to iterate, build the json and then pass the json as a string to the existing wrapper. |FusionCharts.NET, takes just the high-level information like `chart id` and `DataModel` object as the data source for the chart. You can set chart customization properties or features in object-oriented paradigm and FusionCharts.NET will build the json and render FusionCharts in your browser.