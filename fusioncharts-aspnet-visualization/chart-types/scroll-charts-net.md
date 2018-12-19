---
title: Scroll charts | FusionCharts
description: This article outlines the steps to create scroll charts
heading: Scroll charts
---

## Scroll Column chart

Now, let's learn how to create a Scrollable Column Chart. We will create a chart showcasing sales trends of a company in the Financial Year 2016-17. The data will look as shown below:

<<Table>>

The chart will look as shown below:

<<Live Chart>>

## Render the Chart

Create the `ScrollColumnChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` .dll files.

* Create `DataTable`.

* Retrieve data using database query.

* Set `serverName`.

* Set `DataBase` name.

* Connect with `DataBase` using a `connectionString`.

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

    public partial class ScrollChart : System.Web.UI.Page

    {

        protected void Page_Load(object sender, EventArgs e)

        {

            DataTable dt = new DataTable();

            string query = "select * from CompanyWiseYearlySales";

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

            Charts.ColumnChart column = new Charts.ColumnChart("scroll_chart_db");

            column.Scrollable = true;

            column.Data.Source = model;

            Literal1.Text = column.Render();

        }

    }

}

```

The `.aspx` template for the above sample is shown below:

```

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

## Scroll Line Chart

Now, let's learn how to create a Scrollable Line Chart. The chart will look as shown below:

<<Live Chart>>

## Render the Chart

Create the `ScrollLineChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files.

* Create `DataTable`.

* Retrieve data using database query.

* Set `serverName`.

* Set `DataBase` name.

* Connect with `DataBase` using a `connectionString`.

* Create `StaticSource` using the `DataTable`.

* Create an instance of `DataModel` class.

* Add `DataSource` to the `DataModel`.

* Instantiate `line` chart.

* Set chart width.

* Set chart height.

* Set the `Scrollable` property of the chart to `true`.

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

    public partial class ScrollChart : System.Web.UI.Page

    {

        protected void Page_Load(object sender, EventArgs e)

        {

            DataTable dt = new DataTable();

            string query = "select * from CompanyWiseYearlySales";

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

            Charts.LineChart line = new Charts.LineChart("scroll_chart_db");

            line.Scrollable = true;

            line.Data.Source = model;

            Literal1.Text = line.Render();

        }

    }

}

```

The `.aspx` template for the above sample is shown below:

```

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ScrollLineChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.ScrollLineChart" %>

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

## Scroll Area Chart

Now, let's learn how to create a Scrollable Area Chart. The code remains the same as that of the scroll line chart. The only difference is instead of instantiating a linne chart you have to instantiate an area chart. Create a `ScrollAreaChart.aspx.cs` and refer to the code below:

## Render the Chart

```
            StaticSource source = new StaticSource(dt);
            DataModel model = new DataModel();
            model.DataSources.Add(source);
            Charts.AreaChart area = new Charts.AreaChart("scroll_chart_db");
            area.Scrollable = true;
            area.Data.Source = model;
            Literal1.Text = area.Render();

        }

    }

}

```

The `.aspx` template for the above sample is shown below:

```

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ScrollAreaChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.ScrollAreaChart" %>

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

The chart is shown below:

<<LIVE CHART>>

