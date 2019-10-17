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

- Bar
- Column
- Area

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

### Combination

The syntax to create a combination is given below:

```csharp
Charts.CombinationChart combiChart = new Charts.CombinationChart("id")
```

**Combi 3D**

```csharp
combiChart.ThreeD = true;
```

**Scroll**

```csharp
combiChart.Scrollable = true;
```

**Dual Y-Axis**

```csharp
combiChart.DualY = true;
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

- `fusion`
- `gammel`
- `candy`
- `zune`
- `ocean`
- `carbon`

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

| API                                               | Type                               | Syntax                                                                      | Description                                                                                                                                           |
| ------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Text`                                            | string                             | visualizationObj.Caption.Text = "Chart Title";                              | Sets the caption of the chart                                                                                                                         |
| `FontSize`                                        | integer                            | visualizationObj.Caption.FontSize = 16;                                     | Sets the font size of the caption                                                                                                                     |
| `FontName`                                        | string                             | visualizationObj.Caption.FontName = "Arial";                                | Sets the font of the caption                                                                                                                          |
| `FontColor`                                       | Hex Color Code                     | visualizationObj.Caption.FontColor = "#ff0000";                             | Sets the font color of the caption                                                                                                                    |
| `Bold`                                            | boolean                            | visualizationObj.Caption.Bold = false;                                      | Makes the chart caption bold                                                                                                                          |
| `OnTop`                                           | boolean                            | visualizationObj.Caption.OnTop = true;                                      | Places the chart caption at the top of the chart                                                                                                      |
| `Alignment` (Not Applicable for time-series)      | CaptionObject .CaptionAlignment    | visualizationObj.Caption.Alignment = CaptionObject.CaptionAlignment.LEFT;   | Sets the alignment of the chart caption                                                                                                               |
| `TextAlignment` (Applicable only for time-series) | FusionTimeCaptionObject .Alignment | timeSeries.Caption.TextAlignment = FusionTimeCaptionObject.Alignment.CENTER | Sets the alignment of the chart caption. The values of `TextAlignment` enum can be `CENTER`, `LEFT`, `RIGHT`, `INHERIT`, `INITIAL`, `JUSTIFY`, `NONE` |

### `SubCaption`

These APIs let you configure the cosmetics of chart sub-caption.

