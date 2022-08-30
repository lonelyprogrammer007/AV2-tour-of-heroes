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
  on(HeroesActions.getHeroes, (state) => ({ ...state, isLoading: true })),
  on(HeroesActions.getHeroesSuccess, (state, { heroes }) => ({
    ...state,
    isLoading: false,
    heroes,
  })),
  on(HeroesActions.getHeroesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
