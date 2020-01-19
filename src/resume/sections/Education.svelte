<script>
  import Section from './Section.svelte';
  import { education_awards_interests_font_size } from '../utils/settings.js';

  let header = 'Education';
  let lines = ['BASc in Mechatronics Engineering', 'University of Waterloo', 'Expected Graduation May 2023'];
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

<Section {header}>
  <div class='line-container'>
    {#each lines as line}
      <p style="font-size: {$education_awards_interests_font_size}px;">{line}</p>
    {/each}
  </div>
</Section>
