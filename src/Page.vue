<template>
  <div id="container">
    <header class="head">
      <div class="welcome">
        <h1>Welcome to Timbr Co.</h1>
	      <!-- <h2>One Place For</h2>
	      <h2>All Your Woodworking Needs</h2> -->
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
#container{
  max-width: 1020px;
  margin: 0 auto;
  box-shadow: 0px 0px 5px;
}
.head{
  max-width: 1020px;
  margin-top: -20px;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 3px #000;
  height: 200px;
  background: #000;
  background-image: url('https://i.pinimg.com/736x/7d/42/1e/7d421e19c84d26b8f162a0ea1d51e64d--axe-tattoo-tatoo.jpg');
  background-position: center;
}
</style>
