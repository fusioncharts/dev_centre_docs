---
permalink: using-with-server-side-languages/asp-net/different-ways-of-loading-data.html
title: Different Ways of Loading Data in ASP.Net | FusionCharts
description: In this section, you cna load fieerent data for a chart image.
heading: Different Ways of Loading Data in ASP.Net
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts ASP.NET Wrapper can be downloaded from <a href="http://www.fusioncharts.com/asp-net-charts/" target="_blank">here</a>.</p>

The FusionCharts ASP.NET wrapper lets you load data for a chart using:

* <a href="/using-with-server-side-languages/asp-net/different-ways-of-loading-data#using-a-json-string" class="smoth-scroll">a JSON string generated from a 2D array</a>

* <a href="/using-with-server-side-languages/asp-net/different-ways-of-loading-data#using-a-xml-string" class="smoth-scroll">an XML string generated from a 2D array</a>

* <a href="/using-with-server-side-languages/asp-net/different-ways-of-loading-data#loading-json-data-from-a-file" class="smoth-scroll">JSON URL of a file that contains chart data</a>

* <a href="/using-with-server-side-languages/asp-net/different-ways-of-loading-data#loading-xml-data-from-a-file" class="smoth-scroll">XML URL of a file that contains chart data</a>

In this section, you will be shown how the ASP.NET wrapper uses each of these methods to generate charts.

<p class="text-info"> Before you begin, make sure that you have copied the <a href="https://github.com/fusioncharts/asp-net-wrapper/tree/master/DLLFile" target="_blank">__FusionCharts.dll__</a> file in the **Bin** folder of your web application. </p>

## Loading Data from a 2D Array

### Using a JSON String

A multi-series line chart that shows the sales data for six products for the previous and the current year is shown below:

{% embed_chart using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-1.js %}

As an example, we will look at how you can create this chart by generating a JSON string from the chart data contained in a 2D array.

