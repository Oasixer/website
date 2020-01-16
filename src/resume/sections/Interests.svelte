<script>
  import Section from './Section.svelte';
  import PointList from '../components/PointList.svelte';

  let header = 'Interests';
  let points = [
    'Competitive rock climber for 12 yrs',
    'National Youth Circus alumni',
    'Machining, woodworking',
    'Rock climbing coach during high school'
  ];
</script>

<style>
  p{
    margin: 6px 0;
  }
</style>

<Section {header}>
  <PointList {points}/>
</Section>
