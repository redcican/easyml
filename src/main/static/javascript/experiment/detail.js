$(document).ready(function() {
    $( '#predict_form' ).each(function(){
        this.reset();
    });

    draw_chart_performance();

//    new Chart(document.getElementById("chart_models"), {
//        type: 'bubble',
//        data: {
//          labels: "Models Performance",
//          datasets: model_performance_data
//        },
//        options: {
//          title: {
//            display: false,
//            text: ''
//          }, scales: {
//            yAxes: [{
//              scaleLabel: {
//                display: true,
//                labelString: "Test Score"
//              }
//            }],
//            xAxes: [{
//              scaleLabel: {
//                display: true,
//                labelString: "Evaluation Score"
//              }
//            }]
//          }
//        }
//    });

    var FImportanceContext = document.getElementById("chart_feature_importance").getContext("2d");
    var FImportanceData = {
        labels: feature_importance_label,
        datasets: [{
            label: "",
            data: feature_importance_data,
            backgroundColor: "#ade8f4",
            hoverBackgroundColor: "#f3722c"
        }]
    };
    var FImportanceChart = new Chart(FImportanceContext, {
        type: 'bar',
        data: FImportanceData,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                }],
                yAxes: [{
                   stacked: false
                }]
            },
            responsive: true,
            indexAxis: 'y',
            legend: {
                display: false
            },
        }
    });

});

function delete_confirm(delete_predict_id, delete_predict_name){
    $("#delete_predict_id").val(delete_predict_id)
    $("#delete_predict_name").text(delete_predict_name)
}

function draw_chart_performance(){

    Highcharts.chart('chart_models', {

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            height: 500
        },

        legend: {
            enabled: false
        },

        title: {
            text: ''
        },

        accessibility: {
            point: {
            valueDescriptionFormat: '{index}. {point.name}, Test score : {point.x}, Validation score: {point.y}'
            }
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Validation score'
            },
            labels: {
                format: '{value}'
            },

            accessibility: {
                rangeDescription: 'Range: 60 to 100 grams.'
            }
        },
        credits: {
            enabled: false
        },
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Test score'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.2,

            accessibility: {
                rangeDescription: 'Range: 0 to 160 grams.'
            }
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h4>{point.name}</h4></th></tr>' +
            '<tr><th>Validation :</th><td>{point.x}</td></tr>' +
            '<tr><th>Test:</th><td>{point.y}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                        format: '{point.name}'
                }
            }
        },

        series: [{
            data: models_performance,
            color: 'rgba(173, 232, 244, 0.3)',
        }]
    });
}
