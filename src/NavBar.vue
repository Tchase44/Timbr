<template>
	<nav>
		<router-link to="/">
			<div>Home</div>
		</router-link>
		<router-link to="/about">
			<div>About</div>
		</router-link>
		<router-link to="/contact">
			<div>Contact</div>
		</router-link>
	</nav>
</template>
<script>
	export default {
		name: 'NavBar',
		data(){
			return{}
		}
	}
</script>
<style>
	
</style>

