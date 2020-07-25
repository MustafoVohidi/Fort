<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <b-button class="btn" type="submit">Создать</b-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        };

        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    }
  }
};
</script>
<style scoped>
form {
  display: flex;
}
input {
  width: 400px;
}
.btn {
  font-size: 14px;
  justify-content: center;
  text-align: left;
  background: rgb(37, 25, 25);
  color: white;
  border-radius:0 ;
  font-size: 12px;
}
</style>