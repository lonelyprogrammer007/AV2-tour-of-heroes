import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/domain/model/Hero';
import { ManageHeroesUseCase } from 'src/app/domain/use-cases/log-messages-use-case';
import { ConsultHeroesUseCase } from 'src/app/domain/use-cases/consult-heroes-use-case';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _manageHeroesUseCase: ManageHeroesUseCase,
    private _consultHeroesUseCase: ConsultHeroesUseCase
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this._consultHeroesUseCase
      .getHeroById(id)
      .subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.hero &&
      this._manageHeroesUseCase
        .updateHero(this.hero)
        .subscribe(() => this.goBack());
  }
}
