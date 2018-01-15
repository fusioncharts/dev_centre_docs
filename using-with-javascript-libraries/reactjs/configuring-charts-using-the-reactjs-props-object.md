---
permalink: using-with-javascript-libraries/reactjs/configuring-charts-using-the-reactjs-props-object.html
title: Configuring Charts Using the ReactJS Props Object | FusionCharts
description: This articles describes how you can use the props object to update chart data, update chart attributes, trigger events from props, etc
heading: Configuring Charts Using the ReactJS Props Object
chartPresent: true
---

## Prerequisites

* [Creating a simple chart using FusionCharts Suite XT](/getting-started/building-your-first-chart)

* [Installing the React-FusionCharts Component](/using-with-javascript-libraries/reactjs/introduction)

* [Installing the React-FusionCharts Component via NPM](/using-with-javascript-libraries/reactjs/install-fusioncharts-reactjs-component-via-npm)

* [Creating Charts Using the React-FusionCharts Component](/using-with-javascript-libraries/reactjs/creating-charts-using-the-react-fusioncharts-component)

Once a chart is created using the React-FusionCharts component, the props object (that contains the data source or the object being used as the data source) can be used to update chart data before the `ReactDOM.render()` method is called.

This articles describes how you can use the props object to:

* <a href="/using-with-javascript-libraries/reactjs/configuring-charts-using-the-reactjs-props-object#updating-chart-data" class="smoth-scroll">Update chart data</a>

* <a href="/using-with-javascript-libraries/reactjs/configuring-charts-using-the-reactjs-props-object#updating-chart-attributes" class="smoth-scroll">Update chart attributes</a>

* <a href="/using-with-javascript-libraries/reactjs/configuring-charts-using-the-reactjs-props-object#triggering-events-using-the-props-object" class="smoth-scroll">Trigger events from props</a>

## Updating Chart Data

A chart, configured to update data values dynamically, is shown below (click __Update chart data__ to update the chart data):

{% embed_chart using-with-javascript-libraries-reactjs-configuring-charts-using-the-reactjs-props-object-example-1.js %}

An HTML container element to contain the rendered chart is created first, as shown below:

```html

<div id="chart-container"></div>

```

The code to render this chart is given below:

```javascript

var myDataSource = {
    chart: {
        caption: "Top 5 stores in last month by revenue",
        subCaption: "Harry's SuperMart",
        numberPrefix: "$",
        theme: "fint"
    },
    data: [{
        label: "Bakersfield Central",
        value: "880000"
    }, {
        label: "Garden Groove harbour",
        value: "730000"
    }, {
        label: "Los Angeles Topanga",
        value: "590000"
    }, {
        label: "Compton-Rancho Dom",
        value: "520000"
    }, {
        label: "Daly City Serramonte",
        value: "330000"
    }]
};

var RevenueChart = React.createClass({
    /**
    ** `getInitialState()` method is used to initialize the state of the
    ** the `RevenueChart` component.
    **/
    getInitialState: function () {
        return {
            eventTarget: ''
        };
    },

    /**
    ** The `handleClick()` function is defined in the `RevenueChart` component.
    ** This function is configured to store the state of the `eventTarget` using
    ** the `setState()` method of React. This is binded to button click.
    **/
    handleCLick: function () {
        this.setState({
            eventTarget: 'btn-update-data'
        });
    },

    render: function () {
        var revenueChartConfigs = {
            id: "revenue-chart",
            renderAt: "revenue-chart-container",
            type: "column2d",
            width:600,
            height: 400,
            dataFormat: "json",
            dataSource: myDataSource,
            eventTarget: this.state.eventTarget,
            impactedBy: ['btn-update-data']
        };

        /**
        ** Using the state, we update the `label` and `value` for the third and
        ** fourth data plots in the `render()` method of RevenueChart. The configuration
        ** object that is passed as props is used to refer to the `label`
        ** and `value` attributes of the `data` object array.
        **/
        if (this.state.eventTarget && this.state.eventTarget.length != 0) {
            revenueChartConfigs.dataSource.data[2].label = "Art Supply Store";
            revenueChartConfigs.dataSource.data[2].value = "420000";
            revenueChartConfigs.dataSource.data[3].label = "P.C. Richard & Son";
            revenueChartConfigs.dataSource.data[3].value = "320000";
        }
        else {
            revenueChartConfigs.dataSource = myDataSource;
        }

        return (
            <div>
            	/** The `FusionCharts` React component is used to render the chart. **/
                <ReactFC {...revenueChartConfigs} />

                /** Create a button, which when clicked will call the `handleClick()` function. **/
                <a  id='btn-update-data'
                    onClick={this.handleCLick}
                    className="btn btn-default"
                    href="#">{'Click me to change data'}</a>
            </div>
        );
    }
})

ReactDOM.render(
    <RevenueChart />,
    document.getElementById('chart-container')
);

```

## Updating Chart Attributes

A chart, configured to update the chart caption and sub-caption alignment dynamically, is shown below (click any one of the radio buttons shown below the chart to change the caption and sub-caption alignment):

{% embed_chart using-with-javascript-libraries-reactjs-configuring-charts-using-the-reactjs-props-object-example-2.js %}

An HTML container element to contain the rendered chart is created first, as shown below:

```html

<div id="chart-container"></div>

```

The code to render this chart is given below:

