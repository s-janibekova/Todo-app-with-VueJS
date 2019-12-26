<template>
       <ul id="sortable" class="list-unstyled">
                        <li class="ui-state-default" v-for="todo in todos" :key="todo.id">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" value="" />{{ todo.title }}h</label>
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
        }
    },
    name: "TodoList"

}
</script>

<style>

</style>