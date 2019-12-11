<template>
<form
    class="NewTodoForm flex justify-center p-4 mt-6"
    @submit.prevent="handleSubmit"
    >
    <div>
        <input
        required
        class="focus:outline-none h-12 text-black px-2  rounded-sm"
        placeholder="New Todo..."
        type="text"
        name="title"
        v-model="title"
        />
    </div>
    <button class="border border-2 px-4 py-2 ml-2 rounded-sm hover:bg-red-400 uppercase focus:outline-none">
        Add todo
    </button>
    </form>
</template>

<script>
import { reactive } from '@vue/composition-api';
export default {
    setup() {

        const state = reactive({
            title: ""
        })
        let { title } = state;

        return {
            title,
        }
    },
    methods: {
        handleSubmit(){
            this.$emit('add', this.title);
            this.title = '';
        }
    }
}
</script>

<style>

</style>