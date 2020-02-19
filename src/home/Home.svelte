<script>
  export let height;
  import Menubar from '../menubar/Menubar.svelte';
  export let curSection;
  export let sections;

  import { onMount, createEventDispatcher } from 'svelte';

</script>

<style>
  div#home{
    width: 100%;
    height: 100vh;
    background-color: purple;
  }

  h1{
    margin:0;
  }
</style>

<div id='home' bind:clientHeight={height}>
  <h1>home</h1>
  <p>hi</p>
</div>
