---
title: Create a Chart in AngularJS | FusionTime
description: This article outlines the steps to be executed for creating your first chart in AngularJS using FusionTime.
heading: Create a Chart in AngularJS
---

FusionTime is a JavaScript charting library that helps you visualize, and explore time-series data. In FusionTime, you get lots of out-of-the-box interactivity, such as time navigator, date range selectors, tooltips with crosslines, interactive legend and more. These features enhance the experience of exploring and understanding time-series data.

We have built a simple `angularjs-fusioncharts` directive, which provides bindings for **FusionTime**. The `angularjs-fusioncharts` directive allows you to easily add interactive time-series charts to any **AngularJS** project.

In this page, we'll see how to install **FusionTime** and render an interactive time-series chart using the `angularjs-fusioncharts` directive.

## Installation

Since FusionTime is distributed along with FusionCharts Suite, download/install the FusionCharts package to get access to FusionTime and other charts of the FusionCharts Suite. To install, follow any of the methods below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<div class='mt-30'><strong>To install **FusionTime** and the `angularjs-fusioncharts` directive via npm, follow the steps below:</strong></div>
<div class='mt-20'>1. Install `angularjs-fusioncharts` directive</div>
<pre><code class="language-javascript">
$ npm install angularjs-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div class='mt-20'>2. Install fusioncharts core library</div>
<pre><code class="language-javascript">
$ npm install fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
<div class='mt-30'><strong>To install the FusionCharts Suite and the `angularjs-fusioncharts` component, follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [AngularJS](https://angularjs.org/) core library.
        <li>Include the <strong>FusionCharts</strong> JavaScript files from CDN.</li>
        <li>Include the `angularjs-fusioncharts` directive.</li>
        <li>Include FusionTime file.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- Step 1 - Including angular.js  --&gt;
    &lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Including angularjs-fusioncharts --&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/angularjs-fusioncharts/dist/angular-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusiontime file to render charts --&gt;
    &lt;script
      type="text/javascript"
      src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"
    &gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<div class='mt-30'><strong>To install the FusionCharts Suite and the `angularjs-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [AngularJS](https://angularjs.org/) core library.
        <li>Include the <strong>FusionCharts</strong> JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite-xt).</li>
        <li>Include the `angularjs-fusioncharts` directive.</li>
        <li>Include FusionTime file.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Including angular.js  --&gt;
    &lt;script type="text/javascript" src="path/to/local/angular.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Including angularjs-fusioncharts --&gt;
    &lt;script type="text/javascript" src="path/to/local/angular-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusiontime file to render charts --&gt;
    &lt;script type="text/javascript" src=" text/javascript" src="path/to/local/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That completes the installation of **FusionTime** and the `angularjs-fusioncharts` directive.

## Create Your First Chart

Let's create a time-series chart using `angularjs-fusioncharts` directive showing **Daily sales of a grocery store**.

The chart will look as shown below:

{% embed_ftChart integrations-angularjs %}

The [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-angularjs/data.json) for the above chart is too big to be displayed here. The table below shows the sample data of the above chart:

| Time      | Sales |
| --------- | ----- |
| 01-Feb-11 | 8866  |
| 02-Feb-11 | 2174  |
| 03-Feb-11 | 2084  |
| 04-Feb-11 | 1503  |
| 05-Feb-11 | 4928  |
| 06-Feb-11 | 4667  |
| 07-Feb-11 | 1064  |

FusionTime accepts a [DataTable](/fusiontime/fusiontime-data-engine/overview#what-is-a-datatable-) as the data source. `DataTable`  is the tabular representation of data. To create the `DataTable`, you need to provide the following:

* `schema` - which defines the properties of the columns.  
* `data` - which contains the values of each row and column of the DataTable.

> For an instance of FusionTime, you can create `n` number of `DataTables`, but only one `DataStore`.

Next, let's learn how to prepare the schema and the data of the `DataTable`.

### Create the `schema`

The schema outlines each column represented in the above table. The schema contains an array which has multiple objects created in it. Each object outlines a column of the above table.

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

* `schema` is the variable in which the array is stored.
* Each object of a schema maps to a column of the tabular representation of the data
* The JSON object has the following attributes:
  * name - Specify the name of the column of the tabular representation of data
  * type - Specify the type of the column.
  * format - Specify the input format of the date as per your data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here](https://www.fusioncharts.com/dev/fusiontime/fusiontime-attributes).

Now that we have the schema ready, let's work on the data.

### Create `data`

Data can be provided either in JSON format or 2D array format. We will use the 2D array format.

[Data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-angularjs/data.json) for the above chart is too big to be shown here. A sample of it has been used in the data object defined below:

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

Create a new `data.json` file, and copy the above code there. Next, copy the entire [data](https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/integrations-angularjs/data.json) and replace it with the content of the data object in your 'data.json' file.

> It is not mandatory to create a `data.json` file. You could also do the same in your HTML file.

In the above code:

* `data` is the variable in which the data array is stored.
* Each object in the data array corresponds to a row in the tabular representation of the data.
* Each element in an object is represented by each object of the `schema`. The values in each object of the array represent the following:
  * Time according to the format
  * Total sales amount

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more, click [here](https://www.fusioncharts.com/dev/fusiontime/getting-started/change-default-aggregation).

Now, let's create the files to render the above chart.

### Render the chart

To render the chart, create a `.js` file and copy the following code:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<pre><code class="language-javascript">
var angular = require('angular');
var FusionCharts = require('fusioncharts');
require('angularjs-fusioncharts');

// Require TimeSeries module
var TimeSeries = require('fusioncharts/fusioncharts.timeseries');

// Initialize Charts with FusionCharts instance
TimeSeries(FusionCharts);
var app = angular.module('myApp', ['ng-fusioncharts']);

var jsonify = res => res.json();
var dataFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
).then(jsonify);
var schemaFetch = fetch(
  'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
).then(jsonify);

var app = angular.module('myApp', ['ng-fusioncharts']);

app.controller('MyController', function($scope) {
  $scope.dataSource = {
    data: null,
    caption: {
      text: 'Sales Analysis'
    },
    subcaption: {
      text: 'Grocery'
    },
    yAxis: [
      {
        plot: {
          value: 'Grocery Sales Value',
          type: 'line'
        },
        format: {
          prefix: '$'
        },
        title: 'Sale Value'
      }
    ]
  };

  Promise.all([dataFetch, schemaFetch]).then(res => {
    const data = res[0];
    const schema = res[1];
    const fusionTable = new FusionCharts.DataStore().createDataTable(
      data,
      schema
    );
    $scope.$apply(function() {
      $scope.dataSource.data = fusionTable;
    });
  });
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>Use a bundler like `browserify`, to bundle the script. Click [here](http://browserify.org/) to know more.</strong></div>
<pre><code class="language-Bash">
$ browserify script.js -o bundle.js
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div><strong>Create an HTML template as shown below:</strong></div>
<pre><code class="language-html">
&lt;html&gt;
  &lt;head&gt;
    &lt;!-- Include compiled bundle in script tag --&gt;
    &lt;script type="text/javascript" src="./bundle.js"&gt;&lt;/script&gt;
  &lt;/head&gt;

  &lt;body ng-app="myApp"&gt;
    &lt;div ng-controller="MyController"&gt;
      &lt;div
        fusioncharts
        width="700"
        height="400"
        type="timeseries"
        datasource-dt="dataSource"&gt;
        // When using TimeSeries pass your dataSource in "datasource-dt" attribute not in "datasource".
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<pre><code class="language-javascript">
&lt;html&gt;

&lt;head&gt;
    &lt;!-- Including AngularJS --&gt;
    &lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Including the angularjs-fusioncharts directive--&gt;
    &lt;script type="text/javascript" src="https://unpkg.com/angularjs-fusioncharts@4.0.1/dist/angular-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Include FusionTime --&gt;
    &lt;script type="text/javascript" src=" https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="./bundle.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript"&gt;
        var jsonify = res =&gt; res.json();
        var dataFetch = fetch(        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
        ).then(jsonify);
        var schemaFetch = fetch(
        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
        ).then(jsonify);
        var app = angular.module('myApp', ['ng-fusioncharts']);
        app.controller('MyController', function($scope) {
        $scope.dataSource = {
            data: null,
            caption: {
            text: 'Sales Analysis'
            },
            subcaption: {
            text: 'Grocery'
            },
            yAxis: [{
                plot: {
                    value: 'Grocery Sales Value',
                    type: 'line'
                },
                format: {
                    prefix: '$'
                },
                title: 'Sale Value'
            }]
        };
        Promise.all([dataFetch, schemaFetch]).then(res =&gt; {
            const data = res[0];
            const schema = res[1];
            const fusionTable = new FusionCharts.DataStore().createDataTable(
            data,
            schema
            );
            $scope.$apply(function() {
            $scope.dataSource.data = fusionTable;
            });
        });
        });
    &lt;/script&gt;
&lt;/head&gt;
&lt;body ng-app="myApp"&gt;
    &lt;div ng-controller="MyController"&gt;
      &lt;div
        fusioncharts
        width="700"
        height="400"
        type="timeseries"
        datasource-dt="dataSource"&gt;
        // When using TimeSeries pass your dataSource in "datasource-dt" attribute not in "datasource".
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab localfiles-tab'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including AngularJS --&gt;
    &lt;script type="text/javascript" src="path/to/local/angular.min.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Including the angularjs-fusioncharts directive--&gt;
    &lt;script type="text/javascript" src="path/to/local/angular-fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Include FusionTime --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="./bundle.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript"&gt;
        var jsonify = res =&gt; res.json();
        var dataFetch = fetch(
        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
        ).then(jsonify);
        var schemaFetch = fetch(
        'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
        ).then(jsonify);
        var app = angular.module('myApp', ['ng-fusioncharts']);
        app.controller('MyController', function($scope) {
        $scope.dataSource = {
            data: null,
            caption: {
            text: 'Sales Analysis'
            },
            subcaption: {
            text: 'Grocery'
            },
            yAxis: [{
                plot: {
                    value: 'Grocery Sales Value',
                    type: 'line'
                },
                format: {
                    prefix: '$'
                },
                title: 'Sale Value'
            }]
        };
        Promise.all([dataFetch, schemaFetch]).then(res =&gt; {
            const data = res[0];
            const schema = res[1];
            const fusionTable = new FusionCharts.DataStore().createDataTable(
            data,
            schema
            );
            $scope.$apply(function() {
            $scope.dataSource.data = fusionTable;
            });
        });
        });
    &lt;/script&gt;
&lt;/head&gt;
&lt;body ng-app="myApp"&gt;
    &lt;div ng-controller="MyController"&gt;
      &lt;div
        fusioncharts
        width="700"
        height="400"
        type="timeseries"
        datasource-dt="dataSource"&gt;
        // When using TimeSeries pass your dataSource in "datasource-dt" attribute not in "datasource".
      &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

That's it! Your first chart in **AngularJS** using **FusionTime** is ready.

## IE support

To run your application on IE(11 and below), follow the steps given below:

* Install v5.0.0 or later versions of `angularjs-fusioncharts`.
* Install v13.3.3-sr.1 or later versions of FusionCharts.
* Update the **index.html** file where instead of passing data in `datasource`, pass the data using `datasource-dt`. The HTML code is given below:

```html
<div
  fusioncharts
  width="600"
  height="400"
  type="timeseries"
  datasource-dt="dataSource"
>
  // Instead of passing data in datasouce, use datasource-dt.
</div>
```