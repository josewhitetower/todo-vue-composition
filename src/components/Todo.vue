<template>
    <div class="Todo bg-red-400 p-4 mb-2 text-left font-semibold hover:bg-red-300">
        <div v-if="!isEditing" class="flex justify-between items-center">
            <p :class="todo.isDone ? 'line-through': ''" @click="handleTitleClick" @dblclick="handleEditTodo">{{todo.title}}</p>
            <div class="flex">
                <font-awesome-icon icon="pen" class="cursor-pointer" @click="handleEditTodo"/>
                <font-awesome-icon icon="trash" class="ml-2 cursor-pointer" @click="handleRemove"/>
            </div>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="text-center">
            <input
                autofocus
                class="focus:outline-none bg-red-400 font-semibold"
                type="text"
                v-model="title"
            />
        </form>
    </div>
</template>

<script>
import { reactive } from "@vue/composition-api";
export default {
    props: ['todo'],

    setup(props) {
        const state = reactive({
            title: props.todo.title,
            isEditing: false,
        })
        return {
            title: state.title,
            isEditing: state.isEditing,
        }

    },

    methods: {
        handleRemove(){
            this.$emit('remove')
        },
        handleTitleClick() {
            this.$emit('toggle')
        },
        handleEditTodo() {
            this.isEditing = true;
        },
        handleSubmit() {
            this.isEditing = false;
            this.$emit('edit', this.title);
        },

    }

}
</script>

<style>

</style>