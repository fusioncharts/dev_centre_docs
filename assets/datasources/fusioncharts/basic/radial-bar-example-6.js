{
        type: 'radialbar',
        renderAt: 'chart-container',
        width: '400',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Top 5 Android OS Market Share",
                "subCaption": "January 2021",
                "showLegend": "1",
                "showLabels": "1",
                "placeValuesInside": "1",
                "labelPosition": 'start',
                "innerRadius": "20px",
                "outerRadius": "80px",
                "startAngle": "0",
                "endAngle": "360",
                "trackMargin": "20px",
                "trackPadding": "2px",
                "theme": "fusion"
            },
            "data": [
                { "label": "Nougat 7.0", "value": "4.09", "icon": 'https://cdn.example.com/images/alien.svg' },
                { "label": "Oreo 8.0", "value": "5.19", "icon": 'https://cdn.example.com/images/alien.svg' },
                { "label": "Marshmallow 6.0", "value": "5.77", "icon": 'https://cdn.example.com/images/alien.svg' },
                { "label": "Oreo 8.1", "value": "9.89", "icon": 'https://cdn.example.com/images/alien.svg' },
                { "label": "Pie 9.0", "value": "21.53", "icon": 'https://cdn.example.com/images/alien.svg' }
            ]
        }
    }
