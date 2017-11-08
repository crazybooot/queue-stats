<template>
    <div class="card mb-3 text-center">
        <h3 class="card-header">Jobs Stats</h3>
        <div class="card-block">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card mb-3 text-center">
                        <h3 class="card-header">Success Jobs</h3>
                        <div class="card-block">
                            <p class="card-text" v-text="success"></p>
                            <span>{{ successPercent }}%</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card mb-3 text-center">
                        <h3 class="card-header">Failed Jobs</h3>
                        <div class="card-block">
                            <p class="card-text" v-text="failed"></p>
                            <span>{{ failedPercent }}%</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card mb-3 text-center">
                        <h3 class="card-header">Unhandled Jobs</h3>
                        <div class="card-block">
                            <p class="card-text" v-text="unhandled"></p>
                            <span>{{ unhandledPercent }}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                success: 0,
                failed: 0,
                unhandled: 0
            };
        },
        computed: {
            successPercent() {
                return this.total / 100 * this.success;
            },
            failedPercent() {
                return this.total / 100 * this.failed;
            },
            unhandledPercent() {
                return this.total / 100 * this.unhandled;
            },
            total() {
                return this.success + this.failed + this.unhandled;
            }
        },
        created() {
            axios.get('queue-stats/stats')
                .then(response => {
                    this.success = parseInt(response.data.success);
                    this.failed = parseInt(response.data.failed);
                    this.unhandled = parseInt(response.data.unhandled);
                })
        }
    }
</script>