{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '450',
    height: '320',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 3 Juice Flavors",
            "subCaption": "Last year",
            "xAxisName": "Flavor",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Apple",
            "value": "810000",
            "link": "http://fusioncharts.com"
        }, {
            "label": "Cranberry",
            "value": "620000",
            "link": "http://fusioncharts.com"
        }, {
            "label": "Grapes",
            "value": "350000",
            "link": "http://fusioncharts.com"
        }]
    },
    "events": {
        "beforeDataUpdate": function(eventObj, dataObj) {
            console.log(eventObj);
            var header = document.getElementById('header');
            header.style.display = 'block';

            var tempDiv = document.createElement('div');
            var attrsTable = document.getElementById('attrs-table');
            var titleDiv, valueDiv;
            for (var prop in dataObj) {
                titleDiv = document.createElement('div');
                titleDiv.className = 'title';
                titleDiv.innerHTML = prop;

                valueDiv = document.createElement('div');
                valueDiv.className = 'value';
                valueDiv.innerHTML = dataObj[prop];

                tempDiv.appendChild(titleDiv);
                tempDiv.appendChild(valueDiv);
            }
            attrsTable.innerHTML = '';
            attrsTable.appendChild(tempDiv);
        }
    }
}