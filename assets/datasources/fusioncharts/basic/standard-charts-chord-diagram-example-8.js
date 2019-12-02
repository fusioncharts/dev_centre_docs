{
    type: "chord",
    renderAt: "chart-container",
    id: "chord-chart",
    width: "700",
    height: "500",
    dataFormat: "json",
    dataSource: {
        chart: {
            caption: "Different countries Gross Export",
            subcaption: "in 2017",
            nodeLabelPosition: "outside",
            showLegend: 0,
            theme: "fusion",
            mode: "post",
            showNodeLabels: "0",
            startingAngle: "120"
        },
        nodes: [{
                label: "India"
            },
            {
                label: "Canada"
            },
            {
                label: "USA"
            },
            {
                label: "China"
            },
            {
                label: "UK"
            },
            {
                label: "UAE"
            }
        ],
        links: [

            {
                from: "India",
                to: "Canada",
                value: 3040000000
            },
            {
                from: "India",
                to: "USA",
                value: 46500000000
            },
            {
                from: "India",
                to: "China",
                value: 12700000000
            },
            {
                from: "India",
                to: "UK",
                value: 8860000000
            },
            {
                from: "India",
                to: "UAE",
                value: 27500000000
            },
            {
                from: "Canada",
                to: "India",
                value: 24490000000
            },

            {
                from: "Canada",
                to: "USA",
                value: 310000000000
            },
            {
                from: "Canada",
                to: "China",
                value: 18300000000
            },
            {
                from: "Canada",
                to: "UK",
                value: 9320000000
            },
            {
                from: "Canada",
                to: "UAE",
                value: 1830000000
            },
            {
                from: "USA",
                to: "India",
                value: 24100000000
            },
            {
                from: "USA",
                to: "Canada",
                value: 277000000000
            },

            {
                from: "USA",
                to: "China",
                value: 132000000000
            },
            {
                from: "USA",
                to: "UK",
                value: 53600000000
            },
            {
                from: "USA",
                to: "UAE",
                value: 19900000000
            },
            {
                from: "China",
                to: "India",
                value: 68100000000
            },
            {
                from: "China",
                to: "Canada",
                value: 51900000000
            },
            {
                from: "China",
                to: "USA",
                value: 480000000000
            },

            {
                from: "China",
                to: "UK",
                value: 56800000000
            },
            {
                from: "China",
                to: "UAE",
                value: 45800000000
            },
            {
                from: "UK",
                to: "Canada",
                value: 62400000000
            },
            {
                from: "UK",
                to: "USA",
                value: 5780000000
            },
            {
                from: "UK",
                to: "India",
                value: 518000000
            },
            {
                from: "UK",
                to: "China",
                value: 21200000000
            },

            {
                from: "UK",
                to: "UAE",
                value: 9270000000
            },
            {
                from: "UAE",
                to: "India",
                value: 20500000000
            },
            {
                from: "UAE",
                to: "Canada",
                value: 299000000
            },
            {
                from: "UAE",
                to: "USA",
                value: 7470000000
            },
            {
                from: "UAE",
                to: "China",
                value: 1160000000
            },
            {
                from: "UAE",
                to: "UK",
                value: 3550000000
            },

        ]
    }
}