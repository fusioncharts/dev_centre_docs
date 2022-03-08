---
title: Overview | FusionGrid
description: Learn about FusionGrids
heading: Overview
---

FusionGrid provides a data grid component that is highly customizable and blends nicely with your website or mobile application. This data grid allows you to display millions of records with filtering, sorting, and grouping capabilities.

FusionGrid is an enterprise-class, JavaScript-based data grid component created to deliver a fast and feature-rich data visualization experience.

It is lightweight and customizable, and it works with both web and mobile applications. It allows you to build data grids in dashboards with the same simplicity and elegance as FusionCharts. The goal of FusionGrid is to provide an intuitive, clean, easy-to-use, and fully responsive data grid solution that works seamlessly on all modern browsers. FusionGrid offers unparalleled flexibility and power with blazing speed and superior quality with an array of features under its belt.

You get out-of-the-box features like Column Filter, Data Export, Row Selection, Column Grouping, Real-time Data Update, Row Sorting, and Search/Quick Filter. And the best part is that you can use it on desktop, tablet, and mobile through responsive layouts without any additional effort on your end.

## Package Structure 

There are two primary components of FusionGrid: 
1. FusionGrid Server
2. FusionGrid SDKs

## FusionGrid Application
Run FusionGrid application on your backend infrastructure and start constructing your Grid. We support Windows, Mac, and Linux, so you don't have to worry about cross-platform integration.

## FusionGrid SDK
Once you start the FusionGrid application on your system,  we will learn how FusionDataStore works. FusionDataStore provides in-memory relational database management. It is the grid’s backbone to manage data, and it is already supported in FusionTime. There is comprehensive documentation available on using it in the (Dev Center)[/dev/fusiontime/fusiontime-data-engine/overview]. If you are interested in more detail, we highly recommend you go through it.

> **Important Note**: Because FusionDataStore is an in-memory relational database management library, you can use it to manage your data as well.  It natively supports operations like select, filter, pivot, etc. 

There are three components of FusionDataStore:
1. Schema: Define the schema of the data based on your needs.
2. DataStore: Store the schema and your data in DataStore.
3. DataTable: Derive tables with limited data from the DataStore as per the context. 

Here is a diagram explaining the flow:

[add diagram here]

* Source data fetched to the browser in JSON/2D array format from the data source like WebService, Databases, etc.
* Create a 'DataStore' and load your data to create the root 'DataTable'.
* The root 'DataTable' is then fed to the chart or grid renderer and configurations.
* Alternatively, you can apply data operations on the root DataTable to generate another derived 'DataTable'.
* You can then feed the derived 'DataTable' to the chart renderer and chart configurations to render the chart.

To use the FusionDataStore, you need to define the schema as per your requirements. You can define the schema as per your backend database as well. For example:

 var schema = [
  { name: 'Rank', type: 'number' },
  { name: 'Model' },
  { name: 'Make' },
  { name: 'Units Sold', type: 'number' },
  { name: 'Assembly Location' }
 ];
 
You can add as many items in the schema as per your needs. FusionDataStore supports number, string, datetime, and boolean as of now. Now let’s prepare your data. First, fetch your data from the database and make sure that it follows the schema you have defined here, including the order. Then, because you can control the schema, which you can pass to FusionDataStore, you can make adjustments to match it with the server-side data.
 
  var data = [
   [1, "F-Series", "Ford", 896526, "Claycomo, Mo."],
   [2, "Pickup", "Ram", 633694, "Warren, Mich."],
   [3, "Silverado", "Chevrolet", 575600, "Springfield, Ohio"],
   [4, "RAV4", "Toyota", 448071, "Georgetown, Ky."],
   [5, "CR-V", "Honda", 384168, "Greensburg, Ind."],
   [6, "Rogue", "Nissan", 350447, "Smyrna, Tenn."],
   [7, "Equinox", "Chevrolet", 346048, "Arlington, Tex."],
   [8, "Camry", "Toyota", 336978, "Georgetown, Ky."],
   [9, "Civic", "Honda", 325650, "Greensburg, Ind."],
   [10, "Corolla", "Toyota", 304850, "Blue Springs, Miss."],
   [11, "Accord", "Honda", 267567, "Marysville, Ohio"],
   [12, "Tacoma", "Toyota", 248801, "San Antonio, Tex."],
   [13, "Grand Cherokee", "Jeep", 242969, "Detroit, Mich."],
   [14, "Escape", "Ford", 241338, "Louisville, Ky."],
   [15, "Highlander", "Toyota", 239438, "Princeton, Ind."],
   [16, "Sierra", "GMC", 232325, "Flint, Mich."],
   [17, "Wrangler", "Jeep", 228032, "Toledo, Ohio"],
   [18, "Altima", "Nissan", 209183, "Smyrna, Tenn."],
   [19, "Cherokee", "Jeep", 191397, "Belvidere,  Ill."],
   [20, "Sentra", "Nissan", 184618, "Canton, Miss."],
  ];

The order of the data is extremely important in the array item. If you swap ‘make’ with ‘model,’ wrong data mapping will happen. Now that your data is ready, it is time to create a DataTable.

 var dataStore = new FusionDataStore();
 var dataTable = dataStore.createDataTable(data, schema);

First, create an instance of DataStore followed by a createDataTable method to pass data and schema. You will get a DataTable object in return. On this DataTable, you can perform operations like select or filter. 


