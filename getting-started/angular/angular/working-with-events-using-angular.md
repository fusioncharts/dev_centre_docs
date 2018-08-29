---
title: Working with Events | FusionCharts
description: This article talks about the Events using Angular.
heading: Working with Events
---

Events are signals that let you execute specific actions—such as manipulating the DOM, sending data to the server, and so on—using JavaScript, in response to any interactions/updates for a chart. Events can be used to trigger action(s) when a chart renders successfully, when data completes loading, when a data plot is clicked, when the mouse pointer is hovered over a data plot, and so on.

Events can be used for applications like monitoring the state of a system or a business. For example, you can listen to an event to observe the temperature of a deep freezer and display an alert message if the temperature falls below the minimum value.

Take a look at the pie chart shown below:

{% embed_chart advanced-charting-events-introduction-example-1.js %}

Roll the mouse pointer over any one pie slice and see how the text (the slice label and the no. of visitors) rendered below the chart changes.

For example, if you roll the mouse pointer over the __Senior__ slice, the following text is displayed is below the chart:
__Age group: Senior__
__No. of visitors: 491000__

Fusincharts events can be subscribed from component's output parameters.

To render the above chart, use the template given below:

```
<fusioncharts
	width="450"
	height="350"
	type="pie2d"
	dataFormat="JSON"
	[dataSource]="dataSource"
	(dataplotRollOver)="plotRollOver($event)">
</fusioncharts>
```

In the above template, `dataplotRollOver` is the scope function which is to be defined in the controller's code. In the component's code, `$event` is an object like shown below:

`{ eventObj : {...}, dataObj: {...} }`

Click [here]({% site.baseurl %}/api/fusioncharts/fusioncharts-events) for the detailed events in FusionCharts.

The full code to render the above chart using `dataplotRollOver` event is:

```
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    dataSource: Object;
    title: string;

    constructor() {
        this.title = "Angular  FusionCharts Sample";

        this.dataSource = {
            ... // same data as above
        };
    }
    plotRollOver($event) {
        var dataValue = $event.dataObj.dataValue;
        console.log(`Value is ${dataValue}`);
    }
}
```

Refer to the code below where the code snippet for `plotRollOver` event has been specified.

```
plotRollOver($event) {
    var dataValue = $event.dataObj.dataValue;
    console.log(`Value is ${dataValue}`);
}
```

In the above code `plotRollOver` event is triggered when the mouse pointer is rolled over a data plot. 

Click [here]({% site.baseurl %}/api/fusioncharts/fusioncharts-events#dataplotrollover-247) to get the detailed parameters of the event.