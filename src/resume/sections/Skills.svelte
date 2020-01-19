<script>
  import Section from './Section.svelte';
  import { TagNames, tags, disable_coursework_skills, alternate_skills_display_mode,
    skills_headings_font_size, skills_content_font_size
  } from '../utils/settings.js';
  import { arrayIntersect } from '../utils/misc.js';

  let header = 'Skills';
  let pointLists = [
    {
      title: 'Frontend Webdev / User Interface',
      points: [TagNames.SVELTE, TagNames.REACT, TagNames.HTML, TagNames.CSS, TagNames.SCSS, TagNames.QT, TagNames.PYQT, TagNames.SELENIUM, TagNames.LATEX],
      other_tags: [TagNames.FRONTEND, TagNames.UI]
    },
    {
      title: 'Backend / Database',
      points: [TagNames.FLASK, TagNames.SQL, TagNames.AWS, TagNames.POSTGRESQL, TagNames.SQLALCHEMY, TagNames.ORACLEDB, TagNames.DOCKER],
      other_tags: [TagNames.BACKEND]
    },
    {
      title: 'Languages',
      points: [TagNames.PYTHON, TagNames.CPP, TagNames.ARDUINO, TagNames.JS, TagNames.BASH, TagNames.KOTLIN],
      other_tags: []
    },
    {
      title: 'Control Systems',
      points: [TagNames.ROS, "Rasperry Pi (Embedded)", "Autonomous Pathfinding", "Image Processing/Object Detection in OpenCV"],
      other_tags: [TagNames.CONTROL_SYSTEMS]
    },
    {
      title: 'Data analysis / Visualization',
      points: [TagNames.SPACY, TagNames.NLTK, TagNames.D3, TagNames.PLOTLY, TagNames.MATPLOTLIB, TagNames.PANDAS],
      other_tags: [TagNames.DATA_ANALYSIS, TagNames.DATA_VISUALIZATION, TagNames.NLP]
    },
    {
      title: 'Coursework',
      points: ['Data structures and Algorithms', 'Microprocessors'],
      other_tags: [], // empty array necessary
      id: 'COURSEWORK' // Just a flag so that this skills section can be disabled in the for loop if desired
    }
  ];

  $: refresh_points({$tags});

  function refresh_points(){
    pointLists = [...pointLists];
  }

  function should_display_pointlist(pointList){
    // Returns boolean depending on whether this point list should be displayed.
    // which depends on if the tags are relevant to the loaded tags, and any other overriding settings like
    // disable_coursework_skills

    if (arrayIntersect($tags, [...pointList.points, ...pointList.other_tags]).length>0){
      return true;
    }

    if (pointList.id == 'COURSEWORK' && !$disable_coursework_skills){
      return true;
    }

    return false;
  } 

  function tag_sort(a, b){
    if ($tags.includes(a)){
      return $tags.includes(b) ? 0 : -1;
    }
    return $tags.includes(b) ? 1 : 0;
  }

</script>

<style>
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

<Section {header}>
  <!--  <div class='skills-main'>  -->
  {#if $alternate_skills_display_mode}
    <div class='row'>
      <div class='col'>
        {#each pointLists as pointList}
          {#if should_display_pointlist(pointList, $tags)}
            <h1 class="skills-section-title" style="font-size: {$skills_headings_font_size}px">{pointList.title}</h1>
          <!--  <PointList points={pointList.points}/>  -->
          {/if}
        {/each}
      </div>
      <div class='col'>
        {#each pointLists as pointList}
          {#if should_display_pointlist(pointList, $tags)}
            <p style="font-size: {$skills_content_font_size}px;">{pointList.points.join(', ')}</p>
          {/if}
        {/each}
      </div>
    </div>
  {:else}
    {#each pointLists as pointList, n}
      {#if should_display_pointlist(pointList, $tags)}
        <h1 class="skills-section-title" style="font-size: {$skills_headings_font_size}px;">{pointList.title}</h1>
        <p style="margin-bottom: {n == pointLists.length -1 ? '0' : '15px'}; font-size: {$skills_content_font_size}px;">{pointList.points.sort(tag_sort).join(', ')}</p>
      {/if}
    {/each}
  {/if}
</Section>
