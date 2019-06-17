---
title: Annotation References | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Annotation References
---

In the following sections, you can see an exhaustive set of attributes and macros supported by annotations in FusionCharts Suite XT.

## General configuration attributes

The root `annotations` object accepts a number of attributes for configuring generic aspects of annotations globally.

These attributes are defined using the code structure shown below:

```json
{
    "annotations": {
        // Define the general configuration attributes here.
    }
}
```

<table>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`autoScale`</td>
        <td>Specifies whether the annotation group will automatically scale, if chart dimensions change. Setting this attribute to `0` disables the automatic scaling of the group, setting it to `1` (default) enables it.</td>
    </tr>
    <tr>
        <td>`constrainedScale`</td>
        <td>Specifies whether annotations will retain their aspect ratio (the height:width ratio) when scaled. Setting this attribute to `0` will disable constrained scaling, setting it to `1` (default) will enable it.</td>
    </tr>
    <tr>
        <td>`scaleText`</td>
        <td>Specifies whether text annotations in an annotation group will automatically scale, if chart dimensions change. Setting this attribute to `0` (default) disables the automatic scaling of text annotations, setting it to `1` enables it.</td>
    </tr>
    <tr>
        <td>`scaleImages`</td>
        <td>Specifies whether image annotations in an annotation group will automatically scale, if chart dimensions change. Setting this attribute to `0` (default) disables the automatic scaling of image annotations, setting it to `1` enables it.</td>
    </tr>
    <tr>
        <td>`xShift`</td>
        <td>The value of this attribute is added to the x coordinate position value of the final annotation items on the x-axis. In other words, if an annotation is placed at 100 pixels left and the value of xShift is set to `50`, then the effective value of the x coordinate for the annotation adds up to 150 pixels. When applying scaling, the value of this attribute is included within the scale factor.</td>
    </tr>
    <tr>
        <td>`yShift`</td>
        <td>Like the xShift attribute, this attribute applies to the y-axis.</td>
    </tr>
    <tr>
        <td>`grpXShift`</td>
        <td>Shifts all annotation groups along the x coordinate. The difference between xShift and this attribute is that, during scaling, xShift is included within the scale factor whereas grpXShift is excluded.</td>
    </tr>
    <tr>
        <td>`grpYShift`</td>
        <td>Like the grpXShift attribute, this attribute applies to the y-axis.</td>
    </tr>
    <tr>
        <td>`origW`</td>
        <td>Specifies the original width of the chart, in which the annotation renders as intended. It is used as the reference width while automatically scaling annotations, in the event that a chart is resized.</td>
    </tr>
    <tr>
        <td>`origH`</td>
        <td>Specifies the original height of chart, in which the annotation renders as intended. It is used as the reference height while automatically scaling annotations, in the event that a chart is resized.</td>
    </tr>
</table>

## Configure attributes for annotation groups

You can uniformly configure all annotation items contained within an annotation group, by using a number of attributes, as detailed in the list below. Group attributes inherit default values from the ones defined as root-level annotation attributes.

These attributes are defined using the code structure shown below:

```json
{
    "annotations": {
        "groups": [{
            //Define the group configuration attributes here.
        }]
    }
}
```

