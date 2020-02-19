<script>
  export let height;
</script>

<style>
  div#contact{
    width: 100%;
    height: 100vh;
    /* background-color: #161a28; */
    background-color: blue;
  }

  h1{
    margin:0;
  }
</style>

<div id='contact' bind:clientHeight={height}>
  <h1>contact</h1>
  <p>hi</p>
</div>
