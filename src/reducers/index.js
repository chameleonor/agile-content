import { combineReducers } from "redux";
import SerieReducer from "./reducer-serie";

const rootReducer = combineReducers({
  serie: SerieReducer
});

export default rootReducer;