<table>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`id`</td>
        <td>Specifies a unique identification string for the annotation group.</td>
    </tr>
    <tr>
        <td>`x`</td>
        <td>Specifies the x coordinate of the starting position of the group with respect to the leftmost position (taken as 0) of the chart. If it is also configured individually for the annotation item(s) within the group, then the value of the x attribute for the item is set relative to the value of the x attribute for the group.</td>
    </tr>
    <tr>
        <td>`y`</td>
        <td>Specifies the y coordinate of the starting position of the group with respect to the topmost position (taken as 0) of the chart. If it is also configured individually for the annotation item(s) within the group, then the value of the y attribute for the item is set relative to the value of the y attribute for the group.</td>
    </tr>
    <tr>
        <td>`autoScale`</td>
        <td>Specifies whether the annotation group will automatically scale, if chart dimensions change. Setting this attribute to 0 disables the automatic scaling of the group, setting it to 1 (default) enables it.</td>
    </tr>
    <tr>
        <td>`scaleText`</td>
        <td>Specifies whether text annotations in an annotation group will automatically scale, if chart dimensions change. Setting this attribute to 0 (default) disables the automatic scaling of text annotations, setting it to 1 enables it.</td>
    </tr>
    <tr>
        <td>`scaleImages`</td>
        <td>Specifies whether image annotations in an annotation group will automatically scale, if chart dimensions change. Setting this attribute to 0 (default) disables the automatic scaling of image annotations, setting it to 1 enables it.</td>
    </tr>
    <tr>
        <td>`constrainedScale`</td>
        <td>Specifies whether annotations will retain their aspect ratio (the height:width ratio) when scaled. Setting this attribute to 0 will disable constrained scaling, setting it to 1 (default) will enable it.</td>
    </tr>
    <tr>
        <td>`showBelow`</td>
        <td>Specifies whether the annotation group will overlap the data plots. Setting this attribute to 0 will enable the group to overlap, setting it to 1 (default) will disable it.</td>
    </tr>
    <tr>
        <td>`origW`</td>
        <td>Specifies the original width of the chart, in which the annotation renders as intended. It is used as the reference width while automatically scaling annotations, in the event that a chart is resized.</td>
    </tr>
    <tr>
        <td>`origH`</td>
        <td>Specifies the original height of chart, in which the annotation renders as intended. It is used as the reference height while automatically scaling annotations, in the event that a chart is resized.</td>
    </tr>
    <tr>
        <td>`xShift`</td>
        <td>The value of this attribute is added to the x coordinate position value of the final annotation items on the x-axis. In other words, if an annotation is placed at 100 pixels left and the value of xShift is set to 50, then the effective value of the x coordinate for the annotation adds up to 150 pixels. When applying scaling, the value of this attribute is included within the scale factor.</td>
    </tr>
    <tr>
        <td>`yShift`</td>
        <td>Like the xShift attribute, this attribute applies to the y-axis.</td>
    </tr>
    <tr>
        <td>`grpXShift`</td>
        <td>Shifts all annotation groups along the x coordinate. The difference between xShift and this attribute is that, during scaling, xShift is included within the scale factor whereas grpXShift is excluded.</td>
    </tr>
    <tr>
        <td>`grpYShift`</td>
        <td>Like the grpXShift attribute, this attribute applies to the y-axis.</td>
    </tr>
    <tr>
        <td>`alpha`</td>
        <td>Specifies the transparency for the group. This attribute takes values between 0 (transparent) and 100 (opaque, default).</td>
    </tr>
    <tr>
        <td>`visible`</td>
        <td>Specifies the visibility of the group. Setting this value to 0 hides the group, setting it to 1 (default) shows it.</td>
    </tr>
    <tr>
        <td>`showShadow`</td>
        <td>Specifies whether a shadow effect will be shown for the annotation group. Setting this attribute to 1 shows the effect, setting it 0 (default) does not show the effect.</td>
    </tr>
    <tr>
        <td>`color`</td>
        <td>Specifies the hex color code for the annotation group.</td>
    </tr>
    <tr>
        <td>`font`</td>
        <td>Specifies the font family for the text annotation(s) in the annotation group.</td>
    </tr>
    <tr>
        <td>`fontSize`</td>
        <td>Specifies the font size for the text annotation(s).</td>
    </tr>
    <tr>
        <td>`textAlign`</td>
        <td>Specifies the horizontal alignment for the text annotation(s).</td>
    </tr>
    <tr>
        <td>`textVAlign`</td>
        <td>Specifies the vertical alignment for the text annotation(s).</td>
    </tr>
    <tr>
        <td>`rotateText`</td>
        <td>Specifies whether the text annotation(s) will be rotated. This attribute takes 0(default), 1, left, and right as values.</td>
    </tr>
    <tr>
        <td>`wrapText`</td>
        <td>Specifies whether words that are too long to fit in a line should be wrapped to the next line. Setting this attribute to 0 disables wrapping of text, setting it to 1(default) enables it.</td>
    </tr>
    <tr>
        <td>`link`</td>
        <td>Specifies the URL to which the user will be redirected, if the annotation group is clicked.</td>
    </tr>
    <tr>
        <td>`toolText`</td>
        <td>Specifies the tooltip for the annotation group.</td>
    </tr>
