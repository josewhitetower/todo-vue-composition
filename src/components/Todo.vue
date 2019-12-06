<template>
    <div class="Todo bg-red-400 p-4 mb-2 text-left font-semibold hover:bg-red-300 flex justify-between">
        <p :class="todo.isDone ? 'line-through': ''">{{todo.title}}</p>
        <div className="flex">
            <font-awesome-icon icon="pen" class="cursor-pointer"/>
            <font-awesome-icon icon="trash" class="ml-2 cursor-pointer" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo']

}
</script>

<style>

</style>