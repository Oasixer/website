<script>
  export let floaty=false;
  import {onMount} from 'svelte';
  // main menu bar or floaty menubar?

  onMount(() => {
    console.log('floaty: '+floaty);
  });
  
</script>

<style>
  div.menubar{
    width: 100%;
    background-color: #161a28;
    height: 80px;
  }

  div.menubar.floaty{
    position: fixed;
    top: 0;
    background-color: red;
    z-index: 5;
  }
</style>

<div class='menubar' class:floaty>
</div>
