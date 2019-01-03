---
title: Funnel chart | FusionCharts
description: This article outlines the steps to create funnel chart
heading: Funnel chart
---

Now, let's learn how to create a Funnel chart. We will create a chart showcasing the purchase-conversion analysis ofa a website. The data will look as shown below:

Wesite Sections|Website Visits
-|-
Unique Website Visits|1460000
Programme Details Section Visits|930000
Attempts to Register|540000
Successful Registrations|210000
Logged In|190000
Purchased on Introductory Offers|120000

The chart will look as shown below:

{% embed_chart standard-charts-funnel-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/FWAZel) to edit the funnel chart.

## Render the Chart

Create the `FunnelChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Retrieve data using database query.
* Set server name.
* Set `DataBase` name.
* Connect with `DataBase` using a connection string.
* Create `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate Funnel Chart.
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
namespace FusionChartsVisualisationWebFormsSamples.Samples {
    public partial class FunnelChart : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            // Create data table
            DataTable primaryData = new DataTable();

            // Retrieve data using database query
            string query = "select [Website Sections], [Website Visits] from dbo.WebsiteVisits";
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
            Charts.FunnelChart funnel = new Charts.FunnelChart("first_Funnel_chart");
            funnel.Data.Source = model;
            funnel.Caption.Text = "Visit to purchase analysis";
            funnel.Caption.Text = "Harry's Supermart";
            funnel.SubCaption.Text = "Visit to purchase- Conversion Anallysis for last year";
            funnel.Width = "600";
            funnel.Height = "400";
            Literal1.Text = funnel.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FunnelChart.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.FunnelChart" %>
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