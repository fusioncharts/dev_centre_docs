---
title: Stacked charts | FusionCharts
description: This article outlines the steps to create stacked charts
heading: Stacked charts
---

Now, let's learn how to create a Stacked Chart. We will create a chart showcasing revenue split for each quarter of the current year by product category - food products and non-food products. The data will look as shown below:

<table>
    <tr>
        <th>Quarter</th>
        <th>Product Type</th>
        <th>Revenue(in USD)</th>
    </tr>
    <tr>
        <td>Q1</td>
        <td>Food Products</td>
        <td>11000</td>
    </tr>
    <tr>
        <td>    </td>
        <td>Non-Food Products</td>
        <td>11400</td>
    </tr>
    <tr>
        <td>Q2</td>
        <td>Food Products</td>
        <td>15000</td>
    </tr>
    <tr>
        <td>    </td>
        <td>Non-Food Products</td>
        <td>14800</td>
    </tr>
    <tr>
        <td>Q3</td>
        <td>Food Products</td>
        <td>13500</td>
    </tr>
    <tr>
        <td>    </td>
        <td>Non-Food Products</td>
        <td>8300</td>
    </tr>
    <tr>
        <td>Q4</td>
        <td>Food Products</td>
        <td>15000</td>
    </tr>
    <tr>
        <td>    </td>
        <td>Non-Food Products</td>
        <td>11800</td>
    </tr>
</table>

The chart will look as shown below:

{% embed_chart standard-charts-stacked-charts-example-1.js %}

## Render the Chart

Create the `StackedChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Retrieve data using database query.
* Set server name.
* Set `DataBase` name.
* Connect with `DataBase` using a connection string.
* Create `StaticSource` using the data table.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate Stacked Chart.
* Set chart width.
* Set chart height.
* Set the type of stacked chart as `BAR`, `COLUMN`, or `AREA`.
* Set `DataModel` instance as the data source of the chart.
* Set Chart title.
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
    public partial class StackedChart : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            DataTable dt = new DataTable();
            string query = "select Country,COUNT([Product Type]) as [Product Types],SUM([Ordered quantity]) as [Ordered quantity] from ProductOrderedQuantity group by Country";
            string connetionString = null;
            string serverName = "FusionChartsServer";
            string databaseName = "FusionchartsSamplesDB";
            dt.Clear();
            connetionString = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=True;";
            using (SqlConnection con = new SqlConnection(connetionString))
            {
                con.Open();
                using (SqlCommand command = new SqlCommand(query, con))
                using (SqlDataAdapter da = new SqlDataAdapter(command))
                {
                    da.Fill(dt);
                }
            }
            StaticSource source = new StaticSource(dt);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Charts.StackedChart stack = new Charts.StackedChart("stacked_chart_db");
            stack.Width = "700";
            stack.Height = "400";
            stack.StackType = Charts.StackedChart.StackChartType.BAR;
            stack.Data.Source = model;
            Literal1.Text = stack.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="StackedChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.StackedChart" %>
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