import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ComponenteListado {
  heroes: string[] = ['Goku', 'Venom', 'Lufy'];
  heroeBorrado: string = '';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
