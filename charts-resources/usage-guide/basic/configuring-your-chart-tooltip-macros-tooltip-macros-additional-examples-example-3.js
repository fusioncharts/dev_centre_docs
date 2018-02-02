{
    type: 'boxandwhisker2d',
    renderAt: 'chart-container',
    width: '600',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Annual income of teachers (K-12)",
            "subcaption": "Gender-wise distribution (Last year)",                
            "xAxisName": "Pay Grades",
            "yAxisName": "Salaries (In USD)", 
            "numberPrefix": "$",
            "theme": "fint",
            "showValues": "0",
            "plotToolText": "$seriesName Teachers-$label  <br> <br> Max value: $maxDataValue <br> Min value: $minDataValue <br> <br> Q3: $Q3 <br> Median: $median <br> Q1: $Q1 <br> <br> Mean: $mean <br> <br> Standard deviation: $SD <br> Quartile Deviation: $QD <br> Mean Deviation: $MD",
            "plotSpacePercent": "50"
        },
        "categories": [{
            "category": [{
                            "label": "Elementary School",
                            "showLabel": "1"
                        }, 
                        {
                            "label": "Middle School",
                            "showLabel": "1"
                        }, 
                        {
                            "label": "High School",
                            "showLabel": "1"
                        }]
        }],
        "dataset": [{
            "seriesname": "Male",
            "lowerBoxColor": "#008ee4",
            "upperBoxColor": "#6baa01",
            "data": [{
                "value": "30000, 32450, 32580, 40500, 41800, 40500, 42500, 44700, 44050, 47880, 50000, 51000,52300, 53200, 54200, 56560, 60580, 61550, 62800, 63700, 65000, 66000"
            }, {
                "value": "31000, 33250, 35000, 34000, 35100, 37500, 39583, 43500, 42800, 39000, 45541, 48000, 51300, 54000, 57000, 61000, 66500"
            }, {
                "value": "31400, 34000, 39000, 42000, 48000, 54000, 49000, 63000, 66000, 72000"
            }]
        }, {
            "seriesname": "Female",
            "lowerBoxColor": "#e44a00",
            "upperBoxColor": "#f8bd19",
            "data": [{
                "value": "29400, 32000, 33500, 35000, 39000, 44000, 40000, 49000, 54000, 58000, 62000, 65000"
            }, {
                "value": "30500, 35000, 39500, 43000, 48000, 51000, 56000, 59800, 63700, 66500"
            }, {
                "value": "31400, 35000, 40000, 46000, 52600, 58000, 64000, 69500, 71600"
            }]
        }]
    }
}
