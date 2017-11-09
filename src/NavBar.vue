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
		height: 40px;
		box-shadow: 0px 0px 5px #000;
		line-height: 40px;
		background: rgb(6, 86, 12);
		background: #476D00;
		text-align: center;
	}
	.barbox{
		text-decoration: none;
		font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
		font-weight: bold;
		color: #dadddd;
		display: inline-block;
		padding: 0 50px;
	}
	.barbox:hover{
		background: #3A5900;
		color: #fff;
	}
	.seperator{
		border-left: 2px solid #dadddd;;
		border-right: 2px solid #dadddd;;
	}
	@media screen and (max-width: 470px) {
		.barbox{
			padding: 0 30px;
		}		
	}
</style>

