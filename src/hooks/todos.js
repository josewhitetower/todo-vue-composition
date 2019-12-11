import { reactive } from "@vue/composition-api";
const useTodo = () => {
    let state = reactive({
        todos: [],
        todo: {}
    })

    const addNewTodo = (title) => {
        state.todos.push({title, isDone:false});
        state.todo = {}
    }

    const removeTodo = (index) => {
        state.todos.splice(index);
    }

    const toggleTodo = (index) => {
        state.todos[index].isDone = !state.todos[index].isDone
    }
    const editTodo = (index, title) => {
        state.todos[index].title = title
    }

    return {
        state, addNewTodo, removeTodo, toggleTodo, editTodo
    }
}

export default useTodo;