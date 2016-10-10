import * as types from '../actions/ActionTypes';

export default function heroesReducer(state = {}, action = {}) {
  switch (action.type) {
    case types.RETRIEVE_HEROES:
      return action.heroes;
      break;
    default:
      return state;
  }
}
