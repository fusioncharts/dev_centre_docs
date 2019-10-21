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
        'beforeRender': function(event, args) {
            var tableCont = document.createElement('div'),
                thStyle = "background-color: #008ee4;color: #fff; border: 1px solid #6baa01;padding: 10px 5px;min-width: 70px;text-align: center",
                tdStyle = "background-color: #fff;color: #6baa01; border: 1px solid #6baa01; padding: 10px 5px;min-width: 70px;text-align: center",
                strHTML = "";
            tableCont.setAttribute('id', 'tableCont');
            tableCont.setAttribute('style', 'padding-left: 10px; width: 470px;');
            strHTML = "<table style='margin: 25px auto;border-collapse: collapse;border: 1px solid;border-bottom: 2px solid #6baa01'><tr><td style='border: 1px solid #fff;padding: 10px 5px;min-width: 70px;text-align: center'></td><th style='" + thStyle + "'>Poultry</th><th style='" + thStyle + "'>Rice</th><th style='" + thStyle + "'>Peanut Butter</th><th style='" + thStyle + "'>Salmon</th><th style='" + thStyle + "'>Cereal</th></tr><tr><td style='background-color: #6baa01;color: #fff; border: 1px solid #6baa01; padding: 10px 5px;min-width: 70px;text-align: center'>Available Stock</td><td id='est-0-0' style='" + tdStyle + "'>6000</td><td id='est-0-1' style='" + tdStyle + "'>9500</td><td id='est-0-2' style='" + tdStyle + "'>11900</td><td id='est-0-3' style='" + tdStyle + "'>8000</td><td id='est-0-4' style='" + tdStyle + "'>9700</td></tr><tr><td style='background-color: #6baa01;color: #fff; border: 1px solid #6baa01; padding: 10px 5px;min-width: 70px;text-align: center'>Estimated Demand</td><td id='est-1-0' style='" + tdStyle + "'>19000</td><td id='est-1-1' style='" + tdStyle + "'>16500</td><td id='est-1-2' style='" + tdStyle + "'>14300</td><td id='est-1-3' style='" + tdStyle + "'>10000</td><td id='est-1-4' style='" + tdStyle + "'>9800</td></tr></table>";
            tableCont.innerHTML = strHTML;
            args.container.parentNode.insertBefore(tableCont, args.container.nextSibling);
        },
        'dataplotDragEnd': function(evt, arg) {
            var dtIndx = arg && arg.dataIndex,
                datasetIndex = arg && arg.datasetIndex,
                val = arg && parseInt(arg.endValue, 10);

            document.getElementById('est-' + datasetIndex + '-' + dtIndx).innerHTML = val;
        },
        'dataRestored': function(evtObj) {
            var estimatedOrigValues = ["19000", "16500", "14300", "10000", "9800"],
                availableOrigValues = ["6000", "9500", "11900", "8000", "9700"],
                numVals = estimatedOrigValues.length,
                i,
                val;
            for (var i = 0; i < numVals; i += 1) {
                estimatedVal = estimatedOrigValues[i];
                availableVal = availableOrigValues[i];
                document.getElementById('est-0-' + i).innerHTML = estimatedVal;
                document.getElementById('est-1-' + i).innerHTML = availableVal;
            }
        }
    }
}