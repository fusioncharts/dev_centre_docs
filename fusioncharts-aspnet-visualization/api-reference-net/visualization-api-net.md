---
title: Visualization API | FusionCharts
description: This article provides the list of APIs available
heading: Visualization API
---

## API's Common for All Charts

### `Render()`

Renders a chart inside a container element on a page. If the chart is already rendered, it can be re-rendered inside the same container DOM element or a different element.

**Syntax**

```
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

```
visualizationObj.Theme = FusionChartsTheme.ThemeName.FUSION //Fusion Theme is applied
```

### `Height`

Sets the height of the canvas in pixels

**Syntax**

```
visualizationObj.Height = "400";
```

### `Width`

Sets the width of the canvas in pixels

**Syntax**

```
visualizationObj.Width = "400";
```

### `Dispose`

Disposes the chart completely.

**Syntax**

```
visualizationObj.Dispose();
```

### `Caption`

These API's let you configure the cosmetics of chart caption.

API|Type|Syntax|Description
-|-|-|-
`Text`|string|visualizationObj.Caption.Text = "Chart Title";|Sets the caption of the chart
`FontSize`|integer|visualizationObj.Caption.FontSize = 16;|Sets the font size of the caption
`FontName`|string|visualizationObj.Caption.FontName = "Arial";|Sets the font of the caption
`FontColor`|Hex Color Code|visualizationObj.Caption.FontColor = "#ff0000";|Sets the font color of the caption
`Bold`|boolean|visualizationObj.Caption.Bold = false;|Makes the chart caption bold
`OnTop`|boolean|visualizationObj.Caption.OnTop = true;|Places the chart caption at the top of the chart
`Alignment`|CaptionObject.CaptionAlignment|visualizationObj.Caption.Alignment = CaptionObject.CaptionAlignment.LEFT;|Sets the alignment of the chart caption

### `SubCaption`

These APIs let you configure the cosmetics of chart sub-caption.

API|Type|Syntax|Description|
-|-|-|-
`Text`|string|visualizationObj.SubCaption.Text = "Chart Sub Title";|Sets the sub-caption of the chart
`FontSize`|integer|visualizationObj.SubCaption.FontSize = 16;|Sets the font size of the sub-caption
`FontName`|string|visualizationObj.SubCaption.FontName = "Arial";|Sets the font of the sub-caption
`FontColor`|Hex Color Code|visualizationObj.SubCaption.FontColor = "#ff0000";|Sets the font color of the sub-caption
`Bold`|boolean|visualizationObj.SubCaption.Bold = false;|Makes the sub-caption bold
`OnTop`|boolean|visualizationObj.SubCaption.OnTop = true;|Places the sub-caption at the top of the chart

### `Labels`

These APIs let you configure the x-axis labels.

API|Type|Syntax|Description
-|-|-|-
`Show`|boolean|visualizationObj.Labels.Show = true;|Shows/Hides X-axis labels
`MaxHeight`|integer|visualizationObj.Labels.MaxHeight = 500;|Sets maximum height of X-axis labels
`Ellipsis`|boolean|visualizationObj.Labels.Ellipsis = true;|Truncates X-axis label text when it’s too long, and adds ellipsis at the end
`Display`|LabelFormat|visualizationObj.Labels.Display = LabelFormat.DisplayType.AUTO;|Sets display mode for label to `AUTO`, `WRAP`, `STAGGER`, `ROTATE`, or `NONE`
`Rotate`|boolean|visualizationObj.Labels.Rotate  = true;|Rotates X-axis labels and displays them in a vertical direction
`Slant`|boolean|visualizationObj.Labels.Slant = true;|Displays X-axis labels in a slanted manner
`StaggerLines`|integer|visualizationObj.Labels.StaggerLines  = 2;|Displays data labels across multiple levels
`Step`|integer|visualizationObj.Labels.Step = 1;|Displays every nth data label (where n is the step value), skipping the rest
`Binsize`|integer|visualizationObj.Labels.BinSize  = 1;|Sets the minimum width of a label in pixels (with a minimum value of 1)

### `Values`

These APIs let you configure the data plot values.

API|Type|Syntax|Description
-|-|-|-
`Show`|boolean|visualizationObj.Values.Show = true;|Shows/hides data values
`ShowLimits`|boolean|visualizationObj.Values.ShowLimits = true;|Show/hide minimum and maximum data values
`Rotate`|boolean|visualizationObj.Values.Rotate = true;|Rotates data values and displays them in a vertical direction
`ShowDivLineValues`|boolean|visualizationObj.Values.ShowDivLineValues = true;|Shows/hides values of divisional lines
`Position`|ValueFormat.ValuePosition|visualizationObj.Values.Position = ValueFormat.ValuePosition.AUTO;|Sets the position of the data value as `AUTO`, `ABOVE`, or `BELOW`
`PlotHighlightEffect`|string|visualizationObj.Values.PlotHighlightEffect = "fadeout color=#ff0000, alpha=60";|Highlights data values
`PlaceValueInside`|boolean|visualizationObj.Values.PlaceValueInside =false;|Displays data values inside data plots

### `Tooltip`

These API's let you control the tool tip. You can set the background color, border color, separator character and few other details.

API|Type|Syntax|Description|
-|-|-|-
`Show`|boolean|visualizationObj.ToolTip.Show = "true";|Shows/Hides the tooltip
`BGColor`|Hex Color Code|visualizationObj.ToolTip.BGColor = "#000000";|Sets the background color of the tooltip
`BorderColor`|Hex Color Code|visualizationObj.ToolTip.BorderColor = "#00ff00";|Sets the border color of the tooltip
`SeparatorChar`|Charater|visualizationObj.ToolTip.SeparatorChar = '/';|Sets the separator character in the tooltip text
`ShowShadow`|boolean|visualizationObj.ToolTip.ShowShadow = false;|Shows a shadow around the tooltip
`Color`|Hex Color Code|visualizationObj.ToolTip.Color = "#ff00f0";|Sets the color of the tooltip text
`BorderAlpha`|integer|visualizationObj.ToolTip.BorderAlpha = 1;|Sets the transparency of the border of the tooltip
`PlotToolText`|string|visualizationObj.ToolTip.PlotToolText = "ToolTip Text";|Sets the tooltip text

### `Legend`

In a chart, the name of each dataset shows up in the legend of the chart. Using the API's below, you can configure the functional and cosmetic properties of the legend.

API|Type|Syntax|Description|
-|-|-|-
`Show`|boolean|visualizationObj.Legend.Show = "true";|Shows/Hides the legend |
`Caption`|string|visualizationObj.Legend.Caption = "Legend Caption";|Sets the caption of the legend|
`Position`|LegendObject.LegendPosition|visualizationObj.Legend.Position = LegendObject.LegendPosition.RIGHT;|Sets the position of the legend<br/>1. `BOTTOM`<br/>2. `RIGHT`|
`FontSize`|integer|visualizationObj.Legend.FontSize = 10;|Sets the font size of the legend text|
`FontName`|string|visualizationObj.Legend.FontName = "Arial";|Sets the font of the legend text|
`FontColor`|Hex Color Code|visualizationObj.Legend.FontColor = "#ff00f0";|Sets the font color of the legend text|
`Bold`|boolean|visualizationObj.Legend.Bold = false;|Makes the legend text bold.|

### `Export`

FusionCharts.Net has the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well. Using the API's below, you can configure the functional properties to export your chart.

API|Type|Syntax|Description
-|-|-|-
`Enabled`|boolean|visualizationObj.Export.Enabled = true;|Enables/disables exporting of a chart
`HandlerPath`|string|visualizationObj.Export.HandlerPath = "localhost:8189";|Sets the path of the server-side export handler
`Format`|string|visualizationObj.Export.Format = "PNG=Export as High Quality Image&#124;JPG&#124;PDF=Export as PDF File";|Sets the export format
`Mode`|Exporter<br/>.ExportMode|visualizationObj.Export.Mode = Exporter.ExportMode.SERVER;|Sets the export mode for the chart.<br/>1. `CLIENT`<br/>2. `SERVER`
`ShowMenuItem`|boolean|visualizationObj.Export.ShowMenuItem = false;|Shows/Hides the export menu
`ExportedFileName`|string|visualizationObj.Export.ExportedFileName = "FusionChartsExportedFile.pdf";|Sets the name of the exported file
`Window`|Exporter<br/>.ExportTargetWindow|visualizationObj.Export.Window = Exporter.ExportTargetWindow.BLANK;|Sets whether the exported chart opens in the same window or a new window<br/>1. `BLANK`<br/>2. `SELF`
`Action`|Exporter<br/>.ExportAction|visualizationObj.Export.Action = Exporter.ExportAction.SAVE;|Sets the action to be performed when the Export chart option is clicked.<br/>1. `SAVE`<br/>2. `DOWNLOAD`

## Chart Specific API's

Following are the API's which only have support on **Column**, **Bar**, **Area**, **Line**, **Spline** and **Stacked** Charts.

### `XAxis`

To configure the x-axis name (title), you can use the following APIs.

API|Type|Syntax|Description
-|-|-|-
`Text`|string|visualizationObj.XAxis.Text = "XAxis Name";|Sets the title of the X-axis
`FontSize`|integer|visualizationObj.XAxis.FontSize = 10;|Sets the font size of the X-axis title
`FontName`|string|visualizationObj.XAxis.FontName = "Arial";|Sets the font of the X-axis title
`FontColor`|Hex Color Code|visualizationObj.XAxis.FontColor = "#ff0000";|Sets the font color of the X-axis title
`Bold`|boolean|visualizationObj.XAxis.Bold = true;|Sets whether the X-axis title is displayed in bold
`Italic`|boolean|visualizationObj.XAxis.Italic = false;|Sets whether the X-axis title is displayed in Italic
`BorderColor`|Hex Color Code|visualizationObj.XAxis.BorderColor = "#ffffff";|Sets the border color of the X-axis title
`BGColor`|Hex Color Code|visualizationObj.XAxis.BGColor = "#000000";|Sets the background color of the X-axis title
`BorderThickness`|integer|visualizationObj.XAxis.BorderThickness = 2;|Sets the border thickness of the X-axis title

### `YAxis`

To configure the y-axis name (title), you can use the following APIs.

API|Type|Syntax|Description
-|-|-|-
`Text`|string|visualizationObj.YAxis.Text = "YAxis Name";|Sets the title of the Y-axis
`FontSize`|integer|visualizationObj.YAxis.FontSize = 10;|Sets the font size of the Y-axis title
`FontName`|string|visualizationObj.YAxis.FontName = "Arial";|Sets the font name of the Y-axis title
`FontColor`|Hex Color Code|visualizationObj.YAxis.FontColor = "#ff0000";|Sets the font color of the Y-axis title
`Bold`|boolean|visualizationObj.YAxis.Bold = true;|Sets whether the Y-axis title is displayed in bold
`Italic`|boolean|visualizationObj.YAxis.Italic = false;|Sets whether the Y-axis title is displayed in Italic
`BorderColor`|Hex Color Code|visualizationObj.YAxis.BorderColor = "#ffffff";|Sets the border color of the Y-axis title
`BGColor`|Hex Color Code|visualizationObj.YAxis.BGColor = "#000000";|Sets the background color of the Y-axis title
`BorderThickness`|integer|visualizationObj.YAxis.BorderThickness = 2;|Sets the border thickness of the Y-axis title

### `Data`

Data is an object used to define the values to be plotted for individual data series. The instances in **Data** object is listed below:

* ** source:** FusionCharts Data Model

```
visualizationObj.Data.Source = dataSource; //dataSource is an instance of the DataModel
```

* **CategoryField**(string field_name)

```
visualizationObj.Data.CategoryField("country");
```

* **SeriesFields**(params string[ ] fields_name)

```
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
		<td>visualisationObj.Data.Series<br/>.SeriesFormatting("Series_Name")<br/>.`Alpha`(100)<br/>.`Color`("ff00ff")<br/>.`Dashed`(False)<br/>.`DisplayName`("Yearly sales")<br/>.`Visible`(true)<br/>.`ShowValues`(True);</td>
		<td>This instance is used to customize the selected series of the chart. Following are the instance methods of `SeriesFormatting`:<br/>1. Alpha(integer)<br/>2. Color(Hex Color Code(string))<br/>3. Dashed(boolean)<br/>4. DisplayName(string)<br/>5. Visible(boolean)<br/>6. ShowValues(boolean)</td>
	</tr>
	<tr>
		<td>`ValueFormatting`</td>
		<td>Method of `Series` object which accepts conditional query as string.</td>
		<td>visualisationObj.Data<br/>.ValueFormatting("value > 100 and value < 500")<br/>.`Alpha`(100)<br/>.`Color`("ff0000)<br/>.`Dashed`(false)<br/>.`ShowValue`(true)<br/>.`Link`("www.fusioncharts.com")<br/>.`DisplayValue`("value > 100")<br/>.`ToolText`("country wise sales value")<br/>.`ValuePosition` (ValueFormat.ValuePosition.ABOVE);<br/><strong>Note: </strong>`ValueFormatting` can be applied to a specific series by specifying the series name of the method.<br/>visualisationObj.Data<br/>.ValueFormatting("SERIESNAME", "CONDITION")</td>
		<td>This instance is used to customize specific values of the chart. Following are the instance methods of `ValueFormatting`:<br/>1. Alpha(integer)<br/>2. Color(Hex Color Code(string))<br/>3. Dashed(boolean)<br/>4. ShowValue(boolean)<br/>5. Link(string)<br/>6. DisplayValue(string)<br/>7. ToolText(string)<br/>8. ValuePosition(Enum)</td>
	</tr>
</table>

Following are the API's which only have support on **Pie**, **Doughnut**, **Funnel** and **Pyramid** Charts.

### `Data`

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
		<td>visualizationObj.Data.Source = dataSource;</td>
		<td>Sets the data source of the data model. `dataSource` is an instance of the DataModel.</td>
	</tr>
	<tr>
		<td>`CategoryField`</td>
		<td> </td>
		<td>visualizationObj.Data.CategoryField("Country");</td>
		<td>Specifies the category field.</td>
	</tr>
	<tr>
		<td>`SeriesField`</td>
		<td> </td>
		<td>visualizationObj.Data.SeriesField("Sales");</td>
		<td>Specifies the series field.</td>
	</tr>
	<tr>
		<td>`LabelFormatting`</td>
		<td> </td>
		<td>visualisationObj.Data<br/>.LabelFormatting("label_name")<br/>.`ShowLabel`(true)<br/>.`ToolText`("Country:India")<br/>.`FontName`("Arial")<br/>.`FontColor`("#ff000f")<br/>.`FontSize`(12)<br/>.`Bold`(false)<br/>.`Italic`(true)<br/>.`LabelLink`("www.fusioncharts.com/")<br/>.`BorderColor`("000000")<br/>.`BGColor`("000000")<br/>.`Alpha`(100);</td>
		<td>This instance is used to customize a specific label of a data plot. Following are the instance methods of `LabelFormatting`:<br/>1. ShowLabel(boolean)<br/>2. ToolText(string)<br/>3. FontName(string)<br/>4. FontColor(Hex Color Code(string))<br/>5. FontSize(integer)<br/>6. Bold(boolean)<br/>7. Italic(boolean)<br/>8. LabelLink(string)<br/>9. BorderColor(Hex Color Code(string))<br/>10. BGColor(Hex Color Code(string))<br/>11. Alpha(integer)</td>
	</tr>
	<tr>
		<td>`ValueFormatting`</td>
		<td> </td>
		<td>visualisationObj.Data<br/>.ValueFormatting("value > 100 and value < 500")<br/>.`Alpha`(100)<br/>.`Color`("ff0000)<br/>.`Dashed`(false)<br/>.`ShowValue`(true)<br/>.`Link`("www.fusioncharts.com")<br/>.`DisplayValue`("value > 100")<br/>.`ToolText`("country wise sales value")<br/>.`ValuePosition`(MultiSeriesDataElement.ValuePlaced position.ABOVE);</td>
		<td>This instance is used to customize specific values of the chart. Following are the instance methods of `ValueFormatting`:<br/>1. Alpha(integer)<br/>2. Color(Hex Color Code(string))<br/>3. Dashed(boolean)<br/>4. ShowValue(boolean)<br/>5. Link(string)<br/>6. DisplayValue(string)<br/>7. ToolText(string)<br/>8. ValuePosition(Enum)</td>
	</tr>
</table>