The data structure that goes into the **../ArrayExample/MultiSeriesJSON.aspx** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
    <%@ Page Language="C#" AutoEventWireup="true" CodeFile="MultiSeriesJSON.aspx.cs" Inherits="ArrayExample_Default" %>

        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

        <html>
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
              <title>FusionCharts - Simple</title>
              <!-- FusionCharts script tag -->
              <script type="text/javascript" src="../fusioncharts/fusioncharts.js"></script>
              <!-- End -->
            </head>
            <body>
                <div style="text-align:center">
                  <asp:Literal ID="Literal1" runat="server"></asp:Literal>
              </div>
            </body>
        </html>

    ```
  </div>

  <div class='tab xml-tab'>
```javascript

     <%@ Page Language="VB" AutoEventWireup="false" CodeFile="MultiSeriesJSON.aspx.vb" Inherits="Samples_ArrayExample_MultiSeriesJSON" %>

        <!DOCTYPE html>

        <html xmlns="http://www.w3.org/1999/xhtml">
        <head runat="server">
            <title>FusionCharts - Simple</title>
            <!-- FusionCharts script tag -->
            <script type="text/javascript" src="../../fusioncharts/fusioncharts.js"></script>
            <!-- End --> 
        </head>
        <body>
            <div style="text-align:center">
                <asp:Literal ID="Literal1" runat="server"></asp:Literal>           
            </div>
        </body>
        </html>
              
    ```
  </div>

</div>


The data structure that goes into the code behind **../ArrayExample/MultiSeriesJSON.aspx.cs** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
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
    using System.Text;

    // Use the `FusionCharts.Charts` namespace to be able to use classes and methods required to // create charts.
    using FusionCharts.Charts;

    public partial class ArrayExample_Default : System.Web.UI.Page
    {
      protected void Page_Load(object sender, EventArgs e)
      {

            //The data to plot the sample multi-series chart is contained in the `arrData` array
            // having six rows and  three columns.
            // Each row stores the sales data for each product.
            // The first column stores the data labels for the products, and the second and
            // third columns store the current year and previous year sales figures, respectively.

          object[,] arrData = new object[6, 3];

          //Store product labels in the first column.
          arrData[0, 0] = "Product A";
          arrData[1, 0] = "Product B";
          arrData[2, 0] = "Product C";
          arrData[3, 0] = "Product D";
          arrData[4, 0] = "Product E";
          arrData[5, 0] = "Product F";

          //Store sales data for the current year in the second column.
          arrData[0, 1] = 567500;
          arrData[1, 1] = 815300;
          arrData[2, 1] = 556800;
          arrData[3, 1] = 734500;
          arrData[4, 1] = 676800;
          arrData[5, 1] = 648500;

          //Store sales data for previous year in the third column.
          arrData[0, 2] = 367300;
          arrData[1, 2] = 584500;
          arrData[2, 2] = 754000;
          arrData[3, 2] = 456300;
          arrData[4, 2] = 754500;
          arrData[5, 2] = 437600;

      // To render a chart from the above data, you will have to convert this data into

        // JSON data for the chart.

        // You can do this using string concatenation.

      //Create objects of the `StringBuilder` class to store the converted JSON strings.

      // Define the `jsonData` object to store the entire chart data as a JSON string.

          StringBuilder jsonData = new StringBuilder();

      // Define the `categories` object to store the product labels converted to
        // JSON strings.
              StringBuilder categories = new StringBuilder();

      //Define the `currentYear` and `previousYear` objects to store
        // the converted current and previous years sales data, respectively.
          StringBuilder currentYear = new StringBuilder();
          StringBuilder previousYear = new StringBuilder();

          //Initialize the chart object. Define  the chart-level attributes and
            // append them as strings to the chart data in the `jsonData` object
            // using the `Append` method.

          jsonData.Append("{" +

      //Initialize the chart object with the chart-level attributes..
              "'chart': {"+

                  "'caption': 'Sales by Product'," +
                  "'numberPrefix': '$',"+
                  "'formatNumberScale': '1'," +
                  "'placeValuesInside': '1'," +
                  "'decimals': '0'" +
              "},");

      //Initialize the `categories` and `category` object arrays.

        //Using the `Append ` method, append the initial part of array definition as

        // string to the `categories` StringBuilder object.
          categories.Append("'categories': [" +
              "{" +
                  "'category': [");

          //Using the `Append` method, append the dataset level attributes and the initial part of
            // the `data` object array definition to the
            // `currentYear` StringBuilder object.

          currentYear.Append("{" +
                      // dataset level attributes
                      "'seriesname': 'Current Year'," +
                      "'data': [");

      //Using the `Append` method, append the dataset level attributes and the initial part of

        // the `data` object array definition to the

        // `previousYear` StringBuilder object.

          previousYear.Append("{" +
                      // dataset level attributes
                      "'seriesname': 'Previous Year'," +
                      "'data': [");

          //Iterate through the data contained  in the `arrData` array.

          for (int i = 0; i < arrData.GetLength(0); i++)
          {
              if (i > 0)
              {
                  categories.Append(",");
                  currentYear.Append(",");
                  previousYear.Append(",");
              }

              //Append individual category-level data to the `categories` object.

              categories.AppendFormat("{{" +
                      // category level attributes
                      "'label': '{0}'" +
                  "}}", arrData[i, 0]);

              //Append current year’s sales data for each product to the `currentYear` object.

              currentYear.AppendFormat("{{" +
                      // data level attributes
                      "'value': '{0}'" +
                  "}}", arrData[i, 1]);

      //Append previous year’s sales data for each product to the `currentYear` object.

            previousYear.AppendFormat("{{" +
                      // data level attributes
                      "'value': '{0}'" +
                  "}}", arrData[i, 2]);
          }

          //Append as strings the closing part of the array definition of the

        // `categories` object array.

          categories.Append("]" +
                  "}" +
              "],");

        //Append as strings the closing part of the array definition of the `data` object array to the `currentYear` and `previousYear` objects.

          currentYear.Append("]" +
                  "},");
          previousYear.Append("]" +
                  "}");

          //Append the complete chart data converted to a string to the `jsonData` object.

          jsonData.Append(categories.ToString());
          jsonData.Append("'dataset': [");
          jsonData.Append(currentYear.ToString());
          jsonData.Append(previousYear.ToString());
          jsonData.Append("]" +
                  "}");

          // Initialize the chart.

          Chart sales = new Chart("msline", "myChart", "600", "350", "json", jsonData.ToString());
          // Render the chart.
          Literal1.Text = sales.Render();
      }
    }

    ```
  </div>

  <div class='tab xml-tab'>
