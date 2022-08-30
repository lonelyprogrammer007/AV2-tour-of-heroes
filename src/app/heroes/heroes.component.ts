import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

import * as HeroesActions from '../state/actions/heroes.actions';
import { AppState } from '../state/model/AppState';
import {
  isLoadingSelector,
  heroesSelector,
  errorSelector,
} from '../state/selectors';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | undefined | null>;
  heroes$: Observable<Hero[]>;

  constructor(
    private heroService: HeroService,
    private store: Store<AppState>
  ) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.heroes$ = this.store.select(heroesSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(HeroesActions.getHeroes());
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) {
  //     return;
  //   }
  //   this.heroService.addHero({ name } as Hero).subscribe((hero) => {
  //     this.heroes.push(hero);
  //   });
  // }

  // delete(hero: Hero): void {
  //   this.heroService.deleteHero(hero.id).subscribe((_) => {
  //     this.heroes = this.heroes.filter((h) => h !== hero);
  //   });
  // }
}
