<script>
  export let height;

  let src_plotly = '../assets/images/climb.jpg';
  let src_frc = '../assets/images/frc.jpg';
  let src_windsurf = '../assets/images/windsurf.jpg';
</script>

<style>
  div#portfolio{
    width: 100%;
    background-color: #202030;
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
</style>

<div id='portfolio' bind:clientHeight={height}>
  <h1>Portfolio</h1>
  <div id='portfolio-inner'>
  </div>
</div>
