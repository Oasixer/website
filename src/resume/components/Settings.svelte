<script>
  import {
    disable_interests_section,
    show_project_locations,
    show_project_positions,
    show_project_dates,
    disable_coursework_skills,
    force_use_all_employment,
    swap_columns,
    single_column,
    tags,
    orders,
    display_mode,
    disable_settings_button,
    TagNames
  } from '../utils/settings.js';

  import { sleep } from '../utils/misc.js';

  export let modal;

  /* $: console.log({$tags}); */

  $: bools = [
    {
      name: 'Show Project Locations',
      store: show_project_locations
    },
    {
      name: 'Show Project Dates',
      store: show_project_dates
    },
    {
      name: 'Show Project Positions',
      store: show_project_positions
    },
    {
      name: 'Swap Columns',
      store: swap_columns
    },
    {
      name: 'Single Column',
      store: single_column
    },
    {
      name: 'Force displaying every employment position regardless of tags',
      store: force_use_all_employment
    },
    {
      name: 'Disable interests section',
      store: disable_interests_section
    },
    {
      name: 'Disable coursework in the skills section',
      store: disable_coursework_skills
    }
  ];

  function toggleBool(i){
    i.store.update((cur) =>{return !cur});
  }

  function boolIsChecked(i){
    let val;
    // super janky function that uses the store updater to check the value
    // Because I can't get the normal syntax {$i.store} to work here for some reason
    i.store.update((cur) =>{val=cur; return cur});
    return val;
  }

  function toggleTag(tag){
    tags.update(i => {
      let index = i.indexOf(tag);
      if (index !== -1){
        i.splice(index, 1);
      }
      else{
        i.push(tag);
      }
      return i;
    });
  }

  function toggleAllTags(tag){
    let any_missing = false;
    tags.update((cur_tags)=>{
      Object.values(TagNames).forEach((i)=>{
        if (!(cur_tags.includes(i))){
          any_missing = true;
        }
      });
      /* console.log(any_missing); */
      if (any_missing){
        Object.values(TagNames).forEach((i)=>{
          if (!(cur_tags.includes(i))){
              cur_tags.push(i);
          }
        });
      }
      else{
        Object.values(TagNames).forEach((i)=>{
          if (cur_tags.includes(i)){
            toggleTag(i);
          }
        });
      }
      return cur_tags;
    });
  }

  function tagIsEnabled(tag){
    return {$tags}.includes(tag);
  }


  async function export_print(){
    disable_settings_button.set(true);
    modal.close();
    await sleep(500);
    window.print();
    disable_settings_button.set(false);
  }
  
</script>

<style>
  div.row{
    display: flex;
    flex-flow: row nowrap;
  }
  
  div.column-wrap{
    display: flex;
    flex-flow: column wrap;
  }

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

<div>
  <div class="row">
    <div class="column-wrap">
      <h3>Settings</h3>
      {#each bools as bool}
        <!--  <div class="row">  -->
          <!--  <p>{bool.name}</p><input type="checkbox" checked={bool.store} bind:this={bool.this} on:click={()=>{toggleBool(bool); updateBool(bool);}}>  -->
          <label class="container">{bool.name}
            <input type="checkbox" checked={boolIsChecked(bool)} on:click={()=>{toggleBool(bool);}}>
            <span class="checkmark"></span>
          </label>
          <!--  </div>  -->
      {/each}
    </div>
    <div class="column-wrap">
      <h3>Tags</h3>
      {#each Object.values(TagNames) as tag}
          <label class="container">{tag}
            <input type="checkbox" checked={$tags.includes(tag)} on:click={()=>{toggleTag(tag)}}>
            <span class="checkmark"></span>
          </label>
      {/each}
      <button on:click={()=>{toggleAllTags()}}>Check/Uncheck All</button> 
    </div>
  </div>
</div>
<button on:click={export_print}>Export to PDF by printing (select PDF)</button>
