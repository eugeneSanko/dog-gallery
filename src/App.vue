<template>
  <div>
    <header-component></header-component>
    <router-view></router-view>


  </div>
<View/>

</template>

<script>
import HeaderComponent from './components/layout/HeaderComponent.vue';
import View from './components/layout/View.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    View
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;

}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

</style>
