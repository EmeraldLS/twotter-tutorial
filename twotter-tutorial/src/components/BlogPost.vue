<template>
	<div id="BlogPost" >
		<div v-bind="card">
			<h4 v-for="title in postTitle" :key="title">{{title}}</h4>
			<p>{{postContent}}</p>
			<!-- <footer>{{postFooter}}</footer> -->
		</div>
	</div>
</template>

<script>
	export default{
		name: "#BlogPost",
		props: ["postContent"],
		data(){
			return{
			card: {
				style: {
					height: "300px",
					width: "175px",
					boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
					flex: "1 1 150px",
					padding: "3px",
						
				}
			},
			postTitle: ["How are you", "How to get it soft"],
			}
		}
	}
</script>

<style>
</style>