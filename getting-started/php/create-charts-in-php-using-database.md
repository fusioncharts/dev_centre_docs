---
title: Create Charts in PHP using Database | FusionCharts
description: This section showcases how you can do this using the FusionCharts PHP wrapper.
heading: Create Charts in PHP using Database
---

In addition to directly specifying the chart data (or the URL for the file in which the chart data is stored) directly in the JSON/XML code, you can also fetch data for the chart from a database.

This section showcases how you can do this using the FusionCharts PHP wrapper.

> Before you proceed, make sure you have [installed and set up the plugin correctly](/getting-started/php/your-first-chart-using-php). Although you can create all kinds of charts using this method, in this section we will focus on only these two examples.

## Creating a Column 2D Chart

Assume that you have a __fusioncharts_phpsample__ database with the __Country__ table that stores the list of countries with oil reserves for the year 2017 to 2018. Using the data in this database, you want to plot a column 2D chart showing the top eight countries with most oil reserves.

> You can [download](http://dev.mysql.com/doc/index-other.html) this database from the MYSQL website or refer to the sample database available [here](https://dev.mysql.com/doc/world-setup/en/).

The column 2D chart that we need to render here looks like this:

{% embed_chart create-charts-using-database-example-1.js %}

The data structure needed to render this chart is given below:

```
<?php

/* Include the `fusioncharts.php` file that contains functions  to embed the charts. */

   include("includes/fusioncharts.php");

/* The following 4 code lines contain the database connection information. Alternatively, you can move these code lines to a separate file and include the file here. You can also modify this code based on your database connection. */

   $hostdb = "localhost";  // MySQl host
   $userdb = "root";  // MySQL username
   $passdb = "";  // MySQL password
   $namedb = "fusioncharts_phpsample";  // MySQL database name

   // Establish a connection to the database
   $dbhandle = new mysqli($hostdb, $userdb, $passdb, $namedb);

   /*Render an error message, to avoid abrupt failure, if the database connection parameters are incorrect */
   if ($dbhandle->connect_error) {
    exit("There was an error with your connection: ".$dbhandle->connect_error);
   }
?>

<html>
  <head>
    <title>FusionCharts XT - Column 2D Chart - Data from a database</title>
    <link  rel="stylesheet" type="text/css" href="css/style.css" />
    <!-- You need to include the following JS file to render the chart.
    When you make your own charts, make sure that the path to this JS file is correct.
    Else, you will get JavaScript errors. -->
    <script src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script> 
    <script src=" https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script> 
  </head>
   <body>
    <?php
      // Form the SQL query that returns the top 10 most populous countries
      $strQuery = "SELECT Name, Population FROM Country ORDER BY Population DESC LIMIT 10";

      // Execute the query, or else return the error message.
      $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

      // If the query returns a valid response, prepare the JSON string
      if ($result) {
          // The `$arrData` array holds the chart attributes and data
          $arrData = array(
              "chart" => array(
                  "caption" => "Countires With Most Oil Reserves [2018-2019]",
                  "showValues" => "0",
                  "theme" => "fusion"
                )
            );

          $arrData["data"] = array();

  // Push the data into the array
          while($row = mysqli_fetch_array($result)) {
            array_push($arrData["data"], array(
                "label" => $row["Name"],
                "value" => $row["oil_reserves"]
                )
            );
          }

          /*JSON Encode the data to retrieve the string containing the JSON representation of the data in the array. */

          $jsonEncodedData = json_encode($arrData);

  /*Create an object for the column chart using the FusionCharts PHP class constructor. Syntax for the constructor is ` FusionCharts("type of chart", "unique chart id", width of the chart, height of the chart, "div id to render the chart", "data format", "data source")`. Because we are using JSON data to render the chart, the data format will be `json`. The variable `$jsonEncodeData` holds all the JSON data for the chart, and will be passed as the value for the data source parameter of the constructor.*/

          $columnChart = new FusionCharts("column2D", "myFirstChart" , 700, 400, "chart-1", "json", $jsonEncodedData);

          // Render the chart
          $columnChart->render();

          // Close the database connection
          $dbhandle->close();
      }
    ?>
    <div id="chart-1"><!-- Fusion Charts will render here--></div>\
   </body>
</html>
```

The above chart has been rendered using the following steps:

1. Include the `fusioncharts.php` file which contains funtions to embed the chart.

2. Add the following lines for the database connection information. **Note:** Alternatively, you can move these code lines to a separate file and include the file. You can also modify the code accordingly on your database connection.
    * `$hostdb = "localhost";` (MySQl host)
    * `$userdb = "root";` (MySQL username)
    * `$passdb = "";` (MySQL password)
    * `$namedb = "fusioncharts_phpsample";` (MySQL database name)

3. Establish a connection to the database.

4. Render an error message, to avoid abrupt failure, if the database connection parameters are incorrect.

5. Include the necessary JS files to render the chart. **Note:** When you make your own charts, make sure that the path to this JS file is correct. Else, you will get JavaScript errors.

6. Form the SQL query that returns the **countries with most oil reserves**.

7. Execute the query, or return the error message. If the query returns a valid response, prepare the JSON string.

8. The `$arrData` array holds the chart attributes and data.

9. Push the data in an array.

10. JSON Encode the data to retrieve the string containing the JSON representation of the data in the array.

11. Create an object for the column chart using the FusionCharts PHP class constructor. In the above sample a JSON data has been used to render the chart, so the data format will be `json`. The variable `$jsonEncodeData` holds all the JSON data for the chart, and is passed as the value for the data source parameter of the constructor.

12. Once you are done with the above steps, its time to render the chart.

13. Once the chart has been rendered, close the database connection.

That's it! Your chart using database is ready.