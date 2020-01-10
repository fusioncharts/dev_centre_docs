{
    type: 'gantt',
    renderAt: 'chart-container',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "dateformat": "mm/dd/yyyy",
            "outputdateformat": "hh:mn",
            "caption": "Development Division - Work Schedule",
            "canvasBorderAlpha": "30",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "start": "7/15/2014 00:00:00",
                "end": "7/15/2014 23:59:59",
                "label": "Today"
            }, {
                "start": "7/16/2014 00:00:00",
                "end": "7/16/2014 23:59:59",
                "label": "Tomorrow"
            }]
        }, {
            "align": "right",
            "category": [{
                "start": "7/15/2014 00:00:00",
                "end": "7/15/2014 05:59:59",
                "label": "6 am"
            }, {
                "start": "7/15/2014 06:00:00",
                "end": "7/15/2014 11:59:59",
                "label": "12 pm"
            }, {
                "start": "7/15/2014 12:00:00",
                "end": "7/15/2014 17:59:59",
                "label": "6 pm"
            }, {
                "start": "7/15/2014 18:00:00",
                "end": "7/15/2014 23:59:59",
                "label": "Midnight"
            }, {
                "start": "7/16/2014 00:00:00",
                "end": "7/16/2014 05:59:59",
                "label": "6 am"
            }, {
                "start": "7/16/2014 06:00:00",
                "end": "7/16/2014 11:59:59",
                "label": "12 pm"
            }, {
                "start": "7/16/2014 12:00:00",
                "end": "7/16/2014 17:59:59",
                "label": "6 pm"
            }, {
                "start": "7/16/2014 18:00:00",
                "end": "7/16/2014 23:59:59",
                "label": "Midnight"
            }]
        }],
        "processes": {
            "fontsize": "12",
            "isbold": "1",
            "align": "left",
            "headertext": "Employee",
            "headerfontsize": "14",
            "headervalign": "middle",
            "headeralign": "left",
            "process": [{
                "label": "John S.",
                "id": "EMP121"
            }, {
                "label": "David G.",
                "id": "EMP122"
            }, {
                "label": "Mary P.",
                "id": "EMP123"
            }, {
                "label": "Andrew H.",
                "id": "EMP124"
            }, {
                "label": "Neil M.",
                "id": "EMP125"
            }]
        },
        "tasks": {
            "showlabels": "1",
            "showstartdate": "1",
            "task": [{
                "processid": "EMP121",
                "start": "7/15/2014 08:00:00",
                "end": "7/15/2014 12:30:00",
                "label": "Logo A"
            }, {
                "processid": "EMP121",
                "start": "7/15/2014 17:00:00",
                "end": "7/15/2014 19:30:00",
                "label": "Logo B"
            }, {
                "processid": "EMP121",
                "start": "7/16/2014 09:00:00",
                "end": "7/16/2014 19:30:00",
                "label": "Website template"
            }, {
                "processid": "EMP122",
                "start": "7/15/2014 10:00:00",
                "end": "7/15/2014 20:30:00",
                "label": "PHP Blueprint"
            }, {
                "processid": "EMP122",
                "start": "7/16/2014 10:00:00",
                "end": "7/16/2014 20:30:00",
                "label": "PHP Blueprint"
            }, {
                "processid": "EMP123",
                "start": "7/15/2014 08:00:00",
                "end": "7/15/2014 12:00:00",
                "label": "L1 Support"
            }, {
                "processid": "EMP123",
                "start": "7/16/2014 15:00:00",
                "end": "7/16/2014 21:30:00",
                "label": "L1 Support"
            }, {
                "processid": "EMP124",
                "start": "7/15/2014 08:00:00",
                "end": "7/15/2014 20:30:00",
                "label": "L2 support"
            }, {
                "processid": "EMP124",
                "start": "7/16/2014 08:00:00",
                "end": "7/16/2014 20:30:00",
                "label": "L2 support"
            }, {
                "processid": "EMP125",
                "start": "7/15/2014 10:00:00",
                "end": "7/15/2014 14:30:00",
                "label": "Network Maintenance"
            }, {
                "processid": "EMP125",
                "start": "7/16/2014 12:00:00",
                "end": "7/16/2014 14:30:00",
                "label": "System OS Updates"
            }]
        }
    }
}
