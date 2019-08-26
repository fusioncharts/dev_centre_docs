---
title: Create Time-series chart | FusionCharts
description: This article outlines the steps to create time-series chart.
heading: Create Time-series chart
---

Let's create a time-series chart showing the **Online sales of a SuperStore**.

The chart will look as shown below:

{% embed_ftChart online-sales-single-series %}

The data for the above chart is shown in the table below:

| Time     | Sales   |
| -------- | ------- |
| 1/4/2011 | 16.448  |
| 1/5/2011 | 272.736 |
| 1/5/2011 | 11.784  |
| 1/5/2011 | 3.54    |
| 1/6/2011 | 19.536  |
| 1/7/2011 | 2573.82 |
| 1/7/2011 | 609.98  |

## Render the Chart

Now that you have the data handy, let's build the chart.

Create the `DataHandler.ashx` file and do the following:

- Include the `FusionCharts.DataEngine.dll` file.

- Include the `FusionCharts.Visualization.dll` file.

- Set response content type as "application/json".

- Create an object of the `MsSqlClass`.

- Create an object of the `DataModel` class.

- Add the object of `MsSqlClass` to the data source of data model.

- Convert the model to a data format the time series can accept.

- Write the converted data into a JSON file.

Refer to the code given below:

```csharp
using FusionCharts.DataEngine;
using FusionCharts.Visualization;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace TestProject.DataSources
{
    public class FirstChartData : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            // set response type
			context.Response.ContentType = "application/json";

            // create object of MsSqlClass
			MsSqlClass msSql = new MsSqlClass("POUSHALI-PC\\SHAREPOINT", "AdventureWorks2008", FusionCharts.DataBaseClass.SourceType.QUERY, "select [Sell Date], [Total Sales] from Production.Product");

            // create object of DataModel class
			DataModel model = new DataModel();

			// add data sources to model
			model.DataSources.Add(msSql);

			// convert model to time series acceptable data format
			// write the converted data in json
            context.Response.Write(TimeSeriesData.RenderCompatibleDataInJson(model));
        }
        public bool IsReusable {
            get{
                return false;
            }
        }
    }
}
```

Next, create the FirstTimeSeries.cs file and do the following:

- Include the FusionCharts.Visualization .dll file.

- Initialize the `TimeSeriesChart` object of the `Charts` class.

- Provide the data handler filename ("DataHandler.ashx") as the value of the `SourcePathHandler` property of the `Data` object of the `timeSeries` class.

- Provide the value of the `Render()` method to the `Text` property of `Literal1`.

```csharp
using FusionCharts.Visualization;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;

namespace TestProject
{
    public partial class FirstTimeSeries: System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Charts.TimeSeriesChart timeSeries = new Charts.TimeSeriesChart("first_timeseries");
            timeSeries.Data.SourcePathHandler = "DataHandler.ashx";
            Literal1.Text = timeSeries.Render();
        }
    }
}
```

Next, open the `FirstTimeSeries.aspx` file and add the following line to it:

`<asp:Literal ID="Literal1" runat="server"></asp:Literal>`

Refer to the code given below:

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head runat="server">
    <title></title>
    <script
      type="text/javascript"
      src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"
    ></script>
    <script
      type="text/javascript"
      src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"
    ></script>

    <script
      type="text/javascript"
      src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"
    ></script>
  </head>

  <body>
    <script></script>

    <form id="form1" runat="server">
      <div>
        <asp:Literal ID="Literal1" runat="server"></asp:Literal>
      </div>
    </form>
  </body>
</html>
```

## Handling Time-Series data

The timeseries chart can deal with very large sets of data, but having too many values in your data can drastically slow down chart rendering on the browser. To counter this, the timeseries chart is designed to receive data as response through the generic handler.

In the generic handler, create an instance of the FusionCharts DataModel and apply any operation if you need. Then call the static method `RenderCompatibleDataInJson` of `TimeSeriesData` class and pass your DataModel instance as parameter. This method will return a JSON with the schema and the data. Write this JSON in your page response. After getting the JSON, the chart rendering engine will extract data and schema, and build a timeseries-compatible JSON for you.

Refer to the code given below:

```csharp
/* create DataModel instance */
DataModel model = new DataModel();

/* create instance of MsSqlClass */
MsSqlClass msSql = new MsSqlClass("server","database",FusionCharts.DataBaseClass.SourceType.QUERY,"query");

/* add msSql object to DataSources of model */
model.DataSources.Add(msSql);

/* Want to apply operations */
/* optional */
/* create object of GroupColumn class */

GroupColumn groupColumn = new GroupColumn
{
       {"SellStartDate",GroupColumn.DateGrouping.YEAR },
       {"Color" }
};

/* create object of Aggregation class */
Aggregation aggregation = new Aggregation
{
       {"UnitPrice",Aggregation.Function.MAX },
       {"OrderQty",Aggregation.Function.COUNT }
 };

/* apply GroupingWithAggregation() operation followed by TopRecords() */
DataModel groupingWithAggregation = model.GroupingWithAggregation(groupColumn, aggregation).TopRecords(20);

/* invoke RenderCompatibleDataInJson() static method of  TimeSeriesData class*/
/* it will return a JSON */
/* write the JSON as page response */
 context.Response.Write(TimeSeriesData.RenderCompatibleDataInJson(groupingWithAggregation));
```

> You can use Generic Handler page(.ashx) in web form application as well as MVC application.

In MVC application, if you want to fetch data through **controller** instead of creating a generic handler, do the following:

```csharp
/* create the controller */
public ActionResult TimeSeriesDataHandler() {

/* create DataModel instance */ 
DataModel model = new DataModel();
/* create instance of MsSqlClass */
MsSqlClass msSql = new MsSqlClass("server","database",FusionCharts.DataBaseClass.SourceType.QUERY,"query");
/* add msSql object to DataSources of model */
 model.DataSources.Add(msSql);
/* Want to apply operations */
/* optional */
/* create object of GroupColumn class */
GroupColumn groupColumn = new GroupColumn {
       {"SellStartDate",GroupColumn.DateGrouping.YEAR },
       {"Color" }
};

/* create object of Aggregation class */
Aggregation aggregation = new Aggregation {
       {"UnitPrice",Aggregation.Function.MAX },
       {"OrderQty",Aggregation.Function.COUNT }
};

/* apply GroupingWithAggregation() operation followed by TopRecords() */
DataModel groupingWithAggregation = model.GroupingWithAggregation(groupColumn, aggregation).TopRecords(20);

/* invoke RenderCompatibleDataInJson() static method of  TimeSeriesData class*/
/* it will return a json, return this json from your controller */
return Content(TimeSeriesData.RenderCompatibleDataInJson(model), "text/json");
}
```

Now pass the path of this handler page or controller name(MVC) in the `SourcePathHandler` property (which accepts a string) of `Data` object.

```csharp
timeSeries.Data.SourcePathHandler = "/path/to/local/DataSourceHandler.ashx";
```
