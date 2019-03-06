---
title: Gantt Chart | FusionCharts
description: The Gantt chart is a specialized chart used for displaying various timelines like project timelines, development timelines, etc.
heading: Gantt Chart
---

> These chart types belong to **FusionWidgets XT**.

The Gantt chart is a specialized chart that you can use, to display various timelines, such as project timelines, development timelines, etc.

## Basics of the Gantt chart

A Gantt chart is a date/time-based chart, with which you can plot tasks visually, with their exact start and end dates/times. You can also define milestones for the project, which assert how much of the project should be completed at a given point in time. That way, you can keep track of the project progress and plan remedial actions to bring the project back on course, if there is a delay.

A typical FusionCharts Suite XT Gantt chart looks like the following:

{% embed_chart standard-charts-gantt-chart-example-1.js %}

Click [here](http://jsfiddle.net/fusioncharts/avLb04cs/) to edit the above chart.

## Features of the Gantt Chart

With a Gantt chart, you can:

* Display both date and time.

* Use data with multiple and irregular division of dates on the visual timeline. You can also customize the labels and cosmetic properties of the categories.

* Customize input and output date formats. That way, you can provide dates in the JSON in one format and then customize the output format. Additionally, you can extensively customize the date format in the output.

* Display the completion of each task in percentage, either as an empty bar or by using a different fill color (which you can define with the attribute `slackFillColor`).

* Show a scrollable data table at the side of the chart. You can create any number of columns in this table and display any data you want. You can also customize the cosmetics of each cell of this table.

* Restrict the Gantt view pane area to a specified date/time duration. You can view the rest by scrolling the chart.

* Link tasks to processes by an ID. Therefore, you can define multiple tasks for each process. This can help in cases where you plot a Gantt chart indicating allotted work for all team members, and each member has multiple jobs allotted during the same period.

* Show/hide task labels, percent labels, individual task bar dates, etc.

* Show individual task bars as groups – to indicate task groups.

* Customize connectors to connect any two tasks on the chart. The connectors can be connected to either start or end of both the tasks and can be rendered in four different ways. You can also individually customize the cosmetics of each connector.

* Display milestones at specified dates, as polygons or stars with customizable properties. You can show additional tool text for milestones as well.

* Add trend-lines or trend-zones to the chart, to highlight a single date or a range of dates. For example, you can add a trend line to show "Today", or one to show a "Holiday", etc.

* Customize tooltip properties. Also, you can show task date as part of the tooltip text, or use additional macros to create a dynamic tooltip.

* Add a legend to the chart to show color keys, and fully customize legend cosmetics.

* Set colors for the chart with pre-defined palettes and single color theme selectors.

* Define the width ratio in which the data table and Gantt area are to be distributed.

* Fully customize Gantt and grid cosmetics, as well as other settings, like scroll properties.

* Display round-edged task bars.

* Customize gradient mix and shadow effect for task bars.

* Define annotations over the Gantt chart to show further information.

* Enable the hovering effect, and customize hovering properties for categories, processes, connectors, and task bars.

* Enable vertical scrolling.

## Elements of the Gantt Chart

A Gantt chart consists of the following elements:

* Categories and subcategories (dates) in the visual timeline

* Scrollable data table that includes:

    * Process names

    * Additional user-defined columns of data

* Scrollable Gantt view pane that includes:

    * Gantt task bars

    * Milestones

    * Task connectors

    * Trend-lines

* Legend to show the color keys used in the chart

In the images given below, you can see a standard Gantt chart with a few of the above elements labeled:

![gantt-element-image-1](/images/standard-charts-gantt-chart-image-1.gif)

![gantt-element-image-2](/images/standard-charts-gantt-chart-image-2.gif)

## Categories and subcategories (dates)

A Gantt chart has a horizontal axis representing the total time span of the project. You can break this axis down into increments (for example, days, weeks, or months). You can also define any number of sub-categories to show dates broken into smaller units. For example, if you want to show a Gantt chart spanning two years, you can show the first sub-category as quarters, then divide these quarters into months, then weeks, and finally into days.

The irregular distribution of the timeline is also possible. For example, if you want to plot a Gantt chart illustrating the development of a certain project during a time span of three months and you want to show the weekly progress, you can easily divide the time period into weeks based on their actual dates. In the visual date timeline, the bar on the top can represent the months by their names and the bar below it can display the weeks.

In most of the other Gantt charts, you are forced to divide a month into four weeks only, thereby resulting in aberrations in the visual data display, as a month is always more than 4 weeks. However, the FusionCharts Suite XT Gantt chart is date based, which means all your divisions of date are perfect. You can show a week starting in one month and ending in another.

## Process Names

Each task in a Gantt chart is represented as a process. For example, in the images shown above, we have the processes "Writing", "Signing", "Financing", etc. Whenever you build a Gantt chart, you need to specify the process names and also the tasks within each process.

The process names show up in a scrollable data table to the left of the Gantt pane.

## Data Table to Show Additional Data Columns

If you need to provide more data pertinent to each process, you can show that data in an interactive and fully customizable data table. This data table is draggable and scrollable. Also, each cell's cosmetics can be thoroughly customized and data in each cell can be linked to external targets.

## Task Bars

Task bars are the actual bars which represent the duration of each task. They run through the horizontal length of the chart and are positioned with respect to dates specified for each of them.

## Milestones

Milestones are an important part of the Gantt chart as they allow you to visually depict any crucial dates on the chart. You can create your own milestones on the chart based on the date and the tasks, i.e., for a given task you can specify milestones on specific dates. You can customize all the visual properties of the milestone including shape (star or polygon), size, and colors.

Additionally, you can add tool text and link to the milestone.

## Task Connectors

You can draw connectors between the task bars to indicate the process flow.

On the functional side, to draw a connector, all you need to do is specify the `Id` attributes for the two tasks that you want to connect. Apart from this, you can also specify where the connector joins the start and end task bar individually – at their start or end.

For example, if you need to plot two connecting tasks which are simultaneous in nature, that is each process starts at the same time and relates to the same thing, you can connect the start of taskbar to the start of end bar to give the visual effect. Similarly, if the second process can start only after the first process has ended, you can connect the end of the first task bar to the beginning of the succeeding taskbar.

## Trend-lines

You can use trend-lines to show important dates on the chart - like today, or a scheduled date, etc.

## Legend

You can define your own legend and keys for the chart. This is an optional requirement but can be useful to depict what each color represents.

## Vertical Scroll Bar

A vertical scroll bar appears at the right side of the Gantt view pane in Gantt chart.

## Create a simple Gantt chart

The Gantt chart is a specialized chart that you can use to monitor the progress of a project. In this section, you will see how to create a simple Gantt chart.

As an example, see how you can create a Gantt chart that monitors the various processes and tasks involved in optimizing the reach of an organization on social media.

> In order to render Gantt chart, include fusioncharts.Gantt.js in the project folder with rest of the .js files, as mentioned **[here](/installation/client-side-frameworks/install-using-plainjs)**.

A Gantt chart that you build to track the progress of a Social Media Optimization project looks like the following:

{% embed_chart standard-charts-gantt-chart-example-2.js %}

Click [here](http://jsfiddle.net/fusioncharts/z79b74k3/) to edit the above chart.

To create a Gantt chart, you need to:

1. Define the data you want to plot using the Gantt chart

2. Define the visual timeline for the chart

3. Define processes

4. Define tasks

To create the Social Media Optimization Gantt chart, use the data given in the table below:

Process Name|Start Date|End Date|
-|-|-
Identify Customers|08/04/2014|08/10/2014|
Survey 500 Customers|08/08/2014|08/19/2014|
Interpret Requirements|08/19/2014|09/02/2014|
Market Analysis|08/24/2014|09/02/2014|
Brainstorm Concepts|09/02/2014|09/21/2014|
Define Ad Requirements|09/21/2014|10/06/2014|
Design & Develop|10/06/2014|01/21/2015|
Mock Test|01/21/2015|02/19/2015|
Documentation|01/28/2015|02/24/2015|
Start Campaign|02/24/2015|03/27/2015|

In the above table, you can see the various processes involved, as well as and the start and end date for each of them.

The Gantt chart shown above tracks the monthly progress of each process. Each month here represents a category. Let's say you want to monitor both, the quarterly and the monthly progress. In this case, you will have to render the chart with two categories - one for the months and another for the quarters.

The Social Media Optimization Gantt chart rendered with multiple categories looks like the following:

{% embed_chart standard-charts-gantt-chart-example-3.js %}

Click [here](http://jsfiddle.net/fusioncharts/z0sLtqu7/) to edit the above chart.

## Define and show/hide task labels

Use the following attributes to define and set the visibility of the task labels:

* Set the value of the `showTaskLabels` attribute to `1`, to render task labels on the chart. 

* Set the value of the `showLabels` attribute to `1`, to display task labels on the chart.

* Use the `label` attribute to specify the text of the label for a particular task.

Refer to the code below:

```json
{
    "chart": {
        "showTaskLabels": "1"
    },
    "categories": [{
        "category": [{
            "start": "08/01/2014",
            "end": "09/30/2014",
            "label": "Q3"
        }, {
            ...
        }]
    }, {
        "category": [{
            "start": "08/01/2014",
            "end": "08/31/2014",
            "label": "Aug '14"
        }, {
            ...
        }]
    }],
    "processes": {
        ...
        "process": [{
            "label": "Identify Customers"
        }, {
            ...
        }]
    },
    "tasks": {
        "task": [{
            ...
        }]
    }

}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-4.js %}

Click [here](http://jsfiddle.net/fusioncharts/q9n2fe0d/) to edit the above chart.

## Show/Hide Task Start and End Dates

Use the following attributes to show/hide task start and end dates:

* Set the value of the `showTaskStartDate` attribute to `1`, to show the task start date with the task bar.

* Set the value of the `showTaskEndDate` attribute to `1`, to show the task end date with the task bar.

* Set the value of the `showStartDate` attribute to `1`, to show the start date with the task bar. 

* Set the value of the `showEndDate` attribute to `1`, to show the end date with the task bar. 

Refer to the code below:

```json
{
    "chart": {
        "showTaskLabels": "1",
    },
    "categories": [{
        "category": [{
            ...
        }]
    }, {
        "category": [{
            ...
        }]
    }],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            "start": "10/06/2014",
            "end": "01/21/2015",
            "label": "Promotion Applications",
            "showStartDate": "1",
            "showEndDate": "1"
        }, {
            ...
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-5.js %}

Click [here](http://jsfiddle.net/fusioncharts/q9n2fe0d/) to edit the above chart.

## Add and customize the process header

Use the following attributes used to add and customize process headers:

* Set the value of the `headerText` attribute to specify the text for the header.

* Set the value of the `headerAlign` attribute to `left`, `center`, or `right`, to specify the horizontal alignment for the column header.

* Set the value of the `headerVAlign` attribute to `top`, `middle`, or `bottom`, to specify the vertical alignment for the column header.

* Set the value of the `headerFont` to the font family of the process header.

* Set the value of the `headerFontSize` attribute to the font size of the process header.

* Set the value of the `headerFontColor` attribute to the hex code of the font color of the process header.

* Set the value of the `headerIsBold` attribute to `1`, to apply bold formatting to the process header. 

* Set the value of the `headerIsItalic` attribute to `1`, to italicize the process header. 

* Set the value of the `headerIsUnderline` attribute to `1`, to underline the process header.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
        "category": [{
            ...
        }]
    }, {
        "category": [{
            ...
        }]
    }],
    "processes": {
        "fontsize": "12",
        "isbold": "1",
        "align": "right",
        "headerText": "What to do",
        "headerFontSize": "20",
        "headerVAlign": "bottom",
        "headerAlign": "right",
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            ...
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-6.js %}

Click [here](http://jsfiddle.net/fusioncharts/y0objesp/) to edit the above chart.

## Add more columns to the data table

The Social Media Optimization Gantt chart that we have been looking at so far looks like the following:

{% embed_chart standard-charts-gantt-chart-example-7.js %}

The above Gantt chart rendered with an additional "Owner" column looks like the following:

{% embed_chart standard-charts-gantt-chart-example-8.js %}

Click [here](http://jsfiddle.net/fusioncharts/bt4sp3rp/) to edit the above chart.

Since the chart width is relatively small here, a scroll bar comes up to help you scroll through the data table. To increase the width of the data table:

* Increase the chart width.

* Set the value of `GanttWidthPercent` attribute under `chart` object to a lower value (between `0` and `100`). This attribute indicates the percent space (width) the Gantt pane takes.

You can also explicitly set the width of each data column using the `width` attribute of the `datacolumn` object, either as a pixel value or as a percentage of the entire data grid width.

> If you wish to hide the scrollbar of the data column, you can set **showFullDataTable** to **0** (false) in **chart** object. This will wrap & truncate the data labels and try to squeeze them in the required space (only if possible).

## Customize the hover effect

In a Gantt chart, the hover effect is rendered as a vertical/horizontal band when you hover the mouse pointer over a category/process header. Different ways in which you can customize the hover effect for a Gantt chart include the following.

### Customize the hover effect globally

Use the following attributes to customize the hover effect globally.

* Set the hover band color of the categories and processes objects in hex code, using the `hoverBandColor` attribute.

* Set the transparency for the hover band of the categories and processes objects between `0` (transparent) and `100` (opaque), using the `hoverBandAlpha` attribute.

Refer to the code below:

```json
{
	"chart": {
		"hoverBandColor": "#BEFFFF",
		"hoverBandAlpha": "40"
	}
}
```
The chart will look as shown below:

![Gantt-Chart-GIF-1](/gif/standard-charts-gantt-chart-gif-1.gif)

Click [here](http://jsfiddle.net/fusioncharts/6w30L5x1/) to edit the above chart.

### Customize hover effect for processes

Customize the hover effect for processes using the following attributes:

* Set the value of the `processHoverBandColor` attribute in hex code to specify the hover band color for specific processes.

* Set the value of the `processHoverBandAlpha` attribute between `0` (transparent) and `100` (opaque), to specify the transparency of the hover band color for specific processes.

* Set the value of the `hoverBandColor` attribute in hex code to specify the hover band color for all processes.

* Set the value of the `hoverBandAlpha` attribute between `0` (transparent) and `100` (opaque), to specify the transparency of the hover band color for all processes.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
        "category": [{
            ...
        }]
    }, {
        "category": [{
            ...
        }]
    }],
    "processes": {
        "hoverBandcolor": "#AFFAEC",
		"hoverBandAlpha": "30",
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            ...
        }]
    }
}
```
The chart will look as shown below:

![Gantt-Chart-GIF-2](/gif/standard-charts-gantt-chart-gif-2.gif)

Click [here](http://jsfiddle.net/fusioncharts/gkxkwru0/) to edit the above chart.

### Customize hover effect for categories

Use the following attributes to customize the hover effect for categories:

* Set the value of the `categoryHoverBandColor` attribute in hex code to specify the hover band color for specific categories.

* Set the value of the `categoryHoverBandAlpha` attribute between `0` (transparent) and `100` (opaque), to specify the transparency of the hover band color for specific categories.

* Set the value of the `hoverBandColor` attribute in hex code to specify the hover band color for all categories.

* Set the value of the `hoverBandAlpha` attribute between `0` (transparent) and `100` (opaque), to specify the transparency of the hover band color for all categories.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
    	"hoverBandcolor": "#A1F1EF",
    	"hoverBandAlpha": "50",
        "category": [{
            ...
        }]
    }, {
        "category": [{
            ...
        }]
    }],
    "processes": {
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            ...
        }]
    }
}
```

