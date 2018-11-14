{
    type: 'multiaxisline',
    renderAt: 'chart-container',
    width: '500',
    height: '300',
    dataFormat: 'json',
    id: 'revenue-chart',
    dataSource: {
        "chart": {
            "caption": "Power Generator",
            "xaxisname": "Time",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "00:00s"
            }, {
                "label": "00:04s"
            }, {
                "label": "00:08s"
            }, {
                "label": "00:12s"
            }, {
                "label": "00:16s"
            }, {
                "label": "00:20s"
            }]
        }],
        "axis": [{
            "title": "Power",
            "tickwidth": "10",
            "divlineDashed": "1",
            "dataset": [{
                "seriesname": "Power [W]",
                "data": [{
                    "value": "6"
                }, {
                    "value": "26"
                }, {
                    "value": "16"
                }, {
                    "value": "27"
                }, {
                    "value": "28"
                }, {
                    "value": "33"
                }]
            }]
        }, {
            "title": "Temp.",
            "numdivlines": "14",
            "tickwidth": "10",
            "divlineDashed": "1",
            "dataset": [{
                "seriesname": "Temperature",
                "data": [{
                    "value": "296"
                }, {
                    "value": "311"
                }, {
                    "value": "336"
                }, {
                    "value": "371"
                }, {
                    "value": "389"
                }, {
                    "value": "393"
                }]
            }]
        }, {
            "title": "Speed[RPM]",
            "axisonleft": "0",
            "numdivlines": "10",
            "tickwidth": "10",
            "divlineDashed": "1",
            "dataset": [{
                "seriesname": "Speed",
                "data": [{
                    "value": "1"
                }, {
                    "value": "11"
                }, {
                    "value": "36"
                }, {
                    "value": "49"
                }, {
                    "value": "68"
                }, {
                    "value": "88"
                }]
            }]
        }]
    }


}
