<script>
  import Section from './Section.svelte';

  let header = 'Education';
  let lines = ['BASc in Mechatronics Engineering', 'University of Waterloo', 'Expected May 2023'];
</script>

<style>
  p{
    margin: 6px 0;
  }
</style>

<Section {header}>
  {#each lines as line}
    <p>{line}</p>
  {/each}
</Section>
