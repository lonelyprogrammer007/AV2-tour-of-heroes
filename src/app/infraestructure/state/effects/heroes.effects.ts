import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';
import * as HeroesActions from '../actions/heroes.actions';

@Injectable()
export class HeroesEffects {
  getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesActions.getHeroes),
      mergeMap(() => {
        return this.heroService.getHeroes().pipe(
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
        return this.heroService.addHero(action.hero).pipe(
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
        return this.heroService.deleteHero(action.id).pipe(
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
