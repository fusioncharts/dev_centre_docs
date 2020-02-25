{
    type: 'heatmap',
        renderAt: 'chart-container',
            width: '100%',
                height: '350',
                    dataFormat: 'json',
                        dataSource: {
        "chart": {
            "caption": "Top Smartphone Ratings",
                "subcaption": "By Features",
                    "xAxisName": "Features",
                        "yAxisName": "Model",
                            "showplotborder": "1",
                                "showValues": "1",
                                    "xAxisLabelsOnTop": "1",
                                        "plottooltext": "<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel :</div>{br}Rating : <b>$dataValue</b>{br}$columnLabel : <b>$tlLabel</b>{br}<b>$trLabel</b>",
                                            //Cosmetics
                                            "baseFontColor": "#333333",
                                                "baseFont": "Helvetica Neue,Arial",
                                                    "toolTipBorderRadius": "2",
                                                        "toolTipPadding": "5",
                                                            "theme": "fusion"
        },
        "dataset": [{
            "data": [{
                "rowid": "Samsung Galaxy S5",
                "columnid": "Processor",
                "value": "8.7",
                "tllabel": "Quad Core 2.5 GHz",
                "trlabel": "OS : Android 4.4 Kitkat"
            }, {
                "rowid": "Samsung Galaxy S5",
                "columnid": "Screen Size",
                "value": "8.5",
                "tllabel": "5.1 inch",
                "trlabel": "AMOLED screen"
            }, {
                "rowid": "Samsung Galaxy S5",
                "columnid": "Price",
                "value": "9.3",
                "tllabel": "$600"
            }, {
                "rowid": "Samsung Galaxy S5",
                "columnid": "Battery Backup",
                "value": "9.7",
                "tllabel": "29 Hrs",
                "trlabel": "Battery : 2800 MAH"
            }, {
                "rowid": "Samsung Galaxy S5",
                "columnid": "Camera",
                "value": "8",
                "tllabel": "16 MP",
                "trlabel": "Front Camera : 2.1 MP"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Processor",
                "value": "9.2",
                "tllabel": "Quad Core 2.3 GHz",
                "trlabel": "OS : Android 4.4 Kitkat"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Screen Size",
                "value": "8.3",
                "tllabel": "5 inch",
                "trlabel": "LCD screen"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Price",
                "value": "7.3",
                "tllabel": "$600"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Battery Backup",
                "value": "8.8",
                "tllabel": "20 Hrs",
                "trlabel": "Battery : 2600 MAH"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Camera",
                "value": "8.7",
                "tllabel": "4 MP",
                "trlabel": "Front Camera : 5 MP"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Processor",
                "value": "9.1",
                "tllabel": "Dual Core",
                "trlabel": "OS : iOS 7"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Screen Size",
                "value": "8.6",
                "tllabel": "4 inch",
                "trlabel": "Retina LCD screen"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Price",
                "value": "7.2",
                "tllabel": "$649"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Battery Backup",
                "value": "8.4",
                "tllabel": "10 Hrs",
                "trlabel": "Battery : 1560 MAH"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Camera",
                "value": "9.5",
                "tllabel": "8 MP",
                "trlabel": "Front Camera : 1.2 MP"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Processor",
                "value": "8.8",
                "tllabel": "Quad Core 2.2 GHz",
                "trlabel": "OS: Windows Phone 8"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Screen Size",
                "value": "9.1",
                "tllabel": "6 inch",
                "trlabel": "LCD screen"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Price",
                "value": "9.7",
                "tllabel": "$470"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Battery Backup",
                "value": "9.2",
                "tllabel": "27 Hrs",
                "trlabel": "Battery : 3400 MAH"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Camera",
                "value": "8.1",
                "tllabel": "20MP",
                "trlabel": "Front Camera : 1.2 MP"
            }]
        }],
            "colorrange": {
            "gradient": "0",
                "minvalue": "0",
                    "code": "E24B1A",
                        "startlabel": "Poor",
                            "endlabel": "Good",
                                "color": [{
                                    "code": "E24B1A",
                                    "minvalue": "1",
                                    "maxvalue": "5",
                                    "label": "Bad"
                                }, {
                                    "code": "F6BC33",
                                    "minvalue": "5",
                                    "maxvalue": "8.5",
                                    "label": "Average"
                                }, {
                                    "code": "6DA81E",
                                    "minvalue": "8.5",
                                    "maxvalue": "10",
                                    "label": "Good"
                                }]
        }
    }
}
