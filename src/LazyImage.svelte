<script>
  export let full = "";
  export let small = "";
  export let height = 100;

  let loaded = false;
</script>

<style>
  .bg,
  .placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .bg {
    transition: filter 0.5s;
    filter: blur(15px);
    opacity: 0;
    clip: rect(auto auto auto auto);
  }

  .placeholder {
    /* filter: blur(10px) brightness(1.2); */
    filter: blur(15px);
    clip: rect(auto auto auto auto);
  }

  .animate {
    opacity: 1;
    filter: blur(0);
  }
</style>

<img class="placeholder" src={small} alt="small" style="height:{height}px" />
<img
  class="bg"
  class:animate={loaded == true}
  src={full}
  alt="backgroundimage"
  style="height:{height}px"
  on:load={() => (loaded = true)} />
