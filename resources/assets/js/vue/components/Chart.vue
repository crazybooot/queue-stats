<template>
    <div>
        <highcharts :options="options"></highcharts>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    title: {
                        text: 'Jobs durations statistics'
                    },

                    subtitle: {
                        text: 'Jobs durations'
                    },

                    yAxis: {
                        title: {
                            text: 'Duration in miliseconds'
                        }
                    },
                    xAxis: {
                        categories: []
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },
                    series: [
                        {
                            name: 'Handling duration',
                            data: []
                        },
                        {
                            name: 'Waiting duration',
                            data: []
                        },
                        {
                            name: 'Queries duration',
                            data: []
                        }
                    ],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }

                },
            }
        },
        created() {
            axios.get('jobs-stats/chart')
                .then(response => {
                    this.options.series[0].data = response.data.handling_duration;
                    this.options.series[1].data = response.data.waiting_duration;
                    this.options.series[2].data = response.data.queries_duration;
                    this.options.xAxis.categories = response.data.classes;
                })
        }
    }
</script>