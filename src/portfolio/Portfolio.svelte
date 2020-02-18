<script>
  export let height;
</script>

<style>
  div#portfolio{
    width: 100%;
    height: 100vh;
    /* background-color: #161a28; */
    background-color: blue;
  }

  h1{
    margin:0;
  }
</style>

<div id='portfolio' bind:clientHeight={height}>
  <h1>Portfolio</h1>
  <p>hi</p>
</div>
