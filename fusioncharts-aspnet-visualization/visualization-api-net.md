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

vizualisationObj.Render(); // vishalizationObj is the chart object

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

visualisationObj.Theme = FusionChartsTheme.ThemeName.Fusion //Fusion Theme is applied

```

### `Height`

Sets the height of the canvas in pixels

**Syntax**

```

visualisationObj.Height = 400;

```

### `Width`

Sets the width of the canvas in pixels

**Syntax**

```

visualisationObj.Width = 400;

```

### `Dispose`

Disposes the chart completely.

**Syntax**

```

visualisationObj.Dispose();

```

### `Caption`

These API's let you configure the cosmetics of chart caption.


API|Type|Syntax|Description|
-|-|-|-
`Text`|String|visualisationObj.Caption.Text = "Chart Title";|Sets the caption of the chart|
`FontSize`|Integer|visualisationObj.Caption.FontSize = 16;|Sets the font size of the caption|
`FontName`|String|visualisationObj.Caption.FontName = "Arial";|Sets the font of the caption|
`FontColor`|Hex Color Code|visualisationObj.Caption.FontColor = "#ff0000";|Sets the font color of the caption|
`Bold`|Boolean|visualisationObj.Caption.Bold = false;|Makes the chart caption bold|
`OnTop`|Boolean|visualisationObj.Caption.OnTop = true;|Places the chart caption at the top of the chart|
`Alignment`|CaptionObject.CaptionAlignment|visualisationObj.Caption.Alignment - CaptionObject.CaptionAlignment.LEFT;|Sets the alignment of the chart caption|



### `SubCaption`

These API's let you configure the cosmetics of chart sub-caption.


API|Type|Syntax|Description|
-|-|-|-
`Text`|String|visualisationObj.SubCaption.Text = "Chart Sub Title";|Sets the sub-caption of the chart|
`FontSize`|Integer|visualisationObj.SubCaption.FontSize = 16;|Sets the font size of the sub-caption|
`FontName`|String|visualisationObj.SubCaption.FontName = "Arial";|Sets the font of the sub-caption|
`FontColor`|Hex Color Code|visualisationObj.SubCaption.FontColor = "#ff0000";|Sets the font color of the sub-caption|
`Bold`|Boolean|visualisationObj.SubCaption.Bold = false;|Makes the sub-caption bold|
`OnTop`|Boolean|visualisationObj.SubCaption.OnTop = true;|Places the sub-caption at the top of the chart|


### `Tooltip`

These API's let you control the tool tip. You can set the background color, border color, separator character and few other details.


API|Type|Syntax|Description|
-|-|-|-
`Show`|Boolean|visualisationObj.ToolTip.Show = "true";|Shows/Hides the tooltip|
`BGColor`|Hex Color Code|visualisationObj.ToolTip.BGColor = "#000000";|Sets the background color of the tooltip|
`BorderColor`|Hex Color Code|visualisationObj.ToolTip.BorderColor = "#00ff00";|Sets the border color of the tooltip|
`SeparatorChar`|Charater|visualisationObj.ToolTip.SeparatorChar = '/';|Sets the separator character in the tooltip text|
`ShowShadow`|Boolean|visualisationObj.ToolTip.ShowShadow = false;|Shows a shadow around the tooltip|
`Color`|Hex Color Code|visualisationObj.ToolTip.Color = "#ff00f0";|Sets the color of the tooltip text|
`BorderAlpha`|Integer|visualisationObj.ToolTip.BorderAlpha = 1;|Sets the transparency of the border of the tooltip  |
`PlotToolText`|String|visualisationObj.ToolTip.PlotToolText = "ToolTip Text";|Sets the tooltip text|



### `Legend`

In a chart, the name of each dataset shows up in the legend of the chart. Using the API's below, you can configure the functional and cosmetic properties of the legend.


API|Type|Syntax|Description|
-|-|-|-
`Show`|Boolean|visualisationObj.Legend.Show = "true";|Shows/Hides the legend |
`Caption`|String|visualisationObj.Legend.Caption = "Legend Caption";|Sets the caption of the legend|
`Position`|LegendObject.LegendPosition|visualisationObj.Legend.Position = LegendObject.LegendPosition.RIGHT;|Sets the position of the legend|
`FontSize`|Integer|visualisationObj.Legend.FontSize = "10";|Sets the font size of the legend text|
`FontName`|String|visualisationObj.Legend.FontName = "Arial";|Sets the font of the legend text|
`FontColor`|Hex Color Code|visualisationObj.Legend.FontColor = "#ff00f0";|Sets the font color of the legend text|
`Bold`|Boolean|visualisationObj.Legend.Bold = false;|Makes the legend text bold.|



### `Export`

FusionCharts.Net has the ability to export the rendered charts in JPG, PNG, SVG, PDF formats and export chart data as well. Using the API's below, you can configure the functional properties to export your chart.


API|Type|Syntax|Description|
-|-|-|-
`Enabled`|Boolean|visualisationObj.Export.Enabled = true;|Enables/disables exporting of a chart|
`HandlerPath`|String|visualisationObj.Export.HandlerPath = "localhost:8189";|Sets the path of the server-side export handler|
`Format`|String|visualisationObj.Export.Format = " ";|Sets the export format|
`Mode`|BaseExportObject.ExportMode|visualisationObj.Export.Mode = BaseExportObject.ExportMode.SERVER;|Sets the export mode for the chart|
`ShowMenuItem`|Boolean|visualisationObj.Export.ShowMenuItem = false;|Shows/Hides the export menu|
`ExportedFileName`|String|visualisationObj.Export.ExportedFileName = "FusionChartsExportedFile.pdf";|Sets the name of the exported file|
`Window`|BaseExportObject.ExportTargetWindow|visualisationObj.Export.Window = BaseExportObject.ExportTargetWindow.BLANK;|Sets whether the exported chart opens in the same window or a new window|
`Action`|BaseExportObject.ExportAction|visualisationObj.Export.Action = BaseExportObject.ExportAction.SAVE;|Sets the action to be performed when the Export chart option is clicked|



## Chart Specific API's

Following are the API's which only have support on **Column**, **Bar**, **Area**, **Line**, **Spline** and **Stacked** Charts.

### `XAxis`

To configure the x-axis name (title), you can use the following APIs.


API|Type|Syntax|Description|
-|-|-|-
`Text`|String|visualisationObj.XAxis.Text = "XAxis Name";|Sets the title of the X-axis|
`FontSize`|Integer|visualisationObj.XAxis.FontSize = 10;|Sets the font size of the X-axis title|
`FontName`|String|visualisationObj.XAxis.FontName = "Arial";|Sets the font of the X-axis title|
`FontColor`|Hex Color Code|visualisationObj.XAxis.FontColor = "#ff0000";|Sets the font color of the X-axis title|
`Bold`|Boolean|visualisationObj.XAxis.Bold = true;|Sets whether the X-axis title is displayed in bold|
`Italic`|Boolean|visualisationObj.XAxis.Italic = false;|Sets whether the X-axis title is displayed in Italic|
`BorderColor`|Hex Color Code|visualisationObj.XAxis.BorderColor = "#ffffff";|Sets the border color of the X-axis title|
`BGColor`|Hex Color Code|visualisationObj.XAxis.BGColor = "#000000";|Sets the background color of the X-axis title|
`BorderThickness`|Integer|visualisationObj.XAxis.BorderThickness = 2;|Sets the border thickness of the X-axis title|



### `YAxis`

To configure the y-axis name (title), you can use the following APIs.


API|Type|Syntax|Description|
-|-|-|-
`Text`|String|visualisationObj.YAxis.Text = "YAxis Name";|Sets the title of the Y-axis|
`FontSize`|Integer|visualisationObj.YAxis.FontSize = 10;|Sets the font size of the Y-axis title|
`FontName`|String|visualisationObj.YAxis.FontName = "Arial";|Sets the font name of the Y-axis title|
`FontColor`|Hex Color Code|visualisationObj.YAxis.FontColor = "#ff0000";|Sets the font color of the Y-axis title|
`Bold`|Boolean|visualisationObj.YAxis.Bold = true;|Sets whether the Y-axis title is displayed in bold|
`Italic`|Boolean|visualisationObj.YAxis.Italic = false;|Sets whether the Y-axis title is displayed in Italic|
`BorderColor`|Hex Color Code|visualisationObj.YAxis.BorderColor = "#ffffff";|Sets the border color of the Y-axis title|
`BGColor`|Hex Color Code|visualisationObj.YAxis.BGColor = "#000000";|Sets the background color of the Y-axis title|
`BorderThickness`|Integer|visualisationObj.YAxis.BorderThickness = 2;|Sets the border thickness of the Y-axis title|



### `Data`

Data is an object used to define the values to be plotted for individual data series. The instances of the DataModel in **Data** object is listed below:

1.** source:** FusionCharts Data Model

```

