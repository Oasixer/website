<script>
  import Section from './Section.svelte';
  import PointList from '../components/PointList.svelte';

  let header = 'Awards / Achievements';
  let points = ['Award 1', 'Award 2'];
</script>

<style>
  p{
    margin: 6px 0;
  }
</style>

<Section {header}>
  <PointList {points}/>
</Section>
