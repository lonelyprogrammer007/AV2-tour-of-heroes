import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/Hero';
import { HeroGateway } from '../model/Hero/gateway';

@Injectable({
  providedIn: 'root',
})
export class ManageHeroesUseCase {
  constructor(private _heroGateWay: HeroGateway) {}
  addNewHero(newHero: Hero): Observable<Hero> {
    //TODO: En este sitio podríamos manejar las configuraciones
    //en cache
    return this._heroGateWay.add(newHero);
  }

  deleteHeroById(heroId: number): Observable<Hero> {
    return this._heroGateWay.delete(heroId);
  }

  updateHero(updatedHero: Hero): Observable<void> {
    return this._heroGateWay.update(updatedHero);
  }
}
