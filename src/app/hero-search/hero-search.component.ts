import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';

import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  heroes$?: Observable<Hero[]>;
  private searchTerms: Subject<string> = new Subject<string>();
  @ViewChild('serachListContainer') serachListContainer!: ElementRef;

  constructor(private heroService: HeroService) {}

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
          this.heroService.searchHeroes(term)
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
