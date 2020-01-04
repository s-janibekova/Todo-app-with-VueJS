<template>
       <ul id="sortable" class="list-unstyled">
                        <li class="ui-state-default" v-for="todo in todos" :key="todo.id">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" @click="finishedTodo(todo.id)"  value="" />{{ todo.title }}h</label>
                            </div>
            </li>
        </ul>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        },
    },

    methods: {
        finishedTodo(todoId) {
            // EventBus.$emit('completed-todo', {id: todoId})
        }
    },
    name: "TodoList"

}
</script>

<style>

</style>