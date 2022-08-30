import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '../model/hero';

import * as HeroesActions from '../state/actions/heroes.actions';
import { AppState } from '../state/model/app-state';
import {
  heroesSelector,
  isAddHeroLoadingSelector,
  isHeroesLoadingSelector,
  errorAddHeroSelector,
  errorHeroesLoadingSelector,
} from '../state/selectors/heroes';

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

  constructor(private store: Store<AppState>) {
    this.heroes$ = this.store.select(heroesSelector);
    this.isHeroesLoading$ = this.store.select(isHeroesLoadingSelector);
    this.errorHeroesLoading$ = this.store.select(errorHeroesLoadingSelector);
    this.isAddHeroLoading$ = this.store.select(isAddHeroLoadingSelector);
    this.errorAddHero$ = this.store.select(errorAddHeroSelector);
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

  // delete(hero: Hero): void {
  //   this.heroService.deleteHero(hero.id).subscribe((_) => {
  //     this.heroes = this.heroes.filter((h) => h !== hero);
  //   });
  // }
}
