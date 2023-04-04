import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/domain/model/Hero';
import { ConsultHeroesUseCase } from 'src/app/domain/use-cases/consult-heroes-use-case';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private _consultHeroesUseCase: ConsultHeroesUseCase) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._consultHeroesUseCase
      .getAllHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
