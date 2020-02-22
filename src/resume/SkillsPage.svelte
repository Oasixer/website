<script>
  export let height=undefined;
  import Skills from './sections/Skills.svelte';
  
</script>

<style>
  div#skills{
    width: 100%;
    /* background-color: #161a28; */
    background-color: #202020;
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
</style>

<div id='skills' bind:clientHeight={height}>
  <h1>Skills</h1>
  <Skills embedded={true}/>
</div>
