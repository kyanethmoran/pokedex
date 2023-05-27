import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './modules/pokedex/pokedex/pokedex.component';

const routes: Routes = [
  { path: 'pokedex', component: PokedexComponent },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
  { path: '**', component: PokedexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
