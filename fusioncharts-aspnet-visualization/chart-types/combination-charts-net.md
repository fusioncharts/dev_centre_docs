---
title: Combination Charts | FusionCharts
description: This article outlines the steps to create combination charts
heading: Combination Charts
---

Combination charts can be rendered either in 2D or 3D, can have single or dual y-axes and can be scrollable in nature. Let's learn how to create combination charts.

In this page, we will learn how to create the following combination charts:

* 2D Single Y-axis Combination Chart

* 3D Single Y-axis Combination Chart

* Scroll Combination 2D Chart

## 2D Single Y-axis Combination Chart

Now, let's learn how to create a 2D single y-axis combination chart. We will create a chart to showcase the comparison of actual revenue, projected revenue and the profit earned for each month of last year. All three metrics have been plotted using different chart types - the actual revenue earned is plotted using a **column** chart, the projected revenue is plotted using a **line** chart, and the profit earned is plotted using an **area** chart.

The data for the chart is shown in the table below:

| Month     | Actual Revenue | Projected Revenue | Profit |
| --------- | -------------- | ----------------- | ------ |
| January   | 16000          | 15000             | 4000   |
| February  | 20000          | 16000             | 5000   |
| March     | 18000          | 17000             | 3000   |
| April     | 19000          | 18000             | 4000   |
| May       | 15000          | 19000             | 1000   |
| June      | 21000          | 19000             | 7000   |
| July      | 16000          | 19000             | 1000   |
| August    | 20000          | 19000             | 4000   |
| September | 17000          | 20000             | 1000   |
| October   | 25000          | 21000             | 8000   |
| November  | 19000          | 22000             | 2000   |
| December  | 23000          | 23000             | 7000   |

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-combination2d.js %}

### Render the chart

Create the `mscombi2d.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 

* Create `DataTable`.

* Retrieve data using a database query.

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
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace TestProject
{
    public partial class TestPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // initialixe DataModel object
            DataModel model = new DataModel();
            // Create object of JsonFileSource. Provide file path as constructor parameter
            JsonFileSource jsonFileSource = new JsonFileSource(Server.MapPath("DataSources\\mscombi2d.json"));
            // Add json source in datasources store of model
            model.DataSources.Add(jsonFileSource);
            // initialize combination chart object
            Charts.CombinationChart combiChart= new Charts.CombinationChart("mscombi2d");
            // set model as data source
            combiChart.Data.Source = model;
            // provide field name, which should be rendered as line column
            combiChart.Data.ColumnPlots("Actual Revenue");
            // provide field name, which should be rendered as line plot
            combiChart.Data.LinePlots("Projected Revenue");
            // provide field name, which should be rendered as area plot
            combiChart.Data.AreaPlots("Profit");
            // Set XAxis caption
            combiChart.XAxis.Text = "Month";
            // Set YAxis caption
            combiChart.PrimaryYAxis.Text = "Amount (in USD)";
            // set chart caption
            combiChart.Caption.Text = "Harrys's Supermart";
            // Set chart sub caption
            combiChart.SubCaption.Text = "Sales analysis of last year";
            // set width, height
            combiChart.Width.Pixel(600);
            combiChart.Height.Pixel(500);
            // set theme
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render chart
            Literal1.Text = combiChart.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CombinationChart.aspx.cs" Inherits="TestProject.TestPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
</head>
<body>
    <script>
       
    </script>
    <form id="form1" runat="server">
        <div>
            <asp:Literal ID="Literal1" runat="server"></asp:Literal>
            
        </div>
    </form>
</body>
</html>
```

## 3D Single Y-axis Combination Chart

Now, let's learn how to create a 3D single y-axis combination chart with the same data. The code remains the same as that of the above chart. The only difference is instead of instantiating a 2D chart you have to instantiate a 3D chart. 

Create a `mscombi3d.aspx.cs` and refer to the code below:

The code is shown below:

```csharp
using FusionCharts.DataEngine;
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
using System.Net;
using System.Text;

namespace TestProject
{
    public partial class TestPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // initialixe DataModel object
            DataModel model = new DataModel();
            // Create object of JsonFileSource. Provide file path as constructor parameter
            JsonFileSource jsonFileSource = new JsonFileSource(Server.MapPath("DataSources\\mscombi3d.json"));
            // Add json source in datasources store of model
            model.DataSources.Add(jsonFileSource);
            // initialize combination chart object
            Charts.CombinationChart combiChart= new Charts.CombinationChart("mscombi3d");
            // Set threeD
            combiChart.ThreeD = true;
            // set model as data source
            combiChart.Data.Source = model;
            // provide field name, which should be rendered as line column
            combiChart.Data.ColumnPlots("Actual Revenue");
            // provide field name, which should be rendered as line plot
            combiChart.Data.LinePlots("Projected Revenue");
            // provide field name, which should be rendered as area plot
            combiChart.Data.AreaPlots("Profit");
            // Set XAxis caption
            combiChart.XAxis.Text = "Month";
            // Set YAxis caption
            combiChart.PrimaryYAxis.Text = "Amount (in USD)";
            // set chart caption
            combiChart.Caption.Text = "Harrys's Supermart";
            // Set chart sub caption
            combiChart.SubCaption.Text = "Sales analysis of last year";
            // set width, height
            combiChart.Width.Pixel(600);
            combiChart.Height.Pixel(500);
            // set theme
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render chart
            Literal1.Text = combiChart.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CombinationChart.aspx.cs" Inherits="TestProject.TestPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
</head>
<body>
    <script>
       
    </script>
    <form id="form1" runat="server">
        <div>
            <asp:Literal ID="Literal1" runat="server"></asp:Literal>
            
        </div>
    </form>
</body>
</html>
```

