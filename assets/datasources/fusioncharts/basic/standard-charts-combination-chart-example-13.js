{
    type: 'mscombi3d',
    renderAt: 'container',
    width: '680',
    height: '450',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: "Revenue, Profits & Number of employees",
            drawcrossline: "1",
            yaxisname: "Revenue / Profit (in $)",
            syaxisname: "Number of employees",
            showvalues: "0",
            showanchors: "0",
            numberprefix: "$",
            plothighlighteffect: "fadeout",
            theme: "fusion"
        },
        categories: [{
            category: [{
                    label: "Mar-2012"
                },
                {
                    label: "Jun-2012"
                },
                {
                    label: "Sept-2012"
                },
                {
                    label: "Dec-2012"
                },
                {
                    label: "Mar-2013"
                },
                {
                    label: "Jun-2013"
                },
                {
                    label: "Sept-2013"
                },
                {
                    label: "Dec-2013"
                },
                {
                    label: "Mar-2014"
                },
                {
                    label: "Jun-2014"
                },
                {
                    label: "Sept-2014"
                },
                {
                    label: "Dec-2014"
                },
                {
                    label: "Mar-2015"
                },
                {
                    label: "Jun-2015"
                },
                {
                    label: "Sept-2015"
                },
                {
                    label: "Dec-2015"
                },
                {
                    label: "Mar-2016"
                },
                {
                    label: "Jun-2016"
                },
                {
                    label: "Sept-2016"
                },
                {
                    label: "Dec-2016"
                },
                {
                    label: "Mar-2017"
                },
                {
                    label: "Jun-2017"
                }
            ]
        }],
        dataset: [{
                seriesname: "Revenue",
                plottooltext: "Revenue in $label : <b>$dataValue</b>",
                data: [{
                        value: "36000"
                    },
                    {
                        value: "22000"
                    },
                    {
                        value: "24000"
                    },
                    {
                        value: "42000"
                    },
                    {
                        value: "35000"
                    },
                    {
                        value: "21000"
                    },
                    {
                        value: "26000"
                    },
                    {
                        value: "28000"
                    },
                    {
                        value: "47000"
                    },
                    {
                        value: "38000"
                    },
                    {
                        value: "29000"
                    },
                    {
                        value: "23000"
                    },
                    {
                        value: "24000"
                    },
                    {
                        value: "42000"
                    },
                    {
                        value: "35000"
                    },
                    {
                        value: "21000"
                    },
                    {
                        value: "26000"
                    },
                    {
                        value: "28000"
                    },
                    {
                        value: "47000"
                    },
                    {
                        value: "38000"
                    },
                    {
                        value: "29000"
                    },
                    {
                        value: "23000"
                    }
                ]
            },
            {
                seriesname: "Profit",
                plottooltext: "Profit in $label : <b>$dataValue</b>",
                renderas: "area",
                showvalues: "0",
                data: [{
                        value: "4000"
                    },
                    {
                        value: "5000"
                    },
                    {
                        value: "3000"
                    },
                    {
                        value: "4000"
                    },
                    {
                        value: "1000"
                    },
                    {
                        value: "7000"
                    },
                    {
                        value: "1000"
                    },
                    {
                        value: "4000"
                    },
                    {
                        value: "1000"
                    },
                    {
                        value: "6000"
                    },
                    {
                        value: "2000"
                    },
                    {
                        value: "7000"
                    },
                    {
                        value: "6000"
                    },
                    {
                        value: "8000"
                    },
                    {
                        value: "10000"
                    },
                    {
                        value: "7000"
                    },
                    {
                        value: "8000"
                    },
                    {
                        value: "4000"
                    },
                    {
                        value: "9000"
                    },
                    {
                        value: "6000"
                    },
                    {
                        value: "6000"
                    },
                    {
                        value: "7000"
                    }
                ]
            },
            {
                seriesname: "Number of Employees",
                parentyaxis: "S",
                renderas: "line",
                showvalues: "0",
                plottooltext: "$value employees",
                data: [{
                        value: "31"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "35"
                    },
                    {
                        value: "29"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "23"
                    },
                    {
                        value: "26"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "35"
                    },
                    {
                        value: "20"
                    },
                    {
                        value: "30"
                    },
                    {
                        value: "46"
                    },
                    {
                        value: "34"
                    },
                    {
                        value: "26"
                    },
                    {
                        value: "33"
                    },
                    {
                        value: "46"
                    },
                    {
                        value: "25"
                    },
                    {
                        value: "35"
                    },
                    {
                        value: "28"
                    },
                    {
                        value: "20"
                    },
                    {
                        value: "43"
                    }
                ]
            }
        ]
    }
}
