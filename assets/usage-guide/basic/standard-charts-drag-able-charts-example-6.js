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
        'beforeRender': function(evt, args) {
            // creating div for controllers
            var controllers = document.createElement('div');

            // Create radio buttons inside div
            controllers.innerHTML = '<input type="button" value="Get Data" id="getdata_btn" style="margin-left:5px;padding-botom:15px;"/><div id="tableView" style="padding-top: 13px;"></div>';
            // set css style for controllers div
            controllers.style.cssText = '';
            args.container.parentNode.insertBefore(controllers, args.container.nextSibling);
            controllers.setAttribute('id', 'controllers');
        },
        'renderComplete': function(evt, arg) {
            function showData() {
                var chartIns = evt && evt.sender,
                    data = chartIns && chartIns.getJSONData();
                alert(JSON.stringify(data));
            }
            document.getElementById("getdata_btn").addEventListener("click", showData);
        }

    }
}