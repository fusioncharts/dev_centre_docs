{
    type: "timeseries",
    renderAt: "chart-container",
    width: "100%",
    height: 470,
    dataSource: {
      data: dataStore,
      caption: {
        text: "Plot for temperature change",
        "style": {
          "text": {
            "fill": "#ff0000",
            "font-size": "24"
          }
        }
      },
      chart: {
        showLegend: 1,
        theme: "umber",
        showtooltip: 1,
        palettecolors: "#138D75"
      },
      yAxis: [{
        plot: [{
          value: {
            high: 'High',
            low: 'Low'
          },
          type: "area-range",
          name: "India",
          style: {
            'fill-opacity': 0.6,
            'stroke-opacity': 0.95
          }
        }],
        format: {
          suffix: " C"
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
            "background-color": "#808B96"
          },
          text: {
            "color": "#FFFFFF"
          }
        }
      }
    }
  }