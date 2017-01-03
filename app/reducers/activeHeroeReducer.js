import * as types from '../actions/ActionTypes';

export default function activeHeroeReducer(state = {}, action = {}) {
  switch (action.type) {
    case types.GET_HEROE:
      return action.heroe;
      break;
    default:
      return state;
  }
}