visualisationObj.Data.source = source; //Source is an instance of the DataModel

```

2. **CategoryField**(string field_name)

	

```

visualisationObj.Data.CategoryField("country");

```

3. **SeriesFields**(string[ ] fields_name)

```

visualisationObj.Data.SeriesFields("Sales,Total_Purchase");

```

4. **Categories**:  Category Object


API|Type|Syntax|Description|
-|-|-|-
`FontSize`|integer|visualisationObj.Data.Categories.FontSize = 10;|Sets the font size of the X-axis title|
`FontName`|String|visualisationObj.Data.Categories.FontName = "Arial";|Sets the font of the X-axis title|
`FontColor`|Hox Color Code|visualisationObj.Data.Categories.FontColor = "#ffffff";|Sets the font color of the X-axis title|



* **CategoryFormatting: **String category


API|Type|Syntax|Description|
-|-|-|-
`ShowLabel`|Boolean|visualisationObj.Data.Categories.CategoryFormatting("india").ShowLabel(True);|Shows/Hides category labels|
`ToolText`|String|visualisationObj.Data.Categories.CategoryFormatting("india").ToolText("Country:India");|Sets the tooltip text for a category label|
`FontName`|String Name|visualisationObj.Data.Categories.CategoryFormatting("india").FontName("Arial");|Sets the font for  category labels|
`FontColor`|Hex Color Code|visualisationObj.Data.Categories.CategoryFormatting("india").FontColor("#ff000f");|Sets the font color for  category labels|
`FontSize`|Integer|visualisationObj.Data.Categories.CategoryFormatting("india").FontSize(12);|Sets the font size for  category labels|
Bold|Boolean|visualisationObj.Data.Categories.CategoryFormatting("india").Bold(false);|Sets bold formatting for category labels|
Italic|Boolean|visualisationObj.Data.Categories.CategoryFormatting("india").Italic(true);|Sets italic formatting for category labels|
LabelLink|String|visualisationObj.Data.Categories.CategoryFormatting("india").LabelLink("localhost:CountryDetails");|Links category labels to the data source|
BorderColor|Hex Color Code|visualisationObj.Data.Categories.CategoryFormatting("india").BorderColor("000000");|Sets the border color for category labels|
BGColor|Hex Color Code|visualisationObj.Data.Categories.CategoryFormatting("india").BGColor("000000");|Sets the background color for category labels|
Alpha|Integer|visualisationObj.Data.Categories.CategoryFormatting("india").Alpha(100);|Sets the transparency of category labels|



5. **Series:** String Object

* **SeriesFormatting:** String


API|Type|Syntax|Description|
-|-|-|-
`Alpha`|Integer|visualisationObj.Data.Series.SeriesFormatting("Column_ Name").Alpha(100);|Sets the transparency of a data label|
`Color`|Hex Color Code|visualisationObj.Data.Series.SeriesFormatting("Column_ Name").Color("ff00ff");|Sets the font color of a data label|
`Dashed`|Boolean|visualisationObj.Data.Series.SeriesFormatting("Column_ Name").Dashed(False);|Makes the border of the data label dashed|
`DisplayName`|String|visualisationObj.Data.Series.SeriesFormatting("india").DisplayName("Name");|Sets the display name of a data label|
`Visible`|Boolean|visualisationObj.Data.Series.SeriesFormatting("india").Visible(true);|Enables/disables visibility of a data series|
`ShowValues`|Boolean|visualisationObj.Data.Series.SeriesFormatting("india").ShowValues(True);|Shows/hides values of a data series|



* ValueFormatting: String


API|Type|Syntax|Description|
-|-|-|-
`Alpha`|Integer|visualisationObj.Data.Series.ValueFormatting("column_name","formatting_formula").Alpha(100);|Sets transparency of data value|
`Color`|Hex Color Code|visualisationObj.Data.Series.ValueFormatting("column_name","formatting_formula").Color("ff00ff");|Sets font color of data value|
`Dashed`|Boolean|visualisationObj.Data.Series.ValueFormatting("column_name","formatting_formula").Dashed(False);|Makes data value border dashed|
`ShowValues`|Boolean|visualisationObj.Data.Series.ValueFormatting("column_name","formatting_formula").ShowValue("true");|Shows/Hides data value|
`Link`|LinkURL|visualisationObj.Data.Series.ValueFormatting("column_name","formatting_formula").Link(LinkURL);|Links data value to external resource|
`DisplayValue`|String|visualisationObj.Data.Series.ValueFormatting("column_name","formatting_formula").DisplayValue(value > 100);|Sets display text for data value|
`ToolText`|String|visualisationObj.Data.Series.ValueFormatting("column_name","formatting_formula").ToolText(Text);|Sets tooltip text for data value|
`ValuePosition`|MultiSeriesDataElement.ValuePlaced position|visualisationObj.Data.Series.ValueFormatting("column_name","formatting_formula").ValuePosition(MultiSeriesDataElement.ValuePlaced position.ABOVE);|Sets display position for data value|



Following are the API's which only have support on **Pie**, **Doughnut**, **Funnel** and **Pyramid** Charts.

### `Data`

Data is an object used to define the values to be plotted for individual data series. The instances of the DataModel in **Data** object is listed below:

1.** source:** FusionCharts Data Model

```

