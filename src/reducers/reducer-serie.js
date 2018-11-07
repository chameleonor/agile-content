import { LOAD_SERIE_INFO } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_SERIE_INFO:
      return [action.payload.data, ...state];
  }
  return state;
}