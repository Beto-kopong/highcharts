$(function () {
    $('#container').highcharts({
        chart: {
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%e of %b'   
            }
        },
        
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            pointStart: Date.UTC(2010, 0, 1),
            pointInterval: 24 * 3600 * 1000 // one day
        }]
    });
});