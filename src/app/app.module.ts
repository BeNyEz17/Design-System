import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card/card.component';

import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";
import { ConnexionCardComponent } from './connexion-card/connexion-card.component';
import { ConnexionV2CardComponent } from './connexion-v2-card/connexion-v2-card.component';
import { StatCardComponent } from './stat-card/stat-card.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ConnexionCardComponent,
    ConnexionV2CardComponent,
    StatCardComponent
  ],
  imports: [
    BrowserModule,
    NgHeroiconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
