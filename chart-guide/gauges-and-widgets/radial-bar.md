---
title: Radial Bar | FusionCharts
description: Radial Bar charts use circular shapes to compare different categories, similar to a typical Bar chart but displayed on a polar coordinate system, instead of a cartesian system.
heading: Radial Bar
---

Radial Bar charts use circular shapes to compare different categories, similar to a typical Bar chart but displayed on a polar coordinate system, instead of a cartesian system.
The columns are in a circular shape because the xAxis is vertical and the yAxis is circular, as opposed to typical Bar charts. 
Radial Charts fix a unique radius for each bar representing each data plot. A Radial bar is best fitted to compare among categories by using circularly shaped bars.

> This chart type belongs to the FusionWidgets XT.


{% embed_chartAnatomy radial-bar.json %}


To create a radial bar chart follow the steps below:

 - In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.
 - Specify the chart type using the `type` attribute. To render a radial bar chart, set to `radialBar`. 
 - Set the container object using the `renderAt` attribute.
 - Specify the dimension of the chart using the `width` and `height` attributes.
 - Set the type of data (JSON/XML) you want to pass to the chart object using the `dataFormat` attribute.

For a detailed list of attributes, refer to the [attributes](https://www.fusioncharts.com/dev/chart-attributes/area2d) page of chord diagram.

A Radial Bar chart looks as shown below:

{% embed_all radial-bar-example-1.js %}

Click [here](https://jsfiddle.net/fusioncharts/bvaptLze/) to edit the above chart. 

The radial bar chart visually represents proportional data in a circular format, allowing to compare multiple categories at a glance. Each bar extends outward from the starting point to indicate the relative value of each item.

## Customizations of a Radial Bar Chart

### Customize Track and Bar

#### Configure Outer and Inner Radius
Based on the data values provided, the inner and outer radii are automatically calculated for the color range scale. The default value for inner and outer radius is 55px and 77px, respectively. 

You can set the radius using the following attributes:
 - Specify the outer radius (in percentage or pixels values) using the `outerRadius` attribute.
 - Specify the inner radius (in percentage or pixels values) using the `innerRadius` attribute.

Refer to code below:
```javascript
{
  "chart": {
    "innerRadius": "20px", // can also be specified in %
    "outerRadius": "80px" // can also be specified in %
  }
}
```

The chart will look as shown below:

{% embed_all radial-bar-example-2.js %}

Click [here](https://jsfiddle.net/fusioncharts/bvaptLze/) to edit the above chart. 


##### Customize start and end angles
You can set the start and end angles, to specify from where in the circular layout the radial bars should begin and where should they end. To do so, set the value of the `startAngle` and the  `endAngle`  attribute to the desired angle.

Use the code given below:
```javascript
{
  "chart": {
    "startAngle": "0",
    "endAngle": "270"
  }
}
```

The chart will look as shown below:

{% embed_all radial-bar-example-3.js %}

Click [here](https://jsfiddle.net/fusioncharts/bvaptLze/) to edit the above chart. 


##### Customize margin and padding
You can introduce white space between a bar and its track to make the chart look cleaner. To do so, set the value of the `trackPadding` attribute to the desired amount.

Use the code given below:
```javascript
{
  "chart": {
    "trackMargin": "20px",
    "trackPadding": "2px"
  }
}
```

The chart will look as shown below:

{% embed_all radial-bar-example-4.js %}

Click [here](https://jsfiddle.net/fusioncharts/bvaptLze/) to edit the above chart. 

### Customize Label & Values

#### Hide labels and values
In Radial Bar charts labels are disabled by default, you can choose to show labels using the `showLabels` attribute and set it's value to `1`.

Use the code given below:
```javascript
{
  "type": 'radialbar',
  "chart": {
    "showLabels": "1"
  }
}
```
The chart will look as shown below:

{% embed_all radial-bar-example-5.js %}

Click [here](https://jsfiddle.net/fusioncharts/bvaptLze/) to edit the above chart. 

#### Add Label icons
You can choose to display icons in your Radial Bar charts. To do so, use the `showLabelIcon` attribute and set it's value to `1`.
To choose the size of the icons, set the value of  the `iconScale` attribute to the desired amount.
To choose the position of the icons, set the value of the `iconPosition` attribute and set the value to `start` or `end`. 

Use the code given below:
```javascript
{
  "type": 'radialbar',
  "chart": {
    "showLabels": "1",
    "placeValuesInside": "1",
    "labelPosition": 'start',
    data: [{
      "label": "Nougat 7.0",
      "value": "4.09",
      "icon": 'https://cdn.example.com/images/alien.svg'
    },
    {
      // More data
    }]
  }
}
```

The chart will look as shown below:

{% embed_all radial-bar-example-6.js %}

Click [here](https://jsfiddle.net/fusioncharts/bvaptLze/) to edit the above chart.


#### Customize Ticks
You can choose to show or hide tick marks by using the `showTickMarks` attribute and set to `1` or `0`. Similarly you can use the `showTickValues` attribute to show the tick mark values. 
To choose a color for your tick marks use the `tickMarkColor` attribute and set it's value with a hex code.
To choose the lenght use the `tickMarkLenght` attribute.
To choose the thickness use the `tickMarkThickness` attribute.
By default the number of division is based on the available chart dimensions. To choose the number of divisions use the `numTicks` attribute.

```javascript
{
  "type": 'radialbar',
  "chart": {
    "numTicks": "5",
    "showTickMarks": 0,
  }
}
```

The chart will look as shown below:

{% embed_all radial-bar-example-7.js %}

Click [here](https://jsfiddle.net/fusioncharts/bvaptLze/) to edit the above chart.


#### Add Context Label
You can choose to display the context label when hovering your mouse over a bar. To do so, use the `showContextLabel` attribute and set it's value to `1`. 
You can also use one of the following macros for the Context Label text:
 - `$label`
 - `$value`
 - `$dataValue`
 - `$barColor`
 - `$plotIdentifier`
 - `$icon`

For the context label text cosmetics,  such as; font, font size, font color, and opacity, you can use the `contextLabelFont`, `contextLabelFontSize`, `contextLabelFontColor` and `contextLabelAlpha` attributes respectively.

Use the code given below:
```javascript
{
  "type": 'radialbar',
  "chart": {
    "showContextLabel": "1",
    "defaultContextLabel": 'Android Distribution'
  }
}
```

The chart will look as shown below:

{% embed_all radial-bar-example-8.js %}

Click [here](https://jsfiddle.net/fusioncharts/bvaptLze/) to edit the above chart.