The chart will look as shown below:

![Gantt-Chart-GIF-3](/gif/standard-charts-gantt-chart-gif-3.gif)

Click [here](http://jsfiddle.net/fusioncharts/20Lhm9e9/) to edit the above chart.

## Disable hover effects

Use the following attributes to disable the hover effect:

* Set the value of the `showHoverEffect` attribute to `0`, to disable the hover effect. To disable hover effects for all categories, processes, tasks, and connectors on the chart, set `showHoverEffect` to `0` with the `chart` object. Similarly, to disable the hover effect for one or multiple categories/processes, use this attribute with their respective objects.

* Set the value of the `showHoverBand` attribute to `0`, disable hover effects for color bands. Use this attribute when you want to enable hover effects for the categories and processes only and disable the hover effects for tasks and connectors.

Refer to the code below:

```json
{
	"chart": {
		"showHoverEffect": "0",
		"showHoverBand": "0"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-9.js %}

Click [here](http://jsfiddle.net/fusioncharts/xzf4qd0k/) to edit the above chart.

## Configure task bars

You can customize the way task bars render on the chart in the following ways:

### Indicate percent complete figures

Use the following attributes to render task bars that indicate the percentage of the project that has been completed. Note that the portion of the task that is yet to be completed is called the slack.:

* Set the value of the `percentComplete` attribute between `0` and `100`. 

* Set the value of the `slackFillColor` attribute to the hex code of the color used to render the slack.

* Set the value of the `showSlackAsFill` attribute to `0` to render the slack as an empty bar.

Refer to the code below:

```json
{
    "chart": {
        "slackFillColor": "#CC0000",
    },
    "datatable": {
        ...
        "datacolumn": [{
            ...
            "text": [{
                ...
            }]
        }]
    },
    "categories": [{
        "category": [{
            ...
        }]
    }, {
        "category": [{
            ...
        }]
    }],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            "start": "10/06/2014",
            "end": "01/21/2015",
            "percentComplete": "20"
        }, {
            ...
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-10.js %}

Click [here](http://jsfiddle.net/fusioncharts/xeeactrr/) to edit the above chart.

### Customize the hover effect for tasks

Use the following attributes to customize the hover effect for tasks:

* Set the value of the `taskHoverFillColor` attribute in hex code to specify the task bar fill color when you hover the mouse pointer over it. It applies to all tasks.

* Set the value of the `taskHoverFillAlpha` attribute between `0` (transparent) and `100` (opaque), to specify the transparency of the task bar fill color when you hover the mouse pointer over it. It applies to all tasks.

* Set the value of the `hoverFillColor` attribute in hex code to specify the hover band color for specific categories, when you hover the mouse pointer over it. Use this attribute with the `tasks` object to apply the color to all tasks created using the object. Otherwise, use it with the task object, to apply the color to only one task created using the object.

* Set the value of the `hoverFillAlpha` attribute between `0` (transparent) and `100` (opaque), to specify the transparency of the hover band color for specific categories, when you hover the mouse pointer over it. Use this attribute with the `tasks` object to apply the transparency to all tasks created using the object. Otherwise, use it with the task object, to apply the transparency to only one task created using the object.

* Set the value of the `showHoverEffect` attribute to `0`, to disable the hover effect for all elements of the chart.

* Set the value of the `showTaskHoverEffect` attribute to `0`, to disable the hover effect for all tasks of the chart.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "datatable": {
        ...
        "datacolumn": [{
            ...
            "text": [{
                ...
            }]
        }]
    },
    "categories": [{
            "category": [{
                ...
            }]
        },
        {
            "category": [{
                ...
            }]
        }
    ],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        "hoverFillColor": "#F4BEFF",
        "hoverFillAlpha": "80",
        "task": [{
                "start": "10/06/2014",
                "end": "01/21/2015",
                "hoverFillColor": "#1FC0FF",
                "hoverFillAlpha": "80"
            },
            {
                ...
            }
        ]
    }

}
```

The chart will look as shown below:

![Gantt-Chart-GIF-4](/gif/standard-charts-gantt-chart-gif-4.gif)

Click [here](http://jsfiddle.net/fusioncharts/df36h963/) to edit the above chart.

### Customize hover effect for slacks

Use the following attributes to customize the hover effect for slacks:

* Set the value of the `slackHoverFillColor` attribute in hex code to specify the slack bar fill color when you hover the mouse pointer over it.

* Set the value of the `slackHoverFillAlpha` attribute between `0` (transparent) and `100` (opaque), to specify the transparency of the slack bar fill color when you hover the mouse pointer over it.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "datatable": {
        ...
        "datacolumn": [{
            ...
            "text": [{
                ...
            }]
        }]
    },
    "categories": [{
            "category": [{
                ...
            }]
        },
        {
            "category": [{
                ...
            }]
        }
    ],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        "hoverFillColor": "#F4BEFF",
        "hoverFillAlpha": "80",
        "slackHoverFillColor": "#CEFF1F",
        "slackHoverFillAlpha": "80",
        "task": [{
                "start": "10/06/2014",
                "end": "01/21/2015",
                "percentComplete": "20",
                "slackHoverFillColor": "#F50EF1",
                "slackHoverFillAlpha": "80"
            },
            {
                ...
            }
        ]
    }
}
```

