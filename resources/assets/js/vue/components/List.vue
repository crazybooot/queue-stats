<template>
    <div>
        <vuetable ref="vuetable"
                  :fields="settings.fields"
                  :api-url="settings.apiUrl"
                  :css="settings.css"
                  pagination-path=""
                  detail-row-component="job"
                  @vuetable:cell-clicked="onCellClicked"
                  @vuetable:pagination-data="onPaginationData">
        </vuetable>
        <vuetable-pagination-bootstrap ref="pagination"
                                       @vuetable-pagination:change-page="onChangePage"></vuetable-pagination-bootstrap>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                settings: {
                    fields: [
                        {
                            name: 'class',
                            title: 'class',
                            sortField: 'jobs_stats_jobs.class',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'connection',
                            title: 'connection',
                            sortField: 'jobs_stats_jobs.connection',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'queue',
                            title: 'queue',
                            sortField: 'queue',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'status',
                            title: 'status',
                            sortField: 'jobs_stats_jobs.status',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'delay',
                            title: 'delay',
                            sortField: 'jobs_stats_jobs.delay',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'tries',
                            title: 'tries',
                            sortField: 'tjobs_stats_jobs.ries',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'timeout',
                            title: 'timeout',
                            sortField: 'jobs_stats_jobs.timeout',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'handling_duration',
                            title: 'handling duration',
                            sortField: 'handling_duration',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'waiting_duration',
                            title: 'waiting duration',
                            sortField: 'waiting_duration',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'queries_duration',
                            title: 'queries duration',
                            sortField: 'queries_duration',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'attempts_count',
                            title: 'attempts',
                            sortField: 'attempts_count',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'queries_count',
                            title: 'queries',
                            sortField: 'queries_count',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'result',
                            title: 'result',
                            sortField: 'jobs_stats_jobs.result',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'created_at',
                            title: 'created at',
                            sortField: 'jobs_stats_jobs.created_at',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                    ],
                    apiUrl: '/jobs-stats/list',
                    css: {
                        tableClass: 'table table-responsive table-hover table-bordered',
                        loadingClass: 'loading',
                    }
                }
            }
        },
        methods: {
            onPaginationData(paginationData) {
                this.$refs.pagination.setPaginationData(paginationData);
            },
            onChangePage(page) {
                this.$refs.vuetable.changePage(page);
            },
            onCellClicked(data, field, event) {
                this.$refs.vuetable.toggleDetailRow(data.id)
            }
        }
    }
</script>;