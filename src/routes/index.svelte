<script>
  import Project from "../components/Project.svelte";
</script>

<style>
  section {
    border: 3px red solid;
  }
</style>

<svelte:head>
  <title>Mark Glimm, Web Developer etc.</title>
</svelte:head>

<section>

  <Project
    title="C3 Solutions"
    url="https://github.com/c3-solutions"
    img="/512-cube.jpg"
    description="A group project spearheaded by myself and members of my cohort, aimed at bringing
          alumni of CodeCore together to build applications for non-profit /
          charitable organizations."
  />
  <Project
    title="Love is in the Air"
    url="https://liita.markglimm.ca"
    img="/dance.jpg"
    description="Landing page for my aerial photography hobby business."
  />

  <Project
    title="Advertisements"
    url="https://glimmbo.github.io/richmondAds/"
    img="/richmond.jpg"
    description="Animated banner ads, a small part of an advertisement campaign for the city of
    Richmond, BC." />

</section>
