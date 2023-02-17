import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(-base)">- {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(+base)">+ {{ base }}</button>
  `,
})
export class ComponenteContador {
  public titulo: string = 'App Contador';
  numero: number = 10;

  //Tarea
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
