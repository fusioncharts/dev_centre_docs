{
    type: "timeseries",
    renderAt: "chart-container2",
    width: "100%",
    height: 470,
    dataSource: {
      data: dataStore,
      caption: {
        text: "Plot for Energy Consumption",
        "style": {
          "text": {
            "fill": "#ff0000",
            "font-size": "24"
          }
        }
      },
      chart: {
        showLegend: 1,
        theme: "candy",
        showtooltip: 1,
        palettecolors: "#02ECD0"
      },
      yAxis: [{
        plot: [{
          value: {
            high: 'Coal',
            low: 'Hydro'
          },
          type: "column-range",
          name: "World",
          style: {
            'fill-opacity': 0.6,
            'stroke-opacity': 0.95
          }
        }],
        format: {
          suffix: "KW"
        }
      }],
      tooltip: {
        enabled: "true", // Disables the Tooltip
        outputTimeFormat: {
          day: "%d/%m/%y (%a)"
        },
        style: {
          container: {
            "border-color": "#000000",
            "_background-color": "#F2F6F6"
          },
          text: {
            "color": "#FFFFFF"
          }
        }
      }
    }
  }