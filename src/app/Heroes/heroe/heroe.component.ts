import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class ComponenteHeroe {
  nombre: string = 'Flash';
  edad: number = 35;

  /**Getter */
  get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre= 'Yasuo'
  }

  cambiarEdad():void{
    this.edad= 40
  }
}
