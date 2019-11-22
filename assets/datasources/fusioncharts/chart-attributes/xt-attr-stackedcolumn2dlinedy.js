{
    type: 'stackedcolumn2dlinedy',
    renderAt: 'container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "Global Robotic Process Automation Market",
            subcaption: "2016 - 2021",
            yaxisname: "Market Size (in $ Millions)",
            syaxisname: "YoY growth in %",
            formatnumberscale: "0",
            numberprefix: "$",
            numbersuffix: "M",
            snumbersuffix: "%",
            showvalues: "0",
            plottooltext: "Market size for $seriesName in $label is <b>$dataValue</b>",
            theme: "fusion"
        },
        categories: [{
            category: [{
                    label: "2016"
                },
                {
                    label: "2017"
                },
                {
                    label: "2018"
                },
                {
                    label: "2019"
                },
                {
                    label: "2020"
                },
                {
                    label: "2021"
                }
            ]
        }],
        dataset: [{
                seriesname: "RPA Software",
                data: [{
                        value: "73"
                    },
                    {
                        value: "113"
                    },
                    {
                        value: "153"
                    },
                    {
                        value: "192"
                    },
                    {
                        value: "232"
                    },
                    {
                        value: "272"
                    }
                ]
            },
            {
                seriesname: "RPA Services",
                data: [{
                        value: "198"
                    },
                    {
                        value: "330"
                    },
                    {
                        value: "476"
                    },
                    {
                        value: "630"
                    },
                    {
                        value: "790"
                    },
                    {
                        value: "952"
                    }
                ]
            },
            {
                seriesname: "YoY Growth",
                parentyaxis: "S",
                plottooltext: "$dataValue growth expected in $label",
                renderas: "line",
                data: [{
                        value: "73"
                    },
                    {
                        value: "63"
                    },
                    {
                        value: "42"
                    },
                    {
                        value: "31"
                    },
                    {
                        value: "24"
                    },
                    {
                        value: "20"
                    }
                ]
            }
        ]
    }
}
