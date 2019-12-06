<template>
    <div
        class="TodoList py-8 bg-red-500 text-center text-white font-sans rounded mt-8 shadow-2xl"
    >
        <h1 class="text-3xl uppercase font-thin mb-4">Todo List!</h1>
        <ul>
            <li v-for="todo in todos" :key="todo.id"><Todo :todo="todo" /></li>
        </ul>
        <NewTodoForm @add="addNewTodo" />
    </div>
</template>

<script>
import useTodo from '../hooks/todos'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
export default {
    components: {
        Todo,
        NewTodoForm
    },

    setup() {
        const {state, addNewTodo} = useTodo();
        const {todos} = state
        return {
            todos, addNewTodo
        }
    }

}
</script>

<style>

</style>