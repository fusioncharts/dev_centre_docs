---
title: Line and Spline charts | FusionCharts
description: This article outlines the steps of how to create the line and spline charts
heading: Line and Spline charts
---

## Line Chart

Now, let's learn how to create a Line chart. We will create a chart showcasing "Total Footfall in Bakersfield Central". 

The data is shown in the table below:

| Day       | Footfall |
| --------- | -------- |
| Monday    | 15123    |
| Tuesday   | 14233    |
| Wednesday | 23507    |
| Thursday  | 9110     |
| Friday    | 15529    |
| Saturday  | 20803    |
| Sunday    | 19202    |

The chart will look as shown below:

{% embed_chart fusioncharts-net-line-sample-example-1.js %}

Click [here](https://dotnetfiddle.net/uJZgOU) to edit the line chart.

## Render the Chart

Create the `LineChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Retrieve data using database query.
* Set server name.
* Set `DataBase` name.
* Connect with `DataBase` using a connection string.
* Create `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate Line Chart.
* Set Chart's width and height.
* Set `DataModel` instance as the data source of the chart.
* Set Chart title.
* Finally, use a container using `<div>` to render the chart.

The code is shown below:

```csharp
using FusionCharts.DataEngine;
using FusionCharts.Visualization;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class SeriesCustomization : System.Web.UI.Page
    {
        public ActionResult Index()
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Day", typeof(System.String));
            ChartData.Columns.Add("No. of Visitors", typeof(System.Double));
            ChartData.Rows.Add("Mon", 15123);
            ChartData.Rows.Add("Tue", 14233);
            ChartData.Rows.Add("Wed", 23507);
            ChartData.Rows.Add("Thu", 9110);
            ChartData.Rows.Add("Fri", 15529);
            ChartData.Rows.Add("Sat", 20803);
            ChartData.Rows.Add("Sun", 19202);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);

            Charts.LineChart line = new Charts.LineChart("line_chart_db");

            line.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            line.Width.Pixel(700);
            line.Height.Pixel(400);

            line.Data.Source = model;

            line.Caption.Text = "Total Footfall in BakersField Central";
            line.Caption.Bold = true;

            line.SubCaption.Text = "Last Week";
            line.XAxis.Text = "Day";
            line.YAxis.Text = "No. of visitors";

            line.Legend.Show = false;
            line.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            ViewData["Chart"] = line.Render();
            return View();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LineChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.LineChart" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>

<script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
   
    <form id="form1" runat="server">
        <div>
            <asp:Literal ID="Literal1" runat="server"></asp:Literal>
        </div>
        <div>
            <input type ="button" value ="Samples" onclick="location.href = 'Index.aspx';" />
        </div>
    </form>
</body>
</html>

```
## Scroll Line Chart

Now, let's learn how to create a Scrollable Line Chart. The chart will look as shown below:

{% embed_chart standard-charts-scroll-charts-example-2.js %}

Click [here](https://dotnetfiddle.net/Irr2ht) to edit the scroll line chart.

## Render the Chart

Create the `ScrollLineChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` .dll files.
* Create `DataTable`.
* Retrieve data using database query.
* Set `serverName`.
* Set `DataBase` name.
* Connect with `DataBase` using a `connectionstring`.
* Create `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate `column` chart.
* Set chart width.
* Set chart height.
* Set the `Scrollable` property of the chart to `true`.
* Set `DataModel` instance as the data source of the chart.
* Set chart title.
* Finally, use a container using `<div>` to render the chart.

The code is shown below:

```csharp
using FusionCharts.DataEngine;
using FusionCharts.Visualization;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FusionChartsVisualisationWebFormsSamples.Samples 
{
    public partial class ScrollChart : System.Web.UI.Page 
    {
        public ActionResult Index()
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Day", typeof(System.String));
            ChartData.Columns.Add("No. of Visitors", typeof(System.Double));
            ChartData.Rows.Add("Mon", 15123);
            ChartData.Rows.Add("Tue", 14233);
            ChartData.Rows.Add("Wed", 23507);
            ChartData.Rows.Add("Thu", 9110);
            ChartData.Rows.Add("Fri", 15529);
            ChartData.Rows.Add("Sat", 20803);
            ChartData.Rows.Add("Sun", 19202);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);

            Charts.SplineChart spline = new Charts.SplineChart("spline_chart");

            spline.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            spline.Width.Pixel(700);
            spline.Height.Pixel(400);

            spline.Data.Source = model;

            spline.Caption.Text = "Total Footfall in BakersField Central";
            spline.Caption.Bold = true;

            spline.SubCaption.Text = "Last Week";
            spline.XAxis.Text = "Day";
            spline.YAxis.Text = "No. of visitors";

            spline.Legend.Show = false;
            
            ViewData["Chart"] = spline.Render();
            return View();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ScrollLineChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.ScrollLineChart" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <form id="form1" runat="server">
        <div>
            <asp:Literal ID ="Literal1" runat ="server"></asp:Literal>
        </div>
        <div>
            <input type ="button" value ="Samples" onclick="location.href = 'Index.aspx';" />
        </div>
    </form>
</body>
</html>
```
## Spline Chart

Now, let's learn how to create a spline chart with the same data. The code remains the same as that of the Line chart. The only difference is instead of instantiating a line chart you have to instantiate a spline chart. Create a `splineChart.aspx.cs` and refer to the code below:

```csharp
using FusionCharts.DataEngine;
using FusionCharts.Visualization;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class SeriesCustomization : System.Web.UI.Page
    {
        public ActionResult Index()
        {
            DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Day", typeof(System.String));
            ChartData.Columns.Add("No. of Visitors", typeof(System.Double));
            ChartData.Rows.Add("Mon", 15123);
            ChartData.Rows.Add("Tue", 14233);
            ChartData.Rows.Add("Wed", 23507);
            ChartData.Rows.Add("Thu", 9110);
            ChartData.Rows.Add("Fri", 15529);
            ChartData.Rows.Add("Sat", 20803);
            ChartData.Rows.Add("Sun", 19202);
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);

            Charts.SplineChart spline = new Charts.SplineChart("spline_chart");

            spline.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            spline.Width.Pixel(700);
            spline.Height.Pixel(400);

            spline.Data.Source = model;

            spline.Caption.Text = "Total Footfall in BakersField Central";
            spline.Caption.Bold = true;

            spline.SubCaption.Text = "Last Week";
            spline.XAxis.Text = "Day";
            spline.YAxis.Text = "No. of visitors";

            spline.Legend.Show = false;
            
            ViewData["Chart"] = spline.Render();
            return View();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="splineChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.splineChart" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
   
    <form id="form1" runat="server">
        <div>
            <asp:Literal ID="Literal1" runat="server"></asp:Literal>
        </div>
        <div>
            <input type ="button" value ="Samples" onclick="location.href = 'Index.aspx';" />
        </div>
    </form>
</body>
</html>
```

The chart will look as shown below:

{% embed_chart fusioncharts-net-spline-sample-example-2.js %}

Click [here](https://dotnetfiddle.net/hnbWR6) to edit the spline chart.