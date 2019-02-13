{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
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
    },
    events: {
        'beforeRender': function(evt, args) {
            // Create container div for data table
            var tableCont = document.createElement('div');
            tableCont.setAttribute('id', 'table-container');
            // Append container div to page
            args.container.parentNode.insertBefore(tableCont, args.container.nextSibling);
        },
        'renderComplete': function(evt, args) {
            var chart = evt.sender,
                data = chart.getDataAsCSV(),
                rows,
                row,
                i,
                length,
                tableBody = '',
                tableHeader = '';

            // get all the rows by splitting data with '\n' seperator
            rows = data.replace(/"/g, '').split('\n');

            // td element with css styling
            var td = '<td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:##F5F5F5; font-size:11px;">';

            // th element with css styling
            var th = '<td style="padding:5px; text-align:center; border:1px solid #e7e7e7; background-color:#f0f0f0; font-size:11px; color:#ff0000">';

            // retrieve the data from the rows and compute body string from the data rows
            for (var i = 1, length = rows.length; i < length; i++) {
                row = rows[i].split(',');
                tableBody += '<tr>' + td + row[0] + '</td>' + td + row[1] + '</td></tr>';
            }

            // compute header string from first row
            row = rows[0].split(',');
            tableHeader = '<tr>' + th + row[0] + '</th>' + th + row[1] + '</th></tr>';

            // create the table string and append it to the table container
            document.getElementById('table-container').innerHTML = '<table><tbody>' + tableHeader + tableBody + '</tbody</table>';
        }
    }
}