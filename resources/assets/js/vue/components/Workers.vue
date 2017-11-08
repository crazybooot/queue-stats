<template>
    <div>
        <vuetable :fields="settings.fields"
                  :api-url="settings.apiUrl"
                  :css="settings.css"
                  pagination-path=""
                  data-path="">
        </vuetable>
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
                            sortField: 'class',
                            titleClass: 'text-center',
                            dataClass: 'text-center',
                        },
                    ],
                    apiUrl: '/queue-stats/workers',
                    css: {
                        tableClass: 'table table-responsive table-hover table-bordered',
                        loadingClass: 'loading',
                    }
                }
            };
        }
    }
</script>