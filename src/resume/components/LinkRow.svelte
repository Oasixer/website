<script>
  import Icon from 'fa-svelte';
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
  import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
  import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';
  
</script>

<style>
  div#link-row{
    display: flex;
    flex-flow: row wrap;
    padding: 0 -10px; /*top+bot left+right*/
    width: 100%;
    justify-content: center;
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

  a{
    text-decoration: none;
    display: flex;
    color: #303030;
  }

  p{
    margin: 0;
  }
</style>

<div id="link-row">
  <a href='http://github.com/oasixer'>
    <p style="margin-right: 4px;"><Icon icon={faGithub}/></p>
    <p>github.com/oasixer</p>
  </a>
  <div class="v-line"></div>
  <a>
    <p style="margin-right: 4px;"><Icon icon={faPhone}/></p>
    <p>647-997-6743</p>
  </a>
  <div class="v-line"></div>
  <a href="mailto:ksmoffet@edu.uwaterloo.ca">
    <p style="margin-right: 4px;"><Icon icon={faEnvelopeSquare}/></p>
    <p>ksmoffet@uwaterloo.ca</p>
  </a>
  <div class="v-line"></div>
  <a href="https://www.linkedin.com/in/kaelanms/">
    <p style="margin-right: 4px;"><Icon icon={faLinkedin}/></p>
    <p>linkedin.com/kaelanms/</p>
  </a>
</div>
