import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { HeroService } from '../../driven-adapters/in-memory-hero-api/hero.service';
import * as HeroesActions from '../actions/heroes.actions';

@Injectable()
export class HeroesEffects {
  getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.getHeroes),
      mergeMap(() => {
        return this.heroService.getAll().pipe(
          map((heroes) => {
            return HeroesActions.getHeroesSuccess({ heroes });
          }),
          catchError((error) => {
            return of(HeroesActions.getHeroesFailure({ error: error.message }));
          })
        );
      })
    )
  );

  addHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.addHero),
      exhaustMap((action) => {
        return this.heroService.add(action.hero).pipe(
          map((hero) => HeroesActions.addHeroSuccess({ hero })),
          catchError((error) =>
            of(HeroesActions.addHeroFailure({ error: error.message }))
          )
        );
      })
    )
  );

  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.deleteHero),
      exhaustMap((action) => {
        return this.heroService.delete(action.id).pipe(
          map((_) => HeroesActions.getHeroes()),
          catchError((error) =>
            of(HeroesActions.deleteHeroFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private heroService: HeroService) {}
}
