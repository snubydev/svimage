<script>
  import LazyImage from "./LazyImage.svelte"
  import { norco_range_small_jpg, img2_small_jpg } from './img/image-base64.js'

  export let name;
</script>

<style>
  :global(html, body) {
    padding: 0;
    margin: 0;
  }
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    height: 76px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .container {
    position: relative;
    width: 100vw;
  }

  .welcome-block {
    width: 600px;
    margin: auto;
    padding: 2rem;
    /* margin-top: 130px; */
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.5em;
    z-index: 1000;
    background-color: white;
    border: 1px #e0e0e0 solid;
    border-radius: 1rem;
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>

  <div class="container">
    <LazyImage
      full={"/img/Norco_Range_full.jpg"}
      small={norco_range_small_jpg}
      height={400} />

    <div
      style="height: 200px; margin: auto; display: flex; justify-content:
      center; align-items: center">
      <div style="color: white; font-size: 3rem; font-weight: 200">Welcome</div>
    </div>

	    <div class="welcome-block">

      <p>
        A mountain bike (MTB[1]) or mountain bicycle is a bicycle designed for
        off-road cycling. Mountain bikes share some similarities with other
        bicycles, but incorporate features designed to enhance durability and
        performance in rough terrain. These typically include a suspension fork,
        large knobby tires, more durable wheels, more powerful brakes, straight
        handlebars, lower gear-ratios for climbing steep grades and sometimes
        rear suspension to really smooth out the trail.[2]
      </p>
    </div>
  </div>

  <div class="container">
    <LazyImage
      full={"/img/img2_full.jpg"}
      small={img2_small_jpg}
      height={400} />
  
  </div>


  

</main>
