{
    type: 'line',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Backup Server - Free Storage Volume",
            "subcaption": "Last 24 hours",
            "xaxisname": "Time",
            "yaxisname": "Free Storage Volume",
            "yAxisMaxValue": "4096",
            "rotatevalues": "1",
            "numdivlines": "4",
            //Setting scaling parameters
            "formatNumberScale": "1",
            "numberScaleValue": "1024,1024,1024",
            "numberScaleUnit": " MB, GB, TB",
            "defaultNumberScale": " KB",
            "scaleRecursively": "0",
            //Theme 
            "theme": "fint"

        },
        "data": [{
            "label": "08:00",
            "value": "3572355443"
        }, {
            "label": "10:00",
            "value": "3321445434"
        }, {
            "label": "12:00",
            "value": "3012343453"
        }, {
            "label": "14:00",
            "value": "2645546455"
        }, {
            "label": "16:00",
            "value": "2425445435"
        }, {
            "label": "18:00",
            "value": "1935657565"
        }, {
            "label": "20:00",
            "value": "1545565666"
        }, {
            "label": "22:00",
            "value": "1135654544"
        }, {
            "label": "00:00",
            "value": "1006543455"
        }, {
            "label": "02:00",
            "value": "957343445"
        }, {
            "label": "04:00",
            "value": "886334444"
        }, {
            "label": "06:00",
            "value": "800"
        }, {
            "label": "07:59",
            "value": "695"
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "2802434345",
                "color": "#ff0000",
                "displayvalue": "Critical Limit",
                "dashed": "1",
                "valueOnRight": "1"
            }]
        }]
    }
}
