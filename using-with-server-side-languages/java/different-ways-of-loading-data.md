---
permalink: using-with-server-side-languages/java/different-ways-of-loading-data.html
title: Different Ways of Loading Data in Java | FusionCharts
description: The FusionCharts JSP wrapper lets you load data for a chart using a static JSON/XML string and a JSON/XML string generated from an associative array
heading: Different Ways of Loading Data in Java
chartPresent: true
---

<p style="background:rgba(249, 249, 249, 1); padding:15px; border:1px solid #888; border-bottom-width:3px; border-radius:4px; text-align:center;">FusionCharts JSP Wrapper can be downloaded from <a href="http://www.fusioncharts.com/jsp-charts/" target="_blank">here</a>.</p>

The FusionCharts JSP wrapper lets you load data for a chart using:

* <a href="/using-with-server-side-languages/java/different-ways-of-loading-data#loading-data-from-a-static-json-string" class="smoth-scroll">a static JSON string</a>

* <a href="/using-with-server-side-languages/java/different-ways-of-loading-data#loading-data-from-a-static-xml-string" class="smoth-scroll">a static XML string</a>

* <a href="/using-with-server-side-languages/java/different-ways-of-loading-data#loading-data-from-a-json-string-generated-from-an-associative-array" class="smoth-scroll">a JSON string generated from an associative array</a>

* <a href="/using-with-server-side-languages/java/different-ways-of-loading-data#loading-data-from-an-xml-string-generated-from-an-associative-array" class="smoth-scroll">an XML string generated from an associative array</a>

<p class="text-info">Before you proceed, make sure you have <a href="/using-with-server-side-languages/java/introduction.html" target="_blank">installed and set up the plugin </a> correctly.</p>

In this section, you will be shown how the FusionCharts JSP wrapper uses each of these methods to render charts.
<p class="text-info"> There are two more ways for loading data—using the JSON URL and using the XML URL. These methods are similar to using static strings. The only difference is that chart data is loaded from an external `.json` or `.xml` file. The URL of the file is passed as the value for the `data source` parameter of the constructor. In case of JSON data, `jsonurl` is passed as the value for the `data format` parameter; for XML data, it is `xmlurl`.</p>

## Loading Data from a Static JSON String

The area chart shown below is rendered by loading chart data from a static JSON string:

{% embed_chart using-with-server-side-languages-java-different-ways-of-loading-data-example-1.js %}

The data structure to render this chart is given below:

<textarea style="display:none;" class='java-only'>
    <%@page contentType="text/html" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>
        <head>
           <title>Loading Data from a Static JSON String - fusioncharts.com</title>
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
            `FusionCharts("type of chart", "unique chart id", "width of chart",   "height of chart", "div id to render the chart", 
           "data format", "data source")`   
    -->          
                 
        <%
            FusionCharts area2dChart = new FusionCharts(
                        "Area2D",       // type of chart
                        "myFirstChart", // unique chart ID
                        "500","300",    // width and height of the chart
                        "chart",        // div ID of the chart container
                        "json",         // data format
                        "{ \"chart\": {  \"caption\": \"Sales of Liquor\",  \"subCaption\": \"Last week\", \"xAxisName\": \"Day\",  \"yAxisName\": \"Sales\",    \"numberPrefix\": \"$\",   \"theme\": \"zune\" },   \"data\": [{\"label\": \" Mon\",\" value\": \"4123\"    }, {\"label\": \"Tue\",\"value\": \"4633\"}, {\"label\": \"Wed\", \"value\": \"5507\"   }, {\"label\": \"Thu\",\"value\": \"4910\"  }, {\"label\": \"Fri\",\"value\": \"5529\"  }, {\"label\": \"Sat\",\"value\": \"5803\"  }, {\"label\": \"Sun\",\"value\": \"6202\"  }]  }"
    );
            
            %>
    <!--    Step 5: Render the chart    -->          
            <%=area2dChart.render()%>
            
        </body>
    </html>
</textarea>


