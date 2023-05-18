import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './view/components/hero-detail/hero-detail.component';
import { HeroesComponent } from './view/components/heroes/heroes.component';
import { DashboardDemoComponent } from './view/components/dashboard-demo/dashboard-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
