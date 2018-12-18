---
title: Pie and Doughnut charts | FusionCharts
description: This article outlines the steps of how to create the pie and doughnut charts
heading: Pie and Doughnut charts
---

Now, let's learn how to create a Pie chart. We will use the same data of "Most Popular Programming Language". The data will look as shown below:

Programming Language|Number of Users|
-|-
Java|62000|
Python|46000|
Javascript|38000|
C++|31000|
C#|27000|
PHP|14000|
Perl|14000|

To Render this data we will use the Pie Chart. The chart will look as shown below:

<Live Chart>

## Render the Chart

Create the `PieChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 

* Create `DataTable`.

* Retrieve data using database query.

* Set server name.

* Set `DataBase` name.

* Connect with `DataBase` using a connection string.

* Create `StaticSource` using the `DataTable`.

* Create an instance of `DataModel` class.

* Add `DataSource` to the `DataModel`.

* Instantiate Pie Chart.

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
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FusionChartsVisualisationWebFormsSamples.Samples
{
    public partial class ThreeDChart : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Create data table
            DataTable primaryData = new DataTable();
            
            // Retrieve data using database query
            string query = "select [languages], [User] from dbo.UserPerLanguage";
            string connectionString = null;
            
            // Servevr name
            string serverName = "FusionChartsServer";
            
            // DataBase name
            string databaseName = "FusionChartsSamplesDB";
            primaryData.Clear();
            
            // Connection string
            connectionString = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=True;";

            using (SqlConnection con = new SqlConnection(connectionString))
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
            // Instantiate Pie Chart
            Charts.PieChart pie = new Charts.PieChart("pie_chart");
            // Set Chart's width and height
            pie.Width = 500;
            pie.Height = 400;
            // Set DataModel instance as the data source of the chart
            pie.Data.Source = model;
            // Set Chart Title
            pie.Caption.Text = "Most popular programming language";
            // Render the chart to 'PieChartLiteral' literal control
            Literal1.Text = pie.Render();
            
          
        }
    }
}

```

The `.aspx` template for the above sample is shown below:

``` 
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PieChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.PieChart" %>

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

## Doughnut Chart

Now, let's learn how to create a doughnut chart with the same data. The code remains the same as that of the Pie chart. The only difference is instead of instantiating a pie chart you have to instantiate a doughnut chart. Create a `doughnutChart.aspx.cs` and refer to the code below:

``` 
// Create static source with this data table
            StaticSource source = new StaticSource(primaryData);
            // Create instance of DataModel class
            DataModel model = new DataModel();
            // Add DataSource to the DataModel
            model.DataSources.Add(source);
            // Instantiate doughnut Chart
            Charts.doughnutChart doughnut = new Charts.doughnutChart("doughnut_chart");
            // Set Chart's width and height
            doughnut.Width = 500;
            doughnut.Height = 400;
            // Set DataModel instance as the data source of the chart
            doughnut.Data.Source = model;
            // Set Chart Title
            doughnut.Caption.Text = "Most popular programming language";
            // Render the chart to 'doughnutChartLiteral' literal control
            Literal1.Text = doughnut.Render();

```

The `.aspx` template for the above sample is shown below:

``` 

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="doughnutChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.doughnutChart" %>

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

To render this data we will use the doughnut Chart. The chart will look as shown below:

<Live Chart>



