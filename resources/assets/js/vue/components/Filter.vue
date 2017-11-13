<template>
    <div>
    <div class="row">
        <div class="col-md-2">
            <div class="input-group">
                <span class="input-group-addon">Class</span>
                <select class="form-control"
                        v-model="filter.classname">
                    <option v-for="classname in classnames" :value="classname" v-text="classname"></option>
                </select>
            </div>
        </div>
        <div class="col-md-2">
            <div class="input-group">
                <span class="input-group-addon">Queue</span>
                <select class="form-control"
                        v-model="filter.queue">
                    <option v-for="queue in queues" :value="queue" v-text="queue"></option>
                </select>
            </div>
        </div>
        <div class="col-md-2">
            <div class="input-group">
                <span class="input-group-addon">Connection</span>
                <select class="form-control">
                        v-model="filter.connection">
                    <option v-for="connection in connections" :value="connection" v-text="connection"></option>
                </select>
            </div>
        </div>
        <div class="col-md-2">
            <div class="input-group">
                <span class="input-group-addon">Status</span>
                <select class="form-control"
                        v-model="filter.status">
                    <option v-for="status in statuses" :value="status" v-text="status"></option>
                </select>
            </div>
        </div>
        <div class="col-md-2">
            <div class="input-group">
                <button type="button" class="btn btn-primary">
                    Filter
                </button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                filter: {
                    classname: '',
                    queue: '',
                    connection: '',
                    status: '',
                },
                classnames: [],
                queues: [],
                connections: [],
                statuses: []
            };
        },
        mounted() {
            this.getFilters();
        },
        methods: {
            getFilters() {
                axios.get('queue-stats/filters')
                    .then(response => {
                        this.classnames = response.data.classnames;
                        this.queues = response.data.queues;
                        this.connections = response.data.connections;
                        this.statuses = response.data.statuses;
                    })
            }
        }
    }
</script>