---
title: Annotation References | FusionCharts
description: Annotations are user-defined objects or shapes drawn on a chart. Annotations are often required to make interpretation of the chart easy for the end user.
heading: Annotation References
---

In the following sections, you can see an exhaustive set of attributes and macros supported by annotations in FusionCharts Suite XT.

## General configuration attributes

You can use the following attributes with the root `annotations` object, to globally configure generic aspects of annotations:

- Set the value of the `autoScale` attribute to `1`, to automatically scale a group of annotations, if chart dimensions change.

- Set the value of the `constrainedScale` attribute to `1`, to retain the aspect ratio (height:width) of annotations when scaling.

- Set the value of the `scaleText` attribute to `1`, to automatically scale text annotations in a group of annotations, if chart dimensions change.

- Set the value of the `scaleImages` attribute to `1`, to automatically scale image annotations in a group of annotations, if chart dimensions change.

- Specify a value to be added to the x coordinate position value of the final annotation items on the x-axis, using the `xShift` attribute. While applying scaling, the value of this attribute is included within the scale factor.

- Specify a value to be added to the y coordinate position value of the final annotation items on the y-axis, using the `yShift` attribute. While applying scaling, the value of this attribute is included within the scale factor.

- Shift all annotation groups along the x coordinate by a fixed distance, using the `grpXShift` attribute. Note that unlike `xShift`, the value of `grpXShift` is not included in the scale factor when applying scaling.

- Shift all annotation groups along the y coordinate by a fixed distance, using the `grpyShift` attribute. Note that unlike `yShift`, the value of `grpyShift` is not included in the scale factor when applying scaling.

- Specify the original width of the chart, in which the annotations render as intended, using the `origW` attribute. Note that this value is used as the reference width while automatically scaling annotations when a chart is resized.

- Specify the original height of the chart, in which the annotations render as intended, using the `origH` attribute. Note that this value is used as the reference height while automatically scaling annotations when a chart is resized.

Refer to the code below:

```json
{
    "annotations": {
        // Define the general configuration attributes here.
    }
}
```

## Configure attributes for annotation groups

You can uniformly configure all annotation items contained within an annotation group, by using a number of attributes, as detailed in the list below. Group attributes inherit default values from the ones defined as root-level annotation attributes.

- Specify a unique identification string for the annotation group using the `id` attribute.

- Specify the x coordinate of the starting position of a group of annotations with respect to the leftmost position (taken as 0) of the chart, using the `x` attribute. If you also configure it individually for the annotation item(s) within the group. Then the value of the `x` attribute for the item is set relative to the value of the `x` attribute for the group.

- Specify the y coordinate of the starting position of a group of annotations with respect to the topmost position (taken as 0) of the chart, using the `y` attribute. If you also configure it individually for the annotation item(s) within the group. Then the value of the `y` attribute for the item is set relative to the value of the `y` attribute for the group.

- Set the value of the `autoScale` attribute to `1`, to automatically scale a group of annotations, if chart dimensions change.

- Set the value of the `constrainedScale` attribute to `1`, to retain the aspect ratio (height:width) of annotations when scaling.

- Set the value of the `scaleText` attribute to `1`, to automatically scale text annotations in a group of annotations, if chart dimensions change.

- Set the value of the `scaleImages` attribute to `1`, to automatically scale image annotations in a group of annotations, if chart dimensions change.

- Set the value of the `showBelow` attribute to `1`, to prevent the annotation group from overlapping the data plots.

- Specify the original width of the chart, in which the annotations render as intended, using the `origW` attribute. Note that this value is used as the reference width while automatically scaling annotations when a chart is resized.

- Specify the original height of the chart, in which the annotations render as intended, using the `origH` attribute. Note that this value is used as the reference height while automatically scaling annotations when a chart is resized.

- Specify a value to be added to the x coordinate position value of the final annotation items on the x-axis, using the `xShift` attribute. While applying scaling, the value of this attribute is included within the scale factor.

- Specify a value to be added to the y coordinate position value of the final annotation items on the y-axis, using the `yShift` attribute. While applying scaling, the value of this attribute is included within the scale factor.

- Shift all annotation groups along the x coordinate by a fixed distance, using the `grpXShift` attribute. Note that unlike `xShift`, the value of `grpXShift` is not included in the scale factor when applying scaling.

- Shift all annotation groups along the y coordinate by a fixed distance, using the `grpyShift` attribute. Note that unlike `yShift`, the value of `grpyShift` is not included in the scale factor when applying scaling.

