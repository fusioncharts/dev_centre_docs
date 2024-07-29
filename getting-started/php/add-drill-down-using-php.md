---
title: Adding Drill Down using PHP | FusionCharts
description: Understand how to Adding Drill Down using PHP with FusionCharts. Efficiently enhance flexibility & visual appeal in your web applications.
heading: Adding Drill Down using PHP
---

With FusionCharts, you can create unlimited levels of drill-down with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill-down to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up, or it can open in a new window or frame.

Assume that the __fusioncharts_phpsample__ database also includes the __City__ table that stores the population of all cities in all countries. You now need to plot a chart that shows the top 10 most populous countries and the top 10 most populous cities in these countries.

To show data at different levels of a hierarchy, we use drill-down charts. We will now see how you can create a drill-down column 2D chart based on the above scenario, the data for which will be loaded from a database.

## The chart thus rendered looks like this:

{% embed_chart adding-drill-down-using-php.js %}

To render the above chart, we need two PHP files - `country.php` and `countryDrillDown.php`. The `country.php` file creates a drill-down column 2D chart showing the most populous countries. The `countryDrillDown.php` file creates column 2D charts that show the most populous cities for the country that was selected in the parent chart.

The data structure in the `country.php` file is given below:

```php

<?php

/*Include the `fusioncharts.php` file that contains functions
  to embed the charts.
*/
  include("includes/fusioncharts.php");

  /* The following 4 code lines contain the database connection information. Alternatively, you can move these code lines to a separate file and include the file here. You can also modify this code based on your database connection.   */

   $hostdb = "localhost";  // MySQl host
   $userdb = "root";  // MySQL username
   $passdb = "";  // MySQL password
   $namedb = "fusioncharts_phpsample";  // MySQL database name

   // Establish a connection to the database
   $dbhandle = new mysqli($hostdb, $userdb, $passdb, $namedb);

   // Render an error message, to avoid abrupt failure, if the database connection parameters are incorrect
   if ($dbhandle->connect_error) {
    exit("There was an error with your connection: ".$dbhandle->connect_error);
   }

?>

<html>
   <head>
    <title>FusionCharts XT - Column 2D Chart - Data from a database</title>
    <link  rel="stylesheet" type="text/css" href="css/style.css" />

  <!--  Include the `fusioncharts.js` file. This file is needed to render the chart. Ensure that the path to this JS file is correct. Otherwise, it may lead to JavaScript errors. -->

      <script src="fusioncharts/fusioncharts.js"></script>
   </head>
   <body>
    <?php

      // Form the SQL query that returns the top 10 most populous countries
      $strQuery = "SELECT Name, Population, Code FROM Country ORDER BY Population DESC LIMIT 10";

      // Execute the query, or else return the error message.
      $result = $dbhandle->query($strQuery) or exit("Error code ({$dbhandle->errno}): {$dbhandle->error}");

      // If the query returns a valid response, prepare the JSON string
      if ($result) {
          // The `$arrData` array holds the chart attributes and data
          $arrData = array(
                "chart" => array(
                    "caption" => "Top 10 Most Populous Countries",
                    "showValues"=> "0",
                    "theme"=> "zune"
                )
            );

          $arrData["data"] = array();

  // Push the data into the array

          while($row = mysqli_fetch_array($result)) {
            array_push($arrData["data"], array(
                "label" => $row["Name"],
                "value" => $row["Population"],
                "link" => "countryDrillDown.php?Country=".$row["Code"]
                )
            );
          }

          /*JSON Encode the data to retrieve the string containing the JSON representation of the data in the array. */

          $jsonEncodedData = json_encode($arrData);

          /*Create an object for the column chart. Initialize this object using the FusionCharts PHP class constructor. The constructor is used to initialize the chart type, chart id, width, height, the div id of the chart container, the data format, and the data source. */

          $columnChart = new FusionCharts("column2D", "myFirstChart" , 600, 300, "chart-1", "json", $jsonEncodedData);

          // Render the chart
          $columnChart->render();

          // Close the database connection
          $dbhandle->close();

      }

    ?>
    <div id="chart-1"><!-- Fusion Charts will render here--></div>
   </body>
</html>

```

