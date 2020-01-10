<script>
  import WorkExperience from './sections/WorkExperience.svelte';
  import Skills from './sections/Skills.svelte';
  import Education from './sections/Education.svelte';
  import SideProjects from './sections/SideProjects.svelte';
  import Header from './components/Header.svelte';
</script>


<style>
  main {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
  }

  div.main-container{
    display: flex;
    flex-flow: row nowrap;
    margin:0;
    padding:0;
  }

  div.column {
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  div.left{
    flex: 2 0; /* grow shrink basis */
    margin-right: 25px;
  }
  
  div.right{
    flex: 1 0; /* grow shrink basis */
  }
</style>

<main>
  <Header/>
  <div class="main-container">
    <div class="column left">
      <WorkExperience />
      <SideProjects />
    </div>
    <div class="column right">
      <Skills />
      <Education />
    </div>
  </div>
</main>
