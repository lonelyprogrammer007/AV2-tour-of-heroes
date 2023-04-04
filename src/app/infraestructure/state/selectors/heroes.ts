import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../model/app-state';

export const appStateSelector = createFeatureSelector<AppState>('appState');

export const heroesSelector = createSelector(
  appStateSelector,
  (state: AppState) => state.heroes
);

export const isHeroesLoadingSelector = createSelector(
  appStateSelector,
  (state: AppState) => state.isHeroesLoading
);

export const errorHeroesLoadingSelector = createSelector(
  appStateSelector,
  (state: AppState) => state.errorHeroesLoading
);

export const isAddHeroLoadingSelector = createSelector(
  appStateSelector,
  (state: AppState) => state.isAddHeroLoading
);

export const errorAddHeroSelector = createSelector(
  appStateSelector,
  (state: AppState) => state.errorAddHero
);

export const errorDeleteHeroSelector = createSelector(
  appStateSelector,
  (state: AppState) => state.errorDeleteHero
);
