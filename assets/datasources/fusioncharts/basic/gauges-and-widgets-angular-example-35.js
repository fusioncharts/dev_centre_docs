{
	type: "angulargauge",
	width: "100%",
	height: "100%",
	dataFormat: "json",
	dataSource: {
		chart: {
			caption: "Customer Satisfaction Score",
			subcaption: "Los Angeles Topanga",
			plotToolText: "Current Score: $value",
			manageResize: "1",
			theme: "fusion",
			chartBottomMargin: "50",
			showValue: "1"
		},
		colorRange: {
			color: [
				{
					minValue: "0",
					maxValue: "4.5",
					code: "#e44a00"
				},
				{
					minValue: "4.5",
					maxValue: "7.5",
					code: "#f8bd19"
				},
				{
					minValue: "7.5",
					maxValue: "10",
					code: "#6baa01"
				}
			]
		},
		dials: {
			dial: [
				{
					value: "8.9"
				}
			]
		},
		trendPoints: {
			point: [
				{
					startValue: "6.8",
					color: "#0075c2",
					dashed: "1"
				},
				{
					startValue: "9.5",
					color: "#0075c2",
					dashed: "1"
				},
				{
					startValue: "6.8",
					endValue: "9.5",
					color: "#0075c2",
					radius: "185",
					innerRadius: "80"
				}
			]
		},
		annotations: {
			origw: "400",
			origh: "350",
			autoscale: "1",
			showBelow: "0",
			groups: [
				{
					id: "arcs",
					x: "0",
					y: "0",
					items: [
						{
							id: "national-cs-bg",
							type: "rectangle",
							x: "$chartCenterX+2",
							y: "$chartEndY - 45",
							tox: "$chartCenterX + 130",
							toy: "$chartEndY - 25",
							fillcolor: "#f8bd19"
						},
						{
							id: "national-cs-text",
							type: "Text",
							color: "#ffffff",
							label: "National Average : 7.2",
							fontSize: "12",
							align: "left",
							x: "$chartCenterX + 7",
							y: "$chartEndY - 35"
						},
						{
							id: "state-cs-bg",
							type: "rectangle",
							x: "$chartCenterX-2",
							y: "$chartEndY - 45",
							tox: "$chartCenterX - 103",
							toy: "$chartEndY - 25",
							fillcolor: "#6baa01"
						},
						{
							id: "state-cs-text",
							type: "Text",
							color: "#ffffff",
							label: "State Average : 8",
							fontSize: "12",
							align: "right",
							x: "$chartCenterX - 7",
							y: "$chartEndY - 35"
						},
						{
							id: "store-cs-bg",
							type: "rectangle",
							x: "$chartCenterX-130",
							y: "$chartEndY - 22",
							tox: "$chartCenterX + 150",
							toy: "$chartEndY - 2",
							fillcolor: "#0075c2"
						},
						{
							id: "state-cs-text",
							type: "Text",
							color: "#ffffff",
							label: "Store's Customer Satisfaction Range: 6.8 to 9.5",
							fontSize: "12",
							align: "center",
							x: "$chartCenterX + 10",
							y: "$chartEndY - 12"
						}
					]
				}
			]
		}
	},
	events: {
		beforeRender: function(evt, args) {
			var controls = document.createElement("div"),
            chartContainer = args.container;

			var getInputComponent = function(value, label) {
				var span = document.createElement("span"),
					input = document.createElement("input"),
					wrapper = document.createElement("div");

				span.innerText = label;
				input.value = value;
            input.id = label;
            input.type = 'number';

				wrapper.appendChild(span);
				wrapper.appendChild(input);

				return wrapper;
         };

         var setDimensionOnClick = function() {
				var iniWidth = 400,
					iniHeight = 300,
					widthInput = document.getElementById("Width"),
					heightInput = document.getElementById("Height"),
					w = parseInt(widthInput.value, 10) || iniWidth,
					h = parseInt(heightInput.value, 10) || iniHeight;
				if (w && h) {
					chartContainer.style.width = w + "px";
               chartContainer.style.height = h + "px";
				}
         };

			controls.appendChild(getInputComponent(250, "Width"));
			controls.appendChild(getInputComponent(200, "Height"));
         controls.style.cssText = "text-align: center;";

         var btn = document.createElement("button");
			btn.innerText = "Resize";
			btn.style.cssText = "background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px; margin-top: 10px;";
         btn.onclick = setDimensionOnClick;
         controls.appendChild(btn)

			chartContainer.appendChild(controls);
      }
	}
}
