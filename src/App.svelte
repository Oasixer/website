<script>
  import Resume from './resume/Resume.svelte';
  import Home from './home/Home.svelte';
  import About from './about/About.svelte';
  import Portfolio from './portfolio/Portfolio.svelte';
  import Contact from './contact/Contact.svelte';
  import Menubar from './menubar/Menubar.svelte';

  import { onMount } from 'svelte';

  let y;
  let curSection=0;

  $: curSection = getCurrentSection(y);
  /* $: console.log(curSection); */

  let sections = [
    {height: undefined, component: Home, name:'Home'},
    {height: undefined, component: About, name:'About'},
    {height: undefined, component: Portfolio, name:'Portfolio'},
    {height: undefined, component: Contact, name:'Resume'},
    {height: undefined, component: Contact, name:'Contact'}
  ];

  function move(event){
    console.log('move-app');
    console.log(event);
    let n=event.detail.args.n;
    console.log(n);
    let y_temp=0;
    for(let i=0; i<n; i++){
      y_temp += sections[i].height;
    }
    y = y_temp;
  }

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
</script>

<style>
  :global(body){
    margin: 0;
    padding: 0;
  }
  :global(html){
    scroll-behavior: smooth;
  }
</style>

<svelte:window bind:scrollY={y}/>

<Menubar floaty={false} {sections} {curSection} on:move={move}/>

{#if curSection>0}
  <Menubar floaty={true} {sections} {curSection} on:move={move}/>
{/if}

{#each sections as section}
  <svelte:component this={section.component} bind:height={section.height} {sections} on:move={move}/>
{/each}
