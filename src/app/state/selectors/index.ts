import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroesState } from '../model/heroesState';

export const heroesStateSelector = createFeatureSelector<HeroesState>('heroes');

export const isLoadingSelector = createSelector(
  heroesStateSelector,
  (state: HeroesState) => state.isLoading
);

export const heroesSelector = createSelector(
  heroesStateSelector,
  (state: HeroesState) => state.heroes
);

export const errorSelector = createSelector(
  heroesStateSelector,
  (state: HeroesState) => state.error
);
