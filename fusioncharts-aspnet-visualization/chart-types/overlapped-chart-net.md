---
title: Overlapped charts | FusionCharts
description: This article outlines the steps to create overlapped charts
heading: Overlapped Charts
---

Now, let's learn how to create an Overlapped Chart. We will create a chart showcasing number of produts sold in a superstore for the year 2016-2017.  The data will look as shown below:

<<Table>>

The chart will look as shown below:

<<Live Chart>>

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

    public partial class OverlappedChart : System.Web.UI.Page

    {

        protected void Page_Load(object sender, EventArgs e)

        {

            DataTable dt = new DataTable();

            string query = "select CategoryName, SUM([Stocked Quantity])as [Stocked Quantity],SUM([Reorder Level]) as [Reorder Level], SUM([Order Quantity]) as [Order Quantity] from CategoryOrderedLevel group by CategoryName";

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

            Charts.ColumnChart column = new Charts.ColumnChart("overlapped_chart_db");

            column.Overlapped = true;

            column.Data.Source = model;

            column.Caption.Text = "Amount of products sold";

            column.SubCaption.Text = "2016-2017";

            Literal1.Text = column.Render();

        }

    }

}

The `.aspx` template for the above sample is shown below:

```

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

