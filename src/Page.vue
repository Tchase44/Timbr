<template>
  <div id="container">
    <header>
      <h1>Welcome to Timbr Co.</h1>
	    <h2>One Place For</h2>
	    <h2>All Your Woodworking Needs</h2>
    </header>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {NavBar}
}

</script>

<style>

</style>