| API                                               | Type                                  | Syntax                                                                           | Description                                                                                                                                           |
| ------------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Text`                                            | string                                | visualizationObj.SubCaption.Text = "Chart Sub Title";                            | Sets the sub-caption of the chart                                                                                                                     |
| `FontSize`                                        | integer                               | visualizationObj.SubCaption.FontSize = 16;                                       | Sets the font size of the sub-caption                                                                                                                 |
| `FontName`                                        | string                                | visualizationObj.SubCaption.FontName = "Arial";                                  | Sets the font of the sub-caption                                                                                                                      |
| `FontColor`                                       | Hex Color Code                        | visualizationObj.SubCaption.FontColor = "#ff0000";                               | Sets the font color of the sub-caption                                                                                                                |
| `Bold`                                            | boolean                               | visualizationObj.SubCaption.Bold = false;                                        | Makes the sub-caption bold                                                                                                                            |
| `OnTop`                                           | boolean                               | visualizationObj.SubCaption.OnTop = true;                                        | Places the sub-caption at the top of the chart                                                                                                        |
| `TextAlignment` (Applicable only for time-series) | FusionTimeSubCaptionObject .Alignment | timeSeries.SubCaption.TextAlignment = FusionTimeSubCaptionObject.Alignment.LEFT; | Sets the alignment of the chart caption. The values of `TextAlignment` enum can be `CENTER`, `LEFT`, `RIGHT`, `INHERIT`, `INITIAL`, `JUSTIFY`, `NONE` |

### `Labels`

These APIs let you configure the x-axis labels.

> Not applicable for `time-series`.

| API            | Type        | Syntax                                                          | Description                                                                   |
| -------------- | ----------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `Show`         | boolean     | visualizationObj.Labels.Show = true;                            | Shows/Hides X-axis labels                                                     |
| `MaxHeight`    | integer     | visualizationObj.Labels.MaxHeight = 500;                        | Sets maximum height of X-axis labels                                          |
| `Ellipsis`     | boolean     | visualizationObj.Labels.Ellipsis = true;                        | Truncates X-axis label text when it’s too long, and adds ellipsis at the end  |
| `Display`      | LabelFormat | visualizationObj.Labels.Display = LabelFormat.DisplayType.AUTO; | Sets display mode for label to `AUTO`, `WRAP`, `STAGGER`, `ROTATE`, or `NONE` |
| `Rotate`       | boolean     | visualizationObj.Labels.Rotate = true;                          | Rotates X-axis labels and displays them in a vertical direction               |
| `Slant`        | boolean     | visualizationObj.Labels.Slant = true;                           | Displays X-axis labels in a slanted manner                                    |
| `StaggerLines` | integer     | visualizationObj.Labels.StaggerLines = 2;                       | Displays data labels across multiple levels                                   |
| `Step`         | integer     | visualizationObj.Labels.Step = 1;                               | Displays every nth data label (where n is the step value), skipping the rest  |
| `Binsize`      | integer     | visualizationObj.Labels.BinSize = 1;                            | Sets the minimum width of a label in pixels (with a minimum value of 1)       |

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

### `Palette Colors`

`PaletteColors` allows you to specify your custom list of hex colors for the visualization. The list of colors have to be separated from comma, e.g., `"#5d62b5", "#afafaf", "#f2726", "#ffc533", "#62b58f", "#afafaf"`. The chart will cycle through the list of specified colors and then render the chart accordingly.

**Syntax**

```csharp
// Type: String
// Argument Type: String Array
visualization.PaletteColors("#5d62b5", "#afafaf", "#f2726", "#ffc533", "#62b58f", "#afafaf");
```

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

### `Crossline`

> `Crossline` only have support on **time-series** charts.

To configure the crossline, you can use the following APIs.

| API                    | Type                         |
| ---------------------- | ---------------------------- |
| `HorizontalLineStyle`  | PlotStyleConfigurationObject |
| `HorizontalLabelStyle` | PlotStyleConfigurationObject |
| `HorizontalTagStyle`   | PlotStyleConfigurationObject |
| `LineStyle`            | PlotStyleConfigurationObject |
| `LabelStyle`           | PlotStyleConfigurationObject |
| `TagStyle`             | PlotStyleConfigurationObject |
| `VerticalLineStyle`    | PlotStyleConfigurationObject |
| `VerticalLabelStyle`   | PlotStyleConfigurationObject |
| `VerticaTagStyle`      | PlotStyleConfigurationObject |

The code to style the crossline using above properties is given below:

#### Horizontal Line

```csharp
vizObj.CrossLine.Style.HorizonatlLineStyle.FillColor = "#aecd5f";
vizObj.CrossLine.Style.HorizonatlLineStyle.StrokeColor = "#0000ff";
vizObj.CrossLine.Style.HorizonatlLineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
vizObj.CrossLine.Style.HorizonatlLineStyle.StrokeWidth = 2;
```

#### Horizontal Label

```csharp
vizObj.CrossLine.Style.HorizontalLabelStyle.FillColor = "#aecd5f";
vizObj.CrossLine.Style.HorizontalLabelStyle.StrokeColor = "#0000ff";
vizObj.CrossLine.Style.HorizontalLabelStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
vizObj.CrossLine.Style.HorizontalLabelStyle.StrokeWidth = 2;
```

#### Horizontal Tag

```csharp
vizObj.CrossLine.Style.HorizontalTagStyle.FillColor = "#aecd5f";
vizObj.CrossLine.Style.HorizontalTagStyle.StrokeColor = "#0000ff";
vizObj.CrossLine.Style.HorizontalTagStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
vizObj.CrossLine.Style.HorizontalTagStyle.StrokeWidth = 2;
```

#### Line

```csharp
vizObj.CrossLine.Style.LineStyle.FillColor = "#aecd5f";
vizObj.CrossLine.Style.LineStyle.StrokeColor = "#0000ff";
vizObj.CrossLine.Style.LineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
vizObj.CrossLine.Style.LineStyle.StrokeWidth = 2;
```

#### Label

```csharp
vizObj.CrossLine.Style.LabelStyle.FillColor = "#aecd5f";
vizObj.CrossLine.Style.LabelStyle.StrokeColor = "#0000ff";
vizObj.CrossLine.Style.LabelStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
vizObj.CrossLine.Style.LabelStyle.StrokeWidth = 2;
```

#### Tag

```csharp
vizObj.CrossLine.Style.TagStyle.FillColor = "#aecd5f";
vizObj.CrossLine.Style.TagStyle.StrokeColor = "#0000ff";
vizObj.CrossLine.Style.TagStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
vizObj.CrossLine.Style.TagStyle.StrokeWidth = 2;
```

#### Vertical Line

```csharp
vizObj.CrossLine.Style.VerticalLineStyle.FillColor = "#aecd5f";
vizObj.CrossLine.Style.VerticalLineStyle.StrokeColor = "#0000ff";
vizObj.CrossLine.Style.VerticalLineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
vizObj.CrossLine.Style.VerticalLineStyle.StrokeWidth = 2;
```

#### Vertical Label

```csharp
vizObj.CrossLine.Style.VerticalLabelStyle.FillColor = "#aecd5f";
vizObj.CrossLine.Style.VerticalLabelStyle.StrokeColor = "#0000ff";
vizObj.CrossLine.Style.VerticalLabelStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
vizObj.CrossLine.Style.VerticalLabelStyle.StrokeWidth = 2;
```

#### Vertical Tag

```csharp
vizObj.CrossLine.Style.VerticalTagStyle.FillColor = "#aecd5f";
vizObj.CrossLine.Style.VerticalTagStyle.StrokeColor = "#0000ff";
vizObj.CrossLine.Style.VerticalTagStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
vizObj.CrossLine.Style.VerticalTagStyle.StrokeWidth = 2;
```

The style properties under `PlotStyleConfigurationObject` is listed below:

| Properties        | Type           |
| ----------------- | -------------- |
| `FillColor`       | string {set;}  |
| `StrokeColor`     | string {set;}  |
| `StrokeLineCap`   | LineCap {set;} |
| `StrokeLineWidth` | Int {set;}     |

### `Reference Line`

> `Reference line` only have support on **time-series** charts.

A Reference Line is essentially an arbitrary fixed line (mapped to the Y-axis), which indicates a specific value. The syntax to add a reference line is shown below:

```csharp
timeSeries.ReferenceLine.Add("label", value); // (string, double)
```

### `Reference Zone`

> `Reference zone` only have support on **time-series** charts.

In FusionCharts.NET, a reference zone has two fixed values filled by a color. You can use `n` number of reference zones in a canvas. The syntax to add the max, min and label of the reference zone is listed below:

| API        | Type    | Syntax                                       | Description                                                      |
| ---------- | ------- | -------------------------------------------- | ---------------------------------------------------------------- |
| `Value`    | Integer | vizObj.YAxes.ReferenceZone.Value = 20000;    | Sets the value of the reference zone                             |
| `Min`      | Integer | vizObj.YAxes.ReferenceZone.Min = 10000;      | Sets the value up to which you want to create the reference zone |
| `Max`      | Integer | vizObj.YAxes.ReferenceZone.Max = 150000;     | Sets the value from where you want to create the reference zone  |
| `Label`    | String  | vizObj.YAxes.ReferenceZone.Label = "Sample}; | Sets the text of the label                                       |
| `AddNew()` | Method  | vizObj.YAxes.ReferenceZone.AddNew();         | Is used to add multiple reference zone                           |

### `Initial Interval`

> `Initial interval` only have support on **time-series** charts.

In FusionCharts.NET, initial interval is used to specify the time span for which you want the chart to be rendered.

| API    | Type             | Syntax                                                           | Description                                 |
| ------ | ---------------- | ---------------------------------------------------------------- | ------------------------------------------- |
| `From` | Date/Time Format | vizObj.TimeAxis.InitialInterval.From = new DateTime(1996, 4, 2); | Sets the start time of the initial interval |
| `To`   | Date/Time Format | vizObj.TimeAxis.InitialInterval.To = new DateTime(1994, 8, 4);   | Sets the end time of the initial interval   |

### `Output Time Format`

> `Output Time Format` only have support on **time-series** charts.

The properties of the output time format is listed below:

| API                 | Type             | Syntax                                                                           | Description                                 |
| ------------------- | ---------------- | -------------------------------------------------------------------------------- | ------------------------------------------- |
| `YearFormat`        | Date/Time Format | vizObj.TimeAxis.OutputTime.YearFormat = "%Y";                                    | Sets the output time format in years.       |
| `MonthFormat`       | Date/Time Format | vizObj.TimeAxis.OutputTime.MonthFormat = "%B, %Y";                               | Sets the output time format in months.      |
| `DayFormat`         | Date/Time Format | vizObj.TimeAxis.OutputTime.DayFormat = "%B %-d, %Y";                             | Sets the output time format in days         |
| `HourFormat`        | Date/Time Format | vizObj.TimeAxis.OutputTime.HourFormat = "%b %-d, %Y, %-I %p";                    | Sets the output time format to hours        |
| `MinuteFormat`      | Date/Time Format | vizObj.TimeAxis.OutputTime.MinuteFormat = "%b %-d, %Y, %-I:%-M %p";              | Sets the output time format to minutes      |
| `SecondFormat`      | Date/Time Format | vizObj.TimeAxis.OutputTime.SecondFormat = "%b %-d, %Y, %-I:%-M:%-S %p";          | Sets the output time format to seconds      |
| `MilliSecondFormat` | Date/Time Format | vizObj.TimeAxis.OutputTime.MilliSecondFormat = "%b %-d, %Y, %-I:%-M:%-S:%-L %p"; | Sets the output time format to milliseconds |

### `Predictive Data`

> `Predictive Data` only have support on **time-series** charts.

The syntax to add predictive data to the chart is:

```csharp
vizObj.PredictiveData.PredictionDate = new DateTime(2018, 2, 1);
```

The properties to add style to the predictive data is listed below:

| API         | Type                         |
| ----------- | ---------------------------- |
| AnchorStyle | PlotStyleConfigurationObject |
| AreaStyle   | PlotStyleConfigurationObject |
| BearStyle   | PlotStyleConfigurationObject |
| BullStyle   | PlotStyleConfigurationObject |
| ColumnStyle | PlotStyleConfigurationObject |
| LineStyle   | PlotStyleConfigurationObject |
| PlotStyle   | PlotStyleConfigurationObject |

The code to style the crossline using above properties is given below:

#### Anchor Style

```csharp
vizObj.PredictiveData.AnchorStyle.FillColor = "#aecdef";
vizObj.PredictiveData.AnchorStyle.StrokeColor = "#aecdef";
vizObj.PredictiveData.AnchorStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.SQUARE;
vizObj.PredictiveData.AnchorStyle.StrokeWidth = 2;
```

#### Area Style

```csharp
vizObj.PredictiveData.AreaStyle.FillColor = "#aecdef";
vizObj.PredictiveData.AreaStyle.StrokeColor = "#aecdef";
vizObj.PredictiveData.AreaStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.SQUARE;
vizObj.PredictiveData.AreaStyle.StrokeWidth = 2;
```

#### Bear Style

```csharp
vizObj.PredictiveData.BearStyle.FillColor = "#aecdef";
vizObj.PredictiveData.BearStyle.StrokeColor = "#aecdef";
vizObj.PredictiveData.BearStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.SQUARE;
vizObj.PredictiveData.BearStyle.StrokeWidth = 2;
```

#### Bull Style

```csharp
vizObj.PredictiveData.BullStyle.FillColor = "#aecdef";
vizObj.PredictiveData.BullStyle.StrokeColor = "#aecdef";
vizObj.PredictiveData.BullStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.SQUARE;
vizObj.PredictiveData.BullStyle.StrokeWidth = 2;
```

#### Column Style

```csharp
vizObj.PredictiveData.ColumnStyle.FillColor = "#aecdef";
vizObj.PredictiveData.ColumnStyle.StrokeColor = "#aecdef";
vizObj.PredictiveData.ColumnStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.SQUARE;
vizObj.PredictiveData.ColumnStyle.StrokeWidth = 2;
```

#### Line Style

```csharp
vizObj.PredictiveData.LineStyle.FillColor = "#aecdef";
vizObj.PredictiveData.LineStyle.StrokeColor = "#aecdef";
vizObj.PredictiveData.LineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.SQUARE;
vizObj.PredictiveData.LineStyle.StrokeWidth = 2;
```

#### Plot Style

```csharp
vizObj.PredictiveData.PlotStyle.FillColor = "#aecdef";
vizObj.PredictiveData.PlotStyle.StrokeColor = "#aecdef";
vizObj.PredictiveData.PlotStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.SQUARE;
vizObj.PredictiveData.PlotStyle.StrokeWidth = 2;
```

The style properties under `PlotStyleConfigurationObject` is listed below:

| Properties        | Type                |
| ----------------- | ------------------- |
| `FillColor`       | string {set;}       |
| `StrokeColor`     | string {set;}       |
| `StrokeLineCap`   | enum LineCap {set;} |
| `StrokeLineWidth` | Int {set;}          |

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

### `Multi Canvas`

> This API only have support on **time-series** charts.

The syntax to disable more than one canvas in a multivariate chart is shown below:

```csharp
timeSeries.MultiCanvas.Enable = false;
```

### `Binning`

> `Binning` only have support on **time-series** charts.

The syntax to apply data binning to the chart is shown below:

```csharp
timeSeries.TimeAxis.Binning.Year(1); // Binning to display yearly data
timeSeries.TimeAxis.Binning.Month(2,4); // Binning to display monthly data
timeSeries.TimeAxis.Binning.Day(2); // Binning to display daily data
timeSeries.TimeAxis.Binning.Hour(1); // Binning to display hourly data
timeSeries.TimeAxis.Binning.Minute(1,3,5,6); // Binning to display per minute data
timeSeries.TimeAxis.Binning.Second(2,4); // Binning to display per second data
timeSeries.TimeAxis.Binning.MilliSecond(5); // Binning to display per millisecond data
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

