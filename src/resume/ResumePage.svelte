<script>
  export let bg_color;
  export let height=undefined;
  import Icon from 'fa-svelte';
  import { faFileDownload } from '@fortawesome/free-solid-svg-icons/faFileDownload';
  
  /* let src_uw = './images/uw.png'; */
</script>

<style>
  div#resumepage{
    width: 100%;
    padding: 70px;
    display: flex;
    flex-flow: column nowrap;
  }

  h1{
    font-size: 70px;
    text-transform: uppercase;
    color: #f3f5f4;
    font-weight: 100;
    font-family: "DIN Condensed Web";
    margin-bottom: 25px;
  }

  button{
    background-color: transparent;
    border: none;
    color: #d3d5d4;
    cursor: pointer;
    /* background-color: darkgrey; */
    border: 1px solid #d3d5d4;
    border-radius: 5px;
    padding: 20px;
    font-size: 20px;
  }

  button:hover, button:active{
    background-color: transparent;
    color: #f3f5f4;
    padding: 20px;
  }

  div.row{
    display: flex;
    flex-flow: row nowrap;
  }

  a{
    display: flex;
    flex-flow: row nowrap;
    font-size: 30px;
  }

  p.iconContainer{
    margin-right: 15px;
    font-size: 30px;
  }

  a:hover{
    text-decoration: none;
  }

</style>

<div id='resumepage'
  style="background-color: {bg_color}"
     bind:clientHeight={height}>
  <h1>Resume</h1>
  <div class='row'>
    <a href='./Kaelan_Resume_2020.pdf' download>
    <p class="iconContainer"><Icon icon={faFileDownload}/></p>
    <p>Download</p>
  </div>
</div>
