var controls = document.createElement('div');

  window.exportChart = function() {
    FusionCharts.batchExport({
      exportFormat: 'pdf'
    });
  };

  controls.innerHTML = '<button style="background-color: #6957da; border: none; border-radius: 3px; color: white; padding: 4px 12px; text-align: center; cursor: pointer; outline: none; text-decoration: none; display: inline-block; font-size: 14px;" onClick="exportChart()" >Export chart data</button>';
  controls.style.cssText = 'text-align: center; width: 100%;';
  document.body.appendChild(controls);
