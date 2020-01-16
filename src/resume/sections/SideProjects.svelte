<script>
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import { TagNames } from '../utils/settings.js';

  let header = 'Side Projects';

  let items = [
    {
      title: 'Realtime Rocket Data Visualiser',
      location: 'UW Rocketry',
      position: 'Electrical Team',
      date: 'Jan 2019',
      points: ['Developed data transfer protocol for realtime transmission of rocket sensor data', 'Improved analysis capabilities by creating data visualisers with Plotly'],
      tags: [TagNames.PYTHON, TagNames.ARDUINO, TagNames.DATA_VISUALIZATION, TagNames.PLOTLY]
    },
    {
      title: 'PyBudgeter',
      location: 'Personal Project',
      position: undefined,
      date: 'Jan 2019',
      points: ['Created SQLite database to store salted passwords, user info, transactions', 'Developed budgeting app frontend using Kotlin'],
      tags: [TagNames.PYTHON, TagNames.FLASK, TagNames.SQL, TagNames.UI, TagNames.BACKEND]
    },
    {
      title: 'ROS Robot driver station',
      location: 'UW React',
      position: 'Controls team programmer',
      date: '2018',
      points: ['Lead the design and development of a QT application which provides a human interface the robot simulator', 'Implemented driver station in Python handling joystick input, high-level state control, and diagnostic info.', 'Implemented Robot Operating System (ROS) message publishing/subscribing to relay critical information to and from the robot'],
      tags: [TagNames.PYTHON, TagNames.CONTROL_SYSTEMS, TagNames.DATA_VISUALIZATION, TagNames.UI, TagNames.SVELTE, TagNames.ROS]
    },
    {
      title: 'Smart Headlamp',
      location: 'UTRAHacks 2018',
      position: 'Hackathon Project',
      date: '2018',
      points: ['Created gesture controlled headlamp with deep learning facial recognition via Haar Cascades in OpenCV', 'Implemented Leap Motion Control using C++', 'Set up onboard Rasperry Pi to run demos', 'Used Arduino to control motors, sensors, and lights', 'Achieved second place and Leap Motion award'],
      tags: [TagNames.OPENCV, TagNames.UI, TagNames.MACHINE_LEARNING, TagNames.CONTROL_SYSTEMS, TagNames.ARDUINO]
    }
  ];

</script>

<Section {header}>
  <ExperienceList {items} work={false}/>
</Section>
