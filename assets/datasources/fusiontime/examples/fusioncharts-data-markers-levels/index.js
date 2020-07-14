{
 
					
	  type: 'timeseries',
      renderAt: 'container',
      width: 600,
      height: 400,
      dataSource: {
	  
        "chart": {
          "animation": "0",
          "multicanvas": "0"
        },
        "caption": {
          "text": "Temperature readings of an Italian Town"
        },
        "yAxis": [{
          "plot": "Temperature",
          "title": "Temperature",
          "plotType": "line",
          "format": {
            "suffix": "C",
            "label": "Controlled Temperature",
            "value": "10"
          }
        }],
                datamarker: [{
				
		  style: {
            marker: {"fill": "ff0000"}
            
        },
                    time: "02/16/2020 13:40:30",
                    identifier: "A",
                    timeformat: "%m/%d/%Y %H:%M:%S",
                    tooltext: "Data marker"
                }],
                "xaxis": {
                    "binning": {
                        "year":[],
						"month": [1],
                        "day": [1],
                        "hour": [1],
                        "minute": [40],
						"sercond": [30]
                    }
                },
        data: dataStore
      }
    }