<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  padding: 0;
  margin: 0
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
