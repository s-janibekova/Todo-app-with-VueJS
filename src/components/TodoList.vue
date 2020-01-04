<template>

       <ul id="sortable" class="list-unstyled">
                        <li class="ui-state-default" v-for="todo in todos" :key="todo.id">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" @click="finishedTodo(todo.id)"  value="" />
                                   
                                                 <span class="text"> {{todo.title }}</span>
                               
                                    </label>
                                
                            </div>
            </li>
        </ul>

                                    
</template>

<script>


export default {
    data() {
        return {
            show: true
        }
    },
    props: {
        todos: {
            type: Array,
            required: true
        },
    },

    methods: {
        finishedTodo(todoId) {
            this.$store.dispatch('finishedTodo', { id: todoId })
        },

        
    },
    name: "TodoList"

}
</script>

<style>

</style>