---
title: Create a Chart in Ruby on Rails | FusionTime
description: This article outlines the steps to be executed for creating your first chart in Ruby on Rails using FusionTime.
heading: Create a chart in Ruby on Rails
---

FusionTime is a JavaScript charting library that helps you visualize, and explore time-series data. In FusionTime, you get lots of out-of-the-box interactivity, like, time navigator, date range selectors, tooltips with crosslines, interactive legend and more features which enhances the experience of exploring and understanding time series data.

We have built a simple FusionCharts server-side `ruby-on-rails` wrapper, which provides bindings for FusionTime. The FusionCharts server-side `ruby-on-rails` wrapper allows you to easily add interactive time-series charts to any Ruby on Rails project.

## Installation

In this article, we will show you how to download and install the **FusionCharts Rails gem** wrapper and all the other dependencies on your system. Since FusionTime is distributed along with FusionCharts Suite, download/install the **FusionCharts** package to get access to FusionTime.

* Copy the `fusionCharts-rails.rb` from `integrations > rubyonrails > fusioncharts-wrapper` in your project folder.

* Include the **FusionCharts** JavaScript files, which can be downloaded from here.

* Include the **FusionTime** file to render time-series charts.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>

<div class='tab cdn-tab active'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script>

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script>
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<pre><code class="language-php">
// Include FusionCharts core file
&lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;

// Include FusionCharts Theme file
&lt;script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"&gt;&lt;/script&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>
</div>
</div>

* Add the FusionCharts Rail wrapper:
  * Using RubyGems
  * Manually
* Include the FusionCharts Rails wrapper.

To add the FusionCharts Rails wrapper, use any of the following processes:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
  <li class='active'><a data-toggle='rubygems'>RubyGems</a></li>
  <li><a data-toggle='manual'>Manual</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab rubygems-tab active'>
<div><strong>Add this line to your application’s `Gemfile`:</strong></div>
<pre><code class="language-ruby">
	gem ‘fusioncharts-rails’
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>RubyGems contain package information along with the files to install. On the command line prompt, execute the following command:</strong></div>
<pre><code class="language-ruby">
    $bundle
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>This command will automatically install the `fusioncharts-rails` gem. You can also install the gem directly from the command line prompt, without making any edits to the `Gemfile`. To do this, use the code line given below:</strong></div>
<pre><code class="language-ruby">
    $gem install fusioncharts-rails
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab manual-tab'>
<div><strong>Step 1: </strong>Copy all files from `fusioncharts-suite-xt > integrations > rubyonrails > fusioncharts-wrapper` folder.</div>
<div><strong>Step 2: </strong>Paste the copied files to the `lib` folder of your application</div>
<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

</div>
</div>

## Create Your First Chart

Now that you have installed FusionTime and FusionCharts server-side `Ruby on Rails` wrapper, let us build the first chart to show the "Daily sales of a grocery store".

The chart will look as shown below:

{% embed_ftChart integrations-ruby-on-rails %}

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

* Each object of the schema maps to a column of the tabular representation of the data.

* The `JSON` object has the following attributes:

    * name - Specify the name of the column of the tabular representation of data

    * type - Specify the type of the column.

    * format - Specify the input format of the date as per your data. In this example, the format is `%-m/%-d/%Y`. To know more about date formats, click [here](https://www.fusioncharts.com/dev/fusiontime/fusiontime-attributes).

Now that we have the schema ready, let's work on the data.

### Create the `data`

[Data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-ruby-on-rails/data.json) for the above chart is too big to be shown here. A sample of it has been used in the data object defined below:

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

Create a new `data.json` file, and copy the above code there. Next, copy the entire and replace it with the content of the `data` object in your 'data.json' file.

>** **It is not mandatory to create a `data.json` file. You could also do the same in your HTML file.

In the above code:

* Each object in the data array corresponds to a row in the tabular representation of the data.

* Each element in an object is represented by each object of the `schema`. The values in each object of the array represent the following:

    * Time according to the format

    * Total Sales amount

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more, click [here](https://www.fusioncharts.com/dev/fusiontime/getting-started/change-default-aggregation).

Now, let's create the files to render the above chart.

### Render the chart

Once you have the `data` and the `schema` ready, follow the steps below:

1. Include the **FusionCharts Rails wrapper** in your project.

2. Include the `fusioncharts` library.

3. Declare the the local variables to consume the informations from `data` and `schema`.

4. Fetch the informations from `data` and `schema` from remote URL and store it to your local `data` and `schema` variables.

5. Create and initialize the `FusionTable` object instance with the constructor parameter of `data` and `schema`.

6. Create and initialize the `TimeSeries` object instance with the constructor parameter of `FusionTable` object instance.

7. The following parameter values have been set for the wrapper constructor:

    * Value of `width` has been set to `700`.

    * Value of `height` has been set to `450`.

    * Value of `type` has been set to `timeseries`.

    * Value of `renderAt` has been set to `chartContainer`.

    * Value of `dataFormat` has been set to `json`

    * The time-series object `timeSeries` has been provided.

8. Create a container using `<div>` to render the chart.

The full code for the above sample is:

```ruby
<!-- Filename: app/views/examples/firstchart.rb -->

require 'json'
require 'open-uri'
require 'fusioncharts-rails'

class FirstChart
def self.getChart

# Declare local variables
for consuming schema and data information.#Fetch data and schema information from remote url and store these in local schema and data variables.

data = open('..PATH/data.json') {
    | f | f.read
}
schema = open('..PATH/schema.json') {
    | f | f.read
}

# Create and initialize FusionTable object instance with the constructor parameters of data and schema.
fusionTable = Fusioncharts::FusionTable.new(schema, data)

# Create and initialize TimeSeries object instance with the constructor parameters of FusionTable object instance.
timeSeries = Fusioncharts::TimeSeries.new(fusionTable)

# Wrapper constructor parameters# width: Width of the chart, #height: Height of the chart, #type: ChartType, #renderAt: Id of the container where the chart will be rendered, #dataFormat: format of the data, this wrapper
for timeseries chart type supports only json format, #timeSeries: Accepts only TimeSeries class object instance

# Chart rendering
chart = Fusioncharts::Chart.new({
    width: "700",
    height: "400",
    type: "timeseries",
    renderAt: "chartContainer",
    dataFormat: 'json',
    timeSeries: timeSeries
})

end
end
```

The HTML template of the above sample is shown below:

```HTML
<!-- Filename: app/views/layouts/firstchart.html.erb -->
<h3>My Chart</h3>
<div id="chartContainer"></div>
<%=@first_chart.render() %>
```

That's it! Your first chart in **Ruby on Rails** using FusionTime is ready.