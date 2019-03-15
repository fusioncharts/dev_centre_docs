---
title: Visualization API | FusionCharts
description: This article provides the list of APIs available
heading: Visualization API
---

## API's to create Charts

### Column

The syntax to create a column chart is given below:

```csharp
Charts.ColumnChart column= new Charts.ColumnChart("Chart_Id");
```

**Column 3D**

```csharp
column.ThreeD = true; 
```

**Overlapped**

```csharp
column.Overlapped = true;
```

**Scroll**

```csharp
column.Scrollable = true;
```

### Bar

The syntax to create a bar chart is given below:

```csharp
Charts.BarChart bar= new Charts.BarChart("Chart_Id");
```

**Bar 3D**

```csharp
bar.ThreeD = true; 
```

**Overlapped**

```csharp
bar.Overlapped = true;
```

### Line

The syntax to create a line chart is given below:

```csharp
Charts.LineChart line = new Charts.LineChart("Chart_Id");
```

**Scroll**

```csharp
line.Scrollable = true;
```

### Spline

The syntax to create a spline chart is given below:

```csharp
Charts.SplineChart spline = new Charts.SplineChart("Chart_Id");
```

### Area

The syntax to create a area chart is given below:

```csharp
Charts.AreaChart area = new Charts.AreaChart("Chart_Id");
```

### Stacked

The available stacked charts are:

* Bar
* Column
* Area

The syntax to create a stacked chart is given below:

```csharp
Charts.StackedChart stack = new Charts.StackedChart("Chart_Id");
```

**Stack Type**

```csharp
stack.StackType = Charts.StackedChart.StackChartType.BAR; //Stacked Bar
stack.StackType = Charts.StackedChart.StackChartType.COLUMN; //Stacked Column
stack.StackType = Charts.StackedChart.StackChartType.AREA; //Stacked Area
```

**Stacked 3D**

```csharp
stack.ThreeD = true; 
```

**Scroll**

```csharp
stack.Scrollable = true;
```

### Pie

The syntax to create a pie chart is given below:

```csharp
Charts.PieChart pie = new Charts.PieChart("Chart_Id");
```

**Pie 3D**

```csharp
pie.ThreeD = true; 
```

### Doughnut

The syntax to create a doughnut chart is given below:

```csharp
Charts.DoughnutChart doughnut = new Charts.DoughnutChart("Chart_Id");
```

**Doughnut 3D**

```csharp
doughnut.ThreeD = true; 
```

### Funnel

The syntax to create a funnel is given below:

```csharp
Widget.FunnelChart funnel = new Widget.FunnelChart("Widget_Id");
```

### Pyramid

The syntax to create a pyramid is given below:

```csharp
Widget.PyramidChart pyramid = new Widget.PyramidChart("Widget_Id");
```

### Time-series

To syntax to create a time-series chart is given below:

```csharp
Charts.TimeSeriesChart timeSeries = new Charts.TimeSeriesChart("id");
```

## API's Common for All Charts

### `Render()`

Renders a chart inside a container element on a page. If the chart is already rendered, it can be re-rendered inside the same container DOM element or a different element.

**Syntax**

```csharp
visualizationObj.Render(); // visualizationObj is the chart object
```

### `Theme`

Applies predefined themes to the chart. FusionCharts.Net visualization ships with the following predefined themes:

* `fusion`
* `gammel`
* `candy`
* `zune`
* `ocean`
* `carbon`

**Syntax**

```csharp
visualizationObj.Theme = FusionChartsTheme.ThemeName.FUSION //Fusion Theme is applied
```

### `Height`

Sets the height of the canvas.

**Syntax**

```csharp
timeSeries.Height.Em(500);// unit EM
timeSeries.Height.Percentage(60); //unit Percentage
timeSeries.Height.Pixel(600);// unit pixel
timeSeries.Height.Point(400);//unit point
```

### `Width`

Sets the width of the canvas.

**Syntax**

```csharp
timeSeries.Width.Em(500); // unit EM
timeSeries.Width.Percentage(60); //unit Percentage
timeSeries.Width.Pixel(600); // unit pixel
timeSeries.Width.Point(400); //unit point
```

### `Dispose`

Disposes the chart completely.

**Syntax**

```csharp
visualizationObj.Dispose();
```

### `Caption`

These API's let you configure the cosmetics of chart caption.

