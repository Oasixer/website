<script>
  import { onMount, createEventDispatcher } from 'svelte';

  export let height=undefined;
  export let bg_color;

  const dispatch = createEventDispatcher();
  const dispatcher = (args) => dispatch('move', {args:args});
  
  function runMoveDispatcher(){
    dispatcher({n:0});
  }
</script>

<style>
  div#backToTop{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  button{
    border: none;
    background: none;
    cursor: pointer;
    color: #c3c5c4;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 22px;
    font-family: "Open Sans", sans-serif;
    margin: 30px 0;
  }

  button:active{
    background: none;
  }
  
  button:hover{
    color: #f3f5f4;
  }

  button.selected{
    color: #f3f5f4;
  }
</style>

<div id='backToTop'
  style="background-color: {bg_color}"
  bind:clientHeight={height}>
  <button
    on:click={()=>runMoveDispatcher()}>
    Back to top
  </button>
  
</div>
