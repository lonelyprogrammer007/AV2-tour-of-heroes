import { createReducer, on } from '@ngrx/store';

import * as HeroesActions from '../actions/heroes.actions';
import { AppState } from '../model/app-state';

export const initialState: AppState = {
  errorAddHero: undefined,
  errorHeroesLoading: undefined,
  isHeroesLoading: false,
  isAddHeroLoading: false,
  heroes: [],
};

export const heroesReducer = createReducer(
  initialState,
  on(HeroesActions.getHeroes, (state) => ({
    ...state,
    isHeroesLoading: true,
  })),
  on(HeroesActions.getHeroesSuccess, (state, { heroes }) => ({
    ...state,
    isHeroesLoading: false,
    heroes,
  })),
  on(HeroesActions.getHeroesFailure, (state, { error }) => ({
    ...state,
    isHeroesLoading: false,
    errorHeroesLoading: error,
  })),
  on(HeroesActions.addHero, (state) => ({
    ...state,
    isAddHeroLoading: true,
  })),
  on(HeroesActions.addHeroSuccess, (state, { hero }) => ({
    ...state,
    isAddHeroLoading: false,
    heroes: [...state.heroes, hero],
  })),
  on(HeroesActions.addHeroFailure, (state, { error }) => ({
    ...state,
    isAddHeroLoading: false,
    errorAddHero: error,
  }))
);