> Not applicable for `time-series`.

| API         | Type                           | Syntax                                                                    | Description                                      |
| ----------- | ------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------ |
| `Text`      | string                         | visualizationObj.Caption.Text = "Chart Title";                            | Sets the caption of the chart                    |
| `FontSize`  | integer                        | visualizationObj.Caption.FontSize = 16;                                   | Sets the font size of the caption                |
| `FontName`  | string                         | visualizationObj.Caption.FontName = "Arial";                              | Sets the font of the caption                     |
| `FontColor` | Hex Color Code                 | visualizationObj.Caption.FontColor = "#ff0000";                           | Sets the font color of the caption               |
| `Bold`      | boolean                        | visualizationObj.Caption.Bold = false;                                    | Makes the chart caption bold                     |
| `OnTop`     | boolean                        | visualizationObj.Caption.OnTop = true;                                    | Places the chart caption at the top of the chart |
| `Alignment` | CaptionObject.CaptionAlignment | visualizationObj.Caption.Alignment = CaptionObject.CaptionAlignment.LEFT; | Sets the alignment of the chart caption          |

### `SubCaption`

These APIs let you configure the cosmetics of chart sub-caption.

> Not applicable for `time-series`.

| API         | Type           | Syntax                                                | Description                                    |
| ----------- | -------------- | ----------------------------------------------------- | ---------------------------------------------- |
| `Text`      | string         | visualizationObj.SubCaption.Text = "Chart Sub Title"; | Sets the sub-caption of the chart              |
| `FontSize`  | integer        | visualizationObj.SubCaption.FontSize = 16;            | Sets the font size of the sub-caption          |
| `FontName`  | string         | visualizationObj.SubCaption.FontName = "Arial";       | Sets the font of the sub-caption               |
| `FontColor` | Hex Color Code | visualizationObj.SubCaption.FontColor = "#ff0000";    | Sets the font color of the sub-caption         |
| `Bold`      | boolean        | visualizationObj.SubCaption.Bold = false;             | Makes the sub-caption bold                     |
| `OnTop`     | boolean        | visualizationObj.SubCaption.OnTop = true;             | Places the sub-caption at the top of the chart |

### `Labels`

These APIs let you configure the x-axis labels.

> Not applicable for `time-series`.

| API            | Type        | Syntax                                                          | Description                                                                   |
| -------------- | ----------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `Show`         | boolean     | visualizationObj.Labels.Show = true;                            | Shows/Hides X-axis labels                                                     |
| `MaxHeight`    | integer     | visualizationObj.Labels.MaxHeight = 500;                        | Sets maximum height of X-axis labels                                          |
| `Ellipsis`     | boolean     | visualizationObj.Labels.Ellipsis = true;                        | Truncates X-axis label text when it’s too long, and adds ellipsis at the end |
| `Display`      | LabelFormat | visualizationObj.Labels.Display = LabelFormat.DisplayType.AUTO; | Sets display mode for label to `AUTO`, `WRAP`, `STAGGER`, `ROTATE`, or `NONE` |
| `Rotate`       | boolean     | visualizationObj.Labels.Rotate  = true;                         | Rotates X-axis labels and displays them in a vertical direction               |
| `Slant`        | boolean     | visualizationObj.Labels.Slant = true;                           | Displays X-axis labels in a slanted manner                                    |
| `StaggerLines` | integer     | visualizationObj.Labels.StaggerLines  = 2;                      | Displays data labels across multiple levels                                   |
| `Step`         | integer     | visualizationObj.Labels.Step = 1;                               | Displays every nth data label (where n is the step value), skipping the rest  |
| `Binsize`      | integer     | visualizationObj.Labels.BinSize  = 1;                           | Sets the minimum width of a label in pixels (with a minimum value of 1)       |

### `Values`

These APIs let you configure the data plot values.

> Not applicable for `time-series`.