```javascript

    Imports System.Collections
    Imports System.Configuration
    Imports System.Data
    Imports System.Web
    Imports System.Web.Security
    Imports System.Web.UI
    Imports System.Web.UI.HtmlControls
    Imports System.Web.UI.WebControls
    Imports System.Web.UI.WebControls.WebParts
    Imports System.Text
    ' Use FusionCharts.Charts name space
    Imports FusionCharts.Charts
    Partial Class Samples_ArrayExample_MultiSeriesJSON
        Inherits System.Web.UI.Page
        Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
            'In this example, we plot a multi series chart from data contained
            'in an array. The array will have three columns - first one for data label (product)
            'and the next two for data values. The first data value column would store sales information
            'for current year and the second one for previous year.

            'Let//s store the sales data for 6 products in our array. We also store
            'the name of products. 
            Dim arrData As Object(,) = New Object(5, 2) {}
            'Store Name of Products
            arrData(0, 0) = "Product A"
            arrData(1, 0) = "Product B"
            arrData(2, 0) = "Product C"
            arrData(3, 0) = "Product D"
            arrData(4, 0) = "Product E"
            arrData(5, 0) = "Product F"
            'Store sales data for current year
            arrData(0, 1) = 567500
            arrData(1, 1) = 815300
            arrData(2, 1) = 556800
            arrData(3, 1) = 734500
            arrData(4, 1) = 676800
            arrData(5, 1) = 648500
            'Store sales data for previous year
            arrData(0, 2) = 367300
            arrData(1, 2) = 584500
            arrData(2, 2) = 754000
            arrData(3, 2) = 456300
            arrData(4, 2) = 754500
            arrData(5, 2) = 437600

            'Now, we need to convert this data into multi-series JSON. 
            'We convert using string concatenation.
            'jsonData - Stores the entire JSON string
            'categories - Stores pertial  for the <categories> and child <category> elements
            'currentYear - Stores XML for current year's sales
            'previousYear - Stores XML for previous year's sales
            Dim jsonData As New StringBuilder()
            Dim categories As New StringBuilder()
            Dim currentYear As New StringBuilder()
            Dim previousYear As New StringBuilder()

            'Initialize chart object of the JSON
            ' add chart level attrubutes
            jsonData.Append("{" + "'chart': {" + "'caption': 'Sales by Product'," + "'numberPrefix': '$'," + "'formatNumberScale': '1'," + "'placeValuesInside': '1'," + "'decimals': '0'" + "},")

            'Initial string part of categories element - necessary to generate a multi-series chart
            categories.Append("'categories': [" + "{" + "'category': [")

            'Initial string part of dataset elements
            ' dataset level attributes
            currentYear.Append("{" + "'seriesname': 'Current Year'," + "'data': [")
            ' dataset level attributes
            previousYear.Append("{" + "'seriesname': 'Previous Year'," + "'data': [")

            'Iterate through the data 
            For i As Integer = 0 To arrData.GetLength(0) - 1
                If i > 0 Then
                    categories.Append(",")
                    currentYear.Append(",")
                    previousYear.Append(",")
                End If
                'Append individual category to strCategories
                ' category level attributes
                categories.AppendFormat("{{" + "'label': '{0}'" + "}}", arrData(i, 0))
                'Add individual data to both the datasets
                ' data level attributes
                currentYear.AppendFormat("{{" + "'value': '{0}'" + "}}", arrData(i, 1))
                ' data level attributes
                previousYear.AppendFormat("{{" + "'value': '{0}'" + "}}", arrData(i, 2))
            Next

            'Closing part of the categories object
            categories.Append("]" + "}" + "],")

            '''/Closing part of individual dataset object
            currentYear.Append("]" + "},")
            previousYear.Append("]" + "}")

            'Assemble the entire XML now
            jsonData.Append(categories.ToString())
            jsonData.Append("'dataset': [")
            jsonData.Append(currentYear.ToString())
            jsonData.Append(previousYear.ToString())
            jsonData.Append("]" + "}")

            ' Initialize chart - Multi-series Line 2D Chart with data from Data/Data.json
            Dim sales As New Chart("msline", "myChart", "600", "350", "json", jsonData.ToString())
            ' Render the chart
            Literal1.Text = sales.Render()
        End Sub
    End Class

    ```
  </div>

