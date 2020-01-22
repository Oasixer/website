<script>
  import Section from './Section.svelte';
  import PointList from '../components/PointList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';

  let header = 'Interests';
  let items = [
    {title: 'Competitive rock climber for 12 years', order: 0, force_hide: false},
    {title: 'National Youth Circus alumni', order: 0, force_hide: false},
    {title: 'Machining, woodworking', order: 0, force_hide: false},
    {title: 'Rock climbing coach during high school', order: 0, force_hide: false},
  ];

  let show_controls = false;
  let force_hide = false;
</script>

<style>
  p{
    margin: 6px 0;
  }
</style>

<Section {header} bind:show_controls {force_hide}>
  {#if show_controls}
    <SectionControls bind:force_hide/>
    <ListControls bind:items/>
  {/if}
  <PointList bind:items bind:show_controls/>
</Section>
