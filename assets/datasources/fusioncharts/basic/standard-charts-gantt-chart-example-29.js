{
    type: 'gantt',
    renderAt: 'chart-container',
    width: '100%',
    height: '530',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "dateformat": "mm/dd/yyyy",
            "caption": "Social Media Optimization",
            "subcaption": "Project Plan",
            "chartbottomMargin": "90",
            "showLabel": "0"
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
                "id": "PROCESS_1",
                "label": "Identify Customers"
            }, {
                "id": "PROCESS_2",
                "label": "Survey 500 Customers"
            }, {
                "id": "PROCESS_3",
                "label": "Interpret Requirements"
            }, {
                "id": "PROCESS_4",
                "label": "Market Analysis"
            }, {
                "id": "PROCESS_5",
                "label": "Brainstorm concepts"
            }, {
                "id": "PROCESS_6",
                "label": "Define Ad Requirements"
            }, {
                "id": "PROCESS_7",
                "label": "Design And Develop"
            }, {
                "id": "PROCESS_8",
                "label": "Mock test"
            }, {
                "id": "PROCESS_9",
                "label": "Documentation"
            }, {
                "id": "PROCESS_10",
                "label": "Start Campaign"
            }]
        },
        "tasks": {
            "task": [{
                "id": "1",
                "start": "08/04/2014",
                "end": "08/10/2014",
                "label": "test"
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
                    "fromtaskid": "9",
                    "totaskid": "10",
                    "color": "#008ee4",
                    "thickness": "2"
                }
            ]
        }],
        "milestones": {
            "milestone": [{
                    "date": "3/28/2015",
                    "taskid": "10",
                    "color": "#f8bd19",
                    "shape": "star",
                    "tooltext": "Completion of First Campaign"
                }

            ]
        },
        "annotations": {
            "origw": "750",
            "origh": "550",
            "autoscale": "1",
            "groups": [{
                "id": "info",
                "items": [{
                    "id": "infoBg",
                    "type": "rectangle",
                    "x": "$canvasCenterX-225",
                    "y": "$chartEndY-15",
                    "tox": "$canvasCenterX+55",
                    "toy": "$chartEndY-90",
                    "fillcolor": "#CCCCCC"
                }, {
                    "id": "infoText",
                    "type": "Text",
                    "fontSize": "11",
                    "fillcolor": "#333333",
                    "isHTML": "1",
                    "text": "Click on Task to get Details",
                    "x": "$chartCenterX",
                    "y": "$chartEndY-53"
                }]
            }]
        }

    },
    "events": {
        //Using dataplot click event
        "dataplotClick": function(evtObj, argObj) {
            //Function to get total number of days between two dates
            var getNumOfDays = function(startDt, endDate) {
                    var oneDay = 24 * 60 * 60 * 1000, // hours*minutes*seconds*milliseconds
                        firstDate = new Date(startDt),
                        secondDate = new Date(endDate),
                        diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
                    return diffDays;
                },
                //Function to get total days involved in project and its start date
                getDaysTimeInvolved = function(dataArray) {
                    var startDate = new Date(dataArray[0].start),
                        endDate = new Date(dataArray[0].end),
                        currStartDate, currEndDate, totalDays;

                    for (var j = 0; j < dataArray.length; j++) {
                        currStartDate = new Date(dataArray[j].start);
                        currEndDate = new Date(dataArray[j].end);
                        (currStartDate.getTime() < startDate.getTime()) ? startDate = currStartDate : "";
                        (currEndDate.getTime() > endDate.getTime()) ? endDate = currEndDate : "";
                    }
                    //Get number of days between two dates
                    totalDays = getNumOfDays(startDate, endDate);
                    //Returning total number of days involved and the start date
                    return [totalDays, startDate];

                },
                //Storing the data source object
                dataSource = evtObj.sender.args.dataSource && evtObj.sender.args.dataSource,
                annotations = evtObj.sender.annotations && evtObj.sender.annotations,
                //Get the task start date
                taskStartDate = argObj.start,
                //Get the task end date
                taskEndDate = argObj.end,
                //Total number of days involved in the task
                noOfDays = getNumOfDays(taskStartDate, taskEndDate),
                //Get the number of days of the project and its start date
                daysTimeArr = getDaysTimeInvolved(dataSource.categories[0].category),
                //Get after how many days task starts after project initialization
                workStartTime = getNumOfDays(daysTimeArr[1], taskStartDate),
                //Calculate percentage time required by the task w.r.t project
                percentTime = Math.round(noOfDays * 100 / daysTimeArr[0]),
                processId = argObj.processId.split("_"),
                taskId = argObj.taskId,
                processName = dataSource.processes.process && dataSource.processes.process[processId[4]].label,
                infoText = "Process Name : " + processName +
                "{br}Project Effort Contribution : " + percentTime + "%" +
                "{br}Day of start: " + workStartTime + "th day" +
                "{br}Task Duration : " + noOfDays + " days";
            annotations && annotations.update('infoText', {
                "text": infoText
            });
        }
    }
}