</div>

To know more about the attributes that you can configure for the multi-series line chart, visit [this page](/chart-attributes?chart=msline).

### Using a XML String

A combination chart that shows the quarterly sales details—the revenue generated and the units sold—for product A is shown below:

{% embed_chart using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-2.js %}

We will look at how you can create this chart using an XML string generated from data contained in a 2D array.

The data structure that goes into the **../ArrayExample/CombinationXML.aspx** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
    <%@ Page Language="C#" AutoEventWireup="true" CodeFile="CombinationXML.aspx.cs" Inherits="ArrayExample_Combination" %>

            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

            <html>
                <head>
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                  <title>FusionCharts - Simple</title>
                  <!-- FusionCharts script tag -->
                    <script type="text/javascript" src="../fusioncharts/fusioncharts.js"></script>
                  <!-- End -->
                </head>
                <body>
                  <div style="text-align:center">
                      <asp:Literal ID="Literal1" runat="server"></asp:Literal>
                  </div>
                </body>
            </html>

    ```
  </div>

  <div class='tab xml-tab'>
```javascript
     <%@ Page Language="VB" AutoEventWireup="false" CodeFile="CombinationXML.aspx.vb" Inherits="Samples_ArrayExample_CombinationXML" %>

      <!DOCTYPE html>

      <html xmlns="http://www.w3.org/1999/xhtml">
      <head runat="server">
          <title>FusionCharts - Simple</title>
          <!-- FusionCharts script tag -->
          <script type="text/javascript" src="../../fusioncharts/fusioncharts.js"></script>
          <!-- End --> 
      </head>
      <body>
          <div style="text-align:center">
              <asp:Literal ID="Literal1" runat="server"></asp:Literal>           
          </div>
      </body>
      </html>

    ```
  </div>

</div>


The data structure that goes into the code behind **../ArrayExample/CombinationXML.aspx.cs** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
    using System;
    using System.Data;
    using System.Configuration;
    using System.Collections;
    using System.Web;
    using System.Web.Security;
    using System.Web.UI;
    using System.Web.UI.WebControls;
    using System.Web.UI.WebControls.WebParts;
    using System.Web.UI.HtmlControls;
    using System.Text;

    // Use the `FusionCharts.Charts` namespace to be able to use classes and methods required to // create charts.
    using FusionCharts.Charts;

    public partial class ArrayExample_Combination : System.Web.UI.Page
    {
      protected void Page_Load(object sender, EventArgs e)
      {
          // The data to plot the sample dual-y combination chart is contained in the
            // `arrData` 2D array having six rows and three columns.

            // Each row contains the sales data for product A for each quarter.

            // The first column stores the labels to be rendered for each quarter,

            // the second column stores the revenue generated, and

            // the third column stores the no. of units sold in each quarter.

          object[,] arrData = new object[4, 3];

          //Store the labels for each quarter.
          arrData[0, 0] = "Quarter 1";
          arrData[1, 0] = "Quarter 2";
          arrData[2, 0] = "Quarter 3";
          arrData[3, 0] = "Quarter 4";

          //Store revenue data for each quarter.
          arrData[0, 1] = 576000;
          arrData[1, 1] = 448000;
          arrData[2, 1] = 956000;
          arrData[3, 1] = 734000;

          //Store quantity details for each quarter.
          arrData[0, 2] = 576;
          arrData[1, 2] = 448;
          arrData[2, 2] = 956;
          arrData[3, 2] = 734;

          // Use string concatenation to convert the data in the `arrData` array into XML data for the
            // combination chart.

          //Create objects of the `StringBuilder` class are created to

            //store the converted XML strings.


          // Define the the `strXML` object

            //to store the entire chart data as an XML string.
          StringBuilder strXML=new StringBuilder();

          // Define the `strCategories` object
            //to store the labels for each quarter, converted to XML strings.

          StringBuilder strCategories = new StringBuilder();

          //Define the `strDataRev` and the `strDataQty` objects

            // to store the revenue and quantity data, respectively, for product A.
          StringBuilder strDataRev=new StringBuilder();
          StringBuilder strDataQty=new StringBuilder();

          //Initialize the <chart> element. Define the chart-level attributes and
            // append them as strings to the `strXML` object.

          strXML.Append("<chart palette='4' caption='Product A - Sales Details' PYAxisName='Revenue' SYAxisName='Quantity (in Units)' numberPrefix='$' formatNumberScale='0' showValues='0' decimals='0' >");

          //Initialize the <categories> element.
          strCategories.Append("<categories>");

          //Initiate the <dataset> elements for the revenue and quantity data.
          strDataRev.Append("<dataset seriesName='Revenue'>");
          strDataQty.Append("<dataset seriesName='Quantity' parentYAxis='S'>");

          //Iterate through the data in the `arrData` array
          for (int i = 0; i < arrData.GetLength(0); i++)
              {
                    //Append <category name='...' /> to `strCategories`
                  strCategories.AppendFormat("<category name='{0}' />",arrData[i, 0]);
                  //AppendAdd <set value='...' /> to both the datasets.
                  strDataRev.AppendFormat("<set value='{0}' />",arrData[i, 1]);
                  strDataQty.AppendFormat("<set value='{0}' />",arrData[i, 2]);
              }

          //Close the `<categories>` element..
          strCategories.Append("</categories>");

          //Close the `<dataset>` element for the revenue and quantity datasets.
            strDataRev.Append("</dataset>");
          strDataQty.Append("</dataset>");

          //Append the complete chart data converted to a string to the the `strXML` object.
          strXML.Append(strCategories.ToString());
          strXML.Append(strDataRev.ToString());
          strXML.Append(strDataQty.ToString());
          strXML.Append("</chart>");

          // Initialize the chart.
          Chart sales = new Chart("mscombidy2d", "myChart", "600", "350", "xml", strXML.ToString());

          // Render the chart.
          Literal1.Text = sales.Render();
      }
    }
           

    ```
  </div>

  <div class='tab xml-tab'>
