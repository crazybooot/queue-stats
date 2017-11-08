<template>
    <div class="card mb-3 text-center">
        <h3 class="card-header">Jobs Stats</h3>
        <div class="card-block">
            <vuetable :fields="settings.fields"
                      :api-url="settings.apiUrl"
                      :css="settings.css"
                      pagination-path=""
                      data-path="">
            </vuetable>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                settings: {
                    fields: [
                        {
                            name: 'name',
                            title: 'name',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'driver',
                            title: 'driver',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'queue',
                            title: 'queue',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                        {
                            name: 'retry_after',
                            title: 'retry_after',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                    ],
                    apiUrl: '/queue-stats/config',
                    css: {
                        tableClass: 'table table-responsive table-hover table-bordered',
                        loadingClass: 'loading',
                    }
                }
            };
        }
    }
</script>