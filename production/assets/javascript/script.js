$('button').on('mousedown', function () {
  $('button').css('margin-top', '3px');
})
$('button').on('mousedown', function () {
  $('button').css('margin-top', '0');
})
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "radar",
  "theme": "light",
  "dataProvider": [ {
    "competencies": "Responsibility",
    "%": 61
  }, {
    "competencies": "Self-management",
    "%": 68
  }, {
    "competencies": "Leadership",
    "%": 71
  }, {
    "competencies": "Motivation",
    "%": 64
  }, {
    "competencies": "Social intelligence",
    "%": 68
  }, {
    "competencies": "Autonomy",
    "%": 43
  }, {
    "competencies": "Arbitration",
    "%": 61
    }, {
    "competencies": "Cooperation",
    "%": 54
  } ],
  "valueAxes": [ {
    "axisTitleOffset": 20,
    "minimum": 0,
    "axisAlpha": 0.15
  } ],
  "startDuration": 2,
  "graphs": [ {
    "balloonText": "[[value]]% [[competencies]]",
    "bullet": "round",
    "lineThickness": 2,
    "valueField": "%"
  } ],
  "categoryField": "competencies",
  "export": {
    "enabled": true
  }
} );
