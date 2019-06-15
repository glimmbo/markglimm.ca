<script>
  export let segment;
  // segment is the slug, not sure where defined...
  // $: console.log(segment)
  import { goto } from "@sapper/app";

  const arrowNav = e => {
    if (segment === undefined) {
      if (e.key === "ArrowRight") {
        goto("about");
      }
    } else if (segment === "about") {
      if (e.key === "ArrowRight") {
        goto("contact");
      } else if (e.key === "ArrowLeft") {
        goto(".");
      }
    } else if (segment === "contact") {
      if (e.key === "ArrowLeft") {
        goto("about");
      }
    }
  };
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
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
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
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
        experiments
      </a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">
        about
      </a>
    </li>
    <li>
      <a class={segment === 'contact' ? 'selected' : ''} href="contact">
        contact
      </a>
  </ul>
</nav>
