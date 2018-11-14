{
    type: 'boxandwhisker2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Distribution of annual salaries",
            "subcaption": "By Gender",
            "xAxisName": "Pay Grades",
            "YAxisName": "Salaries (In USD)",
            "theme": "fusion",
            "showValues": "0",
            "numberPrefix": "$",
            "legendPosition": "right",

            //Usage of tooltip macro to populate custom tooltip
            "plottooltext": "&#60;div id='headerdiv'&#62;$label&#60;/div&#62;&#60;div&#62;&#60;table width='120' border='1'&#62;&#60;tr&#62;&#60;td class='labelDiv'&#62;Maximum&#60;/td&#62;&#60;td class='allpadding'&#62;$maxDatavalue&#60;/td&#62;&#60;/tr&#62;&#60;tr&#62;&#60;td class='labelDiv'&#62;Q3&#60;/td&#62;&#60;td class='allpadding'&#62;$Q3&#60;/td&#62;&#60;/tr&#62;&#60;tr&#62;&#60;td class='labelDiv'&#62;Median&#60;/td&#62;&#60;td class='allpadding'&#62;$median&#60;/td&#62;&#60;/tr&#62;&#60;tr&#62;&#60;td class='labelDiv'&#62;Q1&#60;/td&#62;&#60;td class='allpadding'&#62;$Q1&#60;/td&#62;&#60;/tr&#62;&#60;tr&#62;&#60;td class='labelDiv'&#62;Minimum&#60;/td&#62;&#60;td class='allpadding'&#62;$minDataValue&#60;/td&#62;&#60;/tr&#62;&#60;/table&#62;&#60;/div&#62;"
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
            "seriesname": "Males",
            "data": [{
                "value": "2400,2000,2500,2800,3500,4000, 3700, 3750, 3880, 5000,5500,7500,8000,8200, 8400, 8500, 8550, 8800, 8700, 9000, 14000"
            }, {
                "value": "7500,9000,12000,13000,14000,16500,17000, 18000, 19000, 19500"
            }, {
                "value": "15000,19000,25000,32000,50000,65000"
            }]
        }, {
            "seriesname": "Females",
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