### `Primary YAxis`

To configure the primary y-axis name (title), you can use the following APIs.

> Applicable only for `Dual YAxis` charts.

| API               | Type           | Syntax                                                 | Description                                                  |
| ----------------- | -------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| `Text`            | string         | visualizationObj.PrimaryYAxis.Text = "YAxis Name";     | Sets the title of the primary Y-axis                         |
| `FontSize`        | integer        | visualizationObj.PrimaryYAxis.FontSize = 10;           | Sets the font size of the primary Y-axis title               |
| `FontName`        | string         | visualizationObj.PrimaryYAxis.FontName = "Arial";      | Sets the font name of the primary Y-axis title               |
| `FontColor`       | Hex Color Code | visualizationObj.PrimaryYAxis.FontColor = "#ff0000";   | Sets the font color of the primary Y-axis title              |
| `Bold`            | boolean        | visualizationObj.PrimaryYAxis.Bold = true;             | Sets whether the primary Y-axis title is displayed in bold   |
| `Italic`          | boolean        | visualizationObj.PrimaryYAxis.Italic = false;          | Sets whether the primary Y-axis title is displayed in Italic |
| `BorderColor`     | Hex Color Code | visualizationObj.PrimaryYAxis.BorderColor = "#ffffff"; | Sets the border color of the primary Y-axis title            |
| `BGColor`         | Hex Color Code | visualizationObj.PrimaryYAxis.BGColor = "#000000";     | Sets the background color of the primary Y-axis title        |
| `BorderThickness` | integer        | visualizationObj.PrimaryYAxis.BorderThickness = 2;     | Sets the border thickness of the primary Y-axis title        |

