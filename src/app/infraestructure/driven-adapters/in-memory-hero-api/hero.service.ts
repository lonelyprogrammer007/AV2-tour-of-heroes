import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from 'src/app/domain/model/Hero';
import { HeroGateway } from 'src/app/domain/model/Hero/gateway';
import { MessageService } from '../../services/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService extends HeroGateway {
  private heroesUrl = 'api/heroes';
  private delay = 500;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {
    super();
  }

  getAll(): Observable<Hero[]> {
    console.warn('Service invocation')
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      delay(this.delay),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getByID(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      delay(this.delay),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  update(_hero: Hero): Observable<void> {
    return this.http.put(this.heroesUrl, _hero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${_hero.id}`)),
      delay(this.delay),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  add(_hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, _hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      delay(this.delay),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  delete(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      delay(this.delay),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  search(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((results: Hero[]): void =>
        results.length
          ? this.log(
              `found heroes matching "${term}" ➡️ number of values found ${results.length}`
            )
          : this.log(`no heroes matching "${term}"`)
      ),
      delay(this.delay),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
