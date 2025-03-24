---
title: Create Charts in Java using Database | FusionCharts
description: In addition to specifying the chart data directly in the JSON/XML code, you can also fetch data for the chart from a database.
heading: Create Charts in Java using Database
---

In addition to specifying the chart data (or the URL for the file in which the chart data is stored) directly in the JSON/XML code, you can also fetch data for the chart from a database.

This section showcases how you can do this using the FusionCharts JSP wrapper.

> Before you proceed, make sure you have [installed and set up the plugin](/getting-started/java/your-first-chart-using-java) correctly. Although you can create all kinds of charts using this method, in this section we will focus on only these two examples.

## Creating a Column 2D Chart

Assume that you have a __fusioncharts_phpsample__ database with the __Country__ table that stores the list of countries with oil reserves for the year 2017 to 2018. Using the data in this database, you want to plot a column 2D chart showing the top eight countries with most oil reserves.

> You can [download](http://dev.mysql.com/doc/index-other.html) this database from the MYSQL website or refer to the sample database available [here](https://dev.mysql.com/doc/world-setup/en/).

The resultant column 2D chart looks like this:

{% embed_chart create-charts-using-database-example-1.js %}

The data structure to create this chart, by fetching chart data from a database, is given below:

```java
<%
    
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*" %>
<%@page import="java.util.*" %>
<%@page import="com.google.gson.*" %>

<%
    
/* 
    The following 4 code lines contain the database connection information.
    Alternatively, you can move these code lines to a separate file and
    include the file here. You can also modify this code based on your 
    database connection. 
 */

   String hostdb = "localhost:3306";  			// MySQl host
   String userdb = "root";  					// MySQL username
   String passdb = "";  						// MySQL password
   String namedb = "fusioncharts_jspsample";  	// MySQL database name

    // Establish a connection to the database
    DriverManager.registerDriver(new com.mysql.jdbc.Driver());
    Connection con = DriverManager.getConnection("jdbc:mysql://" + hostdb + "/" + namedb , userdb , passdb);
   
    %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Creating Charts with Data from a Database - fusioncharts.com</title>
<!-- 	Step 1: Include the `fusioncharts.js` file. This file is needed to
        render the chart. Ensure that the path to this JS file is correct.
        Otherwise, it may lead to JavaScript errors.
--> 
        <script src="../scripts/fusioncharts.js"></script>
    </head>
    <body>
         <div id="chart"></div>
<!--    Step 2: Include the `FusionCharts.java` file as a package in your 
        project.
    
        Step 3:Include the package in the file where you want to show 
        FusionCharts.

-->
        <%@page import="fusioncharts.FusionCharts" %>

<!--
        
        Step 4: Create a chart object using the FusionCharts JAVA class 
        constructor. Syntax for the constructor: 
        `FusionCharts("type of chart", "unique chart id", "width of chart",
                        "height of chart", "div id to render the chart", 
                        "data format", "data source")`   
-->           
        <%
         /*
            google-gson
    
            Gson is a Java library facilitating conversion of Java objects 
            into their JSON representation and 
            JSON strings into their equivalant Java objects. 
            Gson can also work with arbitrary Java objects 
            including the pre-existing ones that 
            you may not have the source-code for. 
            Read the note below this code for more details on the google-gson library.    
         */
    
            Gson gson = new Gson();
            
            
            // Form the SQL query that returns the top 10 most populous countries
            String sql="SELECT Name, Population FROM Country ORDER BY Population DESC LIMIT 10";

            // Execute the query
            PreparedStatement pt=con.prepareStatement(sql);    
            ResultSet rs=pt.executeQuery();
            
            // The 'chartobj' map object holds the chart attributes and data.
            Map<String, String> chartobj = new HashMap<String, String>();
            
            chartobj.put("caption", "Top 10 most populous countries");
            chartobj.put("showValues", "0");
            chartobj.put("theme", "zune");
 
            // Push the data into the array using map object.
            ArrayList arrData = new ArrayList();
            while(rs.next()) {
                Map<String, String> lv = new HashMap<String, String>();
                lv.put("label", rs.getString("Name"));
                lv.put("value", rs.getString("Population"));
                arrData.add(lv);             
            }
            
            //close the connection.
            rs.close();
 
            //create 'dataMap' map object to make a complete FC datasource.
             Map<String, String> dataMap = new LinkedHashMap<String, String>();  
        /*
            gson.toJson() the data to retrieve the string containing the
            JSON representation of the data in the array.
        */
             dataMap.put("chart", gson.toJson(chartobj));
             dataMap.put("data", gson.toJson(arrData));

            FusionCharts columnChart= new FusionCharts(
                        //type of chart
            			"column2d",				
                        //unique chart ID
                        "chart1",				
                        //width and height of the chart
                        "700","400",			
                        //div ID of the chart container
                        "chart",				
                        //data format
                        "json",					
                        //data source
                        gson.toJson(dataMap) 	
                    );
           
            %>
            
<!--    Step 5: Render the chart    -->                
            <%=columnChart.render()%>
        
    </body>
</html>

```

The above chart has been rendered using the following steps:

1. Include the necessary files which contains functions to embed the chart. For example, `java.sql`, `java.util`, etc.

2. Add the following lines for the database connection information.
    * String hostdb = "localhost:3306"; (MySQl host)
    * String userdb = "root"; (MySQL username)
    * String passdb = ""; (MySQL password)
    * String namedb = "fusioncharts_jspsample"; (MySQL database name)

3. Establish a connection to the database.

4. Include the necessary JS files to render the chart. **Note:** Ensure that the path to this JS file is correct. Otherwise, it may lead to JavaScript errors.

5. Include the `FusionCharts.java` file as a package in your project.

6. Include the package in the file where you want to show FusionCharts.

7. Create a chart object using the FusionCharts JAVA class constructor.

8. Add the `google-gson` library.

9. Form the SQL query that returns the **countries with most oil reserves**.

10. Execute the query.

11. The `chartObj` map object holds the chart attributes and data.

12. Push the data into the array using map object.

13. Clone the connction.

14. Create `dataMap` map object to make a complete FC datasource.

15. `gson.toJson()` is  used to retrieve the string containing the JSON representation of the data in the array.

16. In the FusionCharts constructor:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `<div>` ID of the chart container.
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `gson.toJson(dataMap)`.

> The code above uses the `google-gson` library. <br> Gson is a Java library that can be used to convert: <br> - Java objects into their corresponding JSON representation <br> - JSON strings into their corresponding Java objects. <br> Gson allows working with arbitrary Java objects that include pre-existing objects for which you may not have the source code. <br> <br> The google-gsn library : <br> - Provides the `toJson()` and `fromJson()` methods for converting Java objects to JSON and the other way round <br> - Allows conversion of the already existing unmodifiable objects to and from JSON <br> - Supports Java Generics extensively <br> - Allows custom representations of objects <br> - Supports arbitrarily complex objects (with deep inheritance hierarchies and extensive use of generic types) <br> <br> The code above imports the `com.google.gson` package that enables the conversion from JSON to Java and Java to JSON. <br> <br> Click [here](https://github.com/google/gson) for more information on google-gson.
