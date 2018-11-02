import { combineReducers } from "redux";
import SerieReducer from "./reducer-serie";
import EpisodesReducer from "./reducer-episodes";
import ActiveSeason from "./reducer-active-season";

const rootReducer = combineReducers({
  serie: SerieReducer,
  episodes: EpisodesReducer,
  activeSeason: ActiveSeason
});

export default rootReducer;