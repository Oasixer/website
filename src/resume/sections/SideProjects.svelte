<script>
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import ListControls from '../components/ListControls.svelte';
  import SectionControls from '../components/SectionControls.svelte';
  import { TagNames, auto_populate_orders } from '../utils/settings.js';

  let header = 'Projects';
  let show_controls = false;
  let force_hide = false;
  
  $: if ($auto_populate_orders){
    console.log('pop');
    populate_orders();
  }

  function populate_orders(){
    for (let i=0; i<items.length; i++){
      items[i].order = i;
    }
  }

  let items = [
    {
      title: 'Slack Chatbot (AWS)',
      location: 'UW Rocketry - Electrical Team',
      position: 'Programmer',
      date: 'Jan 2019',
      points: ['Developed scheduling application in Python, deployed to AWS Lambda', 'Created DynamoDB database to store user and group schedules'],
      tags: [{name: TagNames.PYTHON, order: 0, display: true, use_index: true},
        {name: TagNames.AWS, order: 0, display: true, use_index: true},
        {name: TagNames.BASH, order: 0, display: true, use_index: true},
        {name: TagNames.BACKEND, order: 0, display: true, use_index: true},
        {name: TagNames.DYNAMODB, order: 0, display: true, use_index: true}
      ],
      force_hide: false,
      order: 0
    },
    {
      title: 'Realtime Rocket Data Visualiser',
      location: 'UW Rocketry - Electrical Team',
      position: 'Programmer',
      date: 'Jan 2019',
      points: ['Developed data transfer protocol for realtime transmission of rocket sensor data', 'Improved analysis capabilities by creating data visualizations with Plotly'],
      tags: [{name: TagNames.PYTHON, order: 0, display: true, use_index: true},
        {name: TagNames.ARDUINO, order: 0, display: true, use_index: true},
        {name: TagNames.DATA_VISUALIZATION, order: 0, display: true, use_index: true},
        {name: TagNames.PLOTLY, order: 0, display: true, use_index: true}
      ],
      force_hide: false,
      order: 0
    },
    {
      title: 'PyBudgeter',
      location: '',
      position: 'Personal Project',
      date: 'Jan 2019',
      points: ['Created PostgreSQL database to store salted passwords, user info, transactions', 'Developed Android app frontend in Kotlin'],
      tags: [{name: TagNames.PYTHON, order: 0, display: true, use_index: true},
        {name: TagNames.FLASK, order: 0, display: true, use_index: true},
        {name: TagNames.SQL, order: 0, display: true, use_index: true},
        {name: TagNames.POSTGRESQL, order: 0, display: true, use_index: true},
        {name: TagNames.KOTLIN, order: 0, display: true, use_index: true},
        {name: TagNames.UI, order: 0, display: true, use_index: true},
        {name: TagNames.BACKEND, order: 0, display: true, use_index: true},
        {name: TagNames.FRONTEND, order: 0, display: true, use_index: true}
      ],
      force_hide: false,
      order: 0
    },
    {
      title: 'ROS Robot Driver Station',
      location: 'UW React',
      position: 'Controls team programmer',
      date: '2018',
      points: ['Lead the design and development of a QT application which provides a human interface to the robot simulator', 'Implemented driver station in Python handling joystick input, high-level state control, and diagnostic info', 'Implemented Robot Operating System (ROS) message publishing/subscribing to relay critical information to and from the robot'],
      tags: [{name: TagNames.PYTHON, order: 0, display: true, use_index: true},
        {name: TagNames.CONTROL_SYSTEMS, order: 0, display: true, use_index: true},
        {name: TagNames.DATA_VISUALIZATION, order: 0, display: true, use_index : true},
        {name: TagNames.UI, order: 0, display: true, use_index: true},
        {name: TagNames.ROS, order: 0, display: true, use_index: true},
        {name: TagNames.QT, order: 0, display: true, use_index: true}
      ],
      force_hide: false,
      order: 0
    },
    {
      title: 'Smart Headlamp',
      location: 'UTRAHacks 2018',
      position: 'Hackathon Project',
      date: '2018',
      points: ['Created gesture controlled headlamp with deep learning facial recognition via Haar Cascades in OpenCV', 'Implemented Leap Motion Control using C++', 'Set up onboard Rasperry Pi and Arduino to control motors, sensors, and lights', 'Achieved second place and Leap Motion award'],
      tags: [{name: TagNames.OPENCV, order: 0, display: true, use_index: true},
        {name: TagNames.UI, order: 0, display: true, use_index: true},
        {name: TagNames.MACHINE_LEARNING, order: 0, display: true, use_index: true},
        {name: TagNames.CONTROL_SYSTEMS, order: 0, display: true, use_index: true},
        {name: TagNames.ARDUINO, order: 0, display: true, use_index: true},
        {name: TagNames.PYTHON, order: 0, display: true, use_index: true},
        {name: TagNames.CPP, order: 0, display: true, use_index: true}
      ],
      force_hide: false,
      order: 0
    }
  ];

</script>

    <Section {header} {force_hide} bind:show_controls>
  {#if show_controls}
    <SectionControls bind:force_hide/>
    <ListControls bind:items/>
  {/if}
  <ExperienceList bind:items work={false}/>
</Section>
