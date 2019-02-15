{
    type: 'cylinder',
    dataFormat: 'json',
    renderAt: 'chart-container',
    width: '250',
    height: '350',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "Diesel Level in Generator",
            "subcaption": "Bakersfield Central",
            "captionAlignment": "left",
            "lowerLimit": "0",
            "upperLimit": "120",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": " ltrs",
            "showValue": "1",
            //Customizing the origin x position
            "cyloriginx": "50",
            //Customizing the origin y position
            "cyloriginy": "260",
            //Setting the radius of the Cylinder
            "cylradius": "40",
            //Setting the height of the Cylinder
            "cylheight": "150"
        },
        "value": "75"
    }
}