```java

    <%@page contentType="text/html" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>
        <head>
           <title>Loading Data from a Static JSON String - fusioncharts.com</title>
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
            FusionCharts area2dChart = new FusionCharts(
                // type of chart
                "Area2D",	    
                // unique chart ID
                "myFirstChart",	
                // width and height of the chart
                "500","300",	
                // div ID of the chart container
                "chart",		
                // data format
                "json",			
                "{              
                    //data source (the chart data)
                	\"chart\": {  
                		\"caption\": \"Sales of Liquor\",  
                		\"subCaption\": \"Last week\", 
                		\"xAxisName\": \"Day\",  
                		\"yAxisName\": \"Sales\",    
                		\"numberPrefix\": \"$\",   
                		\"theme\": \"zune\" 
                	},                                   
                	\"data\": [{    
                		\"label\": \" Mon\",    
                		\" value\": \"4123\"
                	}, {    
                		\"label\": \"Tue\",    
                		\"value\": \"4633\"  
                	}, {    
                		\"label\": \"Wed\", 
                		\"value\": \"5507\" 
                	}, {    
                		\"label\": \"Thu\",    
                		\"value\": \"4910\"
                	}, {    
                		\"label\": \"Fri\",    
                		\"value\": \"5529\" 
                	}, {    
                		\"label\": \"Sat\",    
                		\"value\": \"5803\"
                	}, {    
                		\"label\": \"Sun\",    
                		\"value\": \"6202\"   
                	}]  
                }"
            );
            
            %>
    <!--    Step 5: Render the chart    -->          
            <%=area2dChart.render()%>
            
        </body>
    </html>

```

## Loading Data from a Static XML String

The line chart shown below is rendered by loading chart data from a static XML string:

{% embed_chart using-with-server-side-languages-java-different-ways-of-loading-data-example-2.js %}

The data structure to render this chart is given below:

<textarea style="display:none;" class='java-only'>
    <%@page contentType="text/html" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>
        <head>
            <title>Loading Data from a Static XML String - fusioncharts.com</title>  
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
        FusionCharts lineChart = new FusionCharts(
                    // type of chart
                    "line",          
                    // unique chart ID
                    "myFirstChart",  
                    // width and height of the chart
                    "500","300",     
                    // div ID of the chart container
                    "chart",         
                    // data format
                    "xml",           
                    "<chart caption=\"Total footfall in Bakersfield Central\" subcaption=\"Last week\" xaxisname=\"Day\" yaxisname=\"No. of Visitors\" theme=\"zune\">   <set label=\"Mon\" value=\"15123\" />   <set label=\"Tue\" value=\"14233\" />   <set label=\"Wed\" value=\"23507\" />   <set label=\"Thu\" value=\"9110\" />   <set label=\"Fri\" value=\"15529\" />   <set label=\"Sat\" value=\"20803\" />   <set label=\"Sun\" value=\"19202\" />  </chart>");            
    %>

    <!--    Step 5: Render the chart    -->          
            <%=lineChart.render()%>
            
        </body>
    </html>     
</textarea>

```java

    <%@page contentType="text/html" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>
        <head>
            <title>Loading Data from a Static XML String - fusioncharts.com</title>  
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
                FusionCharts lineChart = new FusionCharts(
                            // type of chart
                            "line",          
                            // unique chart ID
                            "myFirstChart",  
                            // width and height of the chart
                            "500","300",     
                            // div ID of the chart container
                            "chart",         
                            // data format
                            "xml",
                            //data source (the chart data)
                            "<chart caption=\"Total footfall in Bakersfield Central\" subcaption=\"Last week\" xaxisname=\"Day\" yaxisname=\"No. of Visitors\" theme=\"zune\">   
                            	<set label=\"Mon\" value=\"15123\" />   
                            	<set label=\"Tue\" value=\"14233\" />   
                            	<set label=\"Wed\" value=\"23507\" />   
                            	<set label=\"Thu\" value=\"9110\" />   
                            	<set label=\"Fri\" value=\"15529\" />   
                            	<set label=\"Sat\" value=\"20803\" />   
                            	<set label=\"Sun\" value=\"19202\" />  
                        </chart>"
                        );
            
            %>
    <!--    Step 5: Render the chart    -->          
            <%=lineChart.render()%>
            
        </body>
    </html>

```

