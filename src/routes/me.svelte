<style>
  #about {
    display: flex;
    flex-direction: row;
  }

  #blurb {
    padding: 3em;
    margin: 0;
    width: 50%;
  }

  #profile {
    background: center / contain no-repeat url('profile.jpg');
    border: 3px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 3em 0em;
    width: 50%;
  }

  #icons {
    background-color: rgba(0, 0, 0, .7);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1em;
  }

  .icon svg {
    fill: red;
  }
</style>

<svelte:head>
  <title>Mark Glimm, Web Developer etc.</title>
</svelte:head>

<div id="about">
  <div id="blurb">
    <p>
      I like tools. Screwdriver. Drone. Shovel. Calculus. Chainsaw. JavaScript.
      Excavator. CSS. Leatherman. Tools help me tinker. You know: experiment,
      break things, Google a fix, find something better, repeat. The web has so
      many tools it makes my head spin. Tools that connect every person on the
      planet. Tools to create whole new virtual experiences. Tools that interact
      with the array of sensors in our pockets. With so many tools for
      tinkering, experimenting, and building valuable applications on the web, I
      can't believe I didn't get started with programming earlier.
    </p>
    <h2>Find me</h2>
    <p>
      You've made it this far, might as well get in touch. Let's make something
      together! I'm currently seeking full time web development roles,
      contracts, or projects. Get at me!
    </p>
  </div>
  <div id="profile">
    <div id="icons">
      <a href="mailto:markglimm@gmail.com">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="-5 -4 60 60">
            <path
              d="M 0 7 L 0 9.875 L 25 29.71875 L 50 10.125 L 50 7 Z M 0 12.40625
              L 0 43 L 50 43 L 50 12.65625 L 25.625 31.78125 C 25.445313
              31.921875 25.21875 32 25 32 C 24.78125 32 24.558594 31.925781
              24.375 31.78125 Z " />
          </svg>
        </div>
      </a>
      <a href="http://www.github.com/glimmbo">
        <div class="icon">
          <svg
            fill="black"
            role="img"
            viewBox="0 0 24 24"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg">
            <title>GitHub icon</title>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205
              11.385.6.113.82-.258.82-.577
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422
              18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
              1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305
              3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0
              1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3
              .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12
              3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475
              5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0
              .315.21.69.825.57C20.565 22.092 24 17.592 24
              12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </div>
      </a>
      <a href="http://linkedin.com/in/markglimm">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 24 24">
            <title>LinkedIn icon</title>
            <path
              d="M20.447
              20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
              1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
              1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337
              7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063
              1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782
              13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0
              1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24
              22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </div>
      </a>
    </div>
  </div>
</div>
