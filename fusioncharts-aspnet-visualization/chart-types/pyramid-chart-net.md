---
title: Pyramid chart | FusionCharts
description: This article outlines the steps to create pyramid chart
heading: Pyramid chart
---

Now, let's learn how to create a Pyramid chart. We will create a funnel chart showcasing the Global Wealth Pyramid.

The chart will look as shown below:

{% embed_chart standard-charts-pyramid-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/aCkWm8) to edit the pyramid chart.

## Render the Chart

Create the `PyramidChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Retrieve data using database query.
* Set server name.
* Set `DataBase` name.
* Connect with `DataBase` using a connection string.
* Create `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate Pyramid Chart.
* Set chart width and height.
* Set `DataModel` instance as the data source of the chart.
* Set Chart Title.
* Finally, use a container using `<div>` to render the chart.

The code is shown below:

```csharp
using FusionCharts.Visualization;
using FusionCharts.DataEngine;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class PyramidChart : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Create data table
            DataTable ChartData = new DataTable();

            // Retrieve data using database query
            string query = "select [Population], [Global Wealth] from dbo.GlobalWealth";
            string connetionString = null;

            // Servevr name
            string serverName = "FusionChartsServer";

            // DataBase name
            string databaseName = "FusionChartsSamplesDB";
            ChartData.Clear();

            // Connection string
            connetionString = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=True;";

            using (SqlConnection con = new SqlConnection(connetionString))
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
            Widget.PyramidChart pyramid = new Widget.PyramidChart("first_pyramid_chart");
            pyramid.Data.Source = model;
            pyramid.Caption.Text = "Global Wealth Pyramid";
            pyramid.Caption.OnTop = false;
            pyramid.SubCaption.Text = "Credit Suisse 2013";
            pyramid.Width = "400";
            pyramid.Height = "500";
            Literal1.Text = pyramid.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PyramidChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.PyramidChart" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
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