| API                   | Type                      | Syntax                                                                           | Description                                                        |
| --------------------- | ------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `Show`                | boolean                   | visualizationObj.Values.Show = true;                                             | Shows/hides data values                                            |
| `ShowLimits`          | boolean                   | visualizationObj.Values.ShowLimits = true;                                       | Show/hide minimum and maximum data values                          |
| `Rotate`              | boolean                   | visualizationObj.Values.Rotate = true;                                           | Rotates data values and displays them in a vertical direction      |
| `ShowDivLineValues`   | boolean                   | visualizationObj.Values.ShowDivLineValues = true;                                | Shows/hides values of divisional lines                             |
| `Position`            | ValueFormat.ValuePosition | visualizationObj.Values.Position = ValueFormat.ValuePosition.AUTO;               | Sets the position of the data value as `AUTO`, `ABOVE`, or `BELOW` |
| `PlotHighlightEffect` | string                    | visualizationObj.Values.PlotHighlightEffect = "fadeout color=#ff0000, alpha=60"; | Highlights data values                                             |
| `PlaceValueInside`    | boolean                   | visualizationObj.Values.PlaceValueInside =false;                                 | Displays data values inside data plots                             |

### `Tooltip`

These API's let you control the tool tip. You can set the background color, border color, separator character and few other details.

> Not applicable for `time-series`.

| API             | Type           | Syntax                                                  | Description                                        |
| --------------- | -------------- | ------------------------------------------------------- | -------------------------------------------------- |
| `Show`          | boolean        | visualizationObj.ToolTip.Show = true;                   | Shows/Hides the tooltip                            |
| `BGColor`       | Hex Color Code | visualizationObj.ToolTip.BGColor = "#000000";           | Sets the background color of the tooltip           |
| `BorderColor`   | Hex Color Code | visualizationObj.ToolTip.BorderColor = "#00ff00";       | Sets the border color of the tooltip               |
| `SeparatorChar` | Charater       | visualizationObj.ToolTip.SeparatorChar = '/';           | Sets the separator character in the tooltip text   |
| `ShowShadow`    | boolean        | visualizationObj.ToolTip.ShowShadow = false;            | Shows a shadow around the tooltip                  |
| `Color`         | Hex Color Code | visualizationObj.ToolTip.Color = "#ff00f0";             | Sets the color of the tooltip text                 |
| `BorderAlpha`   | integer        | visualizationObj.ToolTip.BorderAlpha = 1;               | Sets the transparency of the border of the tooltip |
| `PlotToolText`  | string         | visualizationObj.ToolTip.PlotToolText = "ToolTip Text"; | Sets the tooltip text                              |

### `Legend`

In a chart, the name of each dataset shows up in the legend of the chart. Using the API's below, you can configure the functional and cosmetic properties of the legend.

> Not applicable for `time-series`.

| API         | Type                        | Syntax                                                                | Description                                                    |
| ----------- | --------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------- |
| `Show`      | boolean                     | visualizationObj.Legend.Show = true;                                  | Shows/Hides the legend                                         |
| `Caption`   | string                      | visualizationObj.Legend.Caption = "Legend Caption";                   | Sets the caption of the legend                                 |
| `Position`  | LegendObject.LegendPosition | visualizationObj.Legend.Position = LegendObject.LegendPosition.RIGHT; | Sets the position of the legend<br/>1. `BOTTOM`<br/>2. `RIGHT` |
| `FontSize`  | integer                     | visualizationObj.Legend.FontSize = 10;                                | Sets the font size of the legend text                          |
| `FontName`  | string                      | visualizationObj.Legend.FontName = "Arial";                           | Sets the font of the legend text                               |
| `FontColor` | Hex Color Code              | visualizationObj.Legend.FontColor = "#ff00f0";                        | Sets the font color of the legend text                         |
| `Bold`      | boolean                     | visualizationObj.Legend.Bold = false;                                 | Makes the legend text bold.                                    |

### `Export`

FusionCharts.Net has the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well. Using the API's below, you can configure the functional properties to export your chart.

