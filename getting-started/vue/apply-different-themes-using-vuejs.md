---
title: Apply Different Themes using React | FusionCharts
description: This article will showcase how to apply different themes to the chart at runtime.
heading: Apply Different Themes using React
---

In FusionCharts Suite XT you can manually set the cosmetics and functional attributes for each chart in the corresponding JSON/XML file. This can work if you deal with only a small number of charts. As the number of charts increases so does your hassles. FusionCharts Suite ships with predefined themes which you can use to set the visual appearance or the behavior of your chart.

FusionCharts Suite XT ships with the following predefined themes:

* `fusion` (since v3.13.0)
* `gammel` (since v3.13.0)
* `candy` (since v3.13.0)
* `zune`
* `ocean`
* `carbon`

This article focuses on how you can apply different themes to the chart at runtime using `vue-fusioncharts` component. Click any radio button, to see how the look and feel of the chart change with each theme.

A chart configured to change the theme, is shown below:

{% embed_chartData apply-different-theme-example-1.js json %}

The code to render a chart is given below:

```

```













The above chart has been rendered using the following steps:

1. Included the necessary libraries and components using `import`. For example, `react-fusioncharts`, `fusioncharts`, etc.

2. As the above samples shows all the themes using the radio buttons, included the theme files for all the six themes.

3. Stored the chart configuration in a JSON object. In the JSON object:
    * The chart type has been set to `column2d`. Find the complete list of chart types with their respective alias [here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).
    * The width and height of the chart has been set in pixels. 
    * The `dataFormat` is set as JSON.
    * The json data has been embeded as the value of the `dataSource`.

3. Created a component to include `react-fusioncharts` component.

4. In the above sample:
	* `renderComplete` event is used to render the charts at runtime.
	* `radioHander` is used for radio buttons to apply selected theme to the chart.

5. `render()` function is added to create the **radio buttons** inside the `<div>`.

6. A `DOM` element has been created and the `react-fusioncharts` component is passed directly to the **ReactDOM.render()** method.