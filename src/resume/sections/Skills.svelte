<script>
  import Section from './Section.svelte';
  import TagControls from '../components/TagControls.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames, tags, disable_coursework_skills, alternate_skills_display_mode,
    skills_headings_font_size, skills_content_font_size,
    force_display_skills_ignore_tags,
    auto_populate_orders
  } from '../utils/settings.js';
  import { arrayIntersect } from '../utils/misc.js';

  let header = 'Skills';
  let show_controls = false;
  let force_hide = false;

  $: if ($auto_populate_orders){
    console.log('pop');
    populate_orders();
  }

  function populate_orders(){
    for (let i=0; i<items.length; i++){
      items[i].order = i;
    }
  }

  let items = [
    {
      title: 'Frontend Webdev / User Interface',
      tags: [{name: TagNames.SVELTE, order: 0, force_hide: false, use_index: true},
        {name: TagNames.REACT,  order: 0, force_hide: false, use_index: true},
        {name: TagNames.JQUERY,  order: 0, force_hide: false, use_index: true},
        {name: TagNames.HTML, order: 0, force_hide: false, use_index: true},
        {name: TagNames.CSS, order: 0, force_hide: false, use_index: true},
        {name: TagNames.SCSS, order: 0, force_hide: false, use_index: true},
        {name: TagNames.QT, order: 0, force_hide: false, use_index: true},
        {name: TagNames.PYQT, order: 0, force_hide: false, use_index: true},
        {name: TagNames.SELENIUM, order: 0, force_hide: false, use_index: true},
        {name: TagNames.LATEX, order: 0, force_hide: false, use_index: true},
        {name: TagNames.FRONTEND, order: 0, force_hide: true, use_index: true},
        {name: TagNames.UI, order: 0, force_hide: true, use_index: true}
      ],
      show_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Backend / Database',
      tags: [{name: TagNames.FLASK, order: 0, force_hide: false, use_index: true},
        {name: TagNames.SQL, order: 0, force_hide: false, use_index: true},
        {name: TagNames.AWS, order: 0, force_hide: false, use_index: true},
        {name: TagNames.POSTGRESQL, order: 0, force_hide: false, use_index: true},
        {name: TagNames.SQLALCHEMY, order: 0, force_hide: false, use_index: true},
        {name: TagNames.ORACLEDB, order: 0, force_hide: false, use_index: true},
        {name: TagNames.DOCKER, order: 0, force_hide: false, use_index: true},
        {name: TagNames.DYNAMODB, order: 0, force_hide: false, use_index: true},
        {name: TagNames.BACKEND, order: 0, force_hide: true, use_index: true}
      ],
      show_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Languages',
      tags: [{name: TagNames.PYTHON, order: 0, force_hide: false, use_index: true},
        {name: TagNames.CPP, order: 0, force_hide: false, use_index: true},
        {name: TagNames.ARDUINO, order: 0, force_hide: false, use_index: true},
        {name: TagNames.JS, order: 0, force_hide: false, use_index: true},
        {name: TagNames.BASH, order: 0, force_hide: false, use_index: true}
      ],
      show_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Control Systems',
      tags: [{name: TagNames.ROS, order: 0, force_hide: false, use_index: true},
        {name: "Rasperry Pi (Embedded)", order: 0, force_hide: false, use_index: true},
        {name: "Autonomous Pathfinding", order: 0, force_hide: false, use_index: true},
        {name: "Image Processing/Object Detection in OpenCV", order: 0, force_hide: false, use_index: true}
      ],
      show_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Data analysis / Visualization',
      tags: [{name: TagNames.SPACY, order: 0, force_hide: false, use_index: true},
        {name: TagNames.NLTK, order: 0, force_hide: false, use_index: true},
        {name: TagNames.D3, order: 0, force_hide: false, use_index: true},
        {name: TagNames.PLOTLY, order: 0, force_hide: false, use_index: true},
        {name: TagNames.MATPLOTLIB, order: 0, force_hide: false, use_index: true},
        {name: TagNames.PANDAS, order: 0, force_hide: false, use_index: true},
        {name: TagNames.DATA_ANALYSIS, order: 0, force_hide: true, use_index: true},
        {name: TagNames.DATA_VISUALIZATION, order: 0, force_hide: true, use_index: true},
        {name: TagNames.NLP, order: 0, force_hide: true, use_index: true}
      ],
      show_controls: false,
      force_hide: false,
      order: 0
    },
    {
      title: 'Coursework',
      tags: [{name: 'Data Structures and Algorithms', order: 0, force_hide: false, use_index: false},
        { name: 'Microprocessors', order: 0, force_hide: false, use_index: false}],
      id: 'COURSEWORK', // Just a flag so that this skills section can be disabled in the for loop if desired
      show_controls: false,
      force_hide: false,
      order: 0
    }
  ];

  function toggle_tags_controls(i){
    i.show_controls = !i.show_controls;
    refresh_tags();
  }
  
  function toggle_force_hide(i){
    i.force_hide = !i.force_hide;
    /* refresh_tags(); */
  }

  $: refresh_tags({$tags});

  function refresh_tags(){
    items = [...items];
    console.log('refreshing skills items');
  }

  function should_display_pointlist(pointList){
    // Returns boolean depending on whether this point list should be displayed.
    // which depends on if the tags are relevant to the loaded tags, and any other overriding settings like
    // disable_coursework_skills

    if (pointList.force_hide){
      return false;
    }

    if ($force_display_skills_ignore_tags){
      return pointList.id == 'COURSEWORK' && !$disable_coursework_skills;
    }

    function get_indexed_tags(i){
      return i.filter(j => j.use_index).map(j => j.name);
    }

    if (arrayIntersect($tags, get_indexed_tags(pointList.tags)).length > 0){
      return true;
    }

    if (pointList.id == 'COURSEWORK' && !$disable_coursework_skills){
      return true;
    }

    return false;
  } 

  function tag_sort(a, b){
    if ($tags.includes(a.name)){
      return $tags.includes(b.name) ? 0 : -1;
    }
    return $tags.includes(b.name) ? 1 : 0;
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

  p{
    margin: 0;
    font-weight: 200;
    /*font-size: 15px;*/ /* 15px set by store instead of hardcoded */
  }
</style>

<Section {header} bind:show_controls {force_hide}>
  {#if show_controls}
    <SectionControls bind:force_hide/>
    <ListControls bind:items/>
  {/if}
  {#each items.concat().sort((a, b) => a.order - b.order) as item, n}
    {#if should_display_pointlist(item, $tags)}
      <h1 class="skills-section-title" style="font-size: {$skills_headings_font_size}px;"
         on:click={()=>{toggle_tags_controls(item)}}>
          {item.title}
        </h1>
        <p 
        on:click={()=>{toggle_tags_controls(item)}}
        style="margin-bottom: {n == items.length -1 ? '0' : '15px'}; font-size: {$skills_content_font_size}px;">
        {item.tags.filter(i => !i.force_hide).sort(tag_sort).sort(order_sort).map(i => i.name).join(', ')}
      </p>
      {#if item.show_controls}
        <TagControls bind:item={item}/>
      {/if}
    {/if}
  {/each}
</Section>
