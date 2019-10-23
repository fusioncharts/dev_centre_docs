---
title: Overlapped charts | FusionCharts
description: This article outlines the steps to create overlapped charts
heading: Overlapped Charts
---

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
* Add two columns and multiple rows to the `DataTable`.
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `StaticSource` as data source to the `DataModel`.
* Instantiate column or bar chart.
* Set chart `width` and `height`.
* Set the type of column or bar chart as `overlapped`.
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