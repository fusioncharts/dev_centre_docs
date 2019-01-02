{
    type: 'multilevelpie',
    renderAt: 'chart-container',
    
    width: '500',
    height: '500',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Sales Breakup - Top Product Categories",
            "subcaption": "Last Quarter",
            "showPlotBorder": "1",
            "piefillalpha": "60",
            "pieborderthickness": "2",
            "hoverfillcolor": "#CCCCCC",
            "piebordercolor": "#FFFFFF",
            "hoverfillcolor": "#CCCCCC",
            "numberprefix": "$",
            "plottooltext": "$label, $$valueK, $percentValue",
            //Theme
            "theme": "fusion"
        },
        "category": [{
            "label": "Products",
            "color": "#ffffff",
            "value": "150",
            "category": [{
                "label": "Food & {br}Beverages",
                "color": "#f8bd19",
                "value": "55.5",
                "tooltext": "Food & Beverages, $$valueK, $percentValue",
                "category": [{
                    "label": "Breads",
                    "color": "#f8bd19",
                    "value": "11.1"
                }, {
                    "label": "Juice",
                    "color": "#f8bd19",
                    "value": "27.75"
                }, {
                    "label": "Noodles",
                    "color": "#f8bd19",
                    "value": "9.99"
                }, {
                    "label": "Seafood",
                    "color": "#f8bd19",
                    "value": "6.66"
                }]
            }, {
                "label": "Apparel &{br}Accessories",
                "color": "#33ccff",
                "value": "42",
                "tooltext": "Apparel & Accessories, $$valueK, $percentValue",
                "category": [{
                    "label": "Sun Glasses",
                    "color": "#33ccff",
                    "value": "10.08"
                }, {
                    "label": "Clothing",
                    "color": "#33ccff",
                    "value": "18.9"
                }, {
                    "label": "Handbags",
                    "color": "#33ccff",
                    "value": "6.3"
                }, {
                    "label": "Shoes",
                    "color": "#33ccff",
                    "value": "6.72"
                }]
            }, {
                "label": "Baby {br}Products",
                "color": "#ffcccc",
                "value": "22.5",
                "tooltext": "Baby Products, $$valueK, $percentValue",
                "category": [{
                    "label": "Bath &{br}Grooming",
                    "color": "#ffcccc",
                    "value": "9.45",
                    "tooltext": "Bath & Grooming, $$valueK, $percentValue",

                }, {
                    "label": "Food",
                    "color": "#ffcccc",
                    "value": "6.3"
                }, {
                    "label": "Diapers",
                    "color": "#ffcccc",
                    "value": "6.75"
                }]
            }, {
                "label": "Electronics",
                "color": "#ccff66",
                "value": "30",
                "category": [{
                    "label": "Laptops",
                    "color": "#ccff66",
                    "value": "8.1"
                }, {
                    "label": "Televisions",
                    "color": "#ccff66",
                    "value": "10.5"
                }, {
                    "label": "SmartPhones",
                    "color": "#ccff66",
                    "value": "11.4"
                }]
            }]
        }]
    }
}
