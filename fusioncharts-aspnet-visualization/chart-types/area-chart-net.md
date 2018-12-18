---
title: Area chart | FusionCharts
description: This article outlines the steps of how to create the area chart
heading: Area chart
---

Now, let's learn how to create an Area Chart. We will use the same data of "Most Popular Programming Language". The data will look as shown below:


Programming Language|Number of Users|
-|-
Java|62000|
Python|46000|
Javascript|38000|
C++|31000|
C#|27000|
PHP|14000|
Perl|14000|

To Render this data we will use the Area Chart. The chart will look as shown below:

{% embed_chart standard-charts-line-area-and-column-charts-example-6.js %}

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

            Charts.areaChart area = new Charts.areaChart("area_chart_db");

            area.ThemeName = FusionChartsTheme.ThemeName.Fusion;

            area.Width = "1000";

            area.Height = "600";

            area.Data.Source = model;

area.Caption.Text = "Most popular programming language";

            Literal1.Text = area.Render();

        }

    }

}

```

The `.aspx` template for the above sample is shown below:

``` 

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="areaChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.areaChart" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">

    <title></title>

</head>

<body>

    <script type="text/javascript" src="//cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>

   

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

