import { Hero } from 'src/app/domain/model/Hero';

export interface AppState {
  heroes: Hero[];
  isHeroesLoading: boolean;
  errorHeroesLoading: string | undefined | null;
  errorDeleteHero: string | undefined | null;
  isAddHeroLoading: boolean;
  errorAddHero: string | null | undefined;
}
