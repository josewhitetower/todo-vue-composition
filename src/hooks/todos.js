import { reactive } from "@vue/composition-api";

const useTodo = () => {
    let state = reactive({
        todos: [{title:"hello", id: 1, isDone: true}]
    })

    const addNewTodo = (todo) => {
        state.todos.push(todo);
    }
    return {
        state, addNewTodo
    }
}

export default useTodo;