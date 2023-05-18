import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ConsultHeroesUseCase } from 'src/app/domain/use-cases/consult-heroes-use-case';

@Component({
  selector: 'app-dashboard-demo',
  templateUrl: './dashboard-demo.component.html',
  styleUrls: ['./dashboard-demo.component.css'],
})
export class DashboardDemoComponent
  extends DashboardComponent
  implements OnInit
{
  constructor(_consultHeroesUseCase: ConsultHeroesUseCase) {
    super(_consultHeroesUseCase);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override getHeroes(): void {
    this.heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
    ];
  }
}
