<template>
    <div>
        <table class="vuetable ui blue selectable celled stackable attached table">
            <thead>
            <tr>
                <th class="vuetable-th-id">Attempt number</th>
                <th class="vuetable-th-id">Status</th>
                <th class="vuetable-th-id">Handling duration</th>
                <th class="vuetable-th-id">Waiting duration</th>
                <th class="vuetable-th-id">Exception message</th>
                <th class="vuetable-th-id">Call stack</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="attempt in rowData.attempts">
                <td v-text="attempt.attempt_number"></td>
                <td v-text="attempt.status"></td>
                <td v-text="attempt.handling_duration"></td>
                <td v-text="attempt.waiting_duration"></td>
                <td v-text="attempt.exception_message"></td>
                <td v-text="attempt.exception_call_stack"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            rowData: {
                type: Object,
                required: true
            },
            rowIndex: {
                type: Number
            }
        }
    }
</script>