google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('number', 'Year (200)');
data.addColumn('number', '1.5 C target');
data.addColumn('number', 'historical projection');
data.addColumn('number', 'optimistic scenario');

data.addRows([
  [4,  null, 43, null],
  [11,  null, 49, null],
  [18,  null, 52, null],
  [21,  50, 50, 50],
  [25,  43, 51, 49],
  [32,  24, 53, 48],
  [39,  18, 54, 45.4],
  [46,   12.5, 54,  35.7],
  [53,   9, 53,  30.6],
  [60,  7.9, 52.9, 23.6],
  [67,  5.5, 52.5, 21.8],
  [74, 0, 51.9, 18.6],
  [81,  -1,  50, 16],
  [88,  -1.5,  49,  15],
  [95,  -3, 48,  12],
]);

var options = {
  chart: {
    title: 'CO2 emissions projection graph',
    subtitle: 'Unit: Gt CO2eq'
  },
  width: 800,
  height: 500,
  axes: {
    x: {
      0: {side: 'top'}
    }
  }
};

var chart = new google.charts.Line(document.getElementById('line_top_x'));

chart.draw(data, google.charts.Line.convertOptions(options));
}



