<script>
  import Section from './Section.svelte';
  import ExperienceList from '../components/ExperienceList.svelte';
  import { TagNames } from '../utils/settings.js';

  let header = 'Side Projects';

  let items = [
    {
      title: 'Slack Chatbot (AWS)',
      location: 'UW Rocketry - Electrical Team',
      position: 'Programmer',
      date: 'Jan 2019',
      points: ['Improved team scheduling workflow by sending automatic updates tailored to users', 'Used bash script to handle communication via HTTP between Slack API and AWS Lambda deployed Python application'],
      tags: [TagNames.PYTHON, TagNames.AWS, TagNames.BASH],
      ignored_tags: [TagNames.PYTHON]
    },
    {
      title: 'Realtime Rocket Data Visualiser',
      location: 'UW Rocketry - Electrical Team',
      position: 'Programmer',
      date: 'Jan 2019',
      points: ['Developed data transfer protocol for realtime transmission of rocket sensor data', 'Improved analysis capabilities by creating data visualizations with Plotly'],
      tags: [TagNames.PYTHON, TagNames.ARDUINO, TagNames.DATA_VISUALIZATION, TagNames.PLOTLY],
      ignored_tags: []
    },
    {
      title: 'PyBudgeter',
      location: '',
      position: 'Personal Project',
      date: 'Jan 2019',
      points: ['Created PostgreSQL database to store salted passwords, user info, transactions', 'Developed budgeting app frontend using Kotlin'],
      tags: [TagNames.PYTHON, TagNames.FLASK, TagNames.SQL, TagNames.POSTGRESQL, TagNames.KOTLIN, TagNames.UI, TagNames.BACKEND],
      ignored_tags: []
    },
    {
      title: 'ROS Robot driver station',
      location: 'UW React',
      position: 'Controls team programmer',
      date: '2018',
      points: ['Lead the design and development of a QT application which provides a human interface to the robot simulator', 'Implemented driver station in Python handling joystick input, high-level state control, and diagnostic info.', 'Implemented Robot Operating System (ROS) message publishing/subscribing to relay critical information to and from the robot'],
      tags: [TagNames.PYTHON, TagNames.CONTROL_SYSTEMS, TagNames.DATA_VISUALIZATION, TagNames.UI, TagNames.ROS, TagNames.QT],
      ignored_tags: []
    },
    {
      title: 'Smart Headlamp',
      location: 'UTRAHacks 2018',
      position: 'Hackathon Project',
      date: '2018',
      points: ['Created gesture controlled headlamp with deep learning facial recognition via Haar Cascades in OpenCV', 'Implemented Leap Motion Control using C++', 'Set up onboard Rasperry Pi and Arduino to control motors, sensors, and lights', 'Achieved second place and Leap Motion award'],
      tags: [TagNames.OPENCV, TagNames.UI, TagNames.MACHINE_LEARNING, TagNames.CONTROL_SYSTEMS, TagNames.ARDUINO, TagNames.PYTHON, TagNames.CPP],
      ignored_tags: []
    }
  ];

</script>

<Section {header}>
  <ExperienceList {items} work={false}/>
</Section>
