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
    grid-gap: 0.2em;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
  }

  .grid-item {
    align-items: center;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
  }

  .grid-item:hover {
    color: white;
  }

  .grid-item h2 {
    margin: 0;
  }
  .grid-item p {
  }

  .fivetones {
    grid-row: span 3;
    grid-column: span 2;
  }

  .vegex {
    grid-row: span 2;
    grid-column: span 3;
  }

  .ar-puzzle {
  }

  .foundry {
    grid-row: span 2;
    grid-column: span 2;
  }

  .bottomRight {
    grid-column: span 3;
  }

  .nodebot {
    grid-row: span 2;
  }

  .middlesShort {
    grid-column: span 2;
  }

  a {
    text-decoration: none;
  }
</style>

<svelte:head>
  <title>Mark Glimm, Web Developer etc.</title>
</svelte:head>

<section>
  <h1>The Lab</h1>
  <p>
    I like to tinker.
    <br />
    You know: experiment, break things, Google a fix, find something better,
    repeat.
    <br />
    Here's a few of such experiments I've got cooking for the web.
  </p>

  <div class="grid">
    <div class="grid-item fivetones">
      <a href="#">
        <h2>fivetones</h2>
        <p>
          A mobile web, multiplayer sequence puzzle that unlocks an AR
          experience.
        </p>
      </a>
    </div>

    <div class="grid-item vegex">
      <a href="#">
        <h2>Vegex</h2>
        <p>
          My bootcamp final project that connects gardeners and small farmers
          together to trade their produce. Work in progress. Currently migrating
          from Rails backend to a modern GraphQL API with a Svelte client.
        </p>
      </a>
    </div>

    <div class="grid-item middlesShort">middlesShort</div>

    <div class="grid-item nodebot">
      <h2>nodeBot</h2>
      <p>
        I found an unused Rasberry Pi in my roomate's closet. I installed node
        on it to serve as...something useful I'm sure.
      </p>
    </div>

    <div class="grid-item foundry">
      <h2>Foundry VTT</h2>
      <p>
        I play D&D with 5 friends every Sunday. We use a new, open-source
        application that allows the development of custom modules.
      </p>
    </div>

    <div class="grid-item ar-puzzle">ar puzzle</div>
    <div class="grid-item ar-puzzle">ar puzzle</div>
    <div class="grid-item bottomRight">bottomRight</div>
  </div>
</section>
