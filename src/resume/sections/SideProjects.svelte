<script>
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import { TagNames } from '../utils/settings.js';

  let header = 'Side Projects';

  let items = [
    {
      title: 'Realtime Rocket Data Visualiser',
      location: 'UW Rocketry',
      position: 'Full Stack Developer',
      date: 'Sep-Dec 2019',
      points: ['test1', 'test2'],
      tags: [TagNames.PYTHON, TagNames.ARDUINO]
    },
    {
      title: 'North Inc. (Formerly Thalmic Labs)',
      location: 'Toronto',
      position: 'Computer Vision Software Developer',
      date: 'Sep-Dec 2019',
      points: ['test1', 'test2'],
      tags: [TagNames.PYTHON]
    }
  ];

</script>

<Section {header}>
  <ExperienceList {items} work={false}/>
</Section>