## Loading Data from a JSON String Generated from an Associative Array

The pie chart shown below is generated by loading data from a JSON string that is generated from an associative array:

{% embed_chart using-with-server-side-languages-java-different-ways-of-loading-data-example-3.js %}

The data structure to render this chart is given below:

```java

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*" %>
<%@page import="com.google.gson.*" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Loading Data from a JSON String Generated from an Array - Fusioncharts.com</title>
        <!-- Include the `fusioncharts.js` file. This file is needed to
        render the chart. Ensure that the path to this JS file is correct.
        Otherwise, it may lead to JavaScript errors.. -->
        <script src="../scripts/fusioncharts.js"></script>
        <!-- End -->
    </head>
    <body>
        
        <div id="chart"></div>
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
            
            // The 'chartobj' map object holds the chart attributes and data.
            Map<String, String> chartobj = new HashMap<String, String>();
            
            chartobj.put("caption", "Split of Visitors by Age Group");
            chartobj.put("subCaption" , "Last year");
            chartobj.put("enableSmartLabels" , "0");
            chartobj.put("showPercentValues" , "1");
            chartobj.put("decimals" , "1");
            chartobj.put("showLegend" , "1");
            chartobj.put("theme" , "zune");
            
        /*
             The data to be plotted on the chart is stored in the 
            'actualData' map object  in the key-value form.
        */
            Map<String, String> actualData = new HashMap<String, String>();
            
            actualData.put("Teenage" , "1250400");
            actualData.put("Adult" , "1463300");
            actualData.put("Mid-age" , "1050700");
            actualData.put("Senior" , "491000");
           
        /*
            Convert the data in the `actualData` object into a format that can
            be consumed by FusionCharts. The data for the chart should be in an 
            array wherein each element of the array is a JSON object having the
            "label" and “value” as keys.
        */   
            
            ArrayList arrData = new ArrayList();
        /*
            Iterate through the data in `actualData` and insert in
            to the `$arrData` array.
        */ 
            for(Map.Entry m:actualData.entrySet()){
                 
                Map<String, String> lv = new HashMap<String, String>();
                lv.put("label", (String) m.getKey());
                lv.put("value", (String) m.getValue());
                arrData.add(lv);
            }    
            
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
                        "pie2d",             
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
            
            <%=columnChart.render()%>
            
            
    </body>
</html>

```

