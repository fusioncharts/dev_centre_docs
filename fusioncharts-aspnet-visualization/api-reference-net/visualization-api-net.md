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

API|Type|Syntax|Description|
-|-|-|-
`Text`|String|visualizationObj.Caption.Text = "Chart Title";|Sets the caption of the chart|
`FontSize`|Integer|visualizationObj.Caption.FontSize = 16;|Sets the font size of the caption|
`FontName`|String|visualizationObj.Caption.FontName = "Arial";|Sets the font of the caption|
`FontColor`|Hex Color Code|visualizationObj.Caption.FontColor = "#ff0000";|Sets the font color of the caption|
`Bold`|Boolean|visualizationObj.Caption.Bold = false;|Makes the chart caption bold|
`OnTop`|Boolean|visualizationObj.Caption.OnTop = true;|Places the chart caption at the top of the chart|
`Alignment`|CaptionObject.CaptionAlignment|visualizationObj.Caption.Alignment = CaptionObject.CaptionAlignment.LEFT;|Sets the alignment of the chart caption|

### `SubCaption`

These APIs let you configure the cosmetics of chart sub-caption.

API|Type|Syntax|Description|
-|-|-|-
`Text`|String|visualizationObj.SubCaption.Text = "Chart Sub Title";|Sets the sub-caption of the chart|
`FontSize`|Integer|visualizationObj.SubCaption.FontSize = 16;|Sets the font size of the sub-caption|
`FontName`|String|visualizationObj.SubCaption.FontName = "Arial";|Sets the font of the sub-caption|
`FontColor`|Hex Color Code|visualizationObj.SubCaption.FontColor = "#ff0000";|Sets the font color of the sub-caption|
`Bold`|Boolean|visualizationObj.SubCaption.Bold = false;|Makes the sub-caption bold|
`OnTop`|Boolean|visualizationObj.SubCaption.OnTop = true;|Places the sub-caption at the top of the chart|

### `Labels`

These APIs let you configure the x-axis labels.

API|Type|Syntax|Description
-|-|-|-
`Show`|Boolean|visualizationObj.Labels.Show = true;|Shows/Hides X-axis labels
`MaxHeight`|Integer|visualizationObj.Labels.MaxHeight = 500;|Sets maximum height of X-axis labels
`Ellipsis`|Boolean|visualizationObj.Labels.Ellipsis = true;|Truncates X-axis label text when it’s too long, and adds ellipsis at the end
`Display`|LabelFormat|visualizationObj.Labels.Display = LabelFormat.DisplayType.AUTO;|Sets display mode for label to `AUTO`, `WRAP`, `STAGGER`, `ROTATE`, or `NONE`
`Rotate`|Boolean|visualizationObj.Labels.Rotate  = true;|Rotates X-axis labels and displays them in a vertical direction
`Slant`|Boolean|visualizationObj.Labels.Slant  = true;|Displays X-axis labels in a slanted manner
`StaggerLines`|Integer|visualizationObj.Labels.StaggerLines  = 2;|Displays data labels across multiple levels
`Step`|Integer|visualizationObj.Labels.Step  = 1;|Displays every nth data label (where n is the step value), skipping the rest
`Binsize`|Integer|visualizationObj.Labels.BinSize  = 1;|Sets the minimum width of a label in pixels (with a minimum value of 1)

### `Values`

These APIs let you configure the data plot values.

API|Type|Syntax|Description
-|-|-|-
`Show`|Boolean|visualizationObj.Values.Show = true;|Shows/hides data values
`ShowLimits`|Boolean|visualizationObj.Values.ShowLimits = true;|Show/hide minimum and maximum data values
`Rotate`|Boolean|visualizationObj.Values.Rotate = true;|Rotates data values and displays them in a vertical direction
`ShowDivLineValues`|Boolean|visualizationObj.Values.ShowDivLineValues = true;|Shows/hides values of divisional lines
`Position`|ValueFormat.ValuePosition|visualizationObj.Values.Position = ValueFormat.ValuePosition.AUTO;|Sets the position of the data value as `AUTO`, `ABOVE`, or `BELOW`
`PlotHighlightEffect`|String|visualizationObj.Values.PlotHighlightEffect = "fadeout|color=#ff0000, alpha=60";|Highlights data values
`PlaceValueInside`|Boolean|visualizationObj.Values.PlaceValueInside =false;|Displays data values inside data plots

### `Tooltip`

These API's let you control the tool tip. You can set the background color, border color, separator character and few other details.

