import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';
import * as HeroesActions from '../actions/heroes.actions';

@Injectable()
export class HeroesEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.getHeroes),
      mergeMap(() => {
        return this.heroService.getHeroes().pipe(
          map((heroes) => HeroesActions.getHeroesSuccess({ heroes })),
          catchError((error) =>
            of(HeroesActions.getHeroesFailure({ error: error.message }))
          )
        );
      })
    )
  );

  addHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.addHero),
      exhaustMap((action) => {
        return this.heroService.addHero(action.hero).pipe(
          map((hero) => HeroesActions.addHeroSuccess({ hero })),
          catchError((error) =>
            of(HeroesActions.addHeroFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private heroService: HeroService) {}
}