| API                | Type                             | Syntax                                                                                                         | Description                                                                                              |
| ------------------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `Enabled`          | boolean                          | visualizationObj.Export<br/>.Enabled = true;                                                                   | Enables/disables exporting of a chart                                                                    |
| `HandlerPath`      | string                           | visualizationObj.Export<br/>.HandlerPath = "localhost:8189";                                                   | Sets the path of the server-side export handler                                                          |
| `Format`           | string                           | visualizationObj.Export<br/>.Format = "PNG=Export as High Quality Image&#124;JPG&#124;PDF=Export as PDF File"; | Sets the export format                                                                                   |
| `Mode`             | Exporter<br/>.ExportMode         | visualizationObj.Export<br/>.Mode = Exporter.ExportMode.SERVER;                                                | Sets the export mode for the chart.<br/>1. `CLIENT`<br/>2. `SERVER`                                      |
| `ShowMenuItem`     | boolean                          | visualizationObj.Export<br/>.ShowMenuItem = false;                                                             | Shows/Hides the export menu                                                                              |
| `ExportedFileName` | string                           | visualizationObj.Export<br/>.ExportedFileName = "FusionChartsExportedFile.pdf";                                | Sets the name of the exported file                                                                       |
| `Window`           | Exporter<br/>.ExportTargetWindow | visualizationObj.Export<br/>.Window = Exporter.ExportTargetWindow.BLANK;                                       | Sets whether the exported chart opens in the same window or a new window<br/>1. `BLANK`<br/>2. `SELF`    |
| `Action`           | Exporter<br/>.ExportAction       | visualizationObj.Export<br/>.Action = Exporter.ExportAction.SAVE;                                              | Sets the action to be performed when the Export chart option is clicked.<br/>1. `SAVE`<br/>2. `DOWNLOAD` |

## Chart Specific API's

Following are the API's which only have support on **Column**, **Bar**, **Area**, **Line**, **Spline** and **Stacked** Charts.

### `XAxis`

To configure the x-axis name (title), you can use the following APIs.

| API               | Type           | Syntax                                          | Description                                          |
| ----------------- | -------------- | ----------------------------------------------- | ---------------------------------------------------- |
| `Text`            | string         | visualizationObj.XAxis.Text = "XAxis Name";     | Sets the title of the X-axis                         |
| `FontSize`        | integer        | visualizationObj.XAxis.FontSize = 10;           | Sets the font size of the X-axis title               |
| `FontName`        | string         | visualizationObj.XAxis.FontName = "Arial";      | Sets the font of the X-axis title                    |
| `FontColor`       | Hex Color Code | visualizationObj.XAxis.FontColor = "#ff0000";   | Sets the font color of the X-axis title              |
| `Bold`            | boolean        | visualizationObj.XAxis.Bold = true;             | Sets whether the X-axis title is displayed in bold   |
| `Italic`          | boolean        | visualizationObj.XAxis.Italic = false;          | Sets whether the X-axis title is displayed in Italic |
| `BorderColor`     | Hex Color Code | visualizationObj.XAxis.BorderColor = "#ffffff"; | Sets the border color of the X-axis title            |
| `BGColor`         | Hex Color Code | visualizationObj.XAxis.BGColor = "#000000";     | Sets the background color of the X-axis title        |
| `BorderThickness` | integer        | visualizationObj.XAxis.BorderThickness = 2;     | Sets the border thickness of the X-axis title        |

### `Time Axis`

> `Time axis` API's only have support on **time-series** charts.

To configure the time axis, you can use the following APIs.

<table>
	<tr>
		<th>API</th>
		<th>Type</th>
		<th>Syntax</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`PlotName`</td>
		<td>string</td>
		<td>timeSeries.TimeAxis<br/>.PlotName = "Order Date"; </td>
		<td>Defines the column, which will be plotted along this axis.</td>
	</tr>
	<tr>
		<td>`TimeMarker`</td>
		<td>TimeMarkersObject</td>
		<td>timeSeries.TimeAxis<br/>.TimeMarker<br/>.`AddMarker`("label")<br/>.`EndDate`(new DateTime(2010, 12, 31));<br/>.`StartDate`(new DateTime(2010, 01, 01));<br/>.`Multiplier`(2);<br/>.`TimeFormat`(“%b-%Y”);<br/>.`TimeUnit`(TimeSeriesUnit.Time.YEAR);</td>
		<td>AddMarker() returns an instance of TimeMarkerObject. The values of `Time` enum can be `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`, `SECOND` and `MILLISECOND`.</td>
	</tr>
</table>

### `Time Navigator`

> `Time navigator` only have support on **time-series** charts.

The time navigator plots the complete data in a rectangular box located right below the time axis. The syntax to enable the time navigator is shown below:

```csharp
timeSeries.TimeNavigator.Enable = true; //Boolean
```

### `Custom Range Selector`

> `Custom range selector` only have support on **time-series** charts.

The Custom Range Selector lets you select and focus on data within a specific time period by selecting the start and end points. The syntax to enable the custom range selector is shown below:

```csharp
timeSeries.CustomRangeSelector.Enable = true; //Boolean
```

