import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';

import { EpisodComponent } from './episod/episod.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';

const appRoutes:Routes = [
  {path: '', component: EpisodesComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'location', component: CharactersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EpisodComponent,
    EpisodesComponent,
    CharacterComponent,
    CharactersComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}