visualisationObj.Data.source = source; //Source is an instance of the DataModel

```

2. **CategoryField**: String

```

visualisationObj.Data.CategoryField("Country");

```

2. **SeriesField**: String

```

visualisationObj.Data.SeriesField("Country");

```

3. **LabelFormatting**: String


API|Type|Syntax|Description|
-|-|-|-
`ShowLabel`|Boolean|visualisationObj.Data.LabelFormatting("Name").ShowLabel(True);|Shows/hides data label|
`ToolText`|String|visualisationObj.Data.LabelFormatting("Name").ToolText("Country:India");|Sets tooltip text for data label|
`FontName`|String Name|visualisationObj.Data.LabelFormatting("Name").FontName("Arial");|Sets font for data label|
`FontColor`|Hex Color Code|visualisationObj.Data.LabelFormatting("Name").FontColor("#ff000f");|Sets font color for data label|
`FontSize`|Integer|visualisationObj.Data.LabelFormatting("Name").FontSize(12);|Sets font size for data label|
Bold|Boolean|visualisationObj.Data.LabelFormatting("Name").Bold(false);|Makes data label text bold|
Italic|Boolean|visualisationObj.Data.LabelFormatting("Name").Italic(true);|Makes data label text italic|
LabelLink|String|visualisationObj.Data.LabelFormatting("Name").LabelLink("localhost:CountryDetails");|Links data label to external resource|
BorderColor|Hex Color Code|visualisationObj.Data.LabelFormatting("Name").BorderColor("000000");|Sets border color for data label|
BGColor|Hex Color Code|visualisationObj.Data.LabelFormatting("Name").BGColor("000000");|Sets background color for data label|
Alpha|Integer|visualisationObj.Data.LabelFormatting("Name").Alpha(100);|Sets data label transparency between "0" for transparent and "100" for opaque|



4. **ValueFormatting**: String


API|Type|Syntax|Description|
-|-|-|-
`Alpha`|Integer|visualisationObj.Data.ValueFormatting(""formatting_formula").Alpha(100);|Shows/hides data value|
`Color`|Hex Color Code|visualisationObj.Data.ValueFormatting(""formatting_formula").Color("ff00ff");|Seta color of data value|
`Dashed`|Boolean|visualisationObj.Data.ValueFormatting(""formatting_formula").Dashed(False);|Makes data value border dashed|
`ShowValue`|Boolean|visualisationObj.Data.ValueFormatting(""formatting_formula").ShowValue("true");|Shows/Hides data value|
`Link`|LinkURL|visualisationObj.Data.ValueFormatting(""formatting_formula").Link(LinkURL);|Links data value to external resource|
`DisplayValue`|String|visualisationObj.Data.ValueFormatting(""formatting_formula").DisplayValue(value > 100);|Sets display text for data value|
`ToolText`|String|visualisationObj.Data.ValueFormatting(""formatting_formula").ToolText(Text);|Sets tooltip text for data value|



