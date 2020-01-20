<script>
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames, auto_populate_orders } from '../utils/settings.js';

  let header = 'Work Experience';

  let force_hide = false;
  let show_controls = false;

  $: if ($auto_populate_orders){
    populate_orders();
  }

  function populate_orders(){
    for (let i=0; i<items.length; i++){
      items[i].order = i;
    }
  }

  let items = [
    {
      title: 'CIBC',
      location: 'Toronto',
      position: 'Full Stack Developer',
      date: 'Sep-Dec 2019',
      points: ['Led the development of a webapp with users nationwide, using SvelteJS as frontend, Flask webserver backend with SQL server', 'Optimized requests by creating a message classifier using spaCy, NLTK in Python', 'Provided data visualiations by embedding Tableau dashboards into webapp in JS/SCSS/HTML', 'Achieved "Above and Beyond" award'],
      tags: [{name: TagNames.FLASK, order: 0, display: true, use_index: true},
        {name: TagNames.SVELTE, order: 0, display: true, use_index: true},
        {name: TagNames.JS, order: 0, display: true, use_index: true},
        {name: TagNames.PYTHON, order: 0, display: true, use_index: true},
        {name: TagNames.NLP, order: 0, display: true, use_index: true},
        {name: TagNames.TABLEAU, order: 0, display: true, use_index: true},
        {name: TagNames.UI, order: 0, display: true, use_index: true},
        {name: TagNames.SQL, order: 0, display: true, use_index: true},
        {name: TagNames.SCSS, order: 0, display: true, use_index: true},
        {name: TagNames.SPACY, order: 0, display: true, use_index: true}
      ],
      force_hide: false,
      order: 0
    },
    {
      title: 'North Inc. (Formerly Thalmic Labs)',
      location: 'Waterloo',
      position: 'Computer Vision Software Developer',
      date: 'Jan-April 2019',
      points: ['Improved simulation accuracy by 76% by developing a performance critical DLL plugin that performs raytraces', 'Created enhanced optical artifact simulator, using advanced OpenCV matrix calculations in C++', 'Automated a laser test fixure by developing control software in Python & Arduino'],
      tags: [{name: TagNames.CPP, order: 0, display: true, use_index: true},
        {name: TagNames.OPENCV, order: 0, display: true, use_index: true},
        {name: TagNames.PYTHON, order: 0, display: true, use_index: true},
        {name: TagNames.ARDUINO, order: 0, display: true, use_index: true}
      ],
      force_hide: false,
      order: 0
    }
  ];

</script>

    <Section {header} {force_hide} bind:show_controls>
  {#if show_controls}
    <SectionControls bind:force_hide/>
    <ListControls bind:items/>
  {/if}
  <ExperienceList bind:items work={true}/>
</Section>
