<script>
  export let height=undefined;
  import WorkExperience from './sections/WorkExperience.svelte';
  
</script>

<style>
  div#workexperience{
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
</style>

<div id='workexperience' bind:clientHeight={height}>
  <h1>Work Experience</h1>
  <WorkExperience embedded={true}/>
</div>