</table>

## Configure attributes for annotation items

You can segregate attributes for annotation items into two types, common (which work for all annotation types) and ad-hoc (which only work for certain annotation types).

### Common Attributes

<table>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
    <tr>
        <td>`id`</td>
        <td>Specifies a unique identification for the annotation. This id is used to identify and change other properties of the annotation.</td>
    </tr>
    <tr>
        <td>`type`</td>
        <td>Specifies the type of annotation to be drawn.</td>
    </tr>
    <tr>
        <td>`color`</td>
        <td>Specifies the hex color code for the annotation. For example, a value of #6baa01will draw an annotation in the green color. The default value is #ff0000.</td>
    </tr>
    <tr>
        <td>`alpha`</td>
        <td>Specifies the transparency of the annotation. This attribute takes values between 0 (transparent) and 100 (opaque, default).</td>
    </tr>
    <tr>
        <td>`fillColor`</td>
        <td>Specifies a list of hex color codes, if the group has to be rendered with a gradient effect. For example, "fillColor": "#ffcc66,#2deaff,#a6992a". This attribute is not applicable to the line, text, and image annotations</td>
    </tr>
    <tr>
        <td>`fillAlpha`</td>
        <td>Specifies the transparency of the colors specified using the fillColor attribute. This attribute takes values between 0 (transparent) and 100 (opaque, default). The number of values provided for this attribute should be the same as that for the fillColor attribute. In case the number of values is less than the number of colors provided, the last of the comma-separated values is repeated for the remaining colors.</td>
    </tr>
    <tr>
        <td>`fillRatio`</td>
        <td>Specifies the ratio for distribution for all colors specified as a comma-separated list to the fillColor attribute. This attribute takes values between 0 and 100. The number of values provided for this attribute should be the same as that for the fillColor attribute. In case the number of ratio values is less than the number of colors provided, the last of the comma-separated values is repeated for the remaining colors. The summation of these values should not exceed 100.</td>
    </tr>
    <tr>
        <td>`fillAngle`</td>
        <td>For a gradient fillColor, it specifies the angle in which the gradient will be drawn. It accepts one value between 0 to 360 in degrees.</td>
    </tr>
    <tr>
        <td>`fillPattern`</td>
        <td>Specifies whether the gradient fill will be linear or radial (default for circle and arc annotations).</td>
    </tr>
    <tr>
        <td>`showborder`</td>
        <td>Specifies whether a border will be shown around the annotation. Setting this attribute to 1 shows the border, setting it to 0 (default) hides it.</td>
    </tr>
    <tr>
        <td>`borderColor`</td>
        <td>Specifies the hex color code for the annotation border. For example, setting this attribute to #f8bd19 will show a yellow border around the annotation. This attribute is not applicable to the line annotation.</td>
    </tr>
    <tr>
        <td>`borderAlpha`</td>
        <td>Specifies the transparency of the annotation border. This attribute takes values between 0 (transparent) and 100 (opaque, default). This attribute is not applicable to the line annotation.</td>
    </tr>
    <tr>
        <td>`borderThickness`</td>
        <td>Specifies the thickness of the annotation border, in pixels. Default value is 2 pixels. This attribute is not applicable to the line annotation</td>
    </tr>
    <tr>
        <td>`dashed`</td>
        <td>Specifies whether the annotation border will be drawn using dashed lines. Setting this attribute to 1 will render the border using dashed lines, setting it to 0 (default) will render it using whole lines. For the line annotation, it renders the annotation itself as a dashed line.</td>
    </tr>
    <tr>
        <td>`dashLen`</td>
        <td>Specifies the length of each dash, if a dashed border is drawn for the annotation.</td>
    </tr>
    <tr>
        <td>`dashGap`</td>
        <td>Specifies the gap between each dash, if a dashed border is drawn for the annotation.</td>
    </tr>
    <tr>
        <td>`toolText`</td>
        <td>Specifies the tooltip for annotation items that is shown when the mouse pointer is hovered over it.</td>
    </tr>
    <tr>
        <td>`link`</td>
        <td>Specifies the URL to which the user will be redirected, if the annotation item is clicked.</td>
    </tr>
    <tr>
        <td>`showShadow`</td>
        <td>Specifies whether a shadow effect will be shown for the annotation group. Setting this attribute to 1 shows the effect, setting it 0 (default) does not show the effec.</td>
    </tr>
