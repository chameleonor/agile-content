import { SEASON_SELECTED } from "../actions/index";

export default function(state = null, action) {
    switch (action.type) {
        case SEASON_SELECTED:
        return action.payload;
    }

    return state;
}
  