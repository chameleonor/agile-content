import { LOAD_SERIE_EPISODES } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_SERIE_EPISODES:
      return [action.payload.data, ...state];
  }
  return state;
}