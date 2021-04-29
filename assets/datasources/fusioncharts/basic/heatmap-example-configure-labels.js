{
    type: "heatmap",
    renderAt: "chart-container",
    width: "800",
    height: "400",
    dataFormat: "json",
    dataSource: { 
	chart: {
    theme: "fusion",
    caption: "Top Smartphones by Features",
    subcaption: "Source: Q1 Customer Satisfaction Survey",
    showvalues: "1",
    plottooltext:
      "<div><b>$rowLabel</b><br/>$columnLabel Rating: <b>$datavalue</b>/10</div>",
      tlFontColor: "#156f00"
  },
  rows: {
    row: [
      {
        id: "SGS9",
        label: "Samsung Galaxy S9"
      },
      {
        id: "iphonex",
        label: "Iphone X"
      },
      {
        id: "op6",
        label: "One Plus 6"
      },
      {
        id: "motoz2",
        label: "Moto Z2 Force"
      }
    ]
  },
  columns: {
    column: [
      {
        id: "processor",
        label: "Processor"
      },
      {
        id: "screen",
        label: "Screen Size"
      },
      {
        id: "price",
        label: "Price"
      },
      {
        id: "backup",
        label: "Battery Capacity"
      },
      {
        id: "cam",
        label: "Camera"
      }
    ]
  },
  dataset: [
    {
      data: [
        {
          rowid: "SGS9",
          columnid: "processor",
          value: "8.7",
          tllabel: "Octa Core 2.8GHz",
          valueFontColor: "#FF0000"
        },
        {
          rowid: "SGS9",
          columnid: "screen",
          value: "8.5",
          bllabel: "5.8 inch"
        },
        {
          rowid: "SGS9",
          columnid: "price",
          value: "9.3",
          tllabel: "$720"
        },
        {
          rowid: "SGS9",
          columnid: "backup",
          value: "9.7",
          brlabel: "3000 MAH"
        },
        {
          rowid: "SGS9",
          columnid: "cam",
          value: "8",
          trlabel: "8 MP"
        },
        {
          rowid: "iphonex",
          columnid: "processor",
          value: "9.2",
          tllabel: "A11 Bionic Chip "
        },
        {
          rowid: "iphonex",
          columnid: "screen",
          value: "8.3",
          bllabel: "5.8 inch"
        },
        {
          rowid: "iphonex",
          columnid: "price",
          value: "7.3",
          tllabel: "$999"
        },
        {
          rowid: "iphonex",
          columnid: "backup",
          value: "8.8",
          brlabel: "2716 MAH"
        },
        {
          rowid: "iphonex",
          columnid: "cam",
          value: "8.7",
          trlabel: "12 MP"
        },
        {
          rowid: "op6",
          columnid: "processor",
          value: "9.1",
          tllabel: "Octa Core 2.8GHz"
        },
        {
          rowid: "op6",
          columnid: "screen",
          value: "8.6",
          bllabel: "6.28 inch"
        },
        {
          rowid: "op6",
          columnid: "price",
          value: "7.2",
          tllabel: "$529"
        },
        {
          rowid: "op6",
          columnid: "backup",
          value: "8.4",
          brlabel: "3300 MAH"
        },
        {
          rowid: "op6",
          columnid: "cam",
          value: "9.5",
          trlabel: "16 MP"
        },
        {
          rowid: "motoz2",
          columnid: "processor",
          value: "8.8",
          tllabel: "Quad Core 2.35GHz"
        },
        {
          rowid: "motoz2",
          columnid: "screen",
          value: "8.1",
          bllabel: "5.5 inch"
        },
        {
          rowid: "motoz2",
          columnid: "price",
          value: "9.7",
          tllabel: "$370"
        },
        {
          rowid: "motoz2",
          columnid: "backup",
          value: "9.2",
          brlabel: "2730 MAH"
        },
        {
          rowid: "motoz2",
          columnid: "cam",
          value: "7.1",
          trlabel: "24 MP"
        }
      ]
    }
  ],
  colorrange: {
    gradient: "1",
    minvalue: "5",
    maxvalue: "10",
    mapbypercent: "0",
    code: "#67CDF2",
    startlabel: "Poor",
    endlabel: "Outstanding"
  }
}
