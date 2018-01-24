---
permalink: using-with-javascript-libraries/reactjs/including-interactivity-in-charts-using-reactjs.html
title: Including Interactivity in Charts Using ReactJS | FusionCharts
description: This section talks about including interactivity in charts using reactJS.
heading: Including Interactivity in Charts Using ReactJS
chartPresent: true
---

<script defer type="text/javascript" src="{{ site.baseurl | append:'assets/fusioncharts/react-fusioncharts.js'}}"></script>

<script defer type="text/javascript" src="{{ site.baseurl | append:'assets/fusioncharts/react-fusioncharts.min.js'}}"></script>

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT](/getting-started/building-your-first-chart)

* [Installing the React-FusionCharts Component](/using-with-javascript-libraries/reactjs/introduction)

* [Installing the React-FusionCharts Component via NPM](/using-with-javascript-libraries/reactjs/install-fusioncharts-reactjs-component-via-npm)

* [Creating Charts Using the React-FusionCharts Component](/using-with-javascript-libraries/reactjs/creating-charts-using-the-react-fusioncharts-component)

* [Configuring Charts Using the ReactJS Props Object](/using-with-javascript-libraries/reactjs/configuring-charts-using-the-reactjs-props-object)

* [Configuring Advanced Features Using ReactJS](/using-with-javascript-libraries/reactjs/configuring-advanced-features-using-reactjs)

ReactJS provides a 'one-way' data flow. By monitoring the state of a parent ReactJS component, you can take advantage of this unidirectional data-binding to include interactivity between charts.

## Including Interactivity Between Charts

Assume that you have a dashboard with a pie 2D and a column 2D chart to plot sales data for Harry's retail and wholesale stores. The pie 2D chart plots collective sales for the retail and wholesale stores; the column 2D chart plots sales for individual stores. Harry wants his charts to be interactive in a way that when the __Retail__ pie slice is clicked, the column 2D chart shows data for only all retail stores, and likewise for the wholesale stores.

The dashboard looks as shown below:

{% embed_chart using-with-javascript-libraries-reactjs-including-interactivity-in-charts-using-reactjs-example-1.js %}

<p class="text-info">
The complete code for this dashboard is given at the end of this article, after all steps have been explained.
</p>

The following four steps describe in detail, with code samples, how you can establish data interactivity between charts:

### Step 1: Creating a Parent Component

To include interactivity between a set of charts from FusionCharts Suite XT, these charts are tied to a common parent ReactJS component. This parent component is responsible for managing the state of all charts that are tied under it. Properties related to the state of this component are left open for the user to define. This is helpful when the user needs to store filters or elements that trigger the filters (explained in a later step).

The interactive dashboard mentioned in the above example will, therefore, have a parent component, `MyApp` and two charts (the pie chart and column chart) under it. The interactivity between the charts is handled by a configuration, `impactedBy` (explained later). 

Chart configurations are passed to the `FusionCharts` component as the props object, as shown below:

```javascript

var MyApp = React.createClass({
    /** ReactJS code **/

    render: function () {
        return (
            <ReactFC {...pieChartConfigs} />
            <ReactFC {...columnChartConfigs} />
        );
    }
});

ReactDOM.render(
    <MyApp />,
    document.getElementById('chart-container')
);

```

### Step 2: Defining an Event's Behavior for a Filter

Data plotted on the column chart should be filtered based on the pie slice clicked, as directed by the snippet below:

```javascript

var pieChartConfigurations = {
    /** FusionCharts Configs **/

    events: {

        /***
        ** Slicing event of Pie Chart
        ***/
        slicingStart: function () {

            /***
            **  Call a function which sets the state of 'MyApp'
            **  with the value of this filter and the 'id' of this pie chart.
            ***/

        }
    }
};

```

### Step 3: Storing the Filter

Before the filter is propagated to a chart, it has to be stored from where it is accessible to the chart. This is done in the function that sets the state of the parent component.

