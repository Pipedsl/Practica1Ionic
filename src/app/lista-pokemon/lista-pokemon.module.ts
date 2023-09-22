import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPokemonPageRoutingModule } from './lista-pokemon-routing.module';

import { ListaPokemonPage } from './lista-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPokemonPageRoutingModule
  ],
  declarations: [ListaPokemonPage]
})
export class ListaPokemonPageModule {}
