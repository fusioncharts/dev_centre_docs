{
    type: 'gantt',
    renderAt: 'chart-container',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "dateformat": "dd/mm/yyyy",
            "outputdateformat": "hh12:mn ampm",
            "caption": "Development Division - Time Shifts",
            "subCaption": "At Bakersfield Central",
            "canvasBorderAlpha": "30",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "start": "00:00:00",
                "end": "23:59:59",
                "label": "Time"
            }]
        }, {
            "align": "left",
            "category": [{
                "start": "00:00:00",
                "end": "02:59:59",
                "label": "Midnight"
            }, {
                "start": "03:00:00",
                "end": "05:59:59",
                "label": "3 am"
            }, {
                "start": "06:00:00",
                "end": "08:59:59",
                "label": "6 am"
            }, {
                "start": "09:00:00",
                "end": "11:59:59",
                "label": "9 am"
            }, {
                "start": "12:00:00",
                "end": "14:59:59",
                "label": "12 noon"
            }, {
                "start": "15:00:00",
                "end": "17:59:59",
                "label": "3 pm"
            }, {
                "start": "18:00:00",
                "end": "20:59:59",
                "label": "6 pm"
            }, {
                "start": "21:00:00",
                "end": "23:59:59",
                "label": "9 pm"
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
                "label": "John.S",
                "id": "EMP121"
            }, {
                "label": "David.G",
                "id": "EMP122"
            }, {
                "label": "Mary.P",
                "id": "EMP123"
            }, {
                "label": "Andrew.H",
                "id": "EMP124"
            }, {
                "label": "Neil.M",
                "id": "EMP125"
            }]
        },
        "tasks": {
            "showlabels": "1",
            "task": [{
                "processid": "EMP121",
                "start": "08:00:00",
                "end": "12:30:00",
                "label": "Morning Shift"
            }, {
                "processid": "EMP121",
                "start": "15:00:00",
                "end": "19:30:00",
                "label": "Evening Shift"
            }, {
                "processid": "EMP122",
                "start": "10:00:00",
                "end": "16:30:00",
                "label": "Half Day"
            }, {
                "processid": "EMP123",
                "start": "08:00:00",
                "end": "12:00:00",
                "label": "Morning Shift"
            }, {
                "processid": "EMP123",
                "start": "15:00:00",
                "end": "21:30:00",
                "label": "Evening Shift"
            }, {
                "processid": "EMP124",
                "start": "08:00:00",
                "end": "20:30:00",
                "label": "Full time support"
            }, {
                "processid": "EMP125",
                "start": "10:00:00",
                "end": "14:30:00",
                "label": "Half Day"
            }]
        }
    }
}
