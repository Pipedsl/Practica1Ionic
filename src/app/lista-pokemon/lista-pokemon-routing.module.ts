import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPokemonPage } from './lista-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPokemonPageRoutingModule {}
