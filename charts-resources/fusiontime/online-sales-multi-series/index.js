<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv"Sales"

<body>
  <div id="container"></div>
  <script src="./build/fusioncharts.js"></script>
  <script src="./data.js"></script>
  <script src="./schema.js"></script>
  <script>
    const dataStore = new FusionCharts.DataStore(data, schema);

    new FusionCharts({
      type: 'timeseries',
      renderAt: 'container',
      width: "95%",
      height: 650,
      dataSource: {
        data: dataStore.getDataTable(),
        chart: {
        },
        caption: {
          text: 'Online Sales of a SuperStore in India & the US'
        },
        yAxis: [{
          columnName: "Sales",
          plotType: "line"
        }],
        "series": "Country"
      }
    }).render()
  </script>
</body>

</html>