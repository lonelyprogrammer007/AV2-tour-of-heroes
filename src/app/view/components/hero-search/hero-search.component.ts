import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewChecked,
} from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Hero } from 'src/app/domain/model/Hero';
import { ConsultHeroesUseCase } from 'src/app/domain/use-cases/consult-heroes-use-case';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
})
export class HeroSearchComponent implements OnInit, AfterViewChecked {
  heroes$?: Observable<Hero[]>;
  private searchTerms: Subject<string> = new Subject<string>();
  @ViewChild('serachListContainer') serachListContainer!: ElementRef;

  constructor(private _consultHeroesUseCase: ConsultHeroesUseCase) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      tap((x) => console.warn(x)),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(
        (term: string): Observable<Hero[]> =>
          this._consultHeroesUseCase.searchHeroesByTerm(term)
      )
    );
  }

  ngAfterViewChecked(): void {
    const x = this.serachListContainer.nativeElement as HTMLElement;
    if (x.childNodes[0].childNodes.length > 1) {
      x.classList.remove('hidden');
    } else {
      x.classList.add('hidden');
    }
  }
}
