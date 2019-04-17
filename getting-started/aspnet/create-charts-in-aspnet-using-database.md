---
title: Create Charts in ASP.Net using Database | FusionCharts
description: This section showcases how you can do this using the FusionCharts ASP.NET wrapper to create a multi-series line chart by fetching data from a database.
heading: Create Charts in ASP.Net using Database
chartPresent: true
---

> ### FusionCharts.NET
>
> We have released FusionCharts.NET which brings the seamless support of FusionCharts JavaScript charting library to Microsoft .NET Framework. [Download](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net) it now to take advantage of the following powerful features:
>
> - Provide raw data and FusionCharts.NET automatically converts the data into JSON.
> - Dynamically slice and dice data to derive insights using the [data engine](/fusioncharts-aspnet-visualization/data-engine/data-engine-overview).
> - All methods and properties are available in Visual Studio intellisense.
> - ...and many more.
>   Get it now. Click [here](/fusioncharts-aspnet-visualization/getting-started/install-fusioncharts-net)!

In addition to directly specifying the chart data (or the URL for the file in which the chart data is stored) directly in the JSON/XML code, you can also fetch data for the chart from a database.

This section showcases how you can do this using the FusionCharts ASP.NET wrapper to create a multi-series line chart by fetching data from a database.

> Although you can create all FusionCharts chart types using this method, in this section we will focus on only this one example these two examples.

> Before you begin, make sure that you have copied the <a href="https://github.com/fusioncharts/asp-net-wrapper/tree/master/DLLFile" target="_blank">**FusionCharts.dll**</a> file in the **Bin** folder of your web application.

## Creating a Multi-series Line Chart

A multi-series line chart that shows the factory output by quantity for three factories is shown below:

{% embed_chart using-with-server-side-languages-asp-net-creating-charts-with-data-from-a-database-example-1.js %}

Assume that you have a **factoryDB** database with the **factory_output** table that shows the number of units produced by three factories daily, from January 1, 2003 to January 20, 2003. In this example, you will be shown how you can use the FusionCharts ASP.NET wrapper and fetch data from this database to create the above multi-series line chart.

The data structure that goes into the **../DBExample/MSCharts.aspx** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<pre><code class="language-aspnet">
	&lt;%@ Page Language=&quot;C#&quot; AutoEventWireup=&quot;true&quot; CodeFile=&quot;MSCharts.aspx.cs&quot; Inherits=&quot;DBExample_MSCharts&quot; %&gt;

    &lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;
    &lt;html&gt;
        &lt;head&gt;
    		&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot; /&gt;
    		&lt;title&gt;FusionCharts - Simple&lt;/title&gt;
    		&lt;!-- FusionCharts script tag --&gt;
    		&lt;script type=&quot;text/javascript&quot; src=&quot;../fusioncharts/fusioncharts.js&quot;&gt;&lt;/script&gt;
    		&lt;!-- End --&gt;
    	&lt;/head&gt;
    	&lt;body&gt;
    	  &lt;div style=&quot;text-align:center&quot;&gt;
    	      &lt;asp:Literal ID=&quot;Literal1&quot; runat=&quot;server&quot;&gt;&lt;/asp:Literal&gt;
    	  &lt;/div&gt;
    	&lt;/body&gt;
    &lt;/html&gt;

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab xml-tab'>
<pre><code class="language-aspnet">
	&lt;%@ Page Language=&quot;VB&quot; AutoEventWireup=&quot;false&quot; CodeFile=&quot;index.aspx.vb&quot; Inherits=&quot;Samples_DBExample_index&quot; %&gt;

    &lt;!DOCTYPE html&gt;
    &lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
    &lt;head runat=&quot;server&quot;&gt;
    	&lt;title&gt;FusionCharts with Database&lt;/title&gt;
    	&lt;script type=&quot;text/javascript&quot; src=&quot;../../fusioncharts/fusioncharts.js&quot;&gt;&lt;/script&gt;
    	&lt;!-- End --&gt;
    &lt;/head&gt;
    &lt;body&gt;
      Fusioncharts will render below
      &lt;div style=&quot;text-align:center&quot;&gt;
          &lt;asp:Literal ID=&quot;Literal1&quot; runat=&quot;server&quot;&gt;&lt;/asp:Literal&gt;
      &lt;/div&gt;
    &lt;/body&gt;
    &lt;/html&gt;

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>