### `Standard Range Selector`

> `Standard range selector` only have support on **time-series** charts.

The Standard Range Selector lets you select and focus on data within standard time periods. The syntax to enable the standard range selector is shown below:

```csharp
timeSeries.StandardRangeSelector.Enable = true; //Boolean
```

### `Reference Line`

> `Reference line` only have support on **time-series** charts.

A Reference Line is essentially an arbitrary fixed line (mapped to the Y-axis), which indicates a specific value. The syntax to add a reference line is shown below:

```csharp
timeSeries.ReferenceLine.Add("label", value); // (string, double)
```

### `URL`

> `URL` only have support on **time-series** charts.

The syntax to add a URL to a text is shown below:

```csharp
timeSeries.ClickUrl = "www.fusioncharts.com"; //URL
```

### `Series Name`

> `Series name` only have support on **time-series** charts.

To specify the series name in the chart, use the syntax given below:

```csharp
timeSeries.SeriesName = "Population"; //string
```

### `Tooltip`

> This tooltip API only have support on **time-series** charts.

The syntax to disable the tooltip of the time-series chart is shown below:

```csharp
timeSeries.ToolTip.Enable = false; //Boolean
```

### `YAxis`

To configure the y-axis name (title), you can use the following APIs.

> Not applicable for `time-series`.

| API               | Type           | Syntax                                          | Description                                          |
| ----------------- | -------------- | ----------------------------------------------- | ---------------------------------------------------- |
| `Text`            | string         | visualizationObj.YAxis.Text = "YAxis Name";     | Sets the title of the Y-axis                         |
| `FontSize`        | integer        | visualizationObj.YAxis.FontSize = 10;           | Sets the font size of the Y-axis title               |
| `FontName`        | string         | visualizationObj.YAxis.FontName = "Arial";      | Sets the font name of the Y-axis title               |
| `FontColor`       | Hex Color Code | visualizationObj.YAxis.FontColor = "#ff0000";   | Sets the font color of the Y-axis title              |
| `Bold`            | boolean        | visualizationObj.YAxis.Bold = true;             | Sets whether the Y-axis title is displayed in bold   |
| `Italic`          | boolean        | visualizationObj.YAxis.Italic = false;          | Sets whether the Y-axis title is displayed in Italic |
| `BorderColor`     | Hex Color Code | visualizationObj.YAxis.BorderColor = "#ffffff"; | Sets the border color of the Y-axis title            |
| `BGColor`         | Hex Color Code | visualizationObj.YAxis.BGColor = "#000000";     | Sets the background color of the Y-axis title        |
| `BorderThickness` | integer        | visualizationObj.YAxis.BorderThickness = 2;     | Sets the border thickness of the Y-axis title        |

To configure the y-axis for the **time-series** chart, you can use the following APIs.