```javascript
      
      Imports System.Data
      Imports System.Configuration
      Imports System.Collections
      Imports System.Web
      Imports System.Web.Security
      Imports System.Web.UI
      Imports System.Web.UI.WebControls
      Imports System.Web.UI.WebControls.WebParts
      Imports System.Web.UI.HtmlControls
      Imports System.Text
      ' Use FusionCharts.Charts name space
      Imports FusionCharts.Charts
      Partial Class Samples_ArrayExample_CombinationXML
          Inherits System.Web.UI.Page
          Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
              'In this example, we plot a Combination chart from data contained
              'in an array. The array will have three columns - first one for Quarter Name
              'second one for sales figure and third one for quantity. 

              Dim arrData As Object(,) = New Object(3, 2) {}
              'Store Quarter Name
              arrData(0, 0) = "Quarter 1"
              arrData(1, 0) = "Quarter 2"
              arrData(2, 0) = "Quarter 3"
              arrData(3, 0) = "Quarter 4"
              'Store revenue data
              arrData(0, 1) = 576000
              arrData(1, 1) = 448000
              arrData(2, 1) = 956000
              arrData(3, 1) = 734000
              'Store Quantity
              arrData(0, 2) = 576
              arrData(1, 2) = 448
              arrData(2, 2) = 956
              arrData(3, 2) = 734

              'Now, we need to convert this data into combination XML. 
              'We convert using string concatenation.
              'strXML - Stores the entire XML
              'strCategories - Stores XML for the <categories> and child <category> elements
              'strDataRev - Stores XML for current year's sales
              'strDataQty - Stores XML for previous year's sales

              Dim strXML As New StringBuilder()
              Dim strCategories As New StringBuilder()
              Dim strDataRev As New StringBuilder()
              Dim strDataQty As New StringBuilder()

              'Initialize <chart> element
              strXML.Append("<chart palette='4' caption='Product A - Sales Details' PYAxisName='Revenue' SYAxisName='Quantity (in Units)' numberPrefix='$' formatNumberScale='0' showValues='0' decimals='0' >")

              'Initialize <categories> element - necessary to generate a multi-series chart
              strCategories.Append("<categories>")

              'Initiate <dataset> elements
              strDataRev.Append("<dataset seriesName='Revenue'>")
              strDataQty.Append("<dataset seriesName='Quantity' parentYAxis='S'>")

              'Iterate through the data 
              For i As Integer = 0 To arrData.GetLength(0) - 1
                  'Append <category name='...' /> to strCategories
                  strCategories.AppendFormat("<category name='{0}' />", arrData(i, 0))
                  'Add <set value='...' /> to both the datasets
                  strDataRev.AppendFormat("<set value='{0}' />", arrData(i, 1))
                  strDataQty.AppendFormat("<set value='{0}' />", arrData(i, 2))
              Next

              'Close <categories> element
              strCategories.Append("</categories>")

              'Close <dataset> elements
              strDataRev.Append("</dataset>")
              strDataQty.Append("</dataset>")

              'Assemble the entire XML now
              strXML.Append(strCategories.ToString())
              strXML.Append(strDataRev.ToString())
              strXML.Append(strDataQty.ToString())
              strXML.Append("</chart>")

              ' Initialize chart - Multi-series 2D Dual Y Combination Chart with data from Data/Data.json
              Dim sales As New Chart("mscombidy2d", "myChart", "600", "350", "xml", strXML.ToString())
              ' Render the chart
              Literal1.Text = sales.Render()
          End Sub
      End Class

    ```
  </div>

