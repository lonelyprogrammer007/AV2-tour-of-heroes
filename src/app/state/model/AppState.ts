import { Hero } from '../../model/hero';
import { HeroesState } from './heroesState';

export interface AppState {
  heroes: HeroesState;
  //   hero: Hero;
}
