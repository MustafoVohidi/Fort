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
      todos: [
        { id: 1, title: "Покупатель 1", completed: false },
        { id: 2, title: "Покупатель 2", completed: false },
        { id: 3, title: "Покупатель 3", completed: false },
        { id: 4, title: "Покупатель 4", completed: false },
        { id: 5, title: "Покупатель 5", completed: false },
        { id: 6, title: "Покупатель 6", completed: false },
        { id: 7, title: "Покупатель 7", completed: false },
        { id: 8, title: "Покупатель 8", completed: false },
        { id: 9, title: "Покупатель 9", completed: false }
      ]
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