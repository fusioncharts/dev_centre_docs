
# Radial Bar

Radial Bar charts use ciruclar shapes to compare different categories, similar to a typical Bar chart but displayed on a polar coordinate system, instead of a cartesian system. 
The columns are in a circular shape because the xAxis is vertical and the yAxis is circular, as opposed to typical Bar charts. 
Radial Charts fix a unique radius for each bar representing each data plot. A Radial bar is best fitted to compare among categories by using circularly shaped bars.  

> This chart type belongs to the FusionWidgets XT.


{% embed_chartAnatomy radial-bar.js %}

To create a radial bar chart follow the steps below:

 - In the JSON data, set the attributes and their corresponding values in `"<attributeName>": "<value>"` format.
 - Specify the chart type using the `type` attribute. To render a radial bar chart, set to `radialBar`. 
 - Set the container object using the `renderAt` attribute.
 - Specify the dimension of the chart using the `width` and `height` attributes.
 - Set the type of data (JSON/XML) you want to pass to the chart object using the `dataFormat` attribute.

For a detailed list of attributes, refer to the [chart attributes](/chart-attributes?chart=RadialBar) page of Radial Bar chart.

A Radial Bar chart looks as shown below:

{% embed_chart radial-bar-example.js %}
 
## Customizations of a Radial Bar Chart

### Customize Track and Bar

#### Configure Outer and Inner Radius
Based on the data values provided, the inner and outer radius are automatically calculated for the color range scale. You can set the radius using the following attributes:
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
{% embed_chart name %}
click [here](fiddle link) to edit the above chart. 


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
{% embed_chart name %}
click [here](fiddle link) to edit the above chart. 


##### Customize margin and padding
You can introduce white space between a bar and its track to make the chart look cleaner. To do so, set the value of the `trackPadding` attribute to the desired amount.

Use the code given below:
```javascript
{
  "chart": {
    "trackMargin": "10px",
    "trackPadding": "2px"
  }
}
```

The chart will look as shown below:
{% embed_chart name %}
click [here](fiddle link) to edit the above chart. 

### Customize Label & Values

#### Hide labels and values
In Radial Bar charts labels are disabled by default, you can choose to show labels using the `showLabels` attribute and set it's value to `1`.

Use the code given below:
```javascript
{
  type: 'radialbar',
  chart: {
    showLabels: 1
  }
}
```
The chart will look as shown below:
{% embed_chart name %}
click [here](fiddle link) to edit the above chart. 

#### Add Label icons
You can choose to display icons in your Radial Bar charts. To do so, use the `showLabelIcon` attribute and set it's value to `1`.  
To choose the size of the icons, set the value of  the `iconScale` attribute to the desired amount.  
To choose the position of the icons, set the value of the `iconPosition` attribute and set the value to `start` or `end`. 

Use the code given below:
```javascript
{
  type: 'radialbar',
  chart: {
    showLabels: 1,
    placeValuesInside: 0,
    labelPosition: 'start',
    showLabelIcon: 1,
    data: [{
      label: "Food",
      value: "285040",
      icon: 'https://cdn.example.com/images/alien.svg'
    },
    {
      // More data
    }]
  }
}
```

The chart will look as shown below:
{% embed_chart name %}
click [here](fiddle link) to edit the above chart. 


#### Customize Ticks
You can choose to show or hide tick marks by using the `showTickMarks` attribute and set to `1` or `0`. Similarly you can use the `showTickValues` attribute to show the tick mark values. 
To choose a color for your tick marks use the `tickMarkColor` attribute and set it's value with a hex code.
To choose the lenght use the `tickMarkLenght` attribute.
To choose the thickness use the `tickMarkThickness` attribute.

```javascript
{
  type: 'radialbar',
  chart: {
    showTicks: 1,
    showTickMarks: 0
  }
}
```

The chart will look as shown below:
{% embed_chart name %}
click [here](fiddle link) to edit the above chart. 


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
  type: 'radialbar',
  chart: {
    showContextLabel: 1,
    defaultContextLabel: 'Androud Distribution',
    contextLabelText: '$label <b>$value</b>'
  }
}
```

The chart will look as shown below:
{% embed_chart name %}
click [here](fiddle link) to edit the above chart. 
