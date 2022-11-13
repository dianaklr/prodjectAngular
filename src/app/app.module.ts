import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';

import { EpisodComponent } from './episod/episod.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';

import {MatSliderModule } from '@angular/material/slider';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatExpansionModule} from "@angular/material/expansion";

// @ts-ignore
// import {AuthGuard} from './guards';


// @ts-ignore
@NgModule ({
  imports: [
    MatSliderModule,
  ]
})


const appRoutes:Routes = [
  {path: '', component: EpisodesComponent},
  {path: 'characters', component: CharactersComponent},
  // @ts-ignore
  // {path: 'episodes', runGuardsAndResolvers: 'paramsOrQueryParamsChange', component: EpisodComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EpisodComponent,
    EpisodesComponent,
    CharacterComponent,
    CharactersComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatPaginatorModule,
    MatExpansionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}



