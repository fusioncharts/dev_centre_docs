// update date
const getNextRandomDate = d => new Date(new Date(d).getTime() + 1000);
// const getNextRandomDate = (d) => {
//   const newDate1 = new Date(d).getTime() + 1000
//   const result = new Date(newDate1)
//   return result
// }

// const fd = d => d.toISOString().split('.')[0].split('T').join(' ');
const fd = d => {
  var e = new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString();
  var f = e.split(".")[0];
  var g = f.split("T");
  var h = g.join(" ");
  return h;
};

// const fd1 = (d) => {
//     console.log(d.getTime(),"time zone offset:",d.getTimezoneOffset()*60000)
//     var e = new Date(d.getTime() - (d.getTimezoneOffset())*60000).toISOString()
//     console.log("e is:",e)
//     var f = e.split('.')[0]
//     console.log("f is:",f)
//     var g = f.split('T')
//     console.log("g is:",g)
//     var h = g.join(' ')
//     console.log("h is:",h)
//     return h
// }

// random data generator
const randBetween = (min, max) => {
  const ceilMin = Math.ceil(min);

  return Math.floor(Math.random() * (Math.floor(max) - ceilMin + 1)) + ceilMin;
};
// Fusioncharts data store
const dataStore = new FusionCharts.DataStore().createDataTable(data, schema);
// time series chart instance
const realtimeChart = new FusionCharts({
  type: "timeseries",
  renderAt: "chart-container",
  width: "100%",
  height: "600",
  dataSource: {
    data: dataStore,
    yAxis: { plottype: "area" },
    series: "City"
  }
});

let lastTimeStr = data[data.length - 1][0];

realtimeChart.addEventListener(
  "renderComplete",
  ({ sender: realtimeChart }) => {
    lastTimeStr = getNextRandomDate(lastTimeStr);
    console.log("new lastTimeStr:", lastTimeStr);
    let newDate = new Date(lastTimeStr);
    console.log("newDate without format:", newDate);
    let formattedNewDate = fd(newDate);
    console.log("new Date first time:", formattedNewDate);

    let incrementor = setInterval(() => {
      console.log("formattedNewDate before randomizing:", formattedNewDate);
      newDate = getNextRandomDate(formattedNewDate);
      formattedNewDate = fd(newDate);

      realtimeChart.feedData([
        [formattedNewDate, randBetween(13, 45), "Kuala Lumpur"],
        [formattedNewDate, randBetween(13, 45), "Panama City"]
      ]);
    }, 1000);
  }
);
realtimeChart.render();