API|Type|Syntax|Description|
-|-|-|-
`Show`|Boolean|visualizationObj.ToolTip.Show = "true";|Shows/Hides the tooltip|
`BGColor`|Hex Color Code|visualizationObj.ToolTip.BGColor = "#000000";|Sets the background color of the tooltip|
`BorderColor`|Hex Color Code|visualizationObj.ToolTip.BorderColor = "#00ff00";|Sets the border color of the tooltip|
`SeparatorChar`|Charater|visualizationObj.ToolTip.SeparatorChar = '/';|Sets the separator character in the tooltip text|
`ShowShadow`|Boolean|visualizationObj.ToolTip.ShowShadow = false;|Shows a shadow around the tooltip|
`Color`|Hex Color Code|visualizationObj.ToolTip.Color = "#ff00f0";|Sets the color of the tooltip text|
`BorderAlpha`|Integer|visualizationObj.ToolTip.BorderAlpha = 1;|Sets the transparency of the border of the tooltip  |
`PlotToolText`|String|visualizationObj.ToolTip.PlotToolText = "ToolTip Text";|Sets the tooltip text|

### `Legend`

In a chart, the name of each dataset shows up in the legend of the chart. Using the API's below, you can configure the functional and cosmetic properties of the legend.

API|Type|Syntax|Description|
-|-|-|-
`Show`|Boolean|visualizationObj.Legend.Show = "true";|Shows/Hides the legend |
`Caption`|String|visualizationObj.Legend.Caption = "Legend Caption";|Sets the caption of the legend|
`Position`|LegendObject.LegendPosition|visualizationObj.Legend.Position = LegendObject.LegendPosition.RIGHT;|Sets the position of the legend|
`FontSize`|Integer|visualizationObj.Legend.FontSize = "10";|Sets the font size of the legend text|
`FontName`|String|visualizationObj.Legend.FontName = "Arial";|Sets the font of the legend text|
`FontColor`|Hex Color Code|visualizationObj.Legend.FontColor = "#ff00f0";|Sets the font color of the legend text|
`Bold`|Boolean|visualizationObj.Legend.Bold = false;|Makes the legend text bold.|

### `Export`

FusionCharts.Net has the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well. Using the API's below, you can configure the functional properties to export your chart.

API|Type|Syntax|Description|
-|-|-|-
`Enabled`|Boolean|visualizationObj.Export.Enabled = true;|Enables/disables exporting of a chart|
`HandlerPath`|String|visualizationObj.Export.HandlerPath = "localhost:8189";|Sets the path of the server-side export handler|
`Format`|String|visualizationObj.Export.Format = " ";|Sets the export format|
`Mode`|BaseExportObject.ExportMode|visualizationObj.Export.Mode = BaseExportObject.ExportMode.SERVER;|Sets the export mode for the chart|
`ShowMenuItem`|Boolean|visualizationObj.Export.ShowMenuItem = false;|Shows/Hides the export menu|
`ExportedFileName`|String|visualizationObj.Export.ExportedFileName = "FusionChartsExportedFile.pdf";|Sets the name of the exported file|
`Window`|BaseExportObject.ExportTargetWindow|visualizationObj.Export.Window = BaseExportObject.ExportTargetWindow.BLANK;|Sets whether the exported chart opens in the same window or a new window|
`Action`|BaseExportObject.ExportAction|visualizationObj.Export.Action = BaseExportObject.ExportAction.SAVE;|Sets the action to be performed when the Export chart option is clicked|

## Chart Specific API's

Following are the API's which only have support on **Column**, **Bar**, **Area**, **Line**, **Spline** and **Stacked** Charts.

### `XAxis`

To configure the x-axis name (title), you can use the following APIs.

API|Type|Syntax|Description|
-|-|-|-
`Text`|String|visualizationObj.XAxis.Text = "XAxis Name";|Sets the title of the X-axis|
`FontSize`|Integer|visualizationObj.XAxis.FontSize = 10;|Sets the font size of the X-axis title|
`FontName`|String|visualizationObj.XAxis.FontName = "Arial";|Sets the font of the X-axis title|
`FontColor`|Hex Color Code|visualizationObj.XAxis.FontColor = "#ff0000";|Sets the font color of the X-axis title|
`Bold`|Boolean|visualizationObj.XAxis.Bold = true;|Sets whether the X-axis title is displayed in bold|
`Italic`|Boolean|visualizationObj.XAxis.Italic = false;|Sets whether the X-axis title is displayed in Italic|
`BorderColor`|Hex Color Code|visualizationObj.XAxis.BorderColor = "#ffffff";|Sets the border color of the X-axis title|
`BGColor`|Hex Color Code|visualizationObj.XAxis.BGColor = "#000000";|Sets the background color of the X-axis title|
`BorderThickness`|Integer|visualizationObj.XAxis.BorderThickness = 2;|Sets the border thickness of the X-axis title|

### `YAxis`

To configure the y-axis name (title), you can use the following APIs.

