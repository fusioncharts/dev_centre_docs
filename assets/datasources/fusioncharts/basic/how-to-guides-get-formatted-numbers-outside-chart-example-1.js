{
    type: 'dragcolumn2d',
    renderAt: 'chart-container',
    id: "fc",
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Inventory status - Bakersfield Central",
            "subCaption": "Top 5 Food items",
            "xAxisName": "Food Item",
            "yAxisName": "No. of Units",
            "showRestoreBtn": "0",
            "allowAxisChange": "0",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Poultry"
            }, {
                "label": "Rice"
            }, {
                "label": "Peanut Butter"
            }, {
                "label": "Salmon"
            }, {
                "label": "Cereal"
            }]
        }],
        "dataset": [{
            "seriesname": "Available Stock",
            "allowDrag": "0",
            "data": [{
                "id": "P_AS",
                "value": "6000"
            }, {
                "id": "R_AS",
                "value": "9500"
            }, {
                "id": "PB_AS",
                "value": "11900"
            }, {
                "id": "S_AS",
                "value": "8000"
            }, {
                "id": "C_AS",
                "value": "9700"
            }]
        }, {
            "seriesname": "Estimated Demand",
            "allowDrag": "0",
            "data": [{
                "id": "P_ED",
                "value": "19000"
            }, {
                "id": "R_ED",
                "value": "16500"
            }, {
                "id": "PB_ED",
                "value": "14300"
            }, {
                "id": "S_ED",
                "value": "10000"
            }, {
                "id": "C_ED",
                "value": "9800"
            }]
        }]
    },
    events: {
        'beforeRender': function(evt, args) {
            // create wrapper div for values table
            var tableDiv = document.createElement('div');
            tableDiv.setAttribute('id', 'tableCont');
            // form table inside wrapper div
            tableDiv.innerHTML = "<table id='data-table'></table>";
            // setting css styles for wrapper div
            tableDiv.style.cssText = 'width: 100%;';

            // setting css styles for table
            var table = tableDiv.getElementsByTagName('table').item(0);
            table.style.cssText = 'margin: 25px auto; margin-left:5px;border-collapse: collapse; border: 1px solid; border-bottom: 2px solid #6ba01;';

            //Create wrapper div for 'format data' button
            var buttonDiv = document.createElement('div');
            buttonDiv.setAttribute('id', 'btnCont');
            //setting css styles for wrapper div that holds the button
            buttonDiv.style.cssText = 'margin:5px;';

            //Adding the 'Format Data' button inside the wrapper div
            buttonDiv.innerHTML = "<input type='button' id='btn'>";
            args.container.appendChild(tableDiv);
            args.container.appendChild(buttonDiv);
        },
        'rendered': function(evt, arg) {
            var feedTable = function(init) {
                    var chartIns = document.getElementById("fc"),
                        data = chartIns && chartIns.getData && chartIns.getData(),
                        dataTable = document.getElementById("data-table"),
                        len = data && data.length,
                        tableStr = "",
                        len2,
                        i,
                        j;

                    for (var i = 0; i < len; i += 1) {
                        tableStr += "<tr>";
                        len2 = data[i].length;
                        for (j = 0; j < len2; j += 1) {
                            if (i == 0) {
                                if (data[i][j] == "") {
                                    tableStr += "<th>Item</th>";
                                } else {
                                    tableStr += "<th>" + data[i][j] + "</th>";
                                }
                            } else {
                                if (data[i][j] == "") {
                                    tableStr += "<td>empty</td>";
                                } else if (isNaN(data[i][j]) || init === true) {
                                    tableStr += "<td>" + data[i][j] + "</td>";
                                } else {
                                    tableStr += "<td>" + chartIns.formatNumber(data[i][j]) + "</td>";
                                }
                            }
                        }
                        tableStr += "</tr>"
                    }
                    dataTable.innerHTML = tableStr;
                    var tableDiv = document.getElementById('tableCont');
                    var table = tableDiv.getElementsByTagName('table').item(0);
                    // setting css styles for table header cells
                    var th = table.getElementsByTagName('th');
                    for (var i = 0; i < th.length; i++) {
                        th[i].style.cssText = 'background-color:#008ee4; color:#ffffff; border:1px solid #6baa01; padding:10px 5px; min-width:70px; text-align:center;';
                    }

                    // setting css styles for table data cells
                    var td = table.getElementsByTagName('td');
                    for (var i = 0; i < td.length; i++) {
                        td[i].style.cssText = 'border:1px solid #6baa01; padding:10px 5px; min-width:70px; text-align:center;';
                    }
                },
                btn = document.getElementById("btn");

            btn.value = "Format Data";
            btn.onclick = feedTable;

            feedTable(true);
        }
    }
}
