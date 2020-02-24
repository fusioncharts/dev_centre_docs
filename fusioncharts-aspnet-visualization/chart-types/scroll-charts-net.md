---
title: Scroll charts | FusionCharts
description: This article outlines the steps to create scroll charts
heading: Scroll charts
---

## Scroll Column chart

Now, let's learn how to create a Scrollable Column Chart. We will create a chart showcasing sales trends of a company in the Financial Year 2016-17. The data will look as shown below:

| Month    | Sales |
| -------- | ----- |
| Jan 2016 | 27400 |
| Feb 2016 | 29800 |
| Mar 2016 | 25800 |
| Apr 2016 | 26800 |
| May 2016 | 29600 |
| Jun 2016 | 32600 |
| Jul 2016 | 31800 |
| Aug 2016 | 36700 |
| Sep 2016 | 29700 |
| Oct 2016 | 31900 |
| Nov 2016 | 34800 |
| Dec 2016 | 24800 |
| Jan 2017 | 26300 |
| Feb 2017 | 31800 |
| Mar 2017 | 30900 |
| Apr 2017 | 33000 |
| May 2017 | 36200 |
| Jun 2017 | 32100 |
| Jul 2017 | 37500 |
| Aug 2017 | 38500 |
| Sep 2017 | 35400 |
| Oct 2017 | 38200 |
| Nov 2017 | 33300 |
| Dec 2017 | 38300 |

The chart will look as shown below:

{% embed_chart standard-charts-scroll-charts-example-1.js %}

Click [here](https://dotnetfiddle.net/TeDjsE) to edit the scroll column chart.

## Render the Chart

Create the `ScrollColumnChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Add two columns and multiple rows to the `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `StaticSource` as data source to the `DataModel`.
* Instantiate `column` chart.
* Set chart `width` and `height`.
* Set the `Scrollable` property of the chart to `true`.
* Set `DataModel` instance as the data source of the chart.
* Optionally, set chart title, subtitle, X-axis text, and Y-axis text.
* Optionally, set the chart theme as `fusion`.
* Return the chart rendering configuration into the server side literal, or set the chart configuration as `Literal.text`.

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

namespace FusionChartsVisualisationWebFormsSamples.Samples {
    public partial class ScrollChart : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            string query = "select * from MonthlyRevenue";
            string connectionstring = null;
            string serverName = "FusionChartsServer";
            string databaseName = "FusionchartsSamplesDB";
            ChartData.Clear();
            connectionstring = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=true;";
            using (SqlConnection con = new SqlConnection(connectionstring))
            {
                con.Open();
                using (SqlCommand command = new SqlCommand(query, con))
                using (SqlDataAdapter da = new SqlDataAdapter(command))
                {
                    da.Fill(ChartData);
                }
            }
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Charts.ColumnChart column = new Charts.ColumnChart("scroll_chart_db");
            column.Scrollable = true;
            column.Data.Source = model;
            column.Caption.Text = "Sales Trends";
            column.SubCaption.Text = "2016-2017";
            column.XAxis.Text = "Month";
            column.YAxis.Text = "Revenue";
            column.Width.Pixel(600);
            column.Height.Pixel(500);
            Literal1.Text = column.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
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

## Scroll Line Chart

Now, let's learn how to create a Scrollable Line Chart. The chart will look as shown below:

{% embed_chart standard-charts-scroll-charts-example-2.js %}

Click [here](https://dotnetfiddle.net/Irr2ht) to edit the scroll line chart.

## Render the Chart

Create the `ScrollLineChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Add two columns and multiple rows to the `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `StaticSource` as data source to the `DataModel`.
* Instantiate `line` chart.
* Set chart `width` and `height`.
* Set the `Scrollable` property of the chart to `true`.
* Set `DataModel` instance as the data source of the chart.
* Optionally, set chart title, subtitle, X-axis text, and Y-axis text.
* Optionally, set the chart theme as `fusion`.
* Return the chart rendering configuration into the server side literal, or set the chart configuration as `Literal.text`.

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

namespace FusionChartsVisualisationWebFormsSamples.Samples {
    public partial class ScrollChart : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            string query = "select * from MonthlyRevenue";
            string connectionstring = null;
            string serverName = "FusionChartsServer";
            string databaseName = "FusionchartsSamplesDB";
            ChartData.Clear();
            connectionstring = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=true;";
            using (SqlConnection con = new SqlConnection(connectionstring))
            {
                con.Open();
                using (SqlCommand command = new SqlCommand(query, con))
                using (SqlDataAdapter da = new SqlDataAdapter(command))
                {
                    da.Fill(ChartData);
                }
            }
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Charts.LineChart line = new Charts.LineChart("scroll_chart_db");
            line.Scrollable = true;
            line.Data.Source = model;
            line.Caption.Text = "Sales Trends";
            line.SubCaption.Text = "2016-2017";
            line.XAxis.Text = "Month";
            line.YAxis.Text = "Revenue";
            line.Width.Pixel(600);
            line.Height.Pixel(500);
            Literal1.Text = line.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
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

## Scroll Area Chart

Now, let's learn how to create a Scrollable Area Chart. The code remains the same as that of the scroll line chart. The only difference is instead of instantiating a line chart you have to instantiate an area chart. 

## Render the Chart

Create a `ScrollAreaChart.aspx.cs` and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Add two columns and multiple rows to the `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `StaticSource` as data source to the `DataModel`.
* Instantiate `area` chart.
* Set chart `width` and `height`.
* Set the `Scrollable` property of the chart to `true`.
* Set `DataModel` instance as the data source of the chart.
* Optionally, set chart title, subtitle, X-axis text, and Y-axis text.
* Optionally, set the chart theme as `fusion`.
* Return the chart rendering configuration into the server side literal, or set the chart configuration as `Literal.text`.

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

namespace FusionChartsVisualisationWebFormsSamples.Samples {
    public partial class ScrollChart : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable ChartData = new DataTable();
            string query = "select * from MonthlyRevenue";
            string connectionstring = null;
            string serverName = "FusionChartsServer";
            string databaseName = "FusionchartsSamplesDB";
            ChartData.Clear();
            connectionstring = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=true;";
            using (SqlConnection con = new SqlConnection(connectionstring))
            {
                con.Open();
                using (SqlCommand command = new SqlCommand(query, con))
                using (SqlDataAdapter da = new SqlDataAdapter(command))
                {
                    da.Fill(ChartData);
                }
            }
            StaticSource source = new StaticSource(ChartData);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Charts.AreaChart area = new Charts.AreaChart("scroll_chart_db");
            area.Scrollable = true;
            area.Data.Source = model;
            area.Caption.Text = "Sales Trends";
            area.SubCaption.Text = "2016-2017";
            area.XAxis.Text = "Month";
            area.YAxis.Text = "Revenue";
            area.Width.Pixel(600);
            area.Height.Pixel(500);
            Literal1.Text = area.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
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

The chart is shown below:

{% embed_chart standard-charts-scroll-charts-example-3.js %}

Click [here](https://dotnetfiddle.net/TFomJU) to edit the scroll area chart.
