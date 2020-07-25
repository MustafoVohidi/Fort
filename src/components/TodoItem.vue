<template>
  <div>
    <li>
      <span v-bind:class="{done:todo.completed}">
        <input type="checkbox" v-on:change="todo.completed=!todo.completed" />
        <strong>{{index+1}}</strong>
        {{todo.title}}
      </span>
      <b-button variant="danger" v-on:click="$emit('remove-todo', todo.id)">Удалить</b-button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
};
</script>


<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: red;
  color: white;
  border-radius: 1px;
  font-weight: bold;
}

input {
  margin-right: 1rem;
}
</style>