<script>
  import ExperienceItem from '../components/ExperienceItem.svelte';
  import { arrayIntersect } from '../utils/misc.js';
  import { tags, force_use_all_employment } from '../utils/settings.js';
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
  {#each items.sort((a,b)=>a.order - b.order) as item}
    {#if (arrayIntersect(item.tags.filter(i => i.use_index).concat().map(i=>i.name), $tags).length > 0 || (work && $force_use_all_employment) && !item.force_hide)}
      <ExperienceItem bind:item {work}/>
    {/if}
  {/each}
</div>
