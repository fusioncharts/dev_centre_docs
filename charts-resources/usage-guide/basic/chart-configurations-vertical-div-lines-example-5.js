{
    type: 'line',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Website Visitors",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "Visitors",
            "anchorRadius": "5",
            "showValues": "0",

            //Vertical grid customization
            "numVDivLines": "5",
            "showAlternateHGridColor": "1",
            "showAlternateVGridColor": "1",
            "alternateVGridColor": "#bee6ff",
            "alternateHGridColor": "#f4fbff",
            "alternateVGridAlpha": "30",
            //Theme
            "theme": "fint"
        },

        "data": [{
            "label": "Mon",
            "value": "5123"
        }, {
            "label": "Tue",
            "value": "4233"
        }, {
            "label": "Wed",
            "value": "5507"
        }, {
            "label": "Thu",
            "value": "4110"
        }, {
            "label": "Fri",
            "value": "5529"
        }, {
            "label": "Sat",
            "value": "5803"
        }, {
            "label": "Sun",
            "value": "6202"
        }]
    }
}
