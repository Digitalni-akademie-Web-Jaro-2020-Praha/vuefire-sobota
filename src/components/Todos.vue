<template>
  <div>
    <h1>Todos</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodoLabel" />
      <button type="submit">Add todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{todo.label}}</li>
    </ul>
    <pre>
      {{JSON.stringify(todos, null, 2)}}
    </pre>
  </div>
</template>

<script>
import db from "../utils/db";

export default {
  name: "Todos",
  data() {
    return {
      newTodoLabel: "",
      todos: []
    };
  },
  firestore: {
    todos: db.collection("todos").orderBy("label")
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