<script>
  import Section from './Section.svelte';
  import PointList from '../components/PointList.svelte';

  let header = 'Awards / Achievements';
  let points = ['CIBC Employee Above & Beyond Award',
    'UTRAHacks 2018 - 2nd place',
    'University Bouldering Series 2018 - 2nd place',
    '2017 Youth Climbing Nationals - 7th place'
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
