<script>
  import Icon from 'fa-svelte';
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
  import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
  import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';

  export let embedded;
  
</script>

<style>
  div#link-row{
    display: flex;
    flex-flow: row wrap;
    padding: 0 -10px; /*top+bot left+right*/
    width: 100%;
    justify-content: center;
  }
  div#link-row.darktheme{
    flex-flow: column nowrap;
  } 

  * {
    margin: 0 5px;
  }

  div.v-line{
    width: 1px;
    background-color: black;
  }
  
  a, a > *{
    font-size: 13px;
  }
  a.darktheme, a.darktheme > *{
    font-size: 17px;
  }

  a{
    text-decoration: none;
    display: flex;
    color: #303030;
  }

  a.darktheme{
    color: #a1a2a3;
  }

  p{
    margin: 0;
  }
</style>

<div id="link-row" class:darktheme={embedded}>
  <a class:darktheme={embedded} href='http://github.com/oasixer'>
    <p style="margin-right: 4px;"><Icon icon={faGithub}/></p>
    <p>github.com/oasixer</p>
  </a>
  <div class="v-line"></div>
  <a class:darktheme={embedded} >
    <p style="margin-right: 4px;"><Icon icon={faPhone}/></p>
    <p>647-997-6743</p>
  </a>
  <div class="v-line"></div>
  <a class:darktheme={embedded} href="mailto:ksmoffet@edu.uwaterloo.ca">
    <p style="margin-right: 4px;"><Icon icon={faEnvelopeSquare}/></p>
    <p>ksmoffet@uwaterloo.ca</p>
  </a>
  <div class="v-line"></div>
  <a class:darktheme={embedded} href="https://www.linkedin.com/in/kaelanms/">
    <p style="margin-right: 4px;"><Icon icon={faLinkedin}/></p>
    <p>linkedin.com/kaelanms/</p>
  </a>
</div>
