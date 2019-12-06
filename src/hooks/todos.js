import { reactive } from "@vue/composition-api";

const useTodo = () => {
    let state = reactive({
        todos: [],
    })

    const addNewTodo = (todo) => {
        state.todos.push(todo);
    }
    return {
        state, addNewTodo
    }
}

export default useTodo;