- Specify the transparency (between `0` for transparent and `100` for opaque) for a group of annotations, using the `alpha` attribute.

- Set the value of the `visible` attribute of a group of annotations to `0`, to hide the group.

- Set the value of the `showShadow` attribute to `1`, to show a shadow effect for the annotation group.

- Specify the hex color code for the annotation group, using the `color` attribute.

- Specify the font family for all the text annotation(s) in the annotation group, using the `font` attribute.

- Specify the font size for all the text annotation(s) in the annotation group, using the `fontSize` attribute.

- Specify the horizontal alignment for all text annotation(s), using the `textAlign` attribute.

- Specify the vertical alignment for all text annotation(s), using the `textVAlign` attribute.

- Specify whether text annotation(s) is to be rotated, using the `rotateText` attribute. Note that this attribute takes `0` (default), `1`, `left`, and `right`, as values.

- Set the value of the `wrapText` attribute to `1`, to automatically wrap words that are too long to fit in a line, to the next one. 

- Specify the URL to which you will be redirected if you click the annotation group, using the `link` attribute.

- Specify the tooltip for the annotation group using the `toolText` attribute.

Refer to the code below:

```json
{
    "annotations": {
        "groups": [{
            //Define the group configuration attributes here.
        }]
    }
}
```

## Configure attributes for annotation items

You can segregate attributes for annotation items into two types, common (which work for all annotation types) and ad-hoc (which only work for certain annotation types).

### Common Attributes

- Specify a unique identification for the annotation using the `id` attribute. You can then use it to identify and change other properties of the annotation.

- Specify the type of annotation to be drawn, using the `type` attribute.

- Specify the hex color code for the annotation, using the `color` attribute.

- Specify the transparency (between `0` for transparent and `100` for opaque) of the annotation, using the `alpha` attribute.

- Specify a list of hex color codes, if the group has to be rendered with a gradient effect, using the `fillColor` attribute. Note that this attribute is not applicable to the line, text, and image annotations.

- Specify the transparency (between `0` for transparent and `100` for opaque) of the colors (specified using the `fillColor` attribute) using the `fillAlpha` attribute. Note that the number of values you provide for this attribute should be the same as those for the `fillColor` attribute. In case the number of values is less than the number of colors you provide, the last of the comma-separated values is repeated for the remaining colors.

- Specify the ratio (between `0` and `100`) for distribution for all colors specified as a comma-separated list to the `fillColor` attribute, using the `fillRatio` attribute. The number of values you provide for this attribute should be the same as that for the `fillColor` attribute. In case the number of ratio values is less than the number of colors you provide, the last of the comma-separated values is repeated for the remaining colors. The summation of these values should not exceed 100.

- Specify the angle (between `0` degree and `360` degrees) in which the gradient is to be drawn for a gradient `fillColor`, using the `fillAngle` attribute.

- Specify whether the gradient fill is to be linear or radial (default for circle and arc annotations), using the `fillPattern` attribute.

- Show a border around the annotation by setting the value of the `showBorder` attribute to `1`.

- Specify the hex color code for the annotation border, using the `borderColor` attribute. Note that this attribute is not applicable to the line annotation.

- Specify the transparency (between `0` for transparent and `100` for opaque) of the annotation border, using the `borderAlpha` attribute. Note that this attribute is not applicable to the line annotation.

- Specify the thickness (in pixels) of the annotation border, using the `borderThickness` attribute. Note that this attribute is not applicable to the line annotation.

- Specify whether the annotation border is to be drawn using dashed lines, by setting the value of the `dashed` attribute to `1`. Note that for the line annotation, this attribute renders the annotation itself as a dashed line.

- Specify the length of each dash, if a dashed border is drawn for the annotation, using the `dashLen` attribute.

- Specify the gap between each dash, if a dashed border is drawn for the annotation, using the `dashGap` attribute.

- Specify the tooltip for annotation items that is shown when you hover the mouse pointer over it, using the `toolText` attribute.

- Specify the URL to which you will be redirected, if you click the annotation item, using the `link` attribute.

- Specify whether a shadow effect is to be shown for the annotation group, by setting the value of the `showShadow` attribute to `1`.

Refer to the code below:

```json
{
    "annotations": {
        "groups": [{
            "items": [{
                //Define the annotation items configuration attributes here.
            }]
        }]
    }
}
```

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