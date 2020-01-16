import { writable } from 'svelte/store';

export let TagNames = {
  FRONTEND: 'Frontend web development',
  BACKEND: 'Backend web development',
  CONTROL_SYSTEMS: 'Control systems',
  PYTHON: 'Python',
  CPP: 'C++',
  DATA_ANALYSIS: 'Data Analysis',
  NLP: 'NLP',
  ARDUINO: 'Arduino',
  UI: 'UI',
  MACHINE_LEARNING: 'Machine Learning',
  ROS: 'ROS',
  OPENCV: 'OpenCV',
  SPACY: 'SpaCy',
  SVELTE: 'SvelteJS',
  FLASK: 'Flask',
  DATA_VISUALIZATION: 'Data Visualization',
  SQL: 'SQL',
  SQLITE: 'SQLite',
  ORACLEDB: 'OracleDB',
  SCSS: 'SCSS',
  CSS: 'CSS',
  HTML: 'HTML',
  JS: 'Javascript',
  PYQT: 'PyQT',
  SELENIUM: 'Selenium',
  PANDAS: 'Pandas',
  MATPLOTLIB: 'Matplotlib',
  PLOTLY: 'Plotly',
  TABLEAU: 'Tableau',
  NLTK: 'NLTK',
  QT: 'QT',
  PYQT: 'PyQT',
  REACT: 'React'
}

let defaultOrders = {
  WORKEXPERIENCE: 2,
  SIDEPROJECTS: 4,
  SKILLS: 6,
  EDUCATION: 8,
  AWARDS: 10,
  INTERESTS: 12
}
export const disable_interests_section = writable(false);
export const show_project_locations = writable(true);
export const show_project_positions = writable(false);
export const show_project_dates = writable(false);

export const swap_columns = writable(false);
export const single_column = writable(false);

export const force_use_all_employment = writable(false);
export const disable_coursework_skills = writable(false);

export const alternate_skills_display_mode = writable(false);

export const tags = writable(Object.values(TagNames));

export const orders = writable(defaultOrders);

export const display_mode = writable(false); // if true, dont show modal button

export const disable_settings_button = writable(false); // for printing / exporting to pdf
