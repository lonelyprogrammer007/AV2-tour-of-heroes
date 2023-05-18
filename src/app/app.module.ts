import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxJdenticonModule } from 'ngx-jdenticon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeroesComponent } from './view/components/heroes/heroes.component';
import { HeroDetailComponent } from './view/components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './view/components/hero-search/hero-search.component';
import { HeroBadgeComponent } from './view/components/hero-badge/hero-badge.component';
import { HeaderComponent } from './view/components/header/header.component';
import { heroesReducer } from './infraestructure/state/reducers/heroes.reducer';
import { HeroesEffects } from './infraestructure/state/effects/heroes.effects';
import { MessagesComponent } from './view/components/messages/messages.component';
import { DashboardComponent } from './view/components/dashboard/dashboard.component';
import { InMemoryDataService } from './infraestructure/driven-adapters/in-memory-hero-api/in-memory-data.service';
import { SharedModule } from './view/shared/shared.module';
import { HeroGateway } from './domain/model/Hero/gateway';
import { HeroService } from './infraestructure/driven-adapters/in-memory-hero-api/hero.service';
import { DashboardDemoComponent } from './view/components/dashboard-demo/dashboard-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroBadgeComponent,
    HeaderComponent,
    DashboardDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserAnimationsModule,
    SharedModule,
    NgxJdenticonModule,
    StoreModule.forRoot({ appState: heroesReducer }),
    EffectsModule.forRoot([HeroesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [{ provide: HeroGateway, useClass: HeroService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
