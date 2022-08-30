import { Hero } from 'src/app/model/hero';

export interface AppState {
  heroes: Hero[];
  isHeroesLoading: boolean;
  errorHeroesLoading: string | undefined | null;
  isAddHeroLoading: boolean;
  errorAddHero: string | null | undefined;
}