</div>

To know more about the attributes that you can configure for the multi-series combination dual-y 2D chart, visit [this page](/chart-attributes?chart=mscombidy2d).

## Loading Chart Data from a File

### Loading JSON Data from a File

A column 3D chart that shows the monthly revenue for the last year at Harry’s SuperMart is shown below:

{% embed_chart using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-3.js %}

We will look at how you can create this gauge by loading data from a `.json` file.

The data structure that goes into the **../BasicExample/JSONURL.aspx** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
 
      <%@ Page Language="C#" AutoEventWireup="true" CodeFile="JSONUrl.aspx.cs" Inherits="BasicExample_BasicChart" %>

      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>FusionCharts - Simple</title>
           <!-- FusionCharts script tag -->
            <script type="text/javascript" src="../fusioncharts/fusioncharts.js"></script>
           <!-- End -->
          </head>
          <body>
        <div style="text-align:center">
              <asp:Literal ID="Literal1" runat="server"></asp:Literal>
        </div>
          </body>
      </html>
           
    ```
  </div>

  <div class='tab xml-tab'>
```javascript
      
      <%@ Page Language="VB" AutoEventWireup="false" CodeFile="JSON_URL.aspx.vb" Inherits="Samples_BasicExamples_JSON_URL" %>

      <!DOCTYPE html>

      <html xmlns="http://www.w3.org/1999/xhtml">
      <head runat="server">
          <title>Basic FusionCharts population using JSON URL</title>
          <!-- FusionCharts script tag -->
          <script type="text/javascript" src="../../fusioncharts/fusioncharts.js"></script>
          <!-- End --> 
      </head>
      <body>
          Fusioncharts will render below
          <div style="text-align:center">
              <asp:Literal ID="Literal1" runat="server"></asp:Literal>           
          </div>
      </body>
      </html>

    ```
  </div>

</div>


The data structure that goes into the code behind **../BasicExample/JSONURL.aspx.cs** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
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
    // Use the `FusionCharts.Charts` namespace to be able to use classes and methods
    // required to create charts.
    using FusionCharts.Charts;

    public partial class BasicExample_BasicChart : System.Web.UI.Page
    {
      protected void Page_Load(object sender, EventArgs e)
      {
            // The data for the sample chart is stored in the `Data.json` file
            // (contained in the `Data` folder)
            //Initialize the chart.

            Chart sales = new Chart("column3d", "myChart", "600", "350", "jsonurl", "../Data/Data.json");

            // Render the chart
            Literal1.Text = sales.Render();

      }

    }
       

    ```
  </div>

  <div class='tab xml-tab'>