</table>

## Ad Hoc Attributes

### Line

<table>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`type`</td>
        <td>Set this attribute to line.</td>
    </tr>
    <tr>
        <td>`x`</td>
        <td>Specifies the x coordinate of the starting position of the line with respect to the leftmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`y`</td>
        <td>Specifies the y coordinate of the starting position of the line with respect to the topmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`toX`</td>
        <td>Specifies the x coordinate of the ending position of the line with respect to the leftmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`toY`</td>
        <td>Specifies the y coordinate of the ending position of the line with respect to the topmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`thickness`</td>
        <td>Specifies the thickness of the line, in pixels.</td>
    </tr>
</table>

### Circle

<table>    
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`type`</td>
        <td>Set this attribute to circle.</td>
    </tr>
    <tr>
        <td>`x`</td>
        <td>Specifies the x coordinate of the center of the circle with respect to the leftmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`y`</td>
        <td>Specifies the y coordinate of the center of the circle with respect to the topmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`radius`</td>
        <td>Specifies the radius of the circle, in pixels.</td>
    </tr>
    <tr>
        <td>`yRadius`</td>
        <td>Specifies the height, in pixels, if you want to draw an oval annotation.</td>
    </tr>
    <tr>
        <td>`startAngle`</td>
        <td>Specifies the start angle (in degrees), if a circle has to be drawn like a wedge. For example, setting "startAngle": "0" and "endAngle": "180" will draw a semicircle.</td>
    </tr>
    <tr>
        <td>`endAngle`</td>
        <td>Specifies the end angle (in degrees), if a circle has to be drawn like a wedge.</td>
    </tr>
</table>

### Arc

<table>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`type`</td>
        <td>Set this attribute to arc.</td>
    </tr>
    <tr>
        <td>`x`</td>
        <td>Specifies the x coordinate of the center of the arc with respect to the leftmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`y`</td>
        <td>Specifies the y coordinate of the center of the circle with respect to the topmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`radius`</td>
        <td>Specifies the outer radius of the arc, in pixels.</td>
    </tr>
    <tr>
        <td>`innerRadius`</td>
        <td>Specifies the inner radius of the arc, in pixels.</td>
    </tr>
    <tr>
        <td>`startAngle`</td>
        <td>Specifies the starting angle of the arc. This attribute takes values between 0 and 360. The default value is 0.</td>
    </tr>
    <tr>
        <td>`endAngle`</td>
        <td>Specifies the ending angle of the arc. This attribute takes values between 0 and 360. The default value is 360.</td>
    </tr>
</table>

### Rectangle

<table>    
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`type`</td>
        <td>Set this attribute to rectangle.</td>
    </tr>
    <tr>
        <td>`x`</td>
        <td>Specifies the x coordinate of the starting position of the rectangle with respect to the leftmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`y`</td>
        <td>Specifies the y coordinate of the starting position of the rectangle with respect to the topmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`toX`</td>
        <td>Specifies the x coordinate of the ending position of the rectangle with respect to the leftmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`toY`</td>
        <td>Specifies the y coordinate of the ending position of the rectangle with respect to the topmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`radius`</td>
        <td>Specifies the radius of the edges of a rectangle, in pixels. This attribute is used when you want to render the annotation as a rounded rectangle.</td>
    </tr>
</table>

### Polygon

<table>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`type`</td>
        <td>Set it to polygon.</td>
    </tr>
    <tr>
        <td>`sides`</td>
        <td>Specifies the number of sides for the polygon. Its value must be greater than 2.</td>
    </tr>
    <tr>
        <td>`x`</td>
        <td>Specifies the x coordinate of the center of the polygon with respect to the leftmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`y`</td>
        <td>Specifies the y coordinate of the center of the polygon with respect to the topmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`radius`</td>
        <td>Specifies the radius of the edges of a polygon, in pixels.</td>
    </tr>
</table>

### Text