<p class="text-info"> The code above uses the `google-gson` library. <br> Gson is a Java library that can be used to convert: <br> - Java objects into their corresponding JSON representation <br> - JSON strings into their corresponding Java objects. <br> Gson allows working with arbitrary Java objects that include pre-existing objects for which you may not have the source code. <br> <br> The google-gson library : <br> - Provides the `toJson()` and `fromJson()` methods for converting Java objects to JSON and the other way round <br> - Allows conversion of the already existing unmodifiable objects to and from JSON <br> - Supports Java Generics extensively <br> - Allows custom representations of objects <br> - Supports arbitrarily complex objects (with deep inheritance hierarchies and extensive use of generic types) <br> <br> The code above imports the `com.google.gson` package the enables the conversion from JSON to Java and Java to JSON. <br> <br> Click [here](https://github.com/google/gson) for more information on google-gson. </p>

## Loading Data from an XML String Generated from an Associative Array

The bar 2D chart shown below is rendered by loading data from an XML string that is generated from an associative array:

{% embed_chart using-with-server-side-languages-java-different-ways-of-loading-data-example-4.js %}

The data structure to render this chart is given below:

```java

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Loading Data from an XML String Generated from an Array - Fusioncharts.com</title>
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
            Set up templates for the XML data. 
            To create an XML string, using templates is an easier option 
            than manual string concatenation.
        */
            
            String chartXML = "<chart __attributes__>__set__</chart>";
            String attributeTemplate = "__key__=\"__value__\" ";
            String setXMLTemplate = "<set label=\"__label__\" value=\"__value__\" />";

            /* chartobj is the map object that is initialized to store the chart attributes. */
            
            Map<String, String> chartobj = new HashMap<String, String>();
            
            chartobj.put("caption", "Top 5 stores by sales");
            chartobj.put("subCaption" , "Last month");
            chartobj.put("yAxisName" , "Sales");
            chartobj.put("numberPrefix" , "$");
            chartobj.put("axisLineAlpha", "25");
            chartobj.put("divLineAlpha", "10");
            chartobj.put("alignCaptionWithCanvas", "0");
            chartobj.put("theme", "zune");          
            
            // The data to be plotted on the chart is stored in the 'dataobj' object.
            Map<String, String> dataobj = new HashMap<String, String>();
            
            dataobj.put("Bakersfield Central" , "880000");
            dataobj.put("Garden Groove Harbour" , "730000");
            dataobj.put("Los Angeles Topanga" , "590000");
            dataobj.put("Compton-Rancho Dom" , "520000");
            dataobj.put("Daly City Serramonte" , "330000");
           
            /*
            To convert the chart attributes map object, 'chartobj', to XML, 
            we will use the templates instead of manipulating the strings. 
            Individual attribute strings will be stored in the array; they will then 
            be combined into one string.
        */
            
            ArrayList<String> chartAttributeList = new ArrayList<String>();
             // Iterate over each chart attribute and convert it into an attribute string
            for(Map.Entry cobj:chartobj.entrySet())
            {
                String tempAttributeTemplate = attributeTemplate;
                tempAttributeTemplate = tempAttributeTemplate.replaceAll("__key__", (String) cobj.getKey());
                tempAttributeTemplate = tempAttributeTemplate.replaceAll("__value__", (String) cobj.getValue()); 
                chartAttributeList.add(tempAttributeTemplate);
            }
            
            /*
            We again use the template to convert the chart data into the XML format. 
            */
            
            ArrayList<String> setList = new ArrayList<String>();
            // Iterate over each data and convert it into XML set
            for(Map.Entry dobj:dataobj.entrySet())
            {                
                String tempSetTemplate = setXMLTemplate;
                tempSetTemplate = tempSetTemplate.replaceAll("__label__", (String) dobj.getKey());
                tempSetTemplate = tempSetTemplate.replaceAll("__value__", (String) dobj.getValue()); 
                setList.add(tempSetTemplate);
            }   
            
         /*
            //Using Java 8 you can do this in a very clean way:
              String.join(delimiter, elements);
        */
            
            // Join the array using a single space as the delimiter.
            StringBuilder chartAttributeString = new StringBuilder();
            for(String s: chartAttributeList)
            chartAttributeString.append(" " +  s);
            
      
            // Join the array.
            StringBuilder setAttributeString = new StringBuilder();
            for(String s: setList)
            setAttributeString.append(s);
            
            // Replace the chart attributes
            chartXML = chartXML.replaceAll("__attributes__",  chartAttributeString.toString());
            // Replace the data sets
            chartXML = chartXML.replaceAll("__set__",  setAttributeString.toString());

            FusionCharts barChart= new FusionCharts(
                        //type of chart
                        "bar2d",    
                        //unique chart ID
                        "chart1",   
                        //width and height of the chart
                        "500","300",
                        //div ID of the chart container
                        "chart",    
                        //data format
                        "xml",      
                        //data source
                       chartXML     
                    );
           
            %>
<!--    Step 5: Render the chart    -->              
         <%=barChart.render()%>

            
            
    </body>
</html>

```

## Important Tips for Developers

Given below are a few pointers that, although applicable while using the entire FusionCharts suite, need to be specifically paid attention to here:

* Make sure that the XML strings are escaped properly, especially for instances where the data for the chart is enclosed in quotation marks. Also make sure that the entire string is enclosed in single quotes, while the attributes and corresponding values are enclosed in double quotes. Doing otherwise will break the code.
* The chart ID should be unique for all charts rendered on the same page. Otherwise, it will result in a JavaScript error.