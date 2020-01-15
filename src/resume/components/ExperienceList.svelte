<script>
  import ExperienceItem from '../components/ExperienceItem.svelte';
  import { arrayIntersect } from '../utils/misc.js';
  import { tags } from '../utils/settings.js';
  export let items;
  export let work;

</script>

<style>

</style>

{#each items as item}
  {#if arrayIntersect(item.tags, $tags)}
    <ExperienceItem {item} {work}/>
  {/if}
{/each}
