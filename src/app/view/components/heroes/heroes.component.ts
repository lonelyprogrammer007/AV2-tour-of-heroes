import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/domain/model/Hero';
import { AppState } from 'src/app/infraestructure/state/model/app-state';
import {
  errorAddHeroSelector,
  errorDeleteHeroSelector,
  errorHeroesLoadingSelector,
  heroesSelector,
  isAddHeroLoadingSelector,
  isHeroesLoadingSelector,
} from 'src/app/infraestructure/state/selectors/heroes';
import * as HeroesActions from 'src/app/infraestructure/state/actions/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  isHeroesLoading$: Observable<boolean>;
  errorHeroesLoading$: Observable<string | undefined | null>;
  isAddHeroLoading$: Observable<boolean>;
  errorAddHero$: Observable<string | undefined | null>;
  errorDeleteHero$: Observable<string | undefined | null>;

  constructor(private store: Store<AppState>) {
    this.heroes$ = this.store.select(heroesSelector);
    this.isHeroesLoading$ = this.store.select(isHeroesLoadingSelector);
    this.errorHeroesLoading$ = this.store.select(errorHeroesLoadingSelector);
    this.isAddHeroLoading$ = this.store.select(isAddHeroLoadingSelector);
    this.errorAddHero$ = this.store.select(errorAddHeroSelector);
    this.errorDeleteHero$ = this.store.select(errorDeleteHeroSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(HeroesActions.getHeroes());
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.store.dispatch(HeroesActions.addHero({ hero: { name } as Hero }));
  }

  delete(hero: Hero): void {
    this.store.dispatch(HeroesActions.deleteHero({ id: hero.id }));
  }
}
