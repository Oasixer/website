<script>
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames, auto_populate_orders } from '../utils/settings.js';

  let header = 'Work Experience';
  export let embedded=false;

  let force_hide = false;
  let show_controls = false;

  $: if ($auto_populate_orders || embedded){
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
      points: ['Led the development of a webapp with users nationwide, using SvelteJS as frontend, Flask (Python) webserver backend with OracleDB SQL server',
        'Provided data visualiations by embedding Tableau dashboards into webapp in JS/SCSS/HTML', 
        'Improved fraud detection capabilities by creating a text classifier using spaCy, NLTK (Python)',
        'Achieved "Above and Beyond" award for outstanding performance'],
      tags: [{title: TagNames.FLASK, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SVELTE, order: 0, force_hide: false, use_index: true},
        {title: TagNames.JS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.PYTHON, order: 0, force_hide: false, use_index: true},
        {title: TagNames.NLP, order: 0, force_hide: false, use_index: true},
        {title: TagNames.TABLEAU, order: 0, force_hide: false, use_index: true},
        {title: TagNames.UI, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SQL, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SCSS, order: 0, force_hide: false, use_index: true},
        {title: TagNames.SPACY, order: 0, force_hide: false, use_index: true}
      ],
      force_hide: false,
      order: 0
    },
    {
      title: 'North Inc. (Formerly Thalmic Labs)',
      location: 'Waterloo',
      position: 'Computer Vision Software Developer',
      date: 'Jan-April 2019',
      points: ['Improved simulation accuracy by 76% by developing a performance critical DLL plugin that performs raytraces',
        'Created enhanced optical artifact simulator, using advanced OpenCV matrix calculations in C++',
        'Improved effectiveness of material property lookup table by developing n-dimensional interpolation algorithm',
        'Automated a laser test fixure by developing control software in Python & Arduino'],
      tags: [{title: TagNames.CPP, order: 0, force_hide: false, use_index: true},
        {title: TagNames.OPENCV, order: 0, force_hide: false, use_index: true},
        {title: TagNames.PYTHON, order: 0, force_hide: false, use_index: true},
        {title: TagNames.ARDUINO, order: 0, force_hide: false, use_index: true}
      ],
      force_hide: false,
      order: 0
    }
  ];

</script>

<Section {header} {embedded} {force_hide} bind:show_controls>
  {#if show_controls}
    <SectionControls bind:force_hide/>
    <ListControls bind:items/>
  {/if}
  <ExperienceList bind:items {embedded} work={true}/>
</Section>