The chart will look as shown below:

![Gantt-Chart-GIF-5](/gif/standard-charts-gantt-chart-gif-5.gif)

Click [here](http://jsfiddle.net/fusioncharts/cgqe3esp/) to edit the above chart.

### Create task bars that look like task groups

Set the value of the `showAsGroup` attribute to `1`, to visually represent a task as a parent group.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "datatable": {
        ...
        "datacolumn": [{
            ...
            "text": [{
                ...
            }]
        }]
    },
    "categories": [{
            "category": [{
                ...
            }]
        },
        {
            "category": [{
                ...
            }]
        }
    ],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        ...
        "task": [{
                "start": "10/06/2014",
                "end": "01/21/2015",
                "showAsGroup": "1",
                "label": "Production",
                "showLabel": "1"
            },
            {
                ...
            }
        ]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-11.js %}

Click [here](http://jsfiddle.net/fusioncharts/2mj0quk2/) to edit the above chart.

### Draw task bars with rounded corners

Set the value of the `taskBarRoundRadius` attribute to render task bars with rounded corners having a specific radius (equal to the value of this attribute) for the corners.

Refer to the code below:

```json
{
	"chart": {
		"taskBarRoundRadius": "6"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-12.js %}

Click [here](http://jsfiddle.net/fusioncharts/dehy0557/) to edit the above chart.

### Customize tool text for task bars

Use the following attributes to render custom tool text:

* Set the value of the `dateInToolTip` attribute to `1`, to render the date as part of the tooltip text.

* Set the value of the `plotToolText` attribute to the custom tool text for each task bar.

Refer to the code below:

```json
{
	"chart": {
		"dateInToolTip": "1",
		"plottooltext": "$processName{br} $label starting date $start{br}$label ending date $end",
	}	
}
```

The chart will look as shown below:

![Gantt-Chart-GIF-1](/gif/standard-charts-gantt-chart-gif-6.gif)

Click [here](http://jsfiddle.net/fusioncharts/n89ey0z9/) to edit the above chart.

### Add macros to tooltip variables

Add macros to configure dynamic and contextual content in tooltip. For instance, you can specify the tool text for milestones in the Gantt chart using the `milestoneToolText` attribute. Use the following macros specifically with Gantt charts:

* Specify the start time of a task using the `$start` macro.

* Specify the end time of a task using the `$end` macro.

* Specify the process name of a task using the `$processName` macro.

* Specify the label of a task using the `$label` macro.

* Specify the percentage of task completed (if provided) using the `$percentComplete` macro.

* Specify the milestone date using the `$date` macro.

* Specify the start date of the task that corresponds to a milestone using the `$taskStartDate` macro.

* Specify the end date of the task that corresponds to a milestone using the `$taskEndDate` macro.

* Specify the label of the task that corresponds to a milestone using the `$taskLabel` macro.

* Specify the percentage of completion (if provided) of the task that corresponds to a milestone, using the `$taskPercentComplete` macro.

* Specify the name of the process that corresponds to a milestone using the `$processName` macro.

## Configure date formats

Using FusionCharts Suite XT, you can input the date in one format and output it using a custom format.

### Set input date format

Specify the input date format for all the dates in your JSON data using the `dateFormat` attribute, which can take values in any of the following formats:

* mm/dd/yyyy

* dd/mm/yyyy

* yyyy/mm/dd

> This is a mandatory attribute to specify. Once you specify it with a specific format, all dates in your JSON data must conform to that format.

Refer to the code below:

```json
{
	"chart": {
		"dateFormat": "mm/dd/yyyy"
	}	
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-13.js %}

Click [here](http://jsfiddle.net/fusioncharts/03a0az67/) to edit the above chart.

### Set Input Time Format

In FusionCharts Suite XT, you must specify time in the 24-hour format as "hour:mins:secs (hh:mm:ss)" in the JSON/XML data. Use the following attributes to set the input time format.

* Specify the starting time for a task using the `start` attribute, which can be used with the `category` and the `task` objects.

* Specify the ending time for a task using the `end` attribute, which can be used with the `category` and the `task` objects.

### Set the output date format

You can configure the output date format to be different from the input date format. Set the output date format using the `outputDateFormat` attribute. You can also customize the output date format by using one or more of the predefined tokens with the `outputDateFormat` attribute. The supported tokens are given below:

* `dd` represents date in numeric format

* `mm` represents month in numeric format

* `yy` represents year (2 digits only) in numeric format

* `yyyy` represents year (4 digits only) in numeric format

* `hh` represents hour in numeric, 24-hour format

* `hh12` represents hour in numeric, 12-hour format

* `mn` represents minute in numeric format

* `ss` represents second in numeric format

* `ampm` represents AM/PM in 12-hour format

* `mnl` represents long (full) month name

* `mns` represents short (abbreviated) month name

* `dnl` represents long (full) week day name

* `mns` represents short (abbreviated) week day name

* `ds` represents suffix for the date (st, nd, rd, th, etc.)

Note: If you don't customize the output date format, then it will be the same as the input date format.

A few sample values along with the custom output date formats you can use to represent them are given below:

* Use `ddds mnl, yyyy` format to represent dates in formats like 21st March, 2018.

* Use `mnl dd yyyy` format to represent dates in formats like March 21 2018.

* Use `mns-dd-yy` format to represent dates in formats like 21-Mar-18.

* Use `mm/dd/yyyy` format to represent dates in formats like 3/7/2018.

* Use `dd-mm` format to represent dates in formats like 21-03.

* Use `dnl, ddds mnl yy` format to represent dates in formats like Friday, 21st March 18.

* Use `dd-mm-yyyy hh:mn:ss` format to represent date and time in formats like 21-7-2018 13:11:20.

* Use `dd-mm-yyyy hh12:mn:ss ampm` format to represent date and time in formats like 21-7-2018 1:11:20 PM.

* Use `hh12:mn:ss ampm` format to represent time in formats like 1:11:20 PM.

> The output format is not restricted to the examples listed above. Using the tokens, you can build your own custom date format templates.

## Add scroll to chart

The Gantt chart supports scrolling for both the data table and the Gantt view pane.

### Enable vertical scrolling

Vertical scrolling is enabled by default, depending on the height of your chart. If the number of processes fits within the height of the chart, vertical scrolling will not appear. You can manually enable vertical scrolling, if you want. To do so, set the value of the `useVerticalScrolling` attribute to `1`.

Refer to the code below:

```
{
	"chart": {
		"useVerticalScrolling": "1"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-14.js %}

Click [here](http://jsfiddle.net/fusioncharts/8vsdf0fw/) to edit the above chart.

### Enable scroll for the data table

The data table automatically starts to scroll when you add data columns that do not fit in the specified area of the grid. You can, however, use one of three following methods to disable the scrollbar:

* Increase the chart width so that the data-grid fits completely in one screen.

* Set the value of the `GanttWidthPercent` attribute to a lower value (between `0` and `100`) for the global `chart` object. This attribute indicates the percent space (width) the Gantt pane takes. If the Gantt takes lesser space, the grid will get more space and will fit in the full labels.

* Set the value of the `showFullDataTable` attribute to '0' for the chart object. This asks the chart to wrap and truncate the data labels and try to squeeze them in the required space (if possible)

Refer to the code below:

```json
{
	"chart": {
		"GanttWidthPercent": "50",
		"showFullDataTable": "0"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-15.js %}

Click [here](http://jsfiddle.net/fusioncharts/7tpLp7La/) to edit the above chart.

### Enable scrolling for the gantt pane

By default, the Gantt pane never automatically scrolls, unless you explicitly specify it. To enable scrolling for the Gantt pane, you need to decide which time frame should be visible in one screen of the Gantt pane. Once you decide and specify it for the chart, you will be able to see the rest of time frame when you scroll. Use the following attributes to customize scrolling:

* Set the value of the `GanttPaneDuration` attribute to the duration you want the Gantt pane to represent at a given point. 

* Set the value of the `GanttPaneDurationUnit` attribute to the unit of the duration you choose (such as y,m,d, h, mn, and s).

Note: You can assign any of the following values, each of which represent a different unit, to the `GanttPaneDurationUnit` attribute:

* Use `y` to represent the number of years to display.

* Use `m` to represent the number of months to display.

* Use `d` to represent the number of days to display.

* Use `h` to represent the number of hours to display.

* Use `mn` to represent the number of minutes to display.

* Use `s` to represent the number of seconds to display.

Refer to the code below:

```json
{
	"chart": {
		"ganttPaneDuration": "3",
	    "ganttPaneDurationUnit": "m"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-16.js %}

Click [here](http://jsfiddle.net/fusioncharts/abqs6hra/) to edit the above chart.

> Note: If the duration specified by you is more than the actual time span of the chart, the scroll bar for the Gantt pane is not displayed.

### Configure scroll properties

Use the following attributes to configure scroll cosmetics:

* Set the hex code of the color for the scrollbar using the `scrollColor` attribute.

* Specify the vertical padding between the scrollbar and the chart canvas using the `scrollPadding` attribute.

* Specify the vertical padding between the scrollbar and the chart canvas using the `scrollPadding` attribute.

* Specify the height of the scrollbar using the `scrollHeight` attribute.

* Specify the width of the scroll buttons using the `scrollBtnWidth` attribute.

* Specify the horizontal padding between the scroll bar and the scroll buttons using the `scrollBtnPadding` attribute.

* Specify whether scroll bars will be rendered as flat scroll bars using the `flatScrollBars` attribute. Set it to `1` to render the scroll bars as flat bars, or set it to `0` to render them with a gradient effect.

Refer to the code below:

```json
{
	"chart": {
		"scrollColor": "#CCCCCC",
		"scrollPadding": "4",
        "scrollHeight": "20",
        "scrollBtnWidth": "25",
        "scrollBtnPadding": "5"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-17.js %}

Click [here](http://jsfiddle.net/fusioncharts/2g6pffz5/) to edit the above chart.

> If you do not find this attribute in the data do not be surprised, as this attribute is set in the theme we are using for the fiddles.

### Scroll to a Specific Date

Specify the date from where the Gantt chart will initially render, using the `scrollToDate` attribute. This attribute will work only when the `GanttPaneDuration` and the `GanttPaneDurationUnit` attributes are set as per the requirement.

Refer to the code below:

```json
{
	"chart": {
		"scrollToDate": "08/24/2014"
	}
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-18.js %}

Click [here](http://jsfiddle.net/fusioncharts/wtgt049h/) to edit the above chart.

## Add Multiple Tasks to a Process

You may come across scenarios, where a process comprises multiple tasks. A Gantt chart allows you to create multiple tasks for processes by mapping tasks and processes using IDs.

In this section, you will see how to add multiple tasks to a process.

### Example Data to Plot: Employee Schedule

Assume that we have a Gantt chart showing the employee schedule where each employee is a process. For this chart, you might need to create multiple tasks for each employee.

For this example, let's plot a Gantt chart showing the scheduled work list for each employee during a particular week. You can visualize the data as shown in the table below. Note that all input dates are in mm/dd/yyyy hh:mm:ss format.

<table>
  <tr>
    <th>Employee Name </th>
    <th>Employee Id</th>
    <th>Team</th>
    <th>Allotted tasks for this week </th>
  </tr>
  <tr>
    <td>John.S</td>
    <td>EMP121</td>
    <td>Graphics</td>
    <td>Date: 7/21/2014 09:30:00 - 7/21/2014 17:00:00<br/>
    Task: Logo-I<br/><br/>
    Date: 7/22/2014 09:30:00 - 7/22/2014 16:30:00<br/>
    Task: Logo-II<br/><br/>
    Date: 7/23/2014 14:00:00 - 7/24/2014 16:30:00<br/>
    Task: Website Template</td>
  </tr>
  <tr>
    <td>David.G</td>
    <td>EMP122</td>
    <td>PHP</td>
    <td>Date: 7/21/2014 10:00:00 - 7/25/2014 14:30:00<br/>
    Task: PHP Blueprint</td>
  </tr>
  <tr>
    <td>Mary.P</td>
    <td>EMP123</td>
    <td>Testing</td>
    <td>Date: 7/21/2014 10:00:00 - 7/21/2014 15:30:00<br/>
    Task: Testing Specification<br/><br/>
    Date: 7/22/2014 09:30:00 - 7/22/2014 16:00:00<br/>
    Task: Testing tool research<br/><br/>
    Date: 7/23/2014 09:30:00 - 7/25/2014 16:30:00<br/>
    Task: Testing tool integration</td>
  </tr>
  <tr>
    <td>Andrew.H</td>
    <td>EMP124</td>
    <td>QA</td>
    <td>Date: 7/22/2014 09:30:00 - 7/22/2014 16:30:00<br/>
    Task: QA<br/><br/>
    Date: 7/23/2014 09:00:00 - 7/23/2014 16:30:00<br/>
    Task: QA<br/><br/>
    Date: 7/24/2014 09:30:00 - 7/25/2014 14:30:00<br/>
    Task: QA</td>
  </tr>
  <tr>
    <td>Neil.M</td>
    <td>EMP125</td>
    <td>Documentation</td>
    <td>Date: 7/25/2014 15:00:00 - 7/25/2014 16:59:00<br/>
    Task: Weekly Meet</td>
  </tr>
</table>

From the above data, you can deduce that:

* Each employee is a process.

* Each employee is assigned a unique ID that will be used to map the tasks with the employees.

* Each employee is assigned multiple tasks.

* Each task is assigned a unique ID (not shown in the table above).

When you dynamically generate JSON data for the Gantt chart from your database, in all probability, you will have internal IDs defined for each task and each process. You can use those IDs as the process ID and task ID.

### Convert to JSON

The above table when converted to JSON looks as under:

In the above JSON, we have:

* Defined the visual timeline (categories) to show days in the fourth week of July 2014.

* Defined each employee as a process and assigned the employee ID as process ID.

* Added each employee's team name and an additional data column.

* Defined each task with its own ID. Each task is linked to its employee using the process ID.

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-19.js %}

Click [here](http://jsfiddle.net/fusioncharts/9vq3pum8/) to edit the above chart.

### Show Projected vs Actual Dates

You can follow the technique of allocating multiple tasks to show the projected vs actual duration for different tasks. A Gantt chart with projected and actual timelines looks like the following:

{% embed_chart standard-charts-gantt-chart-example-20.js %}

Click [here](http://jsfiddle.net/fusioncharts/u5c0taws/) to edit the above chart.

In the above chart, you can see the time required by various tasks in a construction process. The projected time required is rendered in blue and the actual time required is rendered in gray.

### Add legend to projected vs actual chart

In the chart above, notice how color coding can help you distinguish between actual dates and projected dates. The labels "Planned" and "Actual" indicate which color indicates what. An even better way you can follow is to add a legend to the chart, using the following attributes:

* Specify the label for the legend using the `label` attribute.

* Specify the hex code for the color to be used for the legend using the `color` attribute.

* Specify the caption for the legend box using the `legendCaption` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
            "category": [{
                ...
            }]
        },
        {
            "category": [{
                ...
            }]
        }
    ],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        ...
        "task": [{
            ...
        }]
    },
    "legend": {
        "item": [{
                "label": "Planned",
                "color": "999999"
            },
            {
                "label": "Actual",
                "color": "4567aa"
            }
        ]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-21.js %}

Click [here](http://jsfiddle.net/fusioncharts/24hkmdn2/) to edit the above chart.

## Create Time-based Charts

Using FusionCharts Suite XT, you can create date-based and time-based charts, as well as charts that plot both date and time.

### Proper time format in Fusioncharts Suite XT

In FusionCharts Suite XT, you must specify time in the 24-hour format as "hour:mins:secs (hh:mm:ss)" in the JSON/XML data.

The 24-hour clock is a convention of time-keeping in which the day runs from midnight to midnight and is divided into 24 hours, numbered from 0 to 23. A time of the day is written in the 24-hour notation in the form hh:mm (for example 01:23) or hh:mm:ss (for example, 01:23:45), where hh (00 to 23) is the decimal number of full hours that have passed since midnight, mm (00 to 59) is the number of full minutes that have passed since the last full hour, and ss (00 to 59) is the number of seconds since the last full minute. In the 24-hour time notation, the day begins at midnight, 00:00 and the last minute of the day are that which begins at 23:59.

To specify a time in the JSON data, you need to define a `category` object. 

Refer to the code below:

```json
"category": [
    {
        "start": "00:00:00",
        "end": "23:59:59",
        "label": "Day"
    }
]
```

You can also define a `task` object. Refer to the code below:

```json
"task": {
    "processid": "EMP121",
    "start": "08:00:00",
    "end": "12:30:00",
    "label": "Morning Shift"
}
```

### Time-based Gantt chart

As an example, let's plot a time-based Gantt chart that represents the time shifts for each employee of the development division at Bakersfield Central. The chart's time span is a single day. Within that day, let's distribute the chart into time blocks and the working hours for each employee.

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-22.js %}

Click [here](http://jsfiddle.net/fusioncharts/6tcmp7oq/) to edit the above chart.

> Note that if you're using only time-based charts, you can specify 23:59:59 as 24:00:00 for ease of usage.

## Create Date+Time-based Charts

As an example here, let's plot a time-based Gantt chart to show the development division's work schedule over two days.

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-23.js %}

Click [here](http://jsfiddle.net/fusioncharts/d71yd3m0/) to edit the above chart.

## Add milestones to a chart

You can use milestones on a Gantt chart, to visually depict crucial dates. You can create your own milestones on the chart based on dates and tasks, and customize all of their visual properties, including the shapes (star or polygon), sizes, and colors. You can also add tool text for milestones. Use the following attributes to add milestones to a Gantt chart:

* Specify a date for a milestone using the `date` attribute.

* Specify the ID representing the task, to which a milestone is related, using the `taskId` attribute.

* Specify the color to be used to render a milestone using the `color` attribute.

* Specify the shape of a milestone using the `shape` attribute.

* Specify the tooltip text for a milestone, to be displayed when you hover the mouse pointer over it, using the `toolText` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
        "category": [{
            ...
        }]
    }],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            ...
        }]
    },
    "milestones": {
        "milestone": [{
            "date": "1/21/2015",
            "taskid": "7",
            "color": "#f8bd19",
            "shape": "star",
            "tooltext": "Development Complete"
        }, {
            "date": "3/28/2015",
            "taskid": "10",
            "color": "#f8bd19",
            "shape": "star",
            "tooltext": "Successful Completion of Campaign"
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-24.js %}

Click [here](http://jsfiddle.net/fusioncharts/4633o8kt/) to edit the above chart.

In the chart above, you can see milestones added to the "Social Media Optimization" Gantt chart, to show the completion of development and the successful completion of the campaign.

### Add custom milestone labels

You can add custom labels for milestones on a Gantt chart, using the attributes given below:

* Specify a custom label for a specific milestone using the `label` attribute.

* Set the font for the label of a specific milestone, using the `font` attribute.

* Set the font size for the label of a specific milestone, using the `fontSize` attribute.

* Set the font color for the label of a specific milestone, using the `fontColor` attribute.

* Format the label of a specific milestone in bold, by setting the value of the `fontBold` attribute to `1`.

* Format the label of a specific milestone in italic, by setting the value of the `fontItalic` attribute to `1`.

* Set the font for all milestones in the chart, using the `milestoneFont` attribute.

* Set the font size for all milestones in the chart, using the `milestoneFontSize` attribute.

* Set the font color for all milestones in the chart, using the `milestoneFontSize` attribute.

* Format labels of all milestones in bold, by setting the value of the `milestoneFontBold` attribute to `1`.

* Format labels of all milestones in italic, by setting the value of the `milestoneFontItalic` attribute to `1`.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
        "category": [{
            ...
        }]
    }],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            ...
        }]
    },
    "milestones": {
        "milestone": [{
            "date": "1/21/2015",
            "taskid": "7",
            "color": "#f8bd19",
            "shape": "star",
            "tooltext": "Successful Completion of Development",
            "label": "Development Complete",
            "color": "#587B17"
        }, {
            "date": "3/28/2015",
            "taskid": "10",
            "color": "#f8bd19",
            "shape": "star",
            "tooltext": "Successful Completion of Campaign",
            "label": "Campaign Complete",
            "color": "#4838D2"
        }]
    }
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-25.js %}

Click [here](http://jsfiddle.net/fusioncharts/u8nm6b2w/) to edit the above chart.

## Connect Tasks on Chart

You can draw connectors between any two tasks on the chart to show the process flow.

### Add Connectors

To draw a connector, specify the IDs of the tasks that you want to connect and where the connector joins the start and end task bar individually - at the start or at the end. Use the following attributes to add connectors between tasks:

* Specify the ID for the task from which the connector will begin, using the `fromTaskID` attribute.

* Specify the ID for the task at which the connector will end, using the `toTaskID` attribute.

* Specify whether a connector will connect the starting points of the source and destination tasks, by setting the value of the `fromTaskConnectStart` attribute to `1`.

* Specify whether a connector will connect the ending points of the source and destination tasks, by setting the value of the `toTaskConnectStart` attribute to `1`.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
        "category": [{
            ...
        }]
    }],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            ...
        }]
    },
    //Adding connectors to tasks using id's
    "connectors": [{
        "connector": [

            {
                "fromtaskid": "2",
                "totaskid": "3",
                "color": "#008ee4",
                "thickness": "2"
            }, {
                ...
            }, {
                "fromtaskid": "8",
                "totaskid": "9",
                "fromTaskConnectStart": "1",
                "color": "#008ee4",
                "thickness": "2"
            }
        ]
    }]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-26.js %}

Click [here](http://jsfiddle.net/fusioncharts/x87o9gms/) to edit the above chart.

For our "Social Media Optimization" Gantt chart, we can connect tasks in the following ways:

* Requirement interpretation can be done only after the customer survey is over.

* Concept brainstorming can begin only after market analysis.

* Testing/QA and documentation can begin at the same time.

### Configure hover effect for the connectors

Use the following attributes to configure hover effects in a Gantt chart:

* Specify whether hover effect will be enabled for the chart, by setting the value of the `showHoverEffect` attribute to `1.

* Specify whether mouse hover effect will be rendered on the connector lines, by setting the value of the `showConnectorHoverEffect` attribute to `1`. 

* Specify the hex code of the color the connector will have, when you hover the mouse pointer over it, using the `connectorHoverColor` attribute.

* Specify the transparency of the connector when you hover the mouse pointer over it (between `0` for transparent and `100` for opaque), using the `connectorHoverAlpha` attribute.

* Specify the thickness (in pixels) of the connector when you hover the mouse pointer over it (between `0` for transparent and `100` for opaque), using the `connectorHoverAlpha` attribute.

Refer to the code below:

```json
{
	"chart": {
		"showHoverEffect": "1",
		"showConnectorHoverEffect": "1",
		"connectorHoverColor":"#5b0101", 
        "connectorHoverAlpha":"60", 
        "connectorHoverThickness":"3"
	}
}
```

The chart will look as shown below:

![Gantt-Chart-GIF-7](/gif/standard-charts-gantt-chart-gif-7.gif)

Click [here](http://jsfiddle.net/fusioncharts/Lgocm9pu/) to edit the above chart.

## Add Trend-lines

You can use trend-lines and trend-zones to represent a target value and a target range, respectively. You can add them to your Gantt chart to mark an event for a particular data. For example, you can add a trend-line to indicate "Testing Start" or a trend-zone to show the Christmas vacation period.

### Create a trend-line

Use the following attributes to create a trend-line on a Gantt chart:

* Specify the start date for the trend-line using the `start` attribute.

* Specify the label for the trend-line using the `displayValue` attribute.

* Specify the hex code for the color of the trend-line using the `color` attribute.

* Specify the thickness for the trend-line using the `thickness` attribute.

* Specify whether the trend-line will be rendered as a dashed line using the `dashed` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
        "category": [{
            ...
        }]
    }],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            ...
        }]
    },
    "trendlines": [{
        "line": [{
            "start": "01/21/2015",
            "displayValue": "Testing Start",
            "color": "#333333",
            "thickness": "2",
            "dashed": "1"
        }]
    }]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-27.js %}

Click [here](http://jsfiddle.net/fusioncharts/rww0qmmk/) to edit the above chart.

### Create a trend-zone

Use the following attributes to create a trend-zone on a Gantt chart:

* Specify whether a trend-zone will be displayed in the chart by setting the value of the `isTrendZone` attribute to `1`.

* Specify the start date for the trend-zone using the `start` attribute.

* Specify the end date for the trend-zone using the `end` attribute.

* Specify the contents of the label for the trend-zone using the `displayValue` attribute.

* Specify the color of the trend-zone using the `color` attribute.

* Specify the transparency of the trend-zone (between `0` for transparent and `100` for opaque) using the `alpha` attribute.

Refer to the code below:

```json
{
    "chart": {
        ...
    },
    "categories": [{
        "category": [{
            ...
        }]
    }],
    "processes": {
        ...
        "process": [{
            ...
        }]
    },
    "tasks": {
        "task": [{
            ...
        }]
    },
    "trendlines": [{
        "line": [{
            "start": "12/25/2014",
            "end": "12/31/2014",
            "displayvalue": "Christmas Week",
            "istrendzone": "1",
            "alpha": "20",
            "color": "#FF5904"
        }]
    }]
}
```

The chart will look as shown below:

{% embed_chart standard-charts-gantt-chart-example-28.js %}

Click [here](http://jsfiddle.net/fusioncharts/j2bnxcnn/) to edit the above chart.

## Events in Gantt chart

You can configure the following events for Gantt charts:

* The `dataPlotClick` event is fired when you click on a data plot point.

* The `processClick` event is fired when you click on a process.

* The `processRollOver` event is fired when you move the mouse pointer over a process. Note that in a Gantt chart, process element represents one process on the Gantt chart. You can show team members, projects, or a task list as a process - there's no restriction to that.

* The `processRollOut` event is fired when you move the mouse pointer out of a process.

* The `categoryClick` event is fired when you click on a category.

* The `categoryRollOver` event is fired when you move the mouse pointer over a category.

* The `categoryRollOut` event is fired when you move the mouse pointer out of a category.

* The `connectorClick` event is fired when you click on a connector.

* The `connectorRollOver` event is fired when you move the mouse pointer over a connector.

* The `connectorRollOut` event is fired when you move the mouse pointer out of a connector.

* The `milestoneClick` event is fired when you click on a connector.

* The `milestoneRollOver` event is fired when you move the mouse pointer over a connector.

* The `milestoneRollOut` event is fired when you move the mouse pointer out of a connector.

The chart will look as shown below:

{% embed_all standard-charts-gantt-chart-example-29.js %}

Click [here](http://jsfiddle.net/fusioncharts/wcpqhtr6/) to edit the above chart.