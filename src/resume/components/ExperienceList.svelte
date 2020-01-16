<script>
  import ExperienceItem from '../components/ExperienceItem.svelte';
  import { arrayIntersect } from '../utils/misc.js';
  import { tags } from '../utils/settings.js';
  export let items;
  export let work;

</script>

<style>
  div.experience-list-container{
    margin: 0 0 -15px 0;
    padding: 0;
  }

</style>

<div class="experience-list-container">
  {#each items as item}
    {#if arrayIntersect(item.tags, $tags)}
      <ExperienceItem {item} {work}/>
    {/if}
  {/each}
</div>
