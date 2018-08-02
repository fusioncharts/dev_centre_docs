{
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of visitors by age group-FY2013-14",
            "subCaption": "Harry's SuperMart",
            "enableSmartLabels": "0",
            "showPercentValues": "1",
            "showTooltip": "0",
            "decimals": "1",
            "theme": "fusion"
        },

        "data": [{
            "label": "Teenage",
            "value": "1250400"
        }, {
            "label": "Adult",
            "value": "1463300"
        }, {
            "label": "Mid-age",
            "value": "1050700"
        }, {
            "label": "Senior",
            "value": "491000"
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var controllers = document.createElement('div');
            controllers.innerHTML = "Hover on any of the pie slices to view its details.";
            controllers.setAttribute('id', 'indicatorDiv');
            controllers.style.cssText = "color: #1790e1; width: 480px; font-family:'Arial, Helvetica'; font-size:14px; padding:10px;";     
            args.container.appendChild(controllers);
        },


        "dataplotRollOver": function(evt, data) {
            var txt = "Age group: " + data.categoryLabel + "<br/>No. of visitors: " + data.value;
               document.getElementById("indicatorDiv").innerHTML = txt;

        },
        "dataplotRollOut": function(evt, data) {
            document.getElementById("indicatorDiv").innerHTML = "Hover on any of the pie slices to view its details.";
        }
    }
}
