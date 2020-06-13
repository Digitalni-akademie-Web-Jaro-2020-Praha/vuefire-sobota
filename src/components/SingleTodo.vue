<template>
  <div>
    <h1>{{todo.label}}</h1>
    <div v-if="todo.done">Is done</div>
    <div v-else>Is not done</div>
  </div>
</template>

<script>
import db from "../utils/db";

export default {
  name: "SingleTodo",
  data() {
    return {
      todo: {}
    };
  },
  created() {
    this.$bind("todo", db.collection("todos").doc(this.$route.params.id));
  }
};
</script>