The data structure that goes into the code behind **../DBExample/MSCharts.aspx.cs** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
<pre><code class="language-aspnet">
  using System;
  using System.Collections;
  using System.Configuration;
  using System.Data;
  using System.Web;
  using System.Web.Security;
  using System.Web.UI;
  using System.Web.UI.HtmlControls;
  using System.Web.UI.WebControls;
  using System.Web.UI.WebControls.WebParts;

// Use the `FusionCharts.Charts` namespace to be able to use classes and methods required to // create charts.
using FusionCharts.Charts;

using System.Text;
using System.Data.Odbc;
using DataConnection;
using System.Data.OleDb;

public partial class DBExample_MSCharts: System.Web.UI.Page {
protected void Page_Load(object sender, EventArgs e)

      {
          // Create the `xmlData` StringBuilder object to store the data fetched
          //from the database as a string.
          StringBuilder xmlData = new StringBuilder();

          // Initialize the chart-level attributes and append them to the
          //`xmlData` StringBuilder object.

          xmlData.Append(&quot;&lt;chart caption='Factory Output report' subCaption='By Quantity' showBorder='1' formatNumberScale='0' rotatelabels='1' showvalues='0'&gt;&quot;);

          // Initialize the `&lt;categories&gt;` element.
          xmlData.AppendFormat(&quot;&lt;categories&gt;&quot;);

          // Every date between January 01, 2003 and January 20, 2003 is entered thrice
          // in the **datepro** field in the **FactoryDB **database.

          // The dates will be shown as category labels on the x-axis of the chart.

          // Because we need to show each date only once, use the `select` query
          // with the `distinct` keyword to fetch only one instance of each date from the database.

          // Store the output of the `select` query in the `factoryQuery` string variable.

          string factoryQuery = &quot;select distinct format(datepro,'dd/mm/yyyy') as dd from factory_output&quot;;

          // Establish the database connection.
          DbConn oRs = new DbConn(factoryQuery);

          // Iterate through the data in the `factoryQuery` variable and add the dates as

          // labels to the `&lt;category&gt;` element.

          // Append this data to the `xmlData` object.
          while (oRs.ReadData.Read()) {
              xmlData.AppendFormat(&quot;&lt;category label='{0}'/&gt;&quot;, oRs.ReadData[&quot;dd&quot;].ToString());
          }

          //Close the database connection.
          oRs.ReadData.Close();

          //Close the `&lt;catgories&gt;` element.
          xmlData.AppendFormat(&quot;&lt;/categories&gt;&quot;);

          //Fetch all details for the three factories from the **Factory_Master** table
          // and store the result in the `factoryquery2` variable.

          string factoryquery2 = &quot;select * from factory_master&quot;;

          //Establish the database connection..
          DbConn oRs1 = new DbConn(factoryquery2);

          // Iterate through the results in the `factoryquery2` variable to fetch the
          // factory name and factory id.

          while (oRs1.ReadData.Read()) {
              // Append the factory name as the value for the `seriesName` attribute.
              xmlData.AppendFormat(&quot;&lt;dataset seriesName='{0}'&gt;&quot;, oRs1.ReadData[&quot;factoryname&quot;].ToString());

              // Based on the factory id, fetch the quantity produced by each factory on each day
              // from the factory_output table.

              // Store the results in the `factoryquery3` string object.

              string factoryquery3 = &quot;select quantity from factory_output where factoryid=&quot; + oRs1.ReadData[&quot;factoryid&quot;].ToString();

              //Establish the database connection.
              DbConn oRs2 = new DbConn(factoryquery3);

              // Iterate through the results in the `factoryquery3` object and fetch the quantity details
              // for each factory.

              // Append the quantity details as the the value for the `&lt;set&gt;` element.

              while (oRs2.ReadData.Read()) {
                  xmlData.AppendFormat(&quot;&lt;set value='{0}'/&gt;&quot;, oRs2.ReadData[0].ToString());
              }

              // Close the database connection.
              oRs2.ReadData.Close();

              // Close the `&lt;dataset&gt;` element.
              xmlData.AppendFormat(&quot;&lt;/dataset&gt;&quot;);
          }

          // Close the database connection.
          oRs1.ReadData.Close();

          // Close the `&lt;chart&gt;` element.
          xmlData.AppendFormat(&quot;&lt;/chart&gt;&quot;);

          // Initialize the chart.
          Chart factoryOutput = new Chart(&quot;msline&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;xml&quot;, xmlData.ToString());

          // Render the chart.
          Literal1.Text = factoryOutput.Render();
      }

}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

