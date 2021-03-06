import { reactive } from "@vue/composition-api";
const useTodo = () => {
    let state = reactive({
        todos: JSON.parse(localStorage.getItem("todos") || "[]"),
    })

    const addNewTodo = (title) => {
        state.todos.push({title, isDone:false});
        save();
    }

    const removeTodo = (index) => {
        state.todos.splice(index);
        save();
    }

    const toggleTodo = (index) => {
        state.todos[index].isDone = !state.todos[index].isDone;
        save();
    }

    const editTodo = (index, title) => {
        state.todos[index].title = title;
        save();
    }

    const save = (todos = state.todos) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    return {
        state, addNewTodo, removeTodo, toggleTodo, editTodo, save
    }
}

export default useTodo;