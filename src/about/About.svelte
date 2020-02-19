<script>
  export let height=undefined;
</script>

<style>
  div#about{
    width: 100%;
    height: 100vh;
    background-color: #161a28;
  }

  h1{
    margin: 0;
  }
</style>

<div id='about' bind:clientHeight={height}>
  <h1>About</h1>
  <p>hi</p>
</div>