The chart looks like as shown below:

{% embed_chart fusioncharts-net-visualization-combination3d.js %}

## Scroll Combination 2D Chart

Now, let's create a scroll combination 2D chart to plot the **revenue** and the **profit** earned, in dollars, and the **profit** for Financial year 2017 to 2018.

The data for the chart is shown in the table below:

| Month           | Actual Revenue | Projected Revenue | Profit |
| --------------- | -------------- | ----------------- | ------ |
| January, 2017   | 16000          | 15000             | 4000   |
| February, 2017  | 20000          | 16000             | 5000   |
| March, 2017     | 18000          | 17000             | 3000   |
| April, 2017     | 19000          | 18000             | 4000   |
| May, 2017       | 15000          | 19000             | 1000   |
| June, 2017      | 21000          | 19000             | 7000   |
| July, 2017      | 16000          | 19000             | 1000   |
| August, 2017    | 20000          | 19000             | 4000   |
| September, 2017 | 17000          | 20000             | 1000   |
| October, 2017   | 25000          | 21000             | 8000   |
| November, 2017  | 19000          | 22000             | 2000   |
| December, 2017  | 23000          | 23000             | 7000   |
| January, 2018   | 22000          | 24000             | 6000   |
| February, 2018  | 25000          | 22000             | 5000   |
| March, 2018     | 21000          | 23000             | 7000   |
| April, 2018     | 23000          | 25000             | 8000   |
| May, 2018       | 27000          | 22000             | 8000   |
| June, 2018      | 26000          | 20000             | 9000   |
| July, 2018      | 24000          | 24000             | 7000   |
| August, 2018    | 28000          | 25000             | 10000  |
| September, 2018 | 26000          | 27000             | 9000   |
| October, 2018   | 27000          | 24000             | 7000   |
| November, 2018  | 29000          | 23000             | 8000   |
| December, 2018  | 26000          | 25000             | 11000  |

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-combination-scroll2d.js %}

Create a `scrollcombi2d.aspx.cs` and refer to the code below:

The code is shown below:

```csharp
using FusionCharts.DataEngine;
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
using System.Net;
using System.Text;

namespace TestProject
{
    public partial class TestPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // initialixe DataModel object
            DataModel model = new DataModel();
            // Create object of JsonFileSource. Provide file path as constructor parameter
            JsonFileSource jsonFileSource = new JsonFileSource(Server.MapPath("DataSources\\scrollcombi2d.json"));
            // Add json source in datasources store of model
            model.DataSources.Add(jsonFileSource);
            // initialize combination chart object
            Charts.CombinationChart combiChart= new Charts.CombinationChart("scrollcombi2d");
            // set model as data source
            combiChart.Data.Source = model;
            // enable scrolling
            combiChart.Scrollable = true;
            // provide field name, which should be rendered as line column
            combiChart.Data.ColumnPlots("Actual Revenue");
            // provide field name, which should be rendered as spline area plot
            combiChart.Data.LinePlots("Projected Revenue");
            // provide field name, which should be rendered as spline plot
            combiChart.Data.AreaPlots("Profit");
            // Set XAxis caption
            combiChart.XAxis.Text = "Month";
            // Set YAxis caption
            combiChart.PrimaryYAxis.Text = "Amount (in USD)";
            // enable dual y
            combiChart.DualY = true;
            // set secondary y axis text
            combiChart.SecondaryYAxis.Text = "Profit %";
            // set chart caption
            combiChart.Caption.Text = "Revenues and Profit";
            // Set chart sub caption
            combiChart.SubCaption.Text = "For last year";
            // set width, height
            combiChart.Width.Pixel(600);
            combiChart.Height.Pixel(500);
            // set theme
            combiChart.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render chart
            Literal1.Text = combiChart.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CombinationChart.aspx.cs" Inherits="TestProject.TestPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
</head>
<body>
    <script>
       
    </script>
    <form id="form1" runat="server">
        <div>
            <asp:Literal ID="Literal1" runat="server"></asp:Literal>
            
        </div>
    </form>
</body>
</html>
```