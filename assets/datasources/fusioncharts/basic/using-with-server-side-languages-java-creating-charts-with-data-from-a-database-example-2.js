{
    type: 'column2d',
    renderAt: 'chart-container',
    id: 'popular-countries-drill down ',
    width: '700',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 10 Most Populous Countries",
            "theme": "fusion"
        },
        "data": [{
                "label": "China",
                "value": "1277558000",
                "link": "newchart-xml-china"
            }, {
                "label": "India",
                "value": "1013662000",
                "link": "newchart-xml-india"
            }, {
                "label": "United States",
                "value": "278357000",
                "link": "newchart-xml-us"
            }, {
                "label": "Indonesia",
                "value": "212107000",
                "link": "newchart-xml-indonesia"
            }, {
                "label": "Brazil",
                "value": "170115000",
                "link": "newchart-xml-brazil"
            }, {
                "label": "Pakistan",
                "value": "156483000",
                "link": "newchart-xml-pakistan"
            }, {
                "label": "Russian Federation",
                "value": "146934000",
                "link": "newchart-xml-russianfed"
            }, {
                "label": "Bangladesh",
                "value": "129155000",
                "link": "newchart-xml-bangladesh"
            }, {
                "label": "Japan",
                "value": "126714000",
                "link": "newchart-xml-japan"
            }, {
                "label": "Nigeria",
                "value": "111506000",
                "link": "newchart-xml-nigeria"
            },
        ],
        "linkeddata": [{
            //China                         
            "id": "china",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - China",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "Shanghai",
                    "value": 9696300
                }, {
                    "label": "Peking",
                    "value": 7472000
                }, {
                    "label": "Chongqing",
                    "value": 6351600
                }, {
                    "label": "Tianjin",
                    "value": 5286800
                }, {
                    "label": "Wuhan",
                    "value": 4344600
                }, {
                    "label": "Harbin",
                    "value": 4289800
                }, {
                    "label": "Shenyang",
                    "value": 4265200
                }, {
                    "label": "Kanton [Guangzhou]",
                    "value": 4256300
                }, {
                    "label": "Chengdu",
                    "value": 3361500
                }, {
                    "label": "Nanking [Nanjing]",
                    "value": 2870300
                }]
            }
        }, {
            //India                                      
            "id": "india",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - India",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "Mumbai (Bombay)",
                    "value": 10500000
                }, {
                    "label": "Delhi",
                    "value": 7206704
                }, {
                    "label": "Calcutta [Kolkata]",
                    "value": 4399819
                }, {
                    "label": "Chennai (Madras)",
                    "value": 3841396
                }, {
                    "label": "Hyderabad",
                    "value": 2964638
                }, {
                    "label": "Ahmedabad",
                    "value": 2876710
                }, {
                    "label": "Bangalore",
                    "value": 2660088
                }, {
                    "label": "Kanpur",
                    "value": 1874409
                }, {
                    "label": "Nagpur",
                    "value": 1624752
                }, {
                    "label": "Lucknow",
                    "value": 1619115
                }]
            }
        }, {
            //US
            "id": "us",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - United States",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "New York",
                    "value": 8008278
                }, {
                    "label": "Los Angeles",
                    "value": 3694820
                }, {
                    "label": "Chicago",
                    "value": 2896016
                }, {
                    "label": "Houston",
                    "value": 1953631
                }, {
                    "label": "Philadelphia",
                    "value": 1517550
                }, {
                    "label": "Phoenix",
                    "value": 1321045
                }, {
                    "label": "San Diego",
                    "value": 1223400
                }, {
                    "label": "Dallas",
                    "value": 1188580
                }, {
                    "label": "San Antonio",
                    "value": 1144646
                }, {
                    "label": "Detroit",
                    "value": 951270
                }]
            }
        }, {
            //Indonesia
            "id": "indonesia",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - Indonesia",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "Jakarta",
                    "value": 9604900
                }, {
                    "label": "Surabaya",
                    "value": 2663820
                }, {
                    "label": "Bandung",
                    "value": 2429000
                }, {
                    "label": "Medan",
                    "value": 1843919
                }, {
                    "label": "Palembang",
                    "value": 1222764
                }, {
                    "label": "Tangerang",
                    "value": 1198300
                }, {
                    "label": "Semarang",
                    "value": 1104405
                }, {
                    "label": "Ujung Pandang",
                    "value": 1060257
                }, {
                    "label": "Malang",
                    "value": 716862
                }, {
                    "label": "Bandar Lampung",
                    "value": 680332
                }]
            }
        }, {
            //Brazil
            "id": "brazil",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - Brazil",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "S?o Paulo",
                    "value": 9968485
                }, {
                    "label": "Rio de Janeiro",
                    "value": 5598953
                }, {
                    "label": "Salvador",
                    "value": 2302832
                }, {
                    "label": "Belo Horizonte",
                    "value": 2139125
                }, {
                    "label": "Fortaleza",
                    "value": 2097757
                }, {
                    "label": "Bras?lia",
                    "value": 1969868
                }, {
                    "label": "Curitiba",
                    "value": 1584232
                }, {
                    "label": "Recife",
                    "value": 1378087
                }, {
                    "label": "Porto Alegre",
                    "value": 1314032
                }, {
                    "label": "Manaus",
                    "value": 1255049
                }]
            }
        }, {
            //Pakistan
            "id": "pakistan",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - Pakistan",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "Karachi",
                    "value": 9269265
                }, {
                    "label": "Lahore",
                    "value": 5063499
                }, {
                    "label": "Faisalabad",
                    "value": 1977246
                }, {
                    "label": "Rawalpindi",
                    "value": 1406214
                }, {
                    "label": "Multan",
                    "value": 1182441
                }, {
                    "label": "Hyderabad",
                    "value": 1151274
                }, {
                    "label": "Gujranwala",
                    "value": 1124749
                }, {
                    "label": "Peshawar",
                    "value": 988005
                }, {
                    "label": "Quetta",
                    "value": 560307
                }, {
                    "label": "Islamabad",
                    "value": 524500
                }]
            }
        }, {
            //Russian Federation
            "id": "russianfed",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - Russian Federation",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "Moscow",
                    "value": 8389200
                }, {
                    "label": "St Petersburg",
                    "value": 4694000
                }, {
                    "label": "Novosibirsk",
                    "value": 1398800
                }, {
                    "label": "Nizni Novgorod",
                    "value": 1357000
                }, {
                    "label": "Jekaterinburg",
                    "value": 1266300
                }, {
                    "label": "Samara",
                    "value": 1156100
                }, {
                    "label": "Omsk",
                    "value": 1148900
                }, {
                    "label": "Kazan",
                    "value": 1101000
                }, {
                    "label": "Ufa",
                    "value": 1091200
                }, {
                    "label": "T?eljabinsk",
                    "value": 1083200
                }]
            }
        }, {
            //Bangladesh
            "id": "bangladesh",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - Bangladesh",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "Dhaka",
                    "value": 3612850
                }, {
                    "label": "Chittagong",
                    "value": 1392860
                }, {
                    "label": "Khulna",
                    "value": 663340
                }, {
                    "label": "Rajshahi",
                    "value": 294056
                }, {
                    "label": "Narayanganj",
                    "value": 202134
                }, {
                    "label": "Rangpur",
                    "value": 191398
                }, {
                    "label": "Mymensingh",
                    "value": 188713
                }, {
                    "label": "Barisal",
                    "value": 170232
                }, {
                    "label": "Tungi",
                    "value": 168702
                }, {
                    "label": "Jessore",
                    "value": 139710
                }]
            }
        }, {
            //Japan
            "id": "japan",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - Japan",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "Tokyo",
                    "value": 7980230
                }, {
                    "label": "Jokohama [Yokohama]",
                    "value": 3339594
                }, {
                    "label": "Osaka",
                    "value": 2595674
                }, {
                    "label": "Nagoya",
                    "value": 2154376
                }, {
                    "label": "Sapporo",
                    "value": 1790886
                }, {
                    "label": "Kioto",
                    "value": 1461974
                }, {
                    "label": "Kobe",
                    "value": 1425139
                }, {
                    "label": "Fukuoka",
                    "value": 1308379
                }, {
                    "label": "Kawasaki",
                    "value": 1217359
                }, {
                    "label": "Hiroshima",
                    "value": 1119117
                }]
            }
        }, {
            //Nigeria
            "id": "nigeria",
            "linkedchart": {
                "chart": {
                    "caption": "Top 10 Most Populous Cities - Nigeria",
                    "showXAxisLine": "1",
                    "xAxisLineColor": "#999999",
                    "divlineColor": "#999999",
                    "divLineIsDashed": "1",
                    "showAlternateHGridColor": "0",
                },
                "data": [{
                    "label": "Lagos",
                    "value": 1518000
                }, {
                    "label": "Ibadan",
                    "value": 1432000
                }, {
                    "label": "Ogbomosho",
                    "value": 730000
                }, {
                    "label": "Kano",
                    "value": 674100
                }, {
                    "label": "Oshogbo",
                    "value": 476800
                }, {
                    "label": "Ilorin",
                    "value": 475800
                }, {
                    "label": "Abeokuta",
                    "value": 427400
                }, {
                    "label": "Port Harcourt",
                    "value": 410000
                }, {
                    "label": "Zaria",
                    "value": 379200
                }, {
                    "label": "Ilesha",
                    "value": 378400
                }]
            }
        }]
    }
}
