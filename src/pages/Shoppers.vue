<template>
  <div class="col-6 shopper">
    Покупатели
    <AddTodo @add-todo="addTodo" />
    <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "Shoppers",
  data() {
    return {
      todos: []            ]
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(todo) {
        console.log(todo)
      this.todos.push(todo);
    }
  },
  components: {
    TodoList,
    AddTodo
  }
};
</script>
<style scoped>
.col-6{
    margin: 5rem;
}
</style>
