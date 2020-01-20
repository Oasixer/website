<script>
  import Section from './Section.svelte';
  import { education_awards_interests_font_size } from '../utils/settings.js';
  import SectionControls from '../components/SectionControls.svelte';

  let header = 'Education';
  let lines = ['BASc in Mechatronics Engineering', 'University of Waterloo', 'Expected Graduation May 2023'];
  let force_hide = false;
  let show_controls = false;
</script>

<style>
  p{
    margin: 2px 0;
    /* font-size: 14px; */ /* set with store instead of hardcoded */

  }
  div.line-container{
    margin-bottom: -2px;
  }
</style>

<Section {header} {force_hide} bind:show_controls>
  {#if show_controls}
    <SectionControls bind:force_hide/>
  {/if}
  <div class='line-container' on:click={()=>{show_controls = !show_controls}}>
    {#each lines as line}
      <p style="font-size: {$education_awards_interests_font_size}px;">{line}</p>
    {/each}
  </div>
</Section>
