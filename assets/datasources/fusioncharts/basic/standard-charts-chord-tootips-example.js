{
                    type: 'chord',
                    renderAt: 'chart-container',
                    width: '800',
                    height: '600',
                    dataFormat: 'json',
                    baseChartMessageFont: 'arial',
                    loadMessage: 'Events Automation',
                    loadMessageFontSize: '40',
                    loadMessageColor: '#FF0000',
    
                    dataSource: {
                        chart: {
                            drawCustomLegendIcon: 1,
                     
            
            legendIconSides: "3",
        legendIconStartAngle: "180",
                            nodeThickness: 30,
                            nodeLabelColor: "#0000ff",
                            nodeLabelFontSize: 11,
                            nodeLabelPosition: "inside",
                            nodeHoverAlpha: 100,
                            nodeSpacing: 14,
                            nodeBorderThickness: 5,
                            nodeAlpha: 80,
                            linkAlpha: 40,
                            linkBorderAlpha: 40,
                            linkHoverAlpha: 75,
                            showPlotBorder: 1,
                            plotBorderColor: "#FFFFFF",
                            plotBorderAlpha: "100",
                            plotBorderThickness: "5",
                            useHoverColor: "1",
                            showHoverEffect: "0",
                            legendItemHoverFontColor: "#FF0000",
                            caption: "Chord Diagram",
                            subcaption: "Flows Mentally",
                            captionAlignment: "right",
                            captionOnTop: "1",
                            captionFontSize: "25",
                            subCaptionFontSize: "15",
                            captionFont: "Times",
                            subCaptionFont: "Times",
                            captionFontColor: "#aa00aa",
                            subcaptionFontColor: "#00ff00",
                            captionFontBold: "1",
                            subCaptionFontBold: "0",
                            alignCaptionWithCanvas: "0",
                            captionHorizontalPadding: "40",
                            totalAngle: "360",
                            linkBorderThickness: "5",
                            linkBorderColor: "#00aa00",
                            "exportenabled": 1,
                            plotToolText:"$label to $plotIdentifier",
                            linkToolText: '$dominantNode  exports $dominantFlowValue to $dominantPlotIdentifier',
                        },
                        "nodes": [{
                                "label": "Apple",
                                "style": {}
                            },
                            {
                                "label": "HTC",
                                "style": {}
                            },
                            {
                                "label": "Huawei",
                                "style": {}
                            },
                            {
                                "label": "Nokia",
                                "style": {}
                            },
                            {
                                "label": "Samsung",
                                "style": {}
                            },
                            {
                                "label": "Xaomi",
                                "style": {}
                            },
                            {
                                "label": "Lenovo",
                                "style": {}
                            },
                            {
                                "label": "Apple1",
                                "style": {}
                            },
                            {
                                "label": "HTC1",
                                "style": {}
                            },
                            {
                                "label": "Huawei1",
                                "style": {}
                            },
                            {
                                "label": "Nokia1",
                                "style": {}
                            },
                            {
                                "label": "Samsung1",
                                "style": {}
                            },
                            {
                                "label": "Xaomi1",
                                "style": {}
                            },
                            {
                                "label": "Lenovo1",
                                "style": {}
                            },
    
                        ],
                        "links": [{
                                "from": "Appleeee",
                                "to": "Appleeee",
                                "value": 9.6899
                            },
                            {
                                "from": "Appleeee",
                                "to": "HTC",
                                "value": 0.8859,
                                "toolText": "$dominantPlotIdentifier $dominantNode"
                            },
                            {
                                "from": "Appleeee",
                                "to": "Huawei",
                                "value": 10
                            },
                            {
                                "from": "HTC",
                                "to": "Appleeee",
                                "value": 0.1107
                            },
                            {
                                "from": "HTC",
                                "to": "HTC",
                                "value": 1.8272
                            },
                            {
                                "from": "HTC",
                                "to": "Huawei",
                                "value": 0
                            },
                            {
                                "from": "Huawei",
                                "to": "Appleeee",
                                "value": 10
                            },
                            {
                                "from": "Huawei",
                                "to": "HTC",
                                "value": 0.2769
                            },
                            {
                                "from": "Huawei",
                                "to": "Huawei",
                                "value": 0.2215
                            },
                            {
                                "from": "Appleeee",
                                "to": "Nokia",
                                "value": 9.6899
                            },
                            {
                                "from": "Appleeee",
                                "to": "Samsung",
                                "value": 0.8859
                            },
                            {
                                "from": "Appleeee",
                                "to": "Lenovo",
                                "value": 0.0554
                            },
                            {
                                "from": "Appleeee",
                                "to": "Xaomi",
                                "value": 0.1107
                            },
                            {
                                "from": "Lenovo",
                                "to": "Samsung",
                                "value": 1.8272
                            },
                            {
                                "from": "Nokia",
                                "to": "Samsung",
                                "value": 0
                            },
                            {
                                "from": "Huawei",
                                "to": "Xaomi",
                                "value": 0.0554
                            },
                            {
                                "from": "Samsung",
                                "to": "HTC",
                                "value": 0.2769
                            },
                            {
                                "from": "Huawei",
                                "to": "Nokia",
                                "value": 0.2215
                            },
                            {
                                "from": "Apple1",
                                "to": "Apple1",
                                "value": 9.6899
                            },
                            {
                                "from": "Apple1",
                                "to": "HTC1",
                                "value": 0.8859
                            },
                            {
                                "from": "Apple1",
                                "to": "Huawei1",
                                "value": 10
                            },
                            {
                                "from": "HTC1",
                                "to": "Apple1",
                                "value": 0.1107
                            },
                            {
                                "from": "HTC1",
                                "to": "HTC1",
                                "value": 1.8272
                            },
                            {
                                "from": "HTC1",
                                "to": "Huawei1",
                                "value": 0
                            },
                            {
                                "from": "Huawei1",
                                "to": "Apple1",
                                "value": 10
                            },
                            {
                                "from": "Huawei1",
                                "to": "HTC1",
                                "value": 0.2769
                            },
                            {
                                "from": "Huawei1",
                                "to": "Huawei1",
                                "value": 0.2215
                            },
                            {
                                "from": "Apple1",
                                "to": "Nokia1",
                                "value": 10
                            },
                            {
                                "from": "Apple1",
                                "to": "Samsung1",
                                "value": 5
                            },
                            {
                                "from": "Apple1",
                                "to": "Lenovo1",
                                "value": 4
                            },
                            {
                                "from": "Xaomi1",
                                "to": "Apple1",
                                "value": 25,
                                "toolText": "$dominantPlotIdentifier $dominantNode"
                            },						
                            {
                                "from": "Apple1",
                                "to": "Xaomi1",
                                "value": 15
                            },
                            {
                                "from": "Lenovo1",
                                "to": "Samsung1",
                                "value": 11
                            },
                            {
                                "from": "Nokia1",
                                "to": "Samsung1",
                                "value": 5
                            },
                            {
                                "from": "Huawei1",
                                "to": "Xaomi1",
                                "value": 2
                            },
                            {
                                "from": "Samsung1",
                                "to": "HTC1",
                                "value": 3
                            },
                            {
                                "from": "Huawei1",
                                "to": "Nokia1",
                                "value": 5
                            }
    
                        ]
                    }
                }