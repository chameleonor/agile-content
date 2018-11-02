import { LOAD_SERIE } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_SERIE:
      // console.log(action.payload)
      return [action.payload.data, ...state];
  }
  return state;
}