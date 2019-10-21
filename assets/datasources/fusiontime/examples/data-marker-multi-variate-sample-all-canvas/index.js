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
      "dataMarker": [
        {
          "time": "2024-9-17",
          "timeFormat": "%Y-%-m-%-d"
        },
        {
          "time": "2027-4-13",
          "timeFormat": "%Y-%-m-%-d"
        }
      ]
  }
}