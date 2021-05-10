
# Introduction to Accessibility

At FusionCharts, we believe that the internet content should be accessible to everyone. With that intent, version 3.17 adheres to the standards set by the US Government (under [Section 508](https://access-board.gov/webinars/2021/05/25/section-508-compliance-and-assistive-technology-providing-accessibility-to-ict-for-federal-employees-under-the-rehabilitation-act-sections-504-and-508/)) and the guidelines of W3C community ([WCAG 2.0](https://w3.org/TR/WCAG20/)). We are committed to make all our existing and new products equally usable by all.

## Features
'Intuitive keyboard navigation through chart elements'
While navigating with the keyboard, our chart elements come to focus in a logical order.

  - Use the `TAB` key to shift focus from the chart area, to the first data point, to the first legend item (if legend exists).
  - Use the `UP/DOWN` arrows keys to navigate the data points of the same series.
  - Use the `RIGHT/LEFT` arrow keys to navigate to data points of adjacent series.

'Screen reader friendly text for focusable chart elements'
When a chart element comes to focus, the text description of the element is available as a screen reader friendly text. The text either could be inside an accessible SVG tag or some relevant WAI-ARIA attribute.

'Customizable text description of focusable chart elements'
The text description of each focusable chart element can be both localized and customized. Certain chart parameters are available for use in such text. Each such text is mapped to SVG tag or WAI-ARIA attribute of specific chart element.

'Keyboard support for chart interactions, like drill down, legend interactions, etc'
When the focus is on a legend item, press the `SPACE BAR` key to hide or unhide the series corresponding to the legend item.

When the focus is on a clickable plot, press the `ENTER` key to drill into it. When in the drilled down chart, focus on the `BACK` button, press the `ENTER` key, and come back to the main chart.

> For Jaws2019 + Microsoft Edge environment, the plot and legend click we will have to use `shift + spacebar` / `shift + Enter` / `ctrl + spacebar` / `ctrl + Enter`

## Compability
| OS       | Software   | Chrome | Firefox | Safari | Edge | Internet Explorer |
| -------- | ---------- | ------ | ------- | ------ | ---- | ----------------- |
| Windows  | Narator    |  Y     |  Y      |  N/A   | Y    |     N             |   
| Windows  | NVDA       |  Y     |  Y      |  N/A   | N    |     N             |
| Windows  | JAWS       |  Y     |  Y      |  N/A   | Y    |     Y             |
| Mac OS X | VoiceOver  |  Y     |  Y      |  Y     | N/A  |     N/A           |


## Usage

### How to use it? 
Once you've downloaded the extension, include these 2 files - `fusioncharts.ext.accessibility.js` and `fusioncharts.ext.accessibility-resources-strings-en.js` - in the page containing charts (ensure you're using the latest version of FusionCharts).

Your charts are accessible now.

Use the `TAB` key to navigate to the chart. When the chart comes to focus, the content of the `chart` attribute in the above file is read out.

Upon pressing the `TAB` key again, the focus shifts to the plot elements. Now, the content of the `plot` attribute in the above file is read out. As one navigates across the different data plots using the `ARROW` keys, the detail of each plot is read out from the same `plot` attribute.

If the chart has a legend then pressing the `TAB` key again will bring the focus to the first legend item. One can use the `ARROW` keys to navigate to the subsequent legend items. Content of the `legendItem` will now be read out.

### Supported Charts

#### Single Series Charts

| Chart Name                                                 | JavaScript Alias |
| ---------------------------------------------------------- | ---------------- |
| [Column 2D](/chart-attributes/column2d)                    | column2d         |
| [Column 3D](/chart-attributes/column3d)                    | column3d         |
| [Bar 2D](/chart-attributes/bar2d)                          | bar2d            |
| [Bar 3D](/chart-attributes/bar3d)                          | bar3d            |
| [Line 2D](/chart-attributes/line)                          | line             |
| [Single-Series Spline 2D](/chart-attributes/spline)        | spline           |
| [Area 2D](/chart-attributes/area2d)                        | area2d           |
| [Kagi Chart](/chart-attributes/kagi)                       | kagi             |
| [Waterfall / Cascade Chart](/chart-attributes/waterfall2d) | waterfall2d      |
| Non Cartesian Charts                                       |                  |
| [Pie 2D](/chart-attributes/pie2d)                          | pie2d            |
| [Pie 3D](/chart-attributes/pie3d)                          | pie3d            |
| [Doughnut 2D](/chart-attributes/doughnut2d)                | doughnut2d       |
| [Doughnut 3D](/chart-attributes/doughnut3d)                | doughnut3d       |
| [Funnel Chart](/chart-attributes/funnel)                   | funnel           |
| [Pyramid Chart](/chart-attributes/pyramid)                 | pyramid          |
| [Real-time Angular](/chart-attributes/angulargauge)        | angulargauge     |
| [Radial Bar Chart](/chart-attributes/)                     | radialbar        |


#### Multi-series Charts

| Chart Name                                                                | JavaScript Alias   |
| ------------------------------------------------------------------------- | ------------------ |
| [Multi-series Column 2D](/chart-attributes/mscolumn2d)                    | mscolumn2d         |
| [Multi-series Column 3D](/chart-attributes/mscolumn3d)                    | mscolumn3d         |
| [Multi-series Line 2D](/chart-attributes/msline)                          | msline             |
| [Multi-series Bar 2D](/chart-attributes/msbar2d)                          | msbar2d            |
| [Multi-series Bar 3D](/chart-attributes/msbar3d)                          | msbar3d            |
| [Multi-Series Spline 2D](/chart-attributes/msspline)                      | msspline           |
| [Multi-series Area 2D](/chart-attributes/MSArea)                          | msarea             |
| [Multi-series 2D Single Y Combination Chart](/chart-attributes/mscombi2d) | mscombi2d          |
| [Multi-series 2D Dual Y Combination Chart](/chart-attributes/mscombidy2d) | mscombidy2d        |
| [Scatter Chart](/chart-attributes/scatter)                                | scatter            |
| [Bubble Chart](/chart-attributes/bubble)                                  | bubble             |
| [Step Line Charts](/chart-attributes/msstepline)                          | msstepLine         |
| [Radar Chart](/chart-attributes/radar)                                    | radar              |
| [Stacked Area 2D](/chart-attributes/stackedarea2d)                        | stackedarea2d      |
| [Stacked Column 2D](/chart-attributes/stackedcolumn2d)                    | stackedcolumn2d    |
| [Stacked Column 3D](/chart-attributes/stackedcolumn3d)                    | stackedcolumn3d    |
| [Stacked Bar 2D](/chart-attributes/stackedbar2d)                          | stackedbar2d       |
| [Stacked Bar 3D](/chart-attributes/stackedbar3d)                          | stackedbar3d       |
| [Logarithmic Column 2D Chart](/chart-attributes/LogMSColumn2D)            | logmscolumn2d      |
| [Logarithmic Line 2D Chart](/chart-attributes/LogMSLine)                  | logmsline          |
| [Inverse y-Axis Column 2D Chart](/chart-attributes/InverseMSColumn2D)     | inversemscolumn2d  |
| [Inverse y-Axis Line 2D Chart](/chart-attributes/InverseMSLine)           | inversemsline      |
| [Inverse y-Axis Area 2D Chart](/chart-attributes/InverseMSArea)           | inversemsarea      |

### List of Macros

| Predefined Macro   | Description                     | Valid For                            |
| ------------------ | ------------------------------- | ------------------------------------ |
| `{caption}`        | Caption of the chart            | All Charts                           |
| `{subcaption}`     | Sub caption of the chart        | All Charts                           |
| `{label}`          | Label of the plot               | All charts except scatter and bubble |
| `{value}`          | Value of the plot               | All charts except scatter and bubble |
| `{formattedValue}` | Formatted value of the plot     | All charts except scatter and bubble |
| `{percentValue}`   | Percentage value of the plot    | All non Cartesian Charts             |
| `{xValue}`         | X value of plot                 | Only scatter and bubble charts       |
| `{yValue}`         | Y value of plot                 | Only scatter and bubble charts       |
| `{zValue}`         | Z value of plot                 | Only bubble chart                    |
| `{bubbleName}`     | Name of bubble                  | Only bubble chart                    |
| `{plotIndex}`      | Index of in focus plot          | All Charts                           |
| `{totalPlots}`     | Total number of plots           | All Charts                           |
| `{legendText}`     | In focus legend item            | All charts having legend             |
| `{xAxisName}`      | Name of x-axis                  | All cartesian charts                 |
| `{yAxisName}`      | Name of y-axis                  | All cartesian charts                 |
| `{seriesName}`     | Series of in focus plot         | All multi series charts              |
| `{seriesIndex}`    | Index of in focus plot's series | All multi series charts              |
| `{totalSeries}`    | Total number of series          | All multi series charts              |
| `{plot-0-label}`   | Label of first data             | Only funnel chart                    |
| `{plot-0-value}`   | Value of first data             | Only funnel chart                    |


### List of API Events and Methods


## Limitations
Accesible canvas rendered charts
Canvas rendered charts do not have accessible attributes and tags like SVG elements. Our canvas rendered charts, like zoom scatter chart, may not adhere to the global accessibility standards.

## Example of charts with accessible content

Photo [Bar Chart](https://fusioncharts.com/extensions-accessibility/single-series-bar)
Photo [Pie Chart](https://fusioncharts.com/extensions-accessibility/pie)
Photo [Multi-series Column Chart](https://fusioncharts.com/extensions-accessibility/multi-series-column)
Photo [Multi-series Line Chart](https://fusioncharts.com/extensions-accessibility/multi-series-line)
Photo [Stacked Column Chart](https://fusioncharts.com/extensions-accessibility/stacked-column)
Photo [Bubble Chart](https://fusioncharts.com/extensions-accessibility/bubble)
Photo [Angular Chart](https://fusioncharts.com/extensions-accessibility/angulargauge)
Photo [Bar Chart with drill down](https://fusioncharts.com/extensions-accessibility/drilldown)
Photo [Multi lingual support](https://fusioncharts.com/extensions-accessibility/mls-demo/multi-series-column)

