import { reactive } from "@vue/composition-api";
const useTodo = () => {
    let state = reactive({
        todos: JSON.parse(localStorage.getItem("todos") || "[]"),
        todo: {}
    })

    const addNewTodo = (title) => {
        state.todos.push({title, isDone:false});
        state.todo = {};
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

    const save = () => {
        localStorage.setItem("todos", JSON.stringify(state.todos));
    };

    return {
        state, addNewTodo, removeTodo, toggleTodo, editTodo
    }
}

export default useTodo;