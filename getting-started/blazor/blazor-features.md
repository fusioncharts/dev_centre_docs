---
title: Blazor Features | FusionCharts
description: This article outlines how to work with events, APIs, and modules.
heading: Blazor Features
---

Achieve more with your charts, and explore more Blazor features. Learn how to work using events, APIs, modules, or how to configure your license.

## Working with Events

You can add different events to your Blazor chart. There are two ways to attach event listeners to FusionCharts: the JS method as an event listener or the Blazor method as an event listener. 

### JS method
Use the JS method to invoke a JavaScript file within an event trigger by following the steps below:

1. Generate a JavaScript file within the wwwroot directory that implements the event handler method. 

2. Include the recently created file as a script tag in the `_Hosts.cshtml`. The created file name is ‘custom.js‘ and is in the wwwroot folder.
```javascript
<script src="~/custom.js"></script>
```
3. Implement the JavaScript function to activate it whenever the event is triggered.

4. Execute an anonymous function to invoke the JS method upon event trigger.

Use the ‘function()‘ format for the function definition in JavaScript. The arrow function is not included, but users can add it by extending the regex in the ‘blazor-fusioncharts‘ file.  

```javascript
   myEvent.dataPlotClick = "function() { randomF();}";
```

### Blazor method
To invoke a Blazor method upon an event trigger, follow the steps below:
1. Inside the `Index.razor` file, create an instance as shown below:
```javascript
    public static Index _instance;
```

2. Instantiate the instance inside the constructor to refer to the current file/page name where it is being applied. 
```javascript
    public <CurrentPageName>()
    {
        _instance = this;
    }
```

3. Implement a `JSInvokable` static method to invoke a non-static method using the instance. 
```javascript
    [JSInvokable("ChangeData")]
    public static async Task ChangeData()
    {
        await _instance.NonStaticMethod();
    }
```

4. Code the non-static method to perform any functionality. The following sample calls the generic method to invoke FusionCharts methods.
```javascript
   public async Task NonStaticMethod()
    {
        await fusionChartsService.CallFusionChartsFunction("setChartAttribute", "CHART_ID", "caption", "new-caption");
    }
```

5. Write an anonymous function to call the Blazor method upon the event trigger. In the sample below, the ‘DoNet‘ is available in the global scope of JavaScript.  
```javascript
    myEvent.dataPlotClick = "function() { DotNet.invokeMethodAsync('BlazorApp1', 'ChangeData') }";
```

### Cancel Events
Blazor implements the functionality to cancel events, which disposes of the event already triggered on the chart. In the `Index.razor` file, the functionality of the event to cancel is as follows:

```javascript
myEvent.dataPlotClick = "function() {DotNet.invokeMethodAsync('BlazorApp2TestQA2', 'ChangeData')}";
myEvent.beforeDispose = "function(e) { console.log(e); e.preventDefault() }"; 
myEvent.disposeCancelled = "function() { console.log('dispose cancelled') }";
``` 

The event can be canceled by invoking the `callDispose()` method, as follows:

```javascript
private async Task callDispose(){
        await fusionChartsService.CallFusionChartsFunction("dispose", "demoId");
}
``` 
> Note: Any method that we invoke that is manipulating or interacting with the chart data then it has to be called after the chart is rendered which means it has to be called after the "loaded" or "renderComplete" event has triggered.

