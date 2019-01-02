---
title: Area chart | FusionCharts
description: This article outlines the steps of how to create the area chart.
heading: Area chart
---

Now, let's learn how to create an Area Chart. We will create an Area chart showing "Weekly Liquor Sales". The data will look as shown below:

Day|Sales(in USD)
-|-
Monday|4123
Tuesday|4633
Wednesday|5507
Thursday|4910
Friday|5529
Saturday|5803
Sunday|6202

The chart will look as shown below:

{% embed_chart fusioncharts-net-visulization-area-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/EUQZGN) to edit the spline chart.

## Render the Chart

Create the `AreaChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Retrieve data using database query.
* Set server name.
* Set `DataBase` name.
* Connect with `DataBase` using a connection string.
* Create `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate Area Chart.
* Set chart width and height.
* Set `DataModel` instance as the data source of the chart.
* Set chart caption.
* Finally, use a container using `<div>` to render the chart.

The code is shown below:

```aspnet
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
    public partial class SeriesCustomization : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            DataTable ChartData = new DataTable();
            string query = "select * from LiquorSales";
            string connectionString = null;
            string serverName = "FusionChartsServer";
            string databaseName = "FusionchartsSamplesDB";
            ChartData.Clear();
            connectionString = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=True;";
            using (SqlConnection con = new SqlConnection(connectionString))
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
            Charts.AreaChart area = new Charts.AreaChart("area_chart_db");
            area.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            area.Width = "700";
            area.Height = "400";
            area.Data.Source = model;
            area.Caption.Text = "Sales of Liquor";
            area.Caption.Bold = true;
            area.SubCaption.Text = "Last week";
            area.XAxis.Text = "Day";
            area.YAxis.Text = "Sales";
            area.Legend.Show = false;
            Literal1.Text = area.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="areaChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.areaChart" %>

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