```javascript  
   
      Imports System.Collections
      Imports System.Configuration
      Imports System.Data
      Imports System.Web
      Imports System.Web.Security
      Imports System.Web.UI
      Imports System.Web.UI.HtmlControls
      Imports System.Web.UI.WebControls
      Imports System.Web.UI.WebControls.WebParts
      ' Use FusionCharts.Charts name space
      Imports FusionCharts.Charts
      Partial Class Samples_BasicExamples_JSON_URL
          Inherits System.Web.UI.Page
          Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
              ' This page demonstrates the ease of generating charts using FusionCharts.
              ' For this chart, we've used a pre-defined Data.json (contained in /Data/ folder)
              ' Ideally, you would NOT use a physical data file. Instead you'll have 
              ' your own ASP.NET scripts virtually relay the JSON / XML data document.
              ' For a head-start, we've kept this example very simple.

              ' Initialize chart - Column 3D Chart with data from Data/Data.json
              Dim sales As New Chart("column3d", "myChart", "600", "350", "jsonurl", "../../Data/Data.json")
              ' Render the chart
              Literal1.Text = sales.Render()
          End Sub

      End Class

    ```
  </div>

</div>


To know more about the attributes that you can configure for the column 3D chart, visit [this page](/chart-attributes?chart=column3d).

### Loading XML Data from a File

An angular gauge showing the customer satisfaction score at Los Angeles Topanga is shown below:

{% embed_chart using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-4.js %}

We will look at how you can create this gauge by loading data from a `.xml` file.

