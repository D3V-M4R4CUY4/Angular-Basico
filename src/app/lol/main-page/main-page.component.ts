import { Component } from '@angular/core';
import { Campeon } from '../interfaces/lol.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class ComponenteMainPage {
  nuevo: Campeon = {
    nombre: 'Blitzcrank',
    dificultad: 1,
  };

  //aqui se realiza el llamado al servicio lo cual se conoce como una injeccion de dependencias
  //Se declara el constructorde la clase actual y se le pasa el servicio que va a usar
  constructor() {}
}
