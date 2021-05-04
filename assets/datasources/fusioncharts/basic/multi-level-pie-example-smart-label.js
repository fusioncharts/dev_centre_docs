{
	type: 'multilevelpie',
    renderAt: 'chart-container',
    width: '500',
    height: '500',
    dataFormat: 'json',
    dataSource: {
		"chart": {
        "theme": "fusion",
        "autoRotateLabels": "1",
        "skipOverlapLabels": "1",
     
        "caption": "Sales Breakup - Top Product Categories",
        "subCaption": "Last Quarter",
        "pieFillAlpha": "60",
        "pieBorderThickness": "2",
        "hoverFillColor": "#cccccc",
        "pieBorderColor": "#ffffff",
        "useHoverColor": "1",
        "showValuesInTooltip": "1",
        "showPercentInTooltip": "0",
        "numberPrefix": "$",
        "plotTooltext": "$label, $$valueK, $percentValue",
        "highlightParentPieSlices": "0",
        "highlightChildPieSlices": "1",
        "exportEnabled": "1"
      },
      "category": [{
        "autoRotateLabels": "true",
        "label": "Sales by category",
        "color": "#ffffff",
        "value": "150",
        "category": [{
            "label": "Food & {br}Beverages",
            "color": "#f8bd19",
            "value": "55.5",
            "category": [{
                "label": "Breads",
                "color": "#f8bd19",
                "value": "11.1"
              },
              {
                "label": "Juice",
                "color": "#f8bd19",
                "value": "27.75"
              },
              {
                "label": "Noodles",
                "color": "#f8bd19",
                "value": "9.99"
              },
              {
                "label": "Seafood",
                "color": "#f8bd19",
                "value": "6.66"
              }
            ]
          },
          {
            "label": "Apparel &{br}Accessories",
            "autoRotateLabels": "true",
            "color": "#e44a00",
            "value": "42",
            "category": [{
                "label": "Sun Glasses",
                "color": "#e44a00",
                "value": "10.08"
              },
              {
                "label": "Clothing",
                "color": "#e44a00",
                "value": "18.9"
              },
              {
                "label": "Handbags",
                "color": "#e44a00",
                "value": "6.3"
              },
              {
                "label": "Shoes",
                "color": "#e44a00",
                "value": "6.72"
              }
            ]
          },
          {
            "label": "Baby {br}Products",
            "color": "#008ee4",
            "value": "22.5",
            "category": [{
                "label": "Bath &{br}Grooming",
                "color": "#008ee4",
                "value": "9.45"
              },
              {
                "label": "Feeding",
                "color": "#008ee4",
                "value": "6.3"
              },
              {
                "label": "Diapers",
                "color": "#008ee4",
                "value": "6.75"
              }
            ]
          },
          {
            "label": "Electronics",
            "color": "#33bdda",
            "value": "30",
            "category": [{
                "label": "Laptops",
                "color": "#33bdda",
                "value": "8.1"
              },
              {
                "label": "Televisions",
                "color": "#33bdda",
                "value": "10.5"
              },
              {
                "label": "SmartPhones",
                "color": "#33bdda",
                "value": "11.4"
              }
            ]
          }
        ]
      }]
    }
  }
