<script>
  import Section from './Section.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames, tags, alternate_skills_display_mode,
    skills_headings_font_size, skills_content_font_size,
    force_display_skills_ignore_tags,
    auto_populate_orders
  } from '../utils/settings.js';
  import { arrayIntersect } from '../utils/misc.js';
  import {onMount} from 'svelte';
  import {sleep} from '../utils/misc.js';
  
  export let embedded=false;
  let header = 'Skills';
  let show_controls = false;
  let force_hide = false;

  $: if ($auto_populate_orders || embedded){
    populate_orders();
  }

  function populate_orders(){
    if (items.populated){
      console.log('already popped');
      return;
    }
    for (let i=0; i<items.length; i++){
      items[i].order = i*2+1;
    }
    items.populated=true;
  }

  let items = [
    {
      title: 'Frontend Webdev / UI',
      tags: [{title: TagNames.SVELTE, order: 0, force_hide: false, use_index: true},
        {title: TagNames.REACT,  order: 0, force_hide: false, use_index: true},
        {title: TagNames.HTML, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SCSS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.CSS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.JQUERY,  order: 0, force_hide: false, use_index: true},
        {title: TagNames.QT, order: 0, force_hide: false, use_index: true},
        {title: TagNames.PYQT, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SELENIUM, order: 0, force_hide: false, use_index: true},
        {title: TagNames.LATEX, order: 0, force_hide: false, use_index: true},
        {title: TagNames.FRONTEND, order: 0, force_hide: true, use_index: true},
        {title: TagNames.UI, order: 0, force_hide: true, use_index: true}
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Backend / Database',
      tags: [{title: TagNames.FLASK, order: 0, force_hide: false, use_index: true},
        {title: TagNames.AWS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.POSTGRESQL, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SQLALCHEMY, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SQL, order: 0, force_hide: false, use_index: true},
        {title: TagNames.ORACLEDB, order: 0, force_hide: false, use_index: true},
        {title: TagNames.DOCKER, order: 0, force_hide: false, use_index: true},
        {title: TagNames.DYNAMODB, order: 0, force_hide: false, use_index: true},
        {title: TagNames.BACKEND, order: 0, force_hide: true, use_index: true}
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Languages',
      tags: [{title: TagNames.PYTHON, order: 0, force_hide: false, use_index: true},
        {title: TagNames.CPP, order: 0, force_hide: false, use_index: true},
        {title: TagNames.C, order: 0, force_hide: false, use_index: true},
        {title: TagNames.JS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.ARDUINO, order: 0, force_hide: false, use_index: true},
        {title: TagNames.BASH, order: 0, force_hide: false, use_index: true}
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Control Systems',
      tags: [{title: TagNames.ROS, order: 0, force_hide: false, use_index: true},
        {title: "Rasperry Pi (Embedded)", order: 0, force_hide: false, use_index: true},
        {title: "Autonomous Pathfinding", order: 0, force_hide: false, use_index: true},
        {title: "Image Processing/Object Detection in OpenCV", order: 0, force_hide: false, use_index: true}
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Data analysis / Visualization',
      tags: [{title: TagNames.SPACY, order: 0, force_hide: false, use_index: true},
        {title: TagNames.NLTK, order: 0, force_hide: false, use_index: true},
        {title: TagNames.D3, order: 0, force_hide: false, use_index: true},
        {title: TagNames.PLOTLY, order: 0, force_hide: false, use_index: true},
        {title: TagNames.MATPLOTLIB, order: 0, force_hide: false, use_index: true},
        {title: TagNames.PANDAS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.DATA_ANALYSIS, order: 0, force_hide: true, use_index: true},
        {title: TagNames.DATA_VISUALIZATION, order: 0, force_hide: true, use_index: true},
        {title: TagNames.NLP, order: 0, force_hide: true, use_index: true}
      ],
      show_controls: false,
      show_tag_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Coursework',
      tags: [{title: 'Data Structures and Algorithms', order: 0, force_hide: false, use_index: false},
        { title: 'Microprocessors', order: 0, force_hide: false, use_index: false}],
      show_controls: false,
      show_tag_controls: false,
      force_hide: true,
      order: 0
    }
  ];

  function toggle_tags_controls(i){
    if (embedded){
      return;
    }
    i.show_tag_controls = !i.show_tag_controls;
    refresh_tags();
  }
  
  function toggle_force_hide(i){
    i.force_hide = !i.force_hide;
  }

  $: refresh_tags({$tags});

  function refresh_tags(){
    items = [...items];
    /* console.log('refreshing skills items'); */
  }

  function should_display_pointlist(pointList){
    // Returns boolean depending on whether this point list should be displayed.
    // which depends on if the tags are relevant to the loaded tags, and any other overriding settings like
    // disable_coursework_skills
    
    if (embedded){
      return true;
    }

    if (pointList.force_hide){
      return false;
    }

    function get_indexed_tags(i){
      return i.filter(j => j.use_index).map(j => j.title);
    }

    if (arrayIntersect($tags, get_indexed_tags(pointList.tags)).length > 0){
      return true;
    }

    return false;
  } 

  function tag_sort(a, b){
    if ($tags.includes(a.title)){
      return $tags.includes(b.title) ? 0 : -1;
    }
    return $tags.includes(b.title) ? 1 : 0;
  }

  function order_sort(a, b){
    return a.order - b.order;
  }

  
</script>

<style>
  div.row{
    display: flex;
    flex-flow: row nowrap;
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

  /* Hide the browser's default checkbox */ .container input {
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

  input[type="number"]{
    width: 54px;
    text-align: center;
    font-size: 16px;
    height: 25px;
    margin-right: 8px;
  }
  div.col{
    margin: 0;
    display:flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  
  div.row{
    margin: 0;
    display:flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  h1.skills-section-title{
    margin: 0 15px 0 0;
    font: 900 roboto, sans-serif; /* 15px font size, set by store instead of hardcoded */
  }

  h1.skills-section-title.darktheme{
    color: #0078b4;
    font-size: 20px;
  }

  p{
    margin: 0;
    font-weight: 200;
    /*font-size: 15px;*/ /* 15px set by store instead of hardcoded */
  }
  p.darktheme{
    color: #a3a4a5;
    font-size: 18px;
  }
</style>

<Section {header} {embedded} bind:show_controls {force_hide}>
  {#if show_controls}
    <SectionControls bind:force_hide/>
    <ListControls bind:items/>
  {/if}
  {#each items.concat().sort((a, b) => a.order - b.order) as item, n}
    {#if should_display_pointlist(item, $tags)}
      <h1 class="skills-section-title" class:darktheme={embedded}
      style="{(!embedded)?('font-size: '+$skills_headings_font_size+'px;'):''}"
         on:click={()=>{item.show_controls = !item.show_controls}}>
          {item.title}
      </h1>
      {#if item.show_controls}
        <ListControls single={true} items={[item]}/>
      {/if}
        <p 
        on:click={()=>{toggle_tags_controls(item)}}
        class:darktheme={embedded}
        style=
          "{'margin-bottom: '+((n == items.length -1) ? '0' : '15px')+';'+
          ((!embedded)?('font-size: '+$skills_content_font_size+'px;'):'')}">
        {item.tags.filter(i => !i.force_hide).sort(tag_sort).sort(order_sort).map(i => i.title).join(', ')}
      </p>
      {#if item.show_tag_controls}
        <ListControls title='Tag Controls' bind:items={item.tags}/>
      {/if}
    {/if}
  {/each}
</Section>
