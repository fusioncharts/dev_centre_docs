---
title: Overview | FusionCharts
description: FusionCharts.NET Overview
heading: Overview
formPresent: bottom
formDescription: To download FusionCharts.NET locally fill up the form and click the download button.
---

`FusionCharts.NET` is a charting library for **ASP.NET MVC**, **ASP.NET WebForms**, **.NET Core** and **.NET Standard** which uses FusionCharts JavaScript (HTML5) library to render interactive charts.

FusionCharts.NET helps you avoid writing messy JavaScript and JSON code within your ASP.NET code, by providing an object-oriented paradigm in which you can render charts using C# or VB. It comes with two modules:

- **Data Engine** - The data engine of FusionCharts.NET allows you to store data and perform operations on it. As such, you can transform and optimize the data, before sending it to the chart renderer. In FusionCharts.NET, the chart renderer accepts data only in the form of `DataModel`. The data engine consists of the following:

  - The data source class, which receives the raw data and creates an object to provide the data to the `DataModel`.
  - The `DataModel` receives and stores the converted data. This is the parent `DataModel`, which you can provide to the chart renderer to visualize the data.
  - A `DataModel` also contains data operations, which can be applied to create multiple optimized `DataModels`. You can provide any of these `DataModels` to the chart renderer.

- **Visualization** - The visualization module of FusionCharts.NET allows you to render the chart with functional and cosmetic configurations, after receiving the data from the data engine.

To help understand better refer to the illustration below:

<img src="{% site.BASE_URL %}/images/architecture-diagram-fusioncharts-net.png" alt="Data Markers" width="700" height="420">

Starting v1.0.4, FusionCharts.NET has been released for **.NET Standard** which enables the support for following .NET development platforms:

- .NET Framework
- .NET Core
- .NET Standard
- Mono/Xamarin

> You can download the .NET Standard version directly from **NuGet**.

## FusionCharts ASP.NET Wrapper vs FusionCharts.NET

<table>
	<tr>
		<th></th>
		<th>ASP.NET Wrapper</th>
		<th>FusionCharts.NET</th>
	</tr>
	<tr>
		<td>Compatibility - ASP.NET Framework</td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Compatibility - ASP.NET Core, ASP.NET Standard, Mono/Xamarin</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Data from different sources</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Static data</td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Remote data</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Operations on data</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Handle chart structure specific json</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Conditional data plot formatting</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Page Level theme</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
	<tr>
		<td>Fully object oriented c#/vb code</td>
		<td><i class="fc_cross_covered" style="font-size: 25px; color: #bcbccf"></i></td>
		<td><i class="fc_select" style="color: #48b884 !important; font-size: 25px;"></i></td>
	</tr>
</table>

### Download FusionCharts.NET

You can download and install FusionCharts.NET by either directly install it from NuGet or install the assemblies manually after downloading the FusionCharts.NET package.

To directly install NuGet package, run the following command in the NuGet Package Manage Console:

```
Install-Package FusionCharts.Visualization
```
