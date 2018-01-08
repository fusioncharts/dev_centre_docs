---
permalink: using-with-server-side-languages/java/creating-charts-with-data-from-a-database.html
title: Creating Charts in Java using a Database | FusionCharts
description: In addition to specifying the chart data directly in the JSON/XML code, you can also fetch data for the chart from a database.
heading: Creating Charts in Java using a Database
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts JSP Wrapper can be downloaded from <a href="http://www.fusioncharts.com/jsp-charts/" target="_blank">here</a>.</p>

In addition to specifying the chart data (or the URL for the file in which the chart data is stored) directly in the JSON/XML code, you can also fetch data for the chart from a database.

This section showcases how you can do this using the FusionCharts JSP wrapper.

In this section, you will be shown how you can:

* <a href="/using-with-server-side-languages/java/creating-charts-with-data-from-a-database#creating-a-column-2d-chart" class="smoth-scroll">Create a simple column 2D chart by fetching data from a database</a>

* <a href="/using-with-server-side-languages/java/creating-charts-with-data-from-a-database#creating-a-drill-down-chart" class="smoth-scroll">Create a drill-down chart by fetching data from a database</a>


<p class="text-info">Before you proceed, make sure you have <a href="/using-with-server-side-languages/java/introduction.html" target="_blank">installed and set up the plugin </a> correctly. Although you can create all kinds of charts using this method, in this section we will focus on only these two examples.</p>


## Creating a Column 2D Chart

Assume that you have a __fusioncharts_jspsample__ database with the __Country__ table that stores the population of all countries in the world. Using the data in this database, let's say you want to plot a column 2D chart showing the top ten most populous countries in the world.