<table>    
    <tr>
        <th>`Attribute Name`</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`type`</td>
        <td>Set this attribute to text.</td>
    </tr>
    <tr>
        <td>`text`</td>
        <td>Specifies the text that is to be rendered as the annotation.</td>
    </tr>
    <tr>
        <td>`x`</td>
        <td>Specifies the x coordinate of the position of the text annotation with respect to the leftmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`y`</td>
        <td>Specifies the y coordinate of the position of the text annotation with respect to the topmost position (taken as zero) of the chart.</td>
    </tr>
    <tr>
        <td>`font`</td>
        <td>Specifies the font family for the text annotation.</td>
    </tr>
    <tr>
        <td>`fontSize`</td>
        <td>Specifies the font size for the text annotation.</td>
    </tr>
    <tr>
        <td>`align`</td>
        <td>Specifies the horizontal alignment of the text annotation. This attribute takes left, center, and right as values. The default value is center.</td>
    </tr>
    <tr>
        <td>`vAlign`</td>
        <td>Specifies the vertical alignment of the text annotation. This attribute takes top, middle, and bottom as values. The default value is middle.</td>
    </tr>
    <tr>
        <td>`bold`</td>
        <td>Specifies whether the text will be in bold. Setting this attribute to 1 renders the text in bold, setting it to 0 (default) removes the bold formatting.</td>
    </tr>
    <tr>
        <td>`italic`</td>
        <td>Specifies whether the text will be in italic. Setting this attribute to 1 renders the text in italic, setting it to 0 (default) removes the italic formatting.</td>
    </tr>
    <tr>
        <td>`bgColor`</td>
        <td>Specifies the hex color code for the text annotation's background. For example, a value of #fcfc00 colors the background yellow.</td>
    </tr>
    <tr>
        <td>`leftMargin`</td>
        <td>Sets a fixed margin, in pixels, to the left of the text.</td>
    </tr>
    <tr>
        <td>`rotateText`</td>
        <td>Specifies whether the text annotation(s) will be rotated. This attribute takes 0(default), 1, left, and right as values.</td>
    </tr>
    <tr>
        <td>`wrap`</td>
        <td>Specifies whether text wrapping will be enabled. Setting this attribute to 1 will enable text wrapping, setting it to 0 (default) will disable it.</td>
    </tr>
    <tr>
        <td>`wrapWidth`</td>
        <td>Specifies the width wrapping dimension for the text. When this width is reached, it will cause the text to break into a new line. The toX and toY attributes can also be set on text if text wrapping dimensions are provided in absolute pixels from annotation group's origin coordinates.</td>
    </tr>
    <tr>
        <td>`wrapHeight`</td>
        <td>Like the wrapWidth attribute, this attribute applies to the height occupied by the text. Ellipses are appended to the end of text when text overflows beyond allocated vertical space of wrapHeight or toY attributes.</td>
    </tr>
</table>

### Path

<table>    
    <tr>
        <th>Attribute</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>`type`</td>
        <td>Set this attribute to path.</td>
    </tr>
    <tr>
        <td>`path`</td>
        <td>Specifies the path command and accepts standard SVG path format. For example, the path command "M 10, 10, L 100, 100" signifies that we start drawing from the coordinate at (10,10) pixel using M ( Move to) command and draw a line up to the coordinate (100,100) pixel as specified by the L (Line to) command.</td>
    </tr>
    <tr>
        <td>`x`</td>
        <td>Specifies the x coordinate of the starting position of the path with respect to the leftmost position (taken as 0) of the chart.</td>
    </tr>
    <tr>
        <td>`y`</td>
        <td>Specifies the y coordinate of the starting position of the path with respect to the topmost position (taken as 0) of the chart.</td>
    </tr>
</table>

### Iamges

<table>
    <tr>
        <td>`Attribute`</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>`type`</td>
        <td>Set this attribute to image.</td>
    </tr>
    <tr>
        <td>`url`</td>
        <td>Specifies the location of the image file (jpeg, png, or gif) that is to be rendered on the chart. Chart rendering does not pause for the image to load and as such asynchronously draws them as and when they are loaded. In case you need to load them instantaneously, you may considering preloading the images.</td>
    </tr>
    <tr>
        <td>`x`</td>
        <td>Specifies the x coordinate of the starting position of the image annotation with respect to the leftmost position (taken as 0) of the chart.</td>
    </tr>
    <tr>
        <td>`y`</td>
        <td>Specifies the y coordinate of the starting position of the image annotation with respect to the topmost position (taken as 0) of the chart.</td>
    </tr>
    <tr>
        <td>`xscale`</td>
        <td>Specifies the resize value for the image width.</td>
    </tr>
    <tr>
        <td>`yscale`</td>
        <td>Specifies the resize value for the image height.</td>
    </tr>
