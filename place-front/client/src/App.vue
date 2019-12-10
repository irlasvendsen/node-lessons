<template>
  <div id="app">
    <h1>Welcome to the placelist</h1>
    <img src="./assets/creek.png" id="img-logo"/>
    <PlaceList/>
  </div>
</template>

<script>
import PlaceList from './components/PlaceList.vue'

export default {
  name: 'app',
  components: {
    PlaceList
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
#img-logo{
width: 100%;
  
}
</style>
