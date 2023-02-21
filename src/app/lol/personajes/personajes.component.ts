import { Component, Input } from '@angular/core';
import { serviciolol } from '../services/lol.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  //Aqui realizamos el getter para recibir nuestros personajes desde el servicio
  get Campeones() {
    return this.serviciolol.Campeones;
  }

  /**Creacion del constructor para el servicio */
  constructor(private serviciolol: serviciolol) {}
}
