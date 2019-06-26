<template>
  <div id="app">
    <CurCalculator/>
  </div>
</template>

<script>
import CurCalculator from './components/CurCalculator'

export default {
  name: 'app',
  components: {
    CurCalculator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  margin: 0;
  padding: 0;
}
</style>
