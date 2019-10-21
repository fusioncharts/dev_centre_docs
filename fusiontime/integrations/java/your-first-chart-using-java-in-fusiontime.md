---
title: Create a Chart in Java | FusionTime
description: This article outlines the steps to be executed for creating your first chart in Java using FusionTime.
heading: Create a chart in Java
---

FusionTime is a JavaScript charting library that helps you visualize, and explore time-series data. In FusionTime, you get lots of out-of-the-box interactivity, like, time navigator, date range selectors, tooltips with crosslines, interactive legend and more features, which enhance the experience of exploring and understanding time series data.

We have built a simple `FusionCharts server-side JSP` wrapper, which provides bindings for FusionTime. The `FusionCharts server-side JSP` wrapper allows you to easily add interactive time-series charts to any Java project.

## Installation

Since FusionTime is distributed along with FusionCharts Suite, download/install the **FusionCharts** package to get access to FusionTime. Note that you will also need Java 6 or later version to use FusionTime.

Install FusionCharts and the JSP wrapper component using following steps:

* Copy and paste the `fusioncharts.java` file from `integrations > java > fusioncharts-wrapper` in your project folder.

* Include the FusionCharts JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).

* Include the **FusionTime** file to render time-series charts.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-java">
// Include FusionCharts core file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

// Include FusionTime file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"&gt;&lt;/script>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-java">
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionTime file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

## Create Your First Chart

Now that you have installed FusionTime and `FusionCharts JSP` wrapper, let us build the first chart to show the **Daily sales of a grocery store**.

The chart will look as shown below:

{% embed_ftChart integrations-java %}

The data for the above chart is shown in the table below:

| Time      | Sales |
| --------- | ----- |
| 01-Feb-11 | 8866  |
| 02-Feb-11 | 2174  |
| 03-Feb-11 | 2084  |
| 04-Feb-11 | 1503  |
| 05-Feb-11 | 4928  |
| 06-Feb-11 | 4667  |
| 07-Feb-11 | 1064  |

FusionCharts accepts a DataTable as the data source. `DataTable` is a part of `DataStore`, which is a tabular representation of the data. To create the `DataTable`, you need to provide the following:

* `schema` - which defines the properties of the columns.  

* `data` - values of each row and column of the `DataTable`.

> For an instance of FusionTime, you can create `n` number of `DataTables`, but only one `DataStore`.

Next, let's learn how to prepare the schema and the data of the `DataTable`.

### Create the `schema`

The schema outlines each column represented in the above table. The schema contains an array which has multiple objects created in it. Each object represents a column in the `DataTable`.

> `name` and `type` are mandatory keys for each object. If the object type is `time` then `format` is also a mandatory key.

To define the schema, let's create a `schema.json` file and copy the following code:

> It is not mandatory to create the schema in a different `.json` file. You can also define the schema within the `.html` file.

```json
[{
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y"
}, {
    "name": "Sales",
    "type": "number"
}]
```

In the above code:

* Each object of a schema maps to a column of the tabular representation of the data.

* The `JSON` object has the following attributes:

    * `name` - Specify the name of the column of the tabular representation of data

    * `type` - Specify the type of the column.

    * `format` - Specify the input format of the date as per your data. In this example, the format is `%-m/%-d/%Y`. To know more about date formats, click [here](https://www.fusioncharts.com/dev/fusiontime/fusiontime-attributes).

Now that we have the schema ready, let's work on the data.

### Create the `data`

Data can be provided either in JSON format or 2D array format. We will use the 2D array format.

Data for the above chart has been used in the data object defined below:

```json
[
    [
        "1/4/2011",
        16.448
    ],
    [
        "1/5/2011",
        272.736
    ],
    [
        "1/5/2011",
        11.784
    ],
    [
        "1/5/2011",
        3.54
    ],
    [
        "1/6/2011",
        19.536
    ],
    [
        "1/7/2011",
        2573.82
    ],
]
```

Create a new `data.json` file, and copy the above code there. 

> It is not mandatory to create a `data.json` file. You can also include the data in your HTML file.

In the above code:

* Each object in the data array corresponds to a row in the tabular representation of the data.

* Each element in an object is represented by each object of the `schema`. The values in each object of the array represent the following:

    * Time according to the format

    * Total Sales amount 

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more, click [here](https://www.fusioncharts.com/dev/fusiontime/getting-started/change-default-aggregation).

Now, let's create the files to render the above chart.

### Render the chart

Once you have the `data` and the `schema` ready, create a `.jsp` file and copy the following code:
 
```javascript
// Custom method for pulling the data content from remote location by providing the file url as method parameter.
public String getContent(String url) throws Exception {
    URL website = new URL(url);
    URLConnection connection = website.openConnection();
    BufferedReader in = new BufferedReader(
            new InputStreamReader(
                    connection.getInputStream()));
    StringBuilder response = new StringBuilder();
    String inputLine;

    while ((inputLine = in.readLine()) != null) {
        response.append(inputLine);
    }
    in.close();
    return response.toString();
}

// Fetch data and schema information from remote url and store these in local schema and data variables.
String data = getContent("..PATH/data.json");
String schema = getContent("..PATH/schema.json");

// Create and initialize FusionTable object instance with the constructor parameters of data and schema.
FusionCharts.FusionTable fusionTable = new FusionCharts.FusionTable(schema, data);  
// Create and initialize TimeSeries object instance with the constructor parameters of FusionTable object instance.
FusionCharts.TimeSeries timeSeries = new FusionCharts.TimeSeries(fusionTable);  

// Wrapper constructor parameters
// charttype, chartID, width, height, renderAt, data format, TimeSeries object
FusionCharts chart = new FusionCharts("timeseries", "MyFirstChart" , "700", "450", "chart-container", "json", timeSeries);

// Render the chart
chart.render();
```

In the above code:

- Create a custom method for pulling the data content from remote location.

- `schema` and `data` are the variables to comsume informations of `schema` and `data` file.
  
- Create and initialize `FusionTable` object instance with the constructor parameters of data and schema.

- Create and initialize `TimeSeries` object instance with the constructor parameters of FusionTable object instance.

- The following parameter values have been set for the `chart` wrapper constructor:

    - Value of `charttype` has been set to `timeseries`.

    - Value of `chartID` has been set to `MyFirstChart`.

    - Value of `width` has been set to `700`.

    - Value of `height` has been set to `450`.

    - Value of `renderAt` has been set to `chart-container`.

    - Value of `data format` has been set to `json`.

    - Value of the time-series object has been set to `timeSeries`.

- The `render()` member function of the `jsp-fusioncharts` wrapper has been used to render the chart.

That's it! Your first chart in Java using FusionTime is ready.