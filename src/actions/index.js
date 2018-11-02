
import axios from "axios";

const ROOT_URL = `https://sample-api-78c77.firebaseio.com/tv-shows`;

export const LOAD_SERIE = "LOAD_SERIE";

export function loadSerie(serieItem) {
  const url = `${ROOT_URL}/${serieItem}`;
  const request = axios.get(url);

  return {
    type: LOAD_SERIE,
    payload: request
  };
}