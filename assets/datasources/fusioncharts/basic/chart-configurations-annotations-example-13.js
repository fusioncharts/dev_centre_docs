{
    type: 'spline',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Total footfall in Bakersfield Central",
            "subCaption": "Last week",
            "xAxisName": "Day",
            "yAxisName": "No. of Visitors",
            "showValues": "1",
            "theme": "fusion"
        },
        "annotations": {
            "origw": "400",
            "origh": "300",
            "autoscale": "1"

        },
        "data": [{
            "label": "Mon",
            "value": "15123"
        }, {
            "label": "Tue",
            "value": "14233"
        }, {
            "label": "Wed",
            "value": "25507"
        }, {
            "label": "Thu",
            "value": "9110"
        }, {
            "label": "Fri",
            "value": "15529"
        }, {
            "label": "Sat",
            "value": "20803"
        }, {
            "label": "Sun",
            "value": "19202"
        }]
    },
    events: {
        "beforeRender": function(evt, args) {
            var chartRef = evt.sender,
                createGroupItems = function() {
                    var annotations = chartRef.annotations;

                    // Adding a group, "totalFootfall"
                    annotations.addGroup({
                        'id': 'totalFootfall'
                    });

                    //Adding rectangle annotation item to the annotation group
                    annotations.addItem('totalFootfall', {
                        "id": "dyn-labelBG",
                        "type": "rectangle",
                        "radius": "3",
                        "x": "$canvasEndX - 100",
                        "y": "$canvasStartY",
                        "tox": "$canvasEndX",
                        "toy": "$canvasStartY + 30",
                        "color": "#0075c2",
                        "alpha": "70"
                    }, true);

                    // Adding text annotation item to the annotation group
                    annotations.addItem('totalFootfall', {
                        "id": "dyn-label",
                        "type": "text",
                        "text": "Total: 119,507",
                        "fillcolor": "#ffffff",
                        "fontsize": "10",
                        "x": "$canvasEndX - 50",
                        "y": "$canvasStartY + 15"
                    }, true);

                },

                //Code for adding the annotation-Start
                controls = document.createElement('div');
            controls.innerHTML = '<input type="button" id = "add_annotation" value = "Show Total Footfall"></input> &nbsp;</input> &nbsp; <input type="button" id="destroy_annotation" value="Hide Total Footfall" disabled="true"><br> <br><input type="button" id ="update_annotation" value="Change Color" disabled="true"></input>';
            controls.style.cssText = 'width:400px; text-align: center; font-size:12px;';

            // Append controls to document
            args.container.appendChild(controls);
            document.getElementById('add_annotation').onclick = function() {
                createGroupItems();
                document.getElementById('update_annotation').disabled = false;
                document.getElementById('destroy_annotation').disabled = false;
                document.getElementById('add_annotation').disabled = true;
            };
            //Code for adding the annotation-End

            //Code for showing/hiding the annotation-Start



            //Code for changing the color of the rectangle annotation - Start
            document.getElementById('update_annotation').onclick = function() {
                var annotations = evt.sender.annotations;
                annotations.update('dyn-labelBG', {
                    "fillColor": "#123456"
                });
            }

            //Code for changing the color of the rectangle annotation - End

            document.getElementById('destroy_annotation').onclick = function() {
                var annotations = evt.sender.annotations;
                annotations.destroy('totalFootfall');
                document.getElementById('add_annotation').disabled = false;
                document.getElementById('update_annotation').disabled = true;
                document.getElementById('destroy_annotation').disabled = true;
            }
        }
    }
}
