import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Campeon } from '../interfaces/lol.interface';
import { serviciolol } from '../services/lol.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Campeon = {
    nombre: '',
    dificultad: 0,
  };

  constructor(private serviciolol: serviciolol) {
  
}

  /**El Outpu es otro decorador que sirve para que cuando se manejan componentes hijos
   * y estos tienen alguna funcion, se usan para que pasar esa funcionalidad al componente
   * padre
   */
  //@Output() onNuevoCampeon: EventEmitter<Campeon> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //Aqui ya luego de indicar que es lo que vamos a emitir con el @output, lo declaramos
    //this.onNuevoCampeon.emit(this.nuevo);
    this.serviciolol.agregarCampeon(this.nuevo)

    //Limpiar el formulario cuando envio datos
    this.nuevo = { nombre: '', dificultad: 0 };
  }
}
