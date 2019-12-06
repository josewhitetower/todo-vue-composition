<template>
  <div id="app" class="max-w-lg mx-auto h-screen px-2">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
export default {
  name: 'app',
  components: {
    TodoList,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
