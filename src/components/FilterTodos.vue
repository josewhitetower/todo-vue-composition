<template>
    <div class="flex justify-end mt-4 pr-4 items-baseline">
        <input type="radio" id="all" value="all" v-model="picked" class="mr-2">
        <label for="all">All</label>
        <input type="radio" id="done" value="done" v-model="picked" class="ml-8 mr-2">
        <label for="done">Done</label>
        <input type="radio" id="undone" value="undone" v-model="picked" class="ml-8 mr-2">
        <label for="two">Undone</label>
    </div>
</template>

<script>
    export default {
        data: () => ({
            picked: "all"
        }),

        watch: {
            picked() {
                this.$emit('picked', this.picked)
            }
        }
    }
</script>