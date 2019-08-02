<script>
  export let segment;
  import { goto } from "@sapper/app";

  const arrowNav = e => {
    const left = () => document.getElementById("left").classList.toggle('pressed');
    const right = () => document.getElementById("right").classList.toggle('pressed');

    if (e.key === "ArrowRight") {
      right();
      setTimeout(right, 500);
    }
    if (e.key === "ArrowLeft") {
      left();
      setTimeout(left, 500);
    }

    if (segment === undefined) {
      if (e.key === "ArrowRight") {
        goto("experiments");
      }
    } else if (segment === "experiments") {
      if (e.key === "ArrowRight") {
        goto("me");
      } else if (e.key === "ArrowLeft") {
        goto(".");
      }
    } else if (segment === "me") {
      if (e.key === "ArrowLeft") {
        goto("experiments");
      }
    }
  };

</script>

<style>
  nav {
    align-items: center;
    background-color: black;
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 300;
    padding: 1em 0em;
  }

  h1 {
    font-family: "Press Start 2P", sans-serif;
    font-size: 1.5em;
    margin: 0;
    text-transform: uppercase;
  }

  .title {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1em;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0 2em;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    font-family: "Press Start 2P", sans-serif;
    text-transform: uppercase;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: red;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  @keyframes pop {
    50% {
      transform: scale(1.4) 
    }
  }

  @keyframes press {
    50% {
      transform: scale(0.5);
    }
  }

  .arrow {
    animation: pop .5s;
    height: 4em;
  }

  .pressed {
    animation: press .5s;
  }

</style>

<svelte:window on:keydown={arrowNav} />

<nav>
  <img
    src="/left.png"
    alt="an arrow pointing left"
    id="left"
    class="arrow" />
  <div class="title">
    <h1>Mark</h1>
    <h1>Web</h1>
  </div>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">projects</a>
    </li>
    <li>
      <a class={segment === 'experiments' ? 'selected' : ''} href="experiments">
        experiments
      </a>
    </li>
    <li>
      <a class={segment === 'me' ? 'selected' : ''} href="me">me</a>
    </li>
  </ul>
  <div class="title">
    <h1>Glimm</h1>
    <h1>Dev</h1>
  </div>
  <img
    src="/right.png"
    alt="an arrow pointing right"
    id="right"
    class="arrow" />
</nav>
