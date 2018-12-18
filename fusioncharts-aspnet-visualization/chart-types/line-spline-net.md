---
title: Line and Spline charts | FusionCharts
description: This article outlines the steps of how to create the line and spline charts
heading: Line and Spline charts
---

Now, let's learn how to create a Line chart. We will create a chart showcasing "Total Footfall in Bakersfield Central". 

The data is shown in the table below:

**TABLE**

The chart will look as shown below:

{% embed_all standard-charts-line-area-and-column-charts-example-5.js %}

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

```
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
        protected void Page_Load(object sender, EventArgs e)
        {
            DataTable dt = new DataTable();
            string query = "select * from MonthlyProductSales";
            string connectionString = null;
            string serverName = "FusionChartsServer";
            string databaseName = "FusionchartsSamplesDB";
            dt.Clear();
            connectionString = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=True;";

            using (SqlConnection con = new SqlConnection(connectionString))
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

            Charts.LineChart line = new Charts.LineChart("line_chart_db");

            line.ThemeName = FusionChartsTheme.ThemeName.Fusion;
            line.Width = “1000”;
            line.Height = “600”;

            line.Data.Source = model;
            
            line.Caption.Text = "Total Footfall in BakersField Central";
            
            Literal1.Text = line.Render();
        }
    }
}

```

The `.aspx` template for the above sample is shown below:

``` 
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

## Spline Chart

Now, let's learn how to create a spline chart with the same data. The code remains the same as that of the Line chart. The only difference is instead of instantiating a line chart you have to instantiate a spline chart. Create a `splineChart.aspx.cs` and refer to the code below:

``` 
// Create static source with this data table
            StaticSource source = new StaticSource(primaryData);
            // Create instance of DataModel class
            DataModel model = new DataModel();
            // Add DataSource to the DataModel
            model.DataSources.Add(source);
            // Instantiate spline Chart
            Charts.splineChart spline = new Charts.splineChart("spline_chart");
            // Set Chart's width and height
            spline.Width = 500;
            spline.Height = 400;
            // Set DataModel instance as the data source of the chart
            spline.Data.Source = model;
            // Set Chart Title
            spline.Caption.Text = "Total Footfall in Bakersfield Central";
            // Render the chart to 'splineChartLiteral' literal control
            Literal1.Text = spline.Render();

```

The `.aspx` template for the above sample is shown below:

``` 

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

<Live Chart>