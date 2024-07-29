---
permalink: api/tutorials/view-data-of-existing-chart-on-page.html
title: View Data of Existing Chart | FusionCharts
description: This guide will show you how you can get tabular data from a chart and display it as a table alongside it.
heading: View Data of Existing Chart
chartPresent: true
layout: page
---

This guide will show you how you can get tabular data from a chart and display it as a table alongside it. Shown below is a chart that displays its data in a tabular format.

{% embed_chart view-data-of-existing-chart-on-page-example-1.js %}

<table>
<tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:#f0f0f0; font-size:11px; color:#ff0000">Month</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:#f0f0f0; font-size:11px; color:#ff0000">Amount
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Jan</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">420000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Feb</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">810000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Mar</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">720000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Apr</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">550000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">May</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">910000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Jun</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">510000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Jul</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">680000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Aug</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">620000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Sep</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">610000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Oct</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">490000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Nov</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">900000
</td></tr><tr><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">Dec</td><td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">730000</td></tr>
</table>


## Here we created a simple column 2D chart and use the data from this chart to build a HTML table.

First we get the data of the chart using the getDataAsCSV method like this.

```javascript
	var data = chart.getDataAsCSV(); 
```

Here the chart variable contains a reference to the chart object and the returned CSV is stored in the data variable

Next we parse the CSV and get the rows and columns of the HTML table.


```javascript
	var renderTable = function(chart, containerId) {
	    // After the chart is rendered we export the data as CSV, parse it and then create a markup
	    // equivalent to a table by parsing the exported CSV.
	    var data = chart.getDataAsCSV(),
	        rows,
	        row,
	        i,
	        length,
	        tableBody = '',
	        tableHeader = '';
	 
	    // Get all the rows by splitting data with '\n' seperator
	    rows = data.replace(/"/g, '').split('\n');
	 
	    // Retrieve the data from the rows and compute body string from the data rows
	    for (i = 1, length = rows.length; i < length; i++) {
	        row = rows[i].split(',');
	        tableBody += '<tr><td>' + row[0] + '</td><td>' + row[1] + '</td></tr>';
	    }
	 
	    // Compute header string from first row
	    row = rows[0].split(',');
	    tableHeader = '<tr><th>' + row[0] + '</th><th>' + row[1] + '</th></tr>';
	 
	    // Create the table string and append it to the table container
	    document.getElementById(containerId).innerHTML = '<table width ="500px;"><tbody>' + tableHeader + tableBody + '</tbody</table>';
	};
```


The renderTable function uses the CSV data from the data variable and builds a HTML table.

Finally we tap into the renderComplete event of the chart and call the method renderTable inside it. This ensures that a chart is always present before the table is populated.


```javascript
	revenueChart.addEventListener('renderComplete', function() {
    /* In the renderComplete event create the table, even when the data is updated by calling
     * setChartData method, this event will be fired and the updated data will reflect in the
     * table too, since renderTable will be called again.
     * Creating the table on 'render' event will not update the table everytime, it will only
     * update when render() method is called. */
	    renderTable(revenueChart, 'table-container');
	});
```


You can now call the render function now to display the chart anywhere on the page.

The full HTML code of the example is given here


```html
	<html>
	<head>
	<title>My first chart using FusionCharts Suite XT</title>
	<script type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
	<script type="text/javascript" src="fusioncharts/themes/fusioncharts.theme.fusion.js"></script>
	<script>
	FusionCharts.ready(function () {
	    // This data will be used to both render the chart and grid, since
	    // the grid need to be related with the chart.
	    var data =  {
	        "chart": {
	            "caption": "Harry's SuperMart",
	            "subCaption": "Monthly revenue for last year",
	            "xAxisName": "Month",
	            "yAxisName": "Amount",
	            "numberPrefix": "$",
	            "theme": "fusion"
	        },
	        "data": [{
	            "label": "Jan",
	            "value": "420000"
	        }, {
	            "label": "Feb",
	            "value": "810000"
	        }, {
	            "label": "Mar",
	            "value": "720000"
	        }, {
	            "label": "Apr",
	            "value": "550000"
	        }, {
	            "label": "May",
	            "value": "910000"
	        }, {
	            "label": "Jun",
	            "value": "510000"
	        }, {
	            "label": "Jul",
	            "value": "680000"
	        }, {
	            "label": "Aug",
	            "value": "620000"
	        }, {
	            "label": "Sep",
	            "value": "610000"
	        }, {
	            "label": "Oct",
	            "value": "490000"
	        }, {
	            "label": "Nov",
	            "value": "900000"
	        }, {
	            "label": "Dec",
	            "value": "730000"
	        }]
	    };
	 
	    var revenueChart = new FusionCharts({
	        type: 'column2d',
	        renderAt: 'chart-container',
	        width: '500',
	        height: '300',
	        dataFormat: 'json',
	        dataSource: data
	    });
	    var renderTable = function (chart, containerId) {
	        // After the chart is rendered we export the data as CSV, parse it and then create a markup
	        // equivalent to a table by parsing the exported CSV.
	        var data = chart.getDataAsCSV(),
	            rows,
	            row,
	            i,
	            length,
	            tableBody = '',
	            tableHeader = '';
	 
	        // Get all the rows by splitting data with '\n' seperator
	        rows = data.replace(/"/g, '').split('\n');
	 
	        // Retrieve the data from the rows and compute body string from the data rows
	        for (i = 1, length = rows.length; i < length; i++) {
	            row = rows[i].split(',');
	            tableBody += '<tr><td>' + row[0] + '</td><td>'+ row[1]+'</td></tr>' ;
	        }
	 
	        // Compute header string from first row
	        row = rows[0].split(',');
	        tableHeader = '<tr><th>' + row[0] + '</th><th>' + row[1]+'</th></tr>' ;
	 
	        // Create the table string and append it to the table container
	        document.getElementById(containerId).innerHTML = '<table width ="500px;"><tbody>'+tableHeader+tableBody+'</tbody</table>';
	 
	    };
	    revenueChart.addEventListener('renderComplete', function () {
	        // In the renderComplete event create the table, even when the data is updated by calling setChartData method, this event will be fired and the updated data will reflect in the table too, since renderTable will be called again.
	        // Creating the table on 'render' event will not update the table everytime, it will only update when render() method is called.
	        renderTable(revenueChart, 'table-container');
	    });
	    revenueChart.render();
	 
	  });
	</script>
	</head>
	<body>
	<div id="chart-container">FusionCharts will render here</div>
	<div id="table-container">The table corresponding to the chart will render here</div>
	</body>
	</html>
```

