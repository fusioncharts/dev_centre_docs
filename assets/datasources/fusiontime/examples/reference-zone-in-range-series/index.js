{
      type: "timeseries",
      renderAt: "container",
      width: "100%",
      height: "400",
      dataSource: {
        "chart": {
          "animation": 0,
          theme: "fusion"

        },
        data: dataStore,
        "xAxis": {
          "plot": "Time",
          "title": "xAxisName",
        },
        "yaxis": [
          {
            "plot": {
              "value": {
                high: "Measure2",
                low: "Measure1"
              },
              "type": "area-range",
              "name": "area-range"
            },
            "referenceZone": [{
              "label": "Last Year Range",
              "valueMin": "50",
              "valueMax": "80"
            }]
          }
        ]
      }
    }