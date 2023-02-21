import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponenteMainPage } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { serviciolol } from './services/lol.service';

@NgModule({
  declarations: [ComponenteMainPage, PersonajesComponent, AgregarComponent],
  imports: [CommonModule, FormsModule],
  exports: [ComponenteMainPage],
  //Servicios
  providers: [
    serviciolol
  ]
})
export class ModuloLol {}
