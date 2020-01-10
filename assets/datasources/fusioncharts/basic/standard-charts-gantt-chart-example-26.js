{
    type: 'gantt',
    renderAt: 'chart-container',
    width: '100%',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "dateformat": "mm/dd/yyyy",
            "caption": "Social Media Optimization",
            "subcaption": "Project Plan"
        },
        "categories": [{
            "category": [{
                "start": "08/01/2014",
                "end": "08/31/2014",
                "label": "Aug '14"
            }, {
                "start": "09/01/2014",
                "end": "09/30/2014",
                "label": "Sep '14"
            }, {
                "start": "10/01/2014",
                "end": "10/31/2014",
                "label": "Oct '14"
            }, {
                "start": "11/01/2014",
                "end": "11/30/2014",
                "label": "Nov '14"
            }, {
                "start": "12/01/2014",
                "end": "12/31/2014",
                "label": "Dec '14"
            }, {
                "start": "01/01/2015",
                "end": "01/31/2015",
                "label": "Jan '15"
            }, {
                "start": "02/01/2015",
                "end": "02/28/2015",
                "label": "Feb '15"
            }, {
                "start": "03/01/2015",
                "end": "03/31/2015",
                "label": "Mar '15"
            }]
        }],
        "processes": {
            "fontsize": "12",
            "isbold": "1",
            "align": "left",
            "process": [{
                "id": "CUSTID_1",
                "label": "Identify Customers"
            }, {
                "label": "Survey 500 Customers"
            }, {
                "label": "Interpret Requirements"
            }, {
                "label": "Market Analysis"
            }, {
                "label": "Brainstorm concepts"
            }, {
                "label": "Define Ad Requirements"
            }, {
                "label": "Design & Develop"
            }, {
                "label": "Mock test"
            }, {
                "label": "Documentation"
            }, {
                "label": "Start Campaign"
            }]
        },
        "tasks": {
            "task": [{
                "id": "1",
                "start": "08/04/2014",
                "end": "08/10/2014"
            }, {
                "id": "2",
                "start": "08/08/2014",
                "end": "08/19/2014"
            }, {
                "id": "3",
                "start": "08/19/2014",
                "end": "09/02/2014"
            }, {
                "id": "4",
                "start": "08/24/2014",
                "end": "09/02/2014"
            }, {
                "id": "5",
                "start": "09/02/2014",
                "end": "09/21/2014"
            }, {
                "id": "6",
                "start": "09/21/2014",
                "end": "10/06/2014"
            }, {
                "id": "7",
                "start": "10/06/2014",
                "end": "01/21/2015"
            }, {
                "id": "8",
                "start": "01/21/2015",
                "end": "02/19/2015"
            }, {
                "id": "9",
                "start": "01/28/2015",
                "end": "02/24/2015"
            }, {
                "id": "10",
                "start": "02/24/2015",
                "end": "03/27/2015"
            }]
        },
        //Adding connectors to tasks using id's
        "connectors": [{
            "connector": [

                {
                    "fromtaskid": "2",
                    "totaskid": "3",
                    "color": "#008ee4",
                    "thickness": "2"
                }, {
                    "fromtaskid": "4",
                    "totaskid": "5",
                    "color": "#008ee4",
                    "thickness": "2"
                }, {
                    "fromtaskid": "5",
                    "totaskid": "6",
                    "color": "#008ee4",
                    "thickness": "2"
                }, {
                    "fromtaskid": "6",
                    "totaskid": "7",
                    "color": "#008ee4",
                    "thickness": "2"
                }, {
                    "fromtaskid": "7",
                    "totaskid": "8",
                    "color": "#008ee4",
                    "thickness": "2"
                }, {
                    "fromtaskid": "8",
                    "totaskid": "9",
                    "fromTaskConnectStart": "1",
                    "color": "#008ee4",
                    "thickness": "2"
                }, {
                    "fromtaskid": "9",
                    "totaskid": "10",
                    "color": "#008ee4",
                    "thickness": "2"
                }
            ]
        }]
    }
}
