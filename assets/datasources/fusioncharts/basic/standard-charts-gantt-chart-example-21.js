{
    type: 'gantt',
    renderAt: 'chart-container',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "palette": "2",
            "caption": "Construction Timeline",
            "captionFontSize": "16",
            "dateformat": "dd/mm/yyyy",
            "outputdateformat": "ddds mns",
            "showCanvasBorder": "1",
            "canvasBorderAlpha": "30",
            "theme": "fusion"

        },
        "categories": [{
            "category": [{
                "start": "1/5/2014",
                "end": "31/8/2014",
                "label": "Months"
            }]
        }, {
            "category": [{
                "start": "1/5/2014",
                "end": "31/5/2014",
                "label": "May"
            }, {
                "start": "1/6/2014",
                "end": "30/6/2014",
                "label": "June"
            }, {
                "start": "1/7/2014",
                "end": "31/7/2014",
                "label": "July"
            }, {
                "start": "1/8/2014",
                "end": "31/8/2014",
                "label": "August"
            }]
        }],
        "processes": {
            "headertext": "Task",
            "headerfontsize": "14",
            "fontsize": "12",
            "process": [{
                "label": "Terrace",
                "id": "TRC"
            }, {
                "label": "Plumbing",
                "id": "INS"
            }, {
                "label": "Wood Work",
                "id": "WDW"
            }, {
                "label": "Interiors",
                "id": "INT"
            }]
        },
        "tasks": {
            "showlabels": "1",
            "showenddate": "1",
            "task": [{
                "label": "Planned",
                "processid": "TRC",
                "start": "5/5/2014",
                "end": "2/6/2014",
                "id": "5-1",
                "color": "#EEEEEE",
                "height": "25%",
                "toppadding": "22%"
            }, {
                "label": "Actual",
                "processid": "TRC",
                "start": "10/5/2014",
                "end": "2/6/2014",
                "id": "5",
                "color": "#4567aa",
                "height": "25%",
                "toppadding": "70%"
            }, {
                "label": "Planned",
                "processid": "INS",
                "start": "11/5/2014",
                "end": "12/6/2014",
                "id": "6-1",
                "color": "#EEEEEE",
                "height": "25%",
                "toppadding": "22%"
            }, {
                "label": "Actual",
                "processid": "INS",
                "start": "13/5/2014",
                "end": "19/6/2014",
                "id": "6",
                "color": "#4567aa",
                "height": "25%",
                "toppadding": "70%"
            }, {
                "label": "Planned",
                "processid": "WDW",
                "start": "1/6/2014",
                "end": "12/7/2014",
                "id": "7-1",
                "color": "#EEEEEE",
                "height": "25%",
                "toppadding": "22%"
            }, {
                "label": "Actual",
                "processid": "WDW",
                "start": "2/6/2014",
                "end": "19/7/2014",
                "id": "7",
                "color": "#4567aa",
                "height": "25%",
                "toppadding": "70%"
            }, {
                "label": "Planned",
                "processid": "INT",
                "start": "1/6/2014",
                "end": "12/8/2014",
                "id": "8-1",
                "color": "#EEEEEE",
                "height": "25%",
                "toppadding": "22%"
            }, {
                "label": "Actual",
                "processid": "INT",
                "start": "1/6/2014",
                "end": "19/8/2014",
                "id": "8",
                "color": "#4567aa",
                "height": "25%",
                "toppadding": "70%"
            }]
        },
        "legend": {
            "item": [{
                "label": "Planned",
                "color": "999999"
            }, {
                "label": "Actual",
                "color": "4567aa"
            }]
        }
    }

}
