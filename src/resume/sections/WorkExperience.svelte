<script>
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import { TagNames, TagCombos } from '../utils/settings.js';

  let header = 'Work Experience';

  let items = [
    {
      title: 'CIBC',
      location: 'Toronto',
      position: 'Full Stack Developer',
      date: 'Sep-Dec 2019',
      points: ['Led the development of a webapp used nationwide, using svelteJS, Flask, and OracleDB', 'test2'],
      tags: [TagCombos.WEBDEV]
    },
    {
      title: 'North Inc. (Formerly Thalmic Labs)',
      location: 'Toronto',
      position: 'Computer Vision Software Developer',
      date: 'Sep-Dec 2019',
      points: ['test1', 'test2'],
      tags: [TagNames.CPP, TagNames.PYTHON]
    }
  ];

</script>

<Section {header}>
  <ExperienceList {items} work={true}/>
</Section>
