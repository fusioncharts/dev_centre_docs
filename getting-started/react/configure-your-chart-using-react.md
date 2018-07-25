---
title: Configuring your Chart using React | FusionCharts
description: This article focuses on different type of configurations possible using the react.
heading: Configuring your Chart using React
chartPresent: true
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization easy. These features include chart update, annotations, trend-lines, and events.

This article focuses on how you can use the `props` object and `react-fusioncharts` component to:

* Update Chart Data
* Update Chart Attributes
* Trigger Events from Props
* Add Trend-lines
* Add Annotations
* Include Interactivity between Charts

## Update Chart Data

A chart, configured to update data values dynamically, is shown below (click **Update chart** data to update the chart data):

{% embed_chart configure-charts-using-react-example-1.js %}

The code to render the above chart is given below:

```
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'column2d',
            width: '600',
            height: '400',
            dataFormat: 'json',
            dataSource: { /* see data tab */ },
        };

        this.updateData = this.updateData.bind(this);
    }

    // This function generates random number.
    getRandomNumber() {
        var max = 290,
            min = 30;
        return Math.round(((max - min) * Math.random()) + min);
    }

    // Handler for update button.
    // Randomly updates the values of the chart.
    updateData() {
        const prevDs = Object.assign({}, this.state.dataSource);
        prevDs.data[2].value = this.getRandomNumber();
        prevDs.data[3].value = this.getRandomNumber();
        this.setState({
            dataSource: prevDs,
        });
    }

    render() {
        return ( 
            <div>
            <ReactFC { ...this.state} />
            <br />
            <br />
            <center><button style = {{ padding: '5px 10px', background: '#fbfbfb'}} onClick={this.updateData}>Change Chart Data </button></center>
            </div>
        );
    }
}
```

The full code of the above sample is given below:

```
import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTime from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTime);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'column2d',
            width: '600',
            height: '400',
            dataFormat: 'json',
            dataSource: { /* see data tab */ },
        };

        this.updateData = this.updateData.bind(this);
    }

    // This function generates random number.
    getRandomNumber() {
        var max = 290,
            min = 30;
        return Math.round(((max - min) * Math.random()) + min);
    }

    // Handler for update button.
    // Randomly updates the values of the chart.
    updateData() {
        const prevDs = Object.assign({}, this.state.dataSource);
        prevDs.data[2].value = this.getRandomNumber();
        prevDs.data[3].value = this.getRandomNumber();
        this.setState({
            dataSource: prevDs,
        });
    }

    render() {
        return (
            <div>
            <ReactFC {...this.state} />
            <br />
            <br />
            <center><button style={{ padding: '5px 10px', background: '#fbfbfb' }} onClick={this.updateData}>Change Chart Data</button></center>
            </div>
        );
    }
}

ReactDOM.render( <
    App / > ,
    document.getElementById('root'),
);
```