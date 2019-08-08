---
title: Column and Bar charts | FusionCharts
description: This article outlines the steps to create column and Bar charts
heading: Column and Bar charts
---

Let's create a Column 2D chart showing the "Most popular programming language".

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-first-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/nVVeWE) to edit the column chart.

The data for the above chart is shown in the table below:

| Programming Language | Users |
| -------------------- | ----- |
| Java                 | 62000 |
| Python               | 46000 |
| Javascript           | 38000 |
| C++                  | 31000 |
| C#                   | 27000 |
| PHP                  | 14000 |
| Perl                 | 14000 |

Now that you have the tabular data ready, let's see how to render the chart.

## Render the chart

Create the `FirstChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Retrieve data using database query.
* Set server name.
* Set `DataBase` name.
* Connect with `DataBase` using a connection string.
* Create `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate Column Chart
* Set Chart's width and height
* Set `DataModel` instance as the data source of the chart.
* Set Chart Title.
* Finally, use a container using `<div>` to render the chart.

The code is shown below:

```csharp
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FusionCharts.DataEngine;
using FusionCharts.Visualization;

namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class FirstChart: System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           // Create data table
            DataTable primaryData = new DataTable();

            // Retrieve data using database query
            string query = "select [Languages], [User] from dbo.UserPerLanguage";
            string connetionstring = null;

            // Servevr name
            string serverName = "FusionChartsServer";

            // DataBase name
            string databaseName = "FusionChartsSamplesDB";
            primaryData.Clear();

            // Connection string
            connetionstring = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=true;";

            using (SqlConnection con = new SqlConnection(connetionstring))
            {
                con.Open();
                using (SqlCommand command = new SqlCommand(query, con))
                using (SqlDataAdapter da = new SqlDataAdapter(command))
                {
                    da.Fill(primaryData);
                }
            }
            // Create static source with this data table
            StaticSource source = new StaticSource(primaryData);
            // Create instance of DataModel class
            DataModel model = new DataModel();
            // Add DataSource to the DataModel
            model.DataSources.Add(source);
            // Instantiate Column Chart
            Charts.ColumnChart column = new Charts.ColumnChart("first_chart");
            // Set Chart's width and height
            column.Width.Pixel(700);
            column.Height.Pixel(400);
            // Set DataModel instance as the data source of the chart
            column.Data.Source = model;
            // Set Chart Title
            column.Caption.Text = "Most popular programming language";
            // hide chart Legend
            column.Legend.Show = false;
            // set XAxis Text
            column.XAxis.Text = "Programming Language";
            // Set YAxis title
            column.YAxis.Text = "User";
            // Render the chart to 'Literal1' literal control
            Literal1.Text = column.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FirstChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.FirstChart" %>

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
           </form>
</body>
</html>
```

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
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ScrollColumnChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.ScrollColumnChart" %>
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

## Overlapped charts

Now, let's learn how to create an Overlapped Chart. We will create a chart showcasing Major League Baseball Rankings. The data will look as shown below:

| Teams              | Matches | Wins |
| ------------------ | ------- | ---- |
| Boston Red Sox     | 88      | 57   |
| New York Yankees   | 84      | 54   |
| Tampa Bay Rays     | 86      | 42   |
| Toronto Blue Jays  | 86      | 39   |
| Baltimore Orioles  | 85      | 24   |
| Cleveland Indians  | 85      | 46   |
| Detroit Tigers     | 88      | 38   |
| Minnesota Twins    | 83      | 35   |
| Chicago White Sox  | 86      | 29   |
| Kansas City Royals | 86      | 25   |

The chart will look as shown below:

{% embed_chart fusioncharts-net-overlapped-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/LPXGzz) to edit the overlapped chart.

## Render the Chart

Create the `OverlappedChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files.
* Create `DataTable`.
* Retrieve data using database query.
* Set server name.
* Set DataBase name.
* Connect with DataBase using a connection string.
* Create `StaticSource` using the data table.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate column or bar chart.
* Set chart width.
* Set chart height.
* Set the type of column or bar chart as overlapped.
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

namespace FusionChartsVisualisationWebFormsSamples.Samples {
    public partial class OverlappedChart : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            DataTable ChartData = new DataTable();
            string query = "select * from RankingTable";
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
            Charts.BarChart OverlappedBar = new Charts.BarChart("overlapped_chart_db");
            OverlappedBar.Overlapped = true;
            OverlappedBar.Data.Source = model;
            OverlappedBar.Caption.Text = "Major League Baseball - Season Rankings";
            OverlappedBar.SubCaption.Text = "Teams in the Lead";
            OverlappedBar.Caption.Text = "Major league Baseball-Season Rankings";
            OverlappedBar.SubCaption.Text = "Teams in the lead";
            OverlappedBar.XAxis.Text = "Position";
            OverlappedBar.YAxis.Text = "Team";
            OverlappedBar.Width.Pixel(700);
            OverlappedBar.Height.Pixel(400);
            Literal1.Text = OverlappedBar.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="OverlappedChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.OverlappedChart" %>

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
    </form>
</body>
</html>
```

## Bar Chart

Now, let's learn how to create a bar chart with the same data. The code remains the same as that of the column chart. The only difference is instead of instantiating a column chart you have to instantiate a bar chart. Create a `barChart.aspx.cs` and refer to the code below:

```csharp
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using FusionCharts.DataEngine;
using FusionCharts.Visualization;

namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class FirstChart: System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           // Create data table
            DataTable primaryData = new DataTable();

            // Retrieve data using database query
            string query = "select [Languages], [User] from dbo.UserPerLanguage";
            string connetionstring = null;

            // Servevr name
            string serverName = "FusionChartsServer";

            // DataBase name
            string databaseName = "FusionChartsSamplesDB";
            primaryData.Clear();

            // Connection string
            connetionstring = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=true;";

            using (SqlConnection con = new SqlConnection(connetionstring))
            {
                con.Open();
                using (SqlCommand command = new SqlCommand(query, con))
                using (SqlDataAdapter da = new SqlDataAdapter(command))
                {
                    da.Fill(primaryData);
                }
            }
            // Create static source with this data table
            StaticSource source = new StaticSource(primaryData);

            // Create instance of DataModel class
            DataModel model = new DataModel();

            // Add DataSource to the DataModel
            model.DataSources.Add(source);

            // Instantiate bar Chart
            Charts.BarChart bar = new Charts.BarChart("bar_chart");

            // Set Chart's width and height
            bar.Width.Pixel(500);
            bar.Height.Pixel(400);

            // Set DataModel instance as the data source of the chart
            bar.Data.Source = model;

            // Set Chart Title
            bar.Caption.Text = "Most popular programming language";

            // Render the chart to 'barChartLiteral' literal control
            Literal1.Text = bar.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

``` 

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="barChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.barChart" %>

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

{% embed_chart fusioncharts-net-visualization-bar-chart-example-2.js %}

Click [here](https://dotnetfiddle.net/Jog8RJ) to edit the bar chart.