<div class='tab xml-tab'>
<pre><code class="language-aspnet">
    Imports System.Collections
    Imports System.Configuration
    Imports System.Data
    Imports System.Web
    Imports System.Web.Security
    Imports System.Web.UI
    Imports System.Web.UI.HtmlControls
    Imports System.Web.UI.WebControls
    Imports System.Web.UI.WebControls.WebParts

    ' Use the `FusionCharts.Charts` namespace to be able to use classes and methods required to // create charts.
    Imports FusionCharts.Charts

    Imports System.Text
    Imports System.Data.Odbc
    Imports DataConnection
    Imports System.Data.OleDb

    Public Partial Class DBExample_MSCharts
      Inherits System.Web.UI.Page
      Private Sub Page_Load(sender As Object, e As EventArgs)  Handles MyBase.Load

        ' Create the `xmlData` StringBuilder object to store the data fetched
        'from the database as a string.
        Dim xmlData As New StringBuilder()

        ' Initialize the chart-level attributes and append them to the
        '`xmlData` StringBuilder object.

        xmlData.Append(&quot;&lt;chart caption='Factory Output report' subCaption='By Quantity' showBorder='1' formatNumberScale='0' rotatelabels='1' showvalues='0'&gt;&quot;)

        ' Initialize the `&lt;categories&gt;` element.
        xmlData.AppendFormat(&quot;&lt;categories&gt;&quot;)

        ' Every date between January 01, 2003 and January 20, 2003 is entered thrice
        ' in the **datepro** field in the **FactoryDB **database.

        ' The dates will be shown as category labels on the x-axis of the chart.

        ' Because we need to show each date only once, use the `select` query
        ' with the `distinct` keyword to fetch only one instance of each date from the database.

        ' Store the output of the `select` query in the `factoryQuery` string variable.

        Dim factoryQuery As String = &quot;select distinct format(datepro,'dd/mm/yyyy') as dd from factory_output&quot;

        ' Establish the database connection.
        Dim oRs As New DbConn(factoryQuery)

        ' Iterate through the data in the `factoryQuery` variable and add the dates as

        ' labels to the `&lt;category&gt;` element.

        ' Append this data to the `xmlData` object.
        While oRs.ReadData.Read()
          xmlData.AppendFormat(&quot;&lt;category label='{0}'/&gt;&quot;, oRs.ReadData(&quot;dd&quot;).ToString())
        End While

        'Close the database connection.
        oRs.ReadData.Close()

        'Close the `&lt;catgories&gt;` element.
        xmlData.AppendFormat(&quot;&lt;/categories&gt;&quot;)

        'Fetch all details for the three factories from the **Factory_Master** table
        ' and store the result in the `factoryquery2` variable.

        Dim factoryquery2 As String = &quot;select * from factory_master&quot;

        'Establish the database connection..
        Dim oRs1 As New DbConn(factoryquery2)

        ' Iterate through the results in the `factoryquery2` variable to fetch the
        ' factory name and factory id.

        While oRs1.ReadData.Read()
          ' Append the factory name as the value for the `seriesName` attribute.
          xmlData.AppendFormat(&quot;&lt;dataset seriesName='{0}'&gt;&quot;, oRs1.ReadData(&quot;factoryname&quot;).ToString())

          ' Based on the factory id, fetch the quantity produced by each factory on each day
          ' from the factory_output table.

          ' Store the results in the `factoryquery3` string object.

          Dim factoryquery3 As String = &quot;select quantity from factory_output where factoryid=&quot; + oRs1.ReadData(&quot;factoryid&quot;).ToString()

          'Establish the database connection.
          Dim oRs2 As New DbConn(factoryquery3)

          ' Iterate through the results in the `factoryquery3` object and fetch the quantity details
          ' for each factory.

          ' Append the quantity details as the the value for the `&lt;set&gt;` element.

          While oRs2.ReadData.Read()
            xmlData.AppendFormat(&quot;&lt;set value='{0}'/&gt;&quot;, oRs2.ReadData(0).ToString())
          End While

          ' Close the database connection.
          oRs2.ReadData.Close()

          ' Close the `&lt;dataset&gt;` element.
          xmlData.AppendFormat(&quot;&lt;/dataset&gt;&quot;)
        End While

        ' Close the database connection.
        oRs1.ReadData.Close()

        ' Close the `&lt;chart&gt;` element.
        xmlData.AppendFormat(&quot;&lt;/chart&gt;&quot;)

        ' Initialize the chart.
        Dim factoryOutput As New Chart(&quot;msline&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;xml&quot;, xmlData.ToString())

        ' Render the chart.
        Literal1.Text = factoryOutput.Render()
      End Sub
    End Class

</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>

</pre>
</div>

</div>
</div>
