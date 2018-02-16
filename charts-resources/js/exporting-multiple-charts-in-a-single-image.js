var batchExportConfig = function() {
  FusionCharts.batchExport({
    "charts":[
      {"id":"chart-1"},
      {"id":"chart-2"},
      {"id":"chart-3"},
      {"id":"chart-4"}
    ],
    "exportFileName":"batchExport",
    "exportFormat":"jpg",
    "exportAtClientSide":"1",      
  });
};


var selectiveBatchExportConfig = function() {
  FusionCharts.batchExport({
    "charts":[
      {"id":"chart-1", x: 25, y: 25, width: 400, height: 225},
      {"id":"chart-4", x: 25, y: 275, width: 400, height: 225}
    ],
    "imageWidth": 450,
    "iamgeHeight": 525,
    "exportFileName":"selectiveBatchExport",
    "exportFormat":"jpg",
    "exportAtClientSide":"1",      
  });
};

