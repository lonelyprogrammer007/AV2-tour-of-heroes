import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/Hero';
import { HeroGateway } from '../model/Hero/gateway';

@Injectable({
  providedIn: 'root',
})
export class ConsultHeroesUseCase {
  constructor(private _heroGateWay: HeroGateway) {}
  getAllHeroes(): Observable<Hero[]> {
    //TODO: En este sitio podríamos manejar las configuraciones
    //en cache
    return this._heroGateWay.getAll();
  }

  getHeroById(heroId: number): Observable<Hero> {
    return this._heroGateWay.getByID(heroId);
  }

  searchHeroesByTerm(term: string): Observable<Hero[]> {
    return this._heroGateWay.search(term);
  }
}
