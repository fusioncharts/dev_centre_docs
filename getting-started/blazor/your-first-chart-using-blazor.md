---
title: Your First Chart in Blazor using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the blazor-fusioncharts component.
heading: Create a Chart in Blazor using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps, and dashboards in JavaScript. The `BlazorFusionCharts` component lets you easily elevate data visualization to any Blazor project. On this page, we'll see how to install FusionCharts and render a chart using the `BlazorFusionCharts` component.

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

### Setup using NuGet Package
Follow these steps to install Blazor using the NuGet Package.

1. Open the project inside the Visual Studio app.

2. On the Settings icon, select “Options”.

3. Find the NuGet Package Manager and select Package Sources from the left panel of the Options window.

4. click the `+` symbol in the top-right corner to add a package.
- For the Name field, add the name of the package source as `myget.org`.
- For the Source field, paste the myGet Package link.
- Click “Update”, and then click “OK”.

5. Under Tools, click the “NuGet Package Manager” option and select Manage NuGet Packages for Solution.   

6. Change the project source to “myget.org” in the top-right corner. 

7. Finally, move the browser tab of the same window, enter the credentials, and install the package "BlazorApp1".

> Note: For Linux and macOS, installing the Nuget package using CLI from the private feed of MyGet requires an additional file, `nuget.config`, on the package's root. This file can be generated using the command `dotnet new nugetconfig`.


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