<table>
	<tr>
		<th>API</th>
		<th>Type</th>
		<th>Syntax</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`Aggregation`</td>
		<td>TimeSeriesAggregation.Function</td>
		<td>timeSeries.YAxes<br/>.Aggregation = TimeSeriesAggregation<br/>.Function.COUNT;</td>
		<td>The values of `function` enum can be `SUM`, `COUNT`, `MAX`, `MIN`, `LAST`, `FIRST`, `AVERAGE`, `VARIANCE` or `STDDEV`.</td>
	</tr>
	<tr>
		<td>`AxisType`</td>
		<td>TimeSeriesYAxisObject.YAxisType</td>
		<td>timeSeries.YAxes<br/>.AxisType = TimeSeriesYAxisObject<br/>.YAxisType<br/>.LINEAR;</td>
		<td>The values of `YAxisType` enum can either be `LINEAR` or `LOG`. </td>
	</tr>
	<tr>
		<td>`Format`</td>
		<td>object</td>
		<td><strong>1.</strong> timeSeries.YAxes<br/>.Format.`Prefix` = "$";<br/><br/><strong>2.</strong> timeSeries.YAxes.<br/>Format.`Suffix` = "K";</td>
		<td>Specifies the `prefix` and `suffix` of the y-axis label.</td>
	</tr>
	<tr>
		<td>`Max`</td>
		<td>double</td>
		<td>timeSeries.YAxes<br/>.Max = 30000;</td>
		<td>This API explicitly sets the upper limit of the chart.</td>
	</tr>
	<tr>
		<td>`Min`</td>
		<td>double</td>
		<td>timeSeries.YAxes. Min = 10000;</td>
		<td>This API explicitly sets the lower limit of the chart.</td>
	</tr>
	<tr>
		<td>`PlotType`</td>
		<td></td>
		<td>timeSeries.YAxes. PlotType = TimeSeriesYAxisObject. SeriesPlotType. AREA;</td>
		<td>The values of `PlotType` enum can be `LINE`, `COLUMN`, `AREA`, `SPLINE`, `STEPLINE`, `OHLC` and `CANDLESTICK`</td>
	</tr>
	<tr>
		<td>`Title`</td>
		<td>string</td>
		<td>timeSeries.YAxes. Title = "Total Sales";</td>
		<td>Specifies the y-axis title of the chart.</td>
	</tr>
	<tr>
		<td>`Plot`</td>
		<td>object</td>
		<td><strong>1.</strong> timeSeries.YAxes.Plot<br/>.Add("GDP");<br/><br/><strong>2.</strong> timeSeries.YAxes.Plot<br/>.Add("GDP", TimeSeriesYAxisObject<br/>.SeriesPlotType.AREA);<br/><br/><strong>3.</strong> timeSeries.YAxes.Plot<br/>.Add("GDP", TimeSeriesAggregation<br/>.Function.LAST);<br/><br/><strong>4.</strong> timeSeries.YAxes.Plot<br/>.Add("GDP", TimeSeriesYAxisObject<br/>.SeriesPlotType.AREA, TimeSeriesAggregation<br/>.Function.LAST);</td>
		<td>Add plots when we render multiple data plots in a chart.</td>
	</tr>
</table>

### `Data` (column, bar, line, area, spline, stack)

Data is an object used to define the values to be plotted for individual data series. The instances in **Data** object is listed below:

* ** source:** FusionCharts Data Model

```csharp
visualizationObj.Data.Source = dataSource; //dataSource is an instance of the DataModel
```

* **CategoryField**(string field_name)

```csharp
visualizationObj.Data.CategoryField("country");
```

* **SeriesFields**(params string[ ] fields_name)

```csharp
visualizationObj.Data.SeriesFields("Sales,Total_Purchase");
```

* **Categories**: Category Object

<table>
	<tr>
		<th>API</th>
		<th>Type</th>
		<th>Syntax</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`FontSize`</td>
		<td>integer</td>
		<td>visualizationObj.Data.Categories<br/>.FontSize = 10;</td>
		<td>Sets the font size of the X-axis title</td>
	</tr>
	<tr>
		<td>`FontName`</td>
		<td>string</td>
		<td>visualizationObj.Data.Categories<br/>.FontName = "Arial";</td>
		<td>Sets the font of the X-axis title</td>
	</tr>
	<tr>
		<td>`FontColor`</td>
		<td>Hex Color Code</td>
		<td>visualizationObj.Data.Categories<br/>.FontColor = "#ffffff";</td>
		<td>Sets the font color of the X-axis title</td>
	</tr>
	<tr>
		<td>`CategoryFormatting`</td>
		<td>Methods of Category object which accepts category name as string parameter.</td>
		<td>visualisationObj.Data.Categories<br/>.CategoryFormatting("india")<br/>.`ShowLabel`(true)<br/>.`ToolText`("Country:India")<br/>.`FontName`("Arial")<br/>.`FontColor`("#ff000f")<br/>.`FontSize`(12)<br/>.`Bold`(false)<br/>.`Italic`(true)<br/>.`LabelLink` ("localhost:CountryDetails")<br/>.`BorderColor`("#000000")<br/>.`BGColor`("#000000")<br/>.`Alpha`(100);</td>
		<td>This instance is used to customize the specific categories of the chart. Following are the instance methods of `CategoryFormatting`: <br/>1. ShowLabel(boolean)<br/>2. ToolText(string)<br/>3. FontName(string)<br/>4. FontColor(Hex Color code(string))<br/>5. FontSize(integer)<br/>6. Bold(boolean)<br/>7. Italic(boolean)<br/>8. LabelLink(string)<br/>9. BorderColor(Hex Color Code(string))<br/>10. BGColor(Hex Color Code(string))<br/>11. Alpha(integer)</td>
	</tr>
</table>

* **Series:** Series Object

Series is an object used to customize the series of data plots. The instances of the DataModel in **Series** object is listed below:

