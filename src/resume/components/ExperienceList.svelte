<script>
  import ExperienceItem from '../components/ExperienceItem.svelte';
  import { arrayIntersect } from '../utils/misc.js';
  import { tags, force_use_all_employment } from '../utils/settings.js';
  export let items;
  export let work;
  export let embedded=false;

</script>

<style>
  div.experience-list-container{
    margin: 0 0 -15px 10px;
    padding: 0;
  }

</style>

<div class="experience-list-container">
  {#each items.concat().sort((a,b)=>a.order - b.order) as item}
    {#if (embedded || (arrayIntersect(item.tags.filter(i => i.use_index).map(i=>i.title), $tags).length > 0 || (work && $force_use_all_employment) && !item.force_hide))}
      <ExperienceItem bind:item {embedded} {work}/>
    {/if}
  {/each}
</div>