The data structure that goes into the **../BasicExample/XMLURL.aspx** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
    <%@ Page Language="C#" AutoEventWireup="true" CodeFile="XMLUrl.aspx.cs" Inherits="BasicExample_BasicChart" %>

      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

      <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>FusionCharts - Simple</title>
            <!-- FusionCharts script tag -->
            <script type="text/javascript" src="../fusioncharts/fusioncharts.js"></script>
            <!-- End -->
          </head>
          <body>
            <div style="text-align:center">
                <asp:Literal ID="Literal1" runat="server"></asp:Literal>
            </div>
          </body>
      </html>
             

    ```
  </div>

  <div class='tab xml-tab'>
```javascript
     
      <%@ Page Language="VB" AutoEventWireup="false" CodeFile="XML_URL.aspx.vb" Inherits="Samples_BasicExamples_XML_URL" %>

      <!DOCTYPE html>

      <html xmlns="http://www.w3.org/1999/xhtml">
      <head runat="server">
          <title>Basic FusionCharts population using XML URL</title>
          <!-- FusionCharts script tag -->
          <script type="text/javascript" src="../../fusioncharts/fusioncharts.js"></script>
          <!-- End --> 
      </head>
      <body>
          Fusioncharts will render below
          <div style="text-align:center">
              <asp:Literal ID="Literal1" runat="server"></asp:Literal>           
          </div>
      </body>
      </html>

    ```
  </div>

</div>


The data structure that goes into the code behind **../BasicExample/XMLURL.aspx.cs** file is given below:

<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
```javascript
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

    // Use the `FusionCharts.Charts` namespace to be able to use classes and methods
    // required to create charts.

    using FusionCharts.Charts;

    public partial class BasicExample_BasicChart : System.Web.UI.Page
      {
        protected void Page_Load(object sender, EventArgs e)

            {
                // The data for the sample chart is stored in the `Data.xml` file
                  // (contained in the `Data` folder)
                // Initialize the chart.
                // The URL of the `.xml` file is passed as the value for the data source parameter of
                  // the `Chart` class constructor.

                Chart score= new Chart("angulargauge", "myChart", "600", "350", "xmlurl", "../Data/Data.xml");

                  // Render the chart.
                Literal1.Text = score.Render();
           }
      }  

    ```
  </div>

  <div class='tab xml-tab'>
```javascript

      Imports System.Collections
      Imports System.Configuration
      Imports System.Data
      Imports System.Web
      Imports System.Web.Security
      Imports System.Web.UI
      Imports System.Web.UI.HtmlControls
      Imports System.Web.UI.WebControls
      Imports System.Web.UI.WebControls.WebParts
      ' Use FusionCharts.Charts name space
      Imports FusionCharts.Charts
      Partial Class Samples_BasicExamples_XML_URL
          Inherits System.Web.UI.Page
          Protected Sub Page_Load(sender As Object, e As EventArgs) Handles MyBase.Load
              ' This page demonstrates the ease of generating charts using FusionCharts.
              ' For this chart, we've used a pre-defined Data.xml (contained in /Data/ folder)
              ' Ideally, you would NOT use a physical data file. Instead you'll have 
              ' your own ASP.NET scripts virtually relay the JSON / XML data document.
              ' For a head-start, we've kept this example very simple.

              ' Initialize chart - Real-time Angular Chart with data from Data/Data.json
              Dim sales As New Chart("angulargauge", "myChart", "600", "350", "xmlurl", "../../Data/Data.xml")
              ' Render the chart
              Literal1.Text = sales.Render()
          End Sub
      End Class

    ```
  </div>

</div>


To know more about the attributes that you can configure for the angular gauge, visit [this page](/chart-attributes?chart=angulargauge).

## Important Tips for Developers

Given below are a few tips that, although applicable while using FusionCharts, need to be specifically paid attention to here:

* The structure of chart data is different based on whether you are rendering a single-series chart or a multi-series chart. The table below shows the difference:

<table>
  <tr>
    <td><strong>Single-series Chart</strong></td>
  </tr>
  <tr>
{% embed_data using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-5.js %}
For an example, click [here](/chart-guide/standard-charts/creating-standard-charts).
    </td>
  </tr>
  <tr>
    <td><strong>Multi-series Chart</strong></td>
  </tr>
  <tr>
{% embed_data using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-6.js %}
For an example, click [here](/chart-guide/multi-series-charts/creating-multi-series-charts).
    </td>
  </tr>
</table>


* Make sure that the XML strings are escaped properly, especially for instances where the data for the chart is enclosed in quotation marks. Also make sure that the entire string is enclosed in single quotes, while the attributes and corresponding values are enclosed in double quotes. Doing otherwise will break the code.

* The chart ID should be unique for all charts rendered on the same page. Otherwise, it will result in a JavaScript error.