{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales Figures for Top Three Juice Flavors",
            "subCaption": "2014",
            "xAxisName": "Flavor",
            "yAxisName": "Amount",
            "numberPrefix": "$",
            "theme": "fusion"
        },

        "data": [{
            "label": "Apple",
            "value": "810000",
            "link": "JavaScript:showAlert('Apple, $810K')"
        }, {
            "label": "Cranberry",
            "value": "620000",
            "link": "JavaScript:showAlert('Cranberry, $620K')"
        }, {
            "label": "Grapes",
            "value": "350000",
            "link": "JavaScript:showAlert('Grapes, $350K')"
        }]
    },
    events: {
        'dataplotClick': function(evt, args) {
            window.showAlert = function(name, value) {
                alert("[Example for the 'JavaScript:' prefix] \n" +  name+ " juice sales for the last year: " + value);
            };
        }
    }
}