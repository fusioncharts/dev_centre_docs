---
title: FusionTime Attributes | FusionChartsgit 
description: This article contains the list of fusion time attributes.
heading: Attributes
---

This article contains the list of attributes of FusionTime. The attributes have been differentiated by FusionTime components.

## Time Axis

The `xAxis` object is used to configure components of Time Axis. You can create the `xAxis` object under `dataSource`.

**Syntax:**

```javascript
new FusionCharts({
    type: 'timeseries',
    dataSource: {
		xAxis {
			plot: ' ', //Column Name
			timemarker: [{
				// Attributes of Time Marker
			}],
			binning: { }, //Multipliers for each time unit
			outputTimeFormat: { }, //date/time format
			initialInterval: { } //the spread of the active window
		}
    },
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`plot`</td>
		<td>String</td>
		<td>Defines the column, which will be plotted along this axis.</td>
	</tr>
	<tr>
		<td>`timeMarker`</td>
		<td>Array(Time Marker Configuration)</td>
		<td>Array of `TimeMarkerConfigs` that will be shown along the axis.</td>
	</tr>
	<tr>
		<td>`binning`</td>
		<td>Object</td>
		<td>An object to specify multipliers for each time unit in an array format.</td>
	</tr>
	<tr>
		<td>`outputTimeFormat`</td>
		<td>Object</td>
		<td>An object to specify the date-time format for a specific time unit.</td>
	</tr>
	<tr>
		<td>`initialInterval`</td>
		<td>Object</td>
		<td>An object to set the initial spread of the active window.</td>
	</tr>
	<tr>
</table>

#### Style Time Axis

You can add style to the x-Axis components using `style` object under `xaxis` object.

```javascript
new FusionCharts({
    "type": 'timeseries',
    "dataSource": {
		xAxis {
				"plot": ' ', //Column Name
				"timemarker": [{
						"style": {
								"tick-mark": { }, //SVGStyle | String
								"tick-mark-major": { }, //SVGStyle | String
								"tick-mark-minor": { }, //SVGStyle | String
								"label": { }, //SVGStyle | String
								"label-major": { }, //SVGStyle | String
								"label-minor": { }, //SVGStyle | String
								"label-context": { } //SVGStyle | String
						}
        }]
		}
    },
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`tick-mark`</td>
		<td>SVGStyle</td>
		<td>Styles both major and minor ticks.</td>
	</tr>
	<tr>
		<td>`tick-mark-major`</td>
		<td>SVGStyle</td>
		<td>Styles the major tick of the time axis.</td>
	</tr>
	<tr>
		<td>`tick-mark-minor`</td>
		<td>SVGStyle</td>
		<td>Styles the minor tick of the time axis.</td>
	</tr>
	<tr>
		<td>`label`</td>
		<td>SVGStyle</td>
		<td>Styles the labels of major and minor ticks on time axis.</td>
	</tr>
	<tr>
		<td>`label-major`</td>
		<td>SVGStyle</td>
		<td>Styles the labels of major ticks on time axis.</td>
	</tr>
	<tr>
		<td>`label-minor`</td>
		<td>SVGStyle</td>
		<td>Styles the labels of minor ticks on time axis.</td>
	</tr>
	<tr>
		<td>`label-context`</td>
		<td>SVGStyle</td>
		<td>Styles the contextual label of the time axis.</td>
	</tr>
</table>

### Binning

To add multipliers for each time unit you can create a `binning` object under `xaxis` object.

```javascript
new FusionCharts({
    type: 'timeseries',
    dataSource: {
        xAxis: {
			binning: {
				"year": [Array of multipliers] // Ex - [1,2,3,5,10]
				"month": [Array of multipliers] // Ex - [1,2,3,4,6]
				"day": [Array of multipliers] // Ex - [1,2,3,5,6,10,15]
				"hour": [Array of multipliers] // Ex - [1,2,3,4,6,8,12]
				"minute": [Array of multipliers] // Ex - [1,2,3,4,5,6,10,12,15,20,30]
				"second": [Array of multipliers] // Ex - [1,2,3,4,5,6,10,12,15,20,30]
				"millisecond": [Array of multipliers] // Ex - [10,20,50,100,200,250,500]
			}
		},
	}
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`year`</td>
		<td>Array</td>
		<td>An array to specify the year's multipliers.</td>
	</tr>
	<tr>
		<td>`month`</td>
		<td>Array</td>
		<td>An array to specify the month's multipliers. Valid multipliers are: 1, 2, 3, 4, 6.</td>
	</tr>
	<tr>
		<td>`day`</td>
		<td>Array</td>
		<td>An array to specify the days's multipliers. Valid multipliers are: 1, 2, 3, 5, 6, 10, 15.</td>
	</tr>
	<tr>
		<td>`hour`</td>
		<td>Array</td>
		<td>An array to specify the hour's multipliers. Valid multipliers are: 1, 2, 3, 4, 6, 8, 12.</td>
	</tr>
	<tr>
		<td>`minute`</td>
		<td>Array</td>
		<td>An array to specify the minute's multipliers. Valid multipliers are: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30.</td>
	</tr>
	<tr>
		<td>`second`</td>
		<td>Array</td>
		<td>An array to specify the second's multipliers. Valid multipliers are: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30.</td>
	</tr>
	<tr>
		<td>`millisecond`</td>
		<td>Array</td>
		<td>An array to specify the millisecond's multipliers. Valid multipliers are: 10, 20, 50, 100, 200, 250, 500.</td>
	</tr>
</table>

### Output Time Format

To specify the date-time format for a specific time unit, create a `outputTimeFormat` object under `xaxis` object.

```javascript
new FusionCharts({
    type: 'timeseries',
    dataSource: {
		xAxis:{
			outputTimeFormat:{
				year: " ", //%Y - 2018
				month: " ", //%B, %Y - September, 2018
				day: " ", //%B %-d, %Y - November 11, 2018
				hour: " ", //%b %-d, %Y, %-I %p - Nov 5, 2018, 4 PM
				minute: " ", //%b %-d, %Y, %-I:%-M %p - Nov 5, 2018, 4:24 PM
				second: " ", //%b %-d, %Y, %-I:%-M:%-S %p - Nov 5, 2018, 4:25:30 PM
				millisecond: " " //%b %-d, %Y, %-I:%-M:%-S:%-L %p- Nov 29, 2017, 4:29:12.075 PM
			}
		}
	}
})
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`year`</td>
		<td>String</td>
		<td>Sets the format of the data bin where the time unit is year.</td>
	</tr>
	<tr>
		<td>`month`</td>
		<td>String</td>
		<td>Sets the format of the data bin where the time unit is month.</td>
	</tr>
	<tr>
		<td>`day`</td>
		<td>String</td>
		<td>Sets the format of the data bin where the time unit is day.</td>
	</tr>
	<tr>
		<td>`hour`</td>
		<td>String</td>
		<td>Sets the format of the data bin where the time unit is hour.</td>
	</tr>
	<tr>
		<td>`minute`</td>
		<td>String</td>
		<td>Sets the format of the data bin where the time unit is minute.</td>
	</tr>
	<tr>
		<td>`second`</td>
		<td>String</td>
		<td>Sets the format of the data bin where the time unit is second.</td>
	</tr>
	<tr>
		<td>`millisecond`</td>
		<td>String</td>
		<td>Sets the format of the data bin where the time unit is millisecond.</td>
	</tr>
</table>

### Initial Interval

To set the initial spread of the active window of the time navigator create a `initialInterval` object under `xaxis` object.

```javascript
new FusionCharts({
    "type": 'timeseries',
    "dataSource": {
		"xAxis":{
			"initialInterval": {
				"from": "2016-01-01 12:00:00",
				"to": "2016-01-31 12:00:00"
        	}
		}
	}
})
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`from`</td>
		<td>String</td>
		<td>Sets the value from where you want the active window to start.</td>
	</tr>
	<tr>
		<td>`to`</td>
		<td>String</td>
		<td>Sets the value upto which you want your active window to be displayed.</td>
	</tr>
</table>

## Time Markers

To configure the time marker of the chart you can create the `timemarker` object under `xaxis` object.

```javascript
new FusionCharts({
    type: 'timeseries',
    dataSource: {
        xAxis {
            plot: ' ', //Column Name
            timemarker: [{
                // Attributes of Time Marker
                start: ' ', //Start Date
                end: ' ', //End Date
                label: ' ', //Label of the Time Axis
                timeFormat: ' ', //Time format
                type: 'full', // Full time marker
                // Define the frequency, at which the cyclic time marker will be repeated.
                repeat {
                    unit: ' ', //Defines the time unit for the time marker.
                    multiplier: ' ', //Defines the multiplier of the time unit.
                    type: ' ' //Renders the time marker from top to bottom of the canvas
                }
            }]
        }
    },
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`label`</td>
		<td>String</td>
		<td>Sets the label of the time marker.</td>
	</tr>
	<tr>
		<td>`start`</td>
		<td>String</td>
		<td>Sets the start time of the marker. Corresponds to the start of the date/time.</td>
	</tr>
	<tr>
		<td>`end`</td>
		<td>String</td>
		<td>Sets the end time of the marker. If this is attribute is not specified, the marker is represented as a line and not as a band. Corresponds to the end of the given date/time.</td>
	</tr>
	<tr>
		<td>`timeFormat`</td>
		<td>String</td>
		<td>Sets the date/time format and specifies the start and end values for the time marker.</td>
	</tr>
	<tr>
		<td>`unit`</td>
		<td>String</td>
		<td>Defines the time unit for the time marker.</td>
	</tr>
	<tr>
		<td>`multiplier`</td>
		<td>Number</td>
		<td>Sets the multiplier of the time unit. Default is 1.</td>
	</tr>
	<tr>
		<td>`type`</td>
		<td>String</td>
		<td>Setting this attribute to <strong>full</strong> will render the time marker (instance & band) from top to bottom (vertically) of the canvas.</td>
	</tr>
</table>

### Style Time Marker Componemts

You can add style to the time marker components using `style` object under `timemarker` object.

```javascript
new FusionCharts({
    type: 'timeseries',
    dataSource: {
        xAxis {
            timemarker: [{
								"style": {
										"marker": { }, // Affects style of marker box, line and notch
										"marker:hover": { }, // Affects hover style of marker box, line and
										// notch
										"marker-box": { },
										"marker-box:hover": { },
										"marker-line": { },
										"marker-line:hover": { },
										"marker-notch": { },
										"marker-notch:hover": { },
										"text": { },
										"text:hover": { }
								}
            }]
        }
    },
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`marker`</td>
		<td>SVGStyle</td>
		<td>Styles the marker box, line, and notch.</td>
	</tr>
	<tr>
		<td>`marker:hover`</td>
		<td>SVGStyle</td>
		<td>Styles the marker box, line and notch when hovered.</td>
	</tr>
	<tr>
		<td>`marker-box`</td>
		<td>SVGStyle</td>
		<td>Styles the marker box of the time marker.</td>
	</tr><tr>
		<td>`marker-box:hover`</td>
		<td>SVGStyle</td>
		<td>Styles the marker box of the time marker when hovered.</td>
	</tr>
	<tr>
		<td>`marker-line`</td>
		<td>SVGStyle</td>
		<td>Styles the marker line of the time marker.</td>
	</tr>
	<tr>
		<td>`marker-line:hover`</td>
		<td>SVGStyle</td>
		<td>Styles the marker line of the time marker when hovered.</td>
	</tr>
	<tr>
		<td>`marker-notch`</td>
		<td>SVGStyle</td>
		<td>Styles the notch of the time marker.</td>
	</tr>
	<tr>
		<td>`marker-notch:hover`</td>
		<td>SVGStyle</td>
		<td>Styles the notch of the time marker when hovered.</td>
	</tr>
	<tr>
		<td>`text`</td>
		<td>SVGStyle</td>
		<td>Styles the text of the time marker.</td>
	</tr>
	<tr>
		<td>`text:hover`</td>
		<td>SVGStyle</td>
		<td>Styles the text of the time marker when hovered.</td>
	</tr>
</table>

## Time Navigator

To configure the time navigator of the chart, you can create the `navigator` object under `dataSource`.

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    navigator: {
      enabled: Boolean,
      scrollbar: {},
      window: {}
    }
  }
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`enabled`</td>
		<td>Boolean</td>
		<td>Enables the time navigator of the chart. </td>
	</tr>
	<tr>
		<td>`scrollbar`</td>
		<td>Object</td>
		<td>An object in which you can customize the scroll bar of the time navigator.</td>
	</tr>
	<tr>
		<td>`window`</td>
		<td>Object</td>
		<td>An object in which you can customize the window of the time navigator.</td>
	</tr>
</table>

### Style Time Navigator Components

Time Navigator of a time-series chart can be divided into two sub-sections:

- Window
- Scroll Bar

You can add style to the time marker components using `style` object under `window` and `scrollbar` object.

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    navigator: {
      enabled: Boolean,
      scrollbar: {
        style: {
          button: {}, //SVGStyle | String
          arrow: {}, //SVGStyle | String
          scroller: {}, //SVGStyle | String
          grip: {}, //SVGStyle | String
          track: {} //SVGStyle | String
        }
      },
      window: {
        style: {
          handle: {}, //SVGStyle | String
          "handle-grip": {}, //SVGStyle | String
          mask: {} //SVGStyle | String
        }
      }
    }
  }
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
		<td>`button`</td>
		<td>SVGStyle</td>
		<td>Styles the buttons present on the left and right most corner of the scroll bar.</td>
	</tr>
		<td>`arrow`</td>
		<td>SVGStyle</td>
		<td>Styles the arrows present inside the buttons of the scroll bar.</td>
	</tr>
		<td>`scroller`</td>
		<td>SVGStyle</td>
		<td>Styles the scroller of the scroll bar.</td>
	</tr>
		<td>`grip`</td>
		<td>SVGStyle</td>
		<td>Styles the grip of the scroll bar.</td>
	</tr>
		<td>`track`</td>
		<td>SVGStyle</td>
		<td>Styles the track of the scroll bar.</td>
	</tr>
		<td>`handle`</td>
		<td>SVGStyle</td>
		<td>Styles the handle element of the scroll bar window.</td>
	</tr>
		<td>`handle-grip`</td>
		<td>SVGStyle</td>
		<td>Styles the handle-grip of the handle element.</td>
	</tr>
		<td>`mask`</td>
		<td>SVGStyle</td>
		<td>Styles the mask of the scroll bar window.</td>
	</tr>
</table>

## Y Axes

To configure the y-axis of the chart you can create the `yAxis` object under `xaxis` object.

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    yAxis: [
      {
        plotType: " ", //To set the plot type out the 'plot' object
        min: " ", //Minimum value of the axis
        max: " ", //Maximum value of the axis
        format: {
          //Measures
          prefix: " ",
          suffix: " "
        },
        plot: {
          //Column header for the measure which is plotted against the Y Axis
        },
        type: " ", //Plot type to render the chart
        title: " ", //Title of the axis
		aggregation: " " //Aggregate Function
		connectNullData: " " //Set the value to `true` to connect null data
      }
    ]
  }
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`plot`</td>
		<td>String, Array of Strings, Array of Objects</td>
		<td>It maps to the column header for the measure which is plotted against the Y Axis. If it's an array of strings, all the strings are plotted against the same axis. If its an array of objects, the developer can additionally specify the type of the plot as well as the aggregation strategy used to represent the measure.</td>
	</tr>
	<tr>
		<td>`plotType`</td>
		<td>String</td>
		<td>This attribute sets the type of the the data plot to render the chart. By default the type is a line. It controls the plot type for all names specified.</td>
	</tr>
	<tr>
		<td>`min`</td>
		<td>Number</td>
		<td>This attribute sets the minimum value of the axis. The value of this attribute is ignored when the value is greater than the minimum value of the data plotted against the axis.</td>
	</tr>
	<tr>
		<td>`max`</td>
		<td>Number</td>
		<td>This attribute sets the maximum value of the axis. The value of this attribute is ignored when the value is less than the maximum value of the data plotted against the axis.</td>
	</tr>
	<tr>
		<td>`format`</td>
		<td>String</td>
		<td>This attribute sets the configuration of the measures plotted on the axis. If you set the `formatter` function, the provided `prefix` and `suffix` properties are ignored.</td>
	</tr>
	<tr>
		<td>`title`</td>
		<td>String</td>
		<td>Allows you to rename the title of the axis. If not specified, the axis title will be the same as the column name joined by hyphens.</td>
	</tr>
	<tr>
		<td>`aggregation`</td>
		<td>String</td>
		<td>Allows you to specify alternative aggregation strategies for the measures being plotted. It controls the aggregation strategy for all plots specified.</td>
	</tr>
	<tr>
		<td>`type`</td>
		<td>String</td>
		<td>This attribute sets the type of the the data plot to render the chart. It is used when you want to specify the chart type under `plot` object.</td>
	</tr>
	<tr>
		<td>`connectNullData`</td>
		<td>Boolean</td>
		<td>Connects the null data for line and area plots.</td>
	</tr>
</table>

### Style Connecting Lines

You can add style for connecting lines of null data using two methods:

- Under `yAxis` Object
- Under global `plotConfig` object

```javascript
new FusionCharts({
    type: "timeseries",
    dataSource: {
        "yAxis": [{
            "plot": [{
                "type": "area",
                "style": {
                    "plot.null": Style,
                    "line.null": Style,
                    "area.null": Style
                }
            }]
        }],
        "plotConfig": {
            "line": {
                "style": {
                    "plot.null": Style,
                    "line.null": Style
                }
            },
            "area": {
                "style": {
                    "plot.null": Style,
                    "line.null": Style,
                    "area.null": Style
                }
            }
        }
    }
});
```

## Plot Configuration

To configure the plot of the chart, you can create the `plotConfig` object under `dataSource`.

<div class="code-wrapper">
<ul class='code-tabs extra-tabs'>
    <li class='active'><a data-toggle='all'>All Data Plots</a></li>
    <li><a data-toggle='specific'>Specific Data Plot</a></li>
</ul>
<div class='tab-content extra-tabs'>
<div class='tab all-tab active'>
<pre><code class="language-javascript">
new FusionCharts({
  type: "timeseries",
  dataSource: {
    plotConfig: {
		generic: {
			connectNullData: " " //Set the value to `true` to connect null data
		} //Style too be applied across the chart
	}
  }
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

<div class='tab specific-tab'>
<pre><code class="language-javascript">
new FusionCharts({
  type: "timeseries",
  dataSource: {
    plotConfig: {
			style: {
				line: {
					connectNullData: " " //Set the value to `true` to connect null data
				} //Style too be applied only to line data plots
			}
  	}
	}
});
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>
</div>

</div>
</div>

<table>
	<tr>
		<th>Attributes</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`generic`</td>
		<td>Object</td>
		<td>Style specified within this object is applied across the chart.</td>
	</tr>
	<tr>
		<td>`connectNullData`</td>
		<td>Boolean</td>
		<td>Connects the null data for line and area plots.</td>
	</tr>
</table>

## Crossline

You can add style to the crossline using `style` object under `crossline` object.

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    crossline: {
      style: {
        line: {}, //SVGStyle | String
        tag: {}, //SVGStyle | String
        label: {}, //SVGStyle | String
        "vertical-line": {}, //SVGStyle | String
        "vertical-tag": {}, //SVGStyle | String
        "vertical-label": {}, //SVGStyle | String
        "horizontal-line": {}, //SVGStyle | String
        "horizontal-tag": {}, //SVGStyle | String
        "horizontal-label": {} //SVGStyle | String
      }
    }
  }
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`line`</td>
		<td>SVGStyle</td>
		<td>Styles the line of the crossline.</td>
	</tr>
	<tr>
		<td>`tag`</td>
		<td>SVGStyle</td>
		<td>Styles the tag of the crossline.</td>
	</tr>
	<tr>
		<td>`label`</td>
		<td>SVGStyle</td>
		<td>Styles the label of the crossline.</td>
	</tr>
	<tr>
		<td>`vertical-line`</td>
		<td>SVGStyle</td>
		<td>Styles the vertical line of the crossline.</td>
	</tr>
	<tr>
		<td>`vertical-tag`</td>
		<td>SVGStyle</td>
		<td>Styles the tag of the vertical line of the crossline.</td>
	</tr>
	<tr>
		<td>`vertical-label`</td>
		<td>SVGStyle</td>
		<td>Styles the label of the vertical line of the crossline.</td>
	</tr>
	<tr>
		<td>`horizontal-line`</td>
		<td>SVGStyle</td>
		<td>Styles the horizontal line of the crossline.</td>
	</tr>
	<tr>
		<td>`horizontal-tag`</td>
		<td>SVGStyle</td>
		<td>Styles the tag of the horizontal line of the crossline.</td>
	</tr>
	<tr>
		<td>`horizontal-label`</td>
		<td>SVGStyle</td>
		<td>Styles the label of the horizontal line of the crossline.</td>
	</tr>
</table>

## Reference Lines

To configure the reference line of the chart, you can create the `referenceLine` object under `dataSource`.

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    referenceLine: [
      {
        label: " ", //Label of the reference line
        value: " " //Value of the reference line
      }
    ]
  }
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`label`</td>
		<td>String</td>
		<td>The label which gets displayed when you hover the reference lines.</td>
	</tr>
	<tr>
		<td>`value`</td>
		<td>Number</td>
		<td>This attribute specifies the value at which the reference line is drawn.</td>
	</tr>
</table>

## Reference Zone

To configure the reference zone of the chart, you can create the `referenceZone` object under `yAxis` object.

```javascript
new FusionCharts({
    type: "timeseries",
    dataSource: {
        yAxis: [{
            // Reference Zone
            "referenceZone": [{
                "label": " ", //Label of the reference zone
                "valueMax": " ", //Max value of the reference zone
                "valueMin": " " //Min value of the reference zone
            }],
        }]
    }
})
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`label`</td>
		<td>String</td>
		<td>The label which gets displayed when you hover the reference zones.</td>
	</tr>
	<tr>
		<td>`valueMax`</td>
		<td>Number</td>
		<td>This attribute specifies the max value upto which you want to create a reference zone.</td>
	</tr>
	<tr>
		<td>`valueMin`</td>
		<td>Number</td>
		<td>This attribute specifies the min value from where you want to create a reference zone.</td>
	</tr>
</table>

### Style Reference Zone

Reference zone of a time-series chart can be styled using `style` object under `referenceZone` object.

```javascript
new FusionCharts({
    type: "timeseries",
    dataSource: {
        yAxis: [{
            // Reference Zone
            "referenceZone": [{
                "label": " ", //Label of the reference zone
                "valueMax": " ", //Max value of the reference zone
                "valueMin": " ", //Min value of the reference zone
                style: {
                    "marker": { }, //Style | String
                    "marker:hover": { }, //Style | String
                    "marker-zone": { }, //Style | String
                    "marker-zone:hover": { }, //Style | String
                    "marker-tag": { }, //Style | String
                    "text": { }, //Style | String
                    "marker-text": { }, //Style | String
                    "marker-notch": { }, //Style | String
                    "marker-notch:hover": { }, //Style | String
                    "marker-notch:hover": { }, //Style | String
                    "marker-notch-connector": { }, //Style | String
                    "marker-notch-connector:hover": { } //Style | String
                }
            }],
        }]
    }
})
```

## Tooltip

To configure the tooltip of the chart, you can create the `tooltip` object under the `dataSource`.

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    tooltip: {
      enabled: "false" // Disables the Tooltip
    }
  }
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`enabled`</td>
		<td>String</td>
		<td>Setting this attribute to `true` enables the visibility of the tooltip for the chart.</td>
	</tr>
</table>

### Style Tooltip Components

You can add style to the tooltip using `style` object under `tooltip` object.

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    tooltip: {
      enabled: Boolean,
      style: {
        container: {}, //HTMLStyle | String
        text: {}, //HTMLtyle | String
        header: {}, //HTMLStyle | String
        body: {} //HTMLStyle | String
      }
    }
  }
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`container`</td>
		<td>HTMLStyle</td>
		<td>Customizes the containing box of the tooltip.</td>
	</tr>
	<tr>
		<td>`text`</td>
		<td>HTMLStyle</td>
		<td>Customizes the text of the tooltip.</td>
	</tr>
	<tr>
		<td>`header`</td>
		<td>HTMLStyle</td>
		<td>Customizes the header at the top of the tooltip.</td>
	</tr>
	<tr>
		<td>`body`</td>
		<td>HTMLStyle</td>
		<td>Customizes all the text other than the `header` text.</td>
	</tr>
</table>

## Data Markers

To configure the data marker of the chart, you can create the `dataMarker` object under the `dataSource`.

```javascript
new FusionCharts({
  type: "timeseries",
  dataSource: {
    dataMarker: [
      {
		time: " ", //Time on which the data marker will be shown
		value: " ", //Specifies the y-axis label on which the data marker will be applied
        identifier: " ", //Defines a character to be shown
        timeFormat: " ", //Format of the date
        tooltext: " " //Text in the tooltip
      }
    ]
  }
});
```

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`time`</td>
		<td>String</td>
		<td>Sets the time on which the data marker will be shown. Corresponds to the start of the given date/time.</td>
	</tr>
	<tr>
		<td>`value`</td>
		<td>String</td>
		<td>Sets the y-axis label on which the data marker will be applied.</td>
	</tr>
	<tr>
		<td>`timeFormat`</td>
		<td>String</td>
		<td>Sets the format of the date to specify the time for the marker.</td>
	</tr>
	<tr>
		<td>`type`</td>
		<td>String</td>
		<td>Sets the type of the marker. Example, `flag`.</td>
	</tr>
	<tr>
		<td>`identifier`</td>
		<td>Character</td>
		<td>This attribute defines a character to be shown within the data marker.</td>
	</tr>
	<tr>
		<td>`tooltext`</td>
		<td>String</td>
		<td>The text specified in this attribute is displayed in the tooltip when you hover over the data marker.</td>
	</tr>
</table>

## Chart Configuration and Root JSON Attributes

<table>
	<tr>
		<th>Attribute</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>`type`</td>
		<td>Number</td>
		<td>Sets the chart type.</td>
	</tr>
	<tr>
		<td>`width`</td>
		<td>Number</td>
		<td>Sets the width of the chart canvas.</td>
	</tr>
	<tr>
		<td>`height`</td>
		<td>Number</td>
		<td>Sets the height of the chart canvas.</td>
	</tr>
	<tr>
		<td>`animation`</td>
		<td>Boolean</td>
		<td>This attribute gives you the option to control animation in your charts. If you do not want to animate any part of the chart, set this as 0.</td>
	</tr>
	<tr>
		<td>`animationDuration`</td>
		<td>Number</td>
		<td>This attribute sets the animation duration, if animation is set to 1.</td>
	</tr>
	<tr>
		<td>`paletteColors`</td>
		<td>Array(String)</td>
		<td>Using paletteColors attribute, you can specify your custom list of hex colors for the data items. The list of colors have to be separated by comma e.g., paletteColors: `#FF0000`, `#0372AB`, `#FF5904`.</td>
	</tr>
	<tr>
		<td>`clickURL`</td>
		<td>String</td>
		<td>The entire chart can now act as a hotspot. Use this URL to define the hotspot link for the chart. The link can be specified in FusionCharts Link format.</td>
	</tr>
	<tr>
		<td>`hasRTLText`</td>
		<td>Boolean</td>
		<td>This attribute, when set to 1, indicates to the chart that the text (rendered on the chart) may contain RTL characters and the textual display has to be managed accordingly.</td>
	</tr>
	<tr>
		<td>`showPrintMenuItem`</td>
		<td>Boolean</td>
		<td>Whether to show "Print Chart" item in the context menu of the chart? Even if you opt to hide the item in context menu, you can still opt to invoke print() JavaScript method of the chart to print the same.</td>
	</tr>
	<tr>
		<td>`exportEnabled`</td>
		<td>Boolean</td>
		<td>Whether the chart will allow exporting to images, PDFs, SVG or XLSX.</td>
	</tr>
	<tr>
		<td>`exportAction`</td>
		<td>String</td>
		<td>In case of server-side exporting, the action specifies whether the exported image will be sent back to client as download, or whether it'll be saved on the server.</td>
	</tr>
	<tr>
		<td>`exportHandler`</td>
		<td>String</td>
		<td>In case of server side exporting, this refers to the path of the server-side export handler (the ready-to-use scripts that we provide).</td>
	</tr>
	<tr>
		<td>`exportFormats`</td>
		<td>String</td>
		<td>Lets you configure what output formats to allow for export of chart, in the export context menu, and also customize the label for each menu item. The attribute value should be a pipe (|) delimited separated key-value pair. Example: exportFormats: 'PNG=Export as High Quality Image&#124;JPG&#124;PDF=Export as PDF File'</td>
	</tr>
	<tr>
		<td>`exportAtClientSide`</td>
		<td>Boolean</td>
		<td>This attribute when set to 1, enables the client-side export feature.</td>
	</tr>
	<tr>
		<td>`exportShowMenuItem`</td>
		<td>Number</td>
		<td>Whether the menu items related to export (e.g., Save as JPEG etc.) will appear in the context menu of chart.</td>
	</tr>
	<tr>
		<td>`exportTargetWindow`</td>
		<td>String</td>
		<td>In case of server-side exporting and when using download as action, this lefts you configure whether the return image, PDF, SVG or XLSX will open in same window (as an attachment for download), or whether it will open in a new window.</td>
	</tr>
	<tr>
		<td>`exportFileName`</td>
		<td>String</td>
		<td>Using this attribute you can specify the name (excluding the extension) of the output (export) file.</td>
	</tr>
	<tr>
		<td>`baseChartMessageImageHAlign`</td>
		<td>String</td>
		<td>This attribute allows to set a custom horizontal alignment for all images displayed as chart messages. Possible values are `left`, `right` and `middle`.</td>
	</tr>
	<tr>
		<td>`baseChartMessageImageVAlign`</td>
		<td>String</td>
		<td>This attribute allows to set a custom vertical alignment for all images displayed as chart messages. Possible values are `top`, `bottom` and `middle`.</td>
	</tr>
	<tr>
		<td>`loadMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed when a chart begins to load. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., loadStartMessageFont, loadStartMessageFontSize, loadStartMessageColor. If message keys are not specified, base cosmetics are used. </br> To display an image as the chart message, prefix I- to the image URL. </br> Alignment and properties of the image can be configured using attributes such as loadMessageHAlign, loadMessageVAlign, loadMessageAlpha and so on.</td>
	</tr>
	<tr>
		<td>`loadMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart loadMessage, this attribute allows to set a custom horizontal alignment for the image. Possible values are left, right and middle.</td>
	</tr>
	<tr>
		<td>`loadMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart loadMessage, this attribute allows to set a custom vertical alignment for the image.  Possible values are top, bottom and middle.</td>
	</tr>
	<tr>
		<td>`typeNotSupportedMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed when the specified chart type is not supported. To display an image as the chart message, prefix I- to the image URL.</td>
	</tr>
	<tr>
		<td>`typeNotSupportedMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart typeNotSupportedMessage, this attribute allows to set a custom horizontal alignment for the image. Possible values are left, right and middle.</td>
	</tr>
	<tr>
		<td>`typeNotSupportedMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart typeNotSupportedMessage, this attribute allows to set a custom vertical alignment for the image. Possible values are top, bottom and middle.</td>
	</tr>
	<tr>
		<td>`renderErrorMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed if an error is encountered while rendering the chart. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., renderErrorMessageFont, renderErrorMessageFontSize, renderErrorMessageColor. </br> If message keys are not specified, base cosmetics are used. To display an image as the chart message, prefix I- to the image URL. Alignment and properties of the image can be configured using attributes such as renderErrorMessageHAlign, renderErrorMessageVAlign, renderErrorMessageAlpha and so on.</td>
	</tr>
	<tr>
		<td>`renderErrorMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart renderErrorMessage, this attribute allows to set a custom horizontal alignment for the image. Possible values are left, right and middle.</td>
	</tr>
	<tr>
		<td>`renderErrorMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart renderErrorMessage, this attribute allows to set a custom vertical alignment for the image. Possible values are top, bottom and middle.</td>
	</tr>
	<tr>
		<td>`dataLoadStartMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed when chart data begins loading. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., dataLoadStartMessageFont, dataLoadStartMessageFontSize, dataLoadStartMessageColor. If message keys are not specified, base cosmetics are used. </br> Alignment and properties of the image can be configured using attributes such as dataLoadStartMessageHAlign, dataLoadStartMessageVAlign, dataLoadStartMessageAlpha and so on. To display an image as the chart message, prefix I- to the image URL. </td>
	</tr>
	<tr>
		<td>`dataLoadStartMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataLoadStartMessage, this attribute allows to set a custom horizontal alignment for the image. Possible values are left, right and middle.</td>
	</tr>
	<tr>
		<td>`dataLoadStartMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataLoadStartMessage, this attribute allows to set a custom vertical alignment for the image. Possible values are top, bottom and middle.</td>
	</tr>
	<tr>
		<td>`dataEmptyMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed if the data loaded for a chart is empty. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., dataEmptyMessageFont, dataEmptyMessageFontSize, dataEmptyMessageColor. If message keys are not specified, base cosmetics are used. </br> To display an image as the chart message, prefix I- to the image URL. Alignment and properties of the image can be configured using attributes such as dataEmptyMessageHAlign, dataEmptyMessageVAlign, dataEmptyMessageAlpha and so on. </td>
	</tr>
	<tr>
		<td>`dataEmptyMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataEmptyMessage, this attribute allows to set a custom horizontal alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataEmptyMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataEmptyMessage, this attribute allows to set a custom vertical alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataLoadErrorMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed if an error is encountered while loading chart data. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., dataLoadErrorMessageFont, dataLoadErrorMessageFontSize, dataLoadErrorMessageColor. If message keys are not specified, base cosmetics are used. </br> Alignment and properties of the image can be configured using attributes such as dataLoadErrorMessageHAlign, dataLoadErrorMessageVAlign, dataLoadErrorMessageAlpha and so on. To display an image as the chart message, prefix I- to the image URL.</td>
	</tr>
	<tr>
		<td>`dataLoadErrorMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataLoadErrorMessage, this attribute allows to set a custom horizontal alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataLoadErrorMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataLoadErrorMessage, this attribute allows to set a custom vertical alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataInvalidMessage`</td>
		<td>String</td>
		<td>This attribute allows to set the message to be displayed if the data to be loaded for the chart is invalid. Additional properties like the font face, size, and color can be set by suffixing the property name with the corresponding message key, e.g., dataInvalidMessageFont, dataInvalidMessageFontSize, dataInvalidMessageColor. If message keys are not specified, base cosmetics are used. </br> Alignment and properties of the image can be configured using attributes such as dataInvalidMessageHAlign, dataInvalidMessageVAlign, dataInvalidMessageAlpha and so on. To display an image as the chart message, prefix I- to the image URL.</td>
	</tr>
	<tr>
		<td>`dataInvalidMessageImageHAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataInvalidMessage, this attribute allows to set a custom horizontal alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
	<tr>
		<td>`dataInvalidMessageImageVAlign`</td>
		<td>String</td>
		<td>If an image is displayed as the chart dataInvalidMessage, this attribute allows to set a custom vertical alignment for the image. <strong>Default Value:</strong> baseChartMessageImageHAlign</td>
	</tr>
</table>

## Date/time Format

`outputTimeFormat` attribute is used to specify the date-time format of the chart. You can specify the date-time format for a specific time unit using `outputTimeFormat`.

List of predefined date/time format is given below:

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
		<td>A literal percent sign (%). <strong>This token might seem useless, but remember that the tokens reserve the % symbol for their own use. This token acts as an escape character to literally allow a % symbol in a date string.</strong></td>
	</tr>
</table>

**Example:**

```javascript
unitDefaultFormats = {
  Year: "%Y", // 2018
  Month: "%b %Y", // Jan 2018
  Day: "%b %d, %Y", // Jan 01, 2018
  Hour: "%b %d, %Y %H hrs", // Jan 01, 2018 23 hrs
  Minute: "%b %d, %Y %H:%M", // Jan 01, 2018 23:34
  Second: "%b %d, %Y %H:%M:%S", // Jan 01, 2018 23:34:26
  Millisecond: "%b %d, %Y %H:%M:%S:%L" // Jan 01, 2018 23:34:26:123
};
```

## Paddings

In addition to the tokens listed above, it is often necessary to specify padding within the date/time format. For example - **12/02/2018**, **12/ 2/2018** and **12/2/2018** all represent 2nd December 2018. The only difference between the three dates is that the **day** part of the date string has different padding:

- The first example is padded with a zero.
- The second example has been padded with space.
- The third example has no padding.

To handle the above cases, the padding modifiers are listed below:

| Padding          | Description                                 |
| ---------------- | ------------------------------------------- |
| `-` (Dash)       | No padding (For example, **12/02/2018**)    |
| `_` (Underscore) | Space padding (For example, **12/ 2/2018**) |
| `0` (Zero)       | Zero padding (For example, **12/2/2018**)   |

> The paddings are always placed after every token's % symbol. The default value padding of the date/time format of a time-series chart is `0`.