<table>
	<tr>
		<th>API</th>
		<th>Type</th>
		<th>Syntax</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`SeriesFormatting`</td>
		<td>Method of `Series` Object which accepts series field name as string.</td>
		<td>visualisationObj.Data.Series<br/>.SeriesFormatting("Series_Name")<br/>.`Alpha`(100)<br/>.`Color`("ff00ff")<br/>.`Dashed`(false)<br/>.`DisplayName`("Yearly sales")<br/>.`Visible`(true)<br/>.`ShowValues`(true);</td>
		<td>This instance is used to customize the selected series of the chart. Following are the instance methods of `SeriesFormatting`:<br/>1. Alpha(integer)<br/>2. Color(Hex Color Code(string))<br/>3. Dashed(boolean)<br/>4. DisplayName(string)<br/>5. Visible(boolean)<br/>6. ShowValues(boolean)</td>
	</tr>
	<tr>
		<td>`ValueFormatting`</td>
		<td>Method of `Series` object which accepts conditional query as string.</td>
		<td>visualisationObj.Data<br/>.ValueFormatting("value > 100 and value < 500")<br/>.`Alpha`(100)<br/>.`Color`("ff0000)<br/>.`Dashed`(false)<br/>.`ShowValue`(true)<br/>.`Link`("www.fusioncharts.com")<br/>.`DisplayValue`("value > 100")<br/>.`ToolText`("country wise sales value")<br/>.`ValuePosition` (ValueFormat.ValuePosition.ABOVE);<br/><strong>Note: </strong>`ValueFormatting` can be applied to a specific series by specifying the series name.<br/>visualisationObj.Data<br/>.ValueFormatting("SERIESNAME", "CONDITION")</td>
		<td>This instance is used to customize specific values of the chart. Following are the instance methods of `ValueFormatting`:<br/>1. Alpha(integer)<br/>2. Color(Hex Color Code(string))<br/>3. Dashed(boolean)<br/>4. ShowValue(boolean)<br/>5. Link(string)<br/>6. DisplayValue(string)<br/>7. ToolText(string)<br/>8. ValuePosition(Enum)</td>
	</tr>
</table>

Following are the API's which only have support on **Pie**, **Doughnut**, **Funnel** and **Pyramid** Charts.

### `Data` (pie, doughnut, pyramid, funnel)

Data is an object used to define the values to be plotted for individual data series. The instances of the DataModel in **Data** object is listed below:

<table>
	<tr>
		<th>API</th>
		<th>Type</th>
		<th>Syntax</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`Source`</td>
		<td>FusionCharts Data Model</td>
		<td>visualizationObj.Data<br/>.Source = dataSource;</td>
		<td>Sets the data source of the data model. `dataSource` is an instance of the DataModel.</td>
	</tr>
	<tr>
		<td>`CategoryField`</td>
		<td> </td>
		<td>visualizationObj.Data<br/>.CategoryField("Country");</td>
		<td>Specifies the category field.</td>
	</tr>
	<tr>
		<td>`SeriesField`</td>
		<td> </td>
		<td>visualizationObj.Data<br/>.SeriesField("Sales");</td>
		<td>Specifies the series field.</td>
	</tr>
	<tr>
		<td>`LabelFormatting`</td>
		<td> </td>
		<td>visualisationObj.Data<br/>.LabelFormatting("label_name")<br/>.`ShowLabel`(true)<br/>.`ToolText`("Country:India")<br/>.`FontName`("Arial")<br/>.`FontColor`("#ff000f")<br/>.`FontSize`(12)<br/>.`Bold`(false)<br/>.`Italic`(true)<br/>.`LabelLink`<br/>("www.fusioncharts.com/")<br/>.`BorderColor`("000000")<br/>.`BGColor`("000000")<br/>.`Alpha`(100);</td>
		<td>This instance is used to customize a specific label of a data plot. Following are the instance methods of `LabelFormatting`:<br/>1. ShowLabel(boolean)<br/>2. ToolText(string)<br/>3. FontName(string)<br/>4. FontColor(Hex Color Code(string))<br/>5. FontSize(integer)<br/>6. Bold(boolean)<br/>7. Italic(boolean)<br/>8. LabelLink(string)<br/>9. BorderColor(Hex Color Code(string))<br/>10. BGColor(Hex Color Code(string))<br/>11. Alpha(integer)</td>
	</tr>
	<tr>
		<td>`ValueFormatting`</td>
		<td> </td>
		<td>visualisationObj.Data<br/>.ValueFormatting<br/>("value > 100 and value < 500")<br/>.`Alpha`(100)<br/>.`Color`("ff0000)<br/>.`Dashed`(false)<br/>.`ShowValue`(true)<br/>.`Link`("www.fusioncharts.com")<br/>.`DisplayValue`("value > 100")<br/>.`ToolText`("country wise sales value")<br/>.`ValuePosition`<br/>(MultiSeriesDataElement<br/>.ValuePlaced position.ABOVE);</td>
		<td>This instance is used to customize specific values of the chart. Following are the instance methods of `ValueFormatting`:<br/>1. Alpha(integer)<br/>2. Color(Hex Color Code(string))<br/>3. Dashed(boolean)<br/>4. ShowValue(boolean)<br/>5. Link(string)<br/>6. DisplayValue(string)<br/>7. ToolText(string)<br/>8. ValuePosition(Enum)</td>
	</tr>
</table>

### `Data` (time-series)

Data is an object used to define the values to be plotted for individual data series. The **data** object of the time-series chart is shown below:

```csharp
timeSeries.Data.SourcePathHandler = “/path/to/local/DataSourceHandler.ashx”;
```

### `Data Marker`

> `Data marker` API's only have support on **time-series** charts.

A data marker marks a single point on the data plot of a **time-series** chart. To configure the data marker, use the following APIs:

<table>
	<tr>
		<th>API</th>
		<th>Type</th>
		<th>Syntax</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`AddMarker`</td>
		<td>string</td>
		<td>timeSeries.DataMarker.<br/>AddMarker("series name")<br/>.`Identifier`('.')<br/>.`Time`("Oct-1987")<br/>.`ToolText`("Stock market crash")<br/>.`Type`(TimeSeries.DataMarker<br/>.MarkerType.FLAG)<br/>.`TimeFormat`("%b-%Y");</td>
		<td>The values of `MarkerType` enum can be `FLAG` and `PIN`.</td>
	</tr>
</table>

## Date/time Format

List of available `date/time` format is given below:

<table>
	<tr>
		<th>Date/Time Format</th>
		<th>Description</th>
	</tr>
		<tr>
		<td>`%a`</td>
		<td>Abbreviated weekday name.</td>
	</tr>
	<tr>
		<td>`%A`</td>
		<td>Full weekday name.</td>
	</tr>
	<tr>
		<td>`%b`</td>
		<td>Abbreviated month name.</td>
	</tr>
	<tr>
		<td>`%B`</td>
		<td>Full month name.</td>
	</tr>
	<tr>
		<td>`%d`</td>
		<td>Zero-padded day of the month as a decimal number [01,31].</td>
	</tr>
	<tr>
		<td>`%H`</td>
		<td>Hour (24-hour clock) as a decimal number [00,23].</td>
	</tr>
	<tr>
		<td>`%I`</td>
		<td>Hour (12-hour clock) as a decimal number [01,12].</td>
	</tr>
	<tr>
		<td>`%j`</td>
		<td>Day of a year as a decimal number [001,366].</td>
	</tr>
	<tr>
		<td>`%m`</td>
		<td>Month as a decimal number  [01,12].</td>
	</tr>
	<tr>
		<td>`%M`</td>
		<td>Minute as a decimal number [00,59].</td>
	</tr>
	<tr>
		<td>`%L`</td>
		<td>Milliseconds as a decimal number [000, 999].</td>
	</tr>
	<tr>
		<td>`%p`</td>
		<td>Can either be **AM** or **PM**.</td>
	</tr>
	<tr>
		<td>`%S`</td>
		<td>Second as a decimal number [00, 61].</td>
	</tr>
	<tr>
		<td>`%y`</td>
		<td>A year without century as a decimal number [00,99].</td>
	</tr>
	<tr>
		<td>`%Y`</td>
		<td>A year with century as a decimal number [2000, 1999].</td>
	</tr>
	<tr>
		<td>`%Z`</td>
		<td>Time Zone offset, such as -0700, -07:00, -07, or Z.</td>
	</tr>
	<tr>
		<td>`%%`</td>
		<td>A literal percent sign (%)</td>
	</tr>
</table>