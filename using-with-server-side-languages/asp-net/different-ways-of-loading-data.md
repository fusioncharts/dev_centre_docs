---
permalink: using-with-server-side-languages/asp-net/different-ways-of-loading-data.html
title: Different Ways of Loading Data in ASP.Net | FusionCharts
description: In this section, you cna load fieerent data for a chart image.
heading: Different Ways of Loading Data in ASP.Net
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts ASP.NET Wrapper can be downloaded from <a href="http://www.fusioncharts.com/asp-net-charts/" target="_blank">here</a>.</p>

The FusionCharts ASP.NET wrapper lets you load data for a chart using:

* a JSON string generated from a 2D array

* an XML string generated from a 2D array

* JSON URL of a file that contains chart data

* XML URL of a file that contains chart data

In this section, you will be shown how the ASP.NET wrapper uses each of these methods to generate charts.

>  Before you begin, make sure that you have copied the <a href="https://github.com/fusioncharts/asp-net-wrapper/tree/master/DLLFile" target="_blank">__FusionCharts.dll__</a> file in the **Bin** folder of your web application. </p>

## Loading Data from a 2D Array

### Using a JSON String

A multi-series line chart that shows the sales data for six products for the previous and the current year is shown below:

{% embed_chart using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-1.js %}

As an example, we will look at how you can create this chart by generating a JSON string from the chart data contained in a 2D array.

The data structure that goes into the **../ArrayExample/MultiSeriesJSON.aspx** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
	&lt;%@ Page Language=&quot;C#&quot; AutoEventWireup=&quot;true&quot; CodeFile=&quot;MultiSeriesJSON.aspx.cs&quot; Inherits=&quot;ArrayExample_Default&quot; %&gt;

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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-cv">
	&lt;%@ Page Language=&quot;VB&quot; AutoEventWireup=&quot;false&quot; CodeFile=&quot;MultiSeriesJSON.aspx.vb&quot; Inherits=&quot;Samples_ArrayExample_MultiSeriesJSON&quot; %&gt;

    &lt;!DOCTYPE html&gt;
    &lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
    &lt;head runat=&quot;server&quot;&gt;
        &lt;title&gt;FusionCharts - Simple&lt;/title&gt;
        &lt;!-- FusionCharts script tag --&gt;
        &lt;script type=&quot;text/javascript&quot; src=&quot;../../fusioncharts/fusioncharts.js&quot;&gt;&lt;/script&gt;
        &lt;!-- End --&gt; 
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div style=&quot;text-align:center&quot;&gt;
            &lt;asp:Literal ID=&quot;Literal1&quot; runat=&quot;server&quot;&gt;&lt;/asp:Literal&gt;           
        &lt;/div&gt;
    &lt;/body&gt;
    &lt;/html&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

