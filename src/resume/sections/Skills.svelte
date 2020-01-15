<script>
  import Section from './Section.svelte';
  /* import PointList from '../components/PointList.svelte'; */

  let header = 'Skills';
  let pointLists = [
    {
      title: 'Frontend',
      points: ['Svelte', 'html', 'css', 'js', 'Svelte', 'html', 'css', 'js'],
    },
    {
      title: 'Backend',
      points: ['Flask', 'SQL']
    },
  ];

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
    margin: 0;
    margin-right: 15px;
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
  <div class='row'>
    <div class='col'>
      {#each pointLists as pointList}
        <h1 class="skills-section-title">{pointList.title}</h1>
        <!--  <PointList points={pointList.points}/>  -->
      {/each}
    </div>
    <div class='col'>
    {#each pointLists as pointList}
      <p>{pointList.points.join(', ')}</p>
    {/each}
    </div>
  </div>
</Section>
