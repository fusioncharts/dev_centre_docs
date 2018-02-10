---
title: Vertical Lines | FusionCharts
description: Vertical separator lines or vlines are elements that can differentiate between data blocks in a chart. They can be placed between any two data points
heading: Vertical Lines
breadcrumb: [["Home", "/"], ["Vertical Lines"]]
---

Vertical (or horizontal in case of bar charts) separator lines or `vlines` are elements that can help differentiate between data blocks in a chart. They can be placed between any two data points, or aligned to specific data points.

<image>

## Set vertical lines

By default, the vertical lines do not appear. To display a vertical line follow the steps below:

* Create and object under `data` between the data values where you want to render the vertical line.

* Set the `vLine` attribute to `1`. 

* Specify the display text of the vertical line using the `label` attribute.

* Set the position of the vertical line using the `linePosition` attribute.

Refer to the code below:

```
{
    "chart": {

       ...

    },

    "data": [

       ...

        {

            "label": "Fri",

            "value": "5529"

        },

       ** {**

**            "vline": "true",**

**            "label": "Weekend Start",**

**            "linePosition": "0.7"**

**        },**

        {

            "label": "Sat",

            "value": "5803"

        },

        {

            "label": "Sun",

            "value": "6202"

        }

    ]

}

 ```

The chart will look like as shown below:

<chart>

### Configure label positions

To set the position of the label, specify the position using the `labelPosition` attribute. Refer to the code below:

```
{

    "chart": {

       ...

    },

    "data": [

       ...

        {

            "label": "Fri",

            "value": "5529"

        },

       ** {**

**            "vline": "true",**

**            "label": "Weekend Start",**

**            "linePosition": "0.7",**

**            "labelPosition": "0.5"**

**        },**

        {

            "label": "Sat",

            "value": "5803"

        },

        {

            "label": "Sun",

            "value": "6202"

        }

    ]

}

 ```

The chart will look like as shown below:

<chart>

### Configure label alignment

To configure the alignment of the label the following attributes are used:

* Set the horizontal alignment of the label using the `labelHAlign` attribute. The possible values for this attribute are `left`, `center` (default), and `right`.

* Set the vertical alignment of the label using the `labelVAlign` attribute. The possible values for this attribute are `top`, `middle` (default), and `bottom`.

Refer to the code below:

```
{

    "chart": {

       ...

    },

    "data": [

       ...

        {

            "label": "Fri",

            "value": "5529"

        },

       ** {**

**            "vline": "true",**

**            "label": "Weekend Start",**

**            "linePosition": "0.7",**

**            "labelPosition": "0.5",**

**            "labelVAlign": "middle",
            "labelHAlign": "right"**

**        },**

        {

            "label": "Sat",

            "value": "5803"

        },

        {

            "label": "Sun",

            "value": "6202"

        }

    ]

}

 ```

The chart will look like as shown below:

<chart>

## Show label borders

To add borders to the label set the `showVLineLableBorder` to `1` within the `chart` object. This attribute is used to show borders for the labels of all the vertical lines.

Refer to the code below:

```

{
    "chart": {
        ...
        "showVLineLabelBorder": "0",
    },

    "data": [

       ...

        {

            "label": "Fri",

            "value": "5529"

        },

       ** {**

**            "vline": "true",**

**            "label": "Weekend Start",**

**            "linePosition": "0.7",**

**            "labelPosition": "0.5",**

**            "labelVAlign": "middle",
            "labelHAlign": "right"**

**        },**

        {

            "label": "Sat",

            "value": "5803"

        },

        {

            "label": "Sun",

            "value": "6202"

        }

    ]

}

 ```

The chart will look like as shown below:

<chart>

In order to show label borders for specific vertical lines, set the `showLabelBorder` attribute to `1` for a particular vertical line under `data`. This attribute overrides the setting in the chart object.

Refer to the code below:

```

{
    "chart": {
        ...
       ** "showVLineLabelBorder": "0"**
    },

    "data": [

       ...

        {

            "label": "Fri",

            "value": "5529"

        },

       ** {**

**            "vline": "true",**

**            "label": "Weekend Start",**

**            "linePosition": "0.7",**

**            "labelPosition": "0.5",**

**            "labelVAlign": "middle",
            "labelHAlign": "right",**

**             "showLabelBorder": "0"**

**        },**

        {

            "label": "Sat",

            "value": "5803"

        },

        {

            "label": "Sun",

            "value": "6202"

        }

    ]

}

 ```

The chart will look like as shown below:

<chart>

## Customize visual properties

To customize the visual properties of the vertical line the following attributes are used:

* Specify the hex code for the color of the vertical line using the `color` attribute.

* Set the thickness (in pixels) of the vertical line using the `thickness` attribute.

* Set the transparency of the vertical line using the `alpha` attribute.

* Set the `dashed` attribute to `1` to view the vertical line as dashed.

* Specify the length of each dash using the `dashLen` attribute.

* Set the gap between each dash using the `dashGap` attribute.

Refer to the code below:

```

{

    "chart": {

       ...

    },

    "data": [

       ...

        {

            "label": "Fri",

            "value": "5529"

        },

       ** {**

**            "vline": "true",**

**            "label": "Weekend Start",**

**            "linePosition": "0.7",**

**            "labelPosition": "0.5",**

**            "labelVAlign": "middle",
            "labelHAlign": "right"**

**            "color": "#6da81e",
            "thickness": "2",
            "alpha": "50",
            "dashed": "1",
            "dashLen": "4",
            "dashGap": "2"**

**        },**

        {

            "label": "Sat",

            "value": "5803"

        },

        {

            "label": "Sun",

            "value": "6202"

        }

    ]

}

 ```

The chart will look like as shown below:

<chart>

 