```javascript

var myDataSource = {
    chart: {
        caption: "Quarterly Revenue for FY2013-2014",
        subCaption: "Harry's SuperMart",
        numberPrefix: "$",
        theme "fint"
    },
    data: [{
        label: "Q1",
        value: "420000"
    }, {
        label: "Q2",
        value: "810000"
    }, {
        label: "Q3",
        value: "720000"
    }, {
        label: "Q4",
        value: "550000"
    }]
};

var RevenueChart = React.createClass({
    /**
    ** `getInitialState()` method is used to initialize the state of the
    ** the `RevenueChart` component.
    **/
    getInitialState: function () {
        return {
            event_target: ''
        };
    },

    /** To check the `center` radio button, onload **/
    componentDidMount: function () {
        $('#center').prop('checked',true);
    },

    /**
    ** The `leftAlignCaption()`, `rightAlignCaption()`, and `centerAlignCaption()`
    ** methods are defined in the `RevenueChart` component. These functions are
    ** configured to store a state of the `eventTarget` using React's `setState()`
    ** method. This is binded to each radio button's onChange event.
    **/
	leftAlignCaption: function () {
        this.setState(function () {
            return {
                eventTarget: 'left'
            }
        });
    },
    centerAlignCaption: function () {
        this.setState(function () {
            return {
                eventTarget: 'center'
            }
        });
    },
    rightAlignCaption: function () {
        this.setState(function () {
            return {
                eventTarget: 'right'
            }
        });
    },

    render: function() {
        var that = this;

        var revenueChartConfigs = {
            id: "revenue-chart",
            renderAt: "revenue-chart-container",
            width: 600,
            height: 400,
            type: "column2d",
            impactedBy: ['left','center','right'],
            eventTarget: this.state.eventTarget,
            dataSource: myDataSource
        };

        $('.caption-options').prop('checked',false);

        /**
        ** Using the state, we update the chart's caption alignment. And this update
        ** is reflected to the configurations of the chart.
        **/
        if (that.state.eventTarget && that.state.eventTarget.length != 0) {
            revenueChartConfigs.dataSource.chart.captionAlignment = that.state.eventTarget;
            $('#'+that.state.eventTarget).prop('checked',true); /** Checking the relevant radio button **/
        }
        else {
            revenueChartConfigs.dataSource.chart.captionAlignment = 'center';
            $('#center').prop('checked',true);  /** Checking the `center` radio button, in case of the default condition  **/
        }

        return (
            <div>
                <ReactFC {...revenueChartConfigs} />

                /** Radio buttons to update the caption alignment **/
                Change Caption Alignment: <input type="radio" id="center" name="captionalignment" onChange={this.centerAlignCaption}>Center </input>
                <input type="radio" id="left" name="captionalignment" onChange={this.leftAlignCaption}> Left </input>
                <input type="radio" id="right" name="captionalignment" onChange={this.rightAlignCaption}> Right </input>
            </div>
        );
    }
});

ReactDOM.render(
    <RevenueChart />,
    document.getElementById('chart-container')
);

```

<p class="text-info">
For a list of other attributes that you can configure for a column 2D chart, click [here](/chart-attributes?chart=column2d).
</p>

## Triggering Events Using the Props Object

A column 2D chart, configured to listen to the [dataplotClick](/api/fusioncharts/fusioncharts-events#event-dataplotClick) event, is shown below (click a a data plot to trigger the event) :

{% embed_chart using-with-javascript-libraries-reactjs-configuring-charts-using-the-reactjs-props-object-example-3.js %}

<p> </p>

When the event is triggered, the text __Selected Value:__ rendered below the chart is updated to show the value of the data plot that triggered the event.

An HTML container element to contain the rendered chart is created first, as shown below:

```html

<div class="chart-example" id="chart-container"></div>

<!-- The 'selectedValue' span is defined to store the label and the value of the data plot that is clicked.
It is assigned an initial value 'nothing' that will be displayed when the chart is first rendered. -->

<p>Selected Value: <span id="selectedValue"></span></p> 

```

The code to render this chart is given below:

```javascript

var myDataSource = {
        "chart": {
        "caption": "Quarterly Revenue for FY2013-2014",
        "subCaption": "Harry's SuperMart",
        "xAxisName": "Quarter",
        "yAxisName": "Revenue",
        "numberPrefix": "$",
        "showValues": "0",
        "theme": "fint"
    },
    "data": [{
        "label": "Q1",
        "value": "420000"
    }, {
        "label": "Q2",
        "value": "810000"
    }, {
        "label": "Q3",
        "value": "720000"
    }, {
        "label": "Q4",
        "value": "550000"
    }]
};

var quarterlyRevenueChartConfigs = {
    type: 'column2d',
    id: "quarterly-revenue-chart",
    renderAt: "quarterly-revenue-chart-container",
    width: '400',
    height: '300',
    dataFormat: "json",
    dataSource: myDataSource,
    events : {

        /**
        ** When the `dataplotclick` event is triggered, the props object is used to execute the
		** function that checks for the value of the data plot clicked. This value is assigned to
		** the HTML span element with the ID `selectedValue`. Consequently, the text rendered below
        ** the chart is updated.
        **/
        dataplotclick: function (ev, props) {
            document.getElementById('selectedValue').innerHTML = props.toolText;
        }
    }
};

ReactDOM.render(
    <ReactFC {...quarterlyRevenueChartConfigs} />,
    document.getElementById('chart-container')
);

```