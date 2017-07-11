window.onload = function () {

    if ($('#analysis-graph').length) {

        var data = {
            labels: ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
            datasets: [{
                backgroundColor: "rgba(3,199,217,0.8)",
                borderColor: "rgba(75,192,192,1)",
                data: [2000, 2500, 1500, 3500, 2200, 2800, 3000, 4000, 3500, 5500, 6800],
            }]
        };

        var ctx = document.getElementById("analysis-graph");
        Chart.defaults.global.legend.display = false;
        var myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        // Change here
                        barPercentage: 1
                    }]
                },
                legend: {
                    position: 'right'
                }
            }
        });

    }

    if ($('#service-analysis-graph').length) {

        var ctx = document.getElementById("service-analysis-graph").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Total Projects - 35% ", "Loan Prograns - 65% ", "Debt Prograns -  15%"],
                datasets: [{
                    backgroundColor: [
                      "#b855f1",
                      "#1a9bff",
                      "#f8bc3c"
                    ],
                    data: [35, 65, 15]
                }]
            },
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        });

    }


};