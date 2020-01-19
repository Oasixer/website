<script>
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import { TagNames } from '../utils/settings.js';

  let header = 'Work Experience';

  let items = [
    {
      title: 'CIBC',
      location: 'Toronto',
      position: 'Full Stack Developer',
      date: 'Sep-Dec 2019',
      points: ['Led the development of a webapp with users nationwide, using SvelteJS as frontend, Flask webserver backend with SQL server', 'Optimized requests by creating a message classifier using spaCy, NLTK in Python', 'Provided data visualiations by embedding Tableau dashboards into webapp in JS/SCSS/HTML', 'Achieved "Above and Beyond" award'],
      tags: [TagNames.FLASK, TagNames.SVELTE, TagNames.JS, TagNames.PYTHON, TagNames.NLP, TagNames.TABLEAU, TagNames.UI, TagNames.SQL, TagNames.SCSS, TagNames.SPACY],
      ignored_tags: []
    },
    {
      title: 'North Inc. (Formerly Thalmic Labs)',
      location: 'Waterloo',
      position: 'Computer Vision Software Developer',
      date: 'Jan-April 2019',
      points: ['Improved simulation accuracy by 76% by developing a performance critical DLL plugin that performs raytraces', 'Created enhanced optical artifact simulator, using advanced OpenCV matrix calculations in C++', 'Automated a laser test fixure by developing control software in Python & Arduino'],
      tags: [TagNames.CPP, TagNames.OPENCV, TagNames.PYTHON, TagNames.ARDUINO],
      ignored_tags: []
    }
  ];

</script>

<Section {header}>
  <ExperienceList {items} work={true}/>
</Section>