Check an event cancellation example [here](https://github.com/fusioncharts/blazor-fusioncharts/blob/feature/examples/examples/demo/Pages/Adding-Blazor-and-JS-functions-to-events-By-Sanskar).


## Working with APIs

You can also enhance your charts by adding some APIs. The first step is to write the logic to render FusionCharts inside the `Index.razor` file. Below is the code sample for a time chart: 

```javascript
private async Task renderTimeCharts()
    {
        dynamic myChartConfig = new System.Dynamic.ExpandoObject();
        dynamic myDataSource = new System.Dynamic.ExpandoObject();

        dynamic myChart = new System.Dynamic.ExpandoObject();
        dynamic myEvent = new System.Dynamic.ExpandoObject();
        dynamic myCategories = new System.Dynamic.ExpandoObject();
        dynamic myDataSet = new System.Dynamic.ExpandoObject();

        myChartConfig.id = "stockRealTimeChart";
        myChartConfig.type = "realtimeline";
        myChartConfig.renderAt = "chartContainer4";
        myChartConfig.width = 700;
        myChartConfig.height = 400;
        myChartConfig.dataFormat = "json";

        myChart.caption = "Real-time stock price monitor";
        myChart.subCaption = "Harry's SuperMart";
        myChart.xAxisName = "Time";
        myChart.yAxisName = "Stock Price";
        myChart.refreshinterval = 1;
        myChart.yaxisminvalue = 35;
        myChart.yaxismaxvalue = 36;
        myChart.numdisplaysets = 10;
        myChart.labeldisplay = "rotate";
        myChart.showRealTimeValue = 0;
        myChart.theme = "fusion";

        myCategories = new[] { new { catagory = new[] { new { label = "Day Start" } } } };

        myEvent.initialized = "function() { updateTimeChartData() }";
        myDataSource.chart = myChart;
        myDataSource.dataset = new[] { new { data = new[] { new { value = "35.3" } } } };
        myChartConfig.dataSource = myDataSource;
        myChartConfig.events = myEvent;

        String chartConfig = System.Text.Json.JsonSerializer.Serialize(myChartConfig);
        await fusionChartsService.renderChart(chartConfig);
    }
```

To invoke the generic method from the `Index.razor` file use the following method:

```javascript
await fusionChartsService.CallFusionChartsFunction("chartType", "CHART_ID");
```

The method’s call is directed to the `FusionChartsService.cs` file, which is a generic method calling another generic method written in `blazor-fusioncharts.js`, and its implementation is as follows:

  ```javascript
public async Task<String> CallFusionChartsFunction(String functionName, String chartId, params object[] args)
        {
           String result = await _jsruntime.InvokeAsync<String>("FusionCharts.invokeChartFunction", functionName, chartId, args);
           return result;
        }
```

The generic method above, which calls any FusionCharts methods, is embedded inside the `blazor-fusioncharts.js` as shown below:

  ```javascript
window.FusionCharts.invokeChartFunction = (functionName, chartID, ...args) => {
  let currentChart = FusionCharts(chartID),
    result;

  if (args.length > 0 && args[0].type === CALLBACK) {
    let { event, fn } = args[0];
    let callbackFn = parseFunction(null, fn);
    result = currentChart[functionName].call(currentChart, event, callbackFn);

    return String(result);
  } else {
    result = currentChart[functionName].apply(currentChart, ...args);

    if (typeof result === "object") {
      try {
        result = JSON.stringify(result);
      } catch (error) {
        console.log(error);
      }
    }
   return String(result);
  }
};
```

## Methods
### Custom Event Handler
The `addEventListener` method listens to events across all FusionCharts instances on a page and executes customs functions when an event is triggered.

The generic method implemented in the section above can be used to add a custom event listener that invokes a callback method as follows:
```javascript
var jsonData = new { type="callback", eventname = "dataPlotClick", fn = "function() {console.log('I am a callback function')}" };
await fusionChartsService.CallFusionChartsFunction("addEventListener", "CHART_ID", jsonData);
```
The code snipped below demonstrates the callback method implementation upon the event trigger. 

```javascript
if (args.length > 0 && args[0].type === CALLBACK) {
    let { event, fn } = args[0];
    let callbackFn = parseFunction(null, fn);
    result = currentChart[functionName].call(currentChart, event, callbackFn);

    return String(result);
  }
```

### Time-Series Method
The `setDataStore()` method is used in TimeSeries and FusionGrid to take data and schema as input from the external files and create a data source and data table to render the chart.

Initially, an empty data source is created in the `Index.razor` file as shown:
```javascript
myDataSource.data = new {};
```

To read the contents of the external data and schema files, use the snippet below:
```javascript
String dataFilePath = "./data.json";
String schemeFilePath = "./schema.json";
String dataContent = File.ReadAllText(dataFilePath);
String schemaContent = File.ReadAllText(schemeFilePath);

await fusionChartsService.setDataStore("chartId", dataContent, schemaContent);
```

Upon invoking the `setDataStore()` method, it leads to the below code snippet in the `FusionChartsService.cs` file, which in turn invokes another user-defined method in the `blazor-fusioncharts.js`:
```javascript
public async Task setDataStore(String id, params object[] args){
  await _jsruntime.InvokeVoidAsync("FusionCharts.setDataStore", id, args);
}
```

Finally, the functionality of `setDataStore` is implemented in the `blazor-fusioncharts.js` file.
The code includes creating a new data store and parsing data and schema to json. A new data table is created with the data and schema and rendered to the chart.
```javascript
window.FusionCharts.setDataStore = (id, args) =>  {

    let currentChart = FusionCharts(id);
    let fusionDataStore = new FusionCharts.DataStore();

    let data = JSON.parse(args[0]);
    let schema = JSON.parse(args[1]);

    let fusionTable = fusionDataStore.createDataTable(data, schema);

    currentChart.setChartData({data: fusionTable});
};
```

### Resize Method
The `resizeTo()` method resizes the chart to the specified width and height. While invoking the method, there is a circular json object exception due to which it will throw an error inside the generic method.

In order to mitigate the issue of circular deps in the FusionCharts, you can add the method definition where no data is returned back to the JS environment. This is caused because certain methods return JSON, which contain circular deps in FusionCharts, and serializing a circular deps JSON is not possible.

This method is invoked in the `Index.razor` file directly as below: 
```javascript 
await fusionChartsService.resizeTo("chartId", 450, 500);
```

It then leads to the `FusionChartsService.cs` file, invoking the method that will not return anything as the returned object json has circular references.
```javascript 
public async Task resizeTo(String id, params object[] args){
            await _jsruntime.InvokeVoidAsync("FusionCharts.resizeTo", id, args);
        }
```

The actual implementation is in the `blazor-fusioncharts.js` file, which invokes the resizeTo method with the height and width parameters.
```javascript 
window.FusionCharts.resizeTo = (id, args) => {
  let currentChart = FusionCharts(id);
  currentChart.resizeTo(args[0], args[1]);
};
```
