---
title: Add Annotations | FusionCharts
description: This article focuses on different type of configurations possible using the react.
heading: Add Annotations
---

## The full code of the sample is given below:

Annotations are graphical elements (different types of shapes, custom text, and so on) that you can render on your chart to make it more informative, while making it visually appealing.

In this article we'll create a **Spline** chart and add annotations using `react-fusioncharts` component. A spline chart using annotations to highlight a particular anchor along with text is shown below:

{% embed_chartData configure-charts-using-react-example-3.js json %}

The full code of the above sample is given below:

```javascript
// Step 1 - Include react
import React from "react";
import ReactDOM from "react-dom";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: "line",
    width: "700",
    height: "400",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Average Monthly Temperature in Texas",
            yAxisName: "Average Monthly Temperature",
            anchorradius: "5",
            plotToolText: "Average temperature in $label is <b>$dataValue</b>",
            showHoverEffect: "1",
            showvalues: "0",
            numberSuffix: "°C",
            theme: "fusion",
            anchorBgColor: "#72D7B2",
            paletteColors: "#72D7B2"
        },
        annotations: {
            groups: [{
                id: "anchor-highlight",
                items: [{
                        id: "high-star",
                        type: "circle",
                        x: "$dataset.0.set.7.x",
                        y: "$dataset.0.set.7.y",
                        radius: "12",
                        color: "#cc0000",
                        border: "2",
                        borderColor: "#0075c2"
                    }, {
                        id: "label",
                        type: "text",
                        text: "Hottest Month",
                        fillcolor: "#0075c2",
                        rotate: "90",
                        x: "$dataset.0.set.7.x+75",
                        y: "$dataset.0.set.7.y-2"
                    }
                ]
            }]
        },
        data: [{
                label: "Jan",
                value: "1"
            }, {
                label: "Feb",
                value: "5"
            }, {
                label: "Mar",
                value: "10"
            }, {
                label: "Apr",
                value: "12"
            }, {
                label: "May",
                value: "14"
            }, {
                label: "Jun",
                value: "16"
            }, {
                label: "Jul",
                value: "20"
            }, {
                label: "Aug",
                value: "22"
            }, {
                label: "Sep",
                value: "20"
            }, {
                label: "Oct",
                value: "16"
            }, {
                label: "Nov",
                value: "7"
            }, {
                label: "Dec",
                value: "2"
            }
        ]
    }
};

// Step 9 - Creating the DOM element to pass the react-fusioncharts component
export default class App extends React.Component {
    render() {
        return <ReactFC {
            ...chartConfigs
        } />;
    }
}
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.
    * Create an `annotations` object in the `dataSource`, to specify the cosmetics and functionalities of the annotation.

3. Create a `DOM` element and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.
