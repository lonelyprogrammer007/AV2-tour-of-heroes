import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes!: Observable<Hero[]>;

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.heroes;
  }

  ngOnInit(): void {
    console.warn("mount")
    !this.heroService.haveHeroes() && this.heroService.getHeroes();
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
