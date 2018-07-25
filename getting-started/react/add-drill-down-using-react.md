---
title: Adding Drill Down using React | FusionCharts
description: This article focuses on drill down charts.
heading: Adding Drill Down using React
chartPresent: true
---

In FusionCharts, you can create unlimited levels of drill-down charts with a single data source. The parent chart contains all chart data—for the parent chart as well as all levels of descendant (child, grandchild) charts. The links to all descendant charts are also defined in the parent chart.

You can drill-down into the descendant charts by clicking the data plot items of the parent chart. The descendant charts can either replace the parent chart, with an option to drill-up, or they can open in new windows or frames.

Create linked charts by following the steps given below:

1. Create the JSON/XML data for the parent chart. This is called the parent data source.

2. Append the data string or the data URL for the descendant charts within the parent data source. If you append the data string, the data for each descendant chart is embedded within the parent data source and is linked using unique data identifiers.

Once you implement the steps above, the FusionCharts JavaScript class takes care of the rest.

### Features of the FusionCharts JavaScript Class

* It automatically creates and shows a detailed descendant chart, when you click on the corresponding data plot item link in the parent chart.

* It clones all chart configuration settings from the parent chart to create the descendant charts.

* It accepts specific properties for descendant charts when you configure them using the [configureLink()](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-methods.html#configureLink) function.

* It uses events to notify your code when a link is invoked, a link item is opened, or a link item is closed.

* It supports drill-down to an unlimited number of levels.

As an example here, we will consider a simple scenario of a parent chart with the single level of drill-down.

The parent chart is a column 2D chart that shows the yearly sales of the top three juice flavors, for the last year. When you click on the data plot for a particular flavor of juice, it drills-down to show a pie 2D chart that shows the quarterly sales figures for that flavor.

The above chart, when rendered, looks like the following:

{% embed_chart add-drill-down-using-react-example-1.js %}

The JSON data to render the above chart:

```json
{
    "chart": {
        "caption": "Top 3 Juice Flavors",
        "subcaption": "Last year",
        "xaxisname": "Flavor",
        "yaxisname": "Amount (In USD)",
        "numberprefix": "$",
        "theme": "fusion",
        "rotateValues": "0"
    },
    "data": [{
        "label": "Apple",
        "value": "810000",
        "link": "newchart-xml-apple"
    }, {
        "label": "Cranberry",
        "value": "620000",
        "link": "newchart-xml-cranberry"
    }, {
        "label": "Grapes",
        "value": "350000",
        "link": "newchart-xml-grapes"
    }],
    "linkeddata": [{
        "id": "apple",
        "linkedchart": {
            "chart": {
                "caption": "Apple Juice - Quarterly Sales",
                "subcaption": "Last year",
                "numberprefix": "$",
                "theme": "fusion",
                "rotateValues": "0",
                "plottooltext": "$label, $dataValue,  $percentValue"
            },
            "data": [{
                "label": "Q1",
                "value": "157000"
            }, {
                "label": "Q2",
                "value": "172000"
            }, {
                "label": "Q3",
                "value": "206000"
            }, {
                "label": "Q4",
                "value": "275000"
            }]
        }
    }, {
        "id": "cranberry",
        "linkedchart": {
            "chart": {
                "caption": "Cranberry Juice - Quarterly Sales",
                "subcaption": "Last year",
                "numberprefix": "$",
                "theme": "fusion",
                "plottooltext": "$label, $dataValue,  $percentValue"
            },
            "data": [{
                "label": "Q1",
                "value": "102000"
            }, {
                "label": "Q2",
                "value": "142000"
            }, {
                "label": "Q3",
                "value": "187000"
            }, {
                "label": "Q4",
                "value": "189000"
            }]
        }
    }, {
        "id": "grapes",
        "linkedchart": {
            "chart": {
                "caption": "Grapes Juice - Quarterly Sales",
                "subcaption": "Last year",
                "numberprefix": "$",
                "theme": "fusion",
                "rotateValues": "0",
                "plottooltext": "$label, $dataValue,  $percentValue"
            },
            "data": [{
                "label": "Q1",
                "value": "45000"
            }, {
                "label": "Q2",
                "value": "72000"
            }, {
                "label": "Q3",
                "value": "95000"
            }, {
                "label": "Q4",
                "value": "108000"
            }]
        }
    }]
}
```

The full code of the above sample is given below:

```
import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
	type: 'column2d',
	width: '700',
	height: '400',
	dataFormat: 'jsonurl',
	dataSource: {
	    "chart": {
	        "caption": "Top 3 Juice Flavors",
	        "subcaption": "Last year",
	        "xaxisname": "Flavor",
	        "yaxisname": "Amount (In USD)",
	        "numberprefix": "$",
	        "theme": "fusion",
	        "rotateValues": "0"
	    },
	    "data": [{
	        "label": "Apple",
	        "value": "810000",
	        "link": "newchart-xml-apple"
	    }, {
	        "label": "Cranberry",
	        "value": "620000",
	        "link": "newchart-xml-cranberry"
	    }, {
	        "label": "Grapes",
	        "value": "350000",
	        "link": "newchart-xml-grapes"
	    }],
	    "linkeddata": [{
	        "id": "apple",
	        "linkedchart": {
	            "chart": {
	                "caption": "Apple Juice - Quarterly Sales",
	                "subcaption": "Last year",
	                "numberprefix": "$",
	                "theme": "fusion",
	                "rotateValues": "0",
	                "plottooltext": "$label, $dataValue,  $percentValue"
	            },
	            "data": [{
	                "label": "Q1",
	                "value": "157000"
	            }, {
	                "label": "Q2",
	                "value": "172000"
	            }, {
	                "label": "Q3",
	                "value": "206000"
	            }, {
	                "label": "Q4",
	                "value": "275000"
	            }]
	        }
	    }, {
	        "id": "cranberry",
	        "linkedchart": {
	            "chart": {
	                "caption": "Cranberry Juice - Quarterly Sales",
	                "subcaption": "Last year",
	                "numberprefix": "$",
	                "theme": "fusion",
	                "plottooltext": "$label, $dataValue,  $percentValue"
	            },
	            "data": [{
	                "label": "Q1",
	                "value": "102000"
	            }, {
	                "label": "Q2",
	                "value": "142000"
	            }, {
	                "label": "Q3",
	                "value": "187000"
	            }, {
	                "label": "Q4",
	                "value": "189000"
	            }]
	        }
	    }, {
	        "id": "grapes",
	        "linkedchart": {
	            "chart": {
	                "caption": "Grapes Juice - Quarterly Sales",
	                "subcaption": "Last year",
	                "numberprefix": "$",
	                "theme": "fusion",
	                "rotateValues": "0",
	                "plottooltext": "$label, $dataValue,  $percentValue"
	            },
	            "data": [{
	                "label": "Q1",
	                "value": "45000"
	            }, {
	                "label": "Q2",
	                "value": "72000"
	            }, {
	                "label": "Q3",
	                "value": "95000"
	            }, {
	                "label": "Q4",
	                "value": "108000"
	            }]
	        }
	    }]
	},
};

// Trigerred when chart is rendered.
// Configures the linked charts.
const alterChart = (chart) => {
	chart.configureLink({
		type: 'pie2d',
		overlayButton: {
			message: 'Back',
			fontColor: '880000',
			bgColor: 'FFEEEE',
			borderColor: '660000',
		},
	}, 0);
};

ReactDOM.render(
  <ReactFC {...chartConfigs} onRender={alterChart} />,
  document.getElementById('root'),
);

```

Click [here](http://jsfiddle.net/fusioncharts/k7mn6j5s/ "@@open-newtab") to edit the above chart.