import { Hero } from '../../model/hero';

export interface HeroesState {
  heroes: Hero[];
  isLoading: boolean;
  error: string | undefined | null;
}
