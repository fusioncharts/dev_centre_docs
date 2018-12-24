---
title: Column and Bar charts | FusionCharts
description: This article outlines the steps to create column and Bar charts
heading: Column and Bar charts
---

Let's create a Column 2D chart showing the "Most popular programming language".

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-first-chart-example-1.js %}

The data for the above chart is shown in the table below:

Programming Language|Users|
-|-
Java|62000|
Python|46000|
Javascript|38000|
C++|31000|
C#|27000|
PHP|14000|
Perl|14000|

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

```aspnet
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
            string connetionString = null;

            // Servevr name
            string serverName = "FusionChartsServer";

            // DataBase name
            string databaseName = "FusionChartsSamplesDB";
            primaryData.Clear();

            // Connection string
            connetionString = "Data Source=" + serverName + ";Initial Catalog=" + databaseName + ";Trusted_Connection=True;";

            using (SqlConnection con = new SqlConnection(connetionString))
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
            column.Width = "700";
            column.Height = "400";
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

## Bar Chart

Now, let's learn how to create a bar chart with the same data. The code remains the same as that of the column chart. The only difference is instead of instantiating a column chart you have to instantiate a bar chart. Create a `barChart.aspx.cs` and refer to the code below:

``` 
// Create static source with this data table
StaticSource source = new StaticSource(primaryData);

// Create instance of DataModel class
DataModel model = new DataModel();

// Add DataSource to the DataModel
model.DataSources.Add(source);

// Instantiate bar Chart
Charts.barChart bar = new Charts.barChart("bar_chart");

// Set Chart's width and height
bar.Width = 500;
bar.Height = 400;

// Set DataModel instance as the data source of the chart
bar.Data.Source = model;

// Set Chart Title
bar.Caption.Text = "Most popular programming language";

// Render the chart to 'barChartLiteral' literal control
Literal1.Text = bar.Render();
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