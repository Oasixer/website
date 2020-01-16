<script>
  import Section from './Section.svelte';

  let header = 'Education';
  let lines = ['BASc in Mechatronics Engineering', 'University of Waterloo', 'Expected May 2023'];
</script>

<style>
  p{
    margin: 6px 0;

  }
  div.line-container{
    margin-bottom: -6px;
  }
</style>

<Section {header}>
  <div class='line-container'>
    {#each lines as line}
      <p>{line}</p>
    {/each}
  </div>
</Section>
