---
title: Your First Chart in Blazor using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the blazor-fusioncharts component.
heading: Create a Chart in Blazor using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps, and dashboards in JavaScript. The `blazor-fusioncharts` component lets you easily elevate data visualization to any Blazor project. On this page, we'll see how to install FusionCharts and render a chart using the `blazor-fusioncharts` component.

 Integrating FusionCharts into Blazor applications can help users create visually appealing and informative data visualizations, enhancing the overall experience. 

## Prerequisite

Please ensure you have Visual Studio (Used Community Edition 2022 - 17.6.1) installed or updated as a prerequisite. 

**IMPORTANT NOTE:** Install Blazor if not present already.


## Installation 

Follow these simple steps to install Blazor.

1. Clone the code repository to your local machine from [blazor-fusioncharts](https://github.com/fusioncharts/blazor-fusioncharts).

**For Windows**: 
1. Ensure the following workloads are selected during the Visual Studio installation:
- ASP.NET and Web Development
- Azure Development
- .NET Desktop

2. After installation, open the Visual Studio application and select the “Open a project solution” option. 

3. Navigate and select the ‘BlazorApp1.sln’ file in the extracted folder. 

4. Finally, run the ‘BlazorApp1.sln’ file by clicking the run button in the toolbar. 

**For MacOS and Linux**:
1. Open the terminal from your project directory and run the ‘dotnet watch’ command.

2. Open a web browser and navigate to the appropriate address to view and interact with your Blazor application.  

**Setup using NuGet Package**:
1. Open the project inside the Visual Studio app.

2. On the Settings icon, select “Options”.

3. Find the NuGet Package Manager, and select Package Sources from the left panel of the Options window.

4. To add a package, click the “+” symbol.
- For the Name field, add the name of the package source as ‘myget.org’.
- For the Source field, paste the myGet Package link.
- Click “Update”, and then click “OK”.

5. Under Tools, click the “NuGet Package Manager” option and select Manage NuGet Packages for Solution.   

6. Next, change the project source to “myget.org” in the top-right corner. 

7. Finally, move the browser tab of the same window, enter the credentials, and install the package BlazorApp1.

**Setup using CLI**:
1. Download and install the long-term support version of  [dotnet](https://dotnet.microsoft.com/en-us/download).

2. Navigate to the “ /BlazorApp1” directory and open the terminal (or command prompt).

3. To build the project, run:
```javascript
dotnet build
```
To run the project, type the following command:
```javascript
dotnet run
```

## Create an application using FusionCharts
Using FusionCharts, you can create your application. For starters, ensure you have `Node.js` and `Git` installed in your environment.

Next, open the Command Prompt and create an instance of the FusionCharts widget as follows:

```javascript
missing-blazor-code-sample
```

### Installation and Including Dependencies
To create a new Blazor application:
1. Remove the FusionCharts package from the following locations:
- For Windows: `C:\Users\XXX.nuget\packages`
- For macOS and Linux: `~/.nuget/packages`

2. Remove any fusionCharts package from the local at the following locations:
- For Windows: `C:\Users\XXX.nuget\packages`
- For macOS and Linux: `~/.nuget/packages`

3. Install the latest package from [Nuget.org](https://www.nuget.org/).

4. Upon successful installation, manually add the `blazor-fusioncharts.js` file from the “C:\Users\XXX.nuget\packages\blazorfusioncharts\1.0.0\staticwebassets” address to the wwwroot folder. 

5. In the `Hosts.cshtml` file, add the following script tags:
```javascript
<script type=”text/javascript” src=”https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js”></script>
<script src=”~/blazor-fusionCharts.js”></script>
```
In the `_Import.razor` file, add the FusionChartsInterop as follows:
```javascript
<script type=”text/javascript” src=”https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js”></script>
<script src=”~/blazor-fusionCharts.js”></script>
```
In the `Program.cs` file, add the FusionCharts service as follows:
```javascript
builder.Services.AddScoped<FusionCharts.FusionChartsInterop.FusionChartsService>();
builder.Services.AddHttpClient();
```
### Preparing the Data

Let's create a chart showing the **"Countries With Most Oil Reserves"**. The oil reserves data present in various countries is shown in tabular form below.

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| Venezuela | 290K            	|
| Saudi 	| 260K            	|
| Canada	| 180K            	|
| Iran  	| 140K            	|
| Russia	| 115K            	|
| UAE   	| 100K            	|
| US    	| 30K             	|
| China 	| 30K             	|

Since we are plotting a single dataset, let us create a column 2D chart with 'countries' as **data labels** along the x-axis and 'No. of oil reserves' as **data values** along the y-axis. Then, let us prepare the data for a single-series chart.

FusionCharts accepts the data in JSON format. So the above data in the tabular form will look as shown below:

```javascript
/// Preparing the chart data
List<dynamic> chartData = [
  	{"label": "Venezuela", "value": "290"},
  	{"label": "Saudi", "value": "260"},
  	{"label": "Canada", "value": "180"},
  	{"label": "Iran", "value": "140"},
  	{"label": "Russia", "value": "115"},
  	{"label": "UAE", "value": "100"},
  	{"label": "US", "value": "30"},
  	{"label": "China", "value": "30"}
	];
```
### Configure Your Chart

Now that the data is ready, let's work on the styling, positioning, and giving your chart context.

```javascript
/// Create a JSON object to store the chart configurations
Map<String, dynamic> chart = {
  	"caption": "Countries With Most Oil Reserves [2017-18]",
  	"subCaption": "In MMbbl = One Million barrels",
  	"logoURL":
  	"https://static.fusioncharts.com/sampledata/images/Logo-HM-72x72.png",
  	"logoAlpha": "100",
  	"logoScale": "110",
  	"logoPosition": "TL",
  	"xAxisName": "Country",
  	"yAxisName": "Reserves (MMbbl)",
  	"numberSuffix": "K",
  	"theme": "carbon",
  	"baseFontSize": "35px",
  	"captionFontSize": "35px",
  	"subCaptionFontSize": "30px"
	};
	/// Chart Data - from step 2
	data: chartData
  }
};
```

> The `type` attribute in the chartConfigs object specifies the type of chart being rendered. You can look at different chart types with their aliases [here](/chart-guide/list-of-charts).
 
### Render the Chart

Finally, prepare to render your first chart using the `blazor-fusioncharts` component. In your "App.js" file, replace your entire code with the code sample below, [Example](https://github.com/fusioncharts/blazor-fusioncharts#quick-start).

> The JavaScript code to create a chart in Android and iOS is the same.

```javascript
missing-blazor-code-sample
```

## See Your Chart below

The chart should look as shown below.

-[Missing Image](/images/)

If you get a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you cannot solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `blazor-fusioncharts` is ready.

Visit the [Blazor Features](/getting-started/blazor/blazor-features) page to learn more about working with events, methods, and more.
