{
    "type": "multiaxisline",
    "renderAt": "chart-container",
    "width": "100%",
    "height": "100%",
    "dataFormat": "json",
    "dataSource": {
        "chart": {
            "palette": "2",
            "caption": "CPU Usage",
            "subcaption": "(Last 10 Hours)",
            "xaxisname": "Time",
            "showvalues": "0",
            "divlinealpha": "100",
            "numvdivlines": "4",
            "vdivlinealpha": "0",
            "showalternatevgridcolor": "1",
            "alternatevgridalpha": "5",
            "canvaspadding": "0",
            "labeldisplay": "ROTATE",
            "showborder": "0"
        },
        "categories": [{
            "category": [{
                "label": "10:00"
            }, {
                "label": "11:00"
            }, {
                "label": "12:00"
            }, {
                "label": "13:00"
            }, {
                "label": "14:00"
            }, {
                "label": "15:00"
            }, {
                "label": "16:00"
            }, {
                "label": "17:00"
            }, {
                "label": "18:00"
            }, {
                "label": "19:00"
            }]
        }],
        "axis": [{
            "title": "CPU Usage",
            "tickwidth": "10",
            "divlineDashed": "1",
            "numbersuffix": "%",
            "dataset": [{
                "seriesname": "CPU 1",
                "linethickness": "3",
                "color": "CC0000",
                "data": [{
                    "value": "16"
                }, {
                    "value": "19"
                }, {
                    "value": "16"
                }, {
                    "value": "17"
                }, {
                    "value": "23"
                }, {
                    "value": "23"
                }, {
                    "value": "15"
                }, {
                    "value": "14"
                }, {
                    "value": "19"
                }, {
                    "value": "21"
                }]
            }, {
                "seriesname": "CPU 2",
                "linethickness": "3",
                "color": "0372AB",
                "data": [{
                    "value": "12"
                }, {
                    "value": "12"
                }, {
                    "value": "9"
                }, {
                    "value": "9"
                }, {
                    "value": "11"
                }, {
                    "value": "13"
                }, {
                    "value": "16"
                }, {
                    "value": "14"
                }, {
                    "value": "16"
                }, {
                    "value": "11"
                }]
            }]
        }, {
            "title": "PF Usage",
            "axisonleft": "0",
            "numdivlines": "4",
            "tickwidth": "10",
            "divlineDashed": "1",
            "formatnumberscale": "1",
            "defaultnumberscale": " MB",
            "numberscaleunit": "GB",
            "numberscalevalue": "1024",
            "dataset": [{
                "seriesname": "PF Usage",
                "data": [{
                    "value": "696"
                }, {
                    "value": "711"
                }, {
                    "value": "636"
                }, {
                    "value": "671"
                }, {
                    "value": "1293"
                }, {
                    "value": "789"
                }, {
                    "value": "793"
                }, {
                    "value": "993"
                }, {
                    "value": "657"
                }, {
                    "value": "693"
                }]
            }]
        }, {
            "title": "Processes",
            "axisonleft": "0",
            "numdivlines": "5",
            "tickwidth": "10",
            "divlineDashed": "1",
            "dataset": [{
                "seriesname": "Processes",
                "data": [{
                    "value": "543"
                }, {
                    "value": "511"
                }, {
                    "value": "536"
                }, {
                    "value": "449"
                }, {
                    "value": "668"
                }, {
                    "value": "588"
                }, {
                    "value": "511"
                }, {
                    "value": "536"
                }, {
                    "value": "449"
                }, {
                    "value": "668"
                }]
            }]
        }]
    }
}