The data structure that goes into the code behind **../ArrayExample/MultiSeriesJSON.aspx.cs** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
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
          arrData[0, 0] = &quot;Product A&quot;;
          arrData[1, 0] = &quot;Product B&quot;;
          arrData[2, 0] = &quot;Product C&quot;;
          arrData[3, 0] = &quot;Product D&quot;;
          arrData[4, 0] = &quot;Product E&quot;;
          arrData[5, 0] = &quot;Product F&quot;;

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

          jsonData.Append(&quot;{&quot; +

      //Initialize the chart object with the chart-level attributes..
              &quot;'chart': {&quot;+

                  &quot;'caption': 'Sales by Product',&quot; +
                  &quot;'numberPrefix': '$',&quot;+
                  &quot;'formatNumberScale': '1',&quot; +
                  &quot;'placeValuesInside': '1',&quot; +
                  &quot;'decimals': '0'&quot; +
              &quot;},&quot;);

      //Initialize the `categories` and `category` object arrays.

        //Using the `Append ` method, append the initial part of array definition as

        // string to the `categories` StringBuilder object.
          categories.Append(&quot;'categories': [&quot; +
              &quot;{&quot; +
                  &quot;'category': [&quot;);

          //Using the `Append` method, append the dataset level attributes and the initial part of
            // the `data` object array definition to the
            // `currentYear` StringBuilder object.

          currentYear.Append(&quot;{&quot; +
                      // dataset level attributes
                      &quot;'seriesname': 'Current Year',&quot; +
                      &quot;'data': [&quot;);

      //Using the `Append` method, append the dataset level attributes and the initial part of

        // the `data` object array definition to the

        // `previousYear` StringBuilder object.

          previousYear.Append(&quot;{&quot; +
                      // dataset level attributes
                      &quot;'seriesname': 'Previous Year',&quot; +
                      &quot;'data': [&quot;);

          //Iterate through the data contained  in the `arrData` array.

          for (int i = 0; i &lt; arrData.GetLength(0); i++)
          {
              if (i &gt; 0)
              {
                  categories.Append(&quot;,&quot;);
                  currentYear.Append(&quot;,&quot;);
                  previousYear.Append(&quot;,&quot;);
              }

              //Append individual category-level data to the `categories` object.

              categories.AppendFormat(&quot;{{&quot; +
                      // category level attributes
                      &quot;'label': '{0}'&quot; +
                  &quot;}}&quot;, arrData[i, 0]);

              //Append current year&rsquo;s sales data for each product to the `currentYear` object.

              currentYear.AppendFormat(&quot;{{&quot; +
                      // data level attributes
                      &quot;'value': '{0}'&quot; +
                  &quot;}}&quot;, arrData[i, 1]);

      //Append previous year&rsquo;s sales data for each product to the `currentYear` object.

            previousYear.AppendFormat(&quot;{{&quot; +
                      // data level attributes
                      &quot;'value': '{0}'&quot; +
                  &quot;}}&quot;, arrData[i, 2]);
          }

          //Append as strings the closing part of the array definition of the

        // `categories` object array.

          categories.Append(&quot;]&quot; +
                  &quot;}&quot; +
              &quot;],&quot;);

        //Append as strings the closing part of the array definition of the `data` object array to the `currentYear` and `previousYear` objects.

          currentYear.Append(&quot;]&quot; +
                  &quot;},&quot;);
          previousYear.Append(&quot;]&quot; +
                  &quot;}&quot;);

          //Append the complete chart data converted to a string to the `jsonData` object.

          jsonData.Append(categories.ToString());
          jsonData.Append(&quot;'dataset': [&quot;);
          jsonData.Append(currentYear.ToString());
          jsonData.Append(previousYear.ToString());
          jsonData.Append(&quot;]&quot; +
                  &quot;}&quot;);

          // Initialize the chart.

          Chart sales = new Chart(&quot;msline&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;json&quot;, jsonData.ToString());
          // Render the chart.
          Literal1.Text = sales.Render();
      }
    }
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-vb">
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
            arrData(0, 0) = &quot;Product A&quot;
            arrData(1, 0) = &quot;Product B&quot;
            arrData(2, 0) = &quot;Product C&quot;
            arrData(3, 0) = &quot;Product D&quot;
            arrData(4, 0) = &quot;Product E&quot;
            arrData(5, 0) = &quot;Product F&quot;
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
            'categories - Stores pertial  for the &lt;categories&gt; and child &lt;category&gt; elements
            'currentYear - Stores XML for current year's sales
            'previousYear - Stores XML for previous year's sales
            Dim jsonData As New StringBuilder()
            Dim categories As New StringBuilder()
            Dim currentYear As New StringBuilder()
            Dim previousYear As New StringBuilder()

            'Initialize chart object of the JSON
            ' add chart level attrubutes
            jsonData.Append(&quot;{&quot; + &quot;'chart': {&quot; + &quot;'caption': 'Sales by Product',&quot; + &quot;'numberPrefix': '$',&quot; + &quot;'formatNumberScale': '1',&quot; + &quot;'placeValuesInside': '1',&quot; + &quot;'decimals': '0'&quot; + &quot;},&quot;)

            'Initial string part of categories element - necessary to generate a multi-series chart
            categories.Append(&quot;'categories': [&quot; + &quot;{&quot; + &quot;'category': [&quot;)

            'Initial string part of dataset elements
            ' dataset level attributes
            currentYear.Append(&quot;{&quot; + &quot;'seriesname': 'Current Year',&quot; + &quot;'data': [&quot;)
            ' dataset level attributes
            previousYear.Append(&quot;{&quot; + &quot;'seriesname': 'Previous Year',&quot; + &quot;'data': [&quot;)

            'Iterate through the data 
            For i As Integer = 0 To arrData.GetLength(0) - 1
                If i &gt; 0 Then
                    categories.Append(&quot;,&quot;)
                    currentYear.Append(&quot;,&quot;)
                    previousYear.Append(&quot;,&quot;)
                End If
                'Append individual category to strCategories
                ' category level attributes
                categories.AppendFormat(&quot;{{&quot; + &quot;'label': '{0}'&quot; + &quot;}}&quot;, arrData(i, 0))
                'Add individual data to both the datasets
                ' data level attributes
                currentYear.AppendFormat(&quot;{{&quot; + &quot;'value': '{0}'&quot; + &quot;}}&quot;, arrData(i, 1))
                ' data level attributes
                previousYear.AppendFormat(&quot;{{&quot; + &quot;'value': '{0}'&quot; + &quot;}}&quot;, arrData(i, 2))
            Next

            'Closing part of the categories object
            categories.Append(&quot;]&quot; + &quot;}&quot; + &quot;],&quot;)

            '''/Closing part of individual dataset object
            currentYear.Append(&quot;]&quot; + &quot;},&quot;)
            previousYear.Append(&quot;]&quot; + &quot;}&quot;)

            'Assemble the entire XML now
            jsonData.Append(categories.ToString())
            jsonData.Append(&quot;'dataset': [&quot;)
            jsonData.Append(currentYear.ToString())
            jsonData.Append(previousYear.ToString())
            jsonData.Append(&quot;]&quot; + &quot;}&quot;)

            ' Initialize chart - Multi-series Line 2D Chart with data from Data/Data.json
            Dim sales As New Chart(&quot;msline&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;json&quot;, jsonData.ToString())
            ' Render the chart
            Literal1.Text = sales.Render()
        End Sub
    End Class
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

To know more about the attributes that you can configure for the multi-series line chart, visit [this page]({% site.baseurl %}/chart-attributes?chart=msline "@@open-newtab").

### Using an XML String

A combination chart that shows the quarterly sales details—the revenue generated and the units sold—for product A is shown below:

{% embed_chart using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-2.js %}

We will look at how you can create this chart using an XML string generated from data contained in a 2D array.

The data structure that goes into the **../ArrayExample/CombinationXML.aspx** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
	&lt;%@ Page Language=&quot;C#&quot; AutoEventWireup=&quot;true&quot; CodeFile=&quot;CombinationXML.aspx.cs&quot; Inherits=&quot;ArrayExample_Combination&quot; %&gt;

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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-vb">
	&lt;%@ Page Language=&quot;VB&quot; AutoEventWireup=&quot;false&quot; CodeFile=&quot;CombinationXML.aspx.vb&quot; Inherits=&quot;Samples_ArrayExample_CombinationXML&quot; %&gt;

	&lt;!DOCTYPE html&gt;
	&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
	&lt;head runat=&quot;server&quot;&gt;
	  &lt;title&gt;FusionCharts - Simple&lt;/title&gt;
	  &lt;!-- FusionCharts script tag --&gt;
	  &lt;script type=&quot;text/javascript&quot; src=&quot;../../fusioncharts/fusioncharts.js&quot;&gt;&lt;/script&gt;
	  &lt;!-- End --&gt; 
	&lt;/head&gt;
	&lt;body&gt;
	  &lt;div style=&quot;text-align:center&quot;&gt;
	      &lt;asp:Literal ID=&quot;Literal1&quot; runat=&quot;server&quot;&gt;&lt;/asp:Literal&gt;           
	  &lt;/div&gt;
	&lt;/body&gt;
	&lt;/html&gt;
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>


The data structure that goes into the code behind **../ArrayExample/CombinationXML.aspx.cs** file is given below:


<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
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
          arrData[0, 0] = &quot;Quarter 1&quot;;
          arrData[1, 0] = &quot;Quarter 2&quot;;
          arrData[2, 0] = &quot;Quarter 3&quot;;
          arrData[3, 0] = &quot;Quarter 4&quot;;

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

          //Initialize the &lt;chart&gt; element. Define the chart-level attributes and
            // append them as strings to the `strXML` object.

          strXML.Append(&quot;&lt;chart palette='4' caption='Product A - Sales Details' PYAxisName='Revenue' SYAxisName='Quantity (in Units)' numberPrefix='$' formatNumberScale='0' showValues='0' decimals='0' &gt;&quot;);

          //Initialize the &lt;categories&gt; element.
          strCategories.Append(&quot;&lt;categories&gt;&quot;);

          //Initiate the &lt;dataset&gt; elements for the revenue and quantity data.
          strDataRev.Append(&quot;&lt;dataset seriesName='Revenue'&gt;&quot;);
          strDataQty.Append(&quot;&lt;dataset seriesName='Quantity' parentYAxis='S'&gt;&quot;);

          //Iterate through the data in the `arrData` array
          for (int i = 0; i &lt; arrData.GetLength(0); i++)
              {
                    //Append &lt;category name='...' /&gt; to `strCategories`
                  strCategories.AppendFormat(&quot;&lt;category name='{0}' /&gt;&quot;,arrData[i, 0]);
                  //AppendAdd &lt;set value='...' /&gt; to both the datasets.
                  strDataRev.AppendFormat(&quot;&lt;set value='{0}' /&gt;&quot;,arrData[i, 1]);
                  strDataQty.AppendFormat(&quot;&lt;set value='{0}' /&gt;&quot;,arrData[i, 2]);
              }

          //Close the `&lt;categories&gt;` element..
          strCategories.Append(&quot;&lt;/categories&gt;&quot;);

          //Close the `&lt;dataset&gt;` element for the revenue and quantity datasets.
            strDataRev.Append(&quot;&lt;/dataset&gt;&quot;);
          strDataQty.Append(&quot;&lt;/dataset&gt;&quot;);

          //Append the complete chart data converted to a string to the the `strXML` object.
          strXML.Append(strCategories.ToString());
          strXML.Append(strDataRev.ToString());
          strXML.Append(strDataQty.ToString());
          strXML.Append(&quot;&lt;/chart&gt;&quot;);

          // Initialize the chart.
          Chart sales = new Chart(&quot;mscombidy2d&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;xml&quot;, strXML.ToString());

          // Render the chart.
          Literal1.Text = sales.Render();
      }
    }
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-vb">
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
              arrData(0, 0) = &quot;Quarter 1&quot;
              arrData(1, 0) = &quot;Quarter 2&quot;
              arrData(2, 0) = &quot;Quarter 3&quot;
              arrData(3, 0) = &quot;Quarter 4&quot;
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
              'strCategories - Stores XML for the &lt;categories&gt; and child &lt;category&gt; elements
              'strDataRev - Stores XML for current year's sales
              'strDataQty - Stores XML for previous year's sales

              Dim strXML As New StringBuilder()
              Dim strCategories As New StringBuilder()
              Dim strDataRev As New StringBuilder()
              Dim strDataQty As New StringBuilder()

              'Initialize &lt;chart&gt; element
              strXML.Append(&quot;&lt;chart palette='4' caption='Product A - Sales Details' PYAxisName='Revenue' SYAxisName='Quantity (in Units)' numberPrefix='$' formatNumberScale='0' showValues='0' decimals='0' &gt;&quot;)

              'Initialize &lt;categories&gt; element - necessary to generate a multi-series chart
              strCategories.Append(&quot;&lt;categories&gt;&quot;)

              'Initiate &lt;dataset&gt; elements
              strDataRev.Append(&quot;&lt;dataset seriesName='Revenue'&gt;&quot;)
              strDataQty.Append(&quot;&lt;dataset seriesName='Quantity' parentYAxis='S'&gt;&quot;)

              'Iterate through the data 
              For i As Integer = 0 To arrData.GetLength(0) - 1
                  'Append &lt;category name='...' /&gt; to strCategories
                  strCategories.AppendFormat(&quot;&lt;category name='{0}' /&gt;&quot;, arrData(i, 0))
                  'Add &lt;set value='...' /&gt; to both the datasets
                  strDataRev.AppendFormat(&quot;&lt;set value='{0}' /&gt;&quot;, arrData(i, 1))
                  strDataQty.AppendFormat(&quot;&lt;set value='{0}' /&gt;&quot;, arrData(i, 2))
              Next

              'Close &lt;categories&gt; element
              strCategories.Append(&quot;&lt;/categories&gt;&quot;)

              'Close &lt;dataset&gt; elements
              strDataRev.Append(&quot;&lt;/dataset&gt;&quot;)
              strDataQty.Append(&quot;&lt;/dataset&gt;&quot;)

              'Assemble the entire XML now
              strXML.Append(strCategories.ToString())
              strXML.Append(strDataRev.ToString())
              strXML.Append(strDataQty.ToString())
              strXML.Append(&quot;&lt;/chart&gt;&quot;)

              ' Initialize chart - Multi-series 2D Dual Y Combination Chart with data from Data/Data.json
              Dim sales As New Chart(&quot;mscombidy2d&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;xml&quot;, strXML.ToString())
              ' Render the chart
              Literal1.Text = sales.Render()
          End Sub
      End Class
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

To know more about the attributes that you can configure for the multi-series combination dual-y 2D chart, visit [this page]({% site.baseurl %}/chart-attributes?chart=mscombidy2d "@@open-newtab").

### Loading JSON Data from a File

A column 3D chart that shows the monthly revenue for the last year at Harry’s SuperMart is shown below:

{% embed_chart using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-3.js %}

We will look at how you can create this gauge by loading data from a `.json` file.

The data structure that goes into the **../BasicExample/JSONURL.aspx** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
	&lt;%@ Page Language=&quot;C#&quot; AutoEventWireup=&quot;true&quot; CodeFile=&quot;JSONUrl.aspx.cs&quot; Inherits=&quot;BasicExample_BasicChart&quot; %&gt;

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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-vb">
	&lt;%@ Page Language=&quot;VB&quot; AutoEventWireup=&quot;false&quot; CodeFile=&quot;JSON_URL.aspx.vb&quot; Inherits=&quot;Samples_BasicExamples_JSON_URL&quot; %&gt;

      &lt;!DOCTYPE html&gt;

      &lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
      &lt;head runat=&quot;server&quot;&gt;
          &lt;title&gt;Basic FusionCharts population using JSON URL&lt;/title&gt;
          &lt;!-- FusionCharts script tag --&gt;
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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>


The data structure that goes into the code behind **../BasicExample/JSONURL.aspx.cs** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
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

            Chart sales = new Chart(&quot;column3d&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;jsonurl&quot;, &quot;../Data/Data.json&quot;);

            // Render the chart
            Literal1.Text = sales.Render();

      }

    }
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-vb"> 
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
	      Dim sales As New Chart(&quot;column3d&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;jsonurl&quot;, &quot;../../Data/Data.json&quot;)
	      ' Render the chart
	      Literal1.Text = sales.Render()
	  End Sub

	End Class
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>


To know more about the attributes that you can configure for the column 3D chart, visit [this page]({% site.baseurl %}/chart-attributes?chart=column3d "@@open-newtab").

### Loading XML Data from a File

An angular gauge showing the customer satisfaction score at Los Angeles Topanga is shown below:

{% embed_chart using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-4.js %}

We will look at how you can create this gauge by loading data from a `.xml` file.

The data structure that goes into the **../BasicExample/XMLURL.aspx** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
  <div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
	&lt;%@ Page Language=&quot;C#&quot; AutoEventWireup=&quot;true&quot; CodeFile=&quot;XMLUrl.aspx.cs&quot; Inherits=&quot;BasicExample_BasicChart&quot; %&gt;

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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-vb">
	&lt;%@ Page Language=&quot;VB&quot; AutoEventWireup=&quot;false&quot; CodeFile=&quot;XML_URL.aspx.vb&quot; Inherits=&quot;Samples_BasicExamples_XML_URL&quot; %&gt;

      &lt;!DOCTYPE html&gt;
      &lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot;&gt;
      &lt;head runat=&quot;server&quot;&gt;
          &lt;title&gt;Basic FusionCharts population using XML URL&lt;/title&gt;
          &lt;!-- FusionCharts script tag --&gt;
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
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>


The data structure that goes into the code behind **../BasicExample/XMLURL.aspx.cs** file is given below:

<div class="code-wrapper">
<ul class='code-tabs'>
  <li class='active'><a data-toggle='json'>C#</a></li>
  <li><a data-toggle='xml'>VB</a></li>
</ul>
<div class='tab-content'>
<div class='tab json-tab active'>
<pre><code class="custom-hlc language-cs">
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

                Chart score= new Chart(&quot;angulargauge&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;xmlurl&quot;, &quot;../Data/Data.xml&quot;);

                  // Render the chart.
                Literal1.Text = score.Render();
           }
      }  
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

<div class='tab xml-tab'>
<pre><code class="custom-hlc language-vb">
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
	      Dim sales As New Chart(&quot;angulargauge&quot;, &quot;myChart&quot;, &quot;600&quot;, &quot;350&quot;, &quot;xmlurl&quot;, &quot;../../Data/Data.xml&quot;)
	      ' Render the chart
	      Literal1.Text = sales.Render()
	  End Sub
	End Class
</code></pre>
<button class='btn btn-outline-secondary btn-copy' title='Copy to Clipboard'>COPY</button>
</div>

</div>
</div>

To know more about the attributes that you can configure for the angular gauge, visit [this page]({% site.baseurl %}/chart-attributes?chart=angulargauge "@@open-newtab").

## Important Tips for Developers

Given below are a few tips that, although applicable while using FusionCharts, need to be specifically paid attention to here:

* The structure of chart data is different based on whether you are rendering a single-series chart or a multi-series chart. The table below shows the difference:

**Single-series Chart**
  
{% embed_data using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-5.js %}

For an example, click [here]({% site.baseurl %}/chart-guide/standard-charts/line-area-and-column-charts "@@open-newtab").

**Multi-series Chart**

{% embed_data using-with-server-side-languages-asp-net-different-ways-of-loading-data-example-6.js %}

For an example, click [here]({% site.baseurl %}/chart-guide/standard-charts/multi-series-charts "@@open-newtab").
  
* Make sure that the XML strings are escaped properly, especially for instances where the data for the chart is enclosed in quotation marks. Also make sure that the entire string is enclosed in single quotes, while the attributes and corresponding values are enclosed in double quotes. Doing otherwise will break the code.

* The chart ID should be unique for all charts rendered on the same page. Otherwise, it will result in a JavaScript error.