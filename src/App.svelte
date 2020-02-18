<script>
  import Resume from './resume/Resume.svelte';
  import Home from './home/Home.svelte';
  import About from './about/About.svelte';
  import Portfolio from './portfolio/Portfolio.svelte';
  import Menubar from './menubar/Menubar.svelte';

  import { onMount } from 'svelte';

  let y;
  let curSection=0;

  $: curSection = getCurrentSection(y);

  $: console.log(curSection);

  let sections = [
    {height: undefined, component: Home},
    {height: undefined, component: About},
    {height: undefined, component: Portfolio}
  ]

  const getCurrentSection = (y) => {
    let y_temp = y;
    for (let n=0;n<sections.length; n++){
      let i=sections[n];
      if (y_temp < i.height){
        return n;
      }
      else{
        y_temp -= i.height;
      }
    } 
  }

  onMount(() => {
  });

</script>

<style>
  :global(body){
    margin: 0;
    padding: 0;
  }
</style>

<svelte:window bind:scrollY={y}/>

{#if curSection>0}
  <Menubar floaty={true}/>
{/if}

{#each sections as section}
  <svelte:component this={section.component} bind:height={section.height} />
{/each}
