<script>
  export let item;
  export let work;

  import {show_project_locations} from '../utils/settings.js';
  import {show_project_positions} from '../utils/settings.js';
  import {show_project_dates} from '../utils/settings.js';
  import {force_use_all_employment} from '../utils/settings.js';

  /* $: console.log(work); */

</script>

<style>

  .experience-item-main{
    margin: 0 0 15px 0;
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
<div class="experience-item-main">
  <div class="row">
    <h1 class="title">{item.title}</h1>
    {#if (work || $show_project_locations) && (item.location != undefined)}
      <h1 class="location">{item.location}</h1>
    {/if}
  </div>

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
    <li>
      {p}
    </li>
  {/each}
  </ul>

</div>
