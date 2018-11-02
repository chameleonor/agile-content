import { LOAD_SERIE_INFO } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_SERIE_INFO:
      // console.log(action.payload)
      return [action.payload.data, ...state];
  }
  return state;
}