---
title: Combination Charts | FusionCharts
description: This article outlines the steps to create combination charts
heading: Combination Charts
---

Combination charts can be rendered either in 2D or 3D, can have single or dual y-axes and can be scrollable in nature. Let's learn how to create combination charts.

In this page, we will learn how to create the following combination charts:

* 2D Single Y-axis Combination Chart

* 3D Single Y-axis Combination Chart

* 2D Dual Y-axis Combination Chart

* Scroll Combination 2D Chart (Single Y)

* Scroll Combination 2D Chart (Dual Y)

## 2D Single Y-axis Combination Chart

Now, let's learn how to create a 2D single y-axis combination chart. We will create a chart to showcase the comparison of actual revenue, projected revenue and the profit earned for each month of last year. All three metrics have been plotted using different chart types - the actual revenue earned is plotted using a **column** chart, the projected revenue is plotted using a **line** chart, and the profit earned is plotted using an **area** chart.

The data for the chart is shown in the table below:

| Month     | Actual Revenue | Projected Revenue | Profit |
| --------- | -------------- | ----------------- | ------ |
| January   | 16000          | 15000             | 4000   |
| February  | 20000          | 16000             | 5000   |
| March     | 18000          | 17000             | 3000   |
| April     | 19000          | 18000             | 4000   |
| May       | 15000          | 19000             | 1000   |
| June      | 21000          | 19000             | 7000   |
| July      | 16000          | 19000             | 1000   |
| August    | 20000          | 19000             | 4000   |
| September | 17000          | 20000             | 1000   |
| October   | 25000          | 21000             | 8000   |
| November  | 19000          | 22000             | 2000   |
| December  | 23000          | 23000             | 7000   |



The chart will look as shown below:

<Live Chart>

Click here to edit the above combination chart.

### Render the chart

Create the `mscombi2d.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 

* Create `DataTable`.

* Retrieve data using a database query.

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

CODE

```

The `.aspx` template for the above sample is shown below:

```

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="mscombi2d.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.mscombi2d" %>

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

## 3D Single Y-axis Combination Chart

Now, let's learn how to create a 3D single y-axis combination chart with the same data. The code remains the same as that of the above chart. The only difference is instead of instantiating a 2D chart you have to instantiate a 3D chart. 

Create a mscombi3d.aspx.cs and refer to the code below:

The code is shown below:

```

CODE

```

The `.aspx` template for the above sample is shown below:

```

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="mscombi3d.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.mscombi3d" %>

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

## 2D Dual Y-axis Combination Chart

Now, let's create a dual y-axis combination chart in 2D. In this chart, we will show a comparison between the revenue, profit, and the profit percentage. The revenue and the profit will be shown as the amount in dollars using the **primary y-axis**, and the profit percentage will be shown in percentage using the **secondary y-axis**.

The data for the chart is shown in the table below:


| Month     | Revenues | Profits | Profit % |
| --------- | -------- | ------- | -------- |
| January   | 16000    | 4000    | 25       |
| February  | 20000    | 5000    | 25       |
| March     | 18000    | 3000    | 16.66    |
| April     | 19000    | 4000    | 21.05    |
| May       | 15000    | 1000    | 6.66     |
| June      | 21000    | 7000    | 33.33    |
| July      | 16000    | 1000    | 6.25     |
| August    | 20000    | 4000    | 25       |
| September | 17000    | 1000    | 5.88     |
| October   | 22000    | 8000    | 36.36    |
| November  | 19000    | 2000    | 10.52    |
| December  | 23000    | 7000    | 30.43    |



The chart will look as shown below:

<Live Chart>

Click here to edit the above combination chart.

Create a mscombidy2d.aspx.cs and refer to the code below:

The code is shown below:

```

CODE

```

The `.aspx` template for the above sample is shown below:

