<script>
  import Resume from './resume/Resume.svelte';
  import ResumePage from './resume/ResumePage.svelte';
  import Home from './home/Home.svelte';
  import About from './about/About.svelte';
  import Portfolio from './portfolio/Portfolio.svelte';
  import Contact from './contact/Contact.svelte';
  import Menubar from './components/Menubar.svelte';
  import WorkExperiencePage from './resume/WorkExperiencePage.svelte';
  import SkillsPage from './resume/SkillsPage.svelte';
  import BackToTop from './components/BackToTop.svelte';

  import { onMount } from 'svelte';

  let y;
  let curSection=0;

  $: curSection = getCurrentSection(y);

  let sections = [
    {component: Home, name:'Home', excludeFromMenubar: false},
    {component: About, name:'About', excludeFromMenubar: false},
    {component: WorkExperiencePage, name:'Work Experience', excludeFromMenubar: false},
    {component: SkillsPage, name:'Skills', excludeFromMenubar: false},
    {component: Portfolio, name:'Portfolio', excludeFromMenubar: false},
    {component: ResumePage, name:'Resume', excludeFromMenubar: false},
    {component: Contact, name:'Contact', excludeFromMenubar: false},
    {component: BackToTop, excludeFromMenubar: true}
  ];

  function move(event){
    /* console.log('move-app'); */
    /* console.log(event); */
    let n=event.detail.args.n;
    /* console.log(n); */
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
      if (y_temp < i.height - 40){
        return n;
      }
      else{
        y_temp -= i.height;
      }
    } 
  }

  const getColor = (section, n) =>{
    /* console.log('hi'); */
    return n % 2 ? '#202020' : '#161a28';
  }
</script>

<style>
  :global(body){
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(*){
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(html){
    scroll-behavior: smooth;
  }
</style>

<link href="//db.onlinewebfonts.com/c/69dbc1186412d7831b88d8a78a360360?family=DIN+Condensed+Web" rel="stylesheet" type="text/css"/>
<link href="//db.onlinewebfonts.com/c/84d8d4c49f66a6a5abe1e0608ba764a2?family=Source+Sans+Pro" rel="stylesheet" type="text/css"/>
<link href="//db.onlinewebfonts.com/c/36c361ac34f216ed98000d61fa8ac996?family=Futura+PT+Web+Light" rel="stylesheet" type="text/css"/>
<link href="//db.onlinewebfonts.com/c/6e390d15863032277a741e08a6b18ce2?family=Futura+Std+Medium" rel="stylesheet" type="text/css"/>
<svelte:window bind:scrollY={y}/>

<Menubar floaty={false} {sections} {curSection} on:move={move}/>

{#if curSection>0}
  <Menubar floaty={true} {sections} {curSection} on:move={move}/>
{/if}

{#each sections as section, n}
  <svelte:component this={section.component} bind:height={section.height} bg_color={getColor(section, n)} on:move={move}/>
{/each}
