import { writable } from 'svelte/store';

export let TagNames = {
  FRONTEND: 1,
  BACKEND: 2,
  CONTROL_SYSTEMS: 3,
  PYTHON: 4,
  CPP: 5,
  DATA_ANALYSIS: 6,
  NLP: 7,
  ARDUINO: 8
}

export let TagCombos = {
  ALL: Object.values(TagNames),
  WEBDEV: [TagNames.FRONTEND, TagNames.BACKEND]
}

let defaultOrders = {
  WORKEXPERIENCE: 2,
  SIDEPROJECTS: 4,
  SKILLS: 6,
  EDUCATION: 8,
  AWARDS: 10
}

export const show_project_locations = writable(false);
export const show_project_positions = writable(false);
export const show_project_dates = writable(false);

export const swap_columns = writable(false);
export const single_column = writable(false);

export const tags = writable(TagCombos.ALL);

export const orders = writable(defaultOrders);

export const display_mode = writable(false); // if true, dont show modal button
