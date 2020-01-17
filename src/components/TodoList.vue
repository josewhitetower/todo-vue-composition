<template>
    <div
        class="TodoList py-8 bg-red-500 text-center text-white font-sans rounded mt-8 shadow-2xl"
    >
        <h1 class="text-3xl uppercase font-thin mb-4">Todo List!</h1>
        <draggable @start="drag=true" @end="drag=false" :list="todos" @update="() => save(todos)">
            <Todo v-for="(todo, index) in shownTodos" :key="todo.id" :todo="todo" @remove="() => removeTodo(index)" @toggle="() => toggleTodo(index)" @edit="(value) => editTodo(index, value)"/>
        </draggable>
        <FilterTodos @picked="onPicked"/>
        <NewTodoForm @add="addNewTodo" />
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import useTodo from '../hooks/todos'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import FilterTodos from './FilterTodos'
export default {
    components: {
        Todo,
        NewTodoForm,
        FilterTodos,
        draggable,
    },

    setup() {
        const {state, addNewTodo, removeTodo, toggleTodo, editTodo, save} = useTodo();
        const {todos} = state;
        let filter = 'all';
        return {
            todos, addNewTodo, removeTodo, toggleTodo, editTodo, save, filter
        }
    },

    computed: {
        shownTodos() {
            if (this.filter === 'done') {
                return this.todos.filter(todo => todo.isDone);
            } else if (this.filter === 'undone') {
                return this.todos.filter(todo => !todo.isDone);
            }
            return this.todos;
        },
    },

    methods: {
        onPicked(value) {
            this.filter = value
        }
    }

}
</script>

<style>

</style>