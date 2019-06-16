<script>

</script>

<style>
  section {
    height: 60vh;
    margin: 0;
  }

  .grid {
    background-color: black;
    display: grid;
    grid-gap: .5em;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
  }

  .grid-item {
    align-items: center;
    background-color: red;
    display: flex;
    justify-content: center;
  }

  .vegex {
    grid-row: span 3;
    grid-column: span 2;
  }

  .tagg {
    grid-row: span 2;
    grid-column: span 3;
  }

  .ar-puzzle {
    grid-row: span 1;
    grid-column: span 1;
  }

  .c3-solutions {
    grid-row: span 2;
    grid-column: span 2;
  }

  .banners {
    grid-row: span 1;
    grid-column: span 3;
  }

  .nodebot {
    grid-row: span 2;
    grid-column: span 1;
  }
</style>

<svelte:head>
  <title>Dev Mark Glimm</title>
</svelte:head>

<section>
  <h1>The Lab</h1>
  <p>
    I like to tinker.
    <br />
    You know: experiment, break things, Google a fix, find something better,
    repeat.
    <br />
    Here's a few of such experiments I've done for the web.
  </p>

  <div class="grid">
    <div class="grid-item vegex">vegex</div>
    <div class="grid-item tagg">tagg</div>
    <div class="grid-item ar-puzzle">ar puzzle</div>
    <div class="grid-item ar-puzzle">ar puzzle</div>
    <div class="grid-item nodebot">nodebot</div>
    <div class="grid-item c3-solutions">c3-solutions</div>
    <div class="grid-item ar-puzzle">ar puzzle</div>
    <div class="grid-item ar-puzzle">ar puzzle</div>
    <div class="grid-item banners">banner ads</div>
  </div>
</section>
