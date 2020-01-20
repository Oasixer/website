<script>
  export let item;
  export let work;

  import TagControls from './TagControls.svelte';
  import ListControls from './ListControls.svelte';

  import { 
    show_project_locations,
    show_project_positions,
    show_project_dates,
    show_tags_under_experience,
    disable_categorical_tags,
    experience_content_font_size,
    TagCategoryNames,
    auto_populate_orders
  } from '../utils/settings.js';

  let enable_tag_controls = false;
  let enable_section_controls = false;

  let itemContainer = [item]; // for 2way binding in single subsection controls

  function toggle_tag_controls(){
    enable_tag_controls = !enable_tag_controls;
  }
  function toggle_secton_controls(){
    enable_section_controls = !enable_section_controls;
  }
  
  $: if ($auto_populate_orders){
    populate_orders();
  }

  function populate_orders(){
    for (let i=0; i<item.tags.length; i++){
      item.tags[i].order = i;
    }
  }

  $: tags_text = item.tags.sort((a,b)=>a.order - b.order).filter(i=>!((TagCategoryNames.includes(i) && $disable_categorical_tags) ) && i.display).map(i=>i.name).join(', ');

</script>

<style>
  .experience-item-main{
    margin: 0 0 15px 0;
  }

  p.experience-tags{
    font: 300 13px roboto, sans-serif;
    font-style: italic;
    text-align: end;
    margin: 5px 0;
  }

  div.row{
    display: flex;
    flex-flow: row-nowrap;
    justify-content: flex-start;
  }

  .title{
    margin: 0;
    /* font-size: 15px; */
    /* font-style: bold; */
    font: 900 15px roboto, sans-serif;
  }

  .location{
    margin: 0;
    margin-left: auto;
    color: purple;
    font-size: 15px;
    font-weight: 100;
    font-style: italic;
  }

  .position{
    margin: 0;
    color: grey;
    font: 11px roboto, sans-serif;
    text-transform: uppercase;
    /* font-variant: small-caps; */
  }

  .date{
    margin: 0;
    margin-left: auto;
    font-size: 15px;
    font-weight: 100;
    color: grey;
    font-style: italic;
  }

  ul{
    margin: 0 0;
  }

  li{
    margin: 0px 0px;
  }

</style>

{#if !item.force_hide}
<div class="experience-item-main">
  <div class="row">
    <h1 class="title" on:click={toggle_secton_controls}>{item.title}</h1>
    {#if (work || $show_project_locations) && (item.location != undefined)}
      <h1 class="location">{item.location}</h1>
    {/if}
  </div>

  {#if enable_section_controls}
    <ListControls bind:items={itemContainer}/>
  {/if}

  <div class="row">
    {#if (work || $show_project_positions) && (item.position != undefined)}
      <h1 class="position">{item.position}</h1>
    {/if}
    {#if (work || $show_project_dates) && (item.date != undefined)}
      <h1 class="date">{item.date}</h1>
    {/if}
  </div>

  <ul>
  {#each item.points as p}
    <li style="font-size: {$experience_content_font_size}px;">
      {p}
    </li>
  {/each}
  </ul>
  {#if $show_tags_under_experience}
    <p class="experience-tags" on:click={toggle_tag_controls}>{tags_text}</p>
    {#if enable_tag_controls}
      <TagControls bind:item/>
    {/if}
  {/if}
</div>
{/if}