</table>

## Use macros to position annotations

Use the following macros to position annotations within charts and gauges:

- Define the annotation position attributes (x, y, toX, toY, etc.) relative to the chart using the `$chartStartX`, `$chartStartY`, `$chartEndX`, `$chartEndY`, `$chartCenterX`, `$chartCenterY`, `$chartWidth`, and `$chartHeight` macros.

- Position annotations with respect to the chart margins using the `$chartTopMargin`, `$chartBottomMargin`, `$chartLeftMargin`, and `$chartRightMargin` macros.

- Position annotations relative to the chart caption and subcaption, using the `$captionStartX`, `$captionStartY`, `$captionEndX`, `$captionEndY`, `$captionWidth`, `$captionHeight`, `$subCaptionStartX`, `$subCaptionStartY`, `$subCaptionEndX`, `$subCaptionEndY`, `$subCaptionWidth`, and `$subCaptionHeight` macros.

- Position annotations with respect to the canvas, using the `$canvasStartX`, `$canvasStartY`, `$canvasEndX`, `$canvasEndY`, `$canvasWidth`, and `$canvasHeight` macros. Note that these macros are only applicable to Cartesian charts.

- Position annotations around a legend using the `$legendStartX`, `$legendStartY`, `$legendEndX`, `$legendEndY`, `$legendWidth`, and `$legendHeight` macros. Note that these macros are only applicable to Cartesian charts.

- Position annotations around gauges using the `$gaugeStartX`, `$gaugeStartY`, `$gaugeEndX`, `$gaugeEndY`, `$gaugeCenterX`, and `$gaugeCenterY` macros. 

- Position annotations with respect to the start angle and end angle of an angular gauge, using the `$gaugeStartAngle` and `$gaugeEndAngle` macros respectively.

- Position annotations with respect to the radius of a bulb gauge using the `$gaugeRadius` macro.

- Position annotations with respect to the width of the entire funnel or pyramid plot using the `$plotWidth` macro.

- Position annotations with respect to half-width of the entire funnel or pyramid plot, using the `$plotSemiWidth` macro.

## Use sub-token macros to position annotations 

Use the following sub-token macros to position annotations with respect to datasets and axes:

### $dataset

Use the $dataset macro to add the position information of the plots in a dataset to the annotation. You can apply the "dataset_index [separator] set [separator] set_index [separator] position_key" sub token to the macro. 

Possible values you can assign to the position_key include `X`, `Y`, `STARTX`, `STARTY`, `ENDX`, `ENDY`, `CENTERX`, and `CENTERY`. 

For example, you can use the following values to position a rectangle above the second column in a column chart:

- x:$dataset.0.set.1.STARTX

- y:$dataset.0.set.1.STARTY

- tox:$dataset.0.set.1.STARTX+100

- toy:$dataset.0.set.1.STARTY-40

### $yaxis

Use the $yaxis macro to add the position information of the y-axis labels to the annotation. You can apply the "yaxis_index [separator] label [separator] label_index [separator] position_key" sub token to the macro.

Possible values you can assign to the position_key include `X`, `Y`, `STARTX`, `STARTY`, `ENDX`, `ENDY`, `CENTERX`, and `CENTERY`.

For example, you can position a text on the y axis, using the following values:

- x: $yaxis.0.label.1.startx -12

- y: $yaxis.0.label.0.starty - 5

### $xaxis

Use the $xaxis macro to add the position information of the x-axis labels to the annotation. You can apply the "xaxis_index [separator] label [separator] label_index [separator] position_key" sub-token to the macro.

Possible values you can assign to the position_key are the same as the ones you can use with the `$yaxis` macro.

For example, you can position a text on the x axis, using the following values:

- x: $xaxis.label.1.startx+2

- y: $xaxis.label.0.starty+3