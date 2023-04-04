import { Observable } from 'rxjs';
import { Hero } from '..';

export abstract class HeroGateway {
  abstract getAll(): Observable<Hero[]>;
  abstract getByID(id: number): Observable<Hero>;
  abstract update(_hero: Hero): Observable<void>;
  abstract add(_hero: Hero): Observable<Hero>;
  abstract delete(id: number): Observable<Hero>;
  abstract search(term: string): Observable<Hero[]>;
}