```

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="mscombidy2d.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.mscombidy2d" %>

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

## Scroll Combination 2D Chart (Single Y)

Now, let's create a scroll combination 2D chart to plot the **revenue** and the **profit** earned, in dollars, and the **profit** for Financial year 2017 to 2018.

The data for the chart is shown in the table below:


| Month           | Actual Revenue | Projected Revenue | Profit |
| --------------- | -------------- | ----------------- | ------ |
| January, 2017   | 16000          | 15000             | 4000   |
| February, 2017  | 20000          | 16000             | 5000   |
| March, 2017     | 18000          | 17000             | 3000   |
| April, 2017     | 19000          | 18000             | 4000   |
| May, 2017       | 15000          | 19000             | 1000   |
| June, 2017      | 21000          | 19000             | 7000   |
| July, 2017      | 16000          | 19000             | 1000   |
| August, 2017    | 20000          | 19000             | 4000   |
| September, 2017 | 17000          | 20000             | 1000   |
| October, 2017   | 25000          | 21000             | 8000   |
| November, 2017  | 19000          | 22000             | 2000   |
| December, 2017  | 23000          | 23000             | 7000   |
| January, 2018   | 22000          | 24000             | 6000   |
| February, 2018  | 25000          | 22000             | 5000   |
| March, 2018     | 21000          | 23000             | 7000   |
| April, 2018     | 23000          | 25000             | 8000   |
| May, 2018       | 27000          | 22000             | 8000   |
| June, 2018      | 26000          | 20000             | 9000   |
| July, 2018      | 24000          | 24000             | 7000   |
| August, 2018    | 28000          | 25000             | 10000  |
| September, 2018 | 26000          | 27000             | 9000   |
| October, 2018   | 27000          | 24000             | 7000   |
| November, 2018  | 29000          | 23000             | 8000   |
| December, 2018  | 26000          | 25000             | 11000  |



The chart will look as shown below:

<Live Chart>

Click here to edit the above combination chart.

Create a scrollcombi2d.aspx.cs and refer to the code below:

The code is shown below:

```

CODE

```

The `.aspx` template for the above sample is shown below:

```

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="scrollcombi2d.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.scrollcombi2d" %>

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

## Scroll Combination 2D Chart (Dual Y)

Now, let's create a dual y-axis scroll combination 2D chart. Here we will plot the **revenue** and the **profit** earned, in dollars, and the **profit percent** for Financial year 2017 to 2018.

The data for the chart is shown in the table below:


| Month           | Actual Revenue | Profit | Profit Percent |
| --------------- | -------------- | ------ | -------------- |
| January, 2017   | 16000          | 4000   | 25             |
| February, 2017  | 20000          | 5000   | 25             |
| March, 2017     | 18000          | 3000   | 16.66          |
| April, 2017     | 19000          | 4000   | 21.05          |
| May, 2017       | 15000          | 1000   | 6.66           |
| June, 2017      | 21000          | 7000   | 33.33          |
| July, 2017      | 16000          | 1000   | 6.25           |
| August, 2017    | 20000          | 4000   | 25             |
| September, 2017 | 17000          | 1000   | 5.88           |
| October, 2017   | 25000          | 8000   | 36.36          |
| November, 2017  | 19000          | 2000   | 10.52          |
| December, 2017  | 23000          | 7000   | 30.43          |
| January, 2018   | 22000          | 6000   | 25             |
| February, 2018  | 25000          | 5000   | 28             |
| March, 2018     | 21000          | 7000   | 15.38          |
| April, 2018     | 23000          | 8000   | 20.83          |
| May, 2018       | 27000          | 8000   | 15.79          |
| June, 2018      | 26000          | 9000   | 40.91          |
| July, 2018      | 24000          | 7000   | 11.11          |
| August, 2018    | 28000          | 10000  | 31.58          |
| September, 2018 | 26000          | 9000   | 9.09           |
| October, 2018   | 27000          | 7000   | 33.33          |
| November, 2018  | 29000          | 8000   | 17.39          |
| December, 2018  | 26000          | 11000  | 25             |



The chart will look as shown below:

<Live Chart>

Click here to edit the above combination chart.

Create a scrollcombidy2d.aspx.cs and refer to the code below:

The code is shown below:

```

CODE

```

The `.aspx` template for the above sample is shown below:

```

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="scrollcombidy2d.aspx.cs" Inherits="FusionChartsVisualisationWebFormsSamples.Samples.scrollcombidy2d" %>

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

