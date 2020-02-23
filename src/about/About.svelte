<script>
  export let height=undefined;
  
  let src_uw = './images/uw.png';
  export let bg_color;
</script>

<style>
  div.row{
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
  }

  img#uw-pic{
    margin-top: -30px;
  }
  div#about{
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

  p{
    color: #c3c4c5;
    width: 70%;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 300;
    line-height: 1.65
  }

  img{
    width: 30%;
  }
</style>

<div id='about'
  style="background-color: {bg_color}"
  bind:clientHeight={height}>
  <h1>About Kaelan</h1>
  <div class='row'>
    <p>
      I'm a Mechatronics Engineering student at University of Waterloo.
      I've been passionate about programming, control systems, and robotics since high school when I got hooked on FIRST Robotics.
      I love to design algorithms that solve difficult tasks, and I live for the satisfaction of closing a hundred chrome tabs when the test cases finally all pass.
      I have been a competitive climber for 10 years, but my real drive in sports is outdoor rock climbing.
    </p>
    <img id='uw-pic' src={src_uw}/>
  </div>
</div>
