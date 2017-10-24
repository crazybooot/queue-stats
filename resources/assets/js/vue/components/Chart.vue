<template>
    <div>
        <select v-model="type">
            <option v-for="type in types" value="type.id" v-text="type.name"></option>
        </select>
        <highcharts :options="options"></highcharts>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: '',
                types: [
                    {
                        id: 1,
                        name: 'durations'
                    },
                    {
                        id: 2,
                        name: 'attempts'
                    }
                ],
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
                    this.options.series[0].data = response.data.handling_durations;
                    this.options.series[1].data = response.data.waiting_durations;
                    this.options.xAxis.categories = response.data.classes;
                })
        }
    }
</script>