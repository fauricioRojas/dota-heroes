import * as types from './ActionTypes';
import HeroesAPI from '../api/heroesAPI';

function resolveHeroes(heroes) {
  return {
    type: types.RETRIEVE_HEROES,
    heroes
  };
}

function resolveHeroe(heroe) {
  return {
    type: types.GET_HEROE,
    heroe: heroe[0]
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

export function getHeroe(id) {
  return dispatch => {
    return HeroesAPI.getHeroe(id)
      .then((heroe) => {
        dispatch(resolveHeroe(heroe));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
