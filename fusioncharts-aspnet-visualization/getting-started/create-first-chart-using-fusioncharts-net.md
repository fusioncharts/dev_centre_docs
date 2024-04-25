---
title: Create Your First Chart | FusionCharts
description: Create your first chart easily with FusionCharts.NET. Customize data, set titles, and render charts seamlessly. Elevate your data visualization game now!
heading: Create Your First Chart
---

Let's create a Column 2D chart showing the "Most popular programming language".

The chart will look as shown below:

{% embed_chart fusioncharts-net-visualization-first-chart-example-1.js %}

Click [here](https://dotnetfiddle.net/Dw6gBV) to edit the column chart.

The data for the above chart is shown in the table below:

| Programming Language | Users |
| -------------------- | ----- |
| Java                 | 62000 |
| Python               | 46000 |
| JavaScript           | 38000 |
| C++                  | 31000 |
| C#                   | 27000 |
| PHP                  | 14000 |
| Perl                 | 14000 |

Now that you have the tabular data ready, let's see how to render the chart.

## Render the chart

Create the `FirstChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* 
* Create a `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add two columns and multiple rows to the `DataTable`.
* Add `DataSource` to the `DataModel`.
* Instantiate Column Chart
* Set chart width and height
* Set `DataModel` instance as the data source of the chart.
* Optionally, set chart title, subtitle, X-axis text, and Y-axis text.
* Optionally, set the chart theme as `fusion`.
* Return the chart rendering configuration into the server side literal, or set the chart configuration as `Literal.text`.

The code is shown below:

```csharp
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
           DataTable ChartData = new DataTable();
            ChartData.Columns.Add("Programming Language", typeof(System.String));
            ChartData.Columns.Add("Users", typeof(System.Double));
            ChartData.Rows.Add("Java",62000);
            ChartData.Rows.Add("Python",46000);
            ChartData.Rows.Add("Javascript",38000);
            ChartData.Rows.Add("C++",31000);
            ChartData.Rows.Add("C#",27000);
            ChartData.Rows.Add("PHP",14000);
            ChartData.Rows.Add("Perl",14000);

            // Create static source with this data table
            StaticSource source = new StaticSource(ChartData);
            // Create instance of DataModel class
            DataModel model = new DataModel();
            // Add DataSource to the DataModel
            model.DataSources.Add(source);
            // Instantiate Column Chart
            Charts.ColumnChart column = new Charts.ColumnChart("first_chart");
            // Set Chart's width and height
            column.Width.Pixel(700);
            column.Height.Pixel(400);
            // Set DataModel instance as the data source of the chart
            column.Data.Source = model;
            // Set Chart Title
            column.Caption.Text = "Most popular programming language";
            // Sset chart sub title
            column.SubCaption.Text = "2017-2018";
            
            // set XAxis Text
            column.XAxis.Text = "Programming Language";
            // Set YAxis title
            column.YAxis.Text = "User";
            column.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            // Render the chart to 'Literal1' literal control
            Literal1.Text = column.Render();
        }
    }
}
```

The `.aspx` template for the above sample is shown below:

```html
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

That's it! Your first chart is ready.

You can download the samples for **FusionCharts.NET** from [here](https://github.com/fusioncharts/fusioncharts.net-core-sample).
