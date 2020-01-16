<script>
  import Section from './Section.svelte';
  import { TagNames, tags, disable_coursework_skills, alternate_skills_display_mode } from '../utils/settings.js';
  import { arrayIntersect } from '../utils/misc.js';

  let header = 'Skills';
  let pointLists = [
    {
      title: 'Frontend webdev / User Interface',
      points: [TagNames.SVELTE, TagNames.JS, TagNames.HTML, TagNames.CSS, TagNames.SCSS, TagNames.REACT, TagNames.QT, TagNames.PYQT, TagNames.SELENIUM],
      other_tags: [TagNames.FRONTEND, TagNames.UI]
    },
    {
      title: 'Backend',
      points: [TagNames.FLASK, TagNames.SQL, TagNames.SQLITE, TagNames.ORACLEDB],
      other_tags: [TagNames.BACKEND]
    },
    {
      title: 'Data analysis / Visualization',
      points: [TagNames.SPACY, TagNames.NLTK, TagNames.PLOTLY, TagNames.MATPLOTLIB, TagNames.PANDAS],
      other_tags: [TagNames.DATA_ANALYSIS, TagNames.DATA_VISUALIZATION, TagNames.NLP]
    },
    {
      title: 'Coursework',
      points: ['Data structures and Algorithms', 'Microprocessors'],
      other_tags: [], // empty array necessary
      id: 'COURSEWORK' // Just a flag so that this skills section can be disabled in the for loop if desired
    }
  ];

  function should_display_pointlist(pointList){
    // Returns boolean depending on whether this point list should be displayed.
    // which depends on if the tags are relevant to the loaded tags, and any other overriding settings like
    // disable_coursework_skills

    console.log('should display?');

    if (arrayIntersect($tags, [...pointList.points, ...pointList.other_tags]).length>0){
      return true;
    }
    if (pointList.id == 'COURSEWORK' && !disable_coursework_skills){
      return true;
    }
    return false;
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
    font: 900 15px roboto, sans-serif;
  }

  p{
    margin: 0;
    font-weight: 200;
    font-size: 15px;
  }
</style>

<Section {header}>
  <!--  <div class='skills-main'>  -->
  {#if $alternate_skills_display_mode}
    <div class='row'>
      <div class='col'>
        {#each pointLists as pointList}
          {#if should_display_pointlist(pointList, $tags)}
            <h1 class="skills-section-title">{pointList.title}</h1>
          <!--  <PointList points={pointList.points}/>  -->
          {/if}
        {/each}
      </div>
      <div class='col'>
        {#each pointLists as pointList}
          {#if should_display_pointlist(pointList, $tags)}
            <p>{pointList.points.join(', ')}</p>
          {/if}
        {/each}
      </div>
    </div>
  {:else}
    {#each pointLists as pointList}
      {#if should_display_pointlist(pointList, $tags)}
        <h1 class="skills-section-title">{pointList.title}</h1>
        <p style="margin-bottom: 15px;">{pointList.points.join(', ')}</p>
      {/if}
    {/each}
  {/if}
</Section>
