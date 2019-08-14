<script>
  export let title;
  export let description;
  export let img;
  export let url;
</script>

<style>
  .project {
    height: 10em;
    list-style: none;
  }
  .text {
    background: rgba(0, 0, 0, 0.8);
    color: white;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .text h2,
  .text p {
    margin: 0;
    padding: 1em;
  }
  .text:hover {
    opacity: 1;
  }
  a {
    text-decoration: none;
  }
</style>

<div class="project" style={`background: center no-repeat url(${img})`}>
  <a href={url}>
    <div class="text">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  </a>
</div>
