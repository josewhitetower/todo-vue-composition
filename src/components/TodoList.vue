<template>
    <div
        class="TodoList py-8 bg-red-500 text-center text-white font-sans rounded mt-8 shadow-2xl"
    >
        <h1 class="text-3xl uppercase font-thin mb-4">Todo List!</h1>
        <!-- <ul>
            <li v-for="(todo, index) in todos" :key="todo.id"><Todo :todo="todo" @remove="() => removeTodo(index)" @toggle="() => toggleTodo(index)" @edit="(value) => editTodo(index, value)"/></li>
        </ul> -->
        <draggable v-model="todos" group="people" @start="drag=true" @end="(event) => toggleDrag(drag, event)">
            <Todo v-for="(todo, index) in todos" :key="todo.id" :todo="todo" @remove="() => removeTodo(index)" @toggle="() => toggleTodo(index)" @edit="(value) => editTodo(index, value)"/>
        </draggable>
        <NewTodoForm @add="addNewTodo" />
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import useTodo from '../hooks/todos'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
export default {
    components: {
        Todo,
        NewTodoForm,
        draggable,
    },

    setup() {
        const {state, addNewTodo, removeTodo, toggleTodo, editTodo, save} = useTodo();
        const {todos} = state
        // eslint-disable-next-line no-unused-vars
        const toggleDrag = (drag, event) => {
            drag = false;
            save()
        }
        return {
            todos, addNewTodo, removeTodo, toggleTodo, editTodo, toggleDrag
        }
    }

}
</script>

<style>

</style>