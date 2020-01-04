import { todos } from './seed.js';
const state = {
    todos: todos
}

const mutations = {
    ADD_TODO(state, payload) {
        state.todos.push(payload)
    },

    DELETE_TODO(state, payload){
    const index = state.todos.findIndex(todo => todo.id == payload.id)
    state.todos.splice(index, 1)
    },
    COMPLETED_TODO (state, payload) {
        const index = state.todos.findIndex(todo => todo.id == payload.id)
        state.todos[index].completed = true
    }
}

const actions = {
    addTodo(context, payload) {
        context.commit('ADD_TODO', payload)
    },
    removeTodo(context, payload) {
        context.commit('DELETE_TODO', payload)
    },
    finishedTodo(context, payload) {
        context.commit('COMPLETED_TODO', payload)
    }

}

const getters = {
    findTodos(state) {
        return state.todos;
    }

}


export  { state, mutations, actions, getters  }