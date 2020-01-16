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
      points: ['Led the development of a webapp with users nationwide, using SvelteJS as frontend, Flask webserver backend with SQL server', 'Optimized requests by creating a message classifier using spaCy, NLTK in python', 'Provided data visualiations by embedding Tableau dashboards into webapp in JS/SCSS/HTML'],
      tags: [TagNames.FLASK, TagNames.SVELTE, TagNames.JS, TagNames.PYTHON, TagNames.NLP, TagNames.TABLEAU, TagNames.UI, TagNames.SQL, TagNames.SCSS, TagNames.SPACY]
    },
    {
      title: 'North Inc. (Formerly Thalmic Labs)',
      location: 'Toronto',
      position: 'Computer Vision Software Developer',
      date: 'Sep-Dec 2019',
      points: ['Improved simulation accuracy by developing a performance critical DLL plugin that performs raytraces', 'Enhanced research capabilities by heading development of a C++ tool that simulates sub-pixel artifacts for an optical design', 'Automated a laser test fixure by developing control software in Python + Arduino that implemented a variety of testing modes'],
      tags: [TagNames.CPP, TagNames.OPENCV, TagNames.PYTHON, TagNames.ARDUINO]
    }
  ];

</script>

<Section {header}>
  <ExperienceList {items} work={true}/>
</Section>
