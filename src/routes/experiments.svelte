<script>

</script>

<style>
  section {
    height: 60vh;
    margin: 0;
  }

  .grid {
    background-color: red;
    border: 3px red solid;
    display: grid;
    grid-gap: 0.2em;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
  }

  .grid-item {
    align-items: center;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;
  }

  .grid-item:hover {
    color: white;
  }

  .grid-item h3 {
    margin: 0;
  }
  .grid-item p {
  }

  .fivetones {
    background: center / cover no-repeat url('/fivetones.png');
    grid-row: span 3;
    grid-column: span 2;
  }

  .vegex {
    grid-row: span 2;
    grid-column: span 3;
  }

  .small {
    font-family: "Press Start 2P", sans-serif;
  }

  .foundry {
    background: center / cover no-repeat url('d&d.png');
    grid-row: span 2;
    grid-column: span 2;
  }

  .bottomRight {
    font-family: "Press Start 2P", sans-serif;
    grid-column: span 3;
  }

  .nodebot {
    grid-row: span 2;
  }

  .middlesShort {
    font-family: "Press Start 2P", sans-serif;
    grid-column: span 2;
  }

  a {
    text-decoration: none;
  }

/* hover, white text on red overlay */
  .grid-item p:hover {
    background-color: rbga(255, 0, 0, .5);
  }
</style>

<svelte:head>
  <title>Mark Glimm, Web Developer etc.</title>
</svelte:head>

<section>

  <div class="grid">
    <div class="grid-item fivetones">
      <a href="https://github.com/glimmbo/third-kind">
        <h3>fivetones</h3>
        <p>
          A mobile web, multiplayer sequence puzzle that unlocks an AR
          experience.
        </p>
      </a>
    </div>

    <div class="grid-item vegex">
      <a href="#">
        <h3>Vegex</h3>
        <p>
          My bootcamp final project that connects gardeners and small farmers
          together to trade their produce. Work in progress. Currently migrating
          from Rails backend to a modern GraphQL API with a Svelte client.
        </p>
      </a>
    </div>

    <div class="grid-item middlesShort">TOP SECRET</div>

    <div class="grid-item nodebot">
      <h3>nodeBot</h3>
      <p>
        I found an unused Rasberry Pi in my roomate's closet. I installed node
        on it to serve as...something useful I'm sure.
      </p>
    </div>

    <div class="grid-item foundry">
      <a href="https://github.com/death-save/fvtt-modules">
        <h3>Foundry VTT</h3>
        <p>
          I play D&D with 5 friends every Sunday 🤓. We use a new, open-source
          application that allows the development of custom modules.
        </p>
      </a>
    </div>

    <div class="grid-item small">TOP SECRET</div>
    <div class="grid-item small">TOP SECRET</div>
    <div class="grid-item bottomRight">TOP SECRET</div>
  </div>
</section>