A function is defined in the parent component and is called when the [slicingStart](/api/fusioncharts/fusioncharts-events#event-slicingStart) event is triggered. The function sets the state of the parent component, mandatorily, with:

* `filterValue`: value of the selected slice
* `filterSource`: ID of the chart that triggered the `slicingStart` event

<p class="text-info">
The `filterSource` property has to be set to use the component in the interactive mode.
</p>

The code snippet below shows a sample definition for this function:

```javascript

var MyApp = React.createClass({
    /** ReactJS code **/

    /**
    ** The `storeFilters()` function is defined in the `MyApp` component. This
    ** function is configured to store a state of the `filterSource` using
    ** the `setState()` method of React. This is binded to the `slicingStart` event.
    **/
    storeFilters: function (fv, target) {
        this.setState({
            filterValue: fv,
            filterSource: target
        });
    },
    render: function () {
        var that = this;

        var pieChartConfigs = {
                /** FusionCharts Configs **/

                events: {
                    slicingStart: function (a,b) {

                        /***
                        ** Calling the function to set state of 'MyApp'
                        ***/
                        that.storeFilters(a.data.categoryLabel, b.sender.id);
                    }
                }
            };

        var columnChartConfigs = {
            /** FusionCharts Configs **/
        };

        /***
        **  Code to filter the data of the column chart
        ***/

        return (
            <ReactFC {...pieChartConfigs} />
            <ReactFC {...columnChartConfigs} />
        );
    }
});

ReactDOM.render(
    <MyApp />,
    document.getElementById('chart-container')
);

```

### Step 4: Propagating the Filters

To use the interactive mode, using the React-FusionCharts component, the following two configurations are defined:

- `eventSource`: The `eventSource` configuration is defined for the chart/chart element that triggers an event(s). This configuration accepts a non-empty string, which is the ID of the chart/chart element that triggered the event(s).

- `impactedBy`: The `impactedBy` configuration is defined for the chart/chart element that is impacted when an event is triggered by another chart/chart element. This configuration accepts an array of ID(s) of the chart/chart elements that trigger the event.

This step is important because the component internally compares the value of the `eventSource` and the `impactedBy` configurations. If there is a match, the component updates itself.

The value stored for `filterSource` is accessed from the state of the parent component `MyApp` and is passed to the configuration property `eventSource`, as shown in the code snippet below:

```javascript
var MyApp = React.createClass({
    ....,
    storeFilters: function (fv, target) {...},
    render: function () {
        var that = this;

        var pieChartConfigs = {
            /** FusionCharts Configs **/
        };

        var columnChartConfigs = {
            /** FusionCharts Configs **/

            /**
            **  ID of the chart that triggered the event to filter a certain chart
            **/
            eventSource: this.state.eventSource,
            impactedBy: ['category-chart'],
        };

        /**
        **  Code to filter the data of the column chart
        **/

        return (
            <ReactFC {...pieChartConfigs} />
            <ReactFC {...columnChartConfigs} />
        );
    }
});

ReactDOM.render(
    <MyApp />,
    document.getElementById('chart-container')
);
```

### Example

Now, coming back to the dashboard example referred to in the beginning of the article. The complete code to render the dashboard is given below:

```html

<div id="chart-container"></div>

```

```javascript

/** Raw data **/
var completeData = [
    {
        label: "Bakersfield Central",
        category: "Retail",
        value: "880000",
        city: "NYC"
    },
    {
        label: "Garden Groove harbour",
        category: "General",
        value: "730000",
        city: "London"
    },
    {
        label: "Los Angeles Topanga",
        value: "590000",
        category: "Retail",
        city: "NYC"
    },
    {
        label: "Compton-Rancho Dom",
        value: "520000",
        category: "Retail",
        city: "NYC"
    },
    {
        label: "Daly City Serramonte",
        value: "330000",
        category: "General",
        city: "Mumbai"
    }
];

/** Column Chart's 'dataSource' **/
var revenueChartDataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        theme:"fint"
    },
    data: completeData
};

/** Pie Chart's 'dataSource' **/
var categoryChartDataSource = {
    chart: {
        caption: "Categories of Harry's SuperMart",
        theme:"fint",
        enablemultislicing: "0"
    },
    data: [
        {
            label: "General",
            value: 0
        },
        {
            label: "Retail",
            value: 0
        }
    ]
};

/** Building data for Pie Chart based on the category of the mart stores **/
for (var i=0,len=completeData.length ; i<len ; i++) {
    if (completeData[i].category == "General") {
        categoryChartDataSource.data[0].value += 1;
    }
    else {
        categoryChartDataSource.data[1].value += 1;
    }
}

var RevenueCategoryDashboard = React.createClass({
    /**
    ** `getInitialState()` method is used to initialize the state of the
    ** the `RevenueCategoryDashboard` component.
    **/
    getInitialState: function () {
        return {
            filterValue: '',
            eventTarget: ''
        };
    },

    /**
    ** The `handleUserInput()` function is defined in the `RevenueCategoryDashboard`
    ** component. This function is configured to store a state of the `eventTarget` using
    ** React's `setState()` method. This is binded to the `slicingStart` event.
    **/
    handleUserInput: function (category_mart, target) {
        this.setState(function () {
            return {
                filterValue: category_mart,
                eventTarget: target
            }
        });
    },

    render: function() {
        var that = this
            , rows = [];

        var revenueChartConfigs = {
            type: "column2d",
            dataFormat: "json",
            dataSource: revenueChartDataSource,
            width:300,
            height:150,

            /**
            ** Mapping for data-interactivity between charts. It accepts the ID of the
            ** HTML element which should be impacting this chart
            **/
            impactedBy: ['category-chart'],

            /**
            ** Pass 'eventTarget' into props for the id of the FusionCharts that triggered the
            ** event to filter a certain chart. This is mandatory alongwith the `impactedBy` property.
            **/
            eventTarget: this.state.eventTarget
        };
        var categoryChartConfigs = {
            type: "pie2D",
            id: "category-chart",
            renderAt: "category-chart-container",
            className: "inline_div",
            dataFormat: "json",
            defaultCenterLabel: "Total revenue: $64.08K",
            eventTarget: this.state.eventTarget,
            dataSource: categoryChartDataSource,
            width:400,
            height:300,
            events: {

                /** Slicing event of Pie Chart **/
                slicingStart: function (evtObj, argObj) {
                    if (argObj.slicedState == false) {
                        that.handleUserInput(argObj.data.categoryLabel, evtObj.sender.id);
                    }
                    else {
                        that.handleUserInput('',evtObj.sender.id);
                    }
                }
            }
        };

        /**
        **  When a slice of the pie chart is selected, the state of the parent component changes
        **  i.e., it changes the state of FCDashbaord. And when an update happens, the filter is
        **  passed on to the data of the column chart.
        **/
        if (that.state.filterValue && that.state.filterValue.length != 0) {
            completeData.forEach(function(mart) {
                if (mart.category == that.state.filterValue) {
                    rows.push(mart);
                }
            });
            revenueChartDataSource.dataSource.data = rows;
        }
        else {
            revenueChartDataSource.dataSource.data = completeData;
        }

        return (
            <div>

                /** Click a  pie slice to filter the data on the column chart. **/
                <ReactFC {...categoryChartConfigs} />
                <ReactFC {...revenueChartConfigs} />
            </div>
        );
    }
});

ReactDOM.render(
    <RevenueCategoryDashboard />,
    document.getElementById('chart-container')
);

```