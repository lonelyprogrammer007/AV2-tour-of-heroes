import { createReducer, on } from '@ngrx/store';

import * as HeroesActions from '../actions/heroes.actions';
import { HeroesState } from '../model/heroesState';

export const initialState: HeroesState = {
  error: undefined,
  heroes: [],
  isLoading: false,
};

export const heroesReducer = createReducer(
  initialState,
  on(HeroesActions.getHeroes, (state) => ({ ...state, isLoading: true }))
);
