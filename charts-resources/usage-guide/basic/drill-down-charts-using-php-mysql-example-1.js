{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '350',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "YoY Sales - KFC",
        "xAxisName": "Year",
        "yAxisName": "Sales",
        "numberPrefix": "$",
        "yAxisMaxValue": "50000",
        "showValues": "0",
        "baseFontColor": "#999999",
        "bgcolor": "#000000",
        "bgAlpha": "85",
        "canvasBgColor": "#000000",
        "showBorder": "1",
        "showCanvasBorder": "1",
        "canvasBgAlpha": "10",
        "canvasBorderColor": "#999999",
        "canvasBorderThickness": ".9",
        "xAxisLineColor": "#999999",
        "divlineColor": "#999999",
        "divLineDashed": "0",
        "plotspacepercent": "20",
        "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
        "theme": "zune"
      },
      "data": [{
        "label": "2011",
        "value": "32145",
        "link": "newchart-json-2011"
      }, {
        "label": "2012",
        "value": "30078",
        "link": "newchart-json-2012"
      }, {
        "label": "2013",
        "value": "14536",
        "link": "newchart-json-2013"
      }, {
        "label": "2014",
        "value": "20163",
        "link": "newchart-json-2014"
      }, {
        "label": "2015",
        "value": "39163",
        "link": "newchart-json-2015"
      }, {
        "label": "2016",
        "value": "39973",
        "link": "newchart-json-2016"
      }],
      "linkeddata": [{
        "id": "2011",
        "linkedchart": {
          "chart": {
            "caption": "QoQ Sales - KFC for 2011",
            "xAxisName": "Quarter",
            "yAxisName": "Sales",
            "numberPrefix": "$",
            "showValues": "0",
            "baseFontColor": "#999999",
            "bgcolor": "#000000",
            "bgAlpha": "85",
            "canvasBgColor": "#000000",
            "showBorder": "1",
            "showCanvasBorder": "1",
            "canvasBgAlpha": "10",
            "canvasBorderColor": "#999999",
            "canvasBorderThickness": ".9",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineDashed": "0",
            "plotspacepercent": "20",
            "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
            "theme": "zune"
          },
          "data": [{
            "label": "Q1",
            "value": "7500",
            "link": "newchart-json-2011Q1"
          }, {
            "label": "Q2",
            "value": "8150",
            "link": "newchart-json-2011Q2"
          }, {
            "label": "Q3",
            "value": "9350",
            "link": "newchart-json-2011Q3"
          }, {
            "label": "Q4",
            "value": "7145",
            "link": "newchart-json-2011Q4"
          }],
          "linkeddata": [{
            "id": "2011Q1",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q1 of 2011",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jan",
                "value": "2000"
              }, {
                "label": "Feb",
                "value": "2300"
              }, {
                "label": "Mar",
                "value": "3200"
              }]
            }
          }, {
            "id": "2011Q2",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q2 of 2011",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Apr",
                "value": "2800"
              }, {
                "label": "May",
                "value": "3000"
              }, {
                "label": "Jun",
                "value": "2350"
              }]
            }
          }, {
            "id": "2011Q3",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q3 of 2011",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jul",
                "value": "2850"
              }, {
                "label": "Aug",
                "value": "3000"
              }, {
                "label": "Sep",
                "value": "3500"
              }]
            }
          }, {
            "id": "2011Q4",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q4 of 2011",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Oct",
                "value": "3000"
              }, {
                "label": "Nov",
                "value": "2895"
              }, {
                "label": "Dec",
                "value": "1250"
              }]
            }
          }]
        }
      }, {
        "id": "2012",
        "linkedchart": {
          "chart": {
            "caption": "QoQ Sales - KFC for 2012",
            "xAxisName": "Quarter",
            "yAxisName": "Sales",
            "numberPrefix": "$",
            "showValues": "0",
            "baseFontColor": "#999999",
            "bgcolor": "#000000",
            "bgAlpha": "85",
            "canvasBgColor": "#000000",
            "showBorder": "1",
            "showCanvasBorder": "1",
            "canvasBgAlpha": "10",
            "canvasBorderColor": "#999999",
            "canvasBorderThickness": ".9",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineDashed": "0",
            "plotspacepercent": "20",
            "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
            "theme": "zune"
          },
          "data": [{
            "label": "Q1",
            "value": "7000",
            "link": "newchart-json-2012Q1"
          }, {
            "label": "Q2",
            "value": "6178",
            "link": "newchart-json-2012Q2"
          }, {
            "label": "Q3",
            "value": "8000",
            "link": "newchart-json-2012Q3"
          }, {
            "label": "Q4",
            "value": "8900",
            "link": "newchart-json-2012Q4"
          }],
          "linkeddata": [{
            "id": "2012Q1",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q1 of 2012",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jan",
                "value": "1585"
              }, {
                "label": "Feb",
                "value": "2345"
              }, {
                "label": "Mar",
                "value": "3070"
              }]
            }
          }, {
            "id": "2012Q2",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q2 of 2012",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Apr",
                "value": "2856"
              }, {
                "label": "May",
                "value": "2500"
              }, {
                "label": "Jun",
                "value": "822"
              }]
            }
          }, {
            "id": "2012Q3",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q3 of 2012",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jul",
                "value": "1500"
              }, {
                "label": "Aug",
                "value": "3296"
              }, {
                "label": "Sep",
                "value": "3204"
              }]
            }
          }, {
            "id": "2012Q4",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q4 of 2012",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Oct",
                "value": "3689"
              }, {
                "label": "Nov",
                "value": "3200"
              }, {
                "label": "Dec",
                "value": "2011"
              }]
            }
          }]
        }
      }, {
        "id": "2013",
        "linkedchart": {
          "chart": {
            "caption": "QoQ Sales - KFC for 2013",
            "xAxisName": "Quarter",
            "yAxisName": "Sales",
            "numberPrefix": "$",
            "showValues": "0",
            "baseFontColor": "#999999",
            "bgcolor": "#000000",
            "bgAlpha": "85",
            "canvasBgColor": "#000000",
            "showBorder": "1",
            "showCanvasBorder": "1",
            "canvasBgAlpha": "10",
            "canvasBorderColor": "#999999",
            "canvasBorderThickness": ".9",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineDashed": "0",
            "plotspacepercent": "20",
            "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
            "theme": "zune"
          },
          "data": [{
            "label": "Q1",
            "value": "3000",
            "link": "newchart-json-2013Q1"
          }, {
            "label": "Q2",
            "value": "4000",
            "link": "newchart-json-2013Q2"
          }, {
            "label": "Q2",
            "value": "3536",
            "link": "newchart-json-2013Q2"
          }, {
            "label": "Q4",
            "value": "4000",
            "link": "newchart-json-2013Q4"
          }],
          "linkeddata": [{
            "id": "2013Q1",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q1 of 2013",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jan",
                "value": "1200"
              }, {
                "label": "Feb",
                "value": "500"
              }, {
                "label": "Mar",
                "value": "400"
              }]
            }
          }, {
            "id": "2013Q2",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q2 of 2013",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Apr",
                "value": "900"
              }, {
                "label": "May",
                "value": "1565"
              }, {
                "label": "Jun",
                "value": "1535"
              }]
            }
          }, {
            "id": "2013Q2",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q2 of 2013",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Apr",
                "value": "900"
              }, {
                "label": "May",
                "value": "1565"
              }, {
                "label": "Jun",
                "value": "1535"
              }]
            }
          }, {
            "id": "2013Q4",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q4 of 2013",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Oct",
                "value": "980"
              }, {
                "label": "Nov",
                "value": "1500"
              }, {
                "label": "Dec",
                "value": "1520"
              }]
            }
          }]
        }
      }, {
        "id": "2014",
        "linkedchart": {
          "chart": {
            "caption": "QoQ Sales - KFC for 2014",
            "xAxisName": "Quarter",
            "yAxisName": "Sales",
            "numberPrefix": "$",
            "showValues": "0",
            "baseFontColor": "#999999",
            "bgcolor": "#000000",
            "bgAlpha": "85",
            "canvasBgColor": "#000000",
            "showBorder": "1",
            "showCanvasBorder": "1",
            "canvasBgAlpha": "10",
            "canvasBorderColor": "#999999",
            "canvasBorderThickness": ".9",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineDashed": "0",
            "plotspacepercent": "20",
            "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
            "theme": "zune"
          },
          "data": [{
            "label": "Q1",
            "value": "5040",
            "link": "newchart-json-2014Q1"
          }, {
            "label": "Q2",
            "value": "5600",
            "link": "newchart-json-2014Q2"
          }, {
            "label": "Q3",
            "value": "4960",
            "link": "newchart-json-2014Q3"
          }, {
            "label": "Q4",
            "value": "4563",
            "link": "newchart-json-2014Q4"
          }],
          "linkeddata": [{
            "id": "2014Q1",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q1 of 2014",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jan",
                "value": "1875"
              }, {
                "label": "Feb",
                "value": "1600"
              }, {
                "label": "Mar",
                "value": "1565"
              }]
            }
          }, {
            "id": "2014Q2",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q2 of 2014",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Apr",
                "value": "2389"
              }, {
                "label": "May",
                "value": "1289"
              }, {
                "label": "Jun",
                "value": "1922"
              }]
            }
          }, {
            "id": "2014Q3",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q3 of 2014",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jul",
                "value": "2006"
              }, {
                "label": "Aug",
                "value": "1854"
              }, {
                "label": "Sep",
                "value": "1100"
              }]
            }
          }, {
            "id": "2014Q4",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q4 of 2014",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Oct",
                "value": "875"
              }, {
                "label": "Nov",
                "value": "1500"
              }, {
                "label": "Dec",
                "value": "2188"
              }]
            }
          }]
        }
      }, {
        "id": "2015",
        "linkedchart": {
          "chart": {
            "caption": "QoQ Sales - KFC for 2015",
            "xAxisName": "Quarter",
            "yAxisName": "Sales",
            "numberPrefix": "$",
            "showValues": "0",
            "baseFontColor": "#999999",
            "bgcolor": "#000000",
            "bgAlpha": "85",
            "canvasBgColor": "#000000",
            "showBorder": "1",
            "showCanvasBorder": "1",
            "canvasBgAlpha": "10",
            "canvasBorderColor": "#999999",
            "canvasBorderThickness": ".9",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineDashed": "0",
            "plotspacepercent": "20",
            "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
            "theme": "zune"
          },
          "data": [{
            "label": "Q1",
            "value": "10700",
            "link": "newchart-json-2015Q1"
          }, {
            "label": "Q2",
            "value": "8563",
            "link": "newchart-json-2015Q2"
          }, {
            "label": "Q3",
            "value": "11000",
            "link": "newchart-json-2015Q3"
          }, {
            "label": "Q4",
            "value": "8900",
            "link": "newchart-json-2015Q4"
          }],
          "linkeddata": [{
            "id": "2015Q1",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q1 of 2015",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jan",
                "value": "4087"
              }, {
                "label": "Feb",
                "value": "3965"
              }, {
                "label": "Mar",
                "value": "2684"
              }]
            }
          }, {
            "id": "2015Q2",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q2 of 2015",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Apr",
                "value": "2983"
              }, {
                "label": "May",
                "value": "3265"
              }, {
                "label": "Jun",
                "value": "2315"
              }]
            }
          }, {
            "id": "2015Q3",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q3 of 2015",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jul",
                "value": "3215"
              }, {
                "label": "Aug",
                "value": "3998"
              }, {
                "label": "Sep",
                "value": "3787"
              }]
            }
          }, {
            "id": "2015Q4",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q4 of 2015",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Oct",
                "value": "4098"
              }, {
                "label": "Nov",
                "value": "2654"
              }, {
                "label": "Dec",
                "value": "2148"
              }]
            }
          }]
        }
      }, {
        "id": "2016",
        "linkedchart": {
          "chart": {
            "caption": "QoQ Sales - KFC for 2016",
            "xAxisName": "Quarter",
            "yAxisName": "Sales",
            "numberPrefix": "$",
            "showValues": "0",
            "baseFontColor": "#999999",
            "bgcolor": "#000000",
            "bgAlpha": "85",
            "canvasBgColor": "#000000",
            "showBorder": "1",
            "showCanvasBorder": "1",
            "canvasBgAlpha": "10",
            "canvasBorderColor": "#999999",
            "canvasBorderThickness": ".9",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",
            "divLineDashed": "0",
            "plotspacepercent": "20",
            "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
            "theme": "zune"
          },
          "data": [{
            "label": "Q1",
            "value": "9900",
            "link": "newchart-json-2016Q1"
          }, {
            "label": "Q2",
            "value": "10000",
            "link": "newchart-json-2016Q2"
          }, {
            "label": "Q3",
            "value": "11173",
            "link": "newchart-json-2016Q3"
          }, {
            "label": "Q4",
            "value": "8900",
            "link": "newchart-json-2016Q4"
          }],
          "linkeddata": [{
            "id": "2016Q1",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q1 of 2016",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jan",
                "value": "2983"
              }, {
                "label": "Feb",
                "value": "3965"
              }, {
                "label": "Mar",
                "value": "2952"
              }]
            }
          }, {
            "id": "2016Q2",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q2 of 2016",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Apr",
                "value": "3998"
              }, {
                "label": "May",
                "value": "3265"
              }, {
                "label": "Jun",
                "value": "2737"
              }]
            }
          }, {
            "id": "2016Q3",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q3 of 2016",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Jul",
                "value": "3215"
              }, {
                "label": "Aug",
                "value": "3787"
              }, {
                "label": "Sep",
                "value": "4171"
              }]
            }
          }, {
            "id": "2016Q4",
            "linkedchart": {
              "chart": {
                "caption": "MoM Sales - KFC for Quarter Q4 of 2016",
                "xAxisName": "Month",
                "yAxisName": "Sales",
                "numberPrefix": "$",
                "showValues": "0",
                "baseFontColor": "#999999",
                "bgcolor": "#000000",
                "bgAlpha": "85",
                "canvasBgColor": "#000000",
                "showBorder": "1",
                "showCanvasBorder": "1",
                "canvasBgAlpha": "10",
                "canvasBorderColor": "#999999",
                "canvasBorderThickness": ".9",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineDashed": "0",
                "plotspacepercent": "20",
                "plotToolText": "Year: <b>$label</b> <br/> Sales: <b>$datavalue</b>",
                "theme": "zune"
              },
              "data": [{
                "label": "Oct",
                "value": "4078"
              }, {
                "label": "Nov",
                "value": "3566"
              }, {
                "label": "Dec",
                "value": "1256"
              }]
            }
          }]
        }
      }]
    }
}