### `Secondary YAxis`

To configure the secondary y-axis name (title), you can use the following APIs.

> Applicable only for `Dual YAxis` charts.

| API               | Type           | Syntax                                                   | Description                                                    |
| ----------------- | -------------- | -------------------------------------------------------- | -------------------------------------------------------------- |
| `Text`            | string         | visualizationObj.SecondaryYAxis.Text = "YAxis Name";     | Sets the title of the secondary Y-axis                         |
| `FontSize`        | integer        | visualizationObj.SecondaryYAxis.FontSize = 10;           | Sets the font size of the secondary Y-axis title               |
| `FontName`        | string         | visualizationObj.SecondaryYAxis.FontName = "Arial";      | Sets the font name of the secondary Y-axis title               |
| `FontColor`       | Hex Color Code | visualizationObj.SecondaryYAxis.FontColor = "#ff0000";   | Sets the font color of the secondary Y-axis title              |
| `Bold`            | boolean        | visualizationObj.SecondaryYAxis.Bold = true;             | Sets whether the secondary Y-axis title is displayed in bold   |
| `Italic`          | boolean        | visualizationObj.SecondaryYAxis.Italic = false;          | Sets whether the secondary Y-axis title is displayed in Italic |
| `BorderColor`     | Hex Color Code | visualizationObj.SecondaryYAxis.BorderColor = "#ffffff"; | Sets the border color of the secondary Y-axis title            |
| `BGColor`         | Hex Color Code | visualizationObj.SecondaryYAxis.BGColor = "#000000";     | Sets the background color of the secondary Y-axis title        |
| `BorderThickness` | integer        | visualizationObj.SecondaryYAxis.BorderThickness = 2;     | Sets the border thickness of the secondary Y-axis title        |

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
		<td><strong>1.</strong> timeSeries.YAxes.Plot<br/>.Add("GDP");<br/><br/><strong>2.</strong> timeSeries.YAxes.Plot<br/>.Add("GDP", TimeSeriesYAxisObject<br/>.SeriesPlotType.AREA);<br/><br/><strong>3.</strong> timeSeries.YAxes.Plot<br/>.Add("GDP", TimeSeriesAggregation<br/>.Function.LAST);<br/><br/><strong>4.</strong> timeSeries.YAxes.Plot<br/>.Add("GDP", TimeSeriesYAxisObject<br/>.SeriesPlotType.AREA, TimeSeriesAggregation<br/>.Function.LAST);<strong>5.</strong> timeSeries.YAxes.Plot<br/>.Add("label", false);<br/><br/><strong>6.</strong> timeSeries.YAxes.Plot<br/>.Add("label", TimeSeriesYAxisObject<br/>.SeriesPlotType.AREA,<br/> TimeSeriesAggregation.Function<br/>.LAST,false);<br/><br/></td>
		<td>Add plots when we render multiple data plots in a chart.</td>
	</tr>
	<tr>
		<td>`Orientation`</td>
		<td>TimeSeriesYAxisObject.OrientationType</td>
		<td>timeSeries.YAxes.Orientation = TimeSeriesYAxisObject.OrientationType.LEFT;</td>
		<td>The values of `Orientation` enum can be `LEFT`, or `RIGHT`.</td>
	</tr>
	<tr>
		<td>`LogBase`</td>
		<td>integer</td>
		<td>timeSeries.YAxes.LogBase = 10;</td>
		<td>Sets the base of the axis if the time-series chart has a logarithmic y-axis.</td>
	</tr>
