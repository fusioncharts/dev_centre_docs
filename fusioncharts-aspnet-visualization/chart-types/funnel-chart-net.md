---
title: Funnel chart | FusionCharts
description: This article outlines the steps to create funnel chart
heading: Funnel chart
---

Now, let's learn how to create a Funnel chart. We will create a chart showcasing the purchase-conversion analysis ofa a website. The data will look as shown below:

**Table**

The chart will look as shown below:

{% embed_all standard-charts-funnel-chart-example-1.js %}

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

```

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

    public partial class FunnelChart : System.Web.UI.Page

    {

        protected void Page_Load(object sender, EventArgs e)

        {

            DataTable primaryData = new DataTable();

            primaryData.Columns.Add("Country", typeof(System.String));

            primaryData.Columns.Add("Population", typeof(System.Double));

            primaryData.Rows.Add("China", 1415045928);

            primaryData.Rows.Add("India", 1354051854);

            primaryData.Rows.Add("United states", 326766748);

            primaryData.Rows.Add("Indonesia", 266794980);

            primaryData.Rows.Add("Brazil", 210867954);

            primaryData.Rows.Add("Pakistan", 200813818);

            primaryData.Rows.Add("Nigeria", 195875237);

            primaryData.Rows.Add("Bangladesh", 166368149);

            primaryData.Rows.Add("Russia", 143964709);

            primaryData.Rows.Add("Mexico", 130759074);

            StaticSource source = new StaticSource(primaryData);

            DataModel model = new DataModel();

            model.DataSources.Add(source);

            Widget.FunnelChart Funnel = new Widget.FunnelChart("first_Funnel_chart");

            Funnel.Data.Source = model;

            Funnel.Caption.Text = "Visit to purchase analysis";

            Literal1.Text = Funnel.Render();

        }

    }

}

```

The `.aspx` template for the above sample is shown below:

``` 

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

