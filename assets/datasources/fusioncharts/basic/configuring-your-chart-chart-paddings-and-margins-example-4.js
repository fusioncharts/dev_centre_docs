{
    type: 'area2d',
    
    renderAt: 'chart-container',
    width: '500',
    height: '250',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Quarterly Revenue",
            "subCaption": "Last year",
            "xAxisName": "Quarter",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            //Canvas padding
            "canvasPadding": "30",
            //Theme
            "theme": "fusion"
        },
        "data": [{
            "label": "First Quarter",
            "value": "420000"
        }, {
            "label": "Second Quarter",
            "value": "810000"
        }, {
            "label": "Third Quarter",
            "value": "720000"
        }, {
            "label": "Fourth Quarter",
            "value": "550000"
        }]
    },
    "events": {
        "rendered": function(evtObj, argObj) {
            var radElem,
                radio = document.getElementsByTagName('input'),
                flag = 1;
            for (var i = 0; i < radio.length; i++) {
                radElem = radio[i];
                if (radElem.type === 'radio') {
                    radElem.onclick = function() {
                        val = this.getAttribute('value');
                        if (val === "withCP" && flag !== 1) {
                            evtObj.sender.setChartAttribute("canvasPadding", "30");
                            flag = 1;
                        } else if (val === "withoutCP" && flag !== 0) {
                            evtObj.sender.setChartAttribute("canvasPadding", "0");
                            flag = 0;
                        }
                    };
                }
            }
        },
        'beforeRender': function(event, args) {
            var radioContainer = document.createElement('div');

            radioContainer.innerHTML = '<div id="radio-container"><label><input type="radio" id="withCP" name="padding" value="withCP" CHECKED > With Padding</label><label><input type="radio" id="withoutCP" name="padding" value="withoutCP"> Without Padding</label></div>';
            args.container.appendChild(radioContainer);
            args.container.setAttribute('style', 'padding:10px;font-family: Helvetica Neue, Arial; font-size: 14px; font-weight: normal;');
            radioContainer.setAttribute('style', 'margin-top: 10px; width: 500px; text-align:  center;');
        }

    }
}
