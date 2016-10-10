import * as types from './ActionTypes';
import HeroesAPI from '../api/heroesAPI';

function resolveHeroes(heroes) {
  return {
    type: types.RETRIEVE_HEROES,
    heroes
  };
}

export function retrieveHeroes() {
  return dispatch => {
    return HeroesAPI.getAllHeroes()
      .then((heroes) => {
        dispatch(resolveHeroes(heroes));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
