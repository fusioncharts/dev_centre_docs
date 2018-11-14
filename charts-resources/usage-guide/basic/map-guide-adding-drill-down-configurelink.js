{
    type: 'maps/world',
    renderAt: 'chart-container',
    width: '700',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "World Population Density",
            "subcaption": "Number of people per Square Mile",
            "theme": "fusion",
            "formatNumberScale": "0",
            "showLabels": "1",
            "nullEntityColor": "#C2C2D6",
            "nullEntityAlpha": "50",
            "hoverOnNull": "0",
            "useSNameInLabels": "0",
            "entityFillColor": "#A8A8A8",
            "entityFillHoverColor": "#E5E5E9"
        },
        "colorrange": {
            "startlabel": "Low",
            "endlabel": "High",
            "code": "#e44a00",
            "minvalue": "0",
            "gradient": "1",
            "color": [{
                "maxvalue": "60",
                "displayvalue": "Average",
                "code": "#f8bd19"
            }, {
                "maxvalue": "300",
                "code": "#6baa01"
            }]
        },

        "data": [{
                "id": "NA",
                "displayValue": "North America",
                "value": "57.2",
                "link": "newchart-json-NA"
            }, {
                "id": "SA",
                "value": "57.1",
                "showLabel": "1",
            }, {
                "id": "AS",
                "value": "247",
                "showLabel": "1",
            }, {
                "id": "EU",
                "value": "188.5",
                "showLabel": "1",
            }, {
                "id": "AF",
                "value": "87.2",
                "showLabel": "1",
            }, {
                "id": "AU",
                "value": "8.32",
                "showLabel": "1",
            }

        ],
        "linkeddata": [{
            "id": "NA",
            "linkedchart": {

                "chart": {
                    "caption": "US Population Density by State",
                    "subcaption": "Number of people per Square Mile",
                    "entityFillHoverColor": "#cccccc",
                    "showLabels": "1",
                    "entityFillColor": "#A8A8A8",
                    "entityFillHoverColor": "#E5E5E9",
                    "theme": "fusion",
                    "showBorder": "1",
                    "bordercolor": "#FFFFFF",
                    "entityborderThickness": "3"

                },
                "colorrange": {
                    "startlabel": "Low",
                    "endlabel": "High",
                    "code": "#e44a00",
                    "minvalue": "0",
                    "gradient": "1",
                    "color": [{
                        "maxvalue": "150",
                        "displayvalue": "Average",
                        "code": "#f8bd19"
                    }, {
                        "maxvalue": "600",
                        "code": "#6baa01"
                    }]
                },

                "data": [{
                    "id": "HI",
                    "value": "99"
                }, {
                    "id": "DC",
                    "value": "99"
                }, {
                    "id": "MD",
                    "value": "90"
                }, {
                    "id": "DE",
                    "value": "96"
                }, {
                    "id": "RI",
                    "value": "90"
                }, {
                    "id": "WA",
                    "value": "228"
                }, {
                    "id": "OR",
                    "value": "105"
                }, {
                    "id": "CA",
                    "value": "221"
                }, {
                    "id": "AK",
                    "value": "260"
                }, {
                    "id": "ID",
                    "value": "396"
                }, {
                    "id": "NV",
                    "value": "169"
                }, {
                    "id": "AZ",
                    "value": "435"
                }, {
                    "id": "MT",
                    "value": "445"
                }, {
                    "id": "WY",
                    "value": "455"
                }, {
                    "id": "UT",
                    "value": "227"
                }, {
                    "id": "CO",
                    "value": "214"
                }, {
                    "id": "NM",
                    "value": "196"
                }, {
                    "id": "ND",
                    "value": "331"
                }, {
                    "id": "SD",
                    "value": "374"
                }, {
                    "id": "NE",
                    "value": "329"
                }, {
                    "id": "KS",
                    "value": "231"
                }, {
                    "id": "OK",
                    "value": "150"
                }, {
                    "id": "TX",
                    "value": "202"
                }, {
                    "id": "MN",
                    "value": "137"
                }, {
                    "id": "IA",
                    "value": "143"
                }, {
                    "id": "MO",
                    "value": "424"
                }, {
                    "id": "AR",
                    "value": "485"
                }, {
                    "id": "LA",
                    "value": "124"
                }, {
                    "id": "WI",
                    "value": "181"
                }, {
                    "id": "IL",
                    "value": "120"
                }, {
                    "id": "KY",
                    "value": "309"
                }, {
                    "id": "TN",
                    "value": "250"
                }, {
                    "id": "MS",
                    "value": "351"
                }, {
                    "id": "AL",
                    "value": "271"
                }, {
                    "id": "GA",
                    "value": "124"
                }, {
                    "id": "MI",
                    "value": "120"
                }, {
                    "id": "IN",
                    "value": "205"
                }, {
                    "id": "OH",
                    "value": "476"
                }, {
                    "id": "PA",
                    "value": "445"
                }, {
                    "id": "NY",
                    "value": "369"
                }, {
                    "id": "VT",
                    "value": "322"
                }, {
                    "id": "NH",
                    "value": "216"
                }, {
                    "id": "ME",
                    "value": "404"
                }, {
                    "id": "MA",
                    "value": "165"
                }, {
                    "id": "CT",
                    "value": "316"
                }, {
                    "id": "NJ",
                    "value": "553"
                }, {
                    "id": "WV",
                    "value": "560"
                }, {
                    "id": "VA",
                    "value": "565"
                }, {
                    "id": "NC",
                    "value": "534"
                }, {
                    "id": "SC",
                    "value": "503"
                }, {
                    "id": "FL",
                    "value": "503"
                }]


            }

        }]
    },
    "events": {
        "beforeRender": function(e) {
            e.sender.configureLink({
                "type": "maps/usa"
            }, 0);
        }
    }

}
