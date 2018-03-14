{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '550',
    height: '350',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Comparison of Quarterly Revenue",
            "subCaption": "Last Year",
            "showBorder": "0",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "yAxisMaxValue": "50000",
            "showValues": "0",
            "showTooltip": "0",
            "animation": "0",
            //Theme
            "theme": "fint"
        },
        "data": [{
            "label": "Q1",
            "value": "30400"
        }, {
            "label": "Q2",
            "value": "29800"
        }, {
            "label": "Q3",
            "value": "21800"
        }, {
            "label": "Q4",
            "value": "26800"
        }],
        //All annotations are grouped under this element
        "annotations": {
            "showbelow": "0",
            //Annotations on a chart can be divided across multiple groups for easy management, and manipulation through API
            "groups": [{
                //Each group needs a unique ID
                "id": "Callout",
                //Under each group, you can define multiple items. Each item is a polygon, text or image - with its own set of parameters.
                "items": [{
                        //Each item needs a unique ID
                        "id": "CalloutBase",
                        //This item is of type rectangle
                        "type": "rectangle",
                        "radius": "2",
                        "alpha": "90",
                        "fillColor": "#6baa01"
                    }, {
                        "id": "CalloutTriangle",
                        //Polygon item 
                        "type": "polygon",
                        //With 3 sides, so it is a triangle
                        "sides": "3",
                        "startangle": "270",
                        "alpha": "90",
                        "fillColor": "#6baa01",
                        "radius": "9",
                    }, {
                        "id": "CalloutLabel",
                        //Text annotation item type to add label for callout
                        "type": "Text",
                        "fontSize": "12",
                        "bold": "1",
                        "fillcolor": "#ffffff"
                    }

                ]
            }]
        }
    },
    events: {
        "renderComplete": function(evtObj, argObj) {
            var index = 0,
                chrtDataArr = evtObj.sender.options.dataSource.data,
                maxValue = 0,
                index = 0;
            for (var i = 0; i < chrtDataArr.length; i++) {
                if (parseInt(chrtDataArr[i].value) > maxValue) {
                    maxValue = parseInt(chrtDataArr[i].value);
                    index = i;
                }
            }
            //Setting x and y position based on annotation macros. 
            //Here we're dynamically positioning it w.r.t the column
            //with highest data value
            annotations = evtObj && evtObj.sender.annotations;
            annotations && annotations.update("CalloutBase", {
                "x": ["$dataset.0.set", index, "x-55"].join("."),
                "y": ["$dataset.0.set", index, "starty-12"].join("."),
                "tox": ["$dataset.0.set", index, "x+55"].join("."),
                "toy": ["$dataset.0.set", index, "starty-50"].join(".")
            });
            annotations && annotations.update("CalloutTriangle", {
                "x": ["$dataset.0.set", index, "x"].join("."),
                "y": ["$dataset.0.set", index, "starty-8"].join(".")
            });
            annotations && annotations.update("CalloutLabel", {
                "text": "Highest Revenue{br} $" + maxValue,
                "x": ["$dataset.0.set", index, "x"].join("."),
                "y": ["$dataset.0.set", index, "starty-32"].join(".")
            });
        }

    }
}
