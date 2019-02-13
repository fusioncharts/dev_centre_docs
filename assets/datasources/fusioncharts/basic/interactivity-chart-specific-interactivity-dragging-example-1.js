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
                "value": "6000"
            }, {
                "value": "9500"
            }, {
                "value": "11900"
            }, {
                "value": "8000"
            }, {
                "value": "9700"
            }]
        }, {
            "seriesname": "Estimated Demand",
            "dashed": "1",
            "data": [{
                "value": "19000"
            }, {
                "value": "16500"
            }, {
                "value": "14300"
            }, {
                "value": "10000"
            }, {
                "value": "9800"
            }]
        }]
    },
    events: {
        'beforeRender': function(evt, arg) {
            var controllers = document.createElement('div'),
                tableStyle = "margin: 25px auto;border-collapse: collapse;border: 1px solid;border-bottom: 1px solid #6baa01",
                tdStyle = "border: 1px solid #6baa01;padding: 10px 5px;min-width: 70px;text-align: center",
                tdStyle2 = "border: 1px solid #6baa01;padding: 10px 5px;min-width: 70px;text-align: center;background-color: #6baa01;color: #fff",
                thStyle = "background-color: #008ee4;color: #ffffff;border: 1px solid #6baa01;padding: 10px 5px;min-width: 70px;text-align: center";
            controllers.setAttribute('id', 'tableCont');
            controllers.style.display = "inline-block";
            controllers.innerHTML = "<div id='tableCont' style='width:600pxmargin: 25px auto;border-collapse: collapse'><table><tr><td style='border-color: #fff'></td><th style='" + thStyle + "'>Poultry</th><th style='" + thStyle + "'>Rice</th><th style='" + thStyle + "'>PeanutButter</th><th style='" + thStyle + "'>Salmon</th><th style='" + thStyle + "'>Cereal</th></tr><tr><td style='" + tdStyle2 + "'>EstimatedDemand</td><td style='" + tdStyle + "'id='est-1'>19000</td><td style='" + tdStyle + "' id='est-2'>16500</td><td style='" + tdStyle + "'id='est-3'>14300</td><td style='" + tdStyle + "' id='est-4'>10000</td><td style='" + tdStyle + "'id='est-5'>9800</td></tr></table></div>";
            //Display container div and write table
            arg.container.parentNode.insertBefore(controllers, arg.container.nextSibling);
        },
        'dataplotDragEnd': function(evt, arg) {
            var dtIndx = arg && arg.dataIndex,
                val = arg && parseInt(arg.endValue, 10);

            document.getElementById('est-' + dtIndx).innerHTML = val;
        },

        'dataRestored': function(evtObj) {
            var estimatedOrigValues = ["19000", "16500", "14300", "10000", "9800"],
                numVals = estimatedOrigValues.length,
                i,
                val;

            for (var i = 0; i < numVals; i += 1) {
                val = estimatedOrigValues[i];

                document.getElementById('est-' + (i + 1)).innerHTML = val;
            }
        }
    }
}
