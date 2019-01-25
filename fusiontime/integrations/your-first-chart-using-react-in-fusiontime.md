---
title: Create a Chart in React | FusionTime
description: This article outlines the steps to be executed for creating your first chart in React using FusionTime.
heading: Create a Chart in React Using FusionTime
---

## Overview

FusionTime is a JavaScript library that helps you visualize and explore time-series data interactively. It supports data with atomicity ranging from milliseconds to years. We have build a simple `react-fusioncharts` component which provides bindings for FusionTime. The `react-fusioncharts` component allows you to easily add rich and interactive charts to any **React** project.

In this page, we'll see how to install FusionTime and render a chart using the `react-fusiontcharts` component.

## Installation

To render charts in **React** using FusionTime:
* Install **v13.3.3-sr.1** or later versions of **FusionCharts**.
* Install **v3.0.0** or later versions of `react-fusioncharts`.

Install **FusionTime** and the `react-fusioncharts` component using any of the following methods:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='local'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>
<div class='mt-30'><strong>To install FusionTime and the `react-fusioncharts` component via npm follow the steps below:</strong></div>
<div class='mt-20'>1. Install the `react-fusioncharts` component</div>
<pre><code class="language-javascript">
$ npm install react-fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
<div class='mt-20'>2. Install `fusioncharts` package</div>
<pre><code class="language-javascript">
$ npm install fusioncharts --save
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab cdn-tab'>
<div class='mt-30'><strong>To install FusionTime and the `react-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [React](https://reactjs.org/)core library.
        <li>Include [Babel](https://babeljs.io/)for [JSX](https://unpkg.com/babel-standalone/babel.min.js) transpiling.</li>
        <li>Include the **FusionCharts** JavaScript files from CDN.</li>
        <li>Include FusionTime file.</li>
        <li>Include the `react-fusioncharts` module.</li>
    </ol>
</div>
<pre><code class="language-html">
&lt;head&gt;
    &lt;!-- Including react --&gt;
	&lt;script type="text/javascript" src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
	&lt;!-- Including react-dom --&gt;
	&lt;script type="text/javascript" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
	&lt;!-- Including babel --&gt;
	&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"&gt;&lt;/script&gt;
	&lt;!-- Including the fusioncharts core library --&gt;
	&lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
	&lt;!-- Including the fusiontime file to render charts --&gt;
	&lt;script type="text/javascript" src="http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
	&lt;!-- Including react-fusioncharts component --&gt;
	&lt;script type="text/javascript" src=" https://unpkg.com/react-fusioncharts@3.0.0/dist/react-fusioncharts.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab local-tab'>
<div><strong>To install the **FusionCharts** Suite and the `react-fusioncharts` component follow the steps below:</strong></div>
<div>
    <ol>
        <li>Include the [React](https://reactjs.org/)core library.</li>
        <li>Include [Babel](https://babeljs.io/)for [JSX](https://unpkg.com/babel-standalone/babel.min.js) transpiling.</li>
        <li>Include the **FusionCharts** JavaScript files, which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).</li>
        <li>Include the FusionTime file</li>
        <li>Include the `react-fusioncharts` component.</li>
    </ol>
</div>
<div>The consolidated code is shown below:</div>
<pre><code class="language-javascript">
&lt;head&gt;
    &lt;!-- Step 1 - Including react  --&gt;
    &lt;script type="text/javascript" src="path/to/local/react.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="path/to/local/react-dom.js"&gt;&lt;/script&gt;
    &lt;!-- Step 2 - Including Babel for JSX transpiling --&gt;
    &lt;script type="text/javascript" src="path/to/local/babel-core.js"&gt;&lt;/script&gt;
    &lt;!-- Step 3 - Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Step 4 - Including FusionTime file --&gt;
    &lt;script type="text/javascript" src=" path/to/local/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
    &lt;!-- Step 5 - Including the react-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="path/to/local/react-fusioncharts.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

## Create your First Chart

Now that you have installed, it's time to create your first time series chart using **FusionTime**. To start with we will create a simple time-series chart showcasing **Online sales of a SuperStore**. The chart will look like as shown below:

{% embed_ftChart integrations-react %}

The data for the above chart is shown in the table below:

Time | Sales
- | -
1/4/2011 | 16.448
1/5/2011 | 272.736
1/5/2011 | 11.784
1/5/2011 | 3.54
1/6/2011 | 19.536
1/7/2011 | 2573.82
1/7/2011 | 609.98
... | ...
... | ...
... | ...
... | ...

To create the above chart, first let's understand the basics of FusionTime in short. In order to render a chart, you need to provide data in form of a [Datatable](/fusiontime/fusiontime-data-engine/overview) which records data in rows and columns. To create a `DataTable` first you need to create a [DataStore](/fusiontime/fusiontime-data-engine/overview) and load the data into the `DataTable` in JSON or 2D array format. To create the `DataTable`, you need to provide the following:

* The `schema` which defines the properties of the columns.  
* The `actual` values for each row and column of the `DataTable` as the data.

Now, let's check how to prepare the schema and the data of the `DataTable`.

### Create the `schema`

The schema contains an array which has multiple objects created in it. Each object represents a column in the `DataTable`. The schema maps the data to the columns of a `DataTable` along with the type for each column and the input format in case of date. You've to mandatorily specify the schema for each `DataTable`.

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

* `schema` is the variable in which the array is saved.
* Each column in the `DataTable` is represented by a JSON object within the `schema` array. The JSON object has the following attributes:
    * name - Specify the name of the column.
    * type - Specify the type of the column.
	* format - Specify the input format of the date as per you data. In this example, the format is `%-m/%-d/%Y`. To know more on date formats click [here](/fusiontime/fusiontime-attributes).

Now that we have the schema ready for the `DataTable` let's learn how to put the data values into the `DataTable`.

### Create `data`

In FusionTime, to add values to the `DataTable` you can provide the data in both JSON and 2D array format. In this example, we will use the 2D array format.

To add the data, let's create a `data.json` file and copy the following code:

```json
var data = [
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
    ...
    ...
    ...
]
```

In the above code:

* `data` is the variable in which the data array is saved.
* Each row in the data array corresponds to a row in the `DataTable` and each element in a row are represented by each object of the `schema`. The values in each row of the array represents the following:
    * Time according to the format
    * Total Sales amount 

We are all set with our data to create the chart.

> By default, FusionTime applies the average function to aggregate the data and display on the chart. You can change the aggregate function from `average` to any other numeric calculation. To know more click [here](/fusiontime/getting-started/change-default-aggregation).

Now, let's create the file to render the above chart.

Once the schema and data files are ready it is time to create the `DataTable` and render the chart. To do this, create a `JS` file and copy the following code:

The consolidated code is shown below:

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='npm'>NPM</a></li>
    <li><a data-toggle='cdn'>CDN</a></li>
    <li><a data-toggle='localfiles'>Local Files</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab npm-tab active'>

<pre><code class="language-javascript">
// Step 1 - Including react
import React from 'react';

// Step 2 - Including the react-fusioncharts component
import FusionCharts from 'fusioncharts';

// Step 3 - Including the fusiontime file
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from '../lib/ReactFC';

// Step 4 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries);

// Step 5 - Creating the JSON object to store the chart configurations
const jsonify = res => res.json();
const dataFetch = fetch(
'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/data.json'
).then(jsonify);
const schemaFetch = fetch( 'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/schema.json'
).then(jsonify);

class SimpleTimeSeries extends React.Component {
    constructor(props) {
        super(props);
        // In this method we are fetching our data and schema from remote URLs and creating our DataTable
        this.onFetchData = this.onFetchData.bind(this);
        this.state = {
            timeseriesDs: {
                type: 'timeseries',
                renderAt: 'container',
                width: '600',
                height: '400',
                dataSource: {
                    caption: { text: 'Online Sales of a SuperStore in the US' },
                    data: null,
                    yAxis: [{
                        plot: [{
                            value: 'Sales ($)'
                        }]
                    }]
                }
            }
        };
    }
    // We are creating our DataStore immediately after a component is mounted
    componentDidMount() {
        this.onFetchData();
    }
    onFetchData() {
        Promise.all([dataFetch, schemaFetch]).then(res => {
            const data = res[0];
            const schema = res[1];
            // Here we are creating our DataTable
            const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
            const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
            timeseriesDs.dataSource.data = fusionTable;
            this.setState({
                timeseriesDs
            });
        });
    }
    render() {
        return (
        <div>
        {this.state.timeseriesDs.dataSource.data ? (
        <ReactFC {...this.state.timeseriesDs} />
        ) : (
          'loading'
        )}
        </div>
        );
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>

<button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</div>

<div class='tab cdn-tab'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including react --&gt;
    &lt;script type="text/javascript" src=" https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
    &lt;!-- Including react-dom --&gt;
    &lt;script type="text/javascript" src=" https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
    &lt;!-- Including babel --&gt;
    &lt;script type="text/javascript" src=" https://unpkg.com/babel-standalone@6/babel.min.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src=" http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusiontime library to render charts --&gt;
    &lt;script type="text/javascript" src=" http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
    &lt;!-- Including react-fusioncharts component --&gt;
    &lt;script type="text/javascript" src=" https://unpkg.com/react-fusioncharts@3.0.0/dist/react-fusioncharts.min.js"&gt;&lt;/script&gt;
    &lt;script type="text/jsx"&gt;
        ReactFC.fcRoot(FusionCharts);

        const jsonify = res =&gt; res.json();
        const dataFetch = fetch(  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json').then(jsonify);

        const schemaFetch = fetch('https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json').then(jsonify);
    &lt;/script&gt;
    &lt;script type="text/babel"&gt;
        class ChartViewer extends React.Component {
            constructor(props) {
                super(props);
                this.onFetchData = this.onFetchData.bind(this);
                this.state = {
                    timeseriesDs: {
                        type: 'timeseries',
                        renderAt: 'container',
                        width: '600',
                        height: '400',
                        dataSource: {
                            caption: { text: 'Online Sales of a SuperStore in the US' },
                            data: null,
                            yAxis: [{
                                plot: [{
                                    value: 'Sales ($)'
                                }]
                            }]
                        }
                    }
                };
            }
            componentDidMount() {
                this.onFetchData();
            }
            onFetchData() {
                Promise.all([dataFetch, schemaFetch]).then(res =&gt; {
                    const data = res[0];
                    const schema = res[1];
                    const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
                    const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
                    timeseriesDs.dataSource.data = fusionTable;
                    this.setState({
                        timeseriesDs
                    });
                });
            }

            render() {
                return (
                &lt;div&gt;
                {this.state.timeseriesDs.dataSource.data ? (
                &lt;ReactFC {...this.state.timeseriesDs} /&gt;
                ) : (
                'loading'
                )}
                &lt;/div&gt;
                );
            }
        }

        ReactDOM.render(
            &lt;ChartViewer /&gt;,
            document.getElementById('chart-container')
        );
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id='chart-container'&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>


<div class='tab localfiles-tab'>
<pre><code class="language-javascript">
&lt;html&gt;
&lt;head&gt;
    &lt;!-- Including react --&gt;
    &lt;script type="text/javascript" src="path/to/local/react.development.js"&gt;&lt;/script&gt;
    &lt;!-- Including react-dom --&gt;
    &lt;script type="text/javascript" src="path/to/local/react-dom.development.js"&gt;&lt;/script&gt;
    &lt;!-- Including babel --&gt;
    &lt;script type="text/javascript" src="path/to/local/babel.min.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusioncharts core library --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.js"&gt;&lt;/script&gt;
    &lt;!-- Including the fusiontime library to render charts --&gt;
    &lt;script type="text/javascript" src="path/to/local/fusioncharts.timeseries.js"&gt;&lt;/script&gt;
    &lt;!-- Including react-fusioncharts component --&gt;
    &lt;script type="text/javascript" src="path/to/local/react-fusioncharts.min.js"&gt;&lt;/script&gt;
    &lt;script type="text/babel"&gt;
    ReactFC.fcRoot(FusionCharts);

    const jsonify = res =&gt; res.json();
    const dataFetch = fetch(       'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json').then(jsonify);
    const schemaFetch = fetch('https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json').then(jsonify);
    &lt;/script&gt;
        &lt;script type="text/jsx"&gt;
        class ChartViewer extends React.Component {
            constructor(props) {
                super(props);
                this.onFetchData = this.onFetchData.bind(this);
                this.state = {
                    timeseriesDs: {
                        type: 'timeseries',
                        renderAt: 'container',
                        width: '600',
                        height: '400',
                        dataSource: {
                            caption: { text: 'Online Sales of a SuperStore in the US' },
                            data: null,
                            yAxis: [{
                                plot: [{
                                    value: 'Sales ($)'
                                }]
                            }]
                        }
                    }
                };
            }
            componentDidMount() {
                this.onFetchData();
            }
            onFetchData() {
                Promise.all([dataFetch, schemaFetch]).then(res =&gt; {
                    const data = res[0];
                    const schema = res[1];
                    const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
                    const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
                    timeseriesDs.dataSource.data = fusionTable;
                    this.setState({
                        timeseriesDs
                    });
                });
            }

            render() {
                return (
                &lt;div&gt;
                {this.state.timeseriesDs.dataSource.data ? (
                &lt;ReactFC {...this.state.timeseriesDs} /&gt;
                ) : (
                'loading'
                )}
                &lt;/div&gt;
                );
            }
        }
        ReactDOM.render(
        &lt;ChartViewer /&gt;,
        document.getElementById('chart-container')
        );
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id='chart-container'&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

In the above code:

* Create a React Component ChartViewer.
* Add timeseriesDs in component state.
* Include the fusioncharts library.
* Include `data.json` and `schema.json` files.
* Define the chart configuration in the FusionCharts constructor:
    * Set the type as `timeseries`.
    * Set the chart container as `container` using the `renderAt` property.
    * Set the width and height (in pixels).
    * Set the name of the `DataTable` as the value of the `data` property of `dataSource`.
    * Set the data to create the chart.
    * Specify the caption of the chart using `text` attribute in `caption` object.
* Create an empty storage as `fusionDataStore` using `FusionCharts.DataStore`.
* Create a `DataTable` within the empty storage using `fusionDataStore.createDataTable` and pass the `schema` and `data` to the the `DataTable`.