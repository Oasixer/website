<script>
  import Header from '../resume/components/Header.svelte';

  export let height;
</script>

<style>
  div#contact{
    width: 100%;
    background-color: #161a28;
    padding: 70px;
    display: flex;
    flex-flow: column nowrap;
  }

  h1{
    font-size: 70px;
    text-transform: uppercase;
    color: #f3f5f4;
    font-weight: 100;
    font-family: "DIN Condensed Web";
    margin-bottom: 25px;
  }

  h2{
    /* color: #a1a2a3; */
    color: #f3f5f4;
    text-transform: uppercase;
    margin-bottom: 25px;
  }
</style>

<div id='contact' bind:clientHeight={height}>
  <!--  <h1>contact</h1>  -->
  <h2>TODO Skinnier font Kaelan Moffett-Steinke</h2>
  <Header embedded={true}/>
</div>
