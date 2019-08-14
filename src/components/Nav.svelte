<script>
  export let segment;
  import { goto } from "@sapper/app";

  const arrowNav = e => {
    const left = () => document.getElementById("left").classList.toggle('pressed');
    const right = () => document.getElementById("right").classList.toggle('pressed');
    // the classes are applied, but not working
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
  @keyframes navShrink {
    from {
      height: 100vh;
    }
    to {
      height: 3em;
    }
  }

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
    /* animation properties */
    height: 100vh;
    animation: navShrink 1s 2s forwards;
  }

  h1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 1.5em;
    margin: 0;
    text-transform: uppercase;
  }

  .title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 .5em;
  }

  .title.left h1 {
    text-align: right;
  }

  .title.right h1 {
    text-align: left;
  }

  @keyframes menuAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      padding: 0 2em;
      width: 25%;
    }
  }

  ul {
    animation: menuAppear 1s 2.5s forwards;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    opacity: 0;
    padding: 0;
    width: 0%;
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
    font-family: 'Press Start 2P', cursive;
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
    animation: pop 1s 2.75s forwards;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  @keyframes pop {
    0% {
      opacity: 0;
    }
    50% {
      transform: scale(1.4);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes press {
    50% {
      transform: scale(0.5);
    }
  }

  .arrow {
    animation: pop 1s 2.75s forwards;
    height: 4em;
    opacity: 0;
  }

  /* .pressed {
    transform: scale(0.5);
  } */

</style>

<svelte:window on:keydown={arrowNav} />

<nav>
  <img
    src="/left.png"
    alt="an arrow pointing left"
    id="left"
    class="arrow" />
  <div class="title left">
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
  <div class="title right">
    <h1>Glimm</h1>
    <h1>Dev</h1>
  </div>
  <img
    src="/right.png"
    alt="an arrow pointing right"
    id="right"
    class="arrow" />
</nav>
