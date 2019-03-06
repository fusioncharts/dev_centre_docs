---
title: Vertical Div Lines | FusionCharts
description: Vertical div lines are vertical lines running through the canvas in a chart. These lines help in relating the data to its respective label
heading: Vertical Div Lines
---

Vertical divisional (or div) lines are vertical lines running through the canvas in a chart.

> Vertical div lines are applicable only for the line, area, spline, splineArea, and XY type charts.

The image below shows vertical div lines rendered in a line chart:

![Vertical divisional lines](/images/chart-configurations-vertical-div-lines-image-1.png)

## Show Vertical Divisional Lines

By default, vertical divisional lines are not rendered in a chart. To render vertical divisional lines, specify the number of divisional lines you want to display using the `numVDivLines` attribute. 

Refer to the code below:

```json
{
    "chart": {
        "numVDivLines": "5"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-div-lines-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/43ayL5uf/) to edit the above chart.

## Customize the Visuals of Vertical Divisional Lines 

To customize the visuals of the divisional lines use the following attributes:

* Specify the hex code of for the divisional line color using the `vDivLineColor` attribute.

* Set the thickness (in pixels) using the `vDivLineThickness` attribute.

* Set the transparency of the using the `vDivLineAlpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        "numVDivLines": "5",
        "vDivLineColor": "#99ccff",
        "vDivLineThickness": "1",
        "vDivLineAlpha": "50"
    }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-div-lines-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/vq1jvvze/) to edit the above chart.

### Dashed Divisional Lines

You can also render div lines as dashed lines instead of the default continuous lines. To do so, use the following attributes:

* Set the `vDivLineDashed` attribute to `1` to view the divisional lines as dashed.

* Set the length of each dashed line using the `vDivLineDashLen` attribute.

* Set the gap between each dash using the `vDivLineDashGap` attribute.

Refer to the code below:

```json
{
    "chart": {
        "numVDivLines": "5",
        "vDivLineColor": "#99ccff",
        "vDivLineThickness": "1",
        "vDivLineAlpha": "70",
        "vDivLineDashed": "1",
        "vDivLineDashLen": "5",
        "vDivLineDashGap": "3"
   }
}
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-div-lines-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/4d4z0htq/) to edit the above chart.

## Show Vertical Grid Bands

Vertical grid bands, by default, do not appear between the vertical divisional lines. 

To show the vertical grid bands, set the `showAlternateVGridColor` attribute to `1`. 

Refer to the code below:

```json
{
    "chart": {
        "showAlternateVGridColor": "1" 
    }
}
```
A line chart with alternate vertical grid bands enabled is shown below:

{% embed_chart chart-configurations-vertical-div-lines-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/30wLwwmj/) to edit the above chart.

### Customize the Visuals Vertical Grid Bands

To customize the visual properties of the vertical grid bands use the following attributes:

* Specify the hex code for the color of the grid bands using the `alternateVGridColor` attribute.

* Set the transparency of the grid band using the `alternateVGridAlpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        "alternateVGridColor": "#bee6ff",
        "alternateVGridAlpha": "30"
    }
}    
```

The chart will look like as shown below:

{% embed_chart chart-configurations-vertical-div-lines-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/be3ap4du/) to edit the above chart.