import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { PokemonComponent } from './modules/pokemon/pokemon/pokemon.component';
import { PokedexComponent } from './modules/pokedex/pokedex/pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PokemonComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
