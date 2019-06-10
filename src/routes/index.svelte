<svelte:head>
  <title>Dev Mark Glimm</title>
</svelte:head>

<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
</script>

<h1 transition:fly="{{ x: 200, duration: 200 }}">Great success!</h1>

<p transition:fly="{{ x: 200, duration: 200 }}">
  <strong>I'm a developer.</strong>
</p>

