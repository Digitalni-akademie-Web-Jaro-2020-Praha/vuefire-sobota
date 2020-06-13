<template>
  <div>
    <h1>Todos</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodoLabel" />
      <button type="submit">Add todo</button>
    </form>
  </div>
</template>

<script>
import db from "../utils/db";

export default {
  name: "Todos",
  data() {
    return {
      newTodoLabel: ""
    };
  },
  methods: {
    addTodo() {
      db.collection("todos")
        .add({
          label: this.newTodoLabel,
          done: false
        })
        .then(docRef => {
          docRef.update({ id: docRef.id });
        });

      this.newTodoLabel = "";
    }
  }
};
</script>