</table>

### `Data` (column, bar, line, area, spline, stack, combination)

Data is an object used to define the values to be plotted for individual data series. The instances in **Data** object is listed below:

- **source:** FusionCharts Data Model

```csharp
visualizationObj.Data.Source = dataSource; //dataSource is an instance of the DataModel
```

- **CategoryField**(string field_name)

```csharp
visualizationObj.Data.CategoryField("country");
```

- **SeriesFields**(params string[ ] fields_name)

```csharp
visualizationObj.Data.SeriesFields("Sales,Total_Purchase");
```

- **Categories**: Category Object

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

- **Series:** Series Object

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

> Following are the APIs only applicable for combination chart.

<table>
	<tr>
		<th>API</th>
		<th>Type</th>
		<th>Syntax</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`ColumnPlots`</td>
		<td>string[] (Field's name)</td>
		<td>combiChart.Data<br/>.ColumnPlots("field1","field2");</td>
		<td>Sets `column` as plot type</td>
	</tr>
	<tr>
		<td>`LinePlots`</td>
		<td>string[] (Field's name)</td>
		<td>combiChart.Data<br/>.LinePlots("field3");</td>
		<td>Sets `line` as plot type</td>
	</tr>
	<tr>
		<td>`AreaPlots`</td>
		<td>string[] (Field's name)</td>
		<td>combiChart.Data<br/>.AreaPlots("field4","field5");</td>
		<td>Sets `area` as plot type</td>
	</tr>
	<tr>
		<td>`SplinePlots`</td>
		<td>string[] (Field's name)</td>
		<td>combiChart.Data<br/>.SplinePlots("field6","field7","field8");</td>
		<td>Sets `spline` as plot type</td>
	</tr>
	<tr>
		<td>`SplineAreaPlots`</td>
		<td>string[] (Field's name)</td>
		<td>combiChart.Data<br/>.SplineAreaPlots("field9");</td>
		<td>Sets `splineArea` as plot type</td>
	</tr>
</table>

**Set Parent Axis**

<table>
	<tr>
		<th>API</th>
		<th>Type</th>
		<th>Syntax</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`PrimaryYAxisAsParent`</td>
		<td>string[] (All fields which has `ParentAxis` as the `PrimaryYAxis`)</td>
		<td>combiChart.Data<br/>.SecondaryYAxisAsParent("field3");</td>
		<td>Set the primary y-axis as parent axis</td>
	</tr>
	<tr>
		<td>`SecondaryYAxisAsParent`</td>
		<td>string[] (All fields which has `ParentAxis` as the `SecondaryYAxis`)</td>
		<td>combiChart.Data<br/>.PrimaryYAxisAsParent("field4",”field6”);</td>
		<td>Sets the secondary y-axis as parent axis</td>
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

### `Plot Configuration` (time-series)

#### Generic Plot

Generic plot configurations apply to all plot types in your chart. The types of generic plot are given below:

**AnchorStyle object**

Set the anchor style in your chart using the `AnchorStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Generic.AnchorStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Generic.AnchorStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Generic.AnchorStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Generic.AnchorStyle.StrokeWidth = 2;
```

In the above code:

- `timeSeries`, `PlotConfig`, `Generic`, and `AnchorStyle` are objects.

- `FillColor` is a properties of the `AnchorStyle` object, which accepts the hex code or the name of a color as a string.

- `StrokeLineCap` is a properties of the `AnchorStyle` object. It accepts the shape of the anchor. Here, its value is set as `ROUND` via the `PlotStyleConfigurationObject.LineCap` enum.

- `StrokeWidth` is a property of `AnchorStyle`, and accepts the thickness of the anchor border as an integer. Here, its value is set as `2`.

**AreaStyle object**

Configure the style of your area plot using the `AreaStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Generic.AreaStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Generic.AreaStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Generic.AreaStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Generic.AreaStyle.StrokeWidth = 2;
```

**BearStyle object**

Configure the style of your bear plot using the `BearStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Generic.BearStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Generic.BearStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Generic.BearStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Generic.BearStyle.StrokeWidth = 2;
```

**BullStyle object**

Configure the style of your bull plot using the `BullStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Generic.BullStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Generic.BullStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Generic.BullStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Generic.BullStyle.StrokeWidth = 2;
```

**ColumnStyle object**

Configure the style of your column plot using the `ColumnStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Generic.ColumnStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Generic.ColumnStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Generic.ColumnStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Generic.ColumnStyle.StrokeWidth = 2;
```

**LineStyle object**

Configure the style of your bull plot using the `BullStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Generic.LineStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Generic.LineStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Generic.LineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Generic.LineStyle.StrokeWidth = 2;
```

**PlotStyle object**

Configure the plot style in your chart using properties of the `PlotStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Generic.PlotStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Generic.PlotStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Generic.PlotStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Generic.PlotStyle.StrokeWidth = 2;
```

**ConnectNullData properties**

Connect the points with null value in your line or area plots using the Boolean type `ConnectNullData` properties of the `Generic` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Generic.ConnectNullData = true;
```

#### Column Plot

Configure the style of columns in column charts using properties of the `ColumnStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Column.ColumnStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Column.ColumnStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Column.ColumnStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Column.ColumnStyle.StrokeWidth = 2;
```

**PlotStyle object**

Configure the plot style in your column chart using properties of the `PlotStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Column.PlotStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Column.PlotStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Column.PlotStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Column.PlotStyle.StrokeWidth = 2;
```

#### Line Plot

Configure the style of lines in line charts using properties of the `LineStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Line.LineStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Line.LineStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Line.LineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Line.LineStyle.StrokeWidth = 2;
```

**PlotStyle object**

Configure the plot style in your line chart using properties of the `PlotStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Line.PlotStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Line.PlotStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Line.PlotStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Line.PlotStyle.StrokeWidth = 2;
```

**ConnectNullData properties**

Connect the points with null value in your line plots using the Boolean type `ConnectNullData` properties of the `Line` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Line.ConnectNullData = true;
```

#### StepLine plot

Configure the style of lines in step-line charts using properties of the `LineStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.StepLine.LineStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.StepLine.LineStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.StepLine.LineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.StepLine.LineStyle.StrokeWidth = 2;
```

**PlotStyle object**

Configure the plot style in your step-line chart using properties of the `PlotStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.StepLine.PlotStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.StepLine.PlotStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.StepLine.PlotStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.StepLine.PlotStyle.StrokeWidth = 2;
```

**ConnectNullData properties**

Connect the points with null value in your step-line plots using the Boolean type `ConnectNullData` properties of the `StepLine` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.StepLine.ConnectNullData = true;
```

#### SmoothLine plot

Configure the style of lines in smooth line charts using properties of the `LineStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.SmoothLine.LineStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.SmoothLine.LineStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.SmoothLine.LineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.SmoothLine.LineStyle.StrokeWidth = 2;
```

**PlotStyle object**

Configure the plot style in your smooth line chart using properties of the `PlotStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.SmoothLine.PlotStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.SmoothLine.PlotStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.SmoothLine.PlotStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.SmoothLine.PlotStyle.StrokeWidth = 2;
```

**ConnectNullData properties**

Connect the points with null value in your smooth line plots using the Boolean type `ConnectNullData` properties of the `SmoothLine` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.SmoothLine.ConnectNullData = true;
```

#### Area plot

Configure the style of areas in area charts using properties of the `AreaStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Area.AreaStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Area.AreaStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Area.AreaStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Area.AreaStyle.StrokeWidth = 2;
```

**LineStyle object**

Configure the style of boundary lines in area charts using properties of the `LineStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Area.LineStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.Area.LineStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.Area.LineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.Area.LineStyle.StrokeWidth = 2;
```

**ConnectNullData Properties**

Connect the points with null value in your area plot using the Boolean type `ConnectNullData` properties of the `Area` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Area.ConnectNullData = true;
```

#### StepArea plot

Configure the style of areas in step-area charts using properties of the `AreaStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.StepArea.AreaStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.StepArea.AreaStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.StepArea.AreaStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.StepArea.AreaStyle.StrokeWidth = 2;
```

**LineStyle object**

Configure the style of boundary lines of the plot in step-area charts using properties of the `LineStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.StepArea.LineStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.StepArea.LineStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.StepArea.LineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.StepArea.LineStyle.StrokeWidth = 2;
```

**ConnectNullData Properties**

Connect the points with null value in your step-area plot using the Boolean type `ConnectNullData` properties of the `Area` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.Area.ConnectNullData = true;
```

#### SmoothArea plot

Configure the style of areas in step-area charts using properties of the `AreaStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.SmoothArea.AreaStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.SmoothArea.AreaStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.SmoothArea.AreaStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.SmoothArea.AreaStyle.StrokeWidth = 2;
```

**LineStyle object**

Configure the style of boundary lines in smooth area charts using properties of the `LineStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.SmoothArea.LineStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.SmoothArea.LineStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.SmoothArea.LineStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.SmoothArea.LineStyle.StrokeWidth = 2;|
```

**ConnectNullData Properties**

Connect the points with null value in your smooth area plot using the Boolean type `ConnectNullData` properties of the `SmoothArea` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.SmoothArea.ConnectNullData = true;
```

#### OHLC plot

**BearStyle Object**

Configure bear style OHLC plots using properties of the `BearStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.OHLC.BearStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.OHLC.BearStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.OHLC.BearStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.OHLC.BearStyle.StrokeWidth = 2;
```

**BullStyle object**

Configure bull style OHLC plots using properties of the `BullStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.OHLC.BullStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.OHLC.BullStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.OHLC.BullStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.OHLC.BullStyle.StrokeWidth = 2;
```

#### CandleStick plot

**BearStyle Object**

Configure bear style Candlestick plots using properties of the `BearStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.CandleStick.BearStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.CandleStick.BearStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.CandleStick.BearStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.CandleStick.BearStyle.StrokeWidth = 2;
```

**BullStyle object**

Configure bull style Candlestick plots using properties of the `BullStyle` object. Refer to the code given below:

```csharp
timeSeries.PlotConfig.CandleStick.BullStyle.FillColor = "#ff0000";
timeSeries.PlotConfig.CandleStick.BullStyle.StrokeColor = "#ffffff";
timeSeries.PlotConfig.CandleStick.BullStyle.StrokeLineCap = PlotStyleConfigurationObject.LineCap.ROUND;
timeSeries.PlotConfig.CandleStick.BullStyle.StrokeWidth = 2;
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
