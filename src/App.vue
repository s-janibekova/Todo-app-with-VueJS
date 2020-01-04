<template>
   <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="todolist not-done">
                    <h1>Todos</h1>
                        <AddTodo />
                    <hr>
                      <TodoList :todos="unFinishedTodos"/>

                    <div class="todo-footer">
                        <strong>
                            <span class="count-todos">{{unFinishedTodos.length }}</span>
                        </strong> Items Left
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <FinishedTodos :todos ="finishedTodos" />
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import FinishedTodos from '@/components/FinishedTodos.vue';
import AddTodo from '@/components/AddTodo.vue'; 
import gsap from 'gsap'

export default {
    name: 'app',
    methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0,0)'
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: 'bounce.inOut',
        onComplete: done
      })
    }
    },
    components: {
        TodoList,
        FinishedTodos,
        AddTodo,
    },

    computed: {
        finishedTodos(){
            return this.$store.getters.findTodos.filter(todo => todo.completed === true)
        },
        unFinishedTodos(){
            return this.$store.getters.findTodos.filter(todo => todo.completed === false)
        }
    }
};
</script>

<style>
body {
	background-color: #EEF0F2 ;
    background: radial-gradient(circle,   #E2CAB3, white   );

}
.todolist {
    font-family: 'Rubik', sans-serif;
	background-color: #F3FAFB;
	padding: 20px 20px 10px 20px;
	margin-top: 30px;
    border-radius: 5%
}
.todolist h1 {
	margin: 0;
	padding-bottom: 20px;
	text-align: center;
}
.form-control {
	border-radius: 5px;
}
li.ui-state-default {
	background: #fff;
	border: none;
	border-bottom: 1px solid rgb(245, 210, 210);
}

li.ui-state-default:last-child {
	border-bottom: none;
}

.todo-footer {
	background-color: #93BCDF;
	margin: 0 -20px -10px -20px;
	padding: 10px 20px;
}
#done-items li {
	padding: 10px;
	border-bottom: 1px solid #ddd;
	text-decoration: line-through;
}
#done-items li:last-child {
	border-bottom: none;
}
#checkAll {
	margin-top: 10px;
}

.checkbox { 
    padding: 1%;
}

#text {
    padding-left: 2%;
}
</style>
