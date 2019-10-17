{
  type: 'timeseries',
  renderAt: 'container',
  width: '95%',
  height: 650,
  dataSource: {
      data: dataStore,
      chart: {},
      "caption": {
          "text": "La petite boulangerie"
      },
      "subcaption": {
          "text": "Units Sold and Sales over 10 years"
      },
      "series": "Item",
      "dataMarker": [{
              "time": "2024-9-17",
              "timeFormat": "%Y-%-m-%-d",
              "tooltext": "Lowest units of Cake sold since cake decorator was fired.",
              "value": "Units Sold",
              "identifier": "C",
              "series": {
                  "Item": "Cake"
              }
          },
          {
              "time": "2024-9-17",
              "timeFormat": "%Y-%-m-%-d",
              "tooltext": "Lowest sales of Cake since cake decorator was fired.",
              "value": "Sales (USD)",
              "identifier": "C",
              "series": {
                  "Item": "Cake"
              }
          },
          {
              "time": "2027-4-13",
              "timeFormat": "%Y-%-m-%-d",
              "tooltext": "Units of Cookie sold affected by Candy discount.",
              "value": "Units Sold",
              "identifier": "K",
              "series": {
                  "Item": "Cookie"
              }
          },
          {
              "time": "2027-4-13",
              "timeFormat": "%Y-%-m-%-d",
              "tooltext": "Max units of Candy sold since Candy discount started.",
              "value": "Units Sold",
              "identifier": "D",
              "series": {
                  "Item": "Candy"
              }
          }
      ]
  }
}