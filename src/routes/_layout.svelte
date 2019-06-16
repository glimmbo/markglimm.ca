<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>

<style>
	main {
		box-sizing: border-box;
		background-color: white;
		/* height:  */
		margin: 0 auto;
		max-width: 56em;
		padding: 2em;
		position: relative;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>