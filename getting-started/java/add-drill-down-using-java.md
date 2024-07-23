---
title: Adding Drill Down using Java | FusionCharts
description: Learn more about drill-down capabilities in Java with FusionCharts! Visualize top countries & cities dynamically. Experience powerful data insights now!
heading: Adding Drill Down using Java
---

## The data structure that should go into the country.jsp file is given below:

With FusionCharts, you can create unlimited levels of drill-down with a single data source. The parent chart contains all data — for the parent chart as well as all descendant (child, grandchild) charts. The links to all the descendant charts are defined in the parent chart.

You can drill-down to descendant charts by simply clicking the data plot items on the parent chart. A descendant chart can either replace the parent chart with an option to drill-up, or it can open in a new window or frame.

Let's say that you now need to plot a chart that shows the top 10 most populous countries and the top 10 most populous cities in these countries. Assume that the __fusioncharts_jspsample__ database also includes the __City__ table that stores the population of all cities in all countries. 

Drill-down charts are used to show data at different levels of a hierarchy.

Therefore, the resultant drill-down chart, according to the use-case, looks like this:

{% embed_chart adding-drill-down-using-java.js %}

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
