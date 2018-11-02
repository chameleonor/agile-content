import { LOAD_SERIE_EPISODES, SEASON_SELECTED } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_SERIE_EPISODES:
      return [action.payload.data, ...state];
    case SEASON_SELECTED:
      return action.payload;
  }
  return state;
}