**Steps to Upload Nuget Package**:
1. In Visual Studio, ensure the mode is set to "Release" and click on "Build".
2. Next, click the Blazor Application named "BlazzorApp1".
3. In the `bin/release` folder, the nupkg file should be visible.
4. Now, go to the myget site, sign in, and click on the new feed to configure it with the package name.
5. the "NuGet package" option should appear in the "Add Package" dropdown menu once configured.
6. Select the NuGet package and add it from your local folder.
7. Once uploaded, users can select and install the package using the steps [above](/getting-started/blazor/your-first-chart-using-blazor#setup-using-nuget-package).

More information on creating NuGet packages can be found [here](https://docs.myget.org/docs/walkthrough/getting-started-with-nuget). 

## Create an application using FusionCharts
Using FusionCharts, you can create your application. For starters, ensure you have `Node.js` and `Git` installed in your environment.

To create a basic `column 2D` chart, open your cshtml file and add the following code:

```javascript
<script src="~/fusioncharts/fusioncharts.js"></script>
<script src="~/blazor-fusionCharts.js"></script>
```

Next, in the respective razor file, expose a code block as follows:
```javascript
@code {
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {}
        else
        {}
    }
}
```

Now, create the `renderColumnChart()` function in the code block as follows:
```javascript
@code {
    private async Task renderColumnChart()
    {
        dynamic myChartConfig = new System.Dynamic.ExpandoObject();
        dynamic myDataSource = new System.Dynamic.ExpandoObject();
        dynamic myChart = new System.Dynamic.ExpandoObject();
        dynamic myEvent = new System.Dynamic.ExpandoObject();
        myEvent.dataPlotClick = "function() { console.log('dataPlotClick')}";

        myChartConfig.type = "column2D";
        myChartConfig.width = 1000;
        myChartConfig.height = 600;
        myChartConfig.dataFormat = "json";
        myChartConfig.renderAt = "demoID";

        myChart.caption = "Monthly Sales";
        myChart.subCaption = "Last year";
        myChart.xAxisName = "Month";
        myChart.yAxisName = "Sales (in USD)";
        myChart.theme = "fusion";

        myDataSource.data = new[] {
            new { label = "February", value = "340000" },
            new { label = "March", value = "740000" },
            new { label = "April", value = "800000" },
            new { label = "May", value = "400000" },
            new { label = "June", value = "620000" },
            new { label = "July", value = "870000" },
            new { label = "August", value = "60000" },
            new { label = "September", value = "720000" },
            new { label = "October", value = "10000" },
            new { label = "November", value = "40000" }
    };
        myDataSource.chart = myChart;
        myChartConfig.events = myEvent;
        myChartConfig.dataSource = myDataSource;

        String chartConfig = System.Text.Json.JsonSerializer.Serialize(myChartConfig);
        await fusionChartsService.renderChart(chartConfig);  
    }
```

The function above uses dynamic data type to create a JSON object of the chart’s configurations. Later on, once the object is created, it is serialized and then sent to the service file. 

```javascript
String chartConfig = System.Text.Json.JsonSerializer.Serialize(myChartConfig);
await fusionChartsService.renderChart(chartConfig); 
```

Finally, call the `demo()` function from `OnAfterRenderAsync` as follows:
```javascript
protected override async Task OnAfterRenderAsync(bool firstRender)
{
        if (firstRender)
        {
            await demo();
        }
        else
        {

        }
}
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

Let's create a chart showing the **"Last year's Monthly Sales"**. The oil reserves data present in various countries is shown in tabular form below.

| Month      | Sales (in USD) |
| ---------- | -------------- |
| January    | 380000         |
| February   | 340000         |
| March	     | 740000         |
| April      | 800000         |
| May	     | 400000         |
| June       | 620000         |
| July       | 870000         |
| August     | 60000          |
| September  | 720000         |
| October    | 10000          |
| November   | 40000          |

Since we are plotting a single dataset, let us create a column 2D chart with 'month' as **data labels** along the x-axis and 'Sales (in USD)' as **data values** along the y-axis. Then, let us prepare the data for a single-series chart.

FusionCharts accepts the data in JSON format. So the above data in the tabular form will look as shown below:

```javascript
/// Preparing the chart data
List<dynamic> chartData = [
  	 new { label = "January", value = "380000" },
            new { label = "February", value = "340000" },
            new { label = "March", value = "740000" },
            new { label = "April", value = "800000" },
            new { label = "May", value = "400000" },
            new { label = "June", value = "620000" },
            new { label = "July", value = "870000" },
            new { label = "August", value = "60000" },
            new { label = "September", value = "720000" },
            new { label = "October", value = "10000" },
            new { label = "November", value = "40000" }
	];
```
### Configure Your Chart

Now that the data is ready let's work on the styling, positioning, and giving your chart context.

```javascript
/// Create a JSON object to store the chart configurations
@code {
    private async Task renderColumnChart()
    {
        dynamic myChartConfig = new System.Dynamic.ExpandoObject();
        dynamic myDataSource = new System.Dynamic.ExpandoObject();
        dynamic myChart = new System.Dynamic.ExpandoObject();
        dynamic myEvent = new System.Dynamic.ExpandoObject();
        myEvent.dataPlotClick = "function() { console.log('dataPlotClick')}";

        myChartConfig.type = "column2D";
        myChartConfig.width = 1000;
        myChartConfig.height = 600;
        myChartConfig.dataFormat = "json";
        myChartConfig.renderAt = "demoID";

        myChart.caption = "Monthly Sales";
        myChart.subCaption = "Last year";
        myChart.xAxisName = "Month";
        myChart.yAxisName = "Sales (in USD)";
        myChart.theme = "fusion";
	/// Chart Data - from step 2
	data: chartData
  }
};
```

> The `type` attribute in the chartConfigs object specifies the type of chart being rendered. You can look at different chart types with their aliases [here](/chart-guide/list-of-charts).
 
### Render the Chart

Finally, prepare to render your first chart using the `BlazorFusionCharts` component. In your "App.js" file, replace your entire code with the code sample below, [Example](https://github.com/fusioncharts/blazor-fusioncharts#quick-start).

> The JavaScript code to create a chart in Android and iOS is the same.

```javascript
// STEP 1: Include the dependencies
<script src="~/fusioncharts/fusioncharts.js"></script>
<script src="~/blazor-fusionCharts.js"></script>

@code {
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {}
        else
        {}
    }
}

// STEP 2 and 3: Prepare the data and Configure your chart
@code {
    private async Task renderColumnChart()
    {
        dynamic myChartConfig = new System.Dynamic.ExpandoObject();
        dynamic myDataSource = new System.Dynamic.ExpandoObject();
        dynamic myChart = new System.Dynamic.ExpandoObject();
        dynamic myEvent = new System.Dynamic.ExpandoObject();
        myEvent.dataPlotClick = "function() { console.log('dataPlotClick')}";

        myChartConfig.type = "column2D";
        myChartConfig.width = 1000;
        myChartConfig.height = 600;
        myChartConfig.dataFormat = "json";
        myChartConfig.renderAt = "demoID";

        myChart.caption = "Monthly Sales";
        myChart.subCaption = "Last year";
        myChart.xAxisName = "Month";
        myChart.yAxisName = "Sales (in USD)";
        myChart.theme = "fusion";

        myDataSource.data = new[] {
            new { label = "January", value = "380000" },
            new { label = "February", value = "340000" },
            new { label = "March", value = "740000" },
            new { label = "April", value = "800000" },
            new { label = "May", value = "400000" },
            new { label = "June", value = "620000" },
            new { label = "July", value = "870000" },
            new { label = "August", value = "60000" },
            new { label = "September", value = "720000" },
            new { label = "October", value = "10000" },
            new { label = "November", value = "40000" }
    };
        myDataSource.chart = myChart;
        myChartConfig.events = myEvent;
        myChartConfig.dataSource = myDataSource;
        String chartConfig = System.Text.Json.JsonSerializer.Serialize(myChartConfig);
        await fusionChartsService.renderChart(chartConfig);  
    }

// STEP 4: Render the chart
protected override async Task OnAfterRenderAsync(bool firstRender)
{
        if (firstRender)
        {
            await demo();
        }
        else
        {

        }
}
 
```

## See Your Chart below

The chart should look as shown below.

-[Missing Image](/images/)

If you get a JavaScript error on your page, check your browser console for the exact error and fix it accordingly. If you cannot solve it, click [here](mailto:support@fusioncharts.com) to contact our support team.

That's it! Your first chart using `BlazorFusionCharts` is ready.

Visit the [Blazor Features](/getting-started/blazor/blazor-features) page to learn more about working with events, methods, and more.
