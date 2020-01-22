<script>
  export let items;
  import { education_awards_interests_font_size } from '../utils/settings.js';

  export let show_controls = false;

  function toggle_controls(){
     show_controls = !show_controls;
  }
</script>

<style>
  ul{
    margin: 3px 0 0 0;
  }

</style>

<ul on:click={toggle_controls}>
  {#each items.filter(i=>!i.force_hide).concat().sort((a,b)=>a.order - b.order) as i}
  <li style="font-size: {$education_awards_interests_font_size}px;">
    {i.title}
  </li>
{/each}
</ul>