API|Type|Syntax|Description|
-|-|-|-
`Text`|String|visualizationObj.YAxis.Text = "YAxis Name";|Sets the title of the Y-axis|
`FontSize`|Integer|visualizationObj.YAxis.FontSize = 10;|Sets the font size of the Y-axis title|
`FontName`|String|visualizationObj.YAxis.FontName = "Arial";|Sets the font name of the Y-axis title|
`FontColor`|Hex Color Code|visualizationObj.YAxis.FontColor = "#ff0000";|Sets the font color of the Y-axis title|
`Bold`|Boolean|visualizationObj.YAxis.Bold = true;|Sets whether the Y-axis title is displayed in bold|
`Italic`|Boolean|visualizationObj.YAxis.Italic = false;|Sets whether the Y-axis title is displayed in Italic|
`BorderColor`|Hex Color Code|visualizationObj.YAxis.BorderColor = "#ffffff";|Sets the border color of the Y-axis title|
`BGColor`|Hex Color Code|visualizationObj.YAxis.BGColor = "#000000";|Sets the background color of the Y-axis title|
`BorderThickness`|Integer|visualizationObj.YAxis.BorderThickness = 2;|Sets the border thickness of the Y-axis title|

### `Data`

Data is an object used to define the values to be plotted for individual data series. The instances of the DataModel in **Data** object is listed below:

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

API|Type|Syntax|Description|
-|-|-|-
`FontSize`|integer|visualizationObj.Data.Categories.FontSize = 10;|Sets the font size of the X-axis title|
`FontName`|String|visualizationObj.Data.Categories.FontName = "Arial";|Sets the font of the X-axis title|
`FontColor`|Hox Color Code|visualizationObj.Data.Categories.FontColor = "#ffffff";|Sets the font color of the X-axis title|

* **CategoryFormatting:** String category

API|Type|Syntax|Description|
-|-|-|-
`ShowLabel`|Boolean|visualizationObj.Data.Categories.CategoryFormatting("india").ShowLabel(True);|Shows/Hides category labels|
`ToolText`|String|visualizationObj.Data.Categories.CategoryFormatting("india").ToolText("Country:India");|Sets the tooltip text for a category label|
`FontName`|String Name|visualizationObj.Data.Categories.CategoryFormatting("india").FontName("Arial");|Sets the font for  category labels|
`FontColor`|Hex Color Code|visualizationObj.Data.Categories.CategoryFormatting("india").FontColor("#ff000f");|Sets the font color for  category labels|
`FontSize`|Integer|visualizationObj.Data.Categories.CategoryFormatting("india").FontSize(12);|Sets the font size for  category labels|
`Bold`|Boolean|visualizationObj.Data.Categories.CategoryFormatting("india").Bold(false);|Sets bold formatting for category labels|
`Italic`|Boolean|visualizationObj.Data.Categories.CategoryFormatting("india").Italic(true);|Sets italic formatting for category labels|
`LabelLink`|String|visualizationObj.Data.Categories.CategoryFormatting("india").LabelLink("localhost:CountryDetails");|Links category labels to the data source|
`BorderColor`|Hex Color Code|visualizationObj.Data.Categories.CategoryFormatting("india").BorderColor("000000");|Sets the border color for category labels|
`BGColor`|Hex Color Code|visualizationObj.Data.Categories.CategoryFormatting("india").BGColor("000000");|Sets the background color for category labels|
`Alpha`|Integer|visualizationObj.Data.Categories.CategoryFormatting("india").Alpha(100);|Sets the transparency of category labels|

* **Series:** Series Object

	* **SeriesFormatting:** Method of `Series` Object

API|Type|Syntax|Description|
-|-|-|-
`Alpha`|Integer|visualizationObj.Data.Series.SeriesFormatting("Column_ Name").Alpha(100);|Sets the transparency of a data label|
`Color`|Hex Color Code|visualizationObj.Data.Series.SeriesFormatting("Column_ Name").Color("ff00ff");|Sets the font color of a data label|
`Dashed`|Boolean|visualizationObj.Data.Series.SeriesFormatting("Column_ Name").Dashed(False);|Makes the border of the data label dashed|
`DisplayName`|String|visualizationObj.Data.Series.SeriesFormatting("india").DisplayName("Name");|Sets the display name of a data label|
`Visible`|Boolean|visualizationObj.Data.Series.SeriesFormatting("india").Visible(true);|Enables/disables visibility of a data series|
`ShowValues`|Boolean|visualizationObj.Data.Series.SeriesFormatting("india").ShowValues(True);|Shows/hides values of a data series|

	* ValueFormatting: String

