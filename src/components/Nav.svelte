<script>
  export let segment;
  import { goto } from "@sapper/app";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing"

  const arrowNav = e => {
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

  const placement = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

</script>

<style>
  nav {
    background-color: black;
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    color: white;
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
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
    /* transition: position ease-out 1s; doesn't work, needs values to transition */
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<svelte:window on:keydown={arrowNav} />

<nav>

  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">
        projects
      </a>
    </li>
    <li>
      <a class={segment === 'experiments' ? 'selected' : ''} href="experiments">
        experiments
      </a>
    </li>
    <li>
      <a class={segment === 'me' ? 'selected' : ''} href="me">
        me
      </a>
    </li>
  </ul>
</nav>
