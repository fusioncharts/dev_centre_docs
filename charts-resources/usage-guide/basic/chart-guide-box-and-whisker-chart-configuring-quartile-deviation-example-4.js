{
    type: 'boxandwhisker2d',
    renderAt: 'chart-container',
    width: '500',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Distribution of annual salaries",
            "subcaption": "By Gender",
            "xAxisName": "Pay Grades",
            "YAxisName": "Salaries (In USD)",
            "numberPrefix": "$",
            "theme": "fusion",
            "showValues": "0",
            "drawQDConnector": "1",
            //To ignore the null data and draw a continuous connector
            "connectNullData ": "1"
        },
        "categories": [{
            "category": [{
                "label": "Grade 1"
            }, {
                "label": "Grade 2"
            }, {
                "label": "Grade 3"
            }]
        }],
        "dataset": [{
            "seriesname": "Male",
            "lowerboxcolor": "#008ee4",
            "upperboxcolor": "#6baa01",
            "data": [{
                "value": "2400,2000,2500,2800,3500,4000, 3700, 3750, 3880, 5000,5500,7500,8000,8200, 8400, 8500, 8550, 8800, 8700, 9000, 14000",
                "showQD": "1",
            }, {
                "value": "7500,9000,12000,13000,14000,16500,17000, 18000, 19000, 19500",
                "showQD": "0",
            }, {
                "value": "15000,19000,25000,32000,50000,65000",
                "showQD": "1",
            }]
        }, {
            "seriesname": "Female",
            "lowerboxcolor": "#e44a00",
            "upperboxcolor": "#f8bd19",
            "data": [{
                "value": "1900,2100,2300,2350,2400,2550,3000,3500,4000, 6000, 6500, 9000"
            }, {
                "value": "7000,8000,8300,8700,9500,11000,15000, 17000, 21000"
            }, {
                "value": "24000,32000,35000,37000,39000, 58000"
            }]
        }]
    }
}
