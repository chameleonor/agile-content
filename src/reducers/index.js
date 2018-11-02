import { combineReducers } from "redux";
import SerieReducer from "./reducer-serie";
import EpisodesReducer from "./reducer-episodes";

const rootReducer = combineReducers({
  serie: SerieReducer,
  episodes: EpisodesReducer
});

export default rootReducer;