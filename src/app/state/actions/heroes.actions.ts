import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/model/hero';

export const getHeroes = createAction('[Heroes] Get Heroes');

export const getHeroesSuccess = createAction(
  '[Heroes] Get Heroes Success',
  props<{ heroes: Hero[] }>()
);

export const getHeroesFailure = createAction(
  '[Heroes] Get Heroes Failure',
  props<{ error: string }>()
);
