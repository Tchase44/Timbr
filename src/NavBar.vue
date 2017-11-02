<template>
	<nav class="navi">
		<router-link to="/">
			<div class="barbox">Home</div>
		</router-link>
		<router-link to="/about">
			<div class="barbox seperator">About</div>
		</router-link>
		<router-link to="/contact">
			<div class="barbox">Contact</div>
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
<style scoped>
	.navi{
		width: 100%;
		min-width: 354px;
		background: rgb(6, 86, 12);
		background: #06560c;
		text-align: center;
	}
	.barbox{
		text-decoration: none;
		color: #fff;
		display: inline-block;
		margin: 5px;
		padding: 0 30px;
	}
	.seperator{
		border-left: 2px solid #efe;
		border-right: 2px solid #efe;
	}
</style>

