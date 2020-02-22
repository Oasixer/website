<script>
  export let item;
  export let work;
  export let embedded=false;

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
    if (embedded){
      return;
    }
    enable_tag_controls = !enable_tag_controls;
  }
  function toggle_secton_controls(){
    if (embedded){
      return;
    }
    enable_section_controls = !enable_section_controls;
  }
  
  $: tags_text = item.tags.concat().sort((a,b)=>a.order - b.order).filter(i=>{
    let disabled_because_cat = (TagCategoryNames.includes(i.title) && $disable_categorical_tags);
    let test = !(disabled_because_cat || i.force_hide);
    return test;
    }).map(i=>i.title).join(', ');

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

  p.experience-tags.darktheme{
    color: #808080;
    font-size: 17px;
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

  .title.darktheme{
    color: #0078b4;
    font-size: 32px;
  }

  .location{
    margin: 0;
    margin-left: auto;
    color: purple;
    font-size: 15px;
    font-weight: 100;
    font-style: italic;
  }

  .location.darktheme{
    font-size: 18px;
    color: #0078b4;
  }

  .position{
    margin: 0;
    color: #808080;
    font: 11px roboto, sans-serif;
    text-transform: uppercase;
    /* font-variant: small-caps; */
  }

  .position.darktheme{
    font-size: 17px;
  }

  .date{
    margin: 0;
    margin-left: auto;
    font-size: 15px;
    font-weight: 100;
    color: grey;
    font-style: italic;
  }

  .date.darktheme{
    font-size: 17px;
  }

  ul{
    margin: 0 0;
  }

  li{
    margin: 0px 0px;
  }
  
  li.darktheme{
    color: #c0c0c0;
    font-size: 18px;
  }

</style>

{#if !item.force_hide}
<div class="experience-item-main">
  <div class="row">
    <h1 class='title' class:darktheme={embedded} on:click={toggle_secton_controls}>{item.title}</h1>
    {#if (work || $show_project_locations) && (item.location != undefined)}
      <h1 class="location" class:darktheme={embedded}>{item.location}</h1>
    {/if}
  </div>

  {#if enable_section_controls}
    <ListControls title='Experience Item Controls' single={true} bind:items={itemContainer}/>
  {/if}

  <div class="row">
    {#if (work || $show_project_positions) && (item.position != undefined)}
      <h1 class="position" class:darktheme={embedded}>{item.position}</h1>
    {/if}
    {#if (work || $show_project_dates) && (item.date != undefined)}
      <h1 class="date" class:darktheme={embedded}>{item.date}</h1>
    {/if}
  </div>

  <ul>
  {#each item.points as p}
    <li class:darktheme={embedded} style="{(!embedded)?('font-size: '+$experience_content_font_size+'px'):''}">
      {p}
    </li>
  {/each}
  </ul>
  {#if $show_tags_under_experience}
    <p class="experience-tags" class:darktheme={embedded} on:click={toggle_tag_controls}>{tags_text}</p>
    {#if enable_tag_controls}
      <ListControls bind:items={item.tags}/>
    {/if}
  {/if}
</div>
{/if}
