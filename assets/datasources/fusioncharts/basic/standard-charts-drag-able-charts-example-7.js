{
    type: 'dragcolumn2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Inventory status - Bakersfield Central",
            "subCaption": "Top 5 Food items",
            "xAxisName": "Food Item",
            "yAxisName": "No. of Units",
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
            "dashed": "1",
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
        'beforeRender': function(evt, arg) {
            var controllers = document.createElement('div');
            controllers.setAttribute('id', 'tableCont-2');
            controllers.style.display = "inline-block";
            controllers.innerHTML = "<div id='tableCont-2' style='width:470px;padding-left:10px'><table id='data-table-2' style='margin: 5px auto;border-collapse: collapse;border: 1px solid;border-bottom: 2px solid #6baa01;'></table></div>";
            //Display container div and write table
            arg.container.parentNode.insertBefore(controllers, arg.container.nextSibling);
        },
        'rendered': function(evt, arg) {
            var chartIns = evt && evt.sender,
                data = chartIns && chartIns.getDataWithId(),
                dataTable = document.getElementById("data-table-2"),
                i,
                j,
                len = data && data.length,
                len2,
                tableStr = "",
                tdStyle = "border:1px solid #6baa01;padding: 10px 5px;min-width: 70px;text-align: center",
                thStyle = "background-color: #008ee4;color:#fff;border: 1px solid #6baa01;padding: 10px 5px;min-width: 70px;text-align: center";

            for (var i = 0; i < len; i += 1) {
                tableStr += "<tr>";
                len2 = data[i].length;
                for (j = 0; j < len2; j += 1) {
                    if (i == 0) {
                        if (data[i][j] == "") {
                            tableStr += "<th style='" + thStyle + "'>Food Item</th>";
                        } else {
                            tableStr += "<th style='" + thStyle + "'>" + data[i][j] + "</th>";
                        }
                    } else {
                        if (data[i][j] == "") {
                            tableStr += "<td style='" + tdStyle + "'>empty</td>";
                        } else {
                            tableStr += "<td style='" + tdStyle + "'>" + data[i][j] + "</td>";
                        }
                    }
                }
                tableStr += "</tr>"
            }

            dataTable.innerHTML = tableStr;
        }
    }
}