import { combineReducers } from 'redux';
import heroes from './heroesReducer';
import activeHeroe from './activeHeroeReducer';

const rootReducer = combineReducers({
  heroes,
  activeHeroe
});

export default rootReducer;
