import React from 'react'
import ReactApexChart from 'react-apexcharts';
import "./dashboard.scss"

const Donutchart = () => {
    const state = {
        series: [36, 28, 20, 16],
        options: {
            chart: {
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '60%', 
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                offsetY: 20,
                                formatter: function (val) {
                                    return val;
                                }
                            },
                            value: {
                                show: true,
                                offsetY: -20,
                                formatter: function (val) {
                                    return val;
                                }
                            },
                            total: {
                                show: true,
                                label: 'Order',
                                color: '#373d3f',
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce((a, b) => {
                                        return 666
                                    }, 0)
                                }
                            }
                        }
                    }
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 300,
                        margin: "auto"
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            labels: ['Website', 'Mobile App', 'Whatsapp', 'Instagram'],
            dataLabels: {
                style: {
                    borderRadius: '20px'
                }
            }
            
        }
    };

    return (
        <>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="donut" />
            </div>
            <div id="html-dist"></div>
        </>
    )
}

export default Donutchart
