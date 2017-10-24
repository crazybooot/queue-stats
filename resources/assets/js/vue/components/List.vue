<template>
    <div>
        <vuetable ref="vuetable"
                  :fields="settings.fields"
                  :api-url="settings.apiUrl"
                  :css="css"
                  pagination-path=""
                  detail-row-component="job"
                  @vuetable:cell-clicked="onCellClicked"
                  @vuetable:pagination-data="onPaginationData">
        </vuetable>
            <vuetable-pagination ref="pagination"
                                 @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue'
    import Job from './Job.vue'

    Vue.component('job', Job);

    export default {
        components: {
            Vuetable,
            VuetablePagination
        },
        data() {
            return {
                settings: {
                    fields: [
                        {
                            name: 'uuid',
                            title: 'uuid',
                            sortField: 'uuid'
                        },
                        {
                            name: 'class',
                            title: 'class',
                            sortField: 'class'
                        },
                        {
                            name: 'connection',
                            title: 'connection',
                            sortField: 'connection'
                        },
                        {
                            name: 'queue',
                            title: 'queue',
                            sortField: 'queue'
                        },
                        {
                            name: 'type',
                            title: 'type',
                            sortField: 'type'
                        },
                        {
                            name: 'status',
                            title: 'status',
                            sortField: 'status'
                        },
                        {
                            name: 'handling_duration',
                            title: 'handling duration',
                            sortField: 'handling_duration'
                        },
                        {
                            name: 'waiting_duration',
                            title: 'waiting duration',
                            sortField: 'waiting_duration'
                        },
                        {
                            name: 'attempts_count',
                            title: 'attempts',
                            sortField: 'attempts_count'
                        },
                        {
                            name: 'result',
                            title: 'result',
                            sortField: 'result'
                        },
                        {
                            name: 'created_at',
                            title: 'created at',
                            sortField: 'created_at'
                        },
                    ],
                    css: {
                        ascendingIcon: 'glyphicon glyphicon-chevron-up',
                        descendingIcon: 'glyphicon glyphicon-chevron-down'
                    },
                    apiUrl: '/jobs-stats/list',
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
            onCellClicked (data, field, event) {
                this.$refs.vuetable.toggleDetailRow(data.id)
            }
        }
    }
</script>;