API|Type|Syntax|Description|
-|-|-|-
`Alpha`|Integer|visualizationObj.Data.Series.ValueFormatting("column_name","formatting_formula").Alpha(100);|Sets transparency of data value|
`Color`|Hex Color Code|visualizationObj.Data.Series.ValueFormatting("column_name","formatting_formula").Color("ff00ff");|Sets font color of data value|
`Dashed`|Boolean|visualizationObj.Data.Series.ValueFormatting("column_name","formatting_formula").Dashed(False);|Makes data value border dashed|
`ShowValues`|Boolean|visualizationObj.Data.Series.ValueFormatting("column_name","formatting_formula").ShowValue("true");|Shows/Hides data value|
`Link`|LinkURL|visualizationObj.Data.Series.ValueFormatting("column_name","formatting_formula").Link(LinkURL);|Links data value to external resource|
`DisplayValue`|String|visualizationObj.Data.Series.ValueFormatting("column_name","formatting_formula").DisplayValue(value > 100);|Sets display text for data value|
`ToolText`|String|visualizationObj.Data.Series.ValueFormatting("column_name","formatting_formula").ToolText(Text);|Sets tooltip text for data value|
`ValuePosition`|MultiSeriesDataElement.ValuePlaced position|visualizationObj.Data.Series.ValueFormatting("column_name","formatting_formula").ValuePosition(MultiSeriesDataElement.ValuePlaced position.ABOVE);|Sets display position for data value|

Following are the API's which only have support on **Pie**, **Doughnut**, **Funnel** and **Pyramid** Charts.

### `Data`

Data is an object used to define the values to be plotted for individual data series. The instances of the DataModel in **Data** object is listed below:

<div class="table-responsive">
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
			<td>String field_name</td>
			<td>visualizationObj.Data.CategoryField("Country");</td>
			<td>Specifies the category field to apply customizations on.</td>
		</tr>
		<tr>
			<td>`SeriesField`</td>
			<td>string series_name</td>
			<td>visualizationObj.Data.SeriesField("Country");</td>
			<td>Specifies the series field to apply customizations on.</td>
		</tr>
		<tr>
			<td>`LabelFormatting`</td>
			<td>string label</td>
			<td>visualisationObj.Data.LabelFormatting("label_name").ShowLabel(True).ToolText("Country:India").FontName("Arial").FontColor("#ff000f").FontSize(12).Bold(false).Italic(true).LabelLink("www.fusioncharts.com/").BorderColor("000000").BGColor("000000").Alpha(100);</td>
			<td>This instance is used to customize a specific label of a data plot. Following are the instance methods of `LabelFormatting`:<br/>1. `ShowLabel`: Shows/hides data label<br/>2. `ToolText`: Sets tooltip text for data label<br/>3. `FontName`: Sets font for data label<br/>4. `FontColor`: Sets font color for data label<br/>5. `FontSize`: </td>
		</tr>
	</table>
</div>



|Integer|visualizationObj.Data.LabelFormatting("Name").FontSize(12);|Sets font size for data label|
Bold|Boolean|visualizationObj.Data.LabelFormatting("Name").Bold(false);|Makes data label text bold|
Italic|Boolean|visualizationObj.Data.LabelFormatting("Name").Italic(true);|Makes data label text italic|
LabelLink|String|visualizationObj.Data.LabelFormatting("Name").LabelLink("localhost:CountryDetails");|Links data label to external resource|
BorderColor|Hex Color Code|visualizationObj.Data.LabelFormatting("Name").BorderColor("000000");|Sets border color for data label|
BGColor|Hex Color Code|visualizationObj.Data.LabelFormatting("Name").BGColor("000000");|Sets background color for data label|
Alpha|Integer|visualizationObj.Data.LabelFormatting("Name").Alpha(100);|Sets data label transparency between "0" for transparent and "100" for opaque|

4. **ValueFormatting**: String

API|Type|Syntax|Description|
-|-|-|-
`Alpha`|Integer|visualizationObj.Data.ValueFormatting(""formatting_formula").Alpha(100);|Shows/hides data value|
`Color`|Hex Color Code|visualizationObj.Data.ValueFormatting(""formatting_formula").Color("ff00ff");|Seta color of data value|
`Dashed`|Boolean|visualizationObj.Data.ValueFormatting(""formatting_formula").Dashed(False);|Makes data value border dashed|
`ShowValue`|Boolean|visualizationObj.Data.ValueFormatting(""formatting_formula").ShowValue("true");|Shows/Hides data value|
`Link`|LinkURL|visualizationObj.Data.ValueFormatting(""formatting_formula").Link(LinkURL);|Links data value to external resource|
`DisplayValue`|String|visualizationObj.Data.ValueFormatting(""formatting_formula").DisplayValue(value > 100);|Sets display text for data value|
`ToolText`|String|visualizationObj.Data.ValueFormatting(""formatting_formula").ToolText(Text);|Sets tooltip text for data value|