The data structure for the `countryDrillDown.php` file is given below:

```php
<?php
 /* Include the `includes/fusioncharts.php` file that contains functions to embed the charts.*/
   include("includes/fusioncharts.php");

  /* The following 4 code lines contains the database connection information. Alternatively, you can move these code lines to a separate file and include the file here. You can also modify this code based on your database connection.   */

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
    <title>FusionCharts XT - Column 2D Chart</title>
    <link  rel="stylesheet" type="text/css" href="css/style.css" />

    <!--  Include the `fusioncharts.js` file. This file is needed to render the chart. Ensure that the path to this JS file is correct. Otherwise, it may lead to JavaScript errors. -->

    <script src="fusioncharts/fusioncharts.js"></script>
   </head>
   <body>
    <?php

      // Get the country code from the GET parameter
      $countryCode = $_GET["Country"];

      // Form the SQL query that returns the top 10 most populous cities in the selected country
      $cityQuery = "SELECT Name, Population FROM City WHERE CountryCode = ? ORDER BY Population DESC LIMIT 10";

      // Prepare the query statement
      $cityPrepStmt = $dbhandle->prepare($cityQuery);

      // If there is an error in the statement, exit with an error message
      if($cityPrepStmt === false) {
          exit("Error while preparing the query to fetch data from City Table. ".$dbhandle->error);
      }

      // Bind the parameters to the query prepared
      $cityPrepStmt->bind_param("s", $countryCode);

      // Execute the query
      $cityPrepStmt->execute();

      // Get the results from the query executed
      $cityResult = $cityPrepStmt->get_result();

      // If the query returns a valid response, prepare the JSON string
      if ($cityResult) {

          /* Form the SQL query that will return the country name based on the country code. The result of the above query contains only the country code. The country name is needed to be rendered as a caption for the chart that shows the 10 most populous cities */

          $countryNameQuery = "SELECT Name FROM Country WHERE Code = ?";

          // Prepare the query statement
          $countryPrepStmt = $dbhandle->prepare($countryNameQuery);

          // If there is an error in the statement, exit with an error message
          if($countryPrepStmt === false) {
            exit("Error while preparing the query to fetch data from Country Table. ".$dbhandle->error);
          }

          // Bind the parameters to the query prepared
          $countryPrepStmt->bind_param("s", $countryCode);

          // Execute the query
          $countryPrepStmt->execute();

          // Bind the country name to the variable `$countryName`
          $countryPrepStmt->bind_result($countryName);

          // Fetch the result from prepared statement
          $countryPrepStmt->fetch();

          // The `$arrData` array holds the chart attributes and data
          $arrData = array(
                "chart" => array(
                    "caption" => "Top 10 Most Populous Cities in ".$countryName,
                    "showValues"=> "0",
                    "theme"=> "zune"
                )
            );

          $arrData["data"] = array();

  // Push the data into the array
          while($row = $cityResult->fetch_array()) {
                array_push($arrData["data"], array(
                "label" => $row["Name"],
                "value" => $row["Population"]
                )
            );
          }

           /*JSON Encode the data to retrieve the string containing the JSON representation of the data in the array. */

          $jsonEncodedData = json_encode($arrData);

          /*Create an object for the column chart using the FusionCharts PHP class constructor. Syntax for the constructor is `FusionCharts("type of chart", "unique chart id", "width of chart", "height of chart", "div id to render the chart", "data format", "data source")`.*/

          $columnChart = new FusionCharts("column2D", "myFirstChart" , 600, 300, "chart-1", "json", $jsonEncodedData);

          // Render the chart
          $columnChart->render();

          // Close the database connection
          $dbhandle->close();
      }
    ?>

    <a href="country.php">Back</a>
    <div id="chart-1"><!-- Fusion Charts will render here--></div>
   </body>
</html>
```
