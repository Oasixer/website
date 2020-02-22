<script>
  import LinkRow from './LinkRow.svelte';

  import {
    top_name_font_size,
    top_name_top_margin,
    top_name_bottom_margin
  } from '../utils/settings.js';

  export let embedded=false;
  
</script>

<style>
  h1{
    padding: 0;
		text-transform: uppercase;
		/* font-size: 3em; */ /* loads from store - not hardcoded */
    font-weight: 100;
    text-align: center;
  }

  div{
    margin-bottom: 25px;
    padding: 0;
  }

</style>
<div>
  {#if !embedded}
  <h1 style="font-size: {$top_name_font_size}em; margin: {$top_name_top_margin}px 0 {$top_name_bottom_margin}px 0">
    style="{(!embedded)?('font-size: '+$top_name_font_size+'px; margin: '+$top_name_top_margin+'px 0 '+$top_name_bottom_margin+'px 0;'):''}">
  Kaelan Moffett-Steinke</h1>
  {/if}
  <!--  style="font-size: {$top_name_font_size}em; margin: {$top_name_top_margin}px 0 {$top_name_bottom_margin}px 0">  -->
  <LinkRow {embedded}/>
</div>
