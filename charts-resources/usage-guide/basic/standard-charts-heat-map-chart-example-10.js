{
    type: 'heatmap',
    renderAt: 'chart-container',
    width: '800',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Top Smartphone Ratings",
            "subcaption": "By Features",
            "xAxisName": "Features",
            "yAxisName": "Model",
            "showplotborder": "1",
            "xAxisLabelsOnTop": "1",
            "plottooltext": "<div><b>$rowLabel</b><br/>Customer Ratings for $columnLabel : <b>$datavalue</b></div>"
        },
        "rows": {
            "row": [{
                "id": "SGS5",
                "label": "Samsung Galaxy S5"
            }, {
                "id": "HTC1M8",
                "label": "HTC One (M8)"
            }, {
                "id": "IPHONES5",
                "label": "Apple iPhone 5S"
            }, {
                "id": "LUMIA",
                "label": "Nokia Lumia 1520"
            }]
        },
        "columns": {
            "column": [{
                "id": "processor",
                "label": "Processor"
            }, {
                "id": "screen",
                "label": "Screen Size"
            }, {
                "id": "price",
                "label": "Price"
            }, {
                "id": "backup",
                "label": "Battery Backup"
            }, {
                "id": "cam",
                "label": "Camera"
            }]
        },
        "dataset": [{
            "data": [{
                "rowid": "SGS5",
                "columnid": "processor",
                "value": "8.7",
                "tlLabel": "Quad Core 2.5 GHz"
            }, {
                "rowid": "SGS5",
                "columnid": "screen",
                "value": "8.5",
                //Displaying a label on the bottom left corner of a dataplot
                "blLabel": "5.1 inch",
                //Displaying a label on the bottom right corner of a dataplot
                "brLabel": "AMOLED screen"
            }, {
                "rowid": "SGS5",
                "columnid": "price",
                "value": "9.3",
                //Displaying a label on the top left corner of a dataplot
                "tlLabel": "$600"
            }, {
                "rowid": "SGS5",
                "columnid": "backup",
                "value": "9.7",
                "brLabel": "Battery : 2800 MAH"
            }, {
                "rowid": "SGS5",
                "columnid": "cam",
                "value": "8",
                //Displaying a label on the top right corner of a dataplot
                "trLabel": "16 MP"
            }, {
                "rowid": "HTC1M8",
                "columnid": "processor",
                "value": "9.2",
                "tlLabel": "Quad Core 2.3 GHz"
            }, {
                "rowid": "HTC1M8",
                "columnid": "screen",
                "value": "8.3",
                "blLabel": "5 inch",
                "brLabel": "LCD screen"
            }, {
                "rowid": "HTC1M8",
                "columnid": "price",
                "value": "7.3",
                "tlLabel": "$600"
            }, {
                "rowid": "HTC1M8",
                "columnid": "backup",
                "value": "8.8",
                "brLabel": "Battery : 2600 MAH"
            }, {
                "rowid": "HTC1M8",
                "columnid": "cam",
                "value": "8.7",
                "trLabel": "4 MP"
            }, {
                "rowid": "IPHONES5",
                "columnid": "processor",
                "value": "9.1",
                "tlLabel": "Dual Core"
            }, {
                "rowid": "IPHONES5",
                "columnid": "screen",
                "value": "8.6",
                "blLabel": "4 inch",
                "brLabel": "Retina LCD screen"
            }, {
                "rowid": "IPHONES5",
                "columnid": "price",
                "value": "7.2",
                "tlLabel": "$649"
            }, {
                "rowid": "IPHONES5",
                "columnid": "backup",
                "value": "8.4",
                "brLabel": "Battery : 1560 MAH"
            }, {
                "rowid": "IPHONES5",
                "columnid": "cam",
                "value": "9.5",
                "trLabel": "8 MP"
            }, {
                "rowid": "LUMIA",
                "columnid": "processor",
                "value": "8.8",
                "tlLabel": "Quad Core 2.2 GHz"
            }, {
                "rowid": "LUMIA",
                "columnid": "screen",
                "value": "9.1",
                "blLabel": "6 inch",
                "brLabel": "LCD screen"
            }, {
                "rowid": "LUMIA",
                "columnid": "price",
                "value": "9.7",
                "tlLabel": "$470"
            }, {
                "rowid": "LUMIA",
                "columnid": "backup",
                "value": "9.2",
                "brLabel": "Battery : 3400 MAH"
            }, {
                "rowid": "LUMIA",
                "columnid": "cam",
                "value": "8.1",
                "trLabel": "20MP"
            }]
        }],
        "colorrange": {
            "gradient": "0",
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
                "maxValue": "8.5",
                "label": "Average"
            }, {
                "code": "#6da81e",
                "minValue": "8.5",
                "maxValue": "10",
                "label": "Good"
            }]
        }
    }
}
