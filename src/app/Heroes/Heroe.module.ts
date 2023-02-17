import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponenteHeroe } from './heroe/heroe.component';
import { ComponenteListado } from './listado/listado.component';

@NgModule({
  declarations: [ComponenteHeroe, ComponenteListado],
  exports: [ComponenteListado],
  imports: [
    CommonModule
  ],
})
export class ModuloHeroes {}
