{
    type: 'heatmap',
    renderAt: 'chart-container',
    width: '550',
    height: '270',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Top Smartphone Ratings",
            "subCaption": "By Features",
            "xAxisName": "Features",
            "yAxisName": "Model",
            "showPlotBorder": "1"
        },

        "dataset": [{
            "data": [{
                "rowid": "Samsung Galaxy S5",
                "columnid": "Processor",
                "value": "8.7",
                "tlLabel": "Quad Core 2.5 GHz",
                "trLabel": "OS : Android 4.4 Kitkat"
            }, {
                "rowid": "Samsung Galaxy S5",
                "columnid": "Screen Size",
                "value": "8.5",
                "tlLabel": "5.1 inch",
                "trLabel": "AMOLED Screen Size"
            }, {
                "rowid": "Samsung Galaxy S5",
                "columnid": "Price",
                "value": "9.3",
                "tlLabel": "$600"
            }, {
                "rowid": "Samsung Galaxy S5",
                "columnid": "Battery Backup",
                "value": "9.7",
                "tlLabel": "29 Hrs",
                "trLabel": "Battery : 2800 MAH"
            }, {
                "rowid": "Samsung Galaxy S5",
                "columnid": "Camera",
                "value": "8",
                "tlLabel": "16 MP",
                "trLabel": "Front Camera : 2.1 MP"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Processor",
                "value": "9.2",
                "tlLabel": "Quad Core 2.3 GHz",
                "trLabel": "OS : Android 4.4 Kitkat"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Screen Size",
                "value": "8.3",
                "tlLabel": "5 inch",
                "trLabel": "LCD Screen Size"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Price",
                "value": "7.3",
                "tlLabel": "$600"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Battery Backup",
                "value": "8.8",
                "tlLabel": "20 Hrs",
                "trLabel": "Battery : 2600 MAH"
            }, {
                "rowid": "HTC One (M8)",
                "columnid": "Camera",
                "value": "8.7",
                "tlLabel": "4 MP",
                "trLabel": "Front Camera : 5 MP"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Processor",
                "value": "9.1",
                "tlLabel": "Dual Core",
                "trLabel": "OS : iOS 7"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Screen Size",
                "value": "8.6",
                "tlLabel": "4 inch",
                "trLabel": "Retina LCD Screen Size"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Price",
                "value": "7.2",
                "tlLabel": "$649"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Battery Backup",
                "value": "8.4",
                "tlLabel": "10 Hrs",
                "trLabel": "Battery : 1560 MAH"
            }, {
                "rowid": "Apple iPhone 5S",
                "columnid": "Camera",
                "value": "9.5",
                "tlLabel": "8 MP",
                "trLabel": "Front Camera : 1.2 MP"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Processor",
                "value": "8.8",
                "tlLabel": "Quad Core 2.2 GHz",
                "trLabel": "OS: Windows Phone 8"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Screen Size",
                "value": "9.1",
                "tlLabel": "6 inch",
                "trLabel": "LCD Screen Size"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Price",
                "value": "9.7",
                "tlLabel": "$470"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Battery Backup",
                "value": "9.2",
                "tlLabel": "27 Hrs",
                "trLabel": "Battery : 3400 MAH"
            }, {
                "rowid": "Nokia Lumia 1520",
                "columnid": "Camera",
                "value": "8.1",
                "tlLabel": "20MP",
                "trLabel": "Front Camera : 1.2 MP"
            }]
        }],
        "colorRange": {
            "gradient": "1",
            "minValue": "0",
            "code": "#e24b1a",
            "startLabel": "Poor",
            "endLabel": "Good",
            "color": [{
                "code": "#e24b1a",
                "minValue": "1",
                "maxValue": "5",
                "label": "Bad"
            }, {
                "code": "#f6bc33",
                "minValue": "5",
                "maxValue": "7",
                "label": "Average"
            }, {
                "code": "#6da81e",
                "minValue": "7",
                "maxValue": "10",
                "label": "Good"
            }]
        }
    }
}
