<template>
  <div class="container">
    <router-link to="/page1">Go to Page 1</router-link>
    <router-link to="/page2">Go to Page 2</router-link>
    <router-link to="/todos">Todos</router-link>
    <a href="/todos">Dummy link</a>

    <h1>Vue router</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
</style>