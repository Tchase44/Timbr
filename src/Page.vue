<template>
  <div id="container">
    <header class="head">
      <div class="welcome">
        <h1>Welcome to Timbr Co.</h1>
	      <h2>One Place For</h2>
	      <h2>All Your Woodworking Needs</h2>
      </div>
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
.head{
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 3px #000;
  height: 200px;
  background: linear-gradient(26deg,darkseagreen,seagreen,forestgreen);
  background-image: url('http://freebigpictures.com/wp-content/uploads/2009/09/fall-woods.jpg');
  background-position: top;
}
.welcome{
  padding-top: 10px;
}
</style>
