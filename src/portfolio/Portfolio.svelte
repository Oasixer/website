<script>
  import { onMount } from 'svelte';
  import ClickOutside from 'svelte-click-outside';

  export let bg_color;
  export let height=undefined;

  let base = './images/portfolio/';

  let items=[
    {
      title: 'Live Rocket Data Visualiser',
      img: 'plotly.png',
      text: 'Visualisation dashboard for UW Rocketry to display live sensor data. Developed data transfer protocol for realtime transmission of rocket sensor data. Improved analysis capabilities by creating data visualizations with D3.js graphs encapsulated as Python Plotly Dash components'
    },
    {
      title: 'Smart Headlamp',
      img: 'smartheadlamp_cropped.jpg',
      text: 'Gesture controlled headlamp with deep learning facial recognition via Haar Cascades in OpenCV. Implemented Leap Motion Control using C++. Set up onboard Rasperry Pi and Arduino to control motors, sensors, and lights. Achieved second place, and received Leap Motion award.'
    },
    {
      title: 'ROS Robot Driver Station',
      img: 'driverstation.png',
      text: 'Lead the design and development of a QT application which provides a human interface to the robot simulator. Implemented driver station in Python handling joystick input, high-level state control, and diagnostic info. Implemented Robot Operating System (ROS) message publishing/subscribing to relay critical information to and from the robot'
    },
    {
      title: 'Ri3D 2020',
      img: 'ri3d2020.jpg',
      text: 'Built FRC robot in three days.'
    },
    {
      title: 'Ri3D 2019',
      img: 'ri3d2019.jpg',
      text: 'Built FRC robot in three days.'
    },
    {
      title: 'First Robotics 2018',
      img: 'frc2018.jpg',
      text: 'Alliance captain and division winner at 2018 World Championships. Implemented autonomous pathfinding in Java. Used SolidWorks to design robot components. Machined mechanical components out of aluminum.'
    },
    {
      title: 'First Robotics 2017',
      img: 'frc2017.jpg',
      text: 'Programmed robot controls in Java, Used SolidWorks to design robot components. Machined mechanical components out of aluminum.'

    }
  ];
  
  async function updateDisplayedItem(n){
    if (displayedItem == -1){
      await sleep(50);
      displayedItem = n;
    }
    console.log('hi');
  }

  function closeDisplay(){
    displayedItem = -1;
    console.log('close');
  }

  let cols=[];
  let numCols = 3;
  
  onMount(async () => {
    for (let i=0; i<numCols; i++){
      cols.push([]);
    }
    let curCol=0;
    let numFromTotal=0;
    for (let i=0; i<items.length; i++){
      items[i].numFromTotal = numFromTotal++;
      cols[curCol].push(items[i]);
      curCol = curCol == numCols-1 ? 0 : curCol+1;
    }
    cols = [...cols];

    await sleep(0);
    updateWidths();
  });

  async function updateWidths(){
    let elements = document.getElementsByClassName('thumb');
    for (let i=0; i<elements.length; i++){
      elements[i].height = elements[i].width;
    }
  }

  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }

  let displayedItem = -1;

</script>

<style>
  div#portfolio{
    width: 100%;
    padding: 4%;
    display: flex;
    flex-flow: column nowrap;
  }
  
  div#portfolio-inner{
    display: flex;
    flex-flow: row wrap;
    margin: 0 -25px 0 0;
    padding: 0;
  }

  h1{
    font-size: 70px;
    text-transform: uppercase;
    color: #f3f5f4;
    font-weight: 100;
    font-family: "DIN Condensed Web";
    margin-bottom: 25px;
  }

  div.col{
    margin-right: 25px;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
  }

  div.card{
    display: flex;
    flex-flow: column nowrap;
    margin: 15px 10px;
    cursor: pointer;
    overflow: hidden;
  }
  .card:hover{
    transform: scale(1.1);
  }

  img.thumb{
    width: 100%;
    object-fit: cover;
    /* contain: The image keeps its original aspect ratio, but resized so that the longest of either the height or width can fit in the given dimensions.
cover: The image keeps its original aspect ratio and the image area is completely covered.
fill: The initial value. The image will fill its given area, even if it means losing its aspect ratio.
none: The image is not resized at all, and the original image size fills the given area.
scale-down: The smaller of either contain or none. */
  }

  img#plotly{
    /* object-position: L/R, T/B */
    object-position: 50% 50%;
  }
  img#smartheadlamp_cropped{
    object-position: 50% 0;
    /* transform: scale(2); */
    /* overflow: hidden; */
  }
  img#driverstation{
    object-position: 50% 50%;
  }
  img#ri3d2020{
    object-position: 50% 50%;
  }
  img#ri3d2019{
    object-position: 50% 50%;
  }
  img#frc2018{
    object-position: 50% 50%;
  }
  img#frc2017{
    object-position: 50% 50%;
  }

  h2{
    color: #f3f5f4;
    /* font-family: "Futura PT Web Light"; */
    font-family: "Futura Std Medium";
    text-transform: uppercase;
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.84px;
    font-size: 15px;
    margin-top: 12px;
  }

  img.full{
    object-fit: cover;
    width: 500px;
    max-height: 300px;
  }

  #full-frc2018{
    max-height: 320px;
    object-position: 50% 40%;
  }

  /* not mobile */
  div.displayItem{
    background-color: white;
    z-index: 6;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  div.displayMain{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 680px;
    height: 96vh;
  }
  
  div.displaySide{
    display: fixed;
    width: 80px;
  }
  
  div.displayRight{
    right: 0;
  }
  
  div.displayLeft{
    left: 0;
  }

  .displayText{
    width: 500px;
    margin-top: 30px;
  }
  
  /* mobile */
  @media all and (max-width: 850px){
    div.displayMain{
      width: 660px;
    }
  }

  .displayHeader{
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    margin: 30px 30px;
    margin-right: auto;
    font-size: 25px;
  }
</style>

<div id='portfolio'
    style="background-color: {bg_color}"
    bind:clientHeight={height}
    on:resize={()=>{console.log('test')}}>
  <h1>Portfolio</h1>
  <div id='portfolio-inner'>
    {#each cols as col}
      <div class='col'>
        {#each col as i}
          <div class='card'>
            <img
              class='thumb'
              id={i.img.slice(0,i.img.length-4)}
              src={base + i.img}
              on:click={()=>{updateDisplayedItem(i.numFromTotal)}}/>
            <h2>{i.title}</h2>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

{#if displayedItem != -1}
    {#if displayedItem>0}
      <div class='displayItem displaySide displayLeft'>
      </div>
    {/if}
    
    <ClickOutside on:clickoutside={closeDisplay} exclude={[]}>
      <div class='displayItem displayMain'>
        <h3 class='displayHeader'>{items[displayedItem].title}</h3>
        <!--  <div class='full-img-container'>  -->
          <img
            class='full'
            id={'full-'+items[displayedItem].img.slice(0,items[displayedItem].img.length-4)}
            src={base + items[displayedItem].img}
            on:click={()=>{updateDisplayedItem(items[displayedItem].numFromTotal)}}/>
            <!--  </div>  -->
          <p class='displayText'>{items[displayedItem].text}</p>

      </div>
    </ClickOutside>

    {#if displayedItem<items.length-1}
      <div class='displayItem displaySide displayRight'>
      </div>
    {/if}
{/if}

<svelte:window on:resize={updateWidths}/>
