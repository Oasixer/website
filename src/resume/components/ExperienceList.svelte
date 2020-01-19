<script>
  import ExperienceItem from '../components/ExperienceItem.svelte';
  import { arrayIntersect } from '../utils/misc.js';
  import { tags, force_use_all_employment } from '../utils/settings.js';
  export let items;
  export let work;

  /* $: console.log((arrayIntersect(items[0].tags, $tags)).length>0 || (work && $force_use_all_employment)); */

</script>

<style>
  div.experience-list-container{
    margin: 0 0 -15px 0;
    padding: 0;
  }

</style>

<div class="experience-list-container">
  {#each items as item}
    {#if (arrayIntersect(item.tags.filter(i=>!item.ignored_tags.includes(i)), $tags)).length>0 || (work && $force_use_all_employment)}
      <ExperienceItem {item} {work}/>
    {/if}
  {/each}
</div>
