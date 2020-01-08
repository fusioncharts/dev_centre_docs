{
    type: 'gantt',
    renderAt: 'chart-container',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Development Division - Work Schedule",
            "subcaption": "Week 2 - (21st July to 25th July)",
            "dateformat": "mm/dd/yyyy hh:mm:ss",
            "outputDateFormat": "ddds mnl, yyyy hh12:mn ampm",
            "canvasBorderAlpha": "30",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "start": "7/21/2014 00:00:00",
                "end": "7/21/2014 23:59:59",
                "label": "Monday"
            }, {
                "start": "7/22/2014 00:00:00",
                "end": "7/22/2014 23:59:59",
                "label": "Tuesday"
            }, {
                "start": "7/23/2014 00:00:00",
                "end": "7/23/2014 23:59:59",
                "label": "Wednesday"
            }, {
                "start": "7/24/2014 00:00:00",
                "end": "7/24/2014 23:59:59",
                "label": "Thursday"
            }, {
                "start": "7/25/2014 00:00:00",
                "end": "7/25/2014 23:59:59",
                "label": "Friday"
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
            "task": [{
                "processid": "EMP121",
                "start": "7/21/2014 09:30:00",
                "end": "7/21/2014 17:00:00",
                "label": "Logo-I"
            }, {
                "processid": "EMP121",
                "start": "7/22/2014 09:30:00",
                "end": "7/22/2014 16:30:00",
                "label": "Logo-II"
            }, {
                "processid": "EMP121",
                "start": "7/23/2014 14:00:00",
                "end": "7/24/2014 16:30:00",
                "label": "Website template"
            }, {
                "processid": "EMP122",
                "start": "7/21/2014 10:00:00",
                "end": "7/25/2014 14:30:00",
                "label": "PHP Blueprint"
            }, {
                "processid": "EMP123",
                "start": "7/21/2014 10:00:00",
                "end": "7/21/2014 15:30:00",
                "label": "Testing Specification"
            }, {
                "processid": "EMP123",
                "start": "7/22/2014 09:30:00",
                "end": "7/22/2014 16:00:00",
                "label": "Testing tool research"
            }, {
                "processid": "EMP123",
                "start": "7/23/2014 09:30:00",
                "end": "7/25/2014 16:30:00",
                "label": "Testing tool integration"
            }, {
                "processid": "EMP124",
                "start": "7/22/2014 09:30:00",
                "end": "7/22/2014 16:30:00",
                "label": "QA"
            }, {
                "processid": "EMP124",
                "start": "7/23/2014 09:00:00",
                "end": "7/23/2014 16:30:00",
                "label": "QA"
            }, {
                "processid": "EMP124",
                "start": "7/24/2014 09:30:00",
                "end": "7/25/2014 14:30:00",
                "label": "QA"
            }, {
                "processid": "EMP125",
                "start": "7/25/2014 15:00:00",
                "end": "7/25/2014 16:59:00",
                "label": "Weekly Meet"
            }]
        }
    }
}
