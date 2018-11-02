
import axios from "axios";

const ROOT_URL = `https://sample-api-78c77.firebaseio.com`;

export const LOAD_SERIE_INFO = "LOAD_SERIE_INFO";
export const LOAD_SERIE_EPISODES = "LOAD_SERIE_EPISODES";
export const SEASON_SELECTED = "SEASON_SELECTED";

export function loadSerieInfo(serie) {
  const url = `${ROOT_URL}/tv-shows/${serie}`;
  const request = axios.get(url);

  return {
    type: LOAD_SERIE_INFO,
    payload: request
  };
}

export function loadSerieEpisodes(serie) {
  const url = `${ROOT_URL}/episodes/${serie}`;
  const request = axios.get(url);

  return {
    type: LOAD_SERIE_EPISODES,
    payload: request
  };
}

export function selectSeason(season) {
  return {
    type: SEASON_SELECTED,
    payload: season
  };
}