---
title: Your First Chart in Blazor using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the BlazorFusionCharts component.
heading: Create a Chart in Blazor using FusionCharts
---

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps, and dashboards in JavaScript. The `BlazorFusionCharts` component lets you easily elevate data visualization to any Blazor project. On this page, we'll see how to install FusionCharts and render a chart using the `BlazorFusionCharts` component.

Integrating FusionCharts into Blazor applications can help users create visually appealing and informative data visualizations, enhancing the overall experience. 

## Prerequisite

Please ensure you have the following items installed or updated before starting.
* Visual Studio (Used Community Edition 2022 - 17.6.1) on Windows or Mac.
* Alternatively, you can install [.NET for MacOS](https://learn.microsoft.com/en-us/dotnet/core/install/macos) or [.NET for Linux](https://learn.microsoft.com/en-us/dotnet/core/install/linux).

**IMPORTANT NOTE:** Install Blazor if not present already.

## Installation 
### Setup using NuGet Package
Follow these steps to install Blazor using the NuGet Package.

1. Open the project in Visual Studio.

2. Go to `Manage Nuget Packages`, search for `BlazorFusionCharts`, and click the `Add Package` button to install the package.   

### Installation and Including Dependencies
To create a new Blazor application:
1. Remove the FusionCharts package from the following locations:
- For Windows: `C:\Users\XXX.nuget\packages`
- For macOS and Linux: `~/.nuget/packages`

2. Install the latest package from [Nuget.org](https://www.nuget.org/).

3. Upon successful installation, manually add the `blazor-fusionCharts.js` file from the “C:\Users\XXX.nuget\packages\blazorfusioncharts\1.0.0\staticwebassets” address to the wwwroot folder. Or from the address "~/.nuget/packages/blazorfusioncharts/1.0.0/staticwebassets/" to your app's wwwroot folder.

4. In the `_Host.cshtml` file, add the following script tags:
```javascript
<script type=”text/javascript” src=”https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js”></script>
<script src=”~/blazor-fusionCharts.js”></script>
```
In the `_Imports.razor` file, add the FusionChartsInterop as follows:
```javascript
<script type=”text/javascript” src=”https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js”></script>
<script src=”~/blazor-fusionCharts.js”></script>
```
In the `Program.cs` file, add the FusionCharts service as follows:
```javascript
builder.Services.AddScoped<FusionCharts.FusionChartsInterop.FusionChartsService>();
builder.Services.AddHttpClient();
```

### Steps to run examples
Start by referring to the Blazor documentation link for a detailed guide on setting up and installing the necessary dependencies. 

Clone the code repository to your local machine from [blazor-fusionCharts](https://github.com/fusioncharts/blazor-fusioncharts) and follow these simple steps to install Blazor.

**For Windows**: 
1. Ensure the following workloads are selected during the Visual Studio installation:
- ASP.NET and Web Development
- Azure Development
- .NET Desktop

2. After installation, open the Visual Studio application and select the "Open a project solution" option. 

3. Navigate to "examples" directory and open the `demo.sln` file.

4. Run the `demo` by clicking the "Run" button in the toolbar.

5. Open your preferred web browser and navigate to the appropriate address to view and interact with your Blazor app.

**For MacOS and Linux**:
1. Open the terminal from your project directory and run the ‘dotnet watch’ command from your `demo` directory in the terminal.

2. Open your preferred web browser and navigate to the appropriate address to view and interact with your Blazor app.

## Create an application using FusionCharts
Using FusionCharts, you can create your application. For starters, ensure you install `Node.js` and `.NET` in your environment.

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

### Preparing the Data

Let's create a chart showing the **"Last year's Monthly Sales"**. The monthly sales data present is shown in tabular form below.

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

Finally, prepare to render your first chart using the `BlazorFusionCharts` component. In your "Index.razor" file, replace your entire code with the following code sample below.

For this example, let's use the following "examples", which you can copy the full code here from this [file](https://github.com/fusioncharts/blazor-fusioncharts/blob/master/examples/demo/Pages/BarIn2D.razor).

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

        myChartConfig.type = "bar2D";
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

That's it! Your first chart using `BlazorFusionCharts` is ready.

Visit the [Blazor Features](/getting-started/blazor/blazor-features) page to learn more about working with events, methods, and more.
