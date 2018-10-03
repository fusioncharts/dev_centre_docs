---
title: Dynamically Add Chart Event Listener using Plain JS | FusionCharts
description: This article tells you how to dynamically add chart event listener to your chart using plain JS.
heading: Dynamically Add Chart Event Listener using Plain JS
---

FusionCharts Suite XT includes advanced features that let you add more context to your chart and make data visualization simpler. These features include chart updates, add events at runtime, and remove events at runtime.

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

This article focuses on how you can dynamically add/remove event listener to the data plots in the chart.

A chart is shown below:

{% embed_chartData dynamically-add-chart-event-listener-example-1.js json %}

The full code of the above sample is given below:

```
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add the chart and theme as dependency
FusionCharts.addDep(Charts);
FusionCharts.addDep(FusionTheme);

// Create an Instance with chart options
var chartInstance = new FusionCharts({
    type: 'column2d',
    height: '400',
    width: '700',
    dataFormat: 'json',
    renderAt: 'chart-container',
    dataSource: {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
        },
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }],
    },
    "events": {
        "beforeRender": function(e, d) {
            var messageBlock = document.createElement('p');
            messageBlock.style.textAlign = "center";
            var defaultMessage = 'Click the below buttons to add an event dynamically to a chart';
            var activatedMessage = 'Click on the plot to see the value along with the label';

            var getClickedMessage = function(categoryLabel, displayValue) {
                return 'You have clicked on plot <b>' + categoryLabel + ' </b> which has a value of <b>' + displayValue + '</b>';
            };
            messageBlock.innerText = defaultMessage;
            e.data.container.appendChild(messageBlock);

            // Create buttons
            var button1 = document.createElement('button');
            var button2 = document.createElement('button');
            var buttonWrapper = document.createElement('div');

            // Styles
            buttonWrapper.style.display = "flex";
            buttonWrapper.style.justifyContent = "center";


            button1.innerText = "ADD/LISTEN TO DATAPLOTCLICK EVENT";
            button2.innerText = "REMOVE DATAPLOTCLICK EVENT";

            // Get classNames for both button
            var classListbtn1 = button1.className.split(" ");
            var classListbtn2 = button2.className.split(" ");

            // Add class name for the style
            button1.className = button1.className + " btn btn-outline-secondary btn-sm";
            button2.className = button2.className + " btn btn-outline-secondary btn-sm";


            // Append to wrapper
            buttonWrapper.appendChild(button1);
            buttonWrapper.appendChild(button2);

            e.data.container.appendChild(buttonWrapper);
            button1.style.margin = "5px";
            button2.style.margin = "5px";

            function dataPlotClickListener(e, a) {
                var categoryLabel = e.data.categoryLabel;
                var displayValue = e.data.displayValue;
                var resMessage = getClickedMessage(categoryLabel, displayValue);
                messageBlock.innerHTML = resMessage;
            }

            button1.addEventListener('click', function() {
                button1.setAttribute('disabled', 'disabled');
                messageBlock.innerText = activatedMessage;
                e.sender.addEventListener('dataplotclick', dataPlotClickListener);
            });

            button2.addEventListener('click', function() {
                button1.removeAttribute('disabled');
                messageBlock.innerText = defaultMessage;
                e.sender.removeEventListener('dataplotclick', dataPlotClickListener);
            });

        }
    }
});// Render
chartInstance.render();
```

The above chart has been rendered using the following steps:

1. Include the necessary libraries and components using `import`. For example, `fusioncharts` library, etc.

2. Add the chart and theme as dependency. 

3. Store the chart configuration in a JSON object. In the JSON object:
    * Set the chart type as `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * Set the width and height of the chart in pixels. 
    * Set the `dataFormat` as JSON.
    * Embed the json data as the value of `dataSource`.

4. In the above sample:
	* Add a handler to track plot clicks.
	* Add an event listener is added for data plot click on the chart.
	* Set the default message is set when data plot tracking is enabled.
	* Add an event listener for `dataPlotClick` event when the message is updated with the values of the data plot.
	* Add a handler is added for the **REMOVE DATAPLOTCLICK EVENT** button. The button resets the chart to default message and removes the event listener.

5. Buttons are created inside the `<div>` to add the event listener to the data plot.

6. Functionalities are added to the button to add/remove the event listener.