{
      type: 'timeseries',
      renderAt: 'container',     
width: "100%"
      height: 400,
	 dataSource: {
        "chart": {
    "paletteColors": "#ff0000, #00ff00, #0000ff",
          "animation": "0",
          "multicanvas": 0
        },
        "caption": {
          "text": "Temperature readings of an Italian Town"
        },
        "yAxis": [{
          "plot": "Temperature",
          "title": "Temperature",
          "plotType": "column",
          "format": {
            "suffix": "°C",
            "label": "Controlled Temperature",
            "value": "10"
          }
        }],
        "xAxis": {
          "binning": {
            "month": [1],
            "day": [1],
            "hour": [3,
			6]
          }
        },
        data: dataStore.createDataTable(data, schema)
      }
    }