<p class="text-info"> You can [download](http://dev.mysql.com/doc/index-other.html) this database from the MYSQL website or refer to the sample database available [here](https://dev.mysql.com/doc/world-setup/en/). </p>

The resultant column 2D chart looks like this:

{% embed_chart using-with-server-side-languages-java-creating-charts-with-data-from-a-database-example-1.js %}

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
                        "500","300",			
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

<p class="text-info"> The code above uses the `google-gson` library. <br> Gson is a Java library that can be used to convert: <br> - Java objects into their corresponding JSON representation <br> - JSON strings into their corresponding Java objects. <br> Gson allows working with arbitrary Java objects that include pre-existing objects for which you may not have the source code. <br> <br> The google-gsn library : <br> - Provides the `toJson()` and `fromJson()` methods for converting Java objects to JSON and the other way round <br> - Allows conversion of the already existing unmodifiable objects to and from JSON <br> - Supports Java Generics extensively <br> - Allows custom representations of objects <br> - Supports arbitrarily complex objects (with deep inheritance hierarchies and extensive use of generic types) <br> <br> The code above imports the `com.google.gson` package that enables the conversion from JSON to Java and Java to JSON. <br> <br> Click [here](https://github.com/google/gson) for more information on google-gson. </p>

## Creating a Drill-down Chart

Let's say that you now need to plot a chart that shows the top 10 most populous countries and the top 10 most populous cities in these countries. Assume that the __fusioncharts_jspsample__ database also includes the __City__ table that stores the population of all cities in all countries. 

Drill-down charts are used to show data at different levels of a hierarchy.

Therefore, the resultant drill-down chart, according to the use-case, looks like this:

{% embed_chart using-with-server-side-languages-java-creating-charts-with-data-from-a-database-example-2.js %}

To render the above chart, we need a JSP files —__country.jsp__. The __country.jsp__ file creates a drill-down column 2D chart showing the most populous countries and the most populous cities for countries that will be selected in the parent chart.

The data structure that should go into the __country.jsp__ file is given below:

```java

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*" %>
<%@page import="java.util.*" %>
<%@page import="com.google.gson.*" %>

<%
    
/* 
    The following four code lines contain the database connection information.
    Alternatively, you can move these code lines to a separate file and
    include the file here. You can also modify this code based on your 
    database connection. 
 */

   String hostdb = "localhost:3306";  // MySQl host
   String userdb = "root";  // MySQL username
   String passdb = "";  // MySQL password
   String namedb = "fusioncharts_jspsample";  // MySQL database name

    // Establish a connection to the database
    DriverManager.registerDriver(new com.mysql.jdbc.Driver());
    Connection con = DriverManager.getConnection("jdbc:mysql://" + hostdb + "/" + namedb , userdb , passdb);
   
    %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Creating Charts with Data from a Database - fusioncharts.com</title>
<!--    Step 1: Include the `fusioncharts.js` file. This file is needed to
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
            String sqlQueryCountry="SELECT * FROM Country ORDER BY Population DESC LIMIT 10";

            // Prepare the query statement    
            PreparedStatement ptCountry=con.prepareStatement(sqlQueryCountry);  
            // Prepare the query statement
            ResultSet rsCountry=ptCountry.executeQuery();
            
            // The 'chart' map object holds the chart attributes and data.
            Map<String, String> chart = new HashMap<String, String>();
            
            chart.put("caption", "Top 10 Most Populous Countries");
            chart.put("showValues", "0");
            chart.put("theme", "zune");
 
            // Push the data into the array using map object.
            ArrayList data = new ArrayList();
            
            /*
                `linkeddata` array: It contains data for individual linked 
                items. The links should be defined in the format 
                `newchart-dataformat-datasource`. 
            */
            ArrayList linkeddata = new ArrayList();
            while(rsCountry.next()) {
            /*
                The `link` attribute: It defines the unique id of the linked 
                data inside the `linkeddata` array. Using this attribute 
                FusionCharts finds out the corresponding data for each linked 
                item.
                
                For the data string method, dataformat takes JSON and 
                datasource takes the value of the unique identifier that 
                refers to the data embedded inside the linkeddata array in 
                the parent data source. So the Country drill-down links will 
                get generated as newchart-json-IND, newchart-json-CHN ... 
            */    
                Map<String, String> lv = new HashMap<String, String>();
                lv.put("label", rsCountry.getString("Name"));
                lv.put("value", rsCountry.getString("Population"));
                lv.put("link", "newchart-json-" + rsCountry.getString("Code"));
                data.add(lv);
      
                // Create the linkedDataObj for cities drilldown    
                Map<String, String> linkedDataObj = new HashMap<String, String>();
                // Inititate the linkedDataObj for cities drilldown
                linkedDataObj.put("id", rsCountry.getString("Code"));
                
               // The 'linkedChartAttribute' map object holds the chart attributes .
                Map<String, String> linkedChartAttribute = new HashMap<String, String>();
                linkedChartAttribute.put("caption" , "Top 10 Most Populous Cities - " + rsCountry.getString("Name") );
                linkedChartAttribute.put("showValues", "0");
                linkedChartAttribute.put("theme" , "zune");

                // Convert the data in the `City` model into a format that can be consumed by FusionCharts.     
                ArrayList linkedChartData = new ArrayList();
                
                // Filtering the data base on the Country Code
                // Form the SQL query that returns the top 10 most populous countries
                String sqlQueryCity="SELECT Name, Population FROM City WHERE CountryCode = ? ORDER BY Population DESC LIMIT 10";

                // Prepare the query statement.
                PreparedStatement ptCity=con.prepareStatement(sqlQueryCity);  
                ptCity.setString(1, rsCountry.getString("Code"));
                // Execute the query.
                ResultSet rsCity=ptCity.executeQuery();
                while(rsCity.next()) {
                  Map<String, String> arrDara = new HashMap<String, String>();
                  arrDara.put("label", rsCity.getString("Name"));
                  arrDara.put("value", rsCity.getString("Population"));
                  linkedChartData.add(arrDara);
                } 
                
                //closing the connection.
                rsCity.close();
            
            /*  create a 'linkedchart' map object to make a FC's 
                linkedchart structure.
            */    
                Map<String, String> linkedchart = new HashMap<String, String>();
            /*
                gson.toJson() the data to retrieve the string containing the
                JSON representation of the data in the array.
            */    
                linkedchart.put("chart", gson.toJson(linkedChartAttribute));
                linkedchart.put("data", gson.toJson(linkedChartData));
               
                linkedDataObj.put("linkedchart", gson.toJson(linkedchart));
                linkeddata.add(linkedDataObj);
            } //end of while loop
            
            //closing the connection.
            rsCountry.close();
 
            //create 'dataMap' map object to make a complete FC datasource.
            Map<String, String> dataMap = new LinkedHashMap<String, String>();  
        
            dataMap.put("chart", gson.toJson(chart));
            dataMap.put("data", gson.toJson(data));
            dataMap.put("linkeddata", gson.toJson(linkeddata));

            FusionCharts columnChart= new FusionCharts(
                        //type of chart
                        "column2d",             
                        //unique chart ID
                        "chart1",               
                        //width and height of the chart
                        "500","300",            
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