<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  background-color: #2C3339;
  padding: 0;
  margin: 0;
}

html * {
  font-family: 'Encode Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
}

#app {
  text-align: center;
  color: